"""The unit normal to the plane through A(1,-1,2), B(2,0,-1), C(0,-2,3)
(the cross-product section, example "Computing a vector perpendicular to
two other vectors").

Renders to assets/videos/normal_vector_3d_1080p.mp4:

    manim -r 1920,1080 --fps 30 --disable_caching -o normal_vector_3d_1080p \
        assets/manim/normal_vector_3d.py NormalVector3D

Design notes:

* The frame.  The scene is drawn in a rotated coordinate system whose
  z-axis is the unit normal n = AB x AC / |AB x AC| and whose x-axis is
  along AB, so the plane through A, B, C is the horizontal plane and n
  points straight up on screen.  In these coordinates
  A = (0,0,0), B = (sqrt 11, 0, 0), C = (-5/sqrt 11, 4/sqrt 22, 0).
  No axes are drawn, so the rotation changes nothing the viewer is told.

* The plane patch is a rectangle in that horizontal plane, padded around
  the bounding box of the three points, so all three points lie on it
  (the earlier version of this video left C hanging outside the patch).

* Pace.  Every step is shown, labelled, and then left on screen for a
  beat before the next one; the closing orbit of the camera is slow.
  Total length about 40 s, roughly twice the earlier version.
"""

from manim import *
import numpy as np

# ---- the geometry, in the original coordinates -------------------------------
A0 = np.array([1.0, -1.0, 2.0])
B0 = np.array([2.0, 0.0, -1.0])
C0 = np.array([0.0, -2.0, 3.0])
AB0 = B0 - A0                       # <1, 1, -3>
AC0 = C0 - A0                       # <-1, -1, 1>
N0 = np.cross(AB0, AC0)             # <-2, 2, 0>

# ---- the rotated frame: e1 along AB, e3 = n, e2 = e3 x e1 --------------------
e1 = AB0 / np.linalg.norm(AB0)
e3 = N0 / np.linalg.norm(N0)
e2 = np.cross(e3, e1)
R = np.vstack([e1, e2, e3])         # rows: new coordinates = R @ (P - A)

SCALE = 1.15


def new(P):
    return SCALE * (R @ (P - A0))


A, B, C = new(A0), new(B0), new(C0)
pts = np.array([A, B, C])
PAD = 0.9
xmin, ymin = pts[:, :2].min(axis=0) - PAD
xmax, ymax = pts[:, :2].max(axis=0) + PAD
CENTER = np.array([(xmin + xmax) / 2, (ymin + ymax) / 2, 0.0])

CENTER = CENTER + np.array([0.0, 0.0, 0.7])   # scene sits a little low
A, B, C = A - CENTER, B - CENTER, C - CENTER
corners = [np.array([x, y, 0.0]) - CENTER
           for x, y in [(xmin, ymin), (xmax, ymin), (xmax, ymax), (xmin, ymax)]]
N_LEN = 1.6                                   # drawn length of n
N_TIP = A + np.array([0, 0, N_LEN])

Y_AB, B_AC, R_N = YELLOW, "#58C4DD", "#FC6255"


def arrow3d(start, end, color, head=0.3, radius=0.085):
    """A thick line with a cone head.  (Arrow3D is a cylinder plus a cone,
    and three of them cost about two seconds a frame in the cairo renderer;
    this is twenty times cheaper and looks the same.)"""
    d = end - start
    u = d / np.linalg.norm(d)
    shaft = Line(start, end - head * u, color=color, stroke_width=6)
    tip = Cone(base_radius=radius, height=head, direction=u, resolution=8,
               fill_color=color, fill_opacity=1, stroke_width=0,
               checkerboard_colors=False).shift(end)
    return VGroup(shaft, tip)


def right_angle(corner, u, v, s=0.22):
    """A small square at `corner` in the plane of the unit vectors u, v."""
    return VMobject(stroke_color=WHITE, stroke_width=2).set_points_as_corners(
        [corner + s * u, corner + s * u + s * v, corner + s * v])


