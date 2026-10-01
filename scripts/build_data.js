import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const rawCatalog = JSON.parse(fs.readFileSync(path.join(rootDir, 'problems_catalog.json'), 'utf-8'));

const outDir = path.join(rootDir, 'src', 'data');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Clean and enrich markdown content
const enrichedProblems = rawCatalog.problems.map(problem => {
  let mdContent = '';
  if (problem.mdPath) {
    const fullPath = path.join(rootDir, problem.mdPath);
    if (fs.existsSync(fullPath)) {
      mdContent = fs.readFileSync(fullPath, 'utf-8');
    }
  }

  // Extract clean summary / hint if present
  let hint = '';
  if (mdContent) {
    const hintMatch = mdContent.match(/###\s*(?:Hints?|Method|Strategy|Key Formula)[^\n]*\n([\s\S]*?)(?=\n###|\n##|$)/i);
    if (hintMatch) {
      hint = hintMatch[1].trim().slice(0, 300);
    }
  }

  // Determine difficulty heuristic
  let difficulty = 'Medium';
  const stmt = problem.statement || '';
  if (problem.chapterId.includes('Page_30') || (problem.chapterId.includes('Page_31') && !stmt.includes('\\frac'))) {
    difficulty = 'Standard';
  } else if (problem.chapterId.includes('Page_35') || problem.chapterId.includes('Page_39') || problem.chapterId.includes('Page_40') || stmt.includes('\\partial') || stmt.includes('\\theta')) {
    difficulty = 'Advanced';
  } else {
    difficulty = 'Core Exam';
  }

  return {
    ...problem,
    difficulty,
    hint,
    mdContent
  };
});

// Formula references
const formulaCheatSheet = [
  {
    category: "Basic Algebraic Derivatives",
    formulas: [
      { name: "Power Rule", latex: "\\frac{d}{dx}[x^n] = n x^{n-1}", desc: "Fundamental power derivative" },
      { name: "Constant Multiple", latex: "\\frac{d}{dx}[c \\cdot u] = c \\frac{du}{dx}", desc: "Linearity of differentiation" },
      { name: "Sum/Difference", latex: "\\frac{d}{dx}[u \\pm v] = \\frac{du}{dx} \\pm \\frac{dv}{dx}", desc: "Term-by-term differentiation" },
      { name: "Square Root", latex: "\\frac{d}{dx}[\\sqrt{x}] = \\frac{1}{2\\sqrt{x}}", desc: "Special case for n = 1/2" },
      { name: "Reciprocal", latex: "\\frac{d}{dx}\\left[\\frac{1}{x}\\right] = -\\frac{1}{x^2}", desc: "Special case for n = -1" }
    ]
  },
  {
    category: "Product & Quotient Rules",
    formulas: [
      { name: "Product Rule (Leibniz)", latex: "\\frac{d}{dx}[u \\cdot v] = u'v + uv'", desc: "First × d/dx(Second) + Second × d/dx(First)" },
      { name: "Triple Product", latex: "\\frac{d}{dx}[u \\cdot v \\cdot w] = u'vw + uv'w + uvw'", desc: "Product of 3 functions" },
      { name: "Quotient Rule", latex: "\\frac{d}{dx}\\left[\\frac{u}{v}\\right] = \\frac{u'v - uv'}{v^2}", desc: "(Bottom × d/dx(Top) - Top × d/dx(Bottom)) / Bottom²" }
    ]
  },
  {
    category: "Chain Rule (Composite Functions)",
    formulas: [
      { name: "Chain Rule", latex: "\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}", desc: "Derivative of nested function f(g(x))" },
      { name: "Generalized Power", latex: "\\frac{d}{dx}[u(x)^n] = n [u(x)]^{n-1} \\cdot u'(x)", desc: "Power rule with inner derivative" },
      { name: "Square Root of u", latex: "\\frac{d}{dx}[\\sqrt{u}] = \\frac{u'}{2\\sqrt{u}}", desc: "Shortcut for root expressions" }
    ]
  },
  {
    category: "Trigonometric Derivatives",
    formulas: [
      { name: "Sine", latex: "\\frac{d}{dx}[\\sin x] = \\cos x", desc: "Standard sine derivative" },
      { name: "Cosine", latex: "\\frac{d}{dx}[\\cos x] = -\\sin x", desc: "Negative sine" },
      { name: "Tangent", latex: "\\frac{d}{dx}[\\tan x] = \\sec^2 x", desc: "Secant squared" },
      { name: "Cotangent", latex: "\\frac{d}{dx}[\\cot x] = -\\csc^2 x", desc: "Negative cosecant squared" },
      { name: "Secant", latex: "\\frac{d}{dx}[\\sec x] = \\sec x \\tan x", desc: "Secant times tangent" },
      { name: "Cosecant", latex: "\\frac{d}{dx}[\\csc x] = -\\csc x \\cot x", desc: "Negative cosecant times cotangent" }
    ]
  },
  {
    category: "Inverse Trigonometric Derivatives",
    formulas: [
      { name: "Arcsine", latex: "\\frac{d}{dx}[\\sin^{-1} x] = \\frac{1}{\\sqrt{1-x^2}}", desc: "Valid for |x| < 1" },
      { name: "Arccosine", latex: "\\frac{d}{dx}[\\cos^{-1} x] = -\\frac{1}{\\sqrt{1-x^2}}", desc: "Valid for |x| < 1" },
      { name: "Arctangent", latex: "\\frac{d}{dx}[\\tan^{-1} x] = \\frac{1}{1+x^2}", desc: "Valid for all real x" },
      { name: "Arccotangent", latex: "\\frac{d}{dx}[\\cot^{-1} x] = -\\frac{1}{1+x^2}", desc: "Valid for all real x" },
      { name: "Arcsecant", latex: "\\frac{d}{dx}[\\sec^{-1} x] = \\frac{1}{|x|\\sqrt{x^2-1}}", desc: "Valid for |x| > 1" }
    ]
  },
  {
    category: "Logarithmic & Exponential",
    formulas: [
      { name: "Natural Exponential", latex: "\\frac{d}{dx}[e^x] = e^x", desc: "Self-derivative" },
      { name: "General Exponential", latex: "\\frac{d}{dx}[a^x] = a^x \\ln a", desc: "Base a > 0" },
      { name: "Natural Logarithm", latex: "\\frac{d}{dx}[\\ln x] = \\frac{1}{x}", desc: "Base e log" },
      { name: "General Logarithm", latex: "\\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}", desc: "Base a log" },
      { name: "Logarithmic Diff Shortcut", latex: "\\frac{d}{dx}[u^v] = u^v \\left[ v' \\ln u + \\frac{v u'}{u} \\right]", desc: "Function to power of function" }
    ]
  },
  {
    category: "Parametric & Cycloid Differentiation",
    formulas: [
      { name: "First Derivative", latex: "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}", desc: "Ratio of parameter rates" },
      { name: "Second Derivative", latex: "\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}}", desc: "Crucial for curvature and AMIE exams" },
      { name: "Cycloid Equations", latex: "x = a(\\theta - \\sin\\theta), \\quad y = a(1 - \\cos\\theta)", desc: "Standard cycloid formulation" }
    ]
  },
  {
    category: "Partial Differentiation & Laplace Equation",
    formulas: [
      { name: "First Partial (x)", latex: "\\frac{\\partial u}{\\partial x} = \\lim_{h \\to 0}\\frac{u(x+h,y)-u(x,y)}{h}", desc: "Differentiating treating y as constant" },
      { name: "First Partial (y)", latex: "\\frac{\\partial u}{\\partial y} = \\lim_{k \\to 0}\\frac{u(x,y+k)-u(x,y)}{k}", desc: "Differentiating treating x as constant" },
      { name: "2D Laplace Equation", latex: "\\nabla^2 u = \\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = 0", desc: "Condition for Harmonic Functions" },
      { name: "3D Laplace Equation", latex: "\\nabla^2 u = \\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} + \\frac{\\partial^2 u}{\\partial z^2} = 0", desc: "Harmonic potential field in 3D" }
    ]
  }
];

const finalData = {
  metadata: rawCatalog.metadata,
  chapters: rawCatalog.chapters,
  problems: enrichedProblems,
  formulaSheet: formulaCheatSheet
};

fs.writeFileSync(path.join(outDir, 'problems_data.json'), JSON.stringify(finalData, null, 2), 'utf-8');
console.log(`Successfully generated src/data/problems_data.json with ${enrichedProblems.length} enriched problems and ${formulaCheatSheet.length} formula categories.`);
