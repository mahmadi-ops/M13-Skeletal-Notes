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
  "body": " Identities and Other Hyperbolic Functions  A similar identity to the trigonometric identity holds for the hyperbolic functions:   As you already know, any point on the circumference of the unit circle can be described in terms of sine and cosine of an angle , i.e. and , which results in the trigonometric identity . Mark this on the circle in .   The unit circle . Mark a point on it, and draw the right triangle with legs and and hypotenuse .     circ(t) = (cos(t), sin(t))               Similarly, any point on the right branch of the hyperbola can be represented as and , where . This follows directly from identity , i.e. . Mark this on the hyperbola in .   The hyperbola . Mark a point on the right branch, and draw the segments from the origin to and to the vertex.     hr(t) = ((exp(t) + exp(-t))\/2, (exp(t) - exp(-t))\/2)  hl(t) = (-(exp(t) + exp(-t))\/2, (exp(t) - exp(-t))\/2)                  Parametrizing the Left Branch   Both branches of appear in , but the parametrization traces only the right one, since for every . How would you parametrize the left branch, where ?   Your answer and reasoning.      Blank workspace for a handwritten answer.      The identity is unaffected if you change the sign of the first coordinate.    As you might have guessed, the rest of the hyperbolic functions are defined as follows.   "
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
  "id": "sec-skel-hyp-identity-list",
  "level": "1",
  "url": "sec-skel-hyp-identity-list.html",
  "type": "Section",
  "number": "1.4",
  "title": "Hyperbolic Identities",
  "body": " Hyperbolic Identities  Below are some identities that you may find useful in some problems, however, you are not expected to memorize them. We will prove some of them as an exercise later.    Computing   Show that the inverse hyperbolic cosine can be written in terms of the natural logarithm as    Solution. (Restrict to so that it is one-to-one, set , and solve for .)     Blank workspace for a handwritten solution.       An integral via a hyperbolic substitution   Use hyperbolic functions to calculate the integral  Hint: Similar to , we have .   Solution.      Blank workspace for a handwritten solution.      "
},
{
  "id": "example-skel-hyp-arccosh",
  "level": "2",
  "url": "sec-skel-hyp-identity-list.html#example-skel-hyp-arccosh",
  "type": "Example",
  "number": "1.4.1",
  "title": "Computing <span class=\"process-math\">\\(\\cosh^{-1}(x)\\)<\/span>.",
  "body": " Computing   Show that the inverse hyperbolic cosine can be written in terms of the natural logarithm as    Solution. (Restrict to so that it is one-to-one, set , and solve for .)     Blank workspace for a handwritten solution.     "
},
{
  "id": "example-skel-hyp-integral",
  "level": "2",
  "url": "sec-skel-hyp-identity-list.html#example-skel-hyp-integral",
  "type": "Example",
  "number": "1.4.2",
  "title": "An integral via a hyperbolic substitution.",
  "body": " An integral via a hyperbolic substitution   Use hyperbolic functions to calculate the integral  Hint: Similar to , we have .   Solution.      Blank workspace for a handwritten solution.     "
},
{
  "id": "subsec-skel-hyp-catenary",
  "level": "1",
  "url": "subsec-skel-hyp-catenary.html",
  "type": "Subsection",
  "number": "1.5.1",
  "title": "Hanging Cables and the Catenary",
  "body": " Hanging Cables and the Catenary  If a heavy flexible cable (such as a telephone line, a power line, or a chain) hangs freely from two supports, it settles into a curve called a catenary . Contrary to a common guess, this curve is not a parabola; it is the graph of a hyperbolic cosine, where is measured horizontally from the lowest point of the cable, so that the -axis is the axis of symmetry and the lowest point sits at height . Sliding the curve up or down, as in , only changes where we draw the -axis.  The shape comes out of a balance of forces. Look at the piece of cable running from the lowest point to a point where the cable makes an angle with the horizontal, and let be the arc length of that piece. Three forces act on it: the tension at the lowest point, which is horizontal; the tension along the cable at the other end; and the weight of the piece, where is the mass per unit length; see . Balancing the horizontal and the vertical components gives    The three forces on the piece of cable of arc length running from the lowest point of the cable to a point where the cable makes an angle with the horizontal. The lowest point sits at height , and the supports are a distance apart. (After Fig. 1 of Behroozi, cited below.)     c(x) = (exp(x) + exp(-x))\/2  P = (1.1, 1.6685)        \\theta   T  \\lambda g s  T_0     a   s    b                 The quantity has units of length, and dividing the second equation by the first eliminates and leaves . Since the cable makes the angle with the horizontal, is its slope, so Now use the arc length element and separate the variables: where the constant of integration vanishes because at .  Solving for gives , and therefore One last integration, together with , produces the catenary equation .  Two things are worth noticing. First, is a pure scale factor: written as , the equation shows that every catenary is a scaled copy of the single curve , in exactly the same way that every circle is a scaled copy of the unit circle; shows four of them. Second, is fixed by the cable itself. If the cable has half-length and its two supports are a distance apart, then putting at in gives which determines (numerically) from the two lengths. Since , a cable pulled tight has a large and hangs almost flat, while a slack one has a small and sags sharply.   The catenaries for . Each curve meets the -axis at its own value of , and all four are scaled copies of the single curve . (After Fig. 2 of Behroozi, cited below.)     ca(x) = 0.5*(exp(x\/0.5) + exp(-x\/0.5))\/2  cb(x) = (exp(x) + exp(-x))\/2  cc(x) = 2*(exp(x\/2) + exp(-x\/2))\/2  cd(x) = 4*(exp(x\/4) + exp(-x\/4))\/2             a=0.5    a=1    a=2    a=4                A worked example of a hanging cable, in which we find the slope of the cable and the angle at which it meets its pole, appears in .  The derivation above follows F. Behroozi, In Praise of the Catenary , The Physics Teacher  56 , 214 217 (2018), which also discusses the sense in which all catenaries are similar to one another and suggests simple classroom demonstrations.  "
},
{
  "id": "subsec-skel-hyp-catenary-2",
  "level": "2",
  "url": "subsec-skel-hyp-catenary.html#subsec-skel-hyp-catenary-2",
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
  "id": "subsec-skel-hyp-catenary-10",
  "level": "2",
  "url": "subsec-skel-hyp-catenary.html#subsec-skel-hyp-catenary-10",
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
  "id": "worksheet-assignment-1",
  "level": "1",
  "url": "worksheet-assignment-1.html",
  "type": "Worksheet",
  "number": "2.1",
  "title": "Assignment 1",
  "body": " Assignment 1   These problems exercise the hyperbolic identities, the derivatives of the hyperbolic functions and the inverse hyperbolic functions. If you would like to review the material first, see .     Show that , for all real numbers .       Compute .       Simplify .       Solve the equation for .       Following the method of , show that the inverse hyperbolic tangent is given by        Use the substitution to calculate and then use to write your answer with a logarithm. Hint:  , and .     "
},
{
  "id": "rw22-1",
  "level": "2",
  "url": "worksheet-assignment-1.html#rw22-1",
  "type": "Worksheet Exercise",
  "number": "2.1.1",
  "title": "",
  "body": "  Show that , for all real numbers .    "
},
{
  "id": "pp-1",
  "level": "2",
  "url": "worksheet-assignment-1.html#pp-1",
  "type": "Worksheet Exercise",
  "number": "2.1.2",
  "title": "",
  "body": "  Compute .    "
},
{
  "id": "pp-2",
  "level": "2",
  "url": "worksheet-assignment-1.html#pp-2",
  "type": "Worksheet Exercise",
  "number": "2.1.3",
  "title": "",
  "body": "  Simplify .    "
},
{
  "id": "ex-hyp-solve-equation",
  "level": "2",
  "url": "worksheet-assignment-1.html#ex-hyp-solve-equation",
  "type": "Worksheet Exercise",
  "number": "2.1.4",
  "title": "",
  "body": "  Solve the equation for .    "
},
{
  "id": "ex-hyp-arctanh",
  "level": "2",
  "url": "worksheet-assignment-1.html#ex-hyp-arctanh",
  "type": "Worksheet Exercise",
  "number": "2.1.5",
  "title": "",
  "body": "  Following the method of , show that the inverse hyperbolic tangent is given by     "
},
{
  "id": "ex-hyp-arctanh-integral",
  "level": "2",
  "url": "worksheet-assignment-1.html#ex-hyp-arctanh-integral",
  "type": "Worksheet Exercise",
  "number": "2.1.6",
  "title": "",
  "body": "  Use the substitution to calculate and then use to write your answer with a logarithm. Hint:  , and .    "
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