class NormalVector3D(ThreeDScene):
    def construct(self):
        tmpl = TexTemplate()
        tmpl.add_to_preamble(r"\usepackage{amsmath,amssymb}")

        # (No frame_center shift: it would move the fixed-in-frame panel too.)
        self.set_camera_orientation(phi=68 * DEGREES, theta=-50 * DEGREES,
                                    zoom=0.92)

        # -- the plane and the three points ----------------------------------
        plane = Polygon(*corners, fill_color=GREY_B, fill_opacity=0.28,
                        stroke_color=GREY_B, stroke_width=1.5)
        dots = VGroup(*[Dot3D(P, radius=0.07, color=WHITE) for P in (A, B, C)])
        labels = VGroup(
            MathTex("A", tex_template=tmpl).move_to(A + np.array([0.15, -0.4, 0])),
            MathTex("B", tex_template=tmpl).move_to(B + np.array([0.35, -0.3, 0])),
            MathTex("C", tex_template=tmpl).move_to(C + np.array([-0.35, 0.3, 0])),
        )
        self.add_fixed_orientation_mobjects(*labels)

        self.play(FadeIn(plane), run_time=2)
        self.play(FadeIn(dots), FadeIn(labels), run_time=1.5)
        self.wait(1.5)

        # -- the formula panel, fixed to the frame ---------------------------
        f_ab = MathTex(r"\overrightarrow{AB} = \langle 1,\,1,\,-3\rangle",
                       color=Y_AB, tex_template=tmpl)
        f_ac = MathTex(r"\overrightarrow{AC} = \langle -1,\,-1,\,1\rangle",
                       color=B_AC, tex_template=tmpl)
        f_x = MathTex(r"\overrightarrow{AB}\times\overrightarrow{AC}"
                      r" = \langle -2,\,2,\,0\rangle", tex_template=tmpl)
        f_n = MathTex(r"\hat{\mathbf n} = \frac{\overrightarrow{AB}\times"
                      r"\overrightarrow{AC}}{\bigl\|\overrightarrow{AB}\times"
                      r"\overrightarrow{AC}\bigr\|}"
                      r" = \Bigl\langle -\tfrac{1}{\sqrt2},\,\tfrac{1}{\sqrt2},"
                      r"\,0\Bigr\rangle", color=R_N, tex_template=tmpl)
        panel = VGroup(f_ab, f_ac, f_x, f_n).scale(0.64)
        panel.arrange(DOWN, aligned_edge=LEFT, buff=0.35)
        panel.to_corner(UL, buff=0.4)
        self.add_fixed_in_frame_mobjects(panel)
        self.remove(panel)

        # -- AB ---------------------------------------------------------------
        ab = arrow3d(A, B, Y_AB)
        ab_lab = MathTex(r"\overrightarrow{AB}", color=Y_AB, tex_template=tmpl)
        ab_lab.move_to((A + B) / 2 + np.array([0, -0.5, 0]))
        self.add_fixed_orientation_mobjects(ab_lab)
        self.remove(ab_lab)
        self.play(Create(ab), run_time=2)
        self.play(FadeIn(ab_lab), Write(f_ab), run_time=1.5)
        self.wait(1.5)

        # -- AC ---------------------------------------------------------------
        ac = arrow3d(A, C, B_AC)
        ac_lab = MathTex(r"\overrightarrow{AC}", color=B_AC, tex_template=tmpl)
        # off the far side of AC, away from A and B
        ac_lab.move_to((A + C) / 2 + np.array([-0.3, -0.55, 0]))
        self.add_fixed_orientation_mobjects(ac_lab)
        self.remove(ac_lab)
        self.play(Create(ac), run_time=2)
        self.play(FadeIn(ac_lab), Write(f_ac), run_time=1.5)
        self.wait(1.5)

        # -- the cross product -------------------------------------------------
        self.play(Write(f_x), run_time=2.5)
        self.wait(1.5)

        # -- the unit normal --------------------------------------------------
        n = arrow3d(A, N_TIP, R_N)
        n_lab = MathTex(r"\hat{\mathbf n}", color=R_N, tex_template=tmpl)
        n_lab.move_to(N_TIP + np.array([0.35, 0, 0.1]))
        self.add_fixed_orientation_mobjects(n_lab)
        self.remove(n_lab)
        u_ab = (B - A) / np.linalg.norm(B - A)
        u_ac = (C - A) / np.linalg.norm(C - A)
        up = np.array([0, 0, 1.0])
        angles = VGroup(right_angle(A, u_ab, up), right_angle(A, u_ac, up))
        self.play(Create(n), run_time=2)
        self.play(FadeIn(n_lab), Create(angles), run_time=1.2)
        self.play(Write(f_n), run_time=3)
        self.wait(2)

        # -- a slow look around -------------------------------------------------
        self.begin_ambient_camera_rotation(rate=0.11)
        self.wait(16)
        self.stop_ambient_camera_rotation()
        self.wait(2)
