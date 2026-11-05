#!/usr/bin/env python3
"""Reject answer-bearing content left outside an assignment's solution locks."""
from pathlib import Path
import re
import sys
import xml.etree.ElementTree as ET


ROOT = Path(__file__).resolve().parents[1]
LOCK = re.compile(r'<!--\s*SOLUTION-LOCKED\s+assignment="')


def check(path):
    text = path.read_text(encoding="utf-8")
    if not LOCK.search(text):
        return []
    # Parsing drops the locked XML comments, just as the book build does.
    root = ET.fromstring(text)
    errors = []
    for exercise in root.iter("exercise"):
        key = exercise.get("{http://www.w3.org/XML/1998/namespace}id", "unnamed exercise")
        statement = exercise.find("statement")
        if statement is not None and "correct" in statement.attrib:
            errors.append(f"{path.name}: {key}: statement/@correct generates an unlocked answer")
        for tag in ("answer", "solution", "hint", "feedback"):
            if exercise.find(tag) is not None:
                errors.append(f"{path.name}: {key}: unlocked <{tag}> in a locked worksheet")
    return errors


def main():
    paths = [Path(p) for p in sys.argv[1:]] or sorted((ROOT / "source").glob("assignment-*.ptx"))
    errors = [error for path in paths for error in check(path)]
    if errors:
        print("\n".join(errors), file=sys.stderr)
        return 1
    print("Solution locks checked: no exposed answers in locked assignments.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
