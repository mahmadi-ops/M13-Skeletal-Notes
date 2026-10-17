var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  These are skeletal notes. Every section carries the definitions, the statements of the theorems, and the outline of each example and each proof but the details are left blank, and we fill them in together in class. What you are holding is the scaffolding of the course; the mathematics gets written into it as we do it.  So bring them with you. Before each class, print the section we are about to cover, or download it and annotate it on a tablet the PDF button in the navigation bar gives you the whole book as one file to print from. Then complete the blanks in class as we work through the material. A page you filled in yourself is worth more later than any set of notes handed to you finished.  Everything for this course lives here: the notes themselves, the assignments, the review problems for each exam, and the solutions. Each item is added as we reach it, so check back regularly rather than assuming a page is final. Solutions to an assignment are posted only after its due date has passed; the review sets are posted the same way.  The problems are all gathered in the Exercises chapter. There are ten assignments, which are graded, and four sets of review problems, which are not the review sets collect everything the assignments left over, and they are fair game on an exam. Assignments are due at 11:59 PM on the day shown below.     Assignments  Due day, at 11:59 PM    1, 2, 4, 5, 7, 8, 10  Friday    3, 6, 9  Wednesday (exam weeks 3, 6, and 9)     You hand your work in through Gradescope, not through this site. The steps how to upload a scan or a photo of your written solutions, and how to tell Gradescope which page holds which problem are under Submitting Your Assignments in Gradescope in the course syllabus. Read them once before the first assignment is due; a submission with the pages mismatched is the most common way points get lost for reasons that have nothing to do with the mathematics.  One more thing worth knowing before you start: each of the ten assignment pages carries a Socratic AI tutor that will coach you when you are stuck, without ever giving an answer away. How it works, what it will and will not do, and what to keep out of the chat are all set out under Using the AI Tutor, at the top of the Exercises chapter.  "
},
{
  "id": "frontmatter-3-2",
  "level": "2",
  "url": "frontmatter-3.html#frontmatter-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "skeletal "
},
{
  "id": "sec-skel-hyp-definitions",
  "level": "1",
  "url": "sec-skel-hyp-definitions.html",
  "type": "Section",
  "number": "1.1",
  "title": "Definitions and Derivatives",
  "body": " Definitions and Derivatives  The hyperbolic cosine is defined as   and the hyperbolic sine is defined as   Find the derivatives and by differentiating the two definitions.     Blank workspace for a handwritten derivation.    "
},
{
  "id": "sec-skel-hyp-definitions-2",
  "level": "2",
  "url": "sec-skel-hyp-definitions.html#sec-skel-hyp-definitions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperbolic cosine "
},
{
  "id": "sec-skel-hyp-definitions-3",
  "level": "2",
  "url": "sec-skel-hyp-definitions.html#sec-skel-hyp-definitions-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperbolic sine "
},
{
  "id": "sec-skel-hyp-graphs",
  "level": "1",
  "url": "sec-skel-hyp-graphs.html",
  "type": "Section",
  "number": "1.2",
  "title": "Graph, Domain, and Range of <span class=\"process-math\">\\(\\cosh x\\)<\/span> and <span class=\"process-math\">\\(\\sinh x\\)<\/span>",
  "body": " Graph, Domain, and Range of and  Since and are built from the two exponentials and , their graphs are easiest to understand by sketching those exponentials first. See and .   The graph of . The curve is squeezed between the two exponentials and , approaching the first as and the second as .     s(t) = (t, (exp(t) - exp(-t))\/2)  ep(t) = (t, exp(t)\/2)  em(t) = (t, -exp(-t)\/2)        y=\\sinh x    y=\\frac12 e^{x}    y=-\\frac12 e^{-x}               From the graph, read off the domain, the range, and the symmetry of .     Blank box with rows labelled Domain, Range, and Symmetry, for observations about hyperbolic sine.    The graph suggests that hugs when is large and positive, and hugs when is large and negative. Confirm this observation.     Blank workspace for confirming the limiting behaviour of hyperbolic sine by hand.     The graph of . The curve is the sum of the two exponentials and , so it lies above both and has its minimum value at .     c(t) = (t, (exp(t) + exp(-t))\/2)  ep(t) = (t, exp(t)\/2)  em(t) = (t, exp(-t)\/2)         y=\\cosh x    y=\\frac12 e^{x}    y=\\frac12 e^{-x}    1                From the graph, read off the domain, the range, and the symmetry of .     Blank box with rows labelled Domain, Range, and Symmetry, for observations about hyperbolic cosine.    The graph suggests that hugs when is large and positive, and hugs when is large and negative, while never dropping below . Confirm these observations.     Blank workspace for confirming the limiting behaviour of hyperbolic cosine by hand.    "
},
{
  "id": "fig-skel-hyp-sinh-graph",
  "level": "2",
  "url": "sec-skel-hyp-graphs.html#fig-skel-hyp-sinh-graph",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " The graph of . The curve is squeezed between the two exponentials and , approaching the first as and the second as .     s(t) = (t, (exp(t) - exp(-t))\/2)  ep(t) = (t, exp(t)\/2)  em(t) = (t, -exp(-t)\/2)        y=\\sinh x    y=\\frac12 e^{x}    y=-\\frac12 e^{-x}              "
},
{
  "id": "fig-skel-hyp-cosh-graph",
  "level": "2",
  "url": "sec-skel-hyp-graphs.html#fig-skel-hyp-cosh-graph",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " The graph of . The curve is the sum of the two exponentials and , so it lies above both and has its minimum value at .     c(t) = (t, (exp(t) + exp(-t))\/2)  ep(t) = (t, exp(t)\/2)  em(t) = (t, exp(-t)\/2)         y=\\cosh x    y=\\frac12 e^{x}    y=\\frac12 e^{-x}    1               "
},
{
  "id": "sec-skel-hyp-identities",
  "level": "1",
  "url": "sec-skel-hyp-identities.html",
  "type": "Section",
  "number": "1.3",
  "title": "Identities and Other Hyperbolic Functions",
  "body": " Identities and Other Hyperbolic Functions  A similar identity to the trigonometric identity holds for the hyperbolic functions:   As you already know, any point on the circumference of the unit circle can be described in terms of sine and cosine of an angle , i.e. and , which results in the trigonometric identity . Mark this on the circle in .   The unit circle . Mark a point on it, and draw the right triangle with legs and and hypotenuse .     circ(t) = (cos(t), sin(t))               Similarly, any point on the right branch of the hyperbola can be represented as and , where . This follows directly from identity , i.e. . Mark this on the hyperbola in .   The hyperbola . Mark a point on the right branch, and draw the segments from the origin to and to the vertex.     hr(t) = ((exp(t) + exp(-t))\/2, (exp(t) - exp(-t))\/2)  hl(t) = (-(exp(t) + exp(-t))\/2, (exp(t) - exp(-t))\/2)                  Parametrizing the Left Branch   Both branches of appear in , but the parametrization traces only the right one, since for every . How would you parametrize the left branch, where ?   Your answer and reasoning.      Blank workspace for a handwritten answer.      The identity is unaffected if you change the sign of the first coordinate.     True or False   The parametrization , , , also traces the left branch of .   True or false? Your answer and reasoning.      Blank workspace for a handwritten answer.      As you might have guessed, the rest of the hyperbolic functions are defined as follows.   "
},
{
  "id": "fig-skel-hyp-circle-grid",
  "level": "2",
  "url": "sec-skel-hyp-identities.html#fig-skel-hyp-circle-grid",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " The unit circle . Mark a point on it, and draw the right triangle with legs and and hypotenuse .     circ(t) = (cos(t), sin(t))              "
},
{
  "id": "fig-skel-hyp-hyperbola-grid",
  "level": "2",
  "url": "sec-skel-hyp-identities.html#fig-skel-hyp-hyperbola-grid",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": " The hyperbola . Mark a point on the right branch, and draw the segments from the origin to and to the vertex.     hr(t) = ((exp(t) + exp(-t))\/2, (exp(t) - exp(-t))\/2)  hl(t) = (-(exp(t) + exp(-t))\/2, (exp(t) - exp(-t))\/2)                "
},
{
  "id": "skel-checkpoint-hyp-left-branch",
  "level": "2",
  "url": "sec-skel-hyp-identities.html#skel-checkpoint-hyp-left-branch",
  "type": "Checkpoint",
  "number": "1.3.3",
  "title": "Parametrizing the Left Branch.",
  "body": " Parametrizing the Left Branch   Both branches of appear in , but the parametrization traces only the right one, since for every . How would you parametrize the left branch, where ?   Your answer and reasoning.      Blank workspace for a handwritten answer.      The identity is unaffected if you change the sign of the first coordinate.   "
},
{
  "id": "skel-checkpoint-hyp-left-branch-downward",
  "level": "2",
  "url": "sec-skel-hyp-identities.html#skel-checkpoint-hyp-left-branch-downward",
  "type": "Checkpoint",
  "number": "1.3.4",
  "title": "True or False.",
  "body": " True or False   The parametrization , , , also traces the left branch of .   True or false? Your answer and reasoning.      Blank workspace for a handwritten answer.     "
},
{
  "id": "sec-skel-hyp-identity-list",
  "level": "1",
  "url": "sec-skel-hyp-identity-list.html",
  "type": "Section",
  "number": "1.4",
  "title": "Hyperbolic Identities",
  "body": " Hyperbolic Identities  Below are some identities that you may find useful in some problems, however, you are not expected to memorize them. We will prove some of them as an exercise later. Each hyperbolic identity is listed next to the trigonometric identity it resembles.   Hyperbolic identities and their trigonometric counterparts.    Hyperbolic  Trigonometric                             Notice the pattern: each hyperbolic identity is its trigonometric counterpart with the sign changed wherever two sines (or two tangents) are multiplied together.   Computing   Show that the inverse hyperbolic cosine can be written in terms of the natural logarithm as    Solution. (Restrict to so that it is one-to-one, set , and solve for .)     Blank workspace for a handwritten solution.       An integral via a hyperbolic substitution   Use hyperbolic functions to calculate the integral  Hint: Similar to , we have .   Solution.      Blank workspace for a handwritten solution.      "
},
{
  "id": "skel-table-hyp-trig-identities",
  "level": "2",
  "url": "sec-skel-hyp-identity-list.html#skel-table-hyp-trig-identities",
  "type": "Table",
  "number": "1.4.1",
  "title": "Hyperbolic identities and their trigonometric counterparts.",
  "body": " Hyperbolic identities and their trigonometric counterparts.    Hyperbolic  Trigonometric                            "
},
{
  "id": "example-skel-hyp-arccosh",
  "level": "2",
  "url": "sec-skel-hyp-identity-list.html#example-skel-hyp-arccosh",
  "type": "Example",
  "number": "1.4.2",
  "title": "Computing <span class=\"process-math\">\\(\\cosh^{-1}(x)\\)<\/span>.",
  "body": " Computing   Show that the inverse hyperbolic cosine can be written in terms of the natural logarithm as    Solution. (Restrict to so that it is one-to-one, set , and solve for .)     Blank workspace for a handwritten solution.     "
},
{
  "id": "example-skel-hyp-integral",
  "level": "2",
  "url": "sec-skel-hyp-identity-list.html#example-skel-hyp-integral",
  "type": "Example",
  "number": "1.4.3",
  "title": "An integral via a hyperbolic substitution.",
  "body": " An integral via a hyperbolic substitution   Use hyperbolic functions to calculate the integral  Hint: Similar to , we have .   Solution.      Blank workspace for a handwritten solution.     "
},
{
  "id": "subsec-skel-hyp-catenary",
  "level": "1",
  "url": "subsec-skel-hyp-catenary.html",
  "type": "Subsection",
  "number": "1.5.1",
  "title": "*Hanging Cables and the Catenary",
  "body": " *Hanging Cables and the Catenary   Starred section. This one is for the interested reader. It will not be examined.  If a heavy flexible cable (such as a telephone line, a power line, or a chain) hangs freely from two supports, it settles into a curve called a catenary . Contrary to a common guess, this curve is not a parabola; it is the graph of a hyperbolic cosine, where is measured horizontally from the lowest point of the cable, so that the -axis is the axis of symmetry and the lowest point sits at height . Sliding the curve up or down, as in , only changes where we draw the -axis.  The shape comes out of a balance of forces. Look at the piece of cable running from the lowest point to a point where the cable makes an angle with the horizontal, and let be the arc length of that piece. Three forces act on it: the tension at the lowest point, which is horizontal; the tension along the cable at the other end; and the weight of the piece, where is the mass per unit length; see . Balancing the horizontal and the vertical components gives    The three forces on the piece of cable of arc length running from the lowest point of the cable to a point where the cable makes an angle with the horizontal. The lowest point sits at height , and the supports are a distance apart. (After Fig. 1 of Behroozi, cited below.)     c(x) = (exp(x) + exp(-x))\/2  P = (1.1, 1.6685)        \\theta   T  \\lambda g s  T_0     a   s    b                 The quantity has units of length, and dividing the second equation by the first eliminates and leaves . Since the cable makes the angle with the horizontal, is its slope, so Now use the arc length element and separate the variables: where the constant of integration vanishes because at .  Solving for gives , and therefore One last integration, together with , produces the catenary equation .  Two things are worth noticing. First, is a pure scale factor: written as , the equation shows that every catenary is a scaled copy of the single curve , in exactly the same way that every circle is a scaled copy of the unit circle; shows four of them. Second, is fixed by the cable itself. If the cable has half-length and its two supports are a distance apart, then putting at in gives which determines (numerically) from the two lengths. Since , a cable pulled tight has a large and hangs almost flat, while a slack one has a small and sags sharply.   The catenaries for . Each curve meets the -axis at its own value of , and all four are scaled copies of the single curve . (After Fig. 2 of Behroozi, cited below.)     ca(x) = 0.5*(exp(x\/0.5) + exp(-x\/0.5))\/2  cb(x) = (exp(x) + exp(-x))\/2  cc(x) = 2*(exp(x\/2) + exp(-x\/2))\/2  cd(x) = 4*(exp(x\/4) + exp(-x\/4))\/2             a=0.5    a=1    a=2    a=4                A worked example of a hanging cable, in which we find the slope of the cable and the angle at which it meets its pole, appears in .  The derivation above follows F. Behroozi, In Praise of the Catenary , The Physics Teacher  56 , 214 217 (2018), which also discusses the sense in which all catenaries are similar to one another and suggests simple classroom demonstrations.  "
},
{
  "id": "subsec-skel-hyp-catenary-3",
  "level": "2",
  "url": "subsec-skel-hyp-catenary.html#subsec-skel-hyp-catenary-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "catenary "
},
{
  "id": "fig-skel-hyp-catenary-forces",
  "level": "2",
  "url": "subsec-skel-hyp-catenary.html#fig-skel-hyp-catenary-forces",
  "type": "Figure",
  "number": "1.5.1",
  "title": "",
  "body": " The three forces on the piece of cable of arc length running from the lowest point of the cable to a point where the cable makes an angle with the horizontal. The lowest point sits at height , and the supports are a distance apart. (After Fig. 1 of Behroozi, cited below.)     c(x) = (exp(x) + exp(-x))\/2  P = (1.1, 1.6685)        \\theta   T  \\lambda g s  T_0     a   s    b                "
},
{
  "id": "fig-skel-hyp-catenary-family",
  "level": "2",
  "url": "subsec-skel-hyp-catenary.html#fig-skel-hyp-catenary-family",
  "type": "Figure",
  "number": "1.5.2",
  "title": "",
  "body": " The catenaries for . Each curve meets the -axis at its own value of , and all four are scaled copies of the single curve . (After Fig. 2 of Behroozi, cited below.)     ca(x) = 0.5*(exp(x\/0.5) + exp(-x\/0.5))\/2  cb(x) = (exp(x) + exp(-x))\/2  cc(x) = 2*(exp(x\/2) + exp(-x\/2))\/2  cd(x) = 4*(exp(x\/4) + exp(-x\/4))\/2             a=0.5    a=1    a=2    a=4               "
},
{
  "id": "subsec-skel-hyp-catenary-11",
  "level": "2",
  "url": "subsec-skel-hyp-catenary.html#subsec-skel-hyp-catenary-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "56 "
},
{
  "id": "subsec-skel-hyp-celestial",
  "level": "1",
  "url": "subsec-skel-hyp-celestial.html",
  "type": "Subsection",
  "number": "1.5.2",
  "title": "Celestial Mechanics",
  "body": " Celestial Mechanics  If a comet has enough speed, it can escape the gravitational pull of the sun, in which case one possible trajectory is a hyperbolic trajectory. The comet 2I\/Borisov , discovered in 2019, is the first comet known to have come from outside our solar system. It was moving too fast for the sun to capture it, so its path is a hyperbola rather than an ellipse: it swung around the sun once and is now on its way back out. See .   The interstellar comet 2I\/Borisov, photographed by the Hubble Space Telescope in 2019. Because its speed exceeds the escape speed of the sun, its trajectory is a hyperbola and it passes through the solar system only once. (Image: NASA, ESA and D. Jewitt (UCLA).)   A fuzzy blue comet with a bright core and a broad tail sweeping to the upper right, against a black background.    "
},
{
  "id": "fig-skel-hyp-comet-borisov",
  "level": "2",
  "url": "subsec-skel-hyp-celestial.html#fig-skel-hyp-comet-borisov",
  "type": "Figure",
  "number": "1.5.3",
  "title": "",
  "body": " The interstellar comet 2I\/Borisov, photographed by the Hubble Space Telescope in 2019. Because its speed exceeds the escape speed of the sun, its trajectory is a hyperbola and it passes through the solar system only once. (Image: NASA, ESA and D. Jewitt (UCLA).)   A fuzzy blue comet with a bright core and a broad tail sweeping to the upper right, against a black background.   "
},
{
  "id": "subsec-skel-hyp-gateway-arch",
  "level": "1",
  "url": "subsec-skel-hyp-gateway-arch.html",
  "type": "Subsection",
  "number": "1.5.3",
  "title": "The Gateway Arch",
  "body": " The Gateway Arch   The Gateway Arch in St. Louis, Missouri (designed in 1963 and completed in 1965) is a catenary turned upside down: flipping the curve converts the tension carried by a hanging chain into pure compression, which is what masonry and steel carry best. The geometric form of the gateway was set by Hannskari Bandel (structural engineer) and was expressed in the blueprints by the equation where , , and are constants. The arch is slightly flattened compared with a uniform hanging chain, because it is thicker at the base than at the top. It stands 630 feet tall and 630 feet wide at the base; the National Park Service describes its construction and its geometry at Gateway Arch National Park . See .   The Gateway Arch in St. Louis, Missouri. Its centerline follows the curve , an upside-down catenary. (Photograph by John Margolies, 1988; John Margolies Roadside America photograph archive, Library of Congress, Prints and Photographs Division.)   The stainless steel Gateway Arch rising from a line of trees against a clear blue sky, curving up to a rounded peak and back down.    "
},
{
  "id": "subsec-skel-hyp-gateway-arch-2",
  "level": "2",
  "url": "subsec-skel-hyp-gateway-arch.html#subsec-skel-hyp-gateway-arch-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The Gateway Arch in St. Louis, Missouri "
},
{
  "id": "fig-skel-hyp-gateway-arch",
  "level": "2",
  "url": "subsec-skel-hyp-gateway-arch.html#fig-skel-hyp-gateway-arch",
  "type": "Figure",
  "number": "1.5.4",
  "title": "",
  "body": " The Gateway Arch in St. Louis, Missouri. Its centerline follows the curve , an upside-down catenary. (Photograph by John Margolies, 1988; John Margolies Roadside America photograph archive, Library of Congress, Prints and Photographs Division.)   The stainless steel Gateway Arch rising from a line of trees against a clear blue sky, curving up to a rounded peak and back down.   "
},
{
  "id": "sec-skel-hyp-more-examples",
  "level": "1",
  "url": "sec-skel-hyp-more-examples.html",
  "type": "Section",
  "number": "1.6",
  "title": "Further Examples",
  "body": " Further Examples   A hanging telephone line   A telephone line hangs between two poles m apart in the shape of the catenary , where and are measured in meters.   Find the slope of this curve where it meets the right pole.    Find the angle between the line and the pole.      Solution. (A sketch of the line between the poles at and may help.)     Blank workspace for a handwritten solution and sketch.       Rewriting   Consider the function .   Express as a fraction of two polynomials.    Calculate .      Solution.      Blank workspace for a handwritten solution.       A double-angle identity   Prove that .   Proof (start from the definitions).      Blank workspace for a handwritten proof.       Solving a hyperbolic equation   Consider the equation and solve for .   Solution.      Blank workspace for a handwritten solution.      "
},
{
  "id": "example-skel-hyp-catenary",
  "level": "2",
  "url": "sec-skel-hyp-more-examples.html#example-skel-hyp-catenary",
  "type": "Example",
  "number": "1.6.1",
  "title": "A hanging telephone line.",
  "body": " A hanging telephone line   A telephone line hangs between two poles m apart in the shape of the catenary , where and are measured in meters.   Find the slope of this curve where it meets the right pole.    Find the angle between the line and the pole.      Solution. (A sketch of the line between the poles at and may help.)     Blank workspace for a handwritten solution and sketch.     "
},
{
  "id": "example-skel-hyp-sinh-ln",
  "level": "2",
  "url": "sec-skel-hyp-more-examples.html#example-skel-hyp-sinh-ln",
  "type": "Example",
  "number": "1.6.2",
  "title": "Rewriting <span class=\"process-math\">\\(\\sinh(\\ln(x))\\)<\/span>.",
  "body": " Rewriting   Consider the function .   Express as a fraction of two polynomials.    Calculate .      Solution.      Blank workspace for a handwritten solution.     "
},
{
  "id": "example-skel-hyp-double-angle",
  "level": "2",
  "url": "sec-skel-hyp-more-examples.html#example-skel-hyp-double-angle",
  "type": "Example",
  "number": "1.6.3",
  "title": "A double-angle identity.",
  "body": " A double-angle identity   Prove that .   Proof (start from the definitions).      Blank workspace for a handwritten proof.     "
},
{
  "id": "example-skel-hyp-equation",
  "level": "2",
  "url": "sec-skel-hyp-more-examples.html#example-skel-hyp-equation",
  "type": "Example",
  "number": "1.6.4",
  "title": "Solving a hyperbolic equation.",
  "body": " Solving a hyperbolic equation   Consider the equation and solve for .   Solution.      Blank workspace for a handwritten solution.     "
},
{
  "id": "subsec-skel-series-definitions",
  "level": "1",
  "url": "subsec-skel-series-definitions.html",
  "type": "Subsection",
  "number": "2.1.1",
  "title": "Definitions",
  "body": " Definitions   Sequence   A sequence is a list of numbers, . An infinite sequence of numbers is a function whose domain is the set of positive integers.     A Sequence of Halves   The numbers form an infinite sequence; its th term is .     Infinite Series   The sum of the numbers in an infinite sequence , i.e. , is called an infinite series . Here is the th term of the series.     An Infinite Series with a Finite Sum   Infinite sequences can have finite sums. Consider the sum of the sequence from , i.e. .  It is most convenient to evaluate the result of this sum geometrically. Draw a square of side one in the space below. Shade half of it, then half of what is left, then half of what is left after that, and keep going. Label the pieces , , , . What is the total shaded area, and therefore what is the sum?     Blank space in which to draw a unit square subdivided into rectangles of area one half, one fourth, one eighth, one sixteenth, and so on.      "
},
{
  "id": "def-skel-sequence",
  "level": "2",
  "url": "subsec-skel-series-definitions.html#def-skel-sequence",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Sequence.",
  "body": " Sequence   A sequence is a list of numbers, . An infinite sequence of numbers is a function whose domain is the set of positive integers.   "
},
{
  "id": "example-skel-series-halving-sequence",
  "level": "2",
  "url": "subsec-skel-series-definitions.html#example-skel-series-halving-sequence",
  "type": "Example",
  "number": "2.1.2",
  "title": "A Sequence of Halves.",
  "body": " A Sequence of Halves   The numbers form an infinite sequence; its th term is .   "
},
{
  "id": "def-skel-infinite-series",
  "level": "2",
  "url": "subsec-skel-series-definitions.html#def-skel-infinite-series",
  "type": "Definition",
  "number": "2.1.3",
  "title": "Infinite Series.",
  "body": " Infinite Series   The sum of the numbers in an infinite sequence , i.e. , is called an infinite series . Here is the th term of the series.   "
},
{
  "id": "example-skel-series-halving-series",
  "level": "2",
  "url": "subsec-skel-series-definitions.html#example-skel-series-halving-series",
  "type": "Example",
  "number": "2.1.4",
  "title": "An Infinite Series with a Finite Sum.",
  "body": " An Infinite Series with a Finite Sum   Infinite sequences can have finite sums. Consider the sum of the sequence from , i.e. .  It is most convenient to evaluate the result of this sum geometrically. Draw a square of side one in the space below. Shade half of it, then half of what is left, then half of what is left after that, and keep going. Label the pieces , , , . What is the total shaded area, and therefore what is the sum?     Blank space in which to draw a unit square subdivided into rectangles of area one half, one fourth, one eighth, one sixteenth, and so on.     "
},
{
  "id": "subsec-skel-series-partial-sums",
  "level": "1",
  "url": "subsec-skel-series-partial-sums.html",
  "type": "Subsection",
  "number": "2.1.2",
  "title": "Partial Sums",
  "body": " Partial Sums  Consider again the infinite sequence . Let us denote the sum of the first terms in this sequence by , which are known as partial sums . Can we find a pattern in the sequence of partial sums?  Write out , , and , each one both as a fraction and in the form . Then guess a closed formula for .     Blank box with rows labelled s sub 1, s sub 2, s sub 3, and s sub n, for computing the partial sums by hand.    Now use your formula for to compute the infinite series, by taking the limit of the partial sum as . Compare the answer with the one you found geometrically from the square.     Blank workspace for taking the limit of the partial sums by hand.    In the example above, the sequence of partial sums converged to a number. In general, if the sequence of the partial sums converges to a number, we say that the series converges , otherwise we say that the series diverges .  "
},
{
  "id": "subsec-skel-series-partial-sums-2",
  "level": "2",
  "url": "subsec-skel-series-partial-sums.html#subsec-skel-series-partial-sums-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial sums "
},
{
  "id": "subsec-skel-series-partial-sums-7",
  "level": "2",
  "url": "subsec-skel-series-partial-sums.html#subsec-skel-series-partial-sums-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "converges diverges "
},
{
  "id": "subsec-skel-series-geometric",
  "level": "1",
  "url": "subsec-skel-series-geometric.html",
  "type": "Subsection",
  "number": "2.1.3",
  "title": "Geometric Series",
  "body": " Geometric Series  An important example of infinite series is the geometric series. The geometric series is of the form where are real numbers and . Note that we can re-write the series as .  Let us compute the partial sum for the geometric series, so that   Multiply by , subtract the result from , and solve for . Almost every term should cancel.     Blank box with rows labelled r times s sub n, s sub n minus r times s sub n, and s sub n, for deriving the partial sum of a geometric series.    Next, take the limit of your partial sum as . Treat the cases , , and separately, and in each case say what does.     Blank box with three rows labelled absolute value of r less than one, greater than one, and r equals one, for the three cases of the geometric series.     What Happens When ?   We have now handled , , and , but one case is still missing: . Write out the partial sums of the series for . Does the sequence of partial sums approach a single number as ? What does that tell you about the series?   Your answer and reasoning.      Blank workspace for a handwritten answer.      The partial sums do not grow without bound here, the way they do when . Look instead at whether they settle down to one value.    Putting all of the cases together, we can say that if , the geometric series is divergent.   Summary  The geometric series converges to if , i.e. and diverges if .   Next, as an application of the geometric series, we will go through the following example, which is from our textbook.   A bouncing ball   You drop a ball from meters above a flat surface. Each time the ball hits the surface after falling a distance , it rebounds a distance , where is positive but less than 1. Find the total distance the ball travels up and down.   Solution. (Use to write the total distance as an infinite series, then match it against . Watch the first drop: it is travelled only once.)     Blank workspace for a handwritten solution.       The ball falls a distance , then rises and falls a distance , then , and so on, so the total distance travelled is .     b0(t) = (0.55 + 0.55*t, 4.0*(1 - t^2))  b1(t) = (1.10 + 0.9*t, 2.4*(4*t*(1 - t)))  b2(t) = (2.00 + 0.7*t, 1.44*(4*t*(1 - t)))  b3(t) = (2.70 + 0.55*t, 0.864*(4*t*(1 - t)))  b4(t) = (3.25 + 0.42*t, 0.5184*(4*t*(1 - t)))               a    ar    ar^2    ar^3                "
},
{
  "id": "subsec-skel-series-geometric-2",
  "level": "2",
  "url": "subsec-skel-series-geometric.html#subsec-skel-series-geometric-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "geometric series "
},
{
  "id": "skel-checkpoint-series-geometric-r-negative-one",
  "level": "2",
  "url": "subsec-skel-series-geometric.html#skel-checkpoint-series-geometric-r-negative-one",
  "type": "Checkpoint",
  "number": "2.1.5",
  "title": "What Happens When <span class=\"process-math\">\\(r = -1\\text{?}\\)<\/span>",
  "body": " What Happens When ?   We have now handled , , and , but one case is still missing: . Write out the partial sums of the series for . Does the sequence of partial sums approach a single number as ? What does that tell you about the series?   Your answer and reasoning.      Blank workspace for a handwritten answer.      The partial sums do not grow without bound here, the way they do when . Look instead at whether they settle down to one value.   "
},
{
  "id": "example-skel-series-ball",
  "level": "2",
  "url": "subsec-skel-series-geometric.html#example-skel-series-ball",
  "type": "Example",
  "number": "2.1.6",
  "title": "A bouncing ball.",
  "body": " A bouncing ball   You drop a ball from meters above a flat surface. Each time the ball hits the surface after falling a distance , it rebounds a distance , where is positive but less than 1. Find the total distance the ball travels up and down.   Solution. (Use to write the total distance as an infinite series, then match it against . Watch the first drop: it is travelled only once.)     Blank workspace for a handwritten solution.     "
},
{
  "id": "fig-skel-series-ball",
  "level": "2",
  "url": "subsec-skel-series-geometric.html#fig-skel-series-ball",
  "type": "Figure",
  "number": "2.1.7",
  "title": "",
  "body": " The ball falls a distance , then rises and falls a distance , then , and so on, so the total distance travelled is .     b0(t) = (0.55 + 0.55*t, 4.0*(1 - t^2))  b1(t) = (1.10 + 0.9*t, 2.4*(4*t*(1 - t)))  b2(t) = (2.00 + 0.7*t, 1.44*(4*t*(1 - t)))  b3(t) = (2.70 + 0.55*t, 0.864*(4*t*(1 - t)))  b4(t) = (3.25 + 0.42*t, 0.5184*(4*t*(1 - t)))               a    ar    ar^2    ar^3               "
},
{
  "id": "subsec-skel-series-nth-term",
  "level": "1",
  "url": "subsec-skel-series-nth-term.html",
  "type": "Subsection",
  "number": "2.1.4",
  "title": "The <span class=\"process-math\">\\(n\\)<\/span>th Term Test",
  "body": " The th Term Test    If converges, then .     Important note: If , we cannot conclude that converges. See parts D and E in the example below. Also see .  The following test is a consequence of the above theorem.   The th Term Test  If does not exist or , then diverges.    Testing series for convergence   Determine whether the series is convergent or divergent. If it is convergent, find its sum.                              Solution.      Blank box divided into five rows labelled A through E, for testing each of the five series by hand.      "
},
{
  "id": "thm-skel-series-nth-term",
  "level": "2",
  "url": "subsec-skel-series-nth-term.html#thm-skel-series-nth-term",
  "type": "Theorem",
  "number": "2.1.8",
  "title": "",
  "body": "  If converges, then .   "
},
{
  "id": "subsec-skel-series-nth-term-3",
  "level": "2",
  "url": "subsec-skel-series-nth-term.html#subsec-skel-series-nth-term-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Important note: "
},
{
  "id": "example-skel-series-convergence",
  "level": "2",
  "url": "subsec-skel-series-nth-term.html#example-skel-series-convergence",
  "type": "Example",
  "number": "2.1.9",
  "title": "Testing series for convergence.",
  "body": " Testing series for convergence   Determine whether the series is convergent or divergent. If it is convergent, find its sum.                              Solution.      Blank box divided into five rows labelled A through E, for testing each of the five series by hand.     "
},
{
  "id": "subsec-skel-series-combining",
  "level": "1",
  "url": "subsec-skel-series-combining.html",
  "type": "Subsection",
  "number": "2.1.5",
  "title": "Combining Series",
  "body": " Combining Series    If and are convergent series, then    Sum Rule:       Difference Rule:       Constant Multiple Rule:  (Any number ).        Using the difference rule   Evaluate .   Solution. (You have already summed both of these series in this section: one in and the other in part D of .)     Blank workspace for a handwritten solution.       A telescoping series with logarithms   Evaluate , if it converges and if it diverges, show that it does.   Solution.      Blank workspace for a handwritten solution.      "
},
{
  "id": "thm-skel-series-combining",
  "level": "2",
  "url": "subsec-skel-series-combining.html#thm-skel-series-combining",
  "type": "Theorem",
  "number": "2.1.10",
  "title": "",
  "body": "  If and are convergent series, then    Sum Rule:       Difference Rule:       Constant Multiple Rule:  (Any number ).      "
},
{
  "id": "example-skel-series-difference",
  "level": "2",
  "url": "subsec-skel-series-combining.html#example-skel-series-difference",
  "type": "Example",
  "number": "2.1.11",
  "title": "Using the difference rule.",
  "body": " Using the difference rule   Evaluate .   Solution. (You have already summed both of these series in this section: one in and the other in part D of .)     Blank workspace for a handwritten solution.     "
},
{
  "id": "example-skel-series-telescoping-ln",
  "level": "2",
  "url": "subsec-skel-series-combining.html#example-skel-series-telescoping-ln",
  "type": "Example",
  "number": "2.1.12",
  "title": "A telescoping series with logarithms.",
  "body": " A telescoping series with logarithms   Evaluate , if it converges and if it diverges, show that it does.   Solution.      Blank workspace for a handwritten solution.     "
},
{
  "id": "subsec-skel-taylor-definitions",
  "level": "1",
  "url": "subsec-skel-taylor-definitions.html",
  "type": "Subsection",
  "number": "2.2.1",
  "title": "Definitions of Taylor Series, Maclaurin Series, and Taylor Polynomials",
  "body": " Definitions of Taylor Series, Maclaurin Series, and Taylor Polynomials  In this section we will answer the following question:    If all we know about a function is information at , i.e. , how can we approximate with a polynomial ?     These are skeletal notes: the definitions and problem statements are given, and blank boxes are left wherever a derivation or a solution belongs, so that you can fill them in by hand.   Throughout, let be a function with derivatives of all orders throughout some interval containing as an interior point.  Before stating the definitions, let us see where the coefficients of such a polynomial have to come from. Suppose the only things we know about are its readings at : the value , the slope , the second derivative , and so on. We look for a polynomial written in terms of , and we pin down the unknown coefficients by requiring to agree with at in as many derivatives as it has coefficients. Writing it in terms of rather than is what makes this manageable: every term after the first vanishes at .  Work out the first few coefficients. In each row, differentiate the polynomial as many times as it has coefficients, evaluate at , and match against .     Blank box in three rows, for finding the coefficients of the linear, quadratic, and cubic approximations.    Notice what should not have happened: and should come out the same every time. Each new condition is the first one in which the next coefficient appears, so it determines that coefficient and leaves the earlier ones untouched. That is why is the tangent line with a single new term added to it, rather than a fresh approximation built from scratch. The pattern in the denominators should now be visible:   One computation settles every coefficient at once. Differentiate exactly times and evaluate at . Say what happens to the terms of degree below , to those of degree above , and to the term itself; then impose and solve for .     Blank box in two rows, for the kth derivative of the polynomial at a and the resulting coefficient.    So there is nothing to choose. Once we ask a polynomial to match and its first derivatives at , its coefficients are determined, and they are the numbers . Reading as and as , the first coefficient fits the same formula. Letting grow without bound leads to the following definitions.   Taylor Series   The Taylor series generated by at is      Taylor Polynomial of Order   The Taylor polynomial of order generated by at is the polynomial      Maclaurin Series  The centre is common enough to have its own name. The Taylor series generated by at is known as the Maclaurin series generated by , which is     Approximating near   Write down the Taylor polynomials of orders , , and generated by at .   Solution. Every derivative of is again, so the coefficients of are easy. Check your answers against .     Blank box with rows labelled p sub 1 of x, p sub 2 of x, and p sub 3 of x, for the first three Taylor polynomials of e to the x.       The function together with the Taylor polynomials , , and at . Near each polynomial hugs the curve more closely than the one before it.     f(t) = (t, exp(t))  p1(t) = (t, 1 + t)  p2(t) = (t, 1 + t + t^2\/2)  p3(t) = (t, 1 + t + t^2\/2 + t^3\/6)         f(x)=e^{x}    p_1(x)    p_2(x)    p_3(x)                   The same idea, animated. Each new term of the Taylor polynomial is grown in one at a time, so you can watch peel away from the previous approximation and settle closer to .      puts all of this on one screen for . The centre slider is the of the definitions: left at it builds the Maclaurin polynomials, and moved anywhere else it rebuilds the same construction at a new point, where again touches the curve. The order slider is the of , and stepping it up adds exactly one term, . That term vanishes at , which is why raising the order changes the shape of the polynomial everywhere else but never moves it off the point .  The green band in the figure is worth watching on its own. It marks the interval on which stays within of , and it widens with every term: about for , about for , and wider than the picture by . So the Taylor polynomials do not merely improve at the centre; the region where they are usable grows. Whether that region eventually covers everything, and how large the error is at a given , are the questions of the next section.  "
},
{
  "id": "def-skel-taylor-series",
  "level": "2",
  "url": "subsec-skel-taylor-definitions.html#def-skel-taylor-series",
  "type": "Definition",
  "number": "2.2.1",
  "title": "Taylor Series.",
  "body": " Taylor Series   The Taylor series generated by at is    "
},
{
  "id": "def-skel-taylor-polynomial",
  "level": "2",
  "url": "subsec-skel-taylor-definitions.html#def-skel-taylor-polynomial",
  "type": "Definition",
  "number": "2.2.2",
  "title": "Taylor Polynomial of Order <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Taylor Polynomial of Order   The Taylor polynomial of order generated by at is the polynomial    "
},
{
  "id": "remark-skel-maclaurin-series",
  "level": "2",
  "url": "subsec-skel-taylor-definitions.html#remark-skel-maclaurin-series",
  "type": "Remark",
  "number": "2.2.3",
  "title": "Maclaurin Series.",
  "body": " Maclaurin Series  The centre is common enough to have its own name. The Taylor series generated by at is known as the Maclaurin series generated by , which is   "
},
{
  "id": "example-skel-taylor-exp",
  "level": "2",
  "url": "subsec-skel-taylor-definitions.html#example-skel-taylor-exp",
  "type": "Example",
  "number": "2.2.4",
  "title": "Approximating <span class=\"process-math\">\\(e^x\\)<\/span> near <span class=\"process-math\">\\(x = 0\\)<\/span>.",
  "body": " Approximating near   Write down the Taylor polynomials of orders , , and generated by at .   Solution. Every derivative of is again, so the coefficients of are easy. Check your answers against .     Blank box with rows labelled p sub 1 of x, p sub 2 of x, and p sub 3 of x, for the first three Taylor polynomials of e to the x.     "
},
{
  "id": "fig-skel-taylor-exp",
  "level": "2",
  "url": "subsec-skel-taylor-definitions.html#fig-skel-taylor-exp",
  "type": "Figure",
  "number": "2.2.5",
  "title": "",
  "body": " The function together with the Taylor polynomials , , and at . Near each polynomial hugs the curve more closely than the one before it.     f(t) = (t, exp(t))  p1(t) = (t, 1 + t)  p2(t) = (t, 1 + t + t^2\/2)  p3(t) = (t, 1 + t + t^2\/2 + t^3\/6)         f(x)=e^{x}    p_1(x)    p_2(x)    p_3(x)               "
},
{
  "id": "fig-skel-taylor-order-animation",
  "level": "2",
  "url": "subsec-skel-taylor-definitions.html#fig-skel-taylor-order-animation",
  "type": "Figure",
  "number": "2.2.6",
  "title": "",
  "body": " The same idea, animated. Each new term of the Taylor polynomial is grown in one at a time, so you can watch peel away from the previous approximation and settle closer to .   "
},
{
  "id": "subsec-skel-taylor-more-examples",
  "level": "1",
  "url": "subsec-skel-taylor-more-examples.html",
  "type": "Subsection",
  "number": "2.2.2",
  "title": "More Examples",
  "body": " More Examples   The Maclaurin series of   Consider the function .   Find the Taylor series generated by at . Note that this is the same as the Maclaurin series generated by .    Calculate the first four Taylor polynomials .    Plot the original function and the Taylor polynomials obtained in part B to confirm that the higher order polynomials provide a better approximation.      A. Differentiate repeatedly, evaluate at , find the pattern, then use .     Blank box with rows labelled derivatives, at x equals zero, pattern, and series, for finding the Maclaurin series of sine.     B. Keep the first four non-zero polynomials.     Blank box with rows labelled p sub 1, p sub 3, p sub 5, and p sub 7, for the first four non-zero Taylor polynomials of sine.     C. Check your polynomials against .     The function together with the Taylor polynomials at , where , , , and .     f(t) = (t, sin(t))  p1(t) = (t, t)  p3(t) = (t, t - t^3\/6)  p5(t) = (t, t - t^3\/6 + t^5\/120)  p7(t) = (t, t - t^3\/6 + t^5\/120 - t^7\/5040)          f(x)=\\sin x    p_1(x)    p_3(x)    p_5(x)    p_7(x)                   Consider the function .   Compute the Maclaurin series generated by . Express the result in sigma notation.    Find the interval of convergence for this series.        Blank box divided into two rows labelled A and B, for the Maclaurin series and its interval of convergence.      Write as a geometric series first.      Compute the Taylor series of at .     Blank workspace for a handwritten solution.      Either differentiate repeatedly at , or write in terms of and reduce to a geometric series.     A list of Taylor series  The Maclaurin series below are derived or used throughout this book, and the first four are the ones on the formula sheet of the exams. Each of them is a Taylor series centered at , so each can be obtained from by computing derivatives, as we did for and . Most of the time, though, it is faster to start from one of these and substitute, differentiate, integrate, or multiply: that is how the series for , , , and are found in this book.   A list of Taylor series: the Maclaurin series derived or used in this book.    Series  Interval of convergence  Where in the book          The geometric series, .  Replacing by , , or gives the series of , , and ; see .           Derived in .  Convergence proved in .           Derived in .  Divided by in .           The derivative of the series of .  Used, with and in place of , in Assignments 2 and 3 and in Review Problems #1.           Derived in Sample Past Exam 1; it is the odd part of the series of .           The derivative of the series of ; it is the even part of the series of .           Its Taylor polynomials, for and , are the subject of problems in Assignment 3 and Review Problems #1.           Obtained by integrating the series of in .  Evaluated at to approximate in .      Two more series in this book come from the table by substitution, and both converge on : , used in to approximate an integral, and , used in to evaluate one exactly.   "
},
{
  "id": "example-skel-taylor-sin",
  "level": "2",
  "url": "subsec-skel-taylor-more-examples.html#example-skel-taylor-sin",
  "type": "Example",
  "number": "2.2.7",
  "title": "The Maclaurin series of <span class=\"process-math\">\\(\\sin(x)\\)<\/span>.",
  "body": " The Maclaurin series of   Consider the function .   Find the Taylor series generated by at . Note that this is the same as the Maclaurin series generated by .    Calculate the first four Taylor polynomials .    Plot the original function and the Taylor polynomials obtained in part B to confirm that the higher order polynomials provide a better approximation.      A. Differentiate repeatedly, evaluate at , find the pattern, then use .     Blank box with rows labelled derivatives, at x equals zero, pattern, and series, for finding the Maclaurin series of sine.     B. Keep the first four non-zero polynomials.     Blank box with rows labelled p sub 1, p sub 3, p sub 5, and p sub 7, for the first four non-zero Taylor polynomials of sine.     C. Check your polynomials against .   "
},
{
  "id": "fig-skel-taylor-sin",
  "level": "2",
  "url": "subsec-skel-taylor-more-examples.html#fig-skel-taylor-sin",
  "type": "Figure",
  "number": "2.2.8",
  "title": "",
  "body": " The function together with the Taylor polynomials at , where , , , and .     f(t) = (t, sin(t))  p1(t) = (t, t)  p3(t) = (t, t - t^3\/6)  p5(t) = (t, t - t^3\/6 + t^5\/120)  p7(t) = (t, t - t^3\/6 + t^5\/120 - t^7\/5040)          f(x)=\\sin x    p_1(x)    p_3(x)    p_5(x)    p_7(x)                "
},
{
  "id": "exercise-skel-taylor-geometric",
  "level": "2",
  "url": "subsec-skel-taylor-more-examples.html#exercise-skel-taylor-geometric",
  "type": "Checkpoint",
  "number": "2.2.9",
  "title": "",
  "body": "  Consider the function .   Compute the Maclaurin series generated by . Express the result in sigma notation.    Find the interval of convergence for this series.        Blank box divided into two rows labelled A and B, for the Maclaurin series and its interval of convergence.      Write as a geometric series first.   "
},
{
  "id": "exercise-skel-taylor-shifted",
  "level": "2",
  "url": "subsec-skel-taylor-more-examples.html#exercise-skel-taylor-shifted",
  "type": "Checkpoint",
  "number": "2.2.10",
  "title": "",
  "body": "  Compute the Taylor series of at .     Blank workspace for a handwritten solution.      Either differentiate repeatedly at , or write in terms of and reduce to a geometric series.   "
},
{
  "id": "skel-table-taylor-series-list",
  "level": "2",
  "url": "subsec-skel-taylor-more-examples.html#skel-table-taylor-series-list",
  "type": "Table",
  "number": "2.2.11",
  "title": "A list of Taylor series: the Maclaurin series derived or used in this book.",
  "body": " A list of Taylor series: the Maclaurin series derived or used in this book.    Series  Interval of convergence  Where in the book          The geometric series, .  Replacing by , , or gives the series of , , and ; see .           Derived in .  Convergence proved in .           Derived in .  Divided by in .           The derivative of the series of .  Used, with and in place of , in Assignments 2 and 3 and in Review Problems #1.           Derived in Sample Past Exam 1; it is the odd part of the series of .           The derivative of the series of ; it is the even part of the series of .           Its Taylor polynomials, for and , are the subject of problems in Assignment 3 and Review Problems #1.           Obtained by integrating the series of in .  Evaluated at to approximate in .     "
},
{
  "id": "subsec-skel-taylor-formula",
  "level": "1",
  "url": "subsec-skel-taylor-formula.html",
  "type": "Subsection",
  "number": "2.3.1",
  "title": "Taylor’s Formula and The Remainder Estimation Theorem",
  "body": " Taylor's Formula and The Remainder Estimation Theorem   Taylor's Formula   Let be a function that has continuous derivatives on an open interval containing . Then for each and for each positive integer , there exists a number between and such that where and      Taylor's Formula: . The Taylor polynomial agrees with at ; away from , the vertical gap between them is the remainder .     a = 1  f(x) = 0.9 + 0.55*sin(1.15*(x - 0.4)) + 0.09*x  pn(x) = f(a) + 0.5778*(x - a) - 0.379*(x - a)^2  xt = 3.1         a     x      R_n(x)     f(x)    p_n(x)                For a visual representation of Taylor's formula, watch the animation in .    Taylor's Formula Animation.      Finding an upper bound for the error term without knowing the value of  Usually the value of is not explicitly known. However, we may manage to find an upper bound for the error term without knowing the exact value of . This is achieved by finding an upper bound for , where is between and , and then using this upper bound to estimate the error term.  This is the idea behind every error estimate in this section. It is used in to prove that the Taylor series of converges to for every , and in each of the three examples of .    The Remainder Estimation Theorem   Let be a function that has continuous derivatives on an open interval containing . Then for each and for each positive integer , there exists a number between and such that where is an upper bound for on the interval between and .    (Derive from .)     Blank workspace for deriving the remainder estimation theorem by hand.     You are not expected to know the proof of Taylor's formula itself , only to understand the statement and its implications. The proof is worked through in .  "
},
{
  "id": "thm-skel-taylor-formula",
  "level": "2",
  "url": "subsec-skel-taylor-formula.html#thm-skel-taylor-formula",
  "type": "Theorem",
  "number": "2.3.1",
  "title": "Taylor’s Formula.",
  "body": " Taylor's Formula   Let be a function that has continuous derivatives on an open interval containing . Then for each and for each positive integer , there exists a number between and such that where and    "
},
{
  "id": "fig-skel-taylor-formula",
  "level": "2",
  "url": "subsec-skel-taylor-formula.html#fig-skel-taylor-formula",
  "type": "Figure",
  "number": "2.3.2",
  "title": "",
  "body": " Taylor's Formula: . The Taylor polynomial agrees with at ; away from , the vertical gap between them is the remainder .     a = 1  f(x) = 0.9 + 0.55*sin(1.15*(x - 0.4)) + 0.09*x  pn(x) = f(a) + 0.5778*(x - a) - 0.379*(x - a)^2  xt = 3.1         a     x      R_n(x)     f(x)    p_n(x)               "
},
{
  "id": "fig-skel-vid-taylor-formula",
  "level": "2",
  "url": "subsec-skel-taylor-formula.html#fig-skel-vid-taylor-formula",
  "type": "Figure",
  "number": "2.3.3",
  "title": "",
  "body": " Taylor's Formula Animation.   "
},
{
  "id": "rmk-skel-error-upper-bound",
  "level": "2",
  "url": "subsec-skel-taylor-formula.html#rmk-skel-error-upper-bound",
  "type": "Remark",
  "number": "2.3.4",
  "title": "Finding an upper bound for the error term without knowing the value of <span class=\"process-math\">\\(c\\)<\/span>.",
  "body": " Finding an upper bound for the error term without knowing the value of  Usually the value of is not explicitly known. However, we may manage to find an upper bound for the error term without knowing the exact value of . This is achieved by finding an upper bound for , where is between and , and then using this upper bound to estimate the error term.  This is the idea behind every error estimate in this section. It is used in to prove that the Taylor series of converges to for every , and in each of the three examples of .  "
},
{
  "id": "thm-skel-remainder-theorem",
  "level": "2",
  "url": "subsec-skel-taylor-formula.html#thm-skel-remainder-theorem",
  "type": "Theorem",
  "number": "2.3.5",
  "title": "The Remainder Estimation Theorem.",
  "body": " The Remainder Estimation Theorem   Let be a function that has continuous derivatives on an open interval containing . Then for each and for each positive integer , there exists a number between and such that where is an upper bound for on the interval between and .   "
},
{
  "id": "subsec-skel-taylor-convergence",
  "level": "1",
  "url": "subsec-skel-taylor-convergence.html",
  "type": "Subsection",
  "number": "2.3.2",
  "title": "An example of a Taylor series that converges",
  "body": " An example of a Taylor series that converges  Consider the function . The Taylor series generated by at is and its remainder is   (Compute and .)     Blank box in two halves, for computing the Taylor series of e to the x at zero and its remainder.    (Show that converges to for every .)     Blank workspace for showing that the Taylor series of e to the x converges to e to the x for every real x.     Schematic graph of and its Taylor polynomials about .      f(x) = exp(x)  p1(x) = 1 + x  p2(x) = 1 + x + x^2\/2  p3(x) = 1 + x + x^2\/2 + x^3\/6  p4(x) = 1 + x + x^2\/2 + x^3\/6 + x^4\/24          f(x) = e^x      x \\gt 0     c    e^c \\mathrel{\\unicode{x3C}} e^x      x \\mathrel{\\unicode{x3C}} 0     c    e^c \\mathrel{\\unicode{x3C}} 1     e^x  p_4  p_3  p_2  p_1                      The animation in illustrates this convergence geometrically: as increases, the Taylor polynomials hug the graph of over a wider and wider interval, matching the fact that for every .    The Taylor polynomials of about converging to , followed by the remainder-theorem argument.     "
},
{
  "id": "fig-skel-exp-taylor",
  "level": "2",
  "url": "subsec-skel-taylor-convergence.html#fig-skel-exp-taylor",
  "type": "Figure",
  "number": "2.3.6",
  "title": "",
  "body": " Schematic graph of and its Taylor polynomials about .      f(x) = exp(x)  p1(x) = 1 + x  p2(x) = 1 + x + x^2\/2  p3(x) = 1 + x + x^2\/2 + x^3\/6  p4(x) = 1 + x + x^2\/2 + x^3\/6 + x^4\/24          f(x) = e^x      x \\gt 0     c    e^c \\mathrel{\\unicode{x3C}} e^x      x \\mathrel{\\unicode{x3C}} 0     c    e^c \\mathrel{\\unicode{x3C}} 1     e^x  p_4  p_3  p_2  p_1                     "
},
{
  "id": "fig-skel-exp-taylor-video",
  "level": "2",
  "url": "subsec-skel-taylor-convergence.html#fig-skel-exp-taylor-video",
  "type": "Figure",
  "number": "2.3.7",
  "title": "",
  "body": " The Taylor polynomials of about converging to , followed by the remainder-theorem argument.   "
},
{
  "id": "subsec-skel-taylor-error",
  "level": "1",
  "url": "subsec-skel-taylor-error.html",
  "type": "Subsection",
  "number": "2.3.3",
  "title": "The error in using a Taylor polynomial",
  "body": " The error in using a Taylor polynomial  Suppose we approximate by the Taylor polynomial of degree at . The error is , which is rearranged, and is given by . To bound it we need an upper bound for on the interval between and , as in . The three examples below carry out that step in three different settings.   Approximating using a Taylor polynomial   Approximate using the Taylor polynomial of degree 2 at . Find an upper bound for the error in this approximation.   Solution.      Blank box in three rows, labelled p sub 2 of x, bound on the remainder, and actual error.     shows the two graphs and the gap between them. The red curve is and the blue curve is the Taylor polynomial ; the vertical distance between the red and blue points is the error at . Check that it is smaller than the bound you found.     in red, its Taylor polynomial in blue, and the error at as the gap between the two points.        Given a desired error bound, find values of for which the approximation is guaranteed to be valid   Assume that we use the Taylor polynomial of degree 3 at to approximate . For approximately what values of can you replace by such a Taylor polynomial with an error of magnitude no greater than ?   Solution.      Blank box in three rows, for the Taylor polynomial and remainder, the bound on the remainder, and solving for the range of x.    The two interactives in and let you vary and watch the error change, and confirm that it stays below on the range you found.     in red and in blue. Drag the slider to see how the error changes with .       The error as a function of , staying below exactly on the range guaranteed by .        Finding the value of such that the error is less than a given tolerance   Find the smallest value of for which the polynomial approximation for is accurate to for values of in the interval .   Solution.      Blank box in three rows, for the bound on the remainder, the inequality to solve, and testing successive values of n.      The error of the degree approximation to on , against the tolerance .       "
},
{
  "id": "ex-skel-error-bound-exp",
  "level": "2",
  "url": "subsec-skel-taylor-error.html#ex-skel-error-bound-exp",
  "type": "Example",
  "number": "2.3.8",
  "title": "Approximating <span class=\"process-math\">\\(e^x\\)<\/span> using a Taylor polynomial.",
  "body": " Approximating using a Taylor polynomial   Approximate using the Taylor polynomial of degree 2 at . Find an upper bound for the error in this approximation.   Solution.      Blank box in three rows, labelled p sub 2 of x, bound on the remainder, and actual error.     shows the two graphs and the gap between them. The red curve is and the blue curve is the Taylor polynomial ; the vertical distance between the red and blue points is the error at . Check that it is smaller than the bound you found.     in red, its Taylor polynomial in blue, and the error at as the gap between the two points.      "
},
{
  "id": "ex-skel-error-bound-sin-range",
  "level": "2",
  "url": "subsec-skel-taylor-error.html#ex-skel-error-bound-sin-range",
  "type": "Example",
  "number": "2.3.10",
  "title": "Given a desired error bound, find values of <span class=\"process-math\">\\(x\\)<\/span> for which the approximation is guaranteed to be valid.",
  "body": " Given a desired error bound, find values of for which the approximation is guaranteed to be valid   Assume that we use the Taylor polynomial of degree 3 at to approximate . For approximately what values of can you replace by such a Taylor polynomial with an error of magnitude no greater than ?   Solution.      Blank box in three rows, for the Taylor polynomial and remainder, the bound on the remainder, and solving for the range of x.    The two interactives in and let you vary and watch the error change, and confirm that it stays below on the range you found.     in red and in blue. Drag the slider to see how the error changes with .       The error as a function of , staying below exactly on the range guaranteed by .      "
},
{
  "id": "ex-skel-error-bound-sin-degree",
  "level": "2",
  "url": "subsec-skel-taylor-error.html#ex-skel-error-bound-sin-degree",
  "type": "Example",
  "number": "2.3.13",
  "title": "Finding the value of <span class=\"process-math\">\\(n\\)<\/span> such that the error is less than a given tolerance.",
  "body": " Finding the value of such that the error is less than a given tolerance   Find the smallest value of for which the polynomial approximation for is accurate to for values of in the interval .   Solution.      Blank box in three rows, for the bound on the remainder, the inequality to solve, and testing successive values of n.      The error of the degree approximation to on , against the tolerance .      "
},
{
  "id": "subsec-skel-taylor-applications",
  "level": "1",
  "url": "subsec-skel-taylor-applications.html",
  "type": "Subsection",
  "number": "2.3.4",
  "title": "Applications of Taylor Series and Remainder Theorem",
  "body": " Applications of Taylor Series and Remainder Theorem   We begin with two uses of Taylor series that belong to single-variable calculus: computing limits of the indeterminate form , which along the way gives a proof of L'Hôpital's rule, and approximating definite integrals whose integrands have no elementary antiderivative.  The remaining three parts of this subsection are starred. Physicists often use Taylor series to approximate functions in order to simplify calculations. The first example is the kinetic energy of an object in relativistic mechanics. The second example is the approximation of the period of a pendulum. We will discuss the error in using these approximations and when it is valid to use them. Additionally, we will discuss how to use the Taylor series to estimate the value of in the last example.    Computing Limits and Integrals with Taylor Series  Taylor's formula replaces a function near a point by a polynomial plus a remainder whose size the Remainder Estimation Theorem controls. That is exactly what two problems from single-variable calculus call for: a limit of the indeterminate form , where numerator and denominator both vanish and the question is how fast , and a definite integral whose integrand has no elementary antiderivative.  We will use two Maclaurin series. The series of was found in : The series of is it comes from the geometric series : since , and for , integrating this from to term by term gives .   A limit by Taylor series   Compute    Solution.      Blank box in four rows: the numerator and denominator as series, the factoring and cancellation, the limit, and why the remaining terms vanish.       Proving L'Hôpital's rule with Taylor's formula   Let and have continuous second derivatives on an open interval containing , with and . Use Taylor's formula to prove L'Hôpital's rule:    Solution.      Blank box in four rows: Taylor's formula for f and for g, the quotient after cancelling the common factor, the limit as x tends to a, and the second equality.       Why the rule sometimes has to be applied several times  If as well, the quotient is again of the form and L'Hôpital's rule has to be applied again. Taylor's formula explains what is going on. Suppose and have continuous derivatives near , their first derivatives vanish at , and . Then Taylor's formula with gives because each remainder is at most a constant times . The limit is the ratio of the first nonzero Taylor coefficients, which is exactly what applications of L'Hôpital's rule compute. In the first nonzero coefficients were those of . Check that , with and , agrees with the limit you found.    A definite integral with no elementary antiderivative   The function has no elementary antiderivative, so the integral cannot be evaluated with the fundamental theorem of calculus. Use the Taylor polynomial of order of to approximate , bound the error with the Remainder Estimation Theorem, and find a value of that guarantees an error of at most .   Solution.      Blank box in four rows: the series with its remainder and the bound on the remainder, the integration from 0 to 1, the error bound, and the choice of n.       A non-elementary integral computed exactly   In , term-by-term integration produced a series that we could only estimate . Sometimes, however, the series produced by term-by-term integration is one we already recognize, and then the integral can be evaluated exactly , even though the integrand has no elementary antiderivative. Show that    Hint. Each power of has to be integrated against on . Use the following fact from Calculus II, proved by integration by parts Let . Then . For , integration by parts with and gives , since as . By induction, . : for every integer ,    Solution. Integrating an infinite series term by term over the unbounded interval needs a justification, and the Remainder Estimation Theorem supplies one. Let be the partial sum of the series for , a polynomial of degree . For every derivative satisfies . The Taylor polynomial of of degree has no term, so it equals , and the Remainder Estimation Theorem gives . Dividing by , . Multiplying by , integrating, and using with , the integral differs from the partial sum by at most . This bound tends to as , so the partial sums of the Leibniz series converge to the integral. Since they also converge to , the integral equals . A numerical evaluation of the integral gives , which agrees with . The bound also shows why the Leibniz series converges slowly: to guarantee an error below we need roughly terms.      Blank box in three rows: a series for the integrand, the term-by-term integration, and recognizing the resulting series.        *Approximating Relativistic Kinetic Energy   Starred section. This one is for the interested reader. It will not be examined.  In relativistic mechanics, the mass of an object moving with velocity is given by: where is the rest mass of the object and is the speed of light. Then the kinetic energy of an object of mass moving with velocity is:   In the case when , we can use the Taylor series to approximate the kinetic energy. In we will show that the kinetic energy can be approximated by the formula when . See for a comparison of the relativistic kinetic energy and its Newtonian approximation.   Relativistic versus Newtonian kinetic energy. The relativistic energy races toward a wall at the speed of light , while the Newtonian energy follows a gentle parabola; the two are approximately in agreement only when .      Krel(v) = 1\/sqrt(1 - v^2) - 1  Knewt(v) = v^2\/2               c  0    \\text{Relativistic}\\, K    \\text{Newtonian} \\,K     \\text{For}\\, v \\ll c: K_{\\text{rel}} \\approx K_{\\text{new}}                 Newtonian kinetic energy as an approximation to relativistic kinetic energy when   Show that the kinetic energy of an object moving with velocity can be approximated by the formula when .   Solution.      Blank workspace for approximating the relativistic kinetic energy when v is much smaller than c.    When , we can therefore approximate the kinetic energy as:      Estimating the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy   Assume that a car is moving with a velocity of ( miles per hour). Use the remainder's theorem to estimate the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy of the car. The speed of light is .   Solution.      Blank workspace for estimating the error in the Newtonian kinetic energy formula for the car.        *Small-Angle Approximation for a Pendulum   Starred section. This one is for the interested reader. It will not be examined.  We begin this section by briefly reviewing the forces acting on a simple pendulum and how the small-angle approximation allows us to treat its motion as simple harmonic motion.  The bob moves along the arc, so only the component of gravity tangent to that arc drives the motion. Resolving the weight into a component along the string ( , balanced by the string tension ) and a component tangent to the arc, as shown in , gives the restoring force   The minus sign indicates that the force always points back toward the equilibrium (straight-down) position. This is not Hooke's law: the force is proportional to , not to the displacement itself, so the motion is not exactly simple harmonic. Writing the arc displacement as , we would need to be proportional to that is, to for the motion to be simple harmonic.  The small-angle approximation bridges this gap. From the Taylor series when is small (in radians) the higher-order terms are negligible and . The restoring force then becomes which is Hooke's law with effective spring constant .  This is exactly what fixes the period. Newton's second law turns Hooke's law into the equation of motion Notice that the mass cancels. The equation says that is a function whose second derivative is a negative multiple of itself, and the functions with that property are the sines and cosines: writing , every solution has the form which you can verify by differentiating twice. The number is the angular frequency, and and repeat when increases by . So the motion repeats after a time with , giving   Thus, for small swings the pendulum behaves as a simple harmonic oscillator, with the period , which is independent of both the amplitude and the mass. Taylor's Remainder Theorem (see ) enables us to quantify how small must be for this approximation.   Forces on a simple pendulum. The weight resolves into a component along the string (balanced by the tension ) and a component tangent to the arc, which acts as the restoring force.     theta = radians(33)  fscale = 0.6  ft = 0.62  pivot = (0, 0)  bob = (sin(theta), -cos(theta))  mgEnd = (sin(theta), -cos(theta) - fscale)  ftEnd = (sin(theta) - ft*sin(theta), -cos(theta) + ft*cos(theta))  sinEnd = (sin(theta) - fscale*sin(theta)*cos(theta), -cos(theta) - fscale*sin(theta)*sin(theta))  cosEnd = (sin(theta) + fscale*cos(theta)*sin(theta), -cos(theta) - fscale*cos(theta)*cos(theta))          \\ell  \\theta   \\ell\\sin\\theta  x   \\overrightarrow{\\mathbf{F}}_T   m\\overrightarrow{\\mathbf{g}}   mg\\sin\\theta   mg\\cos\\theta   m                  Forces on a simple pendulum. The weight resolves into a radial component along the string, balanced by the tension , and a tangential component directed toward equilibrium, which acts as the restoring force. For small angles, gives .      Simple Harmonic Motion of a Pendulum as an Approximation   Use the remainder theorem to analyze the claim made in Giancoli's textbook that for small angles, . Specifically, show that the error is less than for angles below .  Here is the exact quote from Giancoli's textbook:    For angles less than , the difference between (in radians) and is less than .     Solution.      Blank workspace for checking Giancoli's claim about the small-angle approximation.        *Approximating the value of using Taylor series   Starred section. This one is for the interested reader. It will not be examined.  In this subsection, we will discuss how to approximate the value of using Taylor series. We will use the Taylor series for , which centered at is    Approximating using the Taylor series for   Use the Taylor series for to approximate the value of . Use Taylor's Remainder Theorem to find an upper bound for the error in this approximation, and show that the error decreases as the order of the Taylor polynomial increases.   Solution.      Blank workspace for approximating pi with the arctangent series and bounding the error.    For the record: the derivatives of satisfy and the resulting error bound is The bound goes to zero as , but very slowly: to guarantee an error of at most one needs .     As we saw in the previous example, Taylor series approached very slowly. In the project below, we will see how to use the so-called Euler's formula to approximate much faster. As you may know, there are many other methods to approximate , which we will not cover here.   Computing with Euler's identity   In we approximated by evaluating the Taylor series at , and Taylor's Remainder Theorem gave the error bound , which decreases very slowly. In this guided problem we compute far more efficiently using Euler's identity  which lets us evaluate the Taylor series at the small arguments and , where it converges much faster.    Proving Euler's identity   Let and . Use the addition formula to prove that .     Blank box in two rows, for computing the tangent of the sum and for the argument pinning down the angle.       The approximation   Let be the Taylor polynomial of order for centered at . Use Euler's identity to explain why Write out this approximation explicitly for .     Blank box in two rows, for justifying the approximation and for evaluating it at n equals three.       Bounding the error with the Remainder Theorem   In we showed that the derivatives of satisfy . Use to show that for  and conclude that      Blank box in two rows, for bounding the arctangent remainder and for combining the two remainders into the stated bound.       How much better is it?   Evaluate the error bound for and compare it with the bound obtained in for the same order. Then find the smallest for which the bound guarantees an error of at most .     Blank box in two rows, for evaluating the bound at n equals nine and for finding the smallest n meeting the tolerance.       The video below shows the approximation converging to , and compares its error, together with the Remainder-Theorem bound, against the much slower method at .    The error of Euler's-identity approximation (with its bound ) decreasing geometrically as increases, compared with the series at .         "
},
{
  "id": "ex-skel-taylor-limit-arctan-sin",
  "level": "2",
  "url": "subsec-skel-taylor-applications.html#ex-skel-taylor-limit-arctan-sin",
  "type": "Example",
  "number": "2.3.15",
  "title": "A <span class=\"process-math\">\\(\\frac{0}{0}\\)<\/span> limit by Taylor series.",
  "body": " A limit by Taylor series   Compute    Solution.      Blank box in four rows: the numerator and denominator as series, the factoring and cancellation, the limit, and why the remaining terms vanish.     "
},
{
  "id": "ex-skel-taylor-lhopital",
  "level": "2",
  "url": "subsec-skel-taylor-applications.html#ex-skel-taylor-lhopital",
  "type": "Example",
  "number": "2.3.16",
  "title": "Proving L’Hôpital’s rule with Taylor’s formula.",
  "body": " Proving L'Hôpital's rule with Taylor's formula   Let and have continuous second derivatives on an open interval containing , with and . Use Taylor's formula to prove L'Hôpital's rule:    Solution.      Blank box in four rows: Taylor's formula for f and for g, the quotient after cancelling the common factor, the limit as x tends to a, and the second equality.     "
},
{
  "id": "rmk-skel-lhopital-higher-order",
  "level": "2",
  "url": "subsec-skel-taylor-applications.html#rmk-skel-lhopital-higher-order",
  "type": "Remark",
  "number": "2.3.17",
  "title": "Why the rule sometimes has to be applied several times.",
  "body": " Why the rule sometimes has to be applied several times  If as well, the quotient is again of the form and L'Hôpital's rule has to be applied again. Taylor's formula explains what is going on. Suppose and have continuous derivatives near , their first derivatives vanish at , and . Then Taylor's formula with gives because each remainder is at most a constant times . The limit is the ratio of the first nonzero Taylor coefficients, which is exactly what applications of L'Hôpital's rule compute. In the first nonzero coefficients were those of . Check that , with and , agrees with the limit you found.  "
},
{
  "id": "ex-skel-taylor-integral-exp",
  "level": "2",
  "url": "subsec-skel-taylor-applications.html#ex-skel-taylor-integral-exp",
  "type": "Example",
  "number": "2.3.18",
  "title": "A definite integral with no elementary antiderivative.",
  "body": " A definite integral with no elementary antiderivative   The function has no elementary antiderivative, so the integral cannot be evaluated with the fundamental theorem of calculus. Use the Taylor polynomial of order of to approximate , bound the error with the Remainder Estimation Theorem, and find a value of that guarantees an error of at most .   Solution.      Blank box in four rows: the series with its remainder and the bound on the remainder, the integration from 0 to 1, the error bound, and the choice of n.     "
},
{
  "id": "ex-skel-taylor-integral-exp-sin",
  "level": "2",
  "url": "subsec-skel-taylor-applications.html#ex-skel-taylor-integral-exp-sin",
  "type": "Example",
  "number": "2.3.19",
  "title": "A non-elementary integral computed exactly.",
  "body": " A non-elementary integral computed exactly   In , term-by-term integration produced a series that we could only estimate . Sometimes, however, the series produced by term-by-term integration is one we already recognize, and then the integral can be evaluated exactly , even though the integrand has no elementary antiderivative. Show that    Hint. Each power of has to be integrated against on . Use the following fact from Calculus II, proved by integration by parts Let . Then . For , integration by parts with and gives , since as . By induction, . : for every integer ,    Solution. Integrating an infinite series term by term over the unbounded interval needs a justification, and the Remainder Estimation Theorem supplies one. Let be the partial sum of the series for , a polynomial of degree . For every derivative satisfies . The Taylor polynomial of of degree has no term, so it equals , and the Remainder Estimation Theorem gives . Dividing by , . Multiplying by , integrating, and using with , the integral differs from the partial sum by at most . This bound tends to as , so the partial sums of the Leibniz series converge to the integral. Since they also converge to , the integral equals . A numerical evaluation of the integral gives , which agrees with . The bound also shows why the Leibniz series converges slowly: to guarantee an error below we need roughly terms.      Blank box in three rows: a series for the integrand, the term-by-term integration, and recognizing the resulting series.     "
},
{
  "id": "fig-skel-ke-cartoon",
  "level": "2",
  "url": "subsec-skel-taylor-applications.html#fig-skel-ke-cartoon",
  "type": "Figure",
  "number": "2.3.20",
  "title": "",
  "body": " Relativistic versus Newtonian kinetic energy. The relativistic energy races toward a wall at the speed of light , while the Newtonian energy follows a gentle parabola; the two are approximately in agreement only when .      Krel(v) = 1\/sqrt(1 - v^2) - 1  Knewt(v) = v^2\/2               c  0    \\text{Relativistic}\\, K    \\text{Newtonian} \\,K     \\text{For}\\, v \\ll c: K_{\\text{rel}} \\approx K_{\\text{new}}               "
},
{
  "id": "ex-skel-newtonian-ke",
  "level": "2",
  "url": "subsec-skel-taylor-applications.html#ex-skel-newtonian-ke",
  "type": "Example",
  "number": "2.3.21",
  "title": "Newtonian kinetic energy as an approximation to relativistic kinetic energy when <span class=\"process-math\">\\(v \\ll c\\)<\/span>.",
  "body": " Newtonian kinetic energy as an approximation to relativistic kinetic energy when   Show that the kinetic energy of an object moving with velocity can be approximated by the formula when .   Solution.      Blank workspace for approximating the relativistic kinetic energy when v is much smaller than c.    When , we can therefore approximate the kinetic energy as:    "
},
{
  "id": "ex-skel-error-newtonian-ke",
  "level": "2",
  "url": "subsec-skel-taylor-applications.html#ex-skel-error-newtonian-ke",
  "type": "Example",
  "number": "2.3.22",
  "title": "Estimating the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy.",
  "body": " Estimating the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy   Assume that a car is moving with a velocity of ( miles per hour). Use the remainder's theorem to estimate the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy of the car. The speed of light is .   Solution.      Blank workspace for estimating the error in the Newtonian kinetic energy formula for the car.     "
},
{
  "id": "fig-skel-pendulum-forces",
  "level": "2",
  "url": "subsec-skel-taylor-applications.html#fig-skel-pendulum-forces",
  "type": "Figure",
  "number": "2.3.23",
  "title": "",
  "body": " Forces on a simple pendulum. The weight resolves into a component along the string (balanced by the tension ) and a component tangent to the arc, which acts as the restoring force.     theta = radians(33)  fscale = 0.6  ft = 0.62  pivot = (0, 0)  bob = (sin(theta), -cos(theta))  mgEnd = (sin(theta), -cos(theta) - fscale)  ftEnd = (sin(theta) - ft*sin(theta), -cos(theta) + ft*cos(theta))  sinEnd = (sin(theta) - fscale*sin(theta)*cos(theta), -cos(theta) - fscale*sin(theta)*sin(theta))  cosEnd = (sin(theta) + fscale*cos(theta)*sin(theta), -cos(theta) - fscale*cos(theta)*cos(theta))          \\ell  \\theta   \\ell\\sin\\theta  x   \\overrightarrow{\\mathbf{F}}_T   m\\overrightarrow{\\mathbf{g}}   mg\\sin\\theta   mg\\cos\\theta   m               "
},
{
  "id": "fig-skel-pendulum-forces-video",
  "level": "2",
  "url": "subsec-skel-taylor-applications.html#fig-skel-pendulum-forces-video",
  "type": "Figure",
  "number": "2.3.24",
  "title": "",
  "body": " Forces on a simple pendulum. The weight resolves into a radial component along the string, balanced by the tension , and a tangential component directed toward equilibrium, which acts as the restoring force. For small angles, gives .   "
},
{
  "id": "ex-skel-small-angle-pendulum",
  "level": "2",
  "url": "subsec-skel-taylor-applications.html#ex-skel-small-angle-pendulum",
  "type": "Example",
  "number": "2.3.25",
  "title": "Simple Harmonic Motion of a Pendulum as an Approximation.",
  "body": " Simple Harmonic Motion of a Pendulum as an Approximation   Use the remainder theorem to analyze the claim made in Giancoli's textbook that for small angles, . Specifically, show that the error is less than for angles below .  Here is the exact quote from Giancoli's textbook:    For angles less than , the difference between (in radians) and is less than .     Solution.      Blank workspace for checking Giancoli's claim about the small-angle approximation.     "
},
{
  "id": "ex-skel-approx-pi-arctan",
  "level": "2",
  "url": "subsec-skel-taylor-applications.html#ex-skel-approx-pi-arctan",
  "type": "Example",
  "number": "2.3.26",
  "title": "Approximating <span class=\"process-math\">\\(\\pi\\)<\/span> using the Taylor series for <span class=\"process-math\">\\(\\arctan(x)\\)<\/span>.",
  "body": " Approximating using the Taylor series for   Use the Taylor series for to approximate the value of . Use Taylor's Remainder Theorem to find an upper bound for the error in this approximation, and show that the error decreases as the order of the Taylor polynomial increases.   Solution.      Blank workspace for approximating pi with the arctangent series and bounding the error.    For the record: the derivatives of satisfy and the resulting error bound is The bound goes to zero as , but very slowly: to guarantee an error of at most one needs .   "
},
{
  "id": "proj-skel-euler-pi",
  "level": "2",
  "url": "subsec-skel-taylor-applications.html#proj-skel-euler-pi",
  "type": "Project",
  "number": "2.3.4.1",
  "title": "Computing <span class=\"process-math\">\\(\\pi\\)<\/span> with Euler’s identity.",
  "body": " Computing with Euler's identity   In we approximated by evaluating the Taylor series at , and Taylor's Remainder Theorem gave the error bound , which decreases very slowly. In this guided problem we compute far more efficiently using Euler's identity  which lets us evaluate the Taylor series at the small arguments and , where it converges much faster.    Proving Euler's identity   Let and . Use the addition formula to prove that .     Blank box in two rows, for computing the tangent of the sum and for the argument pinning down the angle.       The approximation   Let be the Taylor polynomial of order for centered at . Use Euler's identity to explain why Write out this approximation explicitly for .     Blank box in two rows, for justifying the approximation and for evaluating it at n equals three.       Bounding the error with the Remainder Theorem   In we showed that the derivatives of satisfy . Use to show that for  and conclude that      Blank box in two rows, for bounding the arctangent remainder and for combining the two remainders into the stated bound.       How much better is it?   Evaluate the error bound for and compare it with the bound obtained in for the same order. Then find the smallest for which the bound guarantees an error of at most .     Blank box in two rows, for evaluating the bound at n equals nine and for finding the smallest n meeting the tolerance.       The video below shows the approximation converging to , and compares its error, together with the Remainder-Theorem bound, against the much slower method at .    The error of Euler's-identity approximation (with its bound ) decreasing geometrically as increases, compared with the series at .      "
},
{
  "id": "subsec-skel-taylor-proof",
  "level": "1",
  "url": "subsec-skel-taylor-proof.html",
  "type": "Subsection",
  "number": "2.3.5",
  "title": "Proof of the remainder theorem",
  "body": " Proof of the remainder theorem  In this subsection, we will provide a proof of the remainder theorem.  Let be a function that has continuous derivatives on an open interval containing . We want to show that for each and for each positive integer , there exists a number between and such that where and   To prove this, we will first prove the following lemma:    Let be a function that is -times differentiable. Also, suppose that and , where . Then there exists a number between and such that .     Proof.      Blank workspace for proving the lemma.     The error function and its derivatives are zero at the point of expansion  Note that for the error function , we have .    Completing the proof.      Blank workspace for completing the proof of the remainder theorem.    "
},
{
  "id": "lemma-skel-mvt-zeros",
  "level": "2",
  "url": "subsec-skel-taylor-proof.html#lemma-skel-mvt-zeros",
  "type": "Lemma",
  "number": "2.3.28",
  "title": "",
  "body": "  Let be a function that is -times differentiable. Also, suppose that and , where . Then there exists a number between and such that .   "
},
{
  "id": "rmk-skel-zero-error-function",
  "level": "2",
  "url": "subsec-skel-taylor-proof.html#rmk-skel-zero-error-function",
  "type": "Remark",
  "number": "2.3.29",
  "title": "The error function and its derivatives are zero at the point of expansion.",
  "body": " The error function and its derivatives are zero at the point of expansion  Note that for the error function , we have .  "
},
{
  "id": "subsec-skel-3d-coordinate-system",
  "level": "1",
  "url": "subsec-skel-3d-coordinate-system.html",
  "type": "Subsection",
  "number": "3.1.1",
  "title": "The Rectangular Coordinate System",
  "body": " The Rectangular Coordinate System  To locate a point in the plane we need two numbers; to locate a point in space we need three. In this section we set up the rectangular coordinate system in space, which is the setting for everything that follows. We then measure distance, describe spheres, and practice translating between an equation and the surface or region it represents.  We will study the Cartesian coordinate system, which is also known as the rectangular coordinate system . We choose a point in space, called the origin , and three mutually perpendicular lines through it, called the coordinate axes and labelled the -, -, and -axis. A point in space is then described by an ordered triple , where , , and are the signed distances from the origin along the three axes.  On the axes below, mark off units along the -axis, then units parallel to the -axis, then units parallel to the -axis, and label the point you reach.     Empty set of three-dimensional coordinate axes labelled x, y, and z, meeting at the origin O, for plotting the point P with coordinates a, b, c.    The three axes must follow the right-hand rule : if the index finger of the right hand points along the positive -axis and the middle finger points along the positive -axis, then the thumb points along the positive -axis. illustrates this convention; the square corner marks in that figure are a reminder that the three axes are mutually orthogonal, so each pair of axes meets at a right angle. Every coordinate system in this course is arranged this way.  The right-hand rule will return in , where we use it in a second form to determine the direction of the cross product of two vectors.   The right-hand rule. With the index finger of the right hand along the positive -axis and the middle finger along the positive -axis, the thumb points along the positive -axis. The square corner marks record that the three axes are mutually orthogonal: each pair of axes meets at a right angle, even though the drawing on the page must distort those angles.    A right hand with the index finger extended along the positive x axis, the middle finger bent to point along the positive y axis, and the thumb extended upward along the positive z axis. A small arc marks the angle between the index and middle fingers. Three magenta square corner marks at the origin, one for each pair of axes, indicate that the x, y, and z axes are mutually perpendicular.      Now plot the point on the axes below.     Empty set of three-dimensional coordinate axes, extended in the negative x and negative z directions, for plotting the point negative 4, 3, negative 5.    "
},
{
  "id": "subsec-skel-3d-coordinate-system-3",
  "level": "2",
  "url": "subsec-skel-3d-coordinate-system.html#subsec-skel-3d-coordinate-system-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rectangular coordinate system origin coordinate axes "
},
{
  "id": "subsec-skel-3d-coordinate-system-6",
  "level": "2",
  "url": "subsec-skel-3d-coordinate-system.html#subsec-skel-3d-coordinate-system-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "right-hand rule "
},
{
  "id": "fig-skel-3d-right-hand",
  "level": "2",
  "url": "subsec-skel-3d-coordinate-system.html#fig-skel-3d-right-hand",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": " The right-hand rule. With the index finger of the right hand along the positive -axis and the middle finger along the positive -axis, the thumb points along the positive -axis. The square corner marks record that the three axes are mutually orthogonal: each pair of axes meets at a right angle, even though the drawing on the page must distort those angles.    A right hand with the index finger extended along the positive x axis, the middle finger bent to point along the positive y axis, and the thumb extended upward along the positive z axis. A small arc marks the angle between the index and middle fingers. Three magenta square corner marks at the origin, one for each pair of axes, indicate that the x, y, and z axes are mutually perpendicular.     "
},
{
  "id": "subsec-skel-3d-planes-octants",
  "level": "1",
  "url": "subsec-skel-3d-planes-octants.html",
  "type": "Subsection",
  "number": "3.1.2",
  "title": "Coordinate Planes and Octants",
  "body": " Coordinate Planes and Octants  The three coordinate axes determine three coordinate planes . The -plane is the plane containing the - and -axes, and it is described by the single equation ; similarly the -plane is and the -plane is . These three planes are shown in .   The three coordinate planes: the -plane , the -plane , and the -plane . They divide space into eight octants.    Three shaded rectangles meeting at the origin at right angles represent the three coordinate planes. The horizontal one is the x y plane where z equals zero, and the two vertical ones are the x z plane where y equals zero and the y z plane where x equals zero.      In the plane the two axes create four quadrants; in space the three coordinate planes create eight octants . The first octant is the one in which , , and are all positive.  From , record the sign pattern of the octant a point lies in.     Blank box with three rows, for the sign pattern of the first octant, the sign pattern of the octant below it, and a count of the octants having a negative coordinate.    More generally, equations such as , , and represent planes parallel to the -, -, and -planes respectively. Each of these equations places one restriction on a point of space and leaves the other two coordinates free, so each describes a plane. Consequently a point can be thought of as the intersection of three such planes: the point of is the intersection of the planes , , and .   A point as the intersection of three planes. The planes , , and meet pairwise in three lines, and all three lines meet in the single point .    Three shaded planes, one for x equals 1, one for y equals 1, and one for z equals 1, intersect one another at right angles. Each pair of planes meets in a red line: the planes x equals 1 and y equals 1 meet in a vertical line, the planes x equals 1 and z equals 1 meet in a line running in the y direction, and the planes y equals 1 and z equals 1 meet in a line running in the x direction. All three red lines cross at the single common point, marked in green and labelled P with coordinates 1, 1, 1.      "
},
{
  "id": "subsec-skel-3d-planes-octants-2",
  "level": "2",
  "url": "subsec-skel-3d-planes-octants.html#subsec-skel-3d-planes-octants-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coordinate planes "
},
{
  "id": "fig-skel-3d-coordinate-planes",
  "level": "2",
  "url": "subsec-skel-3d-planes-octants.html#fig-skel-3d-coordinate-planes",
  "type": "Figure",
  "number": "3.1.2",
  "title": "",
  "body": " The three coordinate planes: the -plane , the -plane , and the -plane . They divide space into eight octants.    Three shaded rectangles meeting at the origin at right angles represent the three coordinate planes. The horizontal one is the x y plane where z equals zero, and the two vertical ones are the x z plane where y equals zero and the y z plane where x equals zero.     "
},
{
  "id": "subsec-skel-3d-planes-octants-4",
  "level": "2",
  "url": "subsec-skel-3d-planes-octants.html#subsec-skel-3d-planes-octants-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "octants first octant "
},
{
  "id": "fig-skel-3d-three-planes",
  "level": "2",
  "url": "subsec-skel-3d-planes-octants.html#fig-skel-3d-three-planes",
  "type": "Figure",
  "number": "3.1.3",
  "title": "",
  "body": " A point as the intersection of three planes. The planes , , and meet pairwise in three lines, and all three lines meet in the single point .    Three shaded planes, one for x equals 1, one for y equals 1, and one for z equals 1, intersect one another at right angles. Each pair of planes meets in a red line: the planes x equals 1 and y equals 1 meet in a vertical line, the planes x equals 1 and z equals 1 meet in a line running in the y direction, and the planes y equals 1 and z equals 1 meet in a line running in the x direction. All three red lines cross at the single common point, marked in green and labelled P with coordinates 1, 1, 1.     "
},
{
  "id": "subsec-skel-3d-distance",
  "level": "1",
  "url": "subsec-skel-3d-distance.html",
  "type": "Subsection",
  "number": "3.1.3",
  "title": "Distance Between Two Points",
  "body": " Distance Between Two Points  The distance between two points and is denoted by and can be computed with the Pythagorean theorem. As shows, the segment is the diagonal of a rectangular box whose edges are parallel to the coordinate axes.   The segment is the diagonal of a box with edges parallel to the coordinate axes.    A rectangular box with edges parallel to the coordinate axes, drawn in a three dimensional coordinate system. The point P one, with coordinates x one, y one, z one, sits at the near lower corner of the box, and the point P two, with coordinates x two, y two, z two, sits at the opposite upper corner.      Derive the distance formula from that box.     Blank box in three rows, for the Pythagorean theorem in the base triangle, the Pythagorean theorem in the vertical triangle, and the distance formula that results from combining them.    Record the formula you obtained here, so it is easy to find later.   Distance in Space  For and ,    The video in builds the box of one edge at a time and applies the Pythagorean theorem twice, in the same two steps. Use it to check the derivation you just wrote.   Deriving the distance formula in space by applying the Pythagorean theorem twice: first in the base triangle , then in the vertical triangle .    "
},
{
  "id": "fig-skel-3d-distance",
  "level": "2",
  "url": "subsec-skel-3d-distance.html#fig-skel-3d-distance",
  "type": "Figure",
  "number": "3.1.4",
  "title": "",
  "body": " The segment is the diagonal of a box with edges parallel to the coordinate axes.    A rectangular box with edges parallel to the coordinate axes, drawn in a three dimensional coordinate system. The point P one, with coordinates x one, y one, z one, sits at the near lower corner of the box, and the point P two, with coordinates x two, y two, z two, sits at the opposite upper corner.     "
},
{
  "id": "fig-skel-video-distance-formula",
  "level": "2",
  "url": "subsec-skel-3d-distance.html#fig-skel-video-distance-formula",
  "type": "Figure",
  "number": "3.1.5",
  "title": "",
  "body": " Deriving the distance formula in space by applying the Pythagorean theorem twice: first in the base triangle , then in the vertical triangle .   "
},
{
  "id": "subsec-skel-3d-spheres",
  "level": "1",
  "url": "subsec-skel-3d-spheres.html",
  "type": "Subsection",
  "number": "3.1.4",
  "title": "Spheres",
  "body": " Spheres  A sphere of radius is the set of all points whose distance from a fixed center equals , as in .   A sphere of radius centered at : the set of all points at distance from the center.    A shaded sphere with its center marked and a segment of length a drawn from the center to a point P on the surface, illustrating that every point of the sphere is the same distance a from the center.      Turn that description into an equation.     Blank box in two rows, for the distance condition defining a sphere and for the equation of the sphere obtained by squaring it.     Equation of a Sphere  The sphere of radius centered at is     Recognizing a Sphere by Completing the Square   Describe the geometric surface represented by the following equation.    Solution.      Blank box with a large upper region for completing the square and a lower row split into a space for the center and a space for the radius.      "
},
{
  "id": "subsec-skel-3d-spheres-2",
  "level": "2",
  "url": "subsec-skel-3d-spheres.html#subsec-skel-3d-spheres-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sphere "
},
{
  "id": "fig-skel-3d-sphere",
  "level": "2",
  "url": "subsec-skel-3d-spheres.html#fig-skel-3d-sphere",
  "type": "Figure",
  "number": "3.1.6",
  "title": "",
  "body": " A sphere of radius centered at : the set of all points at distance from the center.    A shaded sphere with its center marked and a segment of length a drawn from the center to a point P on the surface, illustrating that every point of the sphere is the same distance a from the center.     "
},
{
  "id": "ex-skel-3d-complete-square",
  "level": "2",
  "url": "subsec-skel-3d-spheres.html#ex-skel-3d-complete-square",
  "type": "Example",
  "number": "3.1.7",
  "title": "Recognizing a Sphere by Completing the Square.",
  "body": " Recognizing a Sphere by Completing the Square   Describe the geometric surface represented by the following equation.    Solution.      Blank box with a large upper region for completing the square and a lower row split into a space for the center and a space for the radius.     "
},
{
  "id": "subsec-skel-3d-describing-regions",
  "level": "1",
  "url": "subsec-skel-3d-describing-regions.html",
  "type": "Subsection",
  "number": "3.1.5",
  "title": "Describing Regions in Space",
  "body": " Describing Regions in Space  A single equation in , , and normally describes a surface, two simultaneous equations describe the curve where two surfaces meet, and inequalities describe solid regions. The next example collects several of these situations.   Describing Equations and Inequalities Geometrically   Describe the geometrical meaning of the following equalities and inequalities.            Solution.      Blank box divided into seven labelled rows, A through G, one for the description of each equation or inequality.    Now sketch parts A , B , D , and E on the four sets of axes below.     Empty three-dimensional axes labelled A, for sketching the plane x equals 1.     Empty three-dimensional axes labelled B, for sketching the line where the planes x equals 1 and y equals 2 meet.     Empty axes drawn in the picture plane, labelled D, for sketching the half spherical shell.     Empty axes drawn in the picture plane, labelled E, for sketching the infinite cylinder of radius one about the z axis.    Parts F and G are both built from the cylinder of part E . Sketch them on the axes below, and say in one line what changed.     Empty axes labelled F, for sketching the cylinder of radius one cut down to the slab between z equals negative one and z equals one.     Empty axes labelled G, for sketching the circle where the cylinder of radius one meets the plane z equals 3.      "
},
{
  "id": "ex-skel-3d-describe",
  "level": "2",
  "url": "subsec-skel-3d-describing-regions.html#ex-skel-3d-describe",
  "type": "Example",
  "number": "3.1.8",
  "title": "Describing Equations and Inequalities Geometrically.",
  "body": " Describing Equations and Inequalities Geometrically   Describe the geometrical meaning of the following equalities and inequalities.            Solution.      Blank box divided into seven labelled rows, A through G, one for the description of each equation or inequality.    Now sketch parts A , B , D , and E on the four sets of axes below.     Empty three-dimensional axes labelled A, for sketching the plane x equals 1.     Empty three-dimensional axes labelled B, for sketching the line where the planes x equals 1 and y equals 2 meet.     Empty axes drawn in the picture plane, labelled D, for sketching the half spherical shell.     Empty axes drawn in the picture plane, labelled E, for sketching the infinite cylinder of radius one about the z axis.    Parts F and G are both built from the cylinder of part E . Sketch them on the axes below, and say in one line what changed.     Empty axes labelled F, for sketching the cylinder of radius one cut down to the slab between z equals negative one and z equals one.     Empty axes labelled G, for sketching the circle where the cylinder of radius one meets the plane z equals 3.     "
},
{
  "id": "subsec-skel-vec-definitions",
  "level": "1",
  "url": "subsec-skel-vec-definitions.html",
  "type": "Subsection",
  "number": "3.2.1",
  "title": "Definitions, Terminology, and Notation",
  "body": " Definitions, Terminology, and Notation  Some quantities can be described using real numbers alone, such as time or temperature. To describe other quantities we need a direction as well as a magnitude. Consider the velocity of a car: we need to know both the speed of the car and its direction of motion to specify its velocity completely. For instance, we might say that the car is moving with speed miles per hour in the direction of north. Such quantities are referred to as vector quantities , and they are the subject of this section.  A vector is a directed line segment from an initial point  to a terminal point  , and is denoted by . We denote the length of a vector by . See .   A vector is a directed line segment. It carries two pieces of information: a direction, shown by the arrowhead, and a magnitude, which is its length .          A    B    \\text{initial point}    \\text{terminal point}    \\overrightarrow{AB}               Two vectors are equal if they have the same direction and the same magnitude. Notice that this definition says nothing about where a vector is located: a vector may be moved around the plane freely, and as long as its direction and length are unchanged it is the same vector. The vectors shown in are all equal to each other, .   Four equal vectors. They have different initial points, but the same direction and the same length, so . Only begins at the origin.            A    B    C    D    O    P    E    F                Only one of the vectors in starts from the origin. We say that is in standard position , and we denote it by a bold letter such as , which is also referred to as the standard position vector .  In 2D, if the initial point of a vector is the origin, i.e. , and its final point is , then the component form of the vector is . In 3D, if the initial point of a vector is the origin, i.e. , and its final point is , then the component form of the vector is .   The vector and its standard position vector . The two arrows are equal as vectors; only the second one begins at the origin.    A three dimensional coordinate system. A blue arrow runs from the point P to the point Q. A second arrow of the same length and direction, drawn in magenta, runs from the origin to the point with coordinates v one, v two, v three. Dashed lines drop from the tip of the magenta arrow to show its three components along the axes.      Read the components of off .     Blank box in two rows, one for the components of the standard position vector in terms of the coordinates of P and Q, and one for its length.     Components and Length  For and , the standard position vector of is and its magnitude is     Length and Standard Position Vector      Compute the length of the vector with the initial point and the final point .    Find the standard position vector corresponding to this vector.      Solution.      Blank box in three rows, for the length of the vector P Q, for its standard position vector, and for the check that the two lengths agree.      "
},
{
  "id": "subsec-skel-vec-definitions-2",
  "level": "2",
  "url": "subsec-skel-vec-definitions.html#subsec-skel-vec-definitions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector quantities "
},
{
  "id": "subsec-skel-vec-definitions-3",
  "level": "2",
  "url": "subsec-skel-vec-definitions.html#subsec-skel-vec-definitions-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector initial point terminal point "
},
{
  "id": "fig-skel-vec-directed-segment",
  "level": "2",
  "url": "subsec-skel-vec-definitions.html#fig-skel-vec-directed-segment",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": " A vector is a directed line segment. It carries two pieces of information: a direction, shown by the arrowhead, and a magnitude, which is its length .          A    B    \\text{initial point}    \\text{terminal point}    \\overrightarrow{AB}              "
},
{
  "id": "subsec-skel-vec-definitions-5",
  "level": "2",
  "url": "subsec-skel-vec-definitions.html#subsec-skel-vec-definitions-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equal "
},
{
  "id": "fig-skel-vec-equal",
  "level": "2",
  "url": "subsec-skel-vec-definitions.html#fig-skel-vec-equal",
  "type": "Figure",
  "number": "3.2.2",
  "title": "",
  "body": " Four equal vectors. They have different initial points, but the same direction and the same length, so . Only begins at the origin.            A    B    C    D    O    P    E    F               "
},
{
  "id": "subsec-skel-vec-definitions-7",
  "level": "2",
  "url": "subsec-skel-vec-definitions.html#subsec-skel-vec-definitions-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard position standard position vector "
},
{
  "id": "subsec-skel-vec-definitions-8",
  "level": "2",
  "url": "subsec-skel-vec-definitions.html#subsec-skel-vec-definitions-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "component form "
},
{
  "id": "fig-skel-vec-components",
  "level": "2",
  "url": "subsec-skel-vec-definitions.html#fig-skel-vec-components",
  "type": "Figure",
  "number": "3.2.3",
  "title": "",
  "body": " The vector and its standard position vector . The two arrows are equal as vectors; only the second one begins at the origin.    A three dimensional coordinate system. A blue arrow runs from the point P to the point Q. A second arrow of the same length and direction, drawn in magenta, runs from the origin to the point with coordinates v one, v two, v three. Dashed lines drop from the tip of the magenta arrow to show its three components along the axes.     "
},
{
  "id": "ex-skel-vec-length",
  "level": "2",
  "url": "subsec-skel-vec-definitions.html#ex-skel-vec-length",
  "type": "Example",
  "number": "3.2.4",
  "title": "Length and Standard Position Vector.",
  "body": " Length and Standard Position Vector      Compute the length of the vector with the initial point and the final point .    Find the standard position vector corresponding to this vector.      Solution.      Blank box in three rows, for the length of the vector P Q, for its standard position vector, and for the check that the two lengths agree.     "
},
{
  "id": "subsec-skel-vec-algebra",
  "level": "1",
  "url": "subsec-skel-vec-algebra.html",
  "type": "Subsection",
  "number": "3.2.2",
  "title": "Vector Algebra Operations",
  "body": " Vector Algebra Operations   Vector Addition   Let and . The sum of and is the vector      Parallelogram law. The parallelogram law tells us how to add two vectors geometrically, and is described in . Placing the tail of at the head of produces the sum as the third side of a triangle; equivalently, drawing both vectors from a common initial point makes the sum the diagonal of the parallelogram they span.   The parallelogram law: head to tail on the left, the diagonal of the parallelogram on the right.         x  y     x  y              Adding Two Vectors   Add the following two vectors geometrically and algebraically.    Solution.      Blank box for the algebraic computation of the sum of the two vectors.     Empty coordinate grid running from negative four to three horizontally and negative one to four vertically, for drawing the two vectors and the parallelogram whose diagonal is their sum.       Scalar Multiplication   Let and let be a scalar. The scalar multiple  is the vector     Note that both definitions can be reduced to the 2D case simply by removing the last components of the vectors.  Scaling a vector by scales its length by . Show this.     Blank workspace for showing that the length of k times u equals the absolute value of k times the length of u.     Length of a Scalar Multiple      The vector has the same length as ; however, the two vectors point in opposite directions. In general the length of is times the length of , and if the two vectors point in the same direction, whereas if they point in opposite directions. shows several examples.   Scalar multiples of . Multiplying by or stretches the vector without turning it; multiplying by stretches it and reverses its direction.           \\mathbf u    1.5\\,\\mathbf u    2\\,\\mathbf u    -2\\,\\mathbf u                 Vector Subtraction   Subtraction is handled with the same idea: the difference  means so we reverse and then add. Geometrically, is the vector that points from the head of to the head of when both are drawn from a common initial point.     Adding and Subtracting Geometrically   Given the two vectors and , find and geometrically.   Solution.      Empty coordinate grid running from negative three to three horizontally and negative three to four vertically, for drawing the two vectors, the reversed vector, and the two parallelograms.     Blank box in two rows, for the components of the sum and of the difference read off the grid.      The operations satisfy the familiar algebraic rules collected in .   Properties of Vector Operations   Let , , be vectors and , be scalars. Then     "
},
{
  "id": "def-skel-vec-addition",
  "level": "2",
  "url": "subsec-skel-vec-algebra.html#def-skel-vec-addition",
  "type": "Definition",
  "number": "3.2.5",
  "title": "Vector Addition.",
  "body": " Vector Addition   Let and . The sum of and is the vector    "
},
{
  "id": "subsec-skel-vec-algebra-3",
  "level": "2",
  "url": "subsec-skel-vec-algebra.html#subsec-skel-vec-algebra-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Parallelogram law. "
},
{
  "id": "fig-skel-vec-parallelogram",
  "level": "2",
  "url": "subsec-skel-vec-algebra.html#fig-skel-vec-parallelogram",
  "type": "Figure",
  "number": "3.2.6",
  "title": "",
  "body": " The parallelogram law: head to tail on the left, the diagonal of the parallelogram on the right.         x  y     x  y            "
},
{
  "id": "ex-skel-vec-add",
  "level": "2",
  "url": "subsec-skel-vec-algebra.html#ex-skel-vec-add",
  "type": "Example",
  "number": "3.2.7",
  "title": "Adding Two Vectors.",
  "body": " Adding Two Vectors   Add the following two vectors geometrically and algebraically.    Solution.      Blank box for the algebraic computation of the sum of the two vectors.     Empty coordinate grid running from negative four to three horizontally and negative one to four vertically, for drawing the two vectors and the parallelogram whose diagonal is their sum.     "
},
{
  "id": "def-skel-vec-scalar",
  "level": "2",
  "url": "subsec-skel-vec-algebra.html#def-skel-vec-scalar",
  "type": "Definition",
  "number": "3.2.8",
  "title": "Scalar Multiplication.",
  "body": " Scalar Multiplication   Let and let be a scalar. The scalar multiple  is the vector    "
},
{
  "id": "fig-skel-vec-scalar",
  "level": "2",
  "url": "subsec-skel-vec-algebra.html#fig-skel-vec-scalar",
  "type": "Figure",
  "number": "3.2.9",
  "title": "",
  "body": " Scalar multiples of . Multiplying by or stretches the vector without turning it; multiplying by stretches it and reverses its direction.           \\mathbf u    1.5\\,\\mathbf u    2\\,\\mathbf u    -2\\,\\mathbf u               "
},
{
  "id": "def-skel-vec-subtraction",
  "level": "2",
  "url": "subsec-skel-vec-algebra.html#def-skel-vec-subtraction",
  "type": "Definition",
  "number": "3.2.10",
  "title": "Vector Subtraction.",
  "body": " Vector Subtraction   Subtraction is handled with the same idea: the difference  means so we reverse and then add. Geometrically, is the vector that points from the head of to the head of when both are drawn from a common initial point.   "
},
{
  "id": "ex-skel-vec-add-subtract",
  "level": "2",
  "url": "subsec-skel-vec-algebra.html#ex-skel-vec-add-subtract",
  "type": "Example",
  "number": "3.2.11",
  "title": "Adding and Subtracting Geometrically.",
  "body": " Adding and Subtracting Geometrically   Given the two vectors and , find and geometrically.   Solution.      Empty coordinate grid running from negative three to three horizontally and negative three to four vertically, for drawing the two vectors, the reversed vector, and the two parallelograms.     Blank box in two rows, for the components of the sum and of the difference read off the grid.     "
},
{
  "id": "thm-skel-vec-properties",
  "level": "2",
  "url": "subsec-skel-vec-algebra.html#thm-skel-vec-properties",
  "type": "Theorem",
  "number": "3.2.12",
  "title": "Properties of Vector Operations.",
  "body": " Properties of Vector Operations   Let , , be vectors and , be scalars. Then    "
},
{
  "id": "subsec-skel-vec-unit",
  "level": "1",
  "url": "subsec-skel-vec-unit.html",
  "type": "Subsection",
  "number": "3.2.3",
  "title": "Unit Vectors",
  "body": " Unit Vectors  Vectors of length one are referred to as unit vectors . The standard unit vectors are the ones pointing in the positive direction of , , and , and they are denoted by , , and respectively, as in .   Empty axes for the standard unit vectors , , and , and for the decomposition of a vector into components along the axes.    A three dimensional coordinate system with x, y and z axes and nothing drawn on it.      Combining and , any vector can be written as a linear combination of , , and as   To find a unit vector pointing in the same direction as a nonzero vector , we divide by its own length. We write , read a hat , for the resulting unit vector: From now on a hat always marks a vector of length one, as it does for the standard unit vectors , , and .  Check that really does produce a unit vector.     Blank workspace, one line high, for verifying that a hat has length one.     Standard Unit Vectors and a Unit Direction   Consider the two vectors and .   Express in terms of the standard unit vectors.    Find the unit vector in the direction of .      Solution.      Blank box in three rows, for the sum written with the standard unit vectors, for its length, and for the unit vector in its direction.      "
},
{
  "id": "subsec-skel-vec-unit-2",
  "level": "2",
  "url": "subsec-skel-vec-unit.html#subsec-skel-vec-unit-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit vectors standard unit vectors "
},
{
  "id": "fig-skel-vec-ijk",
  "level": "2",
  "url": "subsec-skel-vec-unit.html#fig-skel-vec-ijk",
  "type": "Figure",
  "number": "3.2.13",
  "title": "",
  "body": " Empty axes for the standard unit vectors , , and , and for the decomposition of a vector into components along the axes.    A three dimensional coordinate system with x, y and z axes and nothing drawn on it.     "
},
{
  "id": "ex-skel-vec-unit",
  "level": "2",
  "url": "subsec-skel-vec-unit.html#ex-skel-vec-unit",
  "type": "Example",
  "number": "3.2.14",
  "title": "Standard Unit Vectors and a Unit Direction.",
  "body": " Standard Unit Vectors and a Unit Direction   Consider the two vectors and .   Express in terms of the standard unit vectors.    Find the unit vector in the direction of .      Solution.      Blank box in three rows, for the sum written with the standard unit vectors, for its length, and for the unit vector in its direction.     "
},
{
  "id": "subsec-skel-dot-product",
  "level": "1",
  "url": "subsec-skel-dot-product.html",
  "type": "Subsection",
  "number": "3.3.1",
  "title": "The Dot Product and the Angle between Two Vectors",
  "body": " The Dot Product and the Angle between Two Vectors  Consider two vectors and , and let , as shown in . By the law of cosines,    The vectors , , and , together with the angle between and .     u=(1.5,4)  v=(4,1)  w=u-v       \\mathbf u    \\mathbf v    \\mathbf w    \\theta                 Proving the law of cosines: drop a perpendicular from the tip of and apply the Pythagorean theorem to the right triangle whose hypotenuse is .    Now compute a second way, in components, and compare the two answers.     Blank box in three rows, for the component expansion of the length of w squared, for equating it with the law of cosines, and for the resulting formula for the cosine of the angle.     Angle between Two Vectors   Let and be two nonzero vectors, and let , with , be the angle between them. Then      Dot Product   The term in the numerator of is known as the dot product of the two vectors and , and is denoted .        Computing a dot product   Let and . Compute , and use it to find the angle between and .   Solution.      Blank box in four rows, for the dot product and the predicted type of angle, for the two lengths, for the cosine of the angle, and for the angle itself.       Orthogonal vectors  If the two vectors and are orthogonal, then , which means . Conversely, if and are two vectors such that , then and are orthogonal.       A right triangle detected with the dot product   Consider the triangle with vertices , , and . Show that this is a right triangle using the dot product and the orthogonality criterion .   Solution.      Empty coordinate grid running from negative two and a half to two and a half in both directions, for plotting the triangle with vertices A, B, and C.     Blank box in two rows, for the two vectors leaving the right-angle vertex together with their dot product, and for the conclusion.       The remaining angles of the triangle   For the triangle of , calculate the remaining angles.   Solution.      Blank box in two rows, one for the computation of the angle at vertex A and one for the angle at vertex B.       Properties of the Dot Product    If , , and are any vectors and is a scalar, then             Prove properties 1, 3, and 4.     Blank box in three labelled rows, one for the proof of each of properties one, three, and four of the dot product.     "
},
{
  "id": "fig-skel-law-of-cosines",
  "level": "2",
  "url": "subsec-skel-dot-product.html#fig-skel-law-of-cosines",
  "type": "Figure",
  "number": "3.3.1",
  "title": "",
  "body": " The vectors , , and , together with the angle between and .     u=(1.5,4)  v=(4,1)  w=u-v       \\mathbf u    \\mathbf v    \\mathbf w    \\theta               "
},
{
  "id": "fig-skel-law-of-cosines-video",
  "level": "2",
  "url": "subsec-skel-dot-product.html#fig-skel-law-of-cosines-video",
  "type": "Figure",
  "number": "3.3.2",
  "title": "",
  "body": " Proving the law of cosines: drop a perpendicular from the tip of and apply the Pythagorean theorem to the right triangle whose hypotenuse is .   "
},
{
  "id": "thm-skel-angle-formula",
  "level": "2",
  "url": "subsec-skel-dot-product.html#thm-skel-angle-formula",
  "type": "Theorem",
  "number": "3.3.3",
  "title": "Angle between Two Vectors.",
  "body": " Angle between Two Vectors   Let and be two nonzero vectors, and let , with , be the angle between them. Then    "
},
{
  "id": "def-skel-dot-product",
  "level": "2",
  "url": "subsec-skel-dot-product.html#def-skel-dot-product",
  "type": "Definition",
  "number": "3.3.4",
  "title": "Dot Product.",
  "body": " Dot Product   The term in the numerator of is known as the dot product of the two vectors and , and is denoted .      "
},
{
  "id": "ex-skel-dot-product-compute",
  "level": "2",
  "url": "subsec-skel-dot-product.html#ex-skel-dot-product-compute",
  "type": "Example",
  "number": "3.3.5",
  "title": "Computing a dot product.",
  "body": " Computing a dot product   Let and . Compute , and use it to find the angle between and .   Solution.      Blank box in four rows, for the dot product and the predicted type of angle, for the two lengths, for the cosine of the angle, and for the angle itself.     "
},
{
  "id": "skel-remark-orthogonal",
  "level": "2",
  "url": "subsec-skel-dot-product.html#skel-remark-orthogonal",
  "type": "Remark",
  "number": "3.3.6",
  "title": "Orthogonal vectors.",
  "body": " Orthogonal vectors  If the two vectors and are orthogonal, then , which means . Conversely, if and are two vectors such that , then and are orthogonal.     "
},
{
  "id": "ex-skel-right-triangle",
  "level": "2",
  "url": "subsec-skel-dot-product.html#ex-skel-right-triangle",
  "type": "Example",
  "number": "3.3.7",
  "title": "A right triangle detected with the dot product.",
  "body": " A right triangle detected with the dot product   Consider the triangle with vertices , , and . Show that this is a right triangle using the dot product and the orthogonality criterion .   Solution.      Empty coordinate grid running from negative two and a half to two and a half in both directions, for plotting the triangle with vertices A, B, and C.     Blank box in two rows, for the two vectors leaving the right-angle vertex together with their dot product, and for the conclusion.     "
},
{
  "id": "ex-skel-remaining-angles",
  "level": "2",
  "url": "subsec-skel-dot-product.html#ex-skel-remaining-angles",
  "type": "Example",
  "number": "3.3.8",
  "title": "The remaining angles of the triangle.",
  "body": " The remaining angles of the triangle   For the triangle of , calculate the remaining angles.   Solution.      Blank box in two rows, one for the computation of the angle at vertex A and one for the angle at vertex B.     "
},
{
  "id": "fact-skel-properties",
  "level": "2",
  "url": "subsec-skel-dot-product.html#fact-skel-properties",
  "type": "Fact",
  "number": "3.3.9",
  "title": "",
  "body": "  If , , and are any vectors and is a scalar, then            "
},
{
  "id": "subsec-skel-projection",
  "level": "1",
  "url": "subsec-skel-projection.html",
  "type": "Subsection",
  "number": "3.3.2",
  "title": "Projection of <span class=\"process-math\">\\(\\mathbf u\\)<\/span> in the Direction of <span class=\"process-math\">\\(\\mathbf v\\)<\/span>",
  "body": " Projection of in the Direction of  The dot product measures how much two vectors point in the same direction. This section turns that measurement into a vector: given and , we ask how much of lies along . The answer is the projection of onto , and it lets us split any vector into a part that points along and a part perpendicular to it. That decomposition is what makes the dot product useful in practice it is how we find the component of a force along a direction of motion, as in , or the component of gravity down a slope.  The projection of in the direction of is denoted , and is shown in .   The vectors and , for the projection of in the direction of and the perpendicular component .         \\mathbf v    \\mathbf u    \\theta               Build the projection formula from that picture.     Blank box in three rows, for the projection written as a length times a unit direction, for the substitution of the cosine of the angle, and for the simplified projection formula.     Projection Formula         Writing as Two Vectors, One Parallel and One Perpendicular to  As can be seen in , is parallel to , and the vector is perpendicular to it. Also, the sum of these two vectors equals . This means we can write as      Blank box in two rows, for writing u as its projection onto v plus the remainder, and for substituting the projection formula to fill in equation (3.3.6).     The projection of onto as a shadow cast by light from above.     Decomposing a vector into parallel and perpendicular parts   Consider the two vectors and . Write as a sum of two vectors, one of which is parallel to and the other perpendicular to it.   Solution.      Blank box in four rows, for the dot product and the length of v, for the parallel component, for the perpendicular component, and for the orthogonality check.    To achieve a visual understanding of this decomposition, watch the video below.   Decomposing into , lying in the -plane along , and , pointing straight up.       Concept Check   Everything in rests on the claim read off from : that is parallel to , and that is perpendicular to . A picture is not a proof. Explain why each half of the claim is true.     Blank box in two labelled rows, one for the parallel half of the claim and a taller one for the perpendicular half.       "
},
{
  "id": "subsec-skel-projection-2",
  "level": "2",
  "url": "subsec-skel-projection.html#subsec-skel-projection-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "projection "
},
{
  "id": "fig-skel-projection",
  "level": "2",
  "url": "subsec-skel-projection.html#fig-skel-projection",
  "type": "Figure",
  "number": "3.3.10",
  "title": "",
  "body": " The vectors and , for the projection of in the direction of and the perpendicular component .         \\mathbf v    \\mathbf u    \\theta              "
},
{
  "id": "fact-skel-projection-formula",
  "level": "2",
  "url": "subsec-skel-projection.html#fact-skel-projection-formula",
  "type": "Fact",
  "number": "3.3.11",
  "title": "Projection Formula.",
  "body": " Projection Formula       "
},
{
  "id": "fig-skel-projection-shadow",
  "level": "2",
  "url": "subsec-skel-projection.html#fig-skel-projection-shadow",
  "type": "Figure",
  "number": "3.3.12",
  "title": "",
  "body": " The projection of onto as a shadow cast by light from above.   "
},
{
  "id": "ex-skel-decomposition",
  "level": "2",
  "url": "subsec-skel-projection.html#ex-skel-decomposition",
  "type": "Example",
  "number": "3.3.13",
  "title": "Decomposing a vector into parallel and perpendicular parts.",
  "body": " Decomposing a vector into parallel and perpendicular parts   Consider the two vectors and . Write as a sum of two vectors, one of which is parallel to and the other perpendicular to it.   Solution.      Blank box in four rows, for the dot product and the length of v, for the parallel component, for the perpendicular component, and for the orthogonality check.    To achieve a visual understanding of this decomposition, watch the video below.   Decomposing into , lying in the -plane along , and , pointing straight up.     "
},
{
  "id": "skel-check-projection-decomposition",
  "level": "2",
  "url": "subsec-skel-projection.html#skel-check-projection-decomposition",
  "type": "Checkpoint",
  "number": "3.3.15",
  "title": "Concept Check.",
  "body": " Concept Check   Everything in rests on the claim read off from : that is parallel to , and that is perpendicular to . A picture is not a proof. Explain why each half of the claim is true.     Blank box in two labelled rows, one for the parallel half of the claim and a taller one for the perpendicular half.     "
},
{
  "id": "subsec-skel-work",
  "level": "1",
  "url": "subsec-skel-work.html",
  "type": "Subsection",
  "number": "3.3.3",
  "title": "Application in Physics: Work",
  "body": " Application in Physics: Work  Consider the scenario in which a constant force causes an object to move from point to point , as shown in . The vector is often denoted and is referred to as the displacement vector . The work done by the force is then   Work    where is the magnitude of the force in the direction of motion, as computed in .     A constant force acting on an object causing a displacement from to .     A force displaces an object from to along the displacement vector . The reference segment shows the magnitude of the force in the direction of motion, .     P=(0,0)  Q=(4,0)  Fv=(2,1.5)  R=(6,0)   P  Q   \\mathbf D    \\mathbf F     \\theta    \\|\\mathbf F\\|\\cos\\theta                    Computing work done by a force   A force is given by the vector and moves a particle from the point to the point . Find the work done.   Solution.      Blank box in two rows, one for the displacement vector and one for the work done.    For more help, watch the video below.   Set up the work computation: build the displacement vector first, then take the dot product. What do you get?       Gravity on an incline   Suppose a mass of is resting on an inclined plane. Gravity exerts a force equivalent to on the object, where is the gravitational acceleration. Suppose the incline is tilted at a angle. Compute the components of the force that are parallel and perpendicular to the inclined plane.   Forces acting on a mass on a incline: the weight resolves into a component down the slope and a component into the surface, with .          30^{\\circ}      \\overrightarrow{F}   \\overrightarrow{F}_{\\parallel}   \\overrightarrow{F}_{\\perp}                 Solution.      Blank box in four rows, for the magnitude and vector form of the weight, for the unit vector down the slope, for the component parallel to the incline, and for the component perpendicular to it.     Decomposing gravity on a incline: the parallel component pulls the mass down the slope, and the perpendicular component presses it into the surface.      "
},
{
  "id": "subsec-skel-work-2",
  "level": "2",
  "url": "subsec-skel-work.html#subsec-skel-work-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "displacement vector "
},
{
  "id": "def-skel-work",
  "level": "2",
  "url": "subsec-skel-work.html#def-skel-work",
  "type": "Definition",
  "number": "3.3.16",
  "title": "Work.",
  "body": " Work    where is the magnitude of the force in the direction of motion, as computed in .   "
},
{
  "id": "fig-skel-work-force",
  "level": "2",
  "url": "subsec-skel-work.html#fig-skel-work-force",
  "type": "Figure",
  "number": "3.3.17",
  "title": "",
  "body": " A constant force acting on an object causing a displacement from to .   "
},
{
  "id": "fig-skel-work",
  "level": "2",
  "url": "subsec-skel-work.html#fig-skel-work",
  "type": "Figure",
  "number": "3.3.18",
  "title": "",
  "body": " A force displaces an object from to along the displacement vector . The reference segment shows the magnitude of the force in the direction of motion, .     P=(0,0)  Q=(4,0)  Fv=(2,1.5)  R=(6,0)   P  Q   \\mathbf D    \\mathbf F     \\theta    \\|\\mathbf F\\|\\cos\\theta                  "
},
{
  "id": "ex-skel-work",
  "level": "2",
  "url": "subsec-skel-work.html#ex-skel-work",
  "type": "Example",
  "number": "3.3.19",
  "title": "Computing work done by a force.",
  "body": " Computing work done by a force   A force is given by the vector and moves a particle from the point to the point . Find the work done.   Solution.      Blank box in two rows, one for the displacement vector and one for the work done.    For more help, watch the video below.   Set up the work computation: build the displacement vector first, then take the dot product. What do you get?     "
},
{
  "id": "ex-skel-inclined-plane",
  "level": "2",
  "url": "subsec-skel-work.html#ex-skel-inclined-plane",
  "type": "Example",
  "number": "3.3.21",
  "title": "Gravity on an incline.",
  "body": " Gravity on an incline   Suppose a mass of is resting on an inclined plane. Gravity exerts a force equivalent to on the object, where is the gravitational acceleration. Suppose the incline is tilted at a angle. Compute the components of the force that are parallel and perpendicular to the inclined plane.   Forces acting on a mass on a incline: the weight resolves into a component down the slope and a component into the surface, with .          30^{\\circ}      \\overrightarrow{F}   \\overrightarrow{F}_{\\parallel}   \\overrightarrow{F}_{\\perp}                 Solution.      Blank box in four rows, for the magnitude and vector form of the weight, for the unit vector down the slope, for the component parallel to the incline, and for the component perpendicular to it.     Decomposing gravity on a incline: the parallel component pulls the mass down the slope, and the perpendicular component presses it into the surface.     "
},
{
  "id": "subsec-skel-data-science",
  "level": "1",
  "url": "subsec-skel-data-science.html",
  "type": "Subsection",
  "number": "3.3.4",
  "title": "*Application in Data Science: Measuring Similarity in Tastes",
  "body": " *Application in Data Science: Measuring Similarity in Tastes   Starred section. This one is for the interested reader. It will not be examined.  Every time a streaming service tells you because you watched Sinners , some piece of software has decided that your taste resembles the taste of other people in its database. Deciding whose taste resembles whose can be framed as a geometry problem, and one tool that can help us decide is the dot product.  The first step is to turn taste into a vector. Fix a list of movies and ask each person to rate every one of them on a scale from to , where means loved it , means I want those two hours back , and means indifference. Reading the ratings off in the same order for everybody turns each person into a vector, and the question do these two people have similar taste? becomes a question about the angle between two vectors, which by is exactly what the dot product measures.   Angular Distance and Cosine Similarity   Let and be two nonzero vectors. Their angular distance is the angle between them, obtained from , The quantity appearing inside is called the cosine similarity of and . The smaller the angular distance, the more similar the two vectors.    Angular distance asks how nearly do these two vectors point the same way? Notice that it is completely blind to the lengths of and : multiplying either vector by a positive number leaves untouched. We will come back to what that means for moviegoers.   Two Movies at a Time  Two movies give vectors in , which we can draw. Take two of the ten films nominated for Best Picture at the 2026 Academy Awards, Sinners and Hamnet , and record each person's rating of Sinners as the first component and of Hamnet as the second. Mehdi, Norm, and Popcorn rate them as follows: Mehdi and Norm both enjoyed the two films; Popcorn sat through both of them and regretted it. shows the three taste vectors.   The taste vectors (Mehdi), (Norm), and (Popcorn). The angle is the angular distance between and .     m=(4,5)  n=(5,3)  d=(-4,-2)        \\theta   🤓  😎  🤪  Mehdi  Norm  Popcorn                 Who should watch a movie together?   Using the taste vectors above, rank the three pairs by angular distance.   Solution.    Angular distance between the three taste vectors.    Pair      Mehdi, Norm  Mehdi, Popcorn  Norm, Popcorn       Blank box in two rows, one for the lengths and dot products behind the table and one for the conclusion about which pair has the most similar taste.        Angular Distance Ignores Enthusiasm  Suppose Ray, Vera, and Gus rate the same two films as in .   Ray, Vera, and Gus. Ray's vector lies along Gus's vector , so their angular distance is , even though Gus handed out far more generous ratings.     r=(2,2)  v=(5,4)  g=(5,5)       😐  🤩  🥳  Ray  Vera  Gus               Find and .     Blank box in three rows, for the angular distance between Ray and Gus with its reason, for the angular distance between Vera and Gus, and for the interpretation.      More Movies, More Dimensions  Nothing above depended on there being exactly two movies. With movies, a person's taste vector is in , the dot product of becomes a sum of products, , and the length of a vector becomes . The angular distance of carries over verbatim:   We can no longer draw the picture, but every formula still applies, and the language of still means something: two taste vectors with are orthogonal, an angular distance of , which here says that knowing one person's ratings tells you nothing about the other's. This is what makes the dot product useful in practice. A streaming service with titles works in , and finding the users nearest to you is still nothing more than the arithmetic in .   All ten nominees   List the ten 2026 Best Picture nominees alphabetically Bugonia , F1 , Frankenstein , Hamnet , Marty Supreme , One Battle After Another , The Secret Agent , Sentimental Value , Sinners , Train Dreams and suppose Mehdi, Norm, and Popcorn rate all ten: (The fourth and ninth entries are the Hamnet and Sinners ratings from before.) Which pair has the most similar taste?   Solution.    Angular distance across all ten nominees.    Pair      Mehdi, Norm  Mehdi, Popcorn  Norm, Popcorn       Blank box in two rows, one for the lengths and dot products of the three ten-dimensional taste vectors and one for the comparison with the two-movie table.      Ten components are a lot to handle by hand, and a real recommender system deals with thousands. The cell below carries out the computation of . Press Evaluate to run it and check the table you just filled in, then edit the ratings and run it again to see whose taste your own vector is closest to.    "
},
{
  "id": "def-skel-angular-distance",
  "level": "2",
  "url": "subsec-skel-data-science.html#def-skel-angular-distance",
  "type": "Definition",
  "number": "3.3.24",
  "title": "Angular Distance and Cosine Similarity.",
  "body": " Angular Distance and Cosine Similarity   Let and be two nonzero vectors. Their angular distance is the angle between them, obtained from , The quantity appearing inside is called the cosine similarity of and . The smaller the angular distance, the more similar the two vectors.   "
},
{
  "id": "fig-skel-taste-vectors-2d",
  "level": "2",
  "url": "subsec-skel-data-science.html#fig-skel-taste-vectors-2d",
  "type": "Figure",
  "number": "3.3.25",
  "title": "",
  "body": " The taste vectors (Mehdi), (Norm), and (Popcorn). The angle is the angular distance between and .     m=(4,5)  n=(5,3)  d=(-4,-2)        \\theta   🤓  😎  🤪  Mehdi  Norm  Popcorn               "
},
{
  "id": "ex-skel-taste-2d",
  "level": "2",
  "url": "subsec-skel-data-science.html#ex-skel-taste-2d",
  "type": "Example",
  "number": "3.3.26",
  "title": "Who should watch a movie together?",
  "body": " Who should watch a movie together?   Using the taste vectors above, rank the three pairs by angular distance.   Solution.    Angular distance between the three taste vectors.    Pair      Mehdi, Norm  Mehdi, Popcorn  Norm, Popcorn       Blank box in two rows, one for the lengths and dot products behind the table and one for the conclusion about which pair has the most similar taste.     "
},
{
  "id": "fig-skel-taste-disagree",
  "level": "2",
  "url": "subsec-skel-data-science.html#fig-skel-taste-disagree",
  "type": "Figure",
  "number": "3.3.28",
  "title": "",
  "body": " Ray, Vera, and Gus. Ray's vector lies along Gus's vector , so their angular distance is , even though Gus handed out far more generous ratings.     r=(2,2)  v=(5,4)  g=(5,5)       😐  🤩  🥳  Ray  Vera  Gus              "
},
{
  "id": "ex-skel-taste-10d",
  "level": "2",
  "url": "subsec-skel-data-science.html#ex-skel-taste-10d",
  "type": "Example",
  "number": "3.3.29",
  "title": "All ten nominees.",
  "body": " All ten nominees   List the ten 2026 Best Picture nominees alphabetically Bugonia , F1 , Frankenstein , Hamnet , Marty Supreme , One Battle After Another , The Secret Agent , Sentimental Value , Sinners , Train Dreams and suppose Mehdi, Norm, and Popcorn rate all ten: (The fourth and ninth entries are the Hamnet and Sinners ratings from before.) Which pair has the most similar taste?   Solution.    Angular distance across all ten nominees.    Pair      Mehdi, Norm  Mehdi, Popcorn  Norm, Popcorn       Blank box in two rows, one for the lengths and dot products of the three ten-dimensional taste vectors and one for the comparison with the two-movie table.     "
},
{
  "id": "subsec-skel-cross-definition",
  "level": "1",
  "url": "subsec-skel-cross-definition.html",
  "type": "Subsection",
  "number": "3.4.1",
  "title": "Definition and Properties of the Cross Product",
  "body": " Definition and Properties of the Cross Product   The Cross Product (First Definition)   Given two vectors and in , the cross product  is the vector defined by where , with , is the angle between and , and is the unit vector orthogonal to both and whose direction is given by the right-hand rule.    The magnitude of is equal to the area of the parallelogram built on the two vectors and , as shown in .   The parallelogram built on the vectors and , with base and height .     u=(2,3)  v=(5,0)        \\mathbf u    \\mathbf v    \\theta               Read the area of that parallelogram off the figure, and compare it with .     Blank box in two rows, one for the area of the parallelogram as base times height and one for the reason the absolute value of the sine is needed.     Area of the Parallelogram        The vector is the unit vector that determines the direction of using the right-hand rule. Note that is orthogonal (perpendicular) to both vectors, as shown in .   The cross product points in the direction of the unit vector , given by the right-hand rule, and is orthogonal to both and ; its length is .     Two equivalent right-hand rules for .    Index Middle Thumb method.   Index finger along u, middle finger along v, thumb along u cross v.     Rotating-fingers method.   Fingers curl from u toward v, thumb points along u cross v.       Parallel Vectors   From , it follows that the cross product of two parallel vectors is zero.       Say why follows, in one line.     Blank workspace for explaining why the cross product of two parallel vectors is the zero vector.     Properties of the Cross Product   If , , and are any vectors and , are scalars, then             Property 4 is the one that has no analogue for the dot product, so prove it.     Blank box in two rows, one for the comparison of the first components of the two cross products and one for the statement in words.      Show that .   Solution.      Blank box in two rows, one for the four-term expansion of the product and one for its simplification.       Computing a cross product using the first definition   Use to compute    , and also ;    , where and is a vector of length lying in the -plane, making an angle of with measured counterclockwise.      Solution.      Blank box in four rows, for i cross j, for j cross i, for the cross product in part two, and for the check against the area of the parallelogram.      "
},
{
  "id": "def-skel-cross-product",
  "level": "2",
  "url": "subsec-skel-cross-definition.html#def-skel-cross-product",
  "type": "Definition",
  "number": "3.4.1",
  "title": "The Cross Product (First Definition).",
  "body": " The Cross Product (First Definition)   Given two vectors and in , the cross product  is the vector defined by where , with , is the angle between and , and is the unit vector orthogonal to both and whose direction is given by the right-hand rule.   "
},
{
  "id": "fig-skel-parallelogram-area",
  "level": "2",
  "url": "subsec-skel-cross-definition.html#fig-skel-parallelogram-area",
  "type": "Figure",
  "number": "3.4.2",
  "title": "",
  "body": " The parallelogram built on the vectors and , with base and height .     u=(2,3)  v=(5,0)        \\mathbf u    \\mathbf v    \\theta              "
},
{
  "id": "fact-skel-parallelogram-area",
  "level": "2",
  "url": "subsec-skel-cross-definition.html#fact-skel-parallelogram-area",
  "type": "Fact",
  "number": "3.4.3",
  "title": "Area of the Parallelogram.",
  "body": " Area of the Parallelogram       "
},
{
  "id": "fig-skel-cross-product-video",
  "level": "2",
  "url": "subsec-skel-cross-definition.html#fig-skel-cross-product-video",
  "type": "Figure",
  "number": "3.4.4",
  "title": "",
  "body": " The cross product points in the direction of the unit vector , given by the right-hand rule, and is orthogonal to both and ; its length is .   "
},
{
  "id": "fig-skel-right-hand-rule-illustration",
  "level": "2",
  "url": "subsec-skel-cross-definition.html#fig-skel-right-hand-rule-illustration",
  "type": "Figure",
  "number": "3.4.5",
  "title": "",
  "body": " Two equivalent right-hand rules for .    Index Middle Thumb method.   Index finger along u, middle finger along v, thumb along u cross v.     Rotating-fingers method.   Fingers curl from u toward v, thumb points along u cross v.     "
},
{
  "id": "fact-skel-parallel-vectors",
  "level": "2",
  "url": "subsec-skel-cross-definition.html#fact-skel-parallel-vectors",
  "type": "Fact",
  "number": "3.4.6",
  "title": "Parallel Vectors.",
  "body": " Parallel Vectors   From , it follows that the cross product of two parallel vectors is zero.      "
},
{
  "id": "thm-skel-cross-properties",
  "level": "2",
  "url": "subsec-skel-cross-definition.html#thm-skel-cross-properties",
  "type": "Theorem",
  "number": "3.4.7",
  "title": "Properties of the Cross Product.",
  "body": " Properties of the Cross Product   If , , and are any vectors and , are scalars, then            "
},
{
  "id": "skel-exercise-cross-identity",
  "level": "2",
  "url": "subsec-skel-cross-definition.html#skel-exercise-cross-identity",
  "type": "Checkpoint",
  "number": "3.4.8",
  "title": "",
  "body": "  Show that .   Solution.      Blank box in two rows, one for the four-term expansion of the product and one for its simplification.     "
},
{
  "id": "ex-skel-cross-geometric",
  "level": "2",
  "url": "subsec-skel-cross-definition.html#ex-skel-cross-geometric",
  "type": "Example",
  "number": "3.4.9",
  "title": "Computing a cross product using the first definition.",
  "body": " Computing a cross product using the first definition   Use to compute    , and also ;    , where and is a vector of length lying in the -plane, making an angle of with measured counterclockwise.      Solution.      Blank box in four rows, for i cross j, for j cross i, for the cross product in part two, and for the check against the area of the parallelogram.     "
},
{
  "id": "subsec-skel-cross-components",
  "level": "1",
  "url": "subsec-skel-cross-components.html",
  "type": "Subsection",
  "number": "3.4.2",
  "title": "Second Definition of the Cross Product",
  "body": " Second Definition of the Cross Product  Writing the vectors in components gives another definition for the cross product.   The Cross Product (Second Definition)   If and , then     One way to remember the second definition of the cross product is to write it as a determinant: where    Computing a cross product   Calculate the cross product if and .   Solution.      Blank box in two rows, one for the determinant computation of the cross product and one for the orthogonality check.       Computing a vector perpendicular to two other vectors   Consider the points , , and . Find a unit vector which is orthogonal to both and .   Solution.      Blank box in four rows, for the two vectors, for their cross product, for the unit normal vector, and for the second unit normal vector.     The unit vector is orthogonal to both and , and hence to the plane through the points , , and .       Computing the area of a triangle   Find the area of the triangle with the vertices , , and . Note that these are the same points that we had in the previous example.   Solution.      Blank box in two rows, one for the area of the parallelogram and one for the area of the triangle.      "
},
{
  "id": "def-skel-cross-components",
  "level": "2",
  "url": "subsec-skel-cross-components.html#def-skel-cross-components",
  "type": "Definition",
  "number": "3.4.10",
  "title": "The Cross Product (Second Definition).",
  "body": " The Cross Product (Second Definition)   If and , then    "
},
{
  "id": "ex-skel-cross-compute",
  "level": "2",
  "url": "subsec-skel-cross-components.html#ex-skel-cross-compute",
  "type": "Example",
  "number": "3.4.11",
  "title": "Computing a cross product.",
  "body": " Computing a cross product   Calculate the cross product if and .   Solution.      Blank box in two rows, one for the determinant computation of the cross product and one for the orthogonality check.     "
},
{
  "id": "ex-skel-perpendicular-vector",
  "level": "2",
  "url": "subsec-skel-cross-components.html#ex-skel-perpendicular-vector",
  "type": "Example",
  "number": "3.4.12",
  "title": "Computing a vector perpendicular to two other vectors.",
  "body": " Computing a vector perpendicular to two other vectors   Consider the points , , and . Find a unit vector which is orthogonal to both and .   Solution.      Blank box in four rows, for the two vectors, for their cross product, for the unit normal vector, and for the second unit normal vector.     The unit vector is orthogonal to both and , and hence to the plane through the points , , and .     "
},
{
  "id": "ex-skel-triangle-area",
  "level": "2",
  "url": "subsec-skel-cross-components.html#ex-skel-triangle-area",
  "type": "Example",
  "number": "3.4.14",
  "title": "Computing the area of a triangle.",
  "body": " Computing the area of a triangle   Find the area of the triangle with the vertices , , and . Note that these are the same points that we had in the previous example.   Solution.      Blank box in two rows, one for the area of the parallelogram and one for the area of the triangle.     "
},
{
  "id": "subsec-skel-true-false",
  "level": "1",
  "url": "subsec-skel-true-false.html",
  "type": "Subsection",
  "number": "3.4.3",
  "title": "True or False?",
  "body": " True or False?   True or False   Let and be two vectors in . Then, is perpendicular to .    Justify your answer.     Blank workspace for justifying the first true or false statement.     True or False   Let and be two standard unit vectors in . Then, .    Justify your answer.     Blank workspace for justifying the second true or false statement.    "
},
{
  "id": "skel-exercise-true-false-1",
  "level": "2",
  "url": "subsec-skel-true-false.html#skel-exercise-true-false-1",
  "type": "Checkpoint",
  "number": "3.4.15",
  "title": "True or False.",
  "body": " True or False   Let and be two vectors in . Then, is perpendicular to .   "
},
{
  "id": "skel-exercise-true-false-2",
  "level": "2",
  "url": "subsec-skel-true-false.html#skel-exercise-true-false-2",
  "type": "Checkpoint",
  "number": "3.4.16",
  "title": "True or False.",
  "body": " True or False   Let and be two standard unit vectors in . Then, .   "
},
{
  "id": "subsec-skel-torque",
  "level": "1",
  "url": "subsec-skel-torque.html",
  "type": "Subsection",
  "number": "3.4.4",
  "title": "*Application: Torque",
  "body": " *Application: Torque   Starred section. This one is for the interested reader. It will not be examined.  One of the well known physical applications of the cross product is torque , the rotational analog of force. A force makes an object accelerate; a torque makes it rotate . How effective a force is at producing rotation depends not only on its magnitude, but also on where it is applied and in what direction . Think of pushing a door: pushing hard near the hinge barely moves it, while a light push at the doorknob swings it open easily. Pushing at the doorknob but toward the hinge does nothing at all. The cross product captures all three scenarios and more.   Torque   Suppose a force is applied at a point whose position vector relative to the axis of rotation is . The torque produced by is the vector       Interactive view of . The force is applied at the head of , and the torque points along the axis of rotation.     Everything we know about the cross product now translates into physics. By , the magnitude of the torque is where is the angle between and , and the direction of is given by the right-hand rule: points along the axis of rotation, and curling the fingers of the right hand from toward gives the sense of the rotation. Torque has units of meter-newtons ( ) in SI.  The quantity in can be grouped in two useful ways, shown in . Write down the two groupings.     Blank box in three rows, for the torque grouped as force times lever arm, for the torque grouped as distance times perpendicular force, and for the reason the two agree.     The two groupings of . In both pictures the axis of rotation passes through , perpendicular to the page, the force is applied at , and is the angle between and ; the two products are equal because each is .    Force times lever arm: .           \\theta      O  P   \\overrightarrow{r}    \\overrightarrow{F}    r_\\perp    r_\\perp = \\|\\overrightarrow{r}\\|\\sin\\theta    \\|\\overrightarrow{\\tau}\\| = r_\\perp\\|\\overrightarrow{F}\\|                   Distance times perpendicular force: .            \\theta     O  P   \\overrightarrow{r}    \\overrightarrow{F}    F_\\perp    F_\\parallel    F_\\parallel \\text{ produces no rotation}    F_\\perp = \\|\\overrightarrow{F}\\|\\sin\\theta    \\|\\overrightarrow{\\tau}\\| = \\|\\overrightarrow{r}\\|F_\\perp                    The first grouping, shown in , says the torque is the force times the lever arm  , the perpendicular distance from the axis to the line along which the force acts. The second, shown in , says it is the distance times , the component of the force perpendicular to ; the parallel component points straight at the axis and produces no rotation.   Zero Torque   By , if is parallel to then : a force directed straight at (or away from) the axis produces no rotation. This is why you cannot open a door by pushing toward its hinge.     Biceps torque   The biceps muscle exerts a vertical force of N on the lower arm, attached at a point cm from the elbow joint (the axis of rotation). Calculate the torque about the elbow when    the forearm is horizontal, and  the forearm makes a angle below the horizontal.     The biceps exerts a 700 N force on the forearm: (a) forearm horizontal, with the muscle attached 5.0 cm from the elbow axis; (b) forearm at 30 below horizontal, with lever arm .    Side-by-side diagrams of an arm. In (a), the forearm is horizontal and a 700 N biceps force acts 5.0 cm from the elbow axis. In (b), the forearm is angled 30 degrees below horizontal, making a 60 degree angle with the vertical, with lever arm R.      Solution.      Blank box in four rows, for the force vector, for the position vector and torque with the forearm horizontal, for the same with the forearm thirty degrees below horizontal, and for the comparison of the two.     The torque of the biceps force about the elbow. When the forearm drops below the horizontal, the angle between and becomes and the lever arm shortens.      "
},
{
  "id": "subsec-skel-torque-3",
  "level": "2",
  "url": "subsec-skel-torque.html#subsec-skel-torque-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "torque "
},
{
  "id": "def-skel-torque",
  "level": "2",
  "url": "subsec-skel-torque.html#def-skel-torque",
  "type": "Definition",
  "number": "3.4.17",
  "title": "Torque.",
  "body": " Torque   Suppose a force is applied at a point whose position vector relative to the axis of rotation is . The torque produced by is the vector    "
},
{
  "id": "fig-skel-int-torque",
  "level": "2",
  "url": "subsec-skel-torque.html#fig-skel-int-torque",
  "type": "Figure",
  "number": "3.4.18",
  "title": "",
  "body": " Interactive view of . The force is applied at the head of , and the torque points along the axis of rotation.   "
},
{
  "id": "fig-skel-torque-two-groupings",
  "level": "2",
  "url": "subsec-skel-torque.html#fig-skel-torque-two-groupings",
  "type": "Figure",
  "number": "3.4.19",
  "title": "",
  "body": " The two groupings of . In both pictures the axis of rotation passes through , perpendicular to the page, the force is applied at , and is the angle between and ; the two products are equal because each is .    Force times lever arm: .           \\theta      O  P   \\overrightarrow{r}    \\overrightarrow{F}    r_\\perp    r_\\perp = \\|\\overrightarrow{r}\\|\\sin\\theta    \\|\\overrightarrow{\\tau}\\| = r_\\perp\\|\\overrightarrow{F}\\|                   Distance times perpendicular force: .            \\theta     O  P   \\overrightarrow{r}    \\overrightarrow{F}    F_\\perp    F_\\parallel    F_\\parallel \\text{ produces no rotation}    F_\\perp = \\|\\overrightarrow{F}\\|\\sin\\theta    \\|\\overrightarrow{\\tau}\\| = \\|\\overrightarrow{r}\\|F_\\perp                   "
},
{
  "id": "subsec-skel-torque-10",
  "level": "2",
  "url": "subsec-skel-torque.html#subsec-skel-torque-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "lever arm "
},
{
  "id": "fact-skel-zero-torque",
  "level": "2",
  "url": "subsec-skel-torque.html#fact-skel-zero-torque",
  "type": "Fact",
  "number": "3.4.20",
  "title": "Zero Torque.",
  "body": " Zero Torque   By , if is parallel to then : a force directed straight at (or away from) the axis produces no rotation. This is why you cannot open a door by pushing toward its hinge.   "
},
{
  "id": "ex-skel-biceps-torque",
  "level": "2",
  "url": "subsec-skel-torque.html#ex-skel-biceps-torque",
  "type": "Example",
  "number": "3.4.21",
  "title": "Biceps torque.",
  "body": " Biceps torque   The biceps muscle exerts a vertical force of N on the lower arm, attached at a point cm from the elbow joint (the axis of rotation). Calculate the torque about the elbow when    the forearm is horizontal, and  the forearm makes a angle below the horizontal.     The biceps exerts a 700 N force on the forearm: (a) forearm horizontal, with the muscle attached 5.0 cm from the elbow axis; (b) forearm at 30 below horizontal, with lever arm .    Side-by-side diagrams of an arm. In (a), the forearm is horizontal and a 700 N biceps force acts 5.0 cm from the elbow axis. In (b), the forearm is angled 30 degrees below horizontal, making a 60 degree angle with the vertical, with lever arm R.      Solution.      Blank box in four rows, for the force vector, for the position vector and torque with the forearm horizontal, for the same with the forearm thirty degrees below horizontal, and for the comparison of the two.     The torque of the biceps force about the elbow. When the forearm drops below the horizontal, the angle between and becomes and the lever arm shortens.     "
},
{
  "id": "subsec-skel-circular-motion",
  "level": "1",
  "url": "subsec-skel-circular-motion.html",
  "type": "Subsection",
  "number": "3.4.5",
  "title": "*Application: Circular Motion: Velocity and Angular Velocity",
  "body": " *Application: Circular Motion: Velocity and Angular Velocity    Starred section. This one is for the interested reader. It will not be examined.  A second physical application of the cross product describes the motion of an object travelling in a circle: a rider on a circular track, a ball whirled on a string, a point on a spinning wheel, or the moon on its (nearly circular) orbit. In each case the object turns about a fixed centre, and the natural way to keep track of where it is at time is not by its coordinates and but by the single angle it has swung through. Our goal is to study how the velocity and the rate of change of that angle are related.    A Frame that Turns with the Particle  Let an object move on a circle of radius centred at the origin of the -plane, and let be the angle its position makes with the positive -axis at time , as in . At the point where the particle sits we attach two unit vectors:    , pointing radially outward, away from the centre, and     , perpendicular to and tangent to the circle, pointing in the direction of increasing .      The moving frame at the point : points radially outward and is tangent to the circle. The fixed vectors and are drawn at for comparison; unlike and , they do not turn as the particle moves.    A circle of radius r centred at the origin. A particle sits at a point P on the circle, its position vector making an angle theta of t with the positive x-axis. At P the unit vector r hat points radially outward along the position vector, and the unit vector theta hat is perpendicular to it, tangent to the circle in the counterclockwise direction. The fixed unit vectors i and j are also drawn at P for comparison.              \\theta(t)    P  r   \\hat r(t)    \\hat\\theta(t)   \\hat{\\imath}  \\hat{\\jmath}  +x  +y                Read the components of the moving frame off , and write down the position vector. ( makes the angle with the -axis, and is a quarter turn counterclockwise from it. Then check that , , is right-handed by computing with ; a Pythagorean identity finishes it.)     Blank box in three rows, for the components of the radial unit vector, for the components of the tangential unit vector, and for the position vector together with the cross product that checks the frame is right-handed.     The Moving Frame      The pair , is fixed once and for all, while the pair , rides along with the particle and turns as it goes; this is exactly what makes the second pair convenient.    The Velocity in Circular Motion  Because the particle moves, the angle depends on , and so do the two moving unit vectors. Differentiate the frame, and then the position.     Blank box in four rows, for the derivative of the radial unit vector, for the derivative of the tangential unit vector, for the velocity, and for the explanation that the velocity is purely tangential.     Velocity in Circular Motion   whose -component is called the tangential component of the velocity . It is positive when the particle turns counterclockwise and negative when it turns clockwise.    Angular Speed   The angular speed of the particle is the magnitude of the rate of change of its angle, measured in radians per second. By , the speed of the particle and its angular speed are related by     It is worth seeing where comes from geometrically, without any differentiation of unit vectors. shows the particle moving from to through a small angle . Recover from that picture.     Blank box in three rows, for the exact chord length, for the limit that produces the speed, and for the limiting direction of the chord.     The displacement is the chord subtending the angle . For small the chord is nearly the arc, , and its direction approaches that of the tangent line, along which points.    Two position vectors of equal length r are drawn from the centre of a dashed circle, separated by a small angle delta theta. The chord delta r joins the tip of the first to the tip of the second. A dashed tangent line touches the circle at the first point, and the velocity arrow at that point lies along it.            \\Delta\\theta      \\overrightarrow{r}(t)    \\overrightarrow{r}(t+\\Delta t)    \\Delta\\overrightarrow{r}    \\overrightarrow{v}(t)    \\text{tangent line}     \\|\\Delta\\overrightarrow{r}\\| = 2r\\sin\\tfrac{\\Delta\\theta}{2} \\approx r\\,\\Delta\\theta                    Angular Velocity as a Vector  So far the rate of turning has been a number, . But a rotation has a direction as well as a rate: the plane of the circle can be tilted any which way, and the particle can go around it either way. Both pieces of information can be carried by a single vector, provided we point it along the axis of rotation rather than along the motion.   Angular Velocity Vector   For an object moving in a circle in the -plane about the origin, the angular velocity vector is directed along the axis of rotation. Its SI units are , and the angular speed of is its magnitude, .    The sign of records which way the object goes around, and the right-hand rule turns that sign into a direction in space: curl the fingers of your right hand in the direction of the motion and your thumb points along . The two cases are shown in .   The angular velocity vector points along the axis of rotation, in the direction given by the right-hand rule: up the -axis for counterclockwise motion (left), down it for clockwise motion (right). Note that is not tangent to the orbit the velocity is.    Two panels showing a particle on a circular orbit in the horizontal plane, drawn in an oblique view with the z-axis vertical. In the left panel the particle circulates counterclockwise as seen from above and the angular velocity vector points up along the positive z-direction. In the right panel the particle circulates clockwise and the angular velocity vector points down along the negative z-direction. In both panels the velocity is tangent to the orbit.     orbA(t) = (2.2*cos(t), 0.75*sin(t))  orbB(t) = (7.4 + 2.2*cos(t), 0.75*sin(t))             \\overrightarrow{\\omega}   +z  O   \\overrightarrow{r}    \\overrightarrow{v}    \\omega_z = \\dfrac{d\\theta}{dt} > 0    \\text{counterclockwise:}\\;\\; \\overrightarrow{\\omega} \\text{ points along } +\\hat{k}             \\overrightarrow{\\omega}   +z  O   \\overrightarrow{r}    \\overrightarrow{v}    \\omega_z = \\dfrac{d\\theta}{dt} < 0    \\text{clockwise:}\\;\\; \\overrightarrow{\\omega} \\text{ points along } -\\hat{k}                      Velocity as a Cross Product  We now have two vectors attached to the motion: the angular velocity , along the axis, and the position , in the plane of the circle. The velocity is perpendicular to both, which is precisely the job of the cross product.   Velocity and Angular Velocity   For an object in circular motion about the origin,     Verify .     Blank box in two rows, one for the cross product of k hat with r hat and one for the verification that omega cross r is the velocity.    The geometry of the cross product delivers all three features of the velocity at once. Fill them in from , with no computation.     Blank box in three labelled rows, for the magnitude, the direction, and the sense of the velocity read off the cross product.    There is a bonus. A piece of running along the axis is parallel to and so contributes nothing to the cross product, since . Consequently remains true when is measured from any point on the axis of rotation, not just from the centre of the circle.   The velocity of a particle in circular motion is . Because and are perpendicular, the speed is , and the right-hand rule places tangent to the orbit in the direction of travel.    A circular orbit in the horizontal plane drawn in an oblique view, with the z-axis vertical. The angular velocity vector points straight up along the z-axis from the centre O. The position vector runs from O out to the particle on the orbit, and the velocity vector at the particle is tangent to the orbit, equal to the cross product of the angular velocity with the position vector.     orb(t) = (2.6*cos(t), 0.9*sin(t))            \\overrightarrow{\\omega} = \\dfrac{d\\theta}{dt}\\,\\hat{k}   +z  O   \\overrightarrow{r} = r\\,\\hat r    \\overrightarrow{v} = \\overrightarrow{\\omega}\\times\\overrightarrow{r}                   Examples   Angular velocity from an angle function   A particle moves in a circle of radius centred at the origin of the -plane; at it is on the positive -axis. The angle it makes with the positive -axis is , where and are positive constants.    Find the angular velocity vector.  Find the velocity vector, in polar coordinates.  At what time is the angular velocity zero?   In which direction does the angular velocity point for , and for ?      Solution.      Blank box in five rows, for the rate of change of the angle, the angular velocity vector, the velocity vector, the time at which the angular velocity vanishes, and the direction before and after that time.       A turntable   A record turntable spins at revolutions per minute, counterclockwise when viewed from above. Take the axis of rotation to be the -axis, with the turntable lying in the -plane, distances in meters.    Find the angular velocity vector .   Find the velocity of the point of the record at , and its speed.      Solution.      Blank box in three rows, for the angular speed and angular velocity vector, for the velocity of the point, and for the speed together with its check.       A carousel   A carousel turns clockwise when viewed from above, making one complete turn every seconds. Taking the axis of rotation as the -axis, find the angular velocity vector, and the velocity of a horse located at meters.   Solution.      Blank box in three rows, for the angular speed and angular velocity vector, for the velocity of the horse, and for the check on its direction.       "
},
{
  "id": "fig-skel-polar-frame",
  "level": "2",
  "url": "subsec-skel-circular-motion.html#fig-skel-polar-frame",
  "type": "Figure",
  "number": "3.4.24",
  "title": "",
  "body": " The moving frame at the point : points radially outward and is tangent to the circle. The fixed vectors and are drawn at for comparison; unlike and , they do not turn as the particle moves.    A circle of radius r centred at the origin. A particle sits at a point P on the circle, its position vector making an angle theta of t with the positive x-axis. At P the unit vector r hat points radially outward along the position vector, and the unit vector theta hat is perpendicular to it, tangent to the circle in the counterclockwise direction. The fixed unit vectors i and j are also drawn at P for comparison.              \\theta(t)    P  r   \\hat r(t)    \\hat\\theta(t)   \\hat{\\imath}  \\hat{\\jmath}  +x  +y               "
},
{
  "id": "skel-summary-circular-velocity-2",
  "level": "2",
  "url": "subsec-skel-circular-motion.html#skel-summary-circular-velocity-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tangential component of the velocity "
},
{
  "id": "def-skel-angular-speed",
  "level": "2",
  "url": "subsec-skel-circular-motion.html#def-skel-angular-speed",
  "type": "Definition",
  "number": "3.4.25",
  "title": "Angular Speed.",
  "body": " Angular Speed   The angular speed of the particle is the magnitude of the rate of change of its angle, measured in radians per second. By , the speed of the particle and its angular speed are related by    "
},
{
  "id": "fig-skel-circular-chord",
  "level": "2",
  "url": "subsec-skel-circular-motion.html#fig-skel-circular-chord",
  "type": "Figure",
  "number": "3.4.26",
  "title": "",
  "body": " The displacement is the chord subtending the angle . For small the chord is nearly the arc, , and its direction approaches that of the tangent line, along which points.    Two position vectors of equal length r are drawn from the centre of a dashed circle, separated by a small angle delta theta. The chord delta r joins the tip of the first to the tip of the second. A dashed tangent line touches the circle at the first point, and the velocity arrow at that point lies along it.            \\Delta\\theta      \\overrightarrow{r}(t)    \\overrightarrow{r}(t+\\Delta t)    \\Delta\\overrightarrow{r}    \\overrightarrow{v}(t)    \\text{tangent line}     \\|\\Delta\\overrightarrow{r}\\| = 2r\\sin\\tfrac{\\Delta\\theta}{2} \\approx r\\,\\Delta\\theta                 "
},
{
  "id": "def-skel-angular-velocity",
  "level": "2",
  "url": "subsec-skel-circular-motion.html#def-skel-angular-velocity",
  "type": "Definition",
  "number": "3.4.27",
  "title": "Angular Velocity Vector.",
  "body": " Angular Velocity Vector   For an object moving in a circle in the -plane about the origin, the angular velocity vector is directed along the axis of rotation. Its SI units are , and the angular speed of is its magnitude, .   "
},
{
  "id": "fig-skel-angular-velocity-sign",
  "level": "2",
  "url": "subsec-skel-circular-motion.html#fig-skel-angular-velocity-sign",
  "type": "Figure",
  "number": "3.4.28",
  "title": "",
  "body": " The angular velocity vector points along the axis of rotation, in the direction given by the right-hand rule: up the -axis for counterclockwise motion (left), down it for clockwise motion (right). Note that is not tangent to the orbit the velocity is.    Two panels showing a particle on a circular orbit in the horizontal plane, drawn in an oblique view with the z-axis vertical. In the left panel the particle circulates counterclockwise as seen from above and the angular velocity vector points up along the positive z-direction. In the right panel the particle circulates clockwise and the angular velocity vector points down along the negative z-direction. In both panels the velocity is tangent to the orbit.     orbA(t) = (2.2*cos(t), 0.75*sin(t))  orbB(t) = (7.4 + 2.2*cos(t), 0.75*sin(t))             \\overrightarrow{\\omega}   +z  O   \\overrightarrow{r}    \\overrightarrow{v}    \\omega_z = \\dfrac{d\\theta}{dt} > 0    \\text{counterclockwise:}\\;\\; \\overrightarrow{\\omega} \\text{ points along } +\\hat{k}             \\overrightarrow{\\omega}   +z  O   \\overrightarrow{r}    \\overrightarrow{v}    \\omega_z = \\dfrac{d\\theta}{dt} < 0    \\text{clockwise:}\\;\\; \\overrightarrow{\\omega} \\text{ points along } -\\hat{k}                   "
},
{
  "id": "fact-skel-velocity-cross-product",
  "level": "2",
  "url": "subsec-skel-circular-motion.html#fact-skel-velocity-cross-product",
  "type": "Fact",
  "number": "3.4.29",
  "title": "Velocity and Angular Velocity.",
  "body": " Velocity and Angular Velocity   For an object in circular motion about the origin,    "
},
{
  "id": "fig-skel-omega-cross-r",
  "level": "2",
  "url": "subsec-skel-circular-motion.html#fig-skel-omega-cross-r",
  "type": "Figure",
  "number": "3.4.30",
  "title": "",
  "body": " The velocity of a particle in circular motion is . Because and are perpendicular, the speed is , and the right-hand rule places tangent to the orbit in the direction of travel.    A circular orbit in the horizontal plane drawn in an oblique view, with the z-axis vertical. The angular velocity vector points straight up along the z-axis from the centre O. The position vector runs from O out to the particle on the orbit, and the velocity vector at the particle is tangent to the orbit, equal to the cross product of the angular velocity with the position vector.     orb(t) = (2.6*cos(t), 0.9*sin(t))            \\overrightarrow{\\omega} = \\dfrac{d\\theta}{dt}\\,\\hat{k}   +z  O   \\overrightarrow{r} = r\\,\\hat r    \\overrightarrow{v} = \\overrightarrow{\\omega}\\times\\overrightarrow{r}                "
},
{
  "id": "ex-skel-angular-velocity",
  "level": "2",
  "url": "subsec-skel-circular-motion.html#ex-skel-angular-velocity",
  "type": "Example",
  "number": "3.4.31",
  "title": "Angular velocity from an angle function.",
  "body": " Angular velocity from an angle function   A particle moves in a circle of radius centred at the origin of the -plane; at it is on the positive -axis. The angle it makes with the positive -axis is , where and are positive constants.    Find the angular velocity vector.  Find the velocity vector, in polar coordinates.  At what time is the angular velocity zero?   In which direction does the angular velocity point for , and for ?      Solution.      Blank box in five rows, for the rate of change of the angle, the angular velocity vector, the velocity vector, the time at which the angular velocity vanishes, and the direction before and after that time.     "
},
{
  "id": "ex-skel-turntable",
  "level": "2",
  "url": "subsec-skel-circular-motion.html#ex-skel-turntable",
  "type": "Example",
  "number": "3.4.32",
  "title": "A turntable.",
  "body": " A turntable   A record turntable spins at revolutions per minute, counterclockwise when viewed from above. Take the axis of rotation to be the -axis, with the turntable lying in the -plane, distances in meters.    Find the angular velocity vector .   Find the velocity of the point of the record at , and its speed.      Solution.      Blank box in three rows, for the angular speed and angular velocity vector, for the velocity of the point, and for the speed together with its check.     "
},
{
  "id": "skel-exercise-carousel-velocity",
  "level": "2",
  "url": "subsec-skel-circular-motion.html#skel-exercise-carousel-velocity",
  "type": "Checkpoint",
  "number": "3.4.33",
  "title": "A carousel.",
  "body": " A carousel   A carousel turns clockwise when viewed from above, making one complete turn every seconds. Taking the axis of rotation as the -axis, find the angular velocity vector, and the velocity of a horse located at meters.   Solution.      Blank box in three rows, for the angular speed and angular velocity vector, for the velocity of the horse, and for the check on its direction.     "
},
{
  "id": "subsec-skel-parametric-equations",
  "level": "1",
  "url": "subsec-skel-parametric-equations.html",
  "type": "Subsection",
  "number": "3.5.1",
  "title": "Parametric Equations",
  "body": " Parametric Equations  Imagine that you would like to describe the motion of an object whose motion is confined to a plane. If you know how its Cartesian coordinates, and , change as time passes, you will be able to draw a curve that represents the trajectory of its motion, as shown in . Mathematically, we will need two equations to demonstrate how the - and -coordinates evolve in time , which are known as the parametric equations .   Parametric Equations   If and are given as functions of a third variable , called a parameter , by then the points trace out a curve in the plane, called a parametric curve . The equations and are the parametric equations of the curve.     A point moves in the plane. As time passes, its coordinates and change, and the point traces out the trajectory of the motion.     The trajectory of a moving point whose coordinates are given by the parametric equations , .     f(t)=(0.62*t*cos(t), 0.62*t*sin(t))        (x,y)=(f(t),\\,g(t))                 As an example, consider and . Fill in , plot the seven points on the grid below, and join them.   Points on the curve ,                    Empty coordinate grid running from negative four to four horizontally and negative one to ten vertically, for plotting the seven points from the table and joining them.     Blank box in two rows, one for eliminating the parameter and one for naming the curve and the direction in which it is traced.     The parametric curve , : the points from the table appear first, and then the moving point traces out the parabola in the direction of increasing . Use it to check your sketch.    As our second example, consider the equation of the circle centered at with unit radius,   Here, we would like to parametrize and in terms of a single parameter , as in , in such a way that by varying the value of we can reconstruct the circle . Find such a pair.     Blank box in two rows, one for the trigonometric identity and the resulting parametrization and one for the interval of the parameter and the verification.     The Unit Circle       Parametrizing the unit circle: as increases from to , the point travels counterclockwise around the circle, passing through the marked points at , , , and .     Parametrizing the unit circle by , , . A generic point of the circle corresponds to the parameter value .     c(t)=(cos(t), sin(t))            t=0    t=\\frac{\\pi}{2}    t=\\pi    t=\\frac{3\\pi}{2}    (x,y)=(\\cos(t_0),\\,\\sin(t_0))    t_0                      Question   Can you think of another way to write a parametric form of the circle ?     Blank workspace for a second parametrization of the unit circle.      "
},
{
  "id": "subsec-skel-parametric-equations-2",
  "level": "2",
  "url": "subsec-skel-parametric-equations.html#subsec-skel-parametric-equations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parametric equations "
},
{
  "id": "def-skel-parametric-equations",
  "level": "2",
  "url": "subsec-skel-parametric-equations.html#def-skel-parametric-equations",
  "type": "Definition",
  "number": "3.5.1",
  "title": "Parametric Equations.",
  "body": " Parametric Equations   If and are given as functions of a third variable , called a parameter , by then the points trace out a curve in the plane, called a parametric curve . The equations and are the parametric equations of the curve.   "
},
{
  "id": "fig-skel-parametric-motion-video",
  "level": "2",
  "url": "subsec-skel-parametric-equations.html#fig-skel-parametric-motion-video",
  "type": "Figure",
  "number": "3.5.2",
  "title": "",
  "body": " A point moves in the plane. As time passes, its coordinates and change, and the point traces out the trajectory of the motion.   "
},
{
  "id": "fig-skel-parametric-motion",
  "level": "2",
  "url": "subsec-skel-parametric-equations.html#fig-skel-parametric-motion",
  "type": "Figure",
  "number": "3.5.3",
  "title": "",
  "body": " The trajectory of a moving point whose coordinates are given by the parametric equations , .     f(t)=(0.62*t*cos(t), 0.62*t*sin(t))        (x,y)=(f(t),\\,g(t))                "
},
{
  "id": "table-skel-parabola-points",
  "level": "2",
  "url": "subsec-skel-parametric-equations.html#table-skel-parabola-points",
  "type": "Table",
  "number": "3.5.4",
  "title": "Points on the curve <span class=\"process-math\">\\(x=t\\text{,}\\)<\/span> <span class=\"process-math\">\\(y=t^2\\)<\/span>",
  "body": " Points on the curve ,                "
},
{
  "id": "fig-skel-parabola-param-video",
  "level": "2",
  "url": "subsec-skel-parametric-equations.html#fig-skel-parabola-param-video",
  "type": "Figure",
  "number": "3.5.5",
  "title": "",
  "body": " The parametric curve , : the points from the table appear first, and then the moving point traces out the parabola in the direction of increasing . Use it to check your sketch.   "
},
{
  "id": "fig-skel-unit-circle-param-video",
  "level": "2",
  "url": "subsec-skel-parametric-equations.html#fig-skel-unit-circle-param-video",
  "type": "Figure",
  "number": "3.5.6",
  "title": "",
  "body": " Parametrizing the unit circle: as increases from to , the point travels counterclockwise around the circle, passing through the marked points at , , , and .   "
},
{
  "id": "fig-skel-unit-circle-param",
  "level": "2",
  "url": "subsec-skel-parametric-equations.html#fig-skel-unit-circle-param",
  "type": "Figure",
  "number": "3.5.7",
  "title": "",
  "body": " Parametrizing the unit circle by , , . A generic point of the circle corresponds to the parameter value .     c(t)=(cos(t), sin(t))            t=0    t=\\frac{\\pi}{2}    t=\\pi    t=\\frac{3\\pi}{2}    (x,y)=(\\cos(t_0),\\,\\sin(t_0))    t_0                    "
},
{
  "id": "skel-question-another-parametrization",
  "level": "2",
  "url": "subsec-skel-parametric-equations.html#skel-question-another-parametrization",
  "type": "Checkpoint",
  "number": "3.5.8",
  "title": "Question.",
  "body": " Question   Can you think of another way to write a parametric form of the circle ?     Blank workspace for a second parametrization of the unit circle.     "
},
{
  "id": "subsec-skel-parametrizing-examples",
  "level": "1",
  "url": "subsec-skel-parametrizing-examples.html",
  "type": "Subsection",
  "number": "3.5.2",
  "title": "Some Examples of Parametrizing Curves",
  "body": " Some Examples of Parametrizing Curves   Parametrizing Curves   Find the parametric equations corresponding to the following curves.    The line segment connecting the two points and .  The ellipse .  The circle of radius centered at .     Solution.      Blank box in three labelled rows, one for each of the three parametrizations together with its verification.    Now sketch the three curves on the grids below, marking the point reached at and the direction of increasing on each.     Empty coordinate grid for part A, for sketching the segment from zero comma one to one comma zero.     Empty coordinate grid for part B, running from negative three to three horizontally and negative four to four vertically, for sketching the ellipse.     Empty coordinate grid for part C, running from negative one to five horizontally and negative two and a half to two and a half vertically, for sketching the shifted circle.      The three videos below trace the curves out. Use them to check your sketches and, in particular, the directions you marked.   Part A: the line segment from to .     Part B: the ellipse , traced counterclockwise, with the points at , , , and marked.     Part C: the circle of radius centered at .    "
},
{
  "id": "ex-skel-parametrizing-curves",
  "level": "2",
  "url": "subsec-skel-parametrizing-examples.html#ex-skel-parametrizing-curves",
  "type": "Example",
  "number": "3.5.9",
  "title": "Parametrizing Curves.",
  "body": " Parametrizing Curves   Find the parametric equations corresponding to the following curves.    The line segment connecting the two points and .  The ellipse .  The circle of radius centered at .     Solution.      Blank box in three labelled rows, one for each of the three parametrizations together with its verification.    Now sketch the three curves on the grids below, marking the point reached at and the direction of increasing on each.     Empty coordinate grid for part A, for sketching the segment from zero comma one to one comma zero.     Empty coordinate grid for part B, running from negative three to three horizontally and negative four to four vertically, for sketching the ellipse.     Empty coordinate grid for part C, running from negative one to five horizontally and negative two and a half to two and a half vertically, for sketching the shifted circle.     "
},
{
  "id": "fig-skel-segment-param-video",
  "level": "2",
  "url": "subsec-skel-parametrizing-examples.html#fig-skel-segment-param-video",
  "type": "Figure",
  "number": "3.5.10",
  "title": "",
  "body": " Part A: the line segment from to .   "
},
{
  "id": "fig-skel-ellipse-param-video",
  "level": "2",
  "url": "subsec-skel-parametrizing-examples.html#fig-skel-ellipse-param-video",
  "type": "Figure",
  "number": "3.5.11",
  "title": "",
  "body": " Part B: the ellipse , traced counterclockwise, with the points at , , , and marked.   "
},
{
  "id": "fig-skel-shifted-circle-param-video",
  "level": "2",
  "url": "subsec-skel-parametrizing-examples.html#fig-skel-shifted-circle-param-video",
  "type": "Figure",
  "number": "3.5.12",
  "title": "",
  "body": " Part C: the circle of radius centered at .   "
},
{
  "id": "subsec-skel-projectile-motion",
  "level": "1",
  "url": "subsec-skel-projectile-motion.html",
  "type": "Subsection",
  "number": "3.5.3",
  "title": "*Projectile Motion",
  "body": " *Projectile Motion   Starred section. This one is for the interested reader. It will not be examined.  A type of parametric equation you may have already seen is the equation of motion for a projectile. Here the parameter is time, and gives the position of the projectile at time .  Recall two basic facts about motion in one dimension from your introductory physics course. For motion along a straight line at constant speed , the position is For motion with uniform acceleration , the position is   Now consider an object moving under the influence of gravity alone, ignoring air resistance. Write down its equations of motion.     Blank box in three rows, for the components of the initial velocity, for the horizontal equation of motion, and for the vertical equation of motion.     Equations of Motion for a Projectile   where is the initial speed, is the launch angle, and is the acceleration due to gravity.   Now eliminate the parameter to find the trajectory.     Blank box in three rows, for the time solved from the horizontal equation, for the substitution that gives y in terms of x, and for the name of the resulting curve.    Differentiating the equations of motion gives the velocity of the projectile. Write down its two components, and use them to say what happens at the apex.     Blank box in three rows, for the two velocity components, for the reason the horizontal component is constant, and for what happens at the apex.     The velocity of a projectile at five instants along its parabolic path. The horizontal component stays constant while the vertical component changes under the constant downward acceleration ; at the apex the vertical component is zero.     f(x) = 0.14*x*(10 - x)    0      \\overrightarrow{a} = \\overrightarrow{g} = -g\\hat{\\jmath}        \\theta  \\overrightarrow{v}_0  \\overrightarrow{v}_{x0}  \\overrightarrow{v}_{y0}      \\overrightarrow{v}  \\overrightarrow{v}_x  \\overrightarrow{v}_y    \\overrightarrow{v}   \\overrightarrow{v}_y = 0 \\text{ at this point}      \\overrightarrow{v}_x  \\overrightarrow{v}_y  \\overrightarrow{v}      \\overrightarrow{v}_x  \\overrightarrow{v}_y  \\overrightarrow{v}                              A projectile launched from the origin traces out its parabolic trajectory. The horizontal velocity component is constant, while the vertical component shrinks to zero at the apex and then grows in the downward direction as the projectile falls.     Projectiles on an Inclined Plane   A particle is launched from a point on an inclined plane and travels in the vertical plane that contains the line of greatest slope through . The plane makes an angle with the horizontal, and the particle leaves with initial speed at an elevation to the horizontal. Taking the origin at with horizontal and vertical axes and neglecting air resistance, the trajectory is the projectile parabola Let be the point where the particle meets the plane again, and let be the range measured along the plane , so that . Work through the tasks below to find the range on the plane, the maximum range for a given , and the time of flight, and then to read off the corresponding results when the particle is fired down the plane.   A particle projected up the plane with speed at elevation , striking the incline (angle ) at after travelling a range along the slope.     f(x) = 1.2*x - 0.1*x^2         \\beta  \\theta    O  P  M  v_0  R  R\\sin\\beta  R\\cos\\beta  \\text{inclined plane}                        Since lies on the trajectory, substitute these coordinates into the parabola and cancel a factor of to show that      Blank workspace for substituting the coordinates of P into the trajectory and cancelling the factor of R.        Rearrange the relation from the previous task to isolate , and use to obtain the range up the plane       Blank box in two rows, one for collecting the term containing R and one for solving for R.        Using the identity , rewrite the range as For a fixed launch speed , deduce the elevation that maximizes , and show that the maximum range up the plane is      Blank box in three rows, for the rewritten range, for the elevation that maximizes it, and for the maximum range itself.      With , , and held constant, only varies, and it is largest when it equals . Afterwards use .      The horizontal distance to the foot of is covered at the constant horizontal speed . Using , show that the time of flight is      Blank workspace for deriving the time of flight from the horizontal distance and speed.        When the particle is projected down the plane, the geometry is the same with replaced by . Write down the range, maximum range, and time of flight down the inclined plane.     Blank box in four rows, for the range down the plane, the maximum range down the plane, the time of flight down the plane, and a comparison with the results up the plane.       The maximum range up the plane occurs when . Rearrange that condition into the form , and interpret each side geometrically: one is the angle the launch direction makes above the incline , the other the angle it makes below the vertical . What does their being equal say about the direction of projection for maximum range?     Blank workspace for interpreting the condition for maximum range up the inclined plane.      "
},
{
  "id": "fig-skel-projectile-velocity",
  "level": "2",
  "url": "subsec-skel-projectile-motion.html#fig-skel-projectile-velocity",
  "type": "Figure",
  "number": "3.5.13",
  "title": "",
  "body": " The velocity of a projectile at five instants along its parabolic path. The horizontal component stays constant while the vertical component changes under the constant downward acceleration ; at the apex the vertical component is zero.     f(x) = 0.14*x*(10 - x)    0      \\overrightarrow{a} = \\overrightarrow{g} = -g\\hat{\\jmath}        \\theta  \\overrightarrow{v}_0  \\overrightarrow{v}_{x0}  \\overrightarrow{v}_{y0}      \\overrightarrow{v}  \\overrightarrow{v}_x  \\overrightarrow{v}_y    \\overrightarrow{v}   \\overrightarrow{v}_y = 0 \\text{ at this point}      \\overrightarrow{v}_x  \\overrightarrow{v}_y  \\overrightarrow{v}      \\overrightarrow{v}_x  \\overrightarrow{v}_y  \\overrightarrow{v}                            "
},
{
  "id": "fig-skel-projectile-motion-video",
  "level": "2",
  "url": "subsec-skel-projectile-motion.html#fig-skel-projectile-motion-video",
  "type": "Figure",
  "number": "3.5.14",
  "title": "",
  "body": " A projectile launched from the origin traces out its parabolic trajectory. The horizontal velocity component is constant, while the vertical component shrinks to zero at the apex and then grows in the downward direction as the projectile falls.   "
},
{
  "id": "activity-skel-projectile-incline",
  "level": "2",
  "url": "subsec-skel-projectile-motion.html#activity-skel-projectile-incline",
  "type": "Activity",
  "number": "3.5.3.1",
  "title": "Projectiles on an Inclined Plane.",
  "body": " Projectiles on an Inclined Plane   A particle is launched from a point on an inclined plane and travels in the vertical plane that contains the line of greatest slope through . The plane makes an angle with the horizontal, and the particle leaves with initial speed at an elevation to the horizontal. Taking the origin at with horizontal and vertical axes and neglecting air resistance, the trajectory is the projectile parabola Let be the point where the particle meets the plane again, and let be the range measured along the plane , so that . Work through the tasks below to find the range on the plane, the maximum range for a given , and the time of flight, and then to read off the corresponding results when the particle is fired down the plane.   A particle projected up the plane with speed at elevation , striking the incline (angle ) at after travelling a range along the slope.     f(x) = 1.2*x - 0.1*x^2         \\beta  \\theta    O  P  M  v_0  R  R\\sin\\beta  R\\cos\\beta  \\text{inclined plane}                        Since lies on the trajectory, substitute these coordinates into the parabola and cancel a factor of to show that      Blank workspace for substituting the coordinates of P into the trajectory and cancelling the factor of R.        Rearrange the relation from the previous task to isolate , and use to obtain the range up the plane       Blank box in two rows, one for collecting the term containing R and one for solving for R.        Using the identity , rewrite the range as For a fixed launch speed , deduce the elevation that maximizes , and show that the maximum range up the plane is      Blank box in three rows, for the rewritten range, for the elevation that maximizes it, and for the maximum range itself.      With , , and held constant, only varies, and it is largest when it equals . Afterwards use .      The horizontal distance to the foot of is covered at the constant horizontal speed . Using , show that the time of flight is      Blank workspace for deriving the time of flight from the horizontal distance and speed.        When the particle is projected down the plane, the geometry is the same with replaced by . Write down the range, maximum range, and time of flight down the inclined plane.     Blank box in four rows, for the range down the plane, the maximum range down the plane, the time of flight down the plane, and a comparison with the results up the plane.       The maximum range up the plane occurs when . Rearrange that condition into the form , and interpret each side geometrically: one is the angle the launch direction makes above the incline , the other the angle it makes below the vertical . What does their being equal say about the direction of projection for maximum range?     Blank workspace for interpreting the condition for maximum range up the inclined plane.     "
},
{
  "id": "subsec-skel-intersection-collision",
  "level": "1",
  "url": "subsec-skel-intersection-collision.html",
  "type": "Subsection",
  "number": "3.5.4",
  "title": "*Intersection Points versus Collision Points",
  "body": " *Intersection Points versus Collision Points   Starred section. This one is for the interested reader. It will not be examined.  A parametrization carries more information than the curve it traces: it also records when the moving point visits each place on the curve. Because of this, there are two different questions we can ask about two parametric curves thought of as the trajectories of two particles.   Intersection Points and Collision Points   A point is an intersection point of the two curves if lies on both curves; that is, if there are parameter values and , not necessarily equal , with   A point is a collision point of the two particles if both particles are at at the same time; that is, if there is a single value of with     An intersection point is a statement about the two paths : they cross, like two roads on a map. A collision point is a statement about the two motions : the cars are at the crossroads at the same instant.  Say how the two definitions differ when you set up the equations, and how they are related.     Blank box in three rows, for the equations that give intersection points, for the equations that give collision points, and for the implication between the two.    In the next two examples the two paths are always the same: the parabola and the line , which meet at the two points and . Only the schedule of the second particle will change.   The paths cross, but the particles never meet   Two particles move in the plane with position vectors Find all intersection points of their paths, and all collision points of the particles.   Solution.      Blank box in three rows, for the two paths after eliminating the parameter, for the collision equations, and for the times at which each particle reaches each crossing.       The particles and move simultaneously. Their paths cross at and , but the clock shows that the two particles are never at either crossing at the same time.     The parabola and the line intersect at and . At each of these points the two particles arrive at different times, so neither point is a collision point.    The parabola and the line drawn on the same axes, crossing at the points and .     r1(t) = (t, t^2)  r2(t) = (-t, 2 - t)       C_1    C_2      (-1,1)       (2,4)                    The same paths, a different schedule now they collide   Keep the first particle, but re-schedule the second one: Find the intersection points of the paths and the collision points of the particles.   Solution.      Blank box in three rows, for the paths, for the collision computation, and for what happens at the other crossing.     Empty coordinate grid running from negative four to four horizontally and negative two to six vertically, for drawing the parabola and the line and marking the collision point.       With the second particle follows the same line as before, but on a different schedule. Use it to check which crossing is the collision, and when it happens.     Every Collision Is an Intersection, but Not Conversely  If two particles collide at , then certainly lies on both paths, so every collision point is an intersection point. The converse fails: the paths may cross at a point that the two particles visit at different times. Changing the parametrization of a curve does not move the curve, but it can create or destroy collisions.     Keep . Find a parametrization of the line for which the two particles collide at both intersection points.     Blank box in two rows, one for the new parametrization of the line and one for the collision equations it produces.      Try to arrange that the second particle has the same -coordinate as the first one at every time .    "
},
{
  "id": "def-skel-intersection-collision",
  "level": "2",
  "url": "subsec-skel-intersection-collision.html#def-skel-intersection-collision",
  "type": "Definition",
  "number": "3.5.16",
  "title": "Intersection Points and Collision Points.",
  "body": " Intersection Points and Collision Points   A point is an intersection point of the two curves if lies on both curves; that is, if there are parameter values and , not necessarily equal , with   A point is a collision point of the two particles if both particles are at at the same time; that is, if there is a single value of with    "
},
{
  "id": "ex-skel-no-collision",
  "level": "2",
  "url": "subsec-skel-intersection-collision.html#ex-skel-no-collision",
  "type": "Example",
  "number": "3.5.17",
  "title": "The paths cross, but the particles never meet.",
  "body": " The paths cross, but the particles never meet   Two particles move in the plane with position vectors Find all intersection points of their paths, and all collision points of the particles.   Solution.      Blank box in three rows, for the two paths after eliminating the parameter, for the collision equations, and for the times at which each particle reaches each crossing.     "
},
{
  "id": "fig-skel-no-collision-video",
  "level": "2",
  "url": "subsec-skel-intersection-collision.html#fig-skel-no-collision-video",
  "type": "Figure",
  "number": "3.5.18",
  "title": "",
  "body": " The particles and move simultaneously. Their paths cross at and , but the clock shows that the two particles are never at either crossing at the same time.   "
},
{
  "id": "fig-skel-no-collision",
  "level": "2",
  "url": "subsec-skel-intersection-collision.html#fig-skel-no-collision",
  "type": "Figure",
  "number": "3.5.19",
  "title": "",
  "body": " The parabola and the line intersect at and . At each of these points the two particles arrive at different times, so neither point is a collision point.    The parabola and the line drawn on the same axes, crossing at the points and .     r1(t) = (t, t^2)  r2(t) = (-t, 2 - t)       C_1    C_2      (-1,1)       (2,4)                  "
},
{
  "id": "ex-skel-collision",
  "level": "2",
  "url": "subsec-skel-intersection-collision.html#ex-skel-collision",
  "type": "Example",
  "number": "3.5.20",
  "title": "The same paths, a different schedule—now they collide.",
  "body": " The same paths, a different schedule now they collide   Keep the first particle, but re-schedule the second one: Find the intersection points of the paths and the collision points of the particles.   Solution.      Blank box in three rows, for the paths, for the collision computation, and for what happens at the other crossing.     Empty coordinate grid running from negative four to four horizontally and negative two to six vertically, for drawing the parabola and the line and marking the collision point.     "
},
{
  "id": "fig-skel-collision-video",
  "level": "2",
  "url": "subsec-skel-intersection-collision.html#fig-skel-collision-video",
  "type": "Figure",
  "number": "3.5.21",
  "title": "",
  "body": " With the second particle follows the same line as before, but on a different schedule. Use it to check which crossing is the collision, and when it happens.   "
},
{
  "id": "skel-insight-collision-vs-intersection",
  "level": "2",
  "url": "subsec-skel-intersection-collision.html#skel-insight-collision-vs-intersection",
  "type": "Insight",
  "number": "3.5.22",
  "title": "Every Collision Is an Intersection, but Not Conversely.",
  "body": " Every Collision Is an Intersection, but Not Conversely  If two particles collide at , then certainly lies on both paths, so every collision point is an intersection point. The converse fails: the paths may cross at a point that the two particles visit at different times. Changing the parametrization of a curve does not move the curve, but it can create or destroy collisions.  "
},
{
  "id": "skel-checkpoint-collision",
  "level": "2",
  "url": "subsec-skel-intersection-collision.html#skel-checkpoint-collision",
  "type": "Checkpoint",
  "number": "3.5.23",
  "title": "",
  "body": "  Keep . Find a parametrization of the line for which the two particles collide at both intersection points.     Blank box in two rows, one for the new parametrization of the line and one for the collision equations it produces.      Try to arrange that the second particle has the same -coordinate as the first one at every time .   "
},
{
  "id": "subsec-skel-lines-vector-eq",
  "level": "1",
  "url": "subsec-skel-lines-vector-eq.html",
  "type": "Subsection",
  "number": "3.6.1",
  "title": "Vector Equation for a Line in Space",
  "body": " Vector Equation for a Line in Space  Consider a line that passes through the point and is parallel to the vector , as in . Write down the vector equation of that line.     Blank box in two rows, one for the displacement from P zero to P and one for the resulting vector equation of the line.     The line through parallel to . For any point on the line, the vector is parallel to .    A three dimensional coordinate system with a blue line passing through two labelled points. The point P zero equals x zero comma y zero comma z zero sits higher on the line, and the point P equals x comma y comma z sits lower. A magenta vector from P zero to P lies along the line, and a separate magenta vector v below the line points in the same direction, illustrating that the vector P zero P is parallel to v.       Vector Equation of a Line      "
},
{
  "id": "fig-skel-lines-vector-eq",
  "level": "2",
  "url": "subsec-skel-lines-vector-eq.html#fig-skel-lines-vector-eq",
  "type": "Figure",
  "number": "3.6.1",
  "title": "",
  "body": " The line through parallel to . For any point on the line, the vector is parallel to .    A three dimensional coordinate system with a blue line passing through two labelled points. The point P zero equals x zero comma y zero comma z zero sits higher on the line, and the point P equals x comma y comma z sits lower. A magenta vector from P zero to P lies along the line, and a separate magenta vector v below the line points in the same direction, illustrating that the vector P zero P is parallel to v.     "
},
{
  "id": "subsec-skel-lines-parametric",
  "level": "1",
  "url": "subsec-skel-lines-parametric.html",
  "type": "Subsection",
  "number": "3.6.2",
  "title": "Parametric Equations for a Line",
  "body": " Parametric Equations for a Line  The vector equation can be interpreted as the following parametric equations, where :    The line through two points   Find the vector equation and the parametric equations of the line that passes through the points and .   Solution.      Blank box in three rows, for the direction vector, for the vector equation of the line, and for its parametric equations.     Empty three-dimensional coordinate axes, with the value two marked on the x axis and one on the y axis, for sketching the line through the two given points.      "
},
{
  "id": "ex-skel-lines-two-points",
  "level": "2",
  "url": "subsec-skel-lines-parametric.html#ex-skel-lines-two-points",
  "type": "Example",
  "number": "3.6.2",
  "title": "The line through two points.",
  "body": " The line through two points   Find the vector equation and the parametric equations of the line that passes through the points and .   Solution.      Blank box in three rows, for the direction vector, for the vector equation of the line, and for its parametric equations.     Empty three-dimensional coordinate axes, with the value two marked on the x axis and one on the y axis, for sketching the line through the two given points.     "
},
{
  "id": "subsec-skel-lines-distance",
  "level": "1",
  "url": "subsec-skel-lines-distance.html",
  "type": "Subsection",
  "number": "3.6.3",
  "title": "The Distance from a Point to a Line",
  "body": " The Distance from a Point to a Line  Our goal is to find the distance of the point from the line , as shown in . Derive a formula for it.     Blank box in two rows, one for the distance read off the right triangle and one for the same distance written with a cross product.     Distance from a Point to a Line       The distance of the point from the line is , where is any point on the line.             S    P    L    \\theta    \\|\\overrightarrow{PS}\\|\\left|\\sin\\theta\\right|    \\mathbf v                  Distance from a point to a line   Calculate the distance between the point and the line with the vector equation , .   Solution.      Blank box in three rows, for the direction vector together with a point on the line and the vector P S, for their cross product, and for the distance.      "
},
{
  "id": "fig-skel-lines-dist-line",
  "level": "2",
  "url": "subsec-skel-lines-distance.html#fig-skel-lines-dist-line",
  "type": "Figure",
  "number": "3.6.3",
  "title": "",
  "body": " The distance of the point from the line is , where is any point on the line.             S    P    L    \\theta    \\|\\overrightarrow{PS}\\|\\left|\\sin\\theta\\right|    \\mathbf v                "
},
{
  "id": "ex-skel-lines-distance",
  "level": "2",
  "url": "subsec-skel-lines-distance.html#ex-skel-lines-distance",
  "type": "Example",
  "number": "3.6.4",
  "title": "Distance from a point to a line.",
  "body": " Distance from a point to a line   Calculate the distance between the point and the line with the vector equation , .   Solution.      Blank box in three rows, for the direction vector together with a point on the line and the vector P S, for their cross product, and for the distance.     "
},
{
  "id": "subsec-skel-planes-equation",
  "level": "1",
  "url": "subsec-skel-planes-equation.html",
  "type": "Subsection",
  "number": "3.6.4",
  "title": "Equation of a Plane in Space",
  "body": " Equation of a Plane in Space  Let us assume that we have computed the normal vector to a plane and that we have a point on the plane. A normal vector is perpendicular to the plane and hence perpendicular to any vector lying in it. Denoting an arbitrary point of the plane by , as in , this gives    The normal vector to a plane is perpendicular to all the vectors in the plane.    A parallelogram represents a plane seen in perspective. A red vector n points straight up from a point P zero on the plane, and a blue vector lies in the plane from P zero to another point P. A small right angle marker at P zero shows that the two vectors are perpendicular.      Turn into an equation in , , and .     Blank box in three rows, for the point-normal form of the equation of a plane, for its standard form, and for the value of the constant D.     Equation of a Plane   equivalently Notice that the coefficients of , , and in the standard form are the components of the normal vector.    Finding the equation of a plane   Find an equation of the plane through the point with normal vector . Find the intercepts and sketch the plane.   Solution.      Blank box in two rows, one for the equation of the plane and one for its three intercepts.     Empty three-dimensional coordinate axes with tick values marked, for sketching the part of the plane lying in the first octant.      "
},
{
  "id": "fig-skel-planes-normal",
  "level": "2",
  "url": "subsec-skel-planes-equation.html#fig-skel-planes-normal",
  "type": "Figure",
  "number": "3.6.5",
  "title": "",
  "body": " The normal vector to a plane is perpendicular to all the vectors in the plane.    A parallelogram represents a plane seen in perspective. A red vector n points straight up from a point P zero on the plane, and a blue vector lies in the plane from P zero to another point P. A small right angle marker at P zero shows that the two vectors are perpendicular.     "
},
{
  "id": "ex-skel-planes-equation",
  "level": "2",
  "url": "subsec-skel-planes-equation.html#ex-skel-planes-equation",
  "type": "Example",
  "number": "3.6.6",
  "title": "Finding the equation of a plane.",
  "body": " Finding the equation of a plane   Find an equation of the plane through the point with normal vector . Find the intercepts and sketch the plane.   Solution.      Blank box in two rows, one for the equation of the plane and one for its three intercepts.     Empty three-dimensional coordinate axes with tick values marked, for sketching the part of the plane lying in the first octant.     "
},
{
  "id": "subsec-skel-planes-intersection",
  "level": "1",
  "url": "subsec-skel-planes-intersection.html",
  "type": "Subsection",
  "number": "3.6.5",
  "title": "Lines of Intersection",
  "body": " Lines of Intersection  Suppose we would like to find the line of intersection of two planes with normal vectors and , as in . To write down the equation of we need a direction vector for it, and the two normal vectors are enough to produce one.  Explain why, and write down .     Blank box in three rows, for the relation of each normal vector to the line of intersection, for the direction vector itself, and for the condition under which it is nonzero.     Direction of the Line of Intersection       The direction vector of the line.    Two planes intersect inside a three dimensional box: a horizontal blue plane and a slanted pink plane, meeting at an oblique angle rather than a right angle. The line where the planes meet is drawn in black, with one point on it marked. No vectors are drawn.       The line of intersection of two planes   Find the parametric equations of the line of intersection of the two planes and .   Solution.      Blank box in four rows, for the two normal vectors, for their cross product, for a point common to both planes, and for the parametric equations of the line of intersection.      "
},
{
  "id": "fig-skel-planes-intersection",
  "level": "2",
  "url": "subsec-skel-planes-intersection.html#fig-skel-planes-intersection",
  "type": "Figure",
  "number": "3.6.7",
  "title": "",
  "body": " The direction vector of the line.    Two planes intersect inside a three dimensional box: a horizontal blue plane and a slanted pink plane, meeting at an oblique angle rather than a right angle. The line where the planes meet is drawn in black, with one point on it marked. No vectors are drawn.     "
},
{
  "id": "ex-skel-planes-intersection",
  "level": "2",
  "url": "subsec-skel-planes-intersection.html#ex-skel-planes-intersection",
  "type": "Example",
  "number": "3.6.8",
  "title": "The line of intersection of two planes.",
  "body": " The line of intersection of two planes   Find the parametric equations of the line of intersection of the two planes and .   Solution.      Blank box in four rows, for the two normal vectors, for their cross product, for a point common to both planes, and for the parametric equations of the line of intersection.     "
},
{
  "id": "subsec-skel-planes-distance",
  "level": "1",
  "url": "subsec-skel-planes-distance.html",
  "type": "Subsection",
  "number": "3.6.6",
  "title": "Distance of a Point from a Plane",
  "body": " Distance of a Point from a Plane  Our goal here is to find the distance of the point from a plane, given a point on the plane and the normal vector , as shown in . Derive a formula for it.     Blank box in two rows, one for the length of the projection written out and one for the simplified distance formula.     Distance from a point to a plane       The distance of the point from the plane is the magnitude of the projection of onto the normal vector . The corner mark records that the dashed segment meets the plane at a right angle, so it is parallel to .    A parallelogram represents a plane seen in perspective. From a point P on the plane, a blue normal vector n points straight up and a green vector points up and to the right to a point S above the plane. A dashed dark red segment drops vertically from S to the plane; its length d is the distance from S to the plane, which equals the magnitude of the projection of P S onto n. A small square corner mark where the dashed segment meets the plane shows that the segment is perpendicular to the plane.       Distance from a point to a plane   Find the distance from the point to the plane with equation .   Solution.      Blank box in three rows, for the normal vector and a point on the plane, for the vector P S and its dot product with the normal, and for the distance.      "
},
{
  "id": "fig-skel-planes-distance",
  "level": "2",
  "url": "subsec-skel-planes-distance.html#fig-skel-planes-distance",
  "type": "Figure",
  "number": "3.6.9",
  "title": "",
  "body": " The distance of the point from the plane is the magnitude of the projection of onto the normal vector . The corner mark records that the dashed segment meets the plane at a right angle, so it is parallel to .    A parallelogram represents a plane seen in perspective. From a point P on the plane, a blue normal vector n points straight up and a green vector points up and to the right to a point S above the plane. A dashed dark red segment drops vertically from S to the plane; its length d is the distance from S to the plane, which equals the magnitude of the projection of P S onto n. A small square corner mark where the dashed segment meets the plane shows that the segment is perpendicular to the plane.     "
},
{
  "id": "ex-skel-planes-distance",
  "level": "2",
  "url": "subsec-skel-planes-distance.html#ex-skel-planes-distance",
  "type": "Example",
  "number": "3.6.10",
  "title": "Distance from a point to a plane.",
  "body": " Distance from a point to a plane   Find the distance from the point to the plane with equation .   Solution.      Blank box in three rows, for the normal vector and a point on the plane, for the vector P S and its dot product with the normal, and for the distance.     "
},
{
  "id": "subsec-skel-parabola",
  "level": "1",
  "url": "subsec-skel-parabola.html",
  "type": "Subsection",
  "number": "3.7.1",
  "title": "Parabola",
  "body": " Parabola    A parabola is the set of points in a plane that are equidistant from a fixed point (the focus ) and a fixed line (the directrix ).    The standard equation follows from that definition and nothing else. Choose coordinates that make the picture symmetric: put the focus at and the directrix at , as in . Derive the standard form.     Blank box in three rows, for the equidistance condition, for the equation after squaring, and for the standard form of the parabola.     The Standard Parabola   The vertex is at the origin, the focus at , and the directrix is the line ; the vertex sits halfway between them. If the curve opens downward, and interchanging the roles of and gives the sideways parabola     The parabola . The point is equidistant from the focus and the directrix .     pval = 0.6  f(x) = x^2\/(4*pval)  xP = 1.9       \\text{directrix: } y=-p   \\text{Focus }(0,p)   \\text{vertex}    P      x^2 = 4py                 Animation: as moves along the parabola, its distance to the focus always equals its distance to the directrix.     From equation to focus and directrix   Find the focus and the directrix of .   Solution.      Blank box in three rows, for completing the square, for the value of p and the vertex, and for the focus and directrix.     Empty coordinate grid running from negative one half to two and a half horizontally and negative one and a quarter to one vertically, for sketching the parabola of the example with its focus and directrix.       From focus and directrix to equation (a sideways parabola)   Find the equation of the parabola whose focus is and whose directrix is the vertical line . In which direction does it open?   Solution.      Blank box in two rows, one for the equidistance condition squared and expanded and one for the equation, the direction of opening, and the value of p.     Empty coordinate grid running from negative three to five and a half horizontally and negative five to five vertically, for sketching the sideways parabola with its focus and vertical directrix.      "
},
{
  "id": "def-skel-parabola",
  "level": "2",
  "url": "subsec-skel-parabola.html#def-skel-parabola",
  "type": "Definition",
  "number": "3.7.1",
  "title": "",
  "body": "  A parabola is the set of points in a plane that are equidistant from a fixed point (the focus ) and a fixed line (the directrix ).   "
},
{
  "id": "fig-skel-parabola-def",
  "level": "2",
  "url": "subsec-skel-parabola.html#fig-skel-parabola-def",
  "type": "Figure",
  "number": "3.7.2",
  "title": "",
  "body": " The parabola . The point is equidistant from the focus and the directrix .     pval = 0.6  f(x) = x^2\/(4*pval)  xP = 1.9       \\text{directrix: } y=-p   \\text{Focus }(0,p)   \\text{vertex}    P      x^2 = 4py               "
},
{
  "id": "vid-skel-parabola-focus",
  "level": "2",
  "url": "subsec-skel-parabola.html#vid-skel-parabola-focus",
  "type": "Figure",
  "number": "3.7.3",
  "title": "",
  "body": " Animation: as moves along the parabola, its distance to the focus always equals its distance to the directrix.   "
},
{
  "id": "ex-skel-parabola-1",
  "level": "2",
  "url": "subsec-skel-parabola.html#ex-skel-parabola-1",
  "type": "Example",
  "number": "3.7.4",
  "title": "From equation to focus and directrix.",
  "body": " From equation to focus and directrix   Find the focus and the directrix of .   Solution.      Blank box in three rows, for completing the square, for the value of p and the vertex, and for the focus and directrix.     Empty coordinate grid running from negative one half to two and a half horizontally and negative one and a quarter to one vertically, for sketching the parabola of the example with its focus and directrix.     "
},
{
  "id": "ex-skel-parabola-2",
  "level": "2",
  "url": "subsec-skel-parabola.html#ex-skel-parabola-2",
  "type": "Example",
  "number": "3.7.5",
  "title": "From focus and directrix to equation (a sideways parabola).",
  "body": " From focus and directrix to equation (a sideways parabola)   Find the equation of the parabola whose focus is and whose directrix is the vertical line . In which direction does it open?   Solution.      Blank box in two rows, one for the equidistance condition squared and expanded and one for the equation, the direction of opening, and the value of p.     Empty coordinate grid running from negative three to five and a half horizontally and negative five to five vertically, for sketching the sideways parabola with its focus and vertical directrix.     "
},
{
  "id": "subsec-skel-ellipse",
  "level": "1",
  "url": "subsec-skel-ellipse.html",
  "type": "Subsection",
  "number": "3.7.2",
  "title": "Ellipse",
  "body": " Ellipse    An ellipse is the set of points in a plane the sum of whose distances from two fixed points and (the foci ) is constant.     The Standard Ellipse  An ellipse centred at the origin with its foci on the -axis has the standard form The segment joining and is the semi-major axis , the segment joining and is the semi-minor axis , and the foci satisfy .    An ellipse with foci and . Each slanted segment from to a focus has length .     aa = 3.2  bb = 2.2  cc = sqrt(aa^2 - bb^2)  E(x,y) = x^2\/aa^2 + y^2\/bb^2         a  a      F_1(c,0)  F_2(-c,0)   (0,b)  (0,-b)  (a,0)  (-a,0)  \\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1                Animation: as travels around the ellipse, the sum of its distances to the two foci stays fixed at .    Where do the formulas for come from? Two evaluations of do all the work. Carry them out.     Blank box in three rows, for the sum of the focal radii at the vertex, for the right triangle at the co-vertex, and for the reason the relation between a, b, and c carries a minus sign.     Focal Relation for the Ellipse       Animation: deriving the formula for . Sliding to the vertex shows the constant equals ; sliding it to the co-vertex builds the right triangle giving .     Horizontal ellipse   Sketch the graph of and locate the foci.   Solution.      Blank box in three rows, for the standard form of the ellipse, for the semi-axes and the direction of the major axis, and for c and the foci.     Empty coordinate grid running from negative three and a half to three and a half horizontally and negative two and a half to two and a half vertically, for sketching the horizontal ellipse and its foci.       Animation: in practice, put the equation in standard form and read off the larger denominator; then is the semi-major axis, measured from the center to a vertex.     A vertical ellipse (foci on the -axis)   Sketch the graph of and locate the foci.   Solution.      Blank box in three rows, for the standard form, for the semi-axes and the direction of the major axis, and for c and the foci.     Empty coordinate grid running from negative five to five horizontally and negative six to six vertically, for sketching the vertical ellipse and its foci.      "
},
{
  "id": "def-skel-ellipse",
  "level": "2",
  "url": "subsec-skel-ellipse.html#def-skel-ellipse",
  "type": "Definition",
  "number": "3.7.6",
  "title": "",
  "body": "  An ellipse is the set of points in a plane the sum of whose distances from two fixed points and (the foci ) is constant.   "
},
{
  "id": "skel-summary-ellipse-2",
  "level": "2",
  "url": "subsec-skel-ellipse.html#skel-summary-ellipse-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "semi-major axis semi-minor axis "
},
{
  "id": "fig-skel-ellipse-def",
  "level": "2",
  "url": "subsec-skel-ellipse.html#fig-skel-ellipse-def",
  "type": "Figure",
  "number": "3.7.7",
  "title": "",
  "body": " An ellipse with foci and . Each slanted segment from to a focus has length .     aa = 3.2  bb = 2.2  cc = sqrt(aa^2 - bb^2)  E(x,y) = x^2\/aa^2 + y^2\/bb^2         a  a      F_1(c,0)  F_2(-c,0)   (0,b)  (0,-b)  (a,0)  (-a,0)  \\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1              "
},
{
  "id": "vid-skel-ellipse-sum",
  "level": "2",
  "url": "subsec-skel-ellipse.html#vid-skel-ellipse-sum",
  "type": "Figure",
  "number": "3.7.8",
  "title": "",
  "body": " Animation: as travels around the ellipse, the sum of its distances to the two foci stays fixed at .   "
},
{
  "id": "vid-skel-ellipse-formula-a",
  "level": "2",
  "url": "subsec-skel-ellipse.html#vid-skel-ellipse-formula-a",
  "type": "Figure",
  "number": "3.7.9",
  "title": "",
  "body": " Animation: deriving the formula for . Sliding to the vertex shows the constant equals ; sliding it to the co-vertex builds the right triangle giving .   "
},
{
  "id": "ex-skel-ellipse-1",
  "level": "2",
  "url": "subsec-skel-ellipse.html#ex-skel-ellipse-1",
  "type": "Example",
  "number": "3.7.10",
  "title": "Horizontal ellipse.",
  "body": " Horizontal ellipse   Sketch the graph of and locate the foci.   Solution.      Blank box in three rows, for the standard form of the ellipse, for the semi-axes and the direction of the major axis, and for c and the foci.     Empty coordinate grid running from negative three and a half to three and a half horizontally and negative two and a half to two and a half vertically, for sketching the horizontal ellipse and its foci.     "
},
{
  "id": "vid-skel-ellipse-find-a",
  "level": "2",
  "url": "subsec-skel-ellipse.html#vid-skel-ellipse-find-a",
  "type": "Figure",
  "number": "3.7.11",
  "title": "",
  "body": " Animation: in practice, put the equation in standard form and read off the larger denominator; then is the semi-major axis, measured from the center to a vertex.   "
},
{
  "id": "ex-skel-ellipse-2",
  "level": "2",
  "url": "subsec-skel-ellipse.html#ex-skel-ellipse-2",
  "type": "Example",
  "number": "3.7.12",
  "title": "A vertical ellipse (foci on the <span class=\"process-math\">\\(y\\)<\/span>-axis).",
  "body": " A vertical ellipse (foci on the -axis)   Sketch the graph of and locate the foci.   Solution.      Blank box in three rows, for the standard form, for the semi-axes and the direction of the major axis, and for c and the foci.     Empty coordinate grid running from negative five to five horizontally and negative six to six vertically, for sketching the vertical ellipse and its foci.     "
},
{
  "id": "subsec-skel-hyperbola",
  "level": "1",
  "url": "subsec-skel-hyperbola.html",
  "type": "Subsection",
  "number": "3.7.3",
  "title": "Hyperbola",
  "body": " Hyperbola    A hyperbola is the set of points in a plane the difference of whose distances from two fixed points and (the foci ) is constant.     The Standard Hyperbola  A hyperbola centred at the origin with its foci on the -axis has the standard form Its vertices are , the foci satisfy , and the asymptotes are .    A hyperbola opening left and right, with vertices , foci , and asymptotes .     aa = 2  bb = 1.6  cc = sqrt(aa^2 + bb^2)  H(x,y) = x^2\/aa^2 - y^2\/bb^2         y=\\tfrac{b}{a}x  y=-\\tfrac{b}{a}x      F_1(c,0)  F_2(-c,0)      V_1  V_2  \\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1                Animation: as moves along a branch, the absolute difference of its distances to the foci stays fixed at , while the branch hugs its asymptotes.    The formulas for arise exactly as they did for the ellipse, with sums replaced by differences. Work them out.     Blank box in three rows, for the difference of the focal radii at the vertex, for the right triangle in the central box, and for the contrast with the ellipse.     Focal Relation for the Hyperbola       Animation: deriving the formula for . Sliding to the vertex shows the constant equals ; the central box then builds the right triangle giving .    The same box explains the asymptotes. Show where they come from.     Blank box in four rows, for solving the standard equation for y, for the limiting lines, for the reason the branches never meet the asymptotes, and for the slopes in the vertical case.     The central box has half-width and half-height . Its diagonals, extended, are exactly the asymptotes: the diagonal to the corner has run and rise , hence slope .     aa = 2  bb = 1.6  H(x,y) = x^2\/aa^2 - y^2\/bb^2                       (a,b)  a  b  y=\\tfrac{b}{a}x  y=-\\tfrac{b}{a}x  \\text{central box}                   Horizontal hyperbola   Find the foci and asymptotes of the hyperbola and sketch its graph.   Solution.      Blank box in three rows, for the standard form, for a, b and the direction of opening, and for c, the foci and the asymptotes.     Empty coordinate grid running from negative nine to nine horizontally and negative eight to eight vertically, for sketching the horizontal hyperbola with its central box and asymptotes.       Animation: in practice, put the equation in standard form and read off the denominator under the positive term; then is measured along the transverse axis, from the center to a vertex.     A vertical hyperbola (opens up and down)   Find the vertices, foci, and asymptotes of and sketch its graph.   Solution.      Blank box in three rows, for the standard form, for a, b and the vertices, and for c, the foci and the asymptotes.     Empty coordinate grid running from negative nine to nine horizontally and negative eight to eight vertically, for sketching the vertical hyperbola with its central box and asymptotes.      "
},
{
  "id": "def-skel-hyperbola",
  "level": "2",
  "url": "subsec-skel-hyperbola.html#def-skel-hyperbola",
  "type": "Definition",
  "number": "3.7.13",
  "title": "",
  "body": "  A hyperbola is the set of points in a plane the difference of whose distances from two fixed points and (the foci ) is constant.   "
},
{
  "id": "fig-skel-hyperbola-def",
  "level": "2",
  "url": "subsec-skel-hyperbola.html#fig-skel-hyperbola-def",
  "type": "Figure",
  "number": "3.7.14",
  "title": "",
  "body": " A hyperbola opening left and right, with vertices , foci , and asymptotes .     aa = 2  bb = 1.6  cc = sqrt(aa^2 + bb^2)  H(x,y) = x^2\/aa^2 - y^2\/bb^2         y=\\tfrac{b}{a}x  y=-\\tfrac{b}{a}x      F_1(c,0)  F_2(-c,0)      V_1  V_2  \\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1              "
},
{
  "id": "vid-skel-hyperbola-diff",
  "level": "2",
  "url": "subsec-skel-hyperbola.html#vid-skel-hyperbola-diff",
  "type": "Figure",
  "number": "3.7.15",
  "title": "",
  "body": " Animation: as moves along a branch, the absolute difference of its distances to the foci stays fixed at , while the branch hugs its asymptotes.   "
},
{
  "id": "vid-skel-hyperbola-formula-a",
  "level": "2",
  "url": "subsec-skel-hyperbola.html#vid-skel-hyperbola-formula-a",
  "type": "Figure",
  "number": "3.7.16",
  "title": "",
  "body": " Animation: deriving the formula for . Sliding to the vertex shows the constant equals ; the central box then builds the right triangle giving .   "
},
{
  "id": "fig-skel-hyperbola-box",
  "level": "2",
  "url": "subsec-skel-hyperbola.html#fig-skel-hyperbola-box",
  "type": "Figure",
  "number": "3.7.17",
  "title": "",
  "body": " The central box has half-width and half-height . Its diagonals, extended, are exactly the asymptotes: the diagonal to the corner has run and rise , hence slope .     aa = 2  bb = 1.6  H(x,y) = x^2\/aa^2 - y^2\/bb^2                       (a,b)  a  b  y=\\tfrac{b}{a}x  y=-\\tfrac{b}{a}x  \\text{central box}                 "
},
{
  "id": "ex-skel-hyperbola-1",
  "level": "2",
  "url": "subsec-skel-hyperbola.html#ex-skel-hyperbola-1",
  "type": "Example",
  "number": "3.7.18",
  "title": "Horizontal hyperbola.",
  "body": " Horizontal hyperbola   Find the foci and asymptotes of the hyperbola and sketch its graph.   Solution.      Blank box in three rows, for the standard form, for a, b and the direction of opening, and for c, the foci and the asymptotes.     Empty coordinate grid running from negative nine to nine horizontally and negative eight to eight vertically, for sketching the horizontal hyperbola with its central box and asymptotes.     "
},
{
  "id": "vid-skel-hyperbola-find-a",
  "level": "2",
  "url": "subsec-skel-hyperbola.html#vid-skel-hyperbola-find-a",
  "type": "Figure",
  "number": "3.7.19",
  "title": "",
  "body": " Animation: in practice, put the equation in standard form and read off the denominator under the positive term; then is measured along the transverse axis, from the center to a vertex.   "
},
{
  "id": "ex-skel-hyperbola-2",
  "level": "2",
  "url": "subsec-skel-hyperbola.html#ex-skel-hyperbola-2",
  "type": "Example",
  "number": "3.7.20",
  "title": "A vertical hyperbola (opens up and down).",
  "body": " A vertical hyperbola (opens up and down)   Find the vertices, foci, and asymptotes of and sketch its graph.   Solution.      Blank box in three rows, for the standard form, for a, b and the vertices, and for c, the foci and the asymptotes.     Empty coordinate grid running from negative nine to nine horizontally and negative eight to eight vertically, for sketching the vertical hyperbola with its central box and asymptotes.     "
},
{
  "id": "subsec-skel-app-reflector",
  "level": "1",
  "url": "subsec-skel-app-reflector.html",
  "type": "Subsection",
  "number": "3.7.4",
  "title": "*Application: Parabolic Reflectors",
  "body": " *Application: Parabolic Reflectors   Starred section. This one is for the interested reader. It will not be examined.  Satellite dishes, radio telescopes, headlights, and solar cookers are all parabolic in cross-section, and for one reason: a parabola has a reflection property . Every ray travelling parallel to the axis of the parabola reflects off the curve and passes through the focus . Run the argument backwards and a source placed at the focus emits a perfectly parallel beam which is why a headlight is shaped this way too.  This is not a coincidence of the shape; it follows from the equidistance definition ( ). For the tangent at the point has slope , and a short computation shows that the incoming vertical ray and the segment from that point to make equal angles with the normal. The law of reflection then sends every such ray straight to the focus, so that is where the receiver goes.   A parabolic dish. Rays arriving parallel to the axis (orange) reflect off the dish (red) and all converge on the focus, where the receiver sits.     pval = 0.6  f(x) = x^2\/(4*pval)               \\text{focus (receiver)}  \\text{incoming parallel rays}               Animation: parallel rays strike the dish at different points and all reflect through the single focus.     Placing the receiver   A satellite dish has a parabolic cross-section that is feet wide and foot deep at its center. How far from the vertex should the receiver be mounted?   Solution.      Blank box in three rows, for a point on the rim of the dish, for the value of p, and for the position of the receiver.      "
},
{
  "id": "subsec-skel-app-reflector-3",
  "level": "2",
  "url": "subsec-skel-app-reflector.html#subsec-skel-app-reflector-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "reflection property "
},
{
  "id": "fig-skel-parabola-reflector",
  "level": "2",
  "url": "subsec-skel-app-reflector.html#fig-skel-parabola-reflector",
  "type": "Figure",
  "number": "3.7.21",
  "title": "",
  "body": " A parabolic dish. Rays arriving parallel to the axis (orange) reflect off the dish (red) and all converge on the focus, where the receiver sits.     pval = 0.6  f(x) = x^2\/(4*pval)               \\text{focus (receiver)}  \\text{incoming parallel rays}             "
},
{
  "id": "vid-skel-parabolic-reflector",
  "level": "2",
  "url": "subsec-skel-app-reflector.html#vid-skel-parabolic-reflector",
  "type": "Figure",
  "number": "3.7.22",
  "title": "",
  "body": " Animation: parallel rays strike the dish at different points and all reflect through the single focus.   "
},
{
  "id": "ex-skel-app-reflector",
  "level": "2",
  "url": "subsec-skel-app-reflector.html#ex-skel-app-reflector",
  "type": "Example",
  "number": "3.7.23",
  "title": "Placing the receiver.",
  "body": " Placing the receiver   A satellite dish has a parabolic cross-section that is feet wide and foot deep at its center. How far from the vertex should the receiver be mounted?   Solution.      Blank box in three rows, for a point on the rim of the dish, for the value of p, and for the position of the receiver.     "
},
{
  "id": "subsec-skel-app-whisper",
  "level": "1",
  "url": "subsec-skel-app-whisper.html",
  "type": "Subsection",
  "number": "3.7.5",
  "title": "*Application: Whispering Galleries",
  "body": " *Application: Whispering Galleries   Starred section. This one is for the interested reader. It will not be examined.  An ellipse has a reflection property of its own: a ray leaving one focus reflects off the ellipse and passes through the other focus. In a room whose ceiling is a half-ellipse the dome of St. Paul's Cathedral, or Statuary Hall in the U.S. Capitol a whisper released at one focus is gathered up by the whole ceiling and delivered to a listener standing at the other focus, while people in between hear nothing.  The constant-sum definition ( ) explains why it works so well. Every path from one focus to the wall and on to the other focus has the same total length, no matter where it strikes. So the reflected sound does not merely arrive at the far focus: it arrives from every direction at the same instant , in phase, and the pieces reinforce one another instead of smearing out. That is what makes a whisper audible across the room.  Write down that common length, and say why the phrase in phase is the key to the effect.     Blank box in two rows, one for the common length of every reflected path and one for why arriving in phase matters.     The interior of St. Paul's Cathedral beneath Wren's dome. Hand-coloured aquatint by Thomas Rowlandson and Augustus Pugin, from Ackermann's Microcosm of London (1809). Public domain, via The Metropolitan Museum of Art .    A hand-coloured aquatint from 1809 showing the interior of Saint Paul's Cathedral, looking up toward the great dome above the crossing, with small figures of visitors walking the marble floor below.      A whispering gallery seen from above. Five sound paths leave the speaker at one focus, bounce off the elliptical wall, and all arrive at the listener at the other focus. Each path has the same total length .     aa = 3.2  bb = 2.2  cc = sqrt(aa^2 - bb^2)  E(x,y) = x^2\/aa^2 + y^2\/bb^2  Px(t) = aa*cos(t)  Py(t) = bb*sin(t)                 F_2  \\text{speaker}   F_1  \\text{listener}                Animation: sound leaves one focus in many directions, reflects off the wall, and reconverges at the other focus every path the same length .     Where should the listener stand?   A whispering gallery is feet long and feet wide. Where should the speaker and the listener stand, and how far does the whisper travel on its way across?   Solution.      Blank box in three rows, for the semi-axes and the focal distance, for where the two people stand, and for the distance the whisper travels.      "
},
{
  "id": "fig-skel-stpauls-1809",
  "level": "2",
  "url": "subsec-skel-app-whisper.html#fig-skel-stpauls-1809",
  "type": "Figure",
  "number": "3.7.24",
  "title": "",
  "body": " The interior of St. Paul's Cathedral beneath Wren's dome. Hand-coloured aquatint by Thomas Rowlandson and Augustus Pugin, from Ackermann's Microcosm of London (1809). Public domain, via The Metropolitan Museum of Art .    A hand-coloured aquatint from 1809 showing the interior of Saint Paul's Cathedral, looking up toward the great dome above the crossing, with small figures of visitors walking the marble floor below.    "
},
{
  "id": "fig-skel-ellipse-whisper",
  "level": "2",
  "url": "subsec-skel-app-whisper.html#fig-skel-ellipse-whisper",
  "type": "Figure",
  "number": "3.7.25",
  "title": "",
  "body": " A whispering gallery seen from above. Five sound paths leave the speaker at one focus, bounce off the elliptical wall, and all arrive at the listener at the other focus. Each path has the same total length .     aa = 3.2  bb = 2.2  cc = sqrt(aa^2 - bb^2)  E(x,y) = x^2\/aa^2 + y^2\/bb^2  Px(t) = aa*cos(t)  Py(t) = bb*sin(t)                 F_2  \\text{speaker}   F_1  \\text{listener}              "
},
{
  "id": "vid-skel-whispering-gallery",
  "level": "2",
  "url": "subsec-skel-app-whisper.html#vid-skel-whispering-gallery",
  "type": "Figure",
  "number": "3.7.26",
  "title": "",
  "body": " Animation: sound leaves one focus in many directions, reflects off the wall, and reconverges at the other focus every path the same length .   "
},
{
  "id": "ex-skel-app-whisper",
  "level": "2",
  "url": "subsec-skel-app-whisper.html#ex-skel-app-whisper",
  "type": "Example",
  "number": "3.7.27",
  "title": "Where should the listener stand?",
  "body": " Where should the listener stand?   A whispering gallery is feet long and feet wide. Where should the speaker and the listener stand, and how far does the whisper travel on its way across?   Solution.      Blank box in three rows, for the semi-axes and the focal distance, for where the two people stand, and for the distance the whisper travels.     "
},
{
  "id": "subsec-skel-app-loran",
  "level": "1",
  "url": "subsec-skel-app-loran.html",
  "type": "Subsection",
  "number": "3.7.6",
  "title": "*Application: Hyperbolic Navigation (LORAN)",
  "body": " *Application: Hyperbolic Navigation (LORAN)   Starred section. This one is for the interested reader. It will not be examined.  Progress in electrical engineering enabled navigation systems based on the transmission of electromagnetic waves. One example is LORAN-C marine navigation, developed in the United States during World War II. A vessel receives a synchronized signal from a pair of transmitters; the signal from the more distant transmitter arrives later, so the measured delay determines the difference between the vessel's distances to the two transmitters, where is the signal speed.  Say what that single measurement tells the vessel, and what a second one adds.     Blank box in three rows, for the curve a single delay determines, for what the sign of the delay adds, and for what a second measurement contributes.     Hyperbolic navigation. The measured delay places the unknown position on the solid hyperbola with foci at the receivers and ; a different delay would place it on the dashed one instead.     cc = 3  aa = 1.5  bb = sqrt(cc^2 - aa^2)  H(x,y) = x^2\/aa^2 - y^2\/bb^2  aa2 = 0.7  bb2 = sqrt(cc^2 - aa2^2)  H2(x,y) = x^2\/aa2^2 - y^2\/bb2^2  sP = 0.9          A   P_2   P_1  |r_2-r_1|=2a  r_2  r_1                  Animation: the point moves, and both signal distances and change but their difference does not, tracing out the hyperbola.     Locating a hiker from three receivers   Three receivers , , and are deployed in the landscape. The figure captures the distances we know. Emma's tourist navigation device sends a signal to all three receivers. The signal arrives at receivers and at the same time, and at receiver it arrives microseconds later. Where is Emma located? Assume the signal travels km per second, and determine the position in a suitably chosen coordinate system.   The exercise data: and are km apart, and is km directly above the point km beyond .                 48\\ \\text{km}      12\\ \\text{km}       36\\ \\text{km}   P_2   P_1   P_3                Solution.      Blank box in six rows, for translating the timing facts into geometry, for the choice of coordinates and the positions of the three receivers, for the perpendicular bisector, for the hyperbola, for solving the two together, and for the answer with its check.       What if Emma were not equidistant from and ?  The exercise was arranged so that the signal reached and simultaneously, and that is what kept the algebra easy: a distance difference of zero is the degenerate case of the hyperbola, and the locus collapses to a straight line, the perpendicular bisector of . We then only had to substitute a linear parametrization into one quadratic equation.  If the two arrival times differed, the delay would instead give a nonzero difference , and Emma would lie on a genuine second hyperbola, with foci and tilted, since its focal axis is not parallel to a coordinate axis. Locating her would then mean intersecting the correct branches of two hyperbolas, as in the figure below. Conceptually nothing changes each measurement contributes one curve, and the position is their common point but algebraically we would be solving two quadratic equations together rather than a linear one and a quadratic one.    Two measurements fix the position. The first delay (receivers , ) puts on the blue branch; the second (receivers , ) puts it on the purple branch. The position is at the crossing, and the dashed segments show the three distances , , .     sP = 0.9  Px = 1.5*cosh(sP)  Py = sqrt(6.75)*sinh(sP)  k1 = sqrt((Px+3)^2 + Py^2) - sqrt((Px-3)^2 + Py^2)  k2 = sqrt((Px+1)^2 + (Py-3.8)^2) - sqrt((Px-3)^2 + Py^2)  H1(x,y) = sqrt((x+3)^2 + y^2) - sqrt((x-3)^2 + y^2)  H2(x,y) = sqrt((x+1)^2 + (y-3.8)^2) - sqrt((x-3)^2 + y^2)         r_1  r_2  r_3          r_2-r_1=2a  r_3-r_1=2a'    A   P_1   P_2   P_3                   "
},
{
  "id": "fig-skel-hyperbola-loran",
  "level": "2",
  "url": "subsec-skel-app-loran.html#fig-skel-hyperbola-loran",
  "type": "Figure",
  "number": "3.7.28",
  "title": "",
  "body": " Hyperbolic navigation. The measured delay places the unknown position on the solid hyperbola with foci at the receivers and ; a different delay would place it on the dashed one instead.     cc = 3  aa = 1.5  bb = sqrt(cc^2 - aa^2)  H(x,y) = x^2\/aa^2 - y^2\/bb^2  aa2 = 0.7  bb2 = sqrt(cc^2 - aa2^2)  H2(x,y) = x^2\/aa2^2 - y^2\/bb2^2  sP = 0.9          A   P_2   P_1  |r_2-r_1|=2a  r_2  r_1                "
},
{
  "id": "vid-skel-hyperbolic-navigation",
  "level": "2",
  "url": "subsec-skel-app-loran.html#vid-skel-hyperbolic-navigation",
  "type": "Figure",
  "number": "3.7.29",
  "title": "",
  "body": " Animation: the point moves, and both signal distances and change but their difference does not, tracing out the hyperbola.   "
},
{
  "id": "ex-skel-app-loran",
  "level": "2",
  "url": "subsec-skel-app-loran.html#ex-skel-app-loran",
  "type": "Example",
  "number": "3.7.30",
  "title": "Locating a hiker from three receivers.",
  "body": " Locating a hiker from three receivers   Three receivers , , and are deployed in the landscape. The figure captures the distances we know. Emma's tourist navigation device sends a signal to all three receivers. The signal arrives at receivers and at the same time, and at receiver it arrives microseconds later. Where is Emma located? Assume the signal travels km per second, and determine the position in a suitably chosen coordinate system.   The exercise data: and are km apart, and is km directly above the point km beyond .                 48\\ \\text{km}      12\\ \\text{km}       36\\ \\text{km}   P_2   P_1   P_3                Solution.      Blank box in six rows, for translating the timing facts into geometry, for the choice of coordinates and the positions of the three receivers, for the perpendicular bisector, for the hyperbola, for solving the two together, and for the answer with its check.     "
},
{
  "id": "rem-skel-loran-two-hyperbolas",
  "level": "2",
  "url": "subsec-skel-app-loran.html#rem-skel-loran-two-hyperbolas",
  "type": "Remark",
  "number": "3.7.32",
  "title": "What if Emma were not equidistant from <span class=\"process-math\">\\(P_1\\)<\/span> and <span class=\"process-math\">\\(P_3\\text{?}\\)<\/span>",
  "body": " What if Emma were not equidistant from and ?  The exercise was arranged so that the signal reached and simultaneously, and that is what kept the algebra easy: a distance difference of zero is the degenerate case of the hyperbola, and the locus collapses to a straight line, the perpendicular bisector of . We then only had to substitute a linear parametrization into one quadratic equation.  If the two arrival times differed, the delay would instead give a nonzero difference , and Emma would lie on a genuine second hyperbola, with foci and tilted, since its focal axis is not parallel to a coordinate axis. Locating her would then mean intersecting the correct branches of two hyperbolas, as in the figure below. Conceptually nothing changes each measurement contributes one curve, and the position is their common point but algebraically we would be solving two quadratic equations together rather than a linear one and a quadratic one.  "
},
{
  "id": "fig-skel-hyperbola-loran-fix",
  "level": "2",
  "url": "subsec-skel-app-loran.html#fig-skel-hyperbola-loran-fix",
  "type": "Figure",
  "number": "3.7.33",
  "title": "",
  "body": " Two measurements fix the position. The first delay (receivers , ) puts on the blue branch; the second (receivers , ) puts it on the purple branch. The position is at the crossing, and the dashed segments show the three distances , , .     sP = 0.9  Px = 1.5*cosh(sP)  Py = sqrt(6.75)*sinh(sP)  k1 = sqrt((Px+3)^2 + Py^2) - sqrt((Px-3)^2 + Py^2)  k2 = sqrt((Px+1)^2 + (Py-3.8)^2) - sqrt((Px-3)^2 + Py^2)  H1(x,y) = sqrt((x+3)^2 + y^2) - sqrt((x-3)^2 + y^2)  H2(x,y) = sqrt((x+1)^2 + (y-3.8)^2) - sqrt((x-3)^2 + y^2)         r_1  r_2  r_3          r_2-r_1=2a  r_3-r_1=2a'    A   P_1   P_2   P_3                  "
},
{
  "id": "subsec-skel-elliptical-paraboloid",
  "level": "1",
  "url": "subsec-skel-elliptical-paraboloid.html",
  "type": "Subsection",
  "number": "3.8.1",
  "title": "Elliptical Paraboloid",
  "body": " Elliptical Paraboloid  We begin with the case in which and appear squared with coefficients of the same sign, while appears only to the first power. In equation , take , , , , and . Equation then reduces to the surface known as an elliptical paraboloid .  Find its traces in the planes , , and .     Blank box in four rows, one for each of the three traces and one for the name of the surface.     Grids for the traces of the elliptical paraboloid in the planes , , and .     Empty coordinate grid labelled x=2, for sketching the trace of the surface in that plane.     Empty coordinate grid labelled y=-3, for sketching the trace of the surface in that plane.     Empty coordinate grid labelled z=1, for sketching the trace of the surface in that plane.       Slicing the elliptical paraboloid with planes , , and .      Slicing with planes , , and . Use it to check the traces you found.    "
},
{
  "id": "subsec-skel-elliptical-paraboloid-2",
  "level": "2",
  "url": "subsec-skel-elliptical-paraboloid.html#subsec-skel-elliptical-paraboloid-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elliptical paraboloid "
},
{
  "id": "fig-skel-elliptical-paraboloid-traces",
  "level": "2",
  "url": "subsec-skel-elliptical-paraboloid.html#fig-skel-elliptical-paraboloid-traces",
  "type": "Figure",
  "number": "3.8.1",
  "title": "",
  "body": " Grids for the traces of the elliptical paraboloid in the planes , , and .     Empty coordinate grid labelled x=2, for sketching the trace of the surface in that plane.     Empty coordinate grid labelled y=-3, for sketching the trace of the surface in that plane.     Empty coordinate grid labelled z=1, for sketching the trace of the surface in that plane.    "
},
{
  "id": "fig-skel-elliptical-paraboloid-slices",
  "level": "2",
  "url": "subsec-skel-elliptical-paraboloid.html#fig-skel-elliptical-paraboloid-slices",
  "type": "Figure",
  "number": "3.8.2",
  "title": "",
  "body": " Slicing the elliptical paraboloid with planes , , and .   "
},
{
  "id": "fig-skel-elliptical-paraboloid-video",
  "level": "2",
  "url": "subsec-skel-elliptical-paraboloid.html#fig-skel-elliptical-paraboloid-video",
  "type": "Figure",
  "number": "3.8.3",
  "title": "",
  "body": " Slicing with planes , , and . Use it to check the traces you found.   "
},
{
  "id": "subsec-skel-hyperbolic-paraboloid",
  "level": "1",
  "url": "subsec-skel-hyperbolic-paraboloid.html",
  "type": "Subsection",
  "number": "3.8.2",
  "title": "Hyperbolic Paraboloid",
  "body": " Hyperbolic Paraboloid  Now change a single sign: keep to the first power, but let the squared terms in and carry opposite signs. In equation , take , , , , and . Equation becomes a hyperbolic paraboloid . That one sign is enough to change the surface completely.  Take the same three planes , , and as in , and find the traces.     Blank box in four rows, one for each of the three traces and one for the name of the surface.     Grids for the traces of the hyperbolic paraboloid in the planes , , and .     Empty coordinate grid labelled x=2, for sketching the trace of the surface in that plane.     Empty coordinate grid labelled y=-3, for sketching the trace of the surface in that plane.     Empty coordinate grid labelled z=1, for sketching the trace of the surface in that plane.       Slicing the hyperbolic paraboloid with planes , , and .      Slicing with planes , , and . Use it to check the traces you found.    "
},
{
  "id": "subsec-skel-hyperbolic-paraboloid-2",
  "level": "2",
  "url": "subsec-skel-hyperbolic-paraboloid.html#subsec-skel-hyperbolic-paraboloid-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperbolic paraboloid "
},
{
  "id": "fig-skel-hyperbolic-paraboloid-traces",
  "level": "2",
  "url": "subsec-skel-hyperbolic-paraboloid.html#fig-skel-hyperbolic-paraboloid-traces",
  "type": "Figure",
  "number": "3.8.4",
  "title": "",
  "body": " Grids for the traces of the hyperbolic paraboloid in the planes , , and .     Empty coordinate grid labelled x=2, for sketching the trace of the surface in that plane.     Empty coordinate grid labelled y=-3, for sketching the trace of the surface in that plane.     Empty coordinate grid labelled z=1, for sketching the trace of the surface in that plane.    "
},
{
  "id": "fig-skel-hyperbolic-paraboloid-slices",
  "level": "2",
  "url": "subsec-skel-hyperbolic-paraboloid.html#fig-skel-hyperbolic-paraboloid-slices",
  "type": "Figure",
  "number": "3.8.5",
  "title": "",
  "body": " Slicing the hyperbolic paraboloid with planes , , and .   "
},
{
  "id": "fig-skel-hyperbolic-paraboloid-video",
  "level": "2",
  "url": "subsec-skel-hyperbolic-paraboloid.html#fig-skel-hyperbolic-paraboloid-video",
  "type": "Figure",
  "number": "3.8.6",
  "title": "",
  "body": " Slicing with planes , , and . Use it to check the traces you found.   "
},
{
  "id": "subsec-skel-ellipsoid",
  "level": "1",
  "url": "subsec-skel-ellipsoid.html",
  "type": "Subsection",
  "number": "3.8.3",
  "title": "Ellipsoid",
  "body": " Ellipsoid  Suppose next that all three variables appear squared with coefficients of the same sign, and that no linear term is present at all. In equation , take , , , , and . Equation reduces to an ellipsoid .  Find the traces in the three coordinate planes , , and .     Blank box in four rows, one for each of the three traces and one for the name of the surface.     Grids for the traces of the ellipsoid in the coordinate planes , , and .     Empty coordinate grid labelled x=0, for sketching the trace of the surface in that plane.     Empty coordinate grid labelled y=0, for sketching the trace of the surface in that plane.     Empty coordinate grid labelled z=0, for sketching the trace of the surface in that plane.       Slicing the ellipsoid with planes , , and .      Slicing the ellipsoid with planes , , and . Use it to check the traces you found.    "
},
{
  "id": "subsec-skel-ellipsoid-2",
  "level": "2",
  "url": "subsec-skel-ellipsoid.html#subsec-skel-ellipsoid-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ellipsoid "
},
{
  "id": "fig-skel-ellipsoid-traces",
  "level": "2",
  "url": "subsec-skel-ellipsoid.html#fig-skel-ellipsoid-traces",
  "type": "Figure",
  "number": "3.8.7",
  "title": "",
  "body": " Grids for the traces of the ellipsoid in the coordinate planes , , and .     Empty coordinate grid labelled x=0, for sketching the trace of the surface in that plane.     Empty coordinate grid labelled y=0, for sketching the trace of the surface in that plane.     Empty coordinate grid labelled z=0, for sketching the trace of the surface in that plane.    "
},
{
  "id": "fig-skel-ellipsoid-slices",
  "level": "2",
  "url": "subsec-skel-ellipsoid.html#fig-skel-ellipsoid-slices",
  "type": "Figure",
  "number": "3.8.8",
  "title": "",
  "body": " Slicing the ellipsoid with planes , , and .   "
},
{
  "id": "fig-skel-ellipsoid-video",
  "level": "2",
  "url": "subsec-skel-ellipsoid.html#fig-skel-ellipsoid-video",
  "type": "Figure",
  "number": "3.8.9",
  "title": "",
  "body": " Slicing the ellipsoid with planes , , and . Use it to check the traces you found.   "
},
{
  "id": "subsec-skel-elliptic-cone",
  "level": "1",
  "url": "subsec-skel-elliptic-cone.html",
  "type": "Subsection",
  "number": "3.8.4",
  "title": "Elliptic Cone",
  "body": " Elliptic Cone  Finally, keep all three squared terms, but let the coefficient of be negative and set the constant on the right-hand side to zero. In equation , take , , , , and . Equation becomes an elliptic cone .  Find the traces in the planes , , and .     Blank box in four rows, one for each of the three traces and one for the name of the surface.     Grids for the traces of the elliptic cone in the planes , , and .     Empty coordinate grid labelled x=2, for sketching the trace of the surface in that plane.     Empty coordinate grid labelled y=-3, for sketching the trace of the surface in that plane.     Empty coordinate grid labelled z=1, for sketching the trace of the surface in that plane.       Slicing the elliptic cone with planes , , and .      Slicing the elliptic cone with planes , , and . Use it to check the traces you found.    "
},
{
  "id": "subsec-skel-elliptic-cone-2",
  "level": "2",
  "url": "subsec-skel-elliptic-cone.html#subsec-skel-elliptic-cone-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elliptic cone "
},
{
  "id": "fig-skel-elliptic-cone-traces",
  "level": "2",
  "url": "subsec-skel-elliptic-cone.html#fig-skel-elliptic-cone-traces",
  "type": "Figure",
  "number": "3.8.10",
  "title": "",
  "body": " Grids for the traces of the elliptic cone in the planes , , and .     Empty coordinate grid labelled x=2, for sketching the trace of the surface in that plane.     Empty coordinate grid labelled y=-3, for sketching the trace of the surface in that plane.     Empty coordinate grid labelled z=1, for sketching the trace of the surface in that plane.    "
},
{
  "id": "fig-skel-elliptic-cone-slices",
  "level": "2",
  "url": "subsec-skel-elliptic-cone.html#fig-skel-elliptic-cone-slices",
  "type": "Figure",
  "number": "3.8.11",
  "title": "",
  "body": " Slicing the elliptic cone with planes , , and .   "
},
{
  "id": "fig-skel-elliptic-cone-video",
  "level": "2",
  "url": "subsec-skel-elliptic-cone.html#fig-skel-elliptic-cone-video",
  "type": "Figure",
  "number": "3.8.12",
  "title": "",
  "body": " Slicing the elliptic cone with planes , , and . Use it to check the traces you found.   "
},
{
  "id": "subsec-skel-hyperboloids",
  "level": "1",
  "url": "subsec-skel-hyperboloids.html",
  "type": "Subsection",
  "number": "3.8.5",
  "title": "Hyperboloids",
  "body": " Hyperboloids  The two remaining quadric surfaces are left for you to explore. The aim of this subsection is to practice the slicing method of the previous subsections on a new pair of surfaces and, in doing so, to see what separates a hyperboloid of one sheet from a hyperboloid of two sheets.   Slicing the Hyperboloids   Use the same slicing method as in the previous subsections to study the two surfaces both of which come from equation . For the first surface , , , , and ; for the second surface , , , , and . For the ellipsoid all three squared terms were positive; here exactly one squared term is negative for the first surface and exactly two are negative for the second. Keep this count in mind as you work through the traces. Discover why the first is called a hyperboloid of one sheet while the second is called a hyperboloid of two sheets . Pay particular attention to the traces in the horizontal planes : they are what tells the two surfaces apart.     For the surface , find the trace in the plane for an arbitrary constant , and the traces in the coordinate planes and . For which values of does the plane actually intersect the surface? Identify each trace as an ellipse, parabola, or hyperbola.     Blank box in three rows, for the horizontal trace, for the values of c that give a trace, and for the two traces in the coordinate planes.     Grids for the traces of the hyperboloid of one sheet in the coordinate planes , , and .     Empty coordinate grid labelled x=0, for sketching the trace of the surface in that plane.     Empty coordinate grid labelled y=0, for sketching the trace of the surface in that plane.     Empty coordinate grid labelled z=0, for sketching the trace of the surface in that plane.       Slicing the hyperboloid of one sheet with planes , , and .      Slicing the hyperboloid of one sheet with planes , , and . Use it to check the traces you found.        Repeat the analysis for the surface . For which values of does the plane intersect the surface this time? What happens for between those values?     Blank box in three rows, for the horizontal trace, for the three cases in c, and for the two traces in the coordinate planes.     Grids for the traces of the hyperboloid of two sheets in the coordinate planes , , and a plane that meets it.     Empty coordinate grid labelled x=0, for sketching the trace of the surface in that plane.     Empty coordinate grid labelled y=0, for sketching the trace of the surface in that plane.     Empty coordinate grid labelled z=c, for sketching the trace of the surface in that plane.       Slicing the hyperboloid of two sheets with planes , , and .      Slicing the hyperboloid of two sheets with planes , , and . Use it to check the traces you found.        Using only the traces in the planes , explain why the first surface is called a hyperboloid of one sheet and the second a hyperboloid of two sheets . Can you predict the number of sheets directly from the signs in the equation?     Blank box in three rows, for the explanation from the horizontal traces, for the sign rule, and for how to identify the axis.       "
},
{
  "id": "activity-skel-hyperboloids",
  "level": "2",
  "url": "subsec-skel-hyperboloids.html#activity-skel-hyperboloids",
  "type": "Activity",
  "number": "3.8.5.1",
  "title": "Slicing the Hyperboloids.",
  "body": " Slicing the Hyperboloids   Use the same slicing method as in the previous subsections to study the two surfaces both of which come from equation . For the first surface , , , , and ; for the second surface , , , , and . For the ellipsoid all three squared terms were positive; here exactly one squared term is negative for the first surface and exactly two are negative for the second. Keep this count in mind as you work through the traces. Discover why the first is called a hyperboloid of one sheet while the second is called a hyperboloid of two sheets . Pay particular attention to the traces in the horizontal planes : they are what tells the two surfaces apart.     For the surface , find the trace in the plane for an arbitrary constant , and the traces in the coordinate planes and . For which values of does the plane actually intersect the surface? Identify each trace as an ellipse, parabola, or hyperbola.     Blank box in three rows, for the horizontal trace, for the values of c that give a trace, and for the two traces in the coordinate planes.     Grids for the traces of the hyperboloid of one sheet in the coordinate planes , , and .     Empty coordinate grid labelled x=0, for sketching the trace of the surface in that plane.     Empty coordinate grid labelled y=0, for sketching the trace of the surface in that plane.     Empty coordinate grid labelled z=0, for sketching the trace of the surface in that plane.       Slicing the hyperboloid of one sheet with planes , , and .      Slicing the hyperboloid of one sheet with planes , , and . Use it to check the traces you found.        Repeat the analysis for the surface . For which values of does the plane intersect the surface this time? What happens for between those values?     Blank box in three rows, for the horizontal trace, for the three cases in c, and for the two traces in the coordinate planes.     Grids for the traces of the hyperboloid of two sheets in the coordinate planes , , and a plane that meets it.     Empty coordinate grid labelled x=0, for sketching the trace of the surface in that plane.     Empty coordinate grid labelled y=0, for sketching the trace of the surface in that plane.     Empty coordinate grid labelled z=c, for sketching the trace of the surface in that plane.       Slicing the hyperboloid of two sheets with planes , , and .      Slicing the hyperboloid of two sheets with planes , , and . Use it to check the traces you found.        Using only the traces in the planes , explain why the first surface is called a hyperboloid of one sheet and the second a hyperboloid of two sheets . Can you predict the number of sheets directly from the signs in the equation?     Blank box in three rows, for the explanation from the horizontal traces, for the sign rule, and for how to identify the axis.      "
},
{
  "id": "subsec-skel-quadric-summary",
  "level": "1",
  "url": "subsec-skel-quadric-summary.html",
  "type": "Subsection",
  "number": "3.8.6",
  "title": "Summary of the Quadric Surfaces",
  "body": " Summary of the Quadric Surfaces  We collect the six surfaces of this section in . For each one the table gives its equation, a picture of the surface, and the equation and type of the cross-section cut by the planes , , and ; a cell also notes any value of for which that slice is just a point or a pair of lines. Every entry is one you worked out above, so use the table to check your completed notes, and keep it afterwards as a reference. A printable copy is available as a PDF .   The six parent quadric surfaces, with the equation and type of the slice cut by each family of coordinate planes , , and .   A table of the six quadric surfaces. Each row gives the equation, a three-dimensional picture of the surface, and, for the x-equals-c, y-equals-c, and z-equals-c planes, the equation of the cross-section, its type (parabola, ellipse, or hyperbola with its opening direction), and any value of c for which the slice is only a point or a pair of lines.     "
},
{
  "id": "fig-skel-quadric-summary",
  "level": "2",
  "url": "subsec-skel-quadric-summary.html#fig-skel-quadric-summary",
  "type": "Figure",
  "number": "3.8.19",
  "title": "",
  "body": " The six parent quadric surfaces, with the equation and type of the slice cut by each family of coordinate planes , , and .   A table of the six quadric surfaces. Each row gives the equation, a three-dimensional picture of the surface, and, for the x-equals-c, y-equals-c, and z-equals-c planes, the equation of the cross-section, its type (parabola, ellipse, or hyperbola with its opening direction), and any value of c for which the slice is only a point or a pair of lines.    "
},
{
  "id": "subsec-skel-quadric-applications",
  "level": "1",
  "url": "subsec-skel-quadric-applications.html",
  "type": "Subsection",
  "number": "3.8.7",
  "title": "Quadric Surfaces in the World",
  "body": " Quadric Surfaces in the World  The surfaces of this section are more than abstract shapes. Each one appears in the physical world, and often it appears because of the very geometric properties we have been discovering by slicing.   Elliptical paraboloid. A paraboloid has a striking reflective property: every ray travelling parallel to its axis bounces off the surface and passes through a single point, the focus. This is why the dishes of radio telescopes and satellite receivers, and the reflectors behind car headlights and solar concentrators, are shaped like paraboloids they gather parallel incoming rays to one point, or, run in reverse, send rays out in a single parallel beam. The benefit is sensitivity: because parallel rays converge on the focus no matter where they strike the surface, enlarging the dish simply gathers more of a faint signal onto the same receiver, letting a radio telescope detect fainter and more distant objects. The National Radio Astronomy Observatory explains how a parabolic dish bounces incoming radio waves to a focus .   The dishes of the Very Large Array are elliptical paraboloids, focusing incoming radio waves onto a single receiver. (Photo: Wikimedia Commons, CC BY 3.0.)   A row of large white parabolic radio-telescope dishes on a desert plain.     Hyperbolic paraboloid. The saddle is doubly ruled : through every point pass two straight lines that lie entirely on the surface, just like the flat traces the two crossing lines in the plane  that appear when we slice it in . A doubly curved roof can therefore be built out of straight beams, or poured over straight formwork, which makes the hyperbolic paraboloid both strong and inexpensive to build. It is the shape of many saddle roofs and of Félix Candela's thin concrete shells and, on a smaller scale, of a Pringles potato chip. The benefit is efficiency: a thin shell of this shape carries its load by compression and tension acting within the surface rather than by bending, so it can roof a very wide span with only a few inches of material. Encyclopaedia Britannica's article on shell structures describes how such curved roofs are engineered from straight lines.   The roof of the Scotiabank Saddledome in Calgary is a hyperbolic paraboloid. (Photo: Wikimedia Commons, CC BY-SA 3.0.)   A large arena whose roof dips in the middle and rises at the sides like a saddle.     Ellipsoid. An ellipsoid has two focal points, and a wave leaving one focus reflects off the surface straight toward the other. In a whispering gallery a whisper at one focus is heard clearly across the room at the other; in medical lithotripsy a shock wave generated at one focus is focused onto a kidney stone placed at the other, breaking it apart without surgery. On the largest scale, the Earth itself is modeled as a slightly flattened ellipsoid the reference ellipsoid against which GPS coordinates are measured. The benefit of this two-focus focusing is precision without contact: a lithotripter can concentrate its energy on a stone deep inside the body while sparing the surrounding tissue. Modeling the Earth as an ellipsoid brings a different benefit a single smooth equation captures its slight flattening, giving GPS a far more accurate reference than a sphere would. NOAA's National Geodetic Survey describes the reference ellipsoids that anchor those coordinates.   The Earth is modeled as an oblate ellipsoid, the reference surface behind GPS coordinates. (Image: NASA.)   A photograph of the whole Earth from space, very nearly spherical but slightly flattened.     Elliptic cone. When an aircraft flies faster than sound, the pressure waves it creates pile up into a cone that trails behind it, the Mach cone. The sonic boom you hear is the instant this cone of compressed air sweeps past you. This cone is not a design choice but an unavoidable consequence of the motion; even so, its geometry is informative: the sine of its half-angle equals , where is the Mach number, so a narrower cone means a faster aircraft. NASA's Glenn Research Center describes how supersonic disturbances stay confined within this cone .   A fighter jet at transonic speed, wrapped in a cone-shaped condensation cloud that traces out the Mach cone. (Photo: U.S. Navy.)   A jet in flight enveloped by a cone-shaped white cloud of condensed water vapor.     Hyperboloid of one sheet. Like the saddle, this surface is ruled  recall the two straight-line traces we found in the planes in . Because straight members can be arranged to sweep out its double curvature, it can be built cheaply from straight beams or straight formwork while remaining very stiff. This is exactly why the cooling towers of power plants, and open lattice towers such as Vladimir Shukhov's, are hyperboloids of one sheet. The benefit is that stiffness and wind resistance come almost for free: because the surface is ruled, the whole tower is assembled from straight, easily fabricated members, so it reaches great height with remarkably little material. The University of Houston's Engines of Our Ingenuity tells the story of Shukhov and these ruled towers.   A power-plant cooling tower is a hyperboloid of one sheet, assembled from straight structural members. (Photo: Wikimedia Commons, CC BY 3.0.)   A tall concrete cooling tower that narrows to a waist in the middle and flares out at the top and bottom.     Hyperboloid of two sheets. Like the ellipse, a hyperbola has two foci, and a ray aimed at one focus reflects toward the other. Reflecting telescopes of the Cassegrain and Ritchey Chrétien type including the Hubble Space Telescope use mirrors ground to hyperboloidal shapes to fold a long optical path into a short tube. The same two-focus idea drives hyperbolic navigation : comparing the arrival times of two signals places a receiver on a hyperboloid, and intersecting several such surfaces is how systems from LORAN to GPS pin down a location. The benefit is sharpness in a compact instrument: the paired hyperboloidal mirrors fold a long focal length into a short tube and cancel the aberrations that would blur a simpler design, keeping Hubble's images crisp across its whole field of view. NASA explains how these curved mirrors gather starlight in its overview of the Hubble Space Telescope's optics .   The Hubble Space Telescope focuses light with hyperboloidal mirrors. (Image: NASA.)   The cylindrical Hubble Space Telescope in orbit above the Earth.    "
},
{
  "id": "subsec-skel-quadric-applications-3",
  "level": "2",
  "url": "subsec-skel-quadric-applications.html#subsec-skel-quadric-applications-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Elliptical paraboloid. "
},
{
  "id": "fig-skel-app-paraboloid",
  "level": "2",
  "url": "subsec-skel-quadric-applications.html#fig-skel-app-paraboloid",
  "type": "Figure",
  "number": "3.8.20",
  "title": "",
  "body": " The dishes of the Very Large Array are elliptical paraboloids, focusing incoming radio waves onto a single receiver. (Photo: Wikimedia Commons, CC BY 3.0.)   A row of large white parabolic radio-telescope dishes on a desert plain.   "
},
{
  "id": "subsec-skel-quadric-applications-5",
  "level": "2",
  "url": "subsec-skel-quadric-applications.html#subsec-skel-quadric-applications-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hyperbolic paraboloid. doubly ruled "
},
{
  "id": "fig-skel-app-hyperbolic-paraboloid",
  "level": "2",
  "url": "subsec-skel-quadric-applications.html#fig-skel-app-hyperbolic-paraboloid",
  "type": "Figure",
  "number": "3.8.21",
  "title": "",
  "body": " The roof of the Scotiabank Saddledome in Calgary is a hyperbolic paraboloid. (Photo: Wikimedia Commons, CC BY-SA 3.0.)   A large arena whose roof dips in the middle and rises at the sides like a saddle.   "
},
{
  "id": "subsec-skel-quadric-applications-7",
  "level": "2",
  "url": "subsec-skel-quadric-applications.html#subsec-skel-quadric-applications-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Ellipsoid. lithotripsy "
},
{
  "id": "fig-skel-app-ellipsoid",
  "level": "2",
  "url": "subsec-skel-quadric-applications.html#fig-skel-app-ellipsoid",
  "type": "Figure",
  "number": "3.8.22",
  "title": "",
  "body": " The Earth is modeled as an oblate ellipsoid, the reference surface behind GPS coordinates. (Image: NASA.)   A photograph of the whole Earth from space, very nearly spherical but slightly flattened.   "
},
{
  "id": "subsec-skel-quadric-applications-9",
  "level": "2",
  "url": "subsec-skel-quadric-applications.html#subsec-skel-quadric-applications-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Elliptic cone. sonic boom "
},
{
  "id": "fig-skel-app-cone",
  "level": "2",
  "url": "subsec-skel-quadric-applications.html#fig-skel-app-cone",
  "type": "Figure",
  "number": "3.8.23",
  "title": "",
  "body": " A fighter jet at transonic speed, wrapped in a cone-shaped condensation cloud that traces out the Mach cone. (Photo: U.S. Navy.)   A jet in flight enveloped by a cone-shaped white cloud of condensed water vapor.   "
},
{
  "id": "subsec-skel-quadric-applications-11",
  "level": "2",
  "url": "subsec-skel-quadric-applications.html#subsec-skel-quadric-applications-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hyperboloid of one sheet. ruled "
},
{
  "id": "fig-skel-app-hyperboloid-one-sheet",
  "level": "2",
  "url": "subsec-skel-quadric-applications.html#fig-skel-app-hyperboloid-one-sheet",
  "type": "Figure",
  "number": "3.8.24",
  "title": "",
  "body": " A power-plant cooling tower is a hyperboloid of one sheet, assembled from straight structural members. (Photo: Wikimedia Commons, CC BY 3.0.)   A tall concrete cooling tower that narrows to a waist in the middle and flares out at the top and bottom.   "
},
{
  "id": "subsec-skel-quadric-applications-13",
  "level": "2",
  "url": "subsec-skel-quadric-applications.html#subsec-skel-quadric-applications-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hyperboloid of two sheets. hyperbolic navigation "
},
{
  "id": "fig-skel-app-hyperboloid-two-sheets",
  "level": "2",
  "url": "subsec-skel-quadric-applications.html#fig-skel-app-hyperboloid-two-sheets",
  "type": "Figure",
  "number": "3.8.25",
  "title": "",
  "body": " The Hubble Space Telescope focuses light with hyperboloidal mirrors. (Image: NASA.)   The cylindrical Hubble Space Telescope in orbit above the Earth.   "
},
{
  "id": "worksheet-assignment-1",
  "level": "1",
  "url": "worksheet-assignment-1.html",
  "type": "Worksheet",
  "number": "4.1",
  "title": "Assignment 1",
  "body": " Assignment 1   These problems exercise the hyperbolic identities, the derivatives of the hyperbolic functions and the inverse hyperbolic functions. If you would like to review the material first, see .     Show that , for all real numbers .    We write both terms over the common denominator and use the identity , i.e. : Note that this is valid for every real , since and so the denominator is never zero.      Compute .    We use with , so . Hence       Simplify .    Using the definition together with and ,       Solve the equation for .    We first replace the hyperbolic functions by their definitions:   Multiplying through by and writing turns this into a quadratic equation:   Since is positive, the root is impossible, and only survives. Therefore       Following the method of , show that the inverse hyperbolic tangent is given by     Unlike , the function is increasing on all of , so no restriction of its domain is needed. Set and solve for . Multiplying the numerator and the denominator by gives   Writing and clearing the denominator,   Therefore , and taking the natural logarithm gives . Interchanging the names of the two variables, so that is the inverse function, The range of is the interval , which is exactly the set of for which is positive, so this is the domain of .      Use the substitution to calculate and then use to write your answer with a logarithm. Hint:  , and .    With we have , and the denominator collapses by the identity in the hint:   Since means , and using to rewrite the inverse function, This agrees with the answer obtained by partial fractions, since .    "
},
{
  "id": "rw22-1",
  "level": "2",
  "url": "worksheet-assignment-1.html#rw22-1",
  "type": "Worksheet Exercise",
  "number": "4.1.1",
  "title": "",
  "body": "  Show that , for all real numbers .    We write both terms over the common denominator and use the identity , i.e. : Note that this is valid for every real , since and so the denominator is never zero.   "
},
{
  "id": "pp-1",
  "level": "2",
  "url": "worksheet-assignment-1.html#pp-1",
  "type": "Worksheet Exercise",
  "number": "4.1.2",
  "title": "",
  "body": "  Compute .    We use with , so . Hence    "
},
{
  "id": "pp-2",
  "level": "2",
  "url": "worksheet-assignment-1.html#pp-2",
  "type": "Worksheet Exercise",
  "number": "4.1.3",
  "title": "",
  "body": "  Simplify .    Using the definition together with and ,    "
},
{
  "id": "ex-hyp-solve-equation",
  "level": "2",
  "url": "worksheet-assignment-1.html#ex-hyp-solve-equation",
  "type": "Worksheet Exercise",
  "number": "4.1.4",
  "title": "",
  "body": "  Solve the equation for .    We first replace the hyperbolic functions by their definitions:   Multiplying through by and writing turns this into a quadratic equation:   Since is positive, the root is impossible, and only survives. Therefore    "
},
{
  "id": "ex-hyp-arctanh",
  "level": "2",
  "url": "worksheet-assignment-1.html#ex-hyp-arctanh",
  "type": "Worksheet Exercise",
  "number": "4.1.5",
  "title": "",
  "body": "  Following the method of , show that the inverse hyperbolic tangent is given by     Unlike , the function is increasing on all of , so no restriction of its domain is needed. Set and solve for . Multiplying the numerator and the denominator by gives   Writing and clearing the denominator,   Therefore , and taking the natural logarithm gives . Interchanging the names of the two variables, so that is the inverse function, The range of is the interval , which is exactly the set of for which is positive, so this is the domain of .   "
},
{
  "id": "ex-hyp-arctanh-integral",
  "level": "2",
  "url": "worksheet-assignment-1.html#ex-hyp-arctanh-integral",
  "type": "Worksheet Exercise",
  "number": "4.1.6",
  "title": "",
  "body": "  Use the substitution to calculate and then use to write your answer with a logarithm. Hint:  , and .    With we have , and the denominator collapses by the identity in the hint:   Since means , and using to rewrite the inverse function, This agrees with the answer obtained by partial fractions, since .   "
},
{
  "id": "worksheet-assignment-2",
  "level": "1",
  "url": "worksheet-assignment-2.html",
  "type": "Worksheet",
  "number": "4.2",
  "title": "Assignment 2",
  "body": " Assignment 2   These problems work with sequences, finite sums and geometric series, ask whether a series converges and what it sums to, and then use the Maclaurin series of the standard functions to recognise a sum. If you would like to review the material first, see and .     The terms of a geometric series satisfy where denotes the th term. Find .    Using , Dividing the two equations,   Substituting back, Since , we have , and therefore       What is the sum of all multiples of 7 or 11 less than 1000?    Note that we need to subtract the multiples of , since they have been added twice:   Using : where we used and .      What can we conclude by applying the th term test in the following series?                                  Evaluate the following sums or show that they diverge.                                  We use partial fractions: Setting gives , so ; setting gives , so ; and setting gives , so . Hence     This is a geometric series with and :      , so by the th Term Test the series diverges.    Let . Then Hence , so by the th Term Test the series diverges.     where the terms for and need to be subtracted.         Answer questions A and B below for the following infinite series:    Does the th-term test apply? Remember to fully justify your answer.    Evaluate the series or show that it diverges.          We compute the limit of the terms: Hence the th-term test does not apply: since the limit of the terms is , the test is inconclusive.    The series telescopes. The partial sum is and therefore          Express as a rational number, i.e. in the form , where and are positive integers with no common factors.    We write the repeating decimal as a geometric series: Using the geometric series with and , Hence and .      Find the sum of the convergent series .    Recall . With , so the sum is .      Find the sum of the series .    The Maclaurin series of the exponential function is Setting gives       Find the sum of the series     The general term is starting at . Let us check the first few: at we get ; at we get ; at we get . These match, so the series is   Now pull out one factor of , which does not depend on :   The remaining series is the Maclaurin series evaluated at , which converges for every . Therefore     "
},
{
  "id": "rev-ser-10",
  "level": "2",
  "url": "worksheet-assignment-2.html#rev-ser-10",
  "type": "Worksheet Exercise",
  "number": "4.2.1",
  "title": "",
  "body": "  The terms of a geometric series satisfy where denotes the th term. Find .    Using , Dividing the two equations,   Substituting back, Since , we have , and therefore    "
},
{
  "id": "rev-ser-2",
  "level": "2",
  "url": "worksheet-assignment-2.html#rev-ser-2",
  "type": "Worksheet Exercise",
  "number": "4.2.2",
  "title": "",
  "body": "  What is the sum of all multiples of 7 or 11 less than 1000?    Note that we need to subtract the multiples of , since they have been added twice:   Using : where we used and .   "
},
{
  "id": "asgn2-nth-term-test",
  "level": "2",
  "url": "worksheet-assignment-2.html#asgn2-nth-term-test",
  "type": "Worksheet Exercise",
  "number": "4.2.3",
  "title": "",
  "body": "  What can we conclude by applying the th term test in the following series?                               "
},
{
  "id": "asgn2-evaluate-sums",
  "level": "2",
  "url": "worksheet-assignment-2.html#asgn2-evaluate-sums",
  "type": "Worksheet Exercise",
  "number": "4.2.4",
  "title": "",
  "body": "  Evaluate the following sums or show that they diverge.                                  We use partial fractions: Setting gives , so ; setting gives , so ; and setting gives , so . Hence     This is a geometric series with and :      , so by the th Term Test the series diverges.    Let . Then Hence , so by the th Term Test the series diverges.     where the terms for and need to be subtracted.      "
},
{
  "id": "rw23-1",
  "level": "2",
  "url": "worksheet-assignment-2.html#rw23-1",
  "type": "Worksheet Exercise",
  "number": "4.2.5",
  "title": "",
  "body": "  Answer questions A and B below for the following infinite series:    Does the th-term test apply? Remember to fully justify your answer.    Evaluate the series or show that it diverges.          We compute the limit of the terms: Hence the th-term test does not apply: since the limit of the terms is , the test is inconclusive.    The series telescopes. The partial sum is and therefore       "
},
{
  "id": "rw21-4",
  "level": "2",
  "url": "worksheet-assignment-2.html#rw21-4",
  "type": "Worksheet Exercise",
  "number": "4.2.6",
  "title": "",
  "body": "  Express as a rational number, i.e. in the form , where and are positive integers with no common factors.    We write the repeating decimal as a geometric series: Using the geometric series with and , Hence and .   "
},
{
  "id": "asgn2-cos-series-sum",
  "level": "2",
  "url": "worksheet-assignment-2.html#asgn2-cos-series-sum",
  "type": "Worksheet Exercise",
  "number": "4.2.7",
  "title": "",
  "body": "  Find the sum of the convergent series .    Recall . With , so the sum is .   "
},
{
  "id": "pp-3",
  "level": "2",
  "url": "worksheet-assignment-2.html#pp-3",
  "type": "Worksheet Exercise",
  "number": "4.2.8",
  "title": "",
  "body": "  Find the sum of the series .    The Maclaurin series of the exponential function is Setting gives    "
},
{
  "id": "m1-1",
  "level": "2",
  "url": "worksheet-assignment-2.html#m1-1",
  "type": "Worksheet Exercise",
  "number": "4.2.9",
  "title": "",
  "body": "  Find the sum of the series     The general term is starting at . Let us check the first few: at we get ; at we get ; at we get . These match, so the series is   Now pull out one factor of , which does not depend on :   The remaining series is the Maclaurin series evaluated at , which converges for every . Therefore    "
},
{
  "id": "worksheet-assignment-3",
  "level": "1",
  "url": "worksheet-assignment-3.html",
  "type": "Worksheet",
  "number": "4.3",
  "title": "Assignment 3",
  "body": " Assignment 3   These problems bound the error in a Taylor approximation with the Remainder Theorem and use Taylor series to compute limits and integrals. Problems marked with a star ( ) are for the interested reader: they do not need to be handed in and will not be examined. If you would like to review the material first, see .     For approximately what values of can we replace by with an error of magnitude no greater than ?    Here , and the cubic is . But the Maclaurin series of has no term, so the same polynomial is also the fourth order Taylor polynomial: We should therefore take , not : both choices describe the very same approximation, but the remainder is one order smaller than and so gives the sharper estimate.  The derivatives of are and therefore , so we can take .  By the Remainder Theorem with , which gives See .  For comparison, stopping at would have given , a needlessly small interval for exactly the same polynomial.   The function and the cubic . Between the dashed lines the two graphs differ by at most .     f(t) = (t, sin(t))  p(t) = (t, t - t^3\/6)         y=\\sin x    y=x-\\frac{x^3}{6}    -0.863    0.863                    Use the remainder estimation theorem to estimate the maximum error when approximating by on the interval .    From the remainder theorem, we know that   Also, since , we have and hence :   We know that , hence Hence, an estimate for the upper bound of the error is . See .   The function and on the interval , marked by the dashed lines.     f(t) = (t, exp(t))  p(t) = (t, 1 + t + t^2\/2)         y=e^{x}    y=1+x+\\tfrac{x^2}{2}    -\\frac56    \\frac56                    Consider the function .   Find the second order Taylor polynomial centered at 0.    Estimate the maximum error when approximating with the second order Taylor polynomial centered at 0, on the interval .          We compute the derivatives at 0: Hence i.e. .    We have and . Note that is negative, which means is a decreasing function, hence at the value is maximized, i.e., Also and therefore This means that the error in estimating for by is definitely smaller than . See .      The function and . On the interval , marked by the dashed lines, the two graphs are nearly identical.     f(t) = (t, log(1 + 2*t))  p(t) = (t, 2*t - 2*t^2)         y=\\ln(1+2x)    y=2x-2x^2    -0.25    0.25                    Let Find the exact value of .    First we identify . Its general term is , so This is exactly what you get by differentiating the geometric series term by term: So for . Since , the whole interval of integration lies inside the interval of convergence.  Now we integrate. An antiderivative of is , so       Evaluate as an infinite series. Give the first three nonzero terms.    The integrand has no elementary antiderivative, so expand it as a series first. Starting from , subtracting kills the constant term, so every surviving power of is even and at least . Dividing by therefore leaves an honest power series:   Integrating term by term,       Use Taylor series to evaluate     The quotient has the indeterminate form . Replace the numerator and the denominator by their Maclaurin series. Putting in place of in , and from ,   Both vanish to exactly second order, so cancel the common factor of  legitimate, since the limit never uses the value at itself: Each remaining series is continuous at with a nonzero value there, so only the two leading coefficients matter.      Show that (The integrand is continuous on . As we have , so the integrand tends to ; as we have . So the integrand is bounded and the integral exists. Its antiderivative is not elementary.)    Two facts from Calculus II, both proved by integration by parts For : , and for integration by parts with and gives , since as ; by induction . For : , and for integration by parts with and , so and , gives . The bracket vanishes at because , and at because (by L'Hôpital's rule). By induction, . : for every integer , Either substitute and use , or expand as a series in and integrate term by term with .     Solution 1 (substitution). Let , so and . As runs from to , runs from to . Since , Therefore by .   Solution 2 (directly with series). Substituting into the series , Integrating term by term and using with (so ),    Justification. With , the Remainder Estimation Theorem gives , exactly as in . Replacing by , Integrating over with , , bounds the error after terms by so the partial sums converge to the integral, and the integral equals .    "
},
{
  "id": "rev-ser-6",
  "level": "2",
  "url": "worksheet-assignment-3.html#rev-ser-6",
  "type": "Worksheet Exercise",
  "number": "4.3.1",
  "title": "",
  "body": "  For approximately what values of can we replace by with an error of magnitude no greater than ?    Here , and the cubic is . But the Maclaurin series of has no term, so the same polynomial is also the fourth order Taylor polynomial: We should therefore take , not : both choices describe the very same approximation, but the remainder is one order smaller than and so gives the sharper estimate.  The derivatives of are and therefore , so we can take .  By the Remainder Theorem with , which gives See .  For comparison, stopping at would have given , a needlessly small interval for exactly the same polynomial.   The function and the cubic . Between the dashed lines the two graphs differ by at most .     f(t) = (t, sin(t))  p(t) = (t, t - t^3\/6)         y=\\sin x    y=x-\\frac{x^3}{6}    -0.863    0.863                 "
},
{
  "id": "rev-ser-7",
  "level": "2",
  "url": "worksheet-assignment-3.html#rev-ser-7",
  "type": "Worksheet Exercise",
  "number": "4.3.2",
  "title": "",
  "body": "  Use the remainder estimation theorem to estimate the maximum error when approximating by on the interval .    From the remainder theorem, we know that   Also, since , we have and hence :   We know that , hence Hence, an estimate for the upper bound of the error is . See .   The function and on the interval , marked by the dashed lines.     f(t) = (t, exp(t))  p(t) = (t, 1 + t + t^2\/2)         y=e^{x}    y=1+x+\\tfrac{x^2}{2}    -\\frac56    \\frac56                 "
},
{
  "id": "rev-ser-8",
  "level": "2",
  "url": "worksheet-assignment-3.html#rev-ser-8",
  "type": "Worksheet Exercise",
  "number": "4.3.3",
  "title": "",
  "body": "  Consider the function .   Find the second order Taylor polynomial centered at 0.    Estimate the maximum error when approximating with the second order Taylor polynomial centered at 0, on the interval .          We compute the derivatives at 0: Hence i.e. .    We have and . Note that is negative, which means is a decreasing function, hence at the value is maximized, i.e., Also and therefore This means that the error in estimating for by is definitely smaller than . See .      The function and . On the interval , marked by the dashed lines, the two graphs are nearly identical.     f(t) = (t, log(1 + 2*t))  p(t) = (t, 2*t - 2*t^2)         y=\\ln(1+2x)    y=2x-2x^2    -0.25    0.25                 "
},
{
  "id": "m1-4",
  "level": "2",
  "url": "worksheet-assignment-3.html#m1-4",
  "type": "Worksheet Exercise",
  "number": "4.3.4",
  "title": "",
  "body": "  Let Find the exact value of .    First we identify . Its general term is , so This is exactly what you get by differentiating the geometric series term by term: So for . Since , the whole interval of integration lies inside the interval of convergence.  Now we integrate. An antiderivative of is , so    "
},
{
  "id": "exer-integral-cos-over-x",
  "level": "2",
  "url": "worksheet-assignment-3.html#exer-integral-cos-over-x",
  "type": "Worksheet Exercise",
  "number": "4.3.5",
  "title": "",
  "body": "  Evaluate as an infinite series. Give the first three nonzero terms.    The integrand has no elementary antiderivative, so expand it as a series first. Starting from , subtracting kills the constant term, so every surviving power of is even and at least . Dividing by therefore leaves an honest power series:   Integrating term by term,    "
},
{
  "id": "exer-series-limit-cos2x",
  "level": "2",
  "url": "worksheet-assignment-3.html#exer-series-limit-cos2x",
  "type": "Worksheet Exercise",
  "number": "4.3.6",
  "title": "",
  "body": "  Use Taylor series to evaluate     The quotient has the indeterminate form . Replace the numerator and the denominator by their Maclaurin series. Putting in place of in , and from ,   Both vanish to exactly second order, so cancel the common factor of  legitimate, since the limit never uses the value at itself: Each remaining series is continuous at with a nonzero value there, so only the two leading coefficients matter.   "
},
{
  "id": "exer-integral-sin-ln",
  "level": "2",
  "url": "worksheet-assignment-3.html#exer-integral-sin-ln",
  "type": "Worksheet Exercise",
  "number": "4.3.7",
  "title": "",
  "body": "  Show that (The integrand is continuous on . As we have , so the integrand tends to ; as we have . So the integrand is bounded and the integral exists. Its antiderivative is not elementary.)    Two facts from Calculus II, both proved by integration by parts For : , and for integration by parts with and gives , since as ; by induction . For : , and for integration by parts with and , so and , gives . The bracket vanishes at because , and at because (by L'Hôpital's rule). By induction, . : for every integer , Either substitute and use , or expand as a series in and integrate term by term with .     Solution 1 (substitution). Let , so and . As runs from to , runs from to . Since , Therefore by .   Solution 2 (directly with series). Substituting into the series , Integrating term by term and using with (so ),    Justification. With , the Remainder Estimation Theorem gives , exactly as in . Replacing by , Integrating over with , , bounds the error after terms by so the partial sums converge to the integral, and the integral equals .   "
},
{
  "id": "worksheet-review-problems-1",
  "level": "1",
  "url": "worksheet-review-problems-1.html",
  "type": "Worksheet",
  "number": "4.4",
  "title": "Review Problems #1",
  "body": " Review Problems #1   These are the leftover problems from the first four topics of the course, collected here for review. They are not assigned, but they are fair game on an exam. Problems marked with a star ( ) are the exception: those are for the interested reader and will not be examined. The topics they cover, with links to the notes:            True or False   For any real number , we have .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    First, Second, Comparing the two results gives .      If and are positive numbers that form 4 consecutive terms in a geometric sequence, find .    Since consecutive ratios in a geometric sequence are equal,   From the first equality,   From the equality of the first and third fractions,       Consider the sequence defined by and . Find a formula for and use it to compute .    We compute the first few terms: We notice that , , and , hence it seems that .  Let us verify by computing using : which confirms that when , then . Hence,       What can we conclude by applying the th term test to the series ?           Evaluate the following sums or show that they diverge.                                  This is a finite geometric sum. Using , which was proved when we first studied geometric sums,     Partial fractions give and setting gives , , while gives , . The sum telescopes:     Partial fractions (or direct observation) give so the sum telescopes:      , so by the th Term Test the series diverges.     where the subtracted terms correspond to , , and of the shifted series.         The government has decided to give a $1,000 tax rebate to each household in order to stimulate the economy. The government statistics say that each household will spend 80% of the rebate in goods and services. The businesses and individuals who benefited from that 80% will then spend 80% of what they received and so on. The result is called the multiplier effect. What is the total effect of the rebate on the economy?    The rounds of spending form a geometric series with and : The successive rounds of spending are shown in .   The multiplier effect. Each round of spending is 80% of the previous one, and the total of all the bars is dollars.                  1000    800    640    512    \\cdots    \\text{round of spending}                   Determine whether the series is convergent or divergent and if it is convergent calculate its sum.                   The series telescopes. The partial sum is Hence the series converges and     We split the series into two geometric series: Since , by the th term test we can conclude that the series diverges.         Determine whether the series converges, and if so find its sum:     Note that since . Indeed, setting and , Therefore, the series diverges by the th Term Test.      Consider the following series. Answer the following questions.    Find the values of for which the series converges.    Find the sum of the series for those values of .          We can write the series as a geometric series: which converges when : i.e. the series converges on the interval .    When , the geometric series with and gives         True or False   A geometric series converges if and only if .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    As a counterexample consider , which clearly diverges even though . The correct condition is .      Consider the series . Does the series converge? If so, what is the result?    We first factor out so that the powers match: Splitting off the term so that the sum starts at ,   The remaining sum is a geometric series with and . Since , it converges and , so       Find the sum of all of the convergent series.                   The factor cycles through as , so only the odd contribute, with alternating signs. Writing , This is a geometric series with and , and , so     By the constant multiple rule, . The remaining series telescopes: since , Hence the sum is .        True or False   If we manage to find the maximum value of for in the interval between and , then we can find the exact error in the Taylor polynomial approximation.  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    The statement is incorrect. While finding the maximum value of allows us to find an upper bound for the error, it does not give the exact error.      For the following functions, give the Taylor series generated by the function at AND give the values of for which the Taylor series converges to the given function.                  Using the Taylor series you found for in part C, find , i.e. the 12th order derivative of at .          The derivatives of at cycle through , so only even powers survive and which converges to for all .    This is the geometric series with and : which converges to exactly when , i.e. for .    We start from , valid for all , and substitute : Multiplying by , which converges to for all .    In the Taylor series , the coefficient of is . From part C, the term with occurs when , i.e. , and its coefficient is . Equating the two,          Given .   Find the 2nd order Maclaurin polynomial for .    Use Taylor's Remainder Theorem to find an upper bound on the magnitude of the error if the 2nd order Maclaurin polynomial is used to approximate for .          We compute the derivatives at : Hence     By Taylor's Remainder Theorem, Here , so . For we have , and the fraction is largest when the denominator is smallest, i.e. at : Therefore, for ,          What function has Maclaurin series ?    Factoring out of every term, and the bracket is exactly the Maclaurin series of . Hence the function is          Use a third Taylor polynomial at to approximate .    Give an upper bound for the error in using this approximation.          Let and . Then Hence and evaluating at (so ),     By Taylor's Remainder Theorem, , where bounds on . Since and is decreasing, the largest value occurs at : Therefore          Use Taylor series to evaluate     Numerator and denominator both tend to , and each vanishes to third order, so l'Hôpital's rule would have to be applied three times. Replacing each by its Maclaurin series is quicker. From and , subtracting removes the leading term of each:   Both series begin with . The limit never sees itself, so we may cancel a factor of from top and bottom: Each of the two remaining series is a power series with a nonzero constant term, so it is continuous at and the limit is just that constant term. Only the leading coefficients matter: the answer is the ratio .    "
},
{
  "id": "rw23-9-b",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rw23-9-b",
  "type": "Worksheet Exercise",
  "number": "4.4.1",
  "title": "True or False.",
  "body": " True or False   For any real number , we have .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    First, Second, Comparing the two results gives .   "
},
{
  "id": "rev-ser-1",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rev-ser-1",
  "type": "Worksheet Exercise",
  "number": "4.4.2",
  "title": "",
  "body": "  If and are positive numbers that form 4 consecutive terms in a geometric sequence, find .    Since consecutive ratios in a geometric sequence are equal,   From the first equality,   From the equality of the first and third fractions,    "
},
{
  "id": "rev-ser-9",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rev-ser-9",
  "type": "Worksheet Exercise",
  "number": "4.4.3",
  "title": "",
  "body": "  Consider the sequence defined by and . Find a formula for and use it to compute .    We compute the first few terms: We notice that , , and , hence it seems that .  Let us verify by computing using : which confirms that when , then . Hence,    "
},
{
  "id": "rev-ser-4",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rev-ser-4",
  "type": "Worksheet Exercise",
  "number": "4.4.4",
  "title": "",
  "body": "  What can we conclude by applying the th term test to the series ?        "
},
{
  "id": "rev-ser-5",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rev-ser-5",
  "type": "Worksheet Exercise",
  "number": "4.4.5",
  "title": "",
  "body": "  Evaluate the following sums or show that they diverge.                                  This is a finite geometric sum. Using , which was proved when we first studied geometric sums,     Partial fractions give and setting gives , , while gives , . The sum telescopes:     Partial fractions (or direct observation) give so the sum telescopes:      , so by the th Term Test the series diverges.     where the subtracted terms correspond to , , and of the shifted series.      "
},
{
  "id": "rev-ser-3",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rev-ser-3",
  "type": "Worksheet Exercise",
  "number": "4.4.6",
  "title": "",
  "body": "  The government has decided to give a $1,000 tax rebate to each household in order to stimulate the economy. The government statistics say that each household will spend 80% of the rebate in goods and services. The businesses and individuals who benefited from that 80% will then spend 80% of what they received and so on. The result is called the multiplier effect. What is the total effect of the rebate on the economy?    The rounds of spending form a geometric series with and : The successive rounds of spending are shown in .   The multiplier effect. Each round of spending is 80% of the previous one, and the total of all the bars is dollars.                  1000    800    640    512    \\cdots    \\text{round of spending}                "
},
{
  "id": "rs19-1",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rs19-1",
  "type": "Worksheet Exercise",
  "number": "4.4.7",
  "title": "",
  "body": "  Determine whether the series is convergent or divergent and if it is convergent calculate its sum.                   The series telescopes. The partial sum is Hence the series converges and     We split the series into two geometric series: Since , by the th term test we can conclude that the series diverges.      "
},
{
  "id": "rw21-2",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rw21-2",
  "type": "Worksheet Exercise",
  "number": "4.4.8",
  "title": "",
  "body": "  Determine whether the series converges, and if so find its sum:     Note that since . Indeed, setting and , Therefore, the series diverges by the th Term Test.   "
},
{
  "id": "rw21-3",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rw21-3",
  "type": "Worksheet Exercise",
  "number": "4.4.9",
  "title": "",
  "body": "  Consider the following series. Answer the following questions.    Find the values of for which the series converges.    Find the sum of the series for those values of .          We can write the series as a geometric series: which converges when : i.e. the series converges on the interval .    When , the geometric series with and gives       "
},
{
  "id": "rf-8-b",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rf-8-b",
  "type": "Worksheet Exercise",
  "number": "4.4.10",
  "title": "True or False.",
  "body": " True or False   A geometric series converges if and only if .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    As a counterexample consider , which clearly diverges even though . The correct condition is .   "
},
{
  "id": "rw22-2",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rw22-2",
  "type": "Worksheet Exercise",
  "number": "4.4.11",
  "title": "",
  "body": "  Consider the series . Does the series converge? If so, what is the result?    We first factor out so that the powers match: Splitting off the term so that the sum starts at ,   The remaining sum is a geometric series with and . Since , it converges and , so    "
},
{
  "id": "pp-4",
  "level": "2",
  "url": "worksheet-review-problems-1.html#pp-4",
  "type": "Worksheet Exercise",
  "number": "4.4.12",
  "title": "",
  "body": "  Find the sum of all of the convergent series.                   The factor cycles through as , so only the odd contribute, with alternating signs. Writing , This is a geometric series with and , and , so     By the constant multiple rule, . The remaining series telescopes: since , Hence the sum is .      "
},
{
  "id": "ex-tf-1",
  "level": "2",
  "url": "worksheet-review-problems-1.html#ex-tf-1",
  "type": "Worksheet Exercise",
  "number": "4.4.13",
  "title": "True or False.",
  "body": " True or False   If we manage to find the maximum value of for in the interval between and , then we can find the exact error in the Taylor polynomial approximation.  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    The statement is incorrect. While finding the maximum value of allows us to find an upper bound for the error, it does not give the exact error.   "
},
{
  "id": "rw17-1",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rw17-1",
  "type": "Worksheet Exercise",
  "number": "4.4.14",
  "title": "",
  "body": "  For the following functions, give the Taylor series generated by the function at AND give the values of for which the Taylor series converges to the given function.                  Using the Taylor series you found for in part C, find , i.e. the 12th order derivative of at .          The derivatives of at cycle through , so only even powers survive and which converges to for all .    This is the geometric series with and : which converges to exactly when , i.e. for .    We start from , valid for all , and substitute : Multiplying by , which converges to for all .    In the Taylor series , the coefficient of is . From part C, the term with occurs when , i.e. , and its coefficient is . Equating the two,       "
},
{
  "id": "rw17-3",
  "level": "2",
  "url": "worksheet-review-problems-1.html#rw17-3",
  "type": "Worksheet Exercise",
  "number": "4.4.15",
  "title": "",
  "body": "  Given .   Find the 2nd order Maclaurin polynomial for .    Use Taylor's Remainder Theorem to find an upper bound on the magnitude of the error if the 2nd order Maclaurin polynomial is used to approximate for .          We compute the derivatives at : Hence     By Taylor's Remainder Theorem, Here , so . For we have , and the fraction is largest when the denominator is smallest, i.e. at : Therefore, for ,       "
},
{
  "id": "pp-5",
  "level": "2",
  "url": "worksheet-review-problems-1.html#pp-5",
  "type": "Worksheet Exercise",
  "number": "4.4.16",
  "title": "",
  "body": "  What function has Maclaurin series ?    Factoring out of every term, and the bracket is exactly the Maclaurin series of . Hence the function is    "
},
{
  "id": "pp-6",
  "level": "2",
  "url": "worksheet-review-problems-1.html#pp-6",
  "type": "Worksheet Exercise",
  "number": "4.4.17",
  "title": "",
  "body": "     Use a third Taylor polynomial at to approximate .    Give an upper bound for the error in using this approximation.          Let and . Then Hence and evaluating at (so ),     By Taylor's Remainder Theorem, , where bounds on . Since and is decreasing, the largest value occurs at : Therefore       "
},
{
  "id": "exer-series-limit-arctan",
  "level": "2",
  "url": "worksheet-review-problems-1.html#exer-series-limit-arctan",
  "type": "Worksheet Exercise",
  "number": "4.4.18",
  "title": "",
  "body": "  Use Taylor series to evaluate     Numerator and denominator both tend to , and each vanishes to third order, so l'Hôpital's rule would have to be applied three times. Replacing each by its Maclaurin series is quicker. From and , subtracting removes the leading term of each:   Both series begin with . The limit never sees itself, so we may cancel a factor of from top and bottom: Each of the two remaining series is a power series with a nonzero constant term, so it is continuous at and the limit is just that constant term. Only the leading coefficients matter: the answer is the ratio .   "
},
{
  "id": "worksheet-sample-past-exam-1",
  "level": "1",
  "url": "worksheet-sample-past-exam-1.html",
  "type": "Worksheet",
  "number": "4.5",
  "title": "Sample Past Exam 1",
  "body": " Sample Past Exam 1   A sample past exam, with worked solutions. It was a 65-minute, closed-book exam worth 20 points: no aids of their own (formula sheets, notes, phones, tablets, smart watches or similar) were permitted, and students were asked to write their work in a neat and organized format and to fully justify every step. The formula sheet at the end of this page will be the last page of the exam booklet on the day of the exam. Try the exam under the same conditions before you look at the solutions. The topics it covers, with links to the notes:             4 points   Answer parts (a) and (b) for the following infinite series:      Does the th-term test apply? Remember to fully justify your answer. (2 points)     so the th-term test does not apply: a limit of is inconclusive.      Evaluate the series or show that it diverges. (2 points)    The partial sums telescope: Hence        5 points   Consider the Taylor series for the function about .     Find , i.e. the Taylor polynomial of order 5. (2 points)     Therefore       Express the Taylor series for the function about in sigma notation. (1 point)           Assuming that , find an upper bound on the error in estimating using . (2 points)   Note: an answer in the form suffices.    Collect the ingredients of the Remainder Estimation Theorem:    , so .     , since for (the coefficient of is ).     .     , so for ,      Therefore which is the upper bound on the error.       4 points   Consider the series      For which values of does the series converge? (2 points)     is a geometric series with and . It converges when       Evaluate the series for the values that you found in part (a). (2 points)    Since we get        3 points   Compute the result of      The last sum is a geometric series with and , which converges to .      4 points   Find the result of the following series or show that the series diverges.      (2 points)    Add and subtract : The bracket is the Maclaurin series with . Hence the series equals        (2 points)     and is a geometric series with . Hence it diverges, since .       Formula Sheet   Taylor's Formula. If has derivatives of all orders in an open interval containing , then for each positive integer and for each in , where and is between and .   The Remainder Estimation Theorem. If there is a positive constant such that for all between and , inclusive, then the remainder term in Taylor's Theorem satisfies the inequality If this condition holds for every and the other conditions of Taylor's Theorem are satisfied by , then the series converges to .   Maclaurin series.     "
},
{
  "id": "spe1-q1",
  "level": "2",
  "url": "worksheet-sample-past-exam-1.html#spe1-q1",
  "type": "Worksheet Exercise",
  "number": "4.5.1",
  "title": "4 points.",
  "body": " 4 points   Answer parts (a) and (b) for the following infinite series:      Does the th-term test apply? Remember to fully justify your answer. (2 points)     so the th-term test does not apply: a limit of is inconclusive.      Evaluate the series or show that it diverges. (2 points)    The partial sums telescope: Hence     "
},
{
  "id": "spe1-q2",
  "level": "2",
  "url": "worksheet-sample-past-exam-1.html#spe1-q2",
  "type": "Worksheet Exercise",
  "number": "4.5.2",
  "title": "5 points.",
  "body": " 5 points   Consider the Taylor series for the function about .     Find , i.e. the Taylor polynomial of order 5. (2 points)     Therefore       Express the Taylor series for the function about in sigma notation. (1 point)           Assuming that , find an upper bound on the error in estimating using . (2 points)   Note: an answer in the form suffices.    Collect the ingredients of the Remainder Estimation Theorem:    , so .     , since for (the coefficient of is ).     .     , so for ,      Therefore which is the upper bound on the error.    "
},
{
  "id": "spe1-q3",
  "level": "2",
  "url": "worksheet-sample-past-exam-1.html#spe1-q3",
  "type": "Worksheet Exercise",
  "number": "4.5.3",
  "title": "4 points.",
  "body": " 4 points   Consider the series      For which values of does the series converge? (2 points)     is a geometric series with and . It converges when       Evaluate the series for the values that you found in part (a). (2 points)    Since we get     "
},
{
  "id": "spe1-q4",
  "level": "2",
  "url": "worksheet-sample-past-exam-1.html#spe1-q4",
  "type": "Worksheet Exercise",
  "number": "4.5.4",
  "title": "3 points.",
  "body": " 3 points   Compute the result of      The last sum is a geometric series with and , which converges to .   "
},
{
  "id": "spe1-q5",
  "level": "2",
  "url": "worksheet-sample-past-exam-1.html#spe1-q5",
  "type": "Worksheet Exercise",
  "number": "4.5.5",
  "title": "4 points.",
  "body": " 4 points   Find the result of the following series or show that the series diverges.      (2 points)    Add and subtract : The bracket is the Maclaurin series with . Hence the series equals        (2 points)     and is a geometric series with . Hence it diverges, since .    "
},
{
  "id": "worksheet-exam-1",
  "level": "1",
  "url": "worksheet-exam-1.html",
  "type": "Worksheet",
  "number": "4.6",
  "title": "Exam 1",
  "body": " Exam 1   Exam 1 of this quarter (Fall 2026), with brief solutions. These were the instructions on the exam:    You have 65 minutes . The exam has 5 problems and is worth 20 points .  This is a closed-book exam. No aids of your own are permitted: no formula sheets, notes, phones, tablets, smart watches, or similar. Calculators of any kind are not permitted.  Write your work in a neat and organized format and fully justify every step . An answer without supporting work may receive little or no credit.  Give exact answers. Decimal approximations are not required.  If you need more room, use the blank page at the end of the booklet and say so on the page of the problem.  The last page of the booklet is a formula sheet. It is reproduced at the end of this page.  Any violation of academic integrity, such as the use of AI, calculators, etc., may result in receiving an F and being reported to the Office of Student Life.    The topics it covers, with links to the notes:             4 points   The centerline of an arch is modeled by the curve where and are measured in meters. The ground is the line , and the arch is the part of the curve with .   The arch above the ground .     f(x) = 50 - 30*cosh(x\/30)     \\text{ground}                Find the height of the arch, that is, its maximum height above the ground. Justify why this is the maximum. (1 point)     , with equality only at , so , with equality only at . Height: 20 m .      Find the width of the arch at ground level. (2 points)     , where . So , or , and . Width:  m ( m).      Find the slope of the arch where it meets the ground on the right. (1 point)     ; at the right base ,        4 points   For each series below, determine whether it converges or diverges. If it converges, find its sum. Remember to fully justify your answers.      (2 points)     , so the series diverges by the th Term Test.       (2 points)     , and for , (geometric, , ). By the difference and constant multiple rules, the series converges to (The th Term Test is inconclusive here: the terms tend to .)       3 points   A patient takes a 60 mg dose of a medication at the same time every day. By the time the next dose is taken, the body has eliminated three quarters of the medication, so exactly of the amount that was in the body just after a dose is still there when the next dose is taken. Let be the amount of medication (in mg) in the body just after the th dose, so that .     Find a formula for that does not contain a sum (no and no ). (2 points)     (the new dose plus the quarter left), so , the th partial sum of the geometric series with , :       What happens to in the long run? (1 point)     , so mg: the amount just after a dose levels off at (approaches, but never exceeds) 80 mg, the sum .       5 points   Let .     Find the Taylor polynomial of order 3 generated by at . (2 points)     , , , so , , , , and       For each , let be the Taylor polynomial of order generated by at . Use the Remainder Estimation Theorem to find the smallest for which the theorem guarantees that the absolute value of the error in approximating by is no greater than for every in . (3 points)     ( ). For , is between and , so and (largest at ). With , the Remainder Estimation Theorem gives which is if and only if : gives (too small), gives . Smallest: . (Indeed fails: .)       4 points    Use Taylor series to evaluate (2 points)     so, dividing by , the limit is        True or False? If and both diverge, then diverges. Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false. (2 points)     False. Let , . Both series diverge by the th Term Test ( , ; partial sums and ), but , so converges. (The Sum Rule holds only when both series converge.)       Formula Sheet   Geometric series. The sum of the first terms is The geometric series converges to if , i.e. and diverges if .   Taylor's Formula. If has derivatives of all orders in an open interval containing , then for each positive integer and for each in , where and is between and .   The Remainder Estimation Theorem. If there is a positive constant such that for all between and , inclusive, then the remainder term in Taylor's Theorem satisfies the inequality If this condition holds for every and the other conditions of Taylor's Theorem are satisfied by , then the series converges to .   Maclaurin series.       Answers at a glance    (a) m; (b) m; (c) .  (a) diverges (the terms tend to ); (b) converges to .  (a) mg; (b) mg.  (a) ; (b) .  (a) ; (b) False (for example, and ).     "
},
{
  "id": "ex1-p1",
  "level": "2",
  "url": "worksheet-exam-1.html#ex1-p1",
  "type": "Worksheet Exercise",
  "number": "4.6.1",
  "title": "4 points.",
  "body": " 4 points   The centerline of an arch is modeled by the curve where and are measured in meters. The ground is the line , and the arch is the part of the curve with .   The arch above the ground .     f(x) = 50 - 30*cosh(x\/30)     \\text{ground}                Find the height of the arch, that is, its maximum height above the ground. Justify why this is the maximum. (1 point)     , with equality only at , so , with equality only at . Height: 20 m .      Find the width of the arch at ground level. (2 points)     , where . So , or , and . Width:  m ( m).      Find the slope of the arch where it meets the ground on the right. (1 point)     ; at the right base ,     "
},
{
  "id": "ex1-p2",
  "level": "2",
  "url": "worksheet-exam-1.html#ex1-p2",
  "type": "Worksheet Exercise",
  "number": "4.6.2",
  "title": "4 points.",
  "body": " 4 points   For each series below, determine whether it converges or diverges. If it converges, find its sum. Remember to fully justify your answers.      (2 points)     , so the series diverges by the th Term Test.       (2 points)     , and for , (geometric, , ). By the difference and constant multiple rules, the series converges to (The th Term Test is inconclusive here: the terms tend to .)    "
},
{
  "id": "ex1-p3",
  "level": "2",
  "url": "worksheet-exam-1.html#ex1-p3",
  "type": "Worksheet Exercise",
  "number": "4.6.3",
  "title": "3 points.",
  "body": " 3 points   A patient takes a 60 mg dose of a medication at the same time every day. By the time the next dose is taken, the body has eliminated three quarters of the medication, so exactly of the amount that was in the body just after a dose is still there when the next dose is taken. Let be the amount of medication (in mg) in the body just after the th dose, so that .     Find a formula for that does not contain a sum (no and no ). (2 points)     (the new dose plus the quarter left), so , the th partial sum of the geometric series with , :       What happens to in the long run? (1 point)     , so mg: the amount just after a dose levels off at (approaches, but never exceeds) 80 mg, the sum .    "
},
{
  "id": "ex1-p4",
  "level": "2",
  "url": "worksheet-exam-1.html#ex1-p4",
  "type": "Worksheet Exercise",
  "number": "4.6.4",
  "title": "5 points.",
  "body": " 5 points   Let .     Find the Taylor polynomial of order 3 generated by at . (2 points)     , , , so , , , , and       For each , let be the Taylor polynomial of order generated by at . Use the Remainder Estimation Theorem to find the smallest for which the theorem guarantees that the absolute value of the error in approximating by is no greater than for every in . (3 points)     ( ). For , is between and , so and (largest at ). With , the Remainder Estimation Theorem gives which is if and only if : gives (too small), gives . Smallest: . (Indeed fails: .)    "
},
{
  "id": "ex1-p5",
  "level": "2",
  "url": "worksheet-exam-1.html#ex1-p5",
  "type": "Worksheet Exercise",
  "number": "4.6.5",
  "title": "4 points.",
  "body": " 4 points    Use Taylor series to evaluate (2 points)     so, dividing by , the limit is        True or False? If and both diverge, then diverges. Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false. (2 points)     False. Let , . Both series diverge by the th Term Test ( , ; partial sums and ), but , so converges. (The Sum Rule holds only when both series converge.)    "
},
{
  "id": "worksheet-assignment-4",
  "level": "1",
  "url": "worksheet-assignment-4.html",
  "type": "Worksheet",
  "number": "4.7",
  "title": "Assignment 4",
  "body": " Assignment 4   These problems set up coordinates in space, describe regions and solids by equations and inequalities, and do algebra with vectors. If you would like to review the material first, see and .        Find an equation of the set of all points equidistant from the points and .    Describe the geometrical shape corresponding to the set.          We want to find all points that have the same distance from and . Squaring both distances (which is equivalent, since distances are non-negative) gives Expanding both sides, and collecting terms,     This is the equation of a plane. Its normal vector is , which is parallel to . Moreover, the midpoint of , satisfies the equation, since . Hence the set is the plane that passes through the midpoint of and is orthogonal to , i.e. the perpendicular bisector plane of the segment . See .      The set of points equidistant from and is the plane through the midpoint of perpendicular to .    Two points A and B are joined by a segment. A shaded rectangle representing a plane cuts the segment at right angles at its midpoint C, with a small right angle marker at C. The stretch of the segment that passes behind the plane is drawn dashed.          Describe the following regions and graphs.    ,      ,      ,      ,        The key is to notice whether the first condition is an inequality (a solid region) or an equation (a surface), and then what the second condition does to it.   The solid ball of radius centered at the origin, restricted to : the upper half of the solid ball , including the flat disk in the -plane.    Setting in the solid ball gives : the solid disk of radius centered at the origin, lying in the -plane.    The sphere of radius restricted to : the upper hemisphere (a surface only), together with the circle where it meets the -plane.    Setting on the sphere gives : the circle of radius centered at the origin in the -plane.         Consider the point .   What is its distance to the -plane?    What is its distance to the -axis?        (a) The -plane is the plane . The closest point of that plane to is obtained by simply setting the -coordinate to zero, giving . Hence the distance is In general the distance from to the -plane is .   (b) The -axis consists of the points . The closest such point to is the one with the same -coordinate, namely , so the distance is In general the distance from to the -axis is : we drop the coordinate along the axis and keep the other two. See .   The point , its distance to the -plane (measured horizontally, parallel to the -axis), and its distance to the -axis (measured perpendicular to that axis).    A three dimensional coordinate system with the point P at three, seven, negative five. A segment runs from P horizontally to the point zero, seven, negative five in the y z plane, and a second segment runs from P to the point zero, seven, zero on the y axis.         A Solid Bounded by a Hemisphere, a Plane, and a Cylinder   Consider the solid region bounded below by the hemisphere , above by the plane , and on the outside by the cylinder . Describe this solid.    Squaring gives , and the minus sign keeps only the points with : the surface is the lower half of the unit sphere centered at the origin, with its lowest point at . It reaches exactly on the circle , the same circle where the cylinder meets the -plane.  The solid consists of the points inside the cylinder that lie above the hemisphere and below the plane: At the center , this range for is the full interval . At the rim , it shrinks to . The part with is the solid cylinder , , and the part with is the solid lower half of the unit ball, , . The solid is therefore a can of radius and height with a hemispherical bowl attached beneath it along the unit disk in the -plane, like the rounded end of a test tube, shown in .   The solid bounded below by the hemisphere , above by the plane , and on the outside by the cylinder : a solid cylinder of height sitting on a solid half-ball, the two joined along the unit disk in the -plane.    A short solid cylinder whose bottom is closed off by a rounded bowl. The flat top of the cylinder lies in the plane z equals 1 and its side is the cylinder x squared plus y squared equals 1. Below the xy-plane the solid continues as the lower half of the unit sphere, reaching down to the point zero, zero, negative one, like the rounded end of a test tube.          Write each combination of vectors as a single vector. See .                    The quadrilateral with vertices , , , and , with its diagonals.                 P    Q    R    S                     By the triangle law, placing at the tip of ,     Since ,     Chaining the three vectors tip to tail,          Find a vector of length 3 pointing in the opposite direction from the vector .    The given vector has length , so the unit vector in its direction is . Multiplying by reverses the direction and gives length :       Let be the vector that goes from the point to the point . Find a vector of length that points in the same direction as .    The vector from to is obtained by subtracting the tail from the head:   Its length is   The unit vector in the direction of is therefore Scaling by gives a vector of length pointing the same way:      A parallelogram in space   Consider the four points    Show that is a parallelogram.    Find the point at which the two diagonals of meet.    Find the perimeter of .          A quadrilateral is a parallelogram exactly when one pair of opposite sides is given by the same vector, since equal vectors have both the same direction and the same length. Along the sides and , Since , these two sides are parallel and have equal length, so is a parallelogram. The other pair of sides matches as well: See .    The diagonals of a parallelogram bisect each other, so is the midpoint of . Using position vectors and , Travelling along the other diagonal instead, with , the same point, which confirms both the answer and part A. Hence .    Opposite sides have equal length, so the perimeter is , where The perimeter is therefore . Since , this parallelogram is not a rhombus.      The parallelogram , with drawn in blue and in magenta. The diagonals and cross at their common midpoint .    Three coordinate axes labelled x, y and z. Four points A, B, C and D in space are joined into a slanted parallelogram. The two sides from A to B and from D to C are drawn as blue arrows of the same length and direction, and the two sides from A to D and from B to C are drawn as magenta arrows, also equal to each other. The two diagonals, from A to C and from B to D, are dashed grey segments that cross at a marked red point M in the middle of the parallelogram.        "
},
{
  "id": "rw22-3",
  "level": "2",
  "url": "worksheet-assignment-4.html#rw22-3",
  "type": "Worksheet Exercise",
  "number": "4.7.1",
  "title": "",
  "body": "     Find an equation of the set of all points equidistant from the points and .    Describe the geometrical shape corresponding to the set.          We want to find all points that have the same distance from and . Squaring both distances (which is equivalent, since distances are non-negative) gives Expanding both sides, and collecting terms,     This is the equation of a plane. Its normal vector is , which is parallel to . Moreover, the midpoint of , satisfies the equation, since . Hence the set is the plane that passes through the midpoint of and is orthogonal to , i.e. the perpendicular bisector plane of the segment . See .      The set of points equidistant from and is the plane through the midpoint of perpendicular to .    Two points A and B are joined by a segment. A shaded rectangle representing a plane cuts the segment at right angles at its midpoint C, with a small right angle marker at C. The stretch of the segment that passes behind the plane is drawn dashed.       "
},
{
  "id": "pp-24",
  "level": "2",
  "url": "worksheet-assignment-4.html#pp-24",
  "type": "Worksheet Exercise",
  "number": "4.7.2",
  "title": "",
  "body": "  Describe the following regions and graphs.    ,      ,      ,      ,        The key is to notice whether the first condition is an inequality (a solid region) or an equation (a surface), and then what the second condition does to it.   The solid ball of radius centered at the origin, restricted to : the upper half of the solid ball , including the flat disk in the -plane.    Setting in the solid ball gives : the solid disk of radius centered at the origin, lying in the -plane.    The sphere of radius restricted to : the upper hemisphere (a surface only), together with the circle where it meets the -plane.    Setting on the sphere gives : the circle of radius centered at the origin in the -plane.      "
},
{
  "id": "m1-3",
  "level": "2",
  "url": "worksheet-assignment-4.html#m1-3",
  "type": "Worksheet Exercise",
  "number": "4.7.3",
  "title": "",
  "body": "  Consider the point .   What is its distance to the -plane?    What is its distance to the -axis?        (a) The -plane is the plane . The closest point of that plane to is obtained by simply setting the -coordinate to zero, giving . Hence the distance is In general the distance from to the -plane is .   (b) The -axis consists of the points . The closest such point to is the one with the same -coordinate, namely , so the distance is In general the distance from to the -axis is : we drop the coordinate along the axis and keep the other two. See .   The point , its distance to the -plane (measured horizontally, parallel to the -axis), and its distance to the -axis (measured perpendicular to that axis).    A three dimensional coordinate system with the point P at three, seven, negative five. A segment runs from P horizontally to the point zero, seven, negative five in the y z plane, and a second segment runs from P to the point zero, seven, zero on the y axis.       "
},
{
  "id": "ex-3d-nonconvex-solid",
  "level": "2",
  "url": "worksheet-assignment-4.html#ex-3d-nonconvex-solid",
  "type": "Worksheet Exercise",
  "number": "4.7.4",
  "title": "A Solid Bounded by a Hemisphere, a Plane, and a Cylinder.",
  "body": " A Solid Bounded by a Hemisphere, a Plane, and a Cylinder   Consider the solid region bounded below by the hemisphere , above by the plane , and on the outside by the cylinder . Describe this solid.    Squaring gives , and the minus sign keeps only the points with : the surface is the lower half of the unit sphere centered at the origin, with its lowest point at . It reaches exactly on the circle , the same circle where the cylinder meets the -plane.  The solid consists of the points inside the cylinder that lie above the hemisphere and below the plane: At the center , this range for is the full interval . At the rim , it shrinks to . The part with is the solid cylinder , , and the part with is the solid lower half of the unit ball, , . The solid is therefore a can of radius and height with a hemispherical bowl attached beneath it along the unit disk in the -plane, like the rounded end of a test tube, shown in .   The solid bounded below by the hemisphere , above by the plane , and on the outside by the cylinder : a solid cylinder of height sitting on a solid half-ball, the two joined along the unit disk in the -plane.    A short solid cylinder whose bottom is closed off by a rounded bowl. The flat top of the cylinder lies in the plane z equals 1 and its side is the cylinder x squared plus y squared equals 1. Below the xy-plane the solid continues as the lower half of the unit sphere, reaching down to the point zero, zero, negative one, like the rounded end of a test tube.       "
},
{
  "id": "rs19-2",
  "level": "2",
  "url": "worksheet-assignment-4.html#rs19-2",
  "type": "Worksheet Exercise",
  "number": "4.7.5",
  "title": "",
  "body": "  Write each combination of vectors as a single vector. See .                    The quadrilateral with vertices , , , and , with its diagonals.                 P    Q    R    S                     By the triangle law, placing at the tip of ,     Since ,     Chaining the three vectors tip to tail,       "
},
{
  "id": "pp-9",
  "level": "2",
  "url": "worksheet-assignment-4.html#pp-9",
  "type": "Worksheet Exercise",
  "number": "4.7.6",
  "title": "",
  "body": "  Find a vector of length 3 pointing in the opposite direction from the vector .    The given vector has length , so the unit vector in its direction is . Multiplying by reverses the direction and gives length :    "
},
{
  "id": "m1-2",
  "level": "2",
  "url": "worksheet-assignment-4.html#m1-2",
  "type": "Worksheet Exercise",
  "number": "4.7.7",
  "title": "",
  "body": "  Let be the vector that goes from the point to the point . Find a vector of length that points in the same direction as .    The vector from to is obtained by subtracting the tail from the head:   Its length is   The unit vector in the direction of is therefore Scaling by gives a vector of length pointing the same way:    "
},
{
  "id": "vec-parallelogram-space",
  "level": "2",
  "url": "worksheet-assignment-4.html#vec-parallelogram-space",
  "type": "Worksheet Exercise",
  "number": "4.7.8",
  "title": "A parallelogram in space.",
  "body": " A parallelogram in space   Consider the four points    Show that is a parallelogram.    Find the point at which the two diagonals of meet.    Find the perimeter of .          A quadrilateral is a parallelogram exactly when one pair of opposite sides is given by the same vector, since equal vectors have both the same direction and the same length. Along the sides and , Since , these two sides are parallel and have equal length, so is a parallelogram. The other pair of sides matches as well: See .    The diagonals of a parallelogram bisect each other, so is the midpoint of . Using position vectors and , Travelling along the other diagonal instead, with , the same point, which confirms both the answer and part A. Hence .    Opposite sides have equal length, so the perimeter is , where The perimeter is therefore . Since , this parallelogram is not a rhombus.      The parallelogram , with drawn in blue and in magenta. The diagonals and cross at their common midpoint .    Three coordinate axes labelled x, y and z. Four points A, B, C and D in space are joined into a slanted parallelogram. The two sides from A to B and from D to C are drawn as blue arrows of the same length and direction, and the two sides from A to D and from B to C are drawn as magenta arrows, also equal to each other. The two diagonals, from A to C and from B to D, are dashed grey segments that cross at a marked red point M in the middle of the parallelogram.       "
},
{
  "id": "worksheet-assignment-5",
  "level": "1",
  "url": "worksheet-assignment-5.html",
  "type": "Worksheet",
  "number": "4.8",
  "title": "Assignment 5",
  "body": " Assignment 5   These problems use the dot product to measure angles and to split a vector into a piece along a given direction and a piece orthogonal to it, use the cross product to build normal vectors, areas and orthogonal directions, and parametrize plane curves and curves of intersection in space. If you would like to review the material first, see , and .     Consider the two vectors and . Write as the sum of a vector parallel to and a vector orthogonal to .       Determine whether the following pairs of vectors are orthogonal, parallel, or neither.    and      and      and , where , , and are non-zero real numbers.          A 100-meter dash is run on a track in the direction of the vector . The wind velocity is km\/hr. The rules say that a legal wind speed measured in the direction of the dash must not exceed 5 km\/hr.   Will the race results be disqualified due to an illegal wind? Justify your answer.    Find the velocity vector of the wind in the direction of the dash.         True or False   If and are two non-zero vectors in , then .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    Counterexample: take and . Then and .      Let be the vector .   Find a non-zero vector orthogonal to .    Find a vector orthogonal to both and .          Suppose , and . Find    ;     .          Find the Cartesian equation for the curve represented by the following parametric equations, then graph it:        Provide a parametrized form of the curve given by Assume that the curve is traced counter-clockwise as the parameter increases.          Parametrize the intersection of and the plane .    Which axis is perpendicular to the plane ?          Consider the curve .   Sketch the curve and label its important points.    Parametrize the entire curve using one parametrization.        "
},
{
  "id": "rs19-4",
  "level": "2",
  "url": "worksheet-assignment-5.html#rs19-4",
  "type": "Worksheet Exercise",
  "number": "4.8.1",
  "title": "",
  "body": "  Consider the two vectors and . Write as the sum of a vector parallel to and a vector orthogonal to .    "
},
{
  "id": "rw22-4",
  "level": "2",
  "url": "worksheet-assignment-5.html#rw22-4",
  "type": "Worksheet Exercise",
  "number": "4.8.2",
  "title": "",
  "body": "  Determine whether the following pairs of vectors are orthogonal, parallel, or neither.    and      and      and , where , , and are non-zero real numbers.       "
},
{
  "id": "rw17-4",
  "level": "2",
  "url": "worksheet-assignment-5.html#rw17-4",
  "type": "Worksheet Exercise",
  "number": "4.8.3",
  "title": "",
  "body": "  A 100-meter dash is run on a track in the direction of the vector . The wind velocity is km\/hr. The rules say that a legal wind speed measured in the direction of the dash must not exceed 5 km\/hr.   Will the race results be disqualified due to an illegal wind? Justify your answer.    Find the velocity vector of the wind in the direction of the dash.       "
},
{
  "id": "rw23-9-a",
  "level": "2",
  "url": "worksheet-assignment-5.html#rw23-9-a",
  "type": "Worksheet Exercise",
  "number": "4.8.4",
  "title": "True or False.",
  "body": " True or False   If and are two non-zero vectors in , then .  Justify your answer fully: give a proof if the statement is true, or a counterexample if it is false.    Counterexample: take and . Then and .   "
},
{
  "id": "pp-8",
  "level": "2",
  "url": "worksheet-assignment-5.html#pp-8",
  "type": "Worksheet Exercise",
  "number": "4.8.5",
  "title": "",
  "body": "  Let be the vector .   Find a non-zero vector orthogonal to .    Find a vector orthogonal to both and .       "
},
{
  "id": "m2b-4",
  "level": "2",
  "url": "worksheet-assignment-5.html#m2b-4",
  "type": "Worksheet Exercise",
  "number": "4.8.6",
  "title": "",
  "body": "  Suppose , and . Find    ;     .       "
},
{
  "id": "rf-2",
  "level": "2",
  "url": "worksheet-assignment-5.html#rf-2",
  "type": "Worksheet Exercise",
  "number": "4.8.7",
  "title": "",
  "body": "  Find the Cartesian equation for the curve represented by the following parametric equations, then graph it:     "
},
{
  "id": "rw23-8",
  "level": "2",
  "url": "worksheet-assignment-5.html#rw23-8",
  "type": "Worksheet Exercise",
  "number": "4.8.8",
  "title": "",
  "body": "  Provide a parametrized form of the curve given by Assume that the curve is traced counter-clockwise as the parameter increases.    "
},
{
  "id": "pp-15",
  "level": "2",
  "url": "worksheet-assignment-5.html#pp-15",
  "type": "Worksheet Exercise",
  "number": "4.8.9",
  "title": "",
  "body": "     Parametrize the intersection of and the plane .    Which axis is perpendicular to the plane ?       "
},
{
  "id": "m2a-2",
  "level": "2",
  "url": "worksheet-assignment-5.html#m2a-2",
  "type": "Worksheet Exercise",
  "number": "4.8.10",
  "title": "",
  "body": "  Consider the curve .   Sketch the curve and label its important points.    Parametrize the entire curve using one parametrization.       "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
