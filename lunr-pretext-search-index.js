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
  "body": " More Examples   The Maclaurin series of   Consider the function .   Find the Taylor series generated by at . Note that this is the same as the Maclaurin series generated by .    Calculate the first four Taylor polynomials .    Plot the original function and the Taylor polynomials obtained in part B to confirm that the higher order polynomials provide a better approximation.      A. Differentiate repeatedly, evaluate at , find the pattern, then use .     Blank box with rows labelled derivatives, at x equals zero, pattern, and series, for finding the Maclaurin series of sine.     B. Keep the first four non-zero polynomials.     Blank box with rows labelled p sub 1, p sub 3, p sub 5, and p sub 7, for the first four non-zero Taylor polynomials of sine.     C. Check your polynomials against .     The function together with the Taylor polynomials at , where , , , and .     f(t) = (t, sin(t))  p1(t) = (t, t)  p3(t) = (t, t - t^3\/6)  p5(t) = (t, t - t^3\/6 + t^5\/120)  p7(t) = (t, t - t^3\/6 + t^5\/120 - t^7\/5040)          f(x)=\\sin x    p_1(x)    p_3(x)    p_5(x)    p_7(x)                   Consider the function .   Compute the Maclaurin series generated by . Express the result in sigma notation.    Find the interval of convergence for this series.        Blank box divided into two rows labelled A and B, for the Maclaurin series and its interval of convergence.      Write as a geometric series first.      Compute the Taylor series of at .     Blank workspace for a handwritten solution.      Either differentiate repeatedly at , or write in terms of and reduce to a geometric series.    "
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
  "body": " Applications of Taylor Series and Remainder Theorem   Physicists often use Taylor series to approximate functions in order to simplify calculations. The first example is the kinetic energy of an object in relativistic mechanics. The second example is the approximation of the period of a pendulum. We will discuss the error in using these approximations and when it is valid to use them. Additionally, we will discuss how to use the Taylor series to estimate the value of in the last example.    Approximating Relativistic Kinetic Energy  In relativistic mechanics, the mass of an object moving with velocity is given by: where is the rest mass of the object and is the speed of light. Then the kinetic energy of an object of mass moving with velocity is:   In the case when , we can use the Taylor series to approximate the kinetic energy. In we will show that the kinetic energy can be approximated by the formula when . See for a comparison of the relativistic kinetic energy and its Newtonian approximation.   Relativistic versus Newtonian kinetic energy. The relativistic energy races toward a wall at the speed of light , while the Newtonian energy follows a gentle parabola; the two are approximately in agreement only when .      Krel(v) = 1\/sqrt(1 - v^2) - 1  Knewt(v) = v^2\/2               c  0    \\text{Relativistic}\\, K    \\text{Newtonian} \\,K     \\text{For}\\, v \\ll c: K_{\\text{rel}} \\approx K_{\\text{new}}                 Newtonian kinetic energy as an approximation to relativistic kinetic energy when   Show that the kinetic energy of an object moving with velocity can be approximated by the formula when .   Solution.      Blank workspace for approximating the relativistic kinetic energy when v is much smaller than c.    When , we can therefore approximate the kinetic energy as:      Estimating the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy   Assume that a car is moving with a velocity of ( miles per hour). Use the remainder's theorem to estimate the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy of the car. The speed of light is .   Solution.      Blank workspace for estimating the error in the Newtonian kinetic energy formula for the car.        Small-Angle Approximation for a Pendulum  We begin this section by briefly reviewing the forces acting on a simple pendulum and how the small-angle approximation allows us to treat its motion as simple harmonic motion.  The bob moves along the arc, so only the component of gravity tangent to that arc drives the motion. Resolving the weight into a component along the string ( , balanced by the string tension ) and a component tangent to the arc, as shown in , gives the restoring force   The minus sign indicates that the force always points back toward the equilibrium (straight-down) position. This is not Hooke's law: the force is proportional to , not to the displacement itself, so the motion is not exactly simple harmonic. Writing the arc displacement as , we would need to be proportional to that is, to for the motion to be simple harmonic.  The small-angle approximation bridges this gap. From the Taylor series when is small (in radians) the higher-order terms are negligible and . The restoring force then becomes which is Hooke's law with effective spring constant .  This is exactly what fixes the period. Newton's second law turns Hooke's law into the equation of motion Notice that the mass cancels. The equation says that is a function whose second derivative is a negative multiple of itself, and the functions with that property are the sines and cosines: writing , every solution has the form which you can verify by differentiating twice. The number is the angular frequency, and and repeat when increases by . So the motion repeats after a time with , giving   Thus, for small swings the pendulum behaves as a simple harmonic oscillator, with the period , which is independent of both the amplitude and the mass. Taylor's Remainder Theorem (see ) enables us to quantify how small must be for this approximation.   Forces on a simple pendulum. The weight resolves into a component along the string (balanced by the tension ) and a component tangent to the arc, which acts as the restoring force.     theta = radians(33)  fscale = 0.6  ft = 0.62  pivot = (0, 0)  bob = (sin(theta), -cos(theta))  mgEnd = (sin(theta), -cos(theta) - fscale)  ftEnd = (sin(theta) - ft*sin(theta), -cos(theta) + ft*cos(theta))  sinEnd = (sin(theta) - fscale*sin(theta)*cos(theta), -cos(theta) - fscale*sin(theta)*sin(theta))  cosEnd = (sin(theta) + fscale*cos(theta)*sin(theta), -cos(theta) - fscale*cos(theta)*cos(theta))          \\ell  \\theta   \\ell\\sin\\theta  x   \\overrightarrow{\\mathbf{F}}_T   m\\overrightarrow{\\mathbf{g}}   mg\\sin\\theta   mg\\cos\\theta   m                  Forces on a simple pendulum. The weight resolves into a radial component along the string, balanced by the tension , and a tangential component directed toward equilibrium, which acts as the restoring force. For small angles, gives .      Simple Harmonic Motion of a Pendulum as an Approximation   Use the remainder theorem to analyze the claim made in Giancoli's textbook that for small angles, . Specifically, show that the error is less than for angles below .  Here is the exact quote from Giancoli's textbook:    For angles less than , the difference between (in radians) and is less than .     Solution.      Blank workspace for checking Giancoli's claim about the small-angle approximation.        Approximating the value of using Taylor series  In this subsection, we will discuss how to approximate the value of using Taylor series. We will use the Taylor series for , which centered at is    Approximating using the Taylor series for   Use the Taylor series for to approximate the value of . Use Taylor's Remainder Theorem to find an upper bound for the error in this approximation, and show that the error decreases as the order of the Taylor polynomial increases.   Solution.      Blank workspace for approximating pi with the arctangent series and bounding the error.    For the record: the derivatives of satisfy and the resulting error bound is The bound goes to zero as , but very slowly: to guarantee an error of at most one needs .     As we saw in the previous example, Taylor series approached very slowly. In the project below, we will see how to use the so-called Euler's formula to approximate much faster. As you may know, there are many other methods to approximate , which we will not cover here.   Computing with Euler's identity   In we approximated by evaluating the Taylor series at , and Taylor's Remainder Theorem gave the error bound , which decreases very slowly. In this guided problem we compute far more efficiently using Euler's identity  which lets us evaluate the Taylor series at the small arguments and , where it converges much faster.    Proving Euler's identity   Let and . Use the addition formula to prove that .     Blank box in two rows, for computing the tangent of the sum and for the argument pinning down the angle.       The approximation   Let be the Taylor polynomial of order for centered at . Use Euler's identity to explain why Write out this approximation explicitly for .     Blank box in two rows, for justifying the approximation and for evaluating it at n equals three.       Bounding the error with the Remainder Theorem   In we showed that the derivatives of satisfy . Use to show that for  and conclude that      Blank box in two rows, for bounding the arctangent remainder and for combining the two remainders into the stated bound.       How much better is it?   Evaluate the error bound for and compare it with the bound obtained in for the same order. Then find the smallest for which the bound guarantees an error of at most .     Blank box in two rows, for evaluating the bound at n equals nine and for finding the smallest n meeting the tolerance.       The video below shows the approximation converging to , and compares its error, together with the Remainder-Theorem bound, against the much slower method at .    The error of Euler's-identity approximation (with its bound ) decreasing geometrically as increases, compared with the series at .         "
},
{
  "id": "fig-skel-ke-cartoon",
  "level": "2",
  "url": "subsec-skel-taylor-applications.html#fig-skel-ke-cartoon",
  "type": "Figure",
  "number": "2.3.15",
  "title": "",
  "body": " Relativistic versus Newtonian kinetic energy. The relativistic energy races toward a wall at the speed of light , while the Newtonian energy follows a gentle parabola; the two are approximately in agreement only when .      Krel(v) = 1\/sqrt(1 - v^2) - 1  Knewt(v) = v^2\/2               c  0    \\text{Relativistic}\\, K    \\text{Newtonian} \\,K     \\text{For}\\, v \\ll c: K_{\\text{rel}} \\approx K_{\\text{new}}               "
},
{
  "id": "ex-skel-newtonian-ke",
  "level": "2",
  "url": "subsec-skel-taylor-applications.html#ex-skel-newtonian-ke",
  "type": "Example",
  "number": "2.3.16",
  "title": "Newtonian kinetic energy as an approximation to relativistic kinetic energy when <span class=\"process-math\">\\(v \\ll c\\)<\/span>.",
  "body": " Newtonian kinetic energy as an approximation to relativistic kinetic energy when   Show that the kinetic energy of an object moving with velocity can be approximated by the formula when .   Solution.      Blank workspace for approximating the relativistic kinetic energy when v is much smaller than c.    When , we can therefore approximate the kinetic energy as:    "
},
{
  "id": "ex-skel-error-newtonian-ke",
  "level": "2",
  "url": "subsec-skel-taylor-applications.html#ex-skel-error-newtonian-ke",
  "type": "Example",
  "number": "2.3.17",
  "title": "Estimating the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy.",
  "body": " Estimating the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy   Assume that a car is moving with a velocity of ( miles per hour). Use the remainder's theorem to estimate the error in using the Newtonian kinetic energy formula to approximate the relativistic kinetic energy of the car. The speed of light is .   Solution.      Blank workspace for estimating the error in the Newtonian kinetic energy formula for the car.     "
},
{
  "id": "fig-skel-pendulum-forces",
  "level": "2",
  "url": "subsec-skel-taylor-applications.html#fig-skel-pendulum-forces",
  "type": "Figure",
  "number": "2.3.18",
  "title": "",
  "body": " Forces on a simple pendulum. The weight resolves into a component along the string (balanced by the tension ) and a component tangent to the arc, which acts as the restoring force.     theta = radians(33)  fscale = 0.6  ft = 0.62  pivot = (0, 0)  bob = (sin(theta), -cos(theta))  mgEnd = (sin(theta), -cos(theta) - fscale)  ftEnd = (sin(theta) - ft*sin(theta), -cos(theta) + ft*cos(theta))  sinEnd = (sin(theta) - fscale*sin(theta)*cos(theta), -cos(theta) - fscale*sin(theta)*sin(theta))  cosEnd = (sin(theta) + fscale*cos(theta)*sin(theta), -cos(theta) - fscale*cos(theta)*cos(theta))          \\ell  \\theta   \\ell\\sin\\theta  x   \\overrightarrow{\\mathbf{F}}_T   m\\overrightarrow{\\mathbf{g}}   mg\\sin\\theta   mg\\cos\\theta   m               "
},
{
  "id": "fig-skel-pendulum-forces-video",
  "level": "2",
  "url": "subsec-skel-taylor-applications.html#fig-skel-pendulum-forces-video",
  "type": "Figure",
  "number": "2.3.19",
  "title": "",
  "body": " Forces on a simple pendulum. The weight resolves into a radial component along the string, balanced by the tension , and a tangential component directed toward equilibrium, which acts as the restoring force. For small angles, gives .   "
},
{
  "id": "ex-skel-small-angle-pendulum",
  "level": "2",
  "url": "subsec-skel-taylor-applications.html#ex-skel-small-angle-pendulum",
  "type": "Example",
  "number": "2.3.20",
  "title": "Simple Harmonic Motion of a Pendulum as an Approximation.",
  "body": " Simple Harmonic Motion of a Pendulum as an Approximation   Use the remainder theorem to analyze the claim made in Giancoli's textbook that for small angles, . Specifically, show that the error is less than for angles below .  Here is the exact quote from Giancoli's textbook:    For angles less than , the difference between (in radians) and is less than .     Solution.      Blank workspace for checking Giancoli's claim about the small-angle approximation.     "
},
{
  "id": "ex-skel-approx-pi-arctan",
  "level": "2",
  "url": "subsec-skel-taylor-applications.html#ex-skel-approx-pi-arctan",
  "type": "Example",
  "number": "2.3.21",
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
  "number": "2.3.23",
  "title": "",
  "body": "  Let be a function that is -times differentiable. Also, suppose that and , where . Then there exists a number between and such that .   "
},
{
  "id": "rmk-skel-zero-error-function",
  "level": "2",
  "url": "subsec-skel-taylor-proof.html#rmk-skel-zero-error-function",
  "type": "Remark",
  "number": "2.3.24",
  "title": "The error function and its derivatives are zero at the point of expansion.",
  "body": " The error function and its derivatives are zero at the point of expansion  Note that for the error function , we have .  "
},
{
  "id": "worksheet-assignment-1",
  "level": "1",
  "url": "worksheet-assignment-1.html",
  "type": "Worksheet",
  "number": "3.1",
  "title": "Assignment 1",
  "body": " Assignment 1   These problems exercise the hyperbolic identities, the derivatives of the hyperbolic functions and the inverse hyperbolic functions. If you would like to review the material first, see .     Show that , for all real numbers .    We write both terms over the common denominator and use the identity , i.e. : Note that this is valid for every real , since and so the denominator is never zero.      Compute .    We use with , so . Hence       Simplify .    Using the definition together with and ,       Solve the equation for .    We first replace the hyperbolic functions by their definitions:   Multiplying through by and writing turns this into a quadratic equation:   Since is positive, the root is impossible, and only survives. Therefore       Following the method of , show that the inverse hyperbolic tangent is given by     Unlike , the function is increasing on all of , so no restriction of its domain is needed. Set and solve for . Multiplying the numerator and the denominator by gives   Writing and clearing the denominator,   Therefore , and taking the natural logarithm gives . Interchanging the names of the two variables, so that is the inverse function, The range of is the interval , which is exactly the set of for which is positive, so this is the domain of .      Use the substitution to calculate and then use to write your answer with a logarithm. Hint:  , and .    With we have , and the denominator collapses by the identity in the hint:   Since means , and using to rewrite the inverse function, This agrees with the answer obtained by partial fractions, since .    "
},
{
  "id": "rw22-1",
  "level": "2",
  "url": "worksheet-assignment-1.html#rw22-1",
  "type": "Worksheet Exercise",
  "number": "3.1.1",
  "title": "",
  "body": "  Show that , for all real numbers .    We write both terms over the common denominator and use the identity , i.e. : Note that this is valid for every real , since and so the denominator is never zero.   "
},
{
  "id": "pp-1",
  "level": "2",
  "url": "worksheet-assignment-1.html#pp-1",
  "type": "Worksheet Exercise",
  "number": "3.1.2",
  "title": "",
  "body": "  Compute .    We use with , so . Hence    "
},
{
  "id": "pp-2",
  "level": "2",
  "url": "worksheet-assignment-1.html#pp-2",
  "type": "Worksheet Exercise",
  "number": "3.1.3",
  "title": "",
  "body": "  Simplify .    Using the definition together with and ,    "
},
{
  "id": "ex-hyp-solve-equation",
  "level": "2",
  "url": "worksheet-assignment-1.html#ex-hyp-solve-equation",
  "type": "Worksheet Exercise",
  "number": "3.1.4",
  "title": "",
  "body": "  Solve the equation for .    We first replace the hyperbolic functions by their definitions:   Multiplying through by and writing turns this into a quadratic equation:   Since is positive, the root is impossible, and only survives. Therefore    "
},
{
  "id": "ex-hyp-arctanh",
  "level": "2",
  "url": "worksheet-assignment-1.html#ex-hyp-arctanh",
  "type": "Worksheet Exercise",
  "number": "3.1.5",
  "title": "",
  "body": "  Following the method of , show that the inverse hyperbolic tangent is given by     Unlike , the function is increasing on all of , so no restriction of its domain is needed. Set and solve for . Multiplying the numerator and the denominator by gives   Writing and clearing the denominator,   Therefore , and taking the natural logarithm gives . Interchanging the names of the two variables, so that is the inverse function, The range of is the interval , which is exactly the set of for which is positive, so this is the domain of .   "
},
{
  "id": "ex-hyp-arctanh-integral",
  "level": "2",
  "url": "worksheet-assignment-1.html#ex-hyp-arctanh-integral",
  "type": "Worksheet Exercise",
  "number": "3.1.6",
  "title": "",
  "body": "  Use the substitution to calculate and then use to write your answer with a logarithm. Hint:  , and .    With we have , and the denominator collapses by the identity in the hint:   Since means , and using to rewrite the inverse function, This agrees with the answer obtained by partial fractions, since .   "
},
{
  "id": "worksheet-assignment-2",
  "level": "1",
  "url": "worksheet-assignment-2.html",
  "type": "Worksheet",
  "number": "3.2",
  "title": "Assignment 2",
  "body": " Assignment 2   These problems work with sequences, finite sums and geometric series, ask whether a series converges and what it sums to, and then use the Maclaurin series of the standard functions to recognise a sum. If you would like to review the material first, see and .     The terms of a geometric series satisfy where denotes the th term. Find .       What is the sum of all multiples of 7 or 11 less than 1000?       What can we conclude by applying the th term test in the following series?                   Evaluate the following sums or show that they diverge.                                  Answer questions A and B below for the following infinite series:    Does the th-term test apply? Remember to fully justify your answer.    Evaluate the series or show that it diverges.          Express as a rational number, i.e. in the form , where and are positive integers with no common factors.       Find the sum of the convergent series .       Find the sum of the series .       Find the sum of the series      "
},
{
  "id": "rev-ser-10",
  "level": "2",
  "url": "worksheet-assignment-2.html#rev-ser-10",
  "type": "Worksheet Exercise",
  "number": "3.2.1",
  "title": "",
  "body": "  The terms of a geometric series satisfy where denotes the th term. Find .    "
},
{
  "id": "rev-ser-2",
  "level": "2",
  "url": "worksheet-assignment-2.html#rev-ser-2",
  "type": "Worksheet Exercise",
  "number": "3.2.2",
  "title": "",
  "body": "  What is the sum of all multiples of 7 or 11 less than 1000?    "
},
{
  "id": "asgn2-nth-term-test",
  "level": "2",
  "url": "worksheet-assignment-2.html#asgn2-nth-term-test",
  "type": "Worksheet Exercise",
  "number": "3.2.3",
  "title": "",
  "body": "  What can we conclude by applying the th term test in the following series?                "
},
{
  "id": "asgn2-evaluate-sums",
  "level": "2",
  "url": "worksheet-assignment-2.html#asgn2-evaluate-sums",
  "type": "Worksheet Exercise",
  "number": "3.2.4",
  "title": "",
  "body": "  Evaluate the following sums or show that they diverge.                               "
},
{
  "id": "rw23-1",
  "level": "2",
  "url": "worksheet-assignment-2.html#rw23-1",
  "type": "Worksheet Exercise",
  "number": "3.2.5",
  "title": "",
  "body": "  Answer questions A and B below for the following infinite series:    Does the th-term test apply? Remember to fully justify your answer.    Evaluate the series or show that it diverges.       "
},
{
  "id": "rw21-4",
  "level": "2",
  "url": "worksheet-assignment-2.html#rw21-4",
  "type": "Worksheet Exercise",
  "number": "3.2.6",
  "title": "",
  "body": "  Express as a rational number, i.e. in the form , where and are positive integers with no common factors.    "
},
{
  "id": "asgn2-cos-series-sum",
  "level": "2",
  "url": "worksheet-assignment-2.html#asgn2-cos-series-sum",
  "type": "Worksheet Exercise",
  "number": "3.2.7",
  "title": "",
  "body": "  Find the sum of the convergent series .    "
},
{
  "id": "pp-3",
  "level": "2",
  "url": "worksheet-assignment-2.html#pp-3",
  "type": "Worksheet Exercise",
  "number": "3.2.8",
  "title": "",
  "body": "  Find the sum of the series .    "
},
{
  "id": "m1-1",
  "level": "2",
  "url": "worksheet-assignment-2.html#m1-1",
  "type": "Worksheet Exercise",
  "number": "3.2.9",
  "title": "",
  "body": "  Find the sum of the series     "
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
