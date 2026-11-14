from pathlib import Path
import re
import sys
import tempfile
import unittest
import xml.etree.ElementTree as ET


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
from check_solution_locks import check


LOCKED = '<!-- SOLUTION-LOCKED assignment="7" due="2026-11-06"\n'
END = '\nEND SOLUTION-LOCKED -->'
RELEASE = re.compile(r'^\s*(?:<!--\s*SOLUTION-LOCKED\b[^\n]*|END SOLUTION-LOCKED\s*-->)\s*$', re.M)


class SolutionLockTests(unittest.TestCase):
    def check_text(self, exercise):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "worksheet.ptx"
            path.write_text('<worksheet>' + exercise + LOCKED + '<solution/>' + END + '</worksheet>')
            return check(path)

    def test_catches_automatically_generated_true_false_answer(self):
        errors = self.check_text('<exercise><statement correct="no"><p>A claim.</p></statement></exercise>')
        self.assertTrue(any("statement/@correct" in error for error in errors))

    def test_catches_unlocked_explanations_and_answers(self):
        for tag in ("answer", "solution", "hint", "feedback"):
            with self.subTest(tag=tag):
                self.assertTrue(self.check_text(f'<exercise><statement/><{tag}><p>Revealed.</p></{tag}></exercise>'))

    def test_released_worksheet_is_allowed(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "released.ptx"
            path.write_text('<worksheet><exercise><statement correct="yes"/><feedback><p>Proof.</p></feedback></exercise></worksheet>')
            self.assertEqual(check(path), [])

    def test_all_current_assignment_locks(self):
        for path in sorted((ROOT / "source").glob("assignment-*.ptx")):
            with self.subTest(path=path.name):
                self.assertEqual(check(path), [])

    def test_true_false_answers_appear_only_after_release(self):
        problems = {
            "assignment-9-tangent-planes.ptx": {"rf-8-a": "False.", "rev-gr-3": "True."},
        }
        for name, expected in problems.items():
            text = (ROOT / "source" / name).read_text()
            locked = ET.fromstring(text)
            released = ET.fromstring(RELEASE.sub("", text))
            for key, answer in expected.items():
                with self.subTest(problem=key):
                    selector = f".//exercise[@xml:id='{key}']"
                    namespaces = {"xml": "http://www.w3.org/XML/1998/namespace"}
                    before = locked.find(selector, namespaces)
                    after = released.find(selector, namespaces)
                    self.assertIsNotNone(before.find("statement"))
                    self.assertEqual(before.find("statement").attrib, {})
                    for tag in ("answer", "solution", "hint", "feedback"):
                        self.assertIsNone(before.find(tag))
                    self.assertEqual("".join(before.find("statement").itertext()), "".join(after.find("statement").itertext()))
                    self.assertEqual("".join(after.find("answer").itertext()).strip(), answer)
                    self.assertIsNotNone(after.find("solution/p"))


    def test_released_true_false_answers_are_shown(self):
        released = {
            "assignment-7-functions-several-variables.ptx": {"rm2-lim-1-a": "False.", "rm2-lim-1-c": "False."},
            "assignment-8-chain-rule.ptx": {"rev-tp-5": "True."},
        }
        for name, expected in released.items():
            text = (ROOT / "source" / name).read_text()
            self.assertNotRegex(text, RELEASE)
            root = ET.fromstring(text)
            for key, answer in expected.items():
                with self.subTest(problem=key):
                    exercise = root.find(f".//exercise[@xml:id='{key}']", {"xml": "http://www.w3.org/XML/1998/namespace"})
                    self.assertEqual("".join(exercise.find("answer").itertext()).strip(), answer)
                    self.assertIsNotNone(exercise.find("solution/p"))


if __name__ == "__main__":
    unittest.main()
