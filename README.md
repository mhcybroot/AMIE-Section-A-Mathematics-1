# 🏛️ AMIE Section-A Preparation: Engineering Mathematics-1

Welcome to the official **AMIE (IEB Section-A) Engineering Mathematics-1** solutions repository.  
This repository provides publication-grade, bilingual (Bangla + English), step-by-step mathematical solutions with 2-page print PDFs, detailed derivations, and 5 color-coded engineering callouts for every problem in the syllabus.

---

## 📑 Repository Structure & Master Index

| Folder / Chapter | Topics Covered | Solved Problems | Status |
| :--- | :--- | :---: | :---: |
| [`Math-01/Page_30_Basic_Derivatives`](file:///home/mhcybroot/Documents/AMIE/Math-01/Page_30_Basic_Derivatives) | First Principle & Fundamental Power/Trig/Log Derivatives | 14 Problems (Prob 01–14) | ✅ Complete |
| [`Math-01/Page_31_Product_Quotient_ChainRule`](file:///home/mhcybroot/Documents/AMIE/Math-01/Page_31_Product_Quotient_ChainRule) | Product Rule, Quotient Rule & Composite Functions | 18 Problems (Prob 15, HW 01–08, CR 01–09) | ✅ Complete |
| [`Math-01/Page_32_ChainRule_Trig_InverseTrig`](file:///home/mhcybroot/Documents/AMIE/Math-01/Page_32_ChainRule_Trig_InverseTrig) | Trigonometric & Inverse Trigonometric Chain Rule | 12 Problems (CR 10–21) | ✅ Complete |
| [`Math-01/Page_33_ChainRule_Homework`](file:///home/mhcybroot/Documents/AMIE/Math-01/Page_33_ChainRule_Homework) | Comprehensive Practice & Previous Exam Problems | 31 Problems (CR 22, HW 01–30) | ✅ Complete |
| [`Math-01/Page_34_Explicit_Implicit_Functions`](file:///home/mhcybroot/Documents/AMIE/Math-01/Page_34_Explicit_Implicit_Functions) | Implicit Differentiation & Cross-Variable Derivatives | 6 Problems (Imp 01–06) | ✅ Complete |
| [`Math-01/Page_35_Advanced_Differentiation_Exam_Problems`](file:///home/mhcybroot/Documents/AMIE/Math-01/Page_35_Advanced_Differentiation_Exam_Problems) | Logarithmic Differentiation of Power Functions | 5 Problems (Adv 07–11) | ✅ Complete |
| [`Math-01/Page_36_Advanced_Log_Trig_Derivatives`](file:///home/mhcybroot/Documents/AMIE/Math-01/Page_36_Advanced_Log_Trig_Derivatives) | Complex Inverse Trigonometry & Dual Variable-Power Equations | 3 Problems (Adv 12–14) | ✅ Complete |
| [`Math-01/Page_37_Parametric_Inverse_Derivatives`](file:///home/mhcybroot/Documents/AMIE/Math-01/Page_37_Parametric_Inverse_Derivatives) | Multi-Term Variable-Power & Parametric Inverse Forms | 2 Problems (Adv 15, 16) | ✅ Complete |
| [`Math-01/Page_38_Parametric_Substitution_Derivatives`](file:///home/mhcybroot/Documents/AMIE/Math-01/Page_38_Parametric_Substitution_Derivatives) | Relative Derivatives & Folium of Descartes Curve | 4 Problems (Adv 17–20) | ✅ Complete |
| [`Math-01/Page_39_Parametric_Cycloid_Derivatives`](file:///home/mhcybroot/Documents/AMIE/Math-01/Page_39_Parametric_Cycloid_Derivatives) | Cycloid Kinematics, Brachistochrone & Half-Angle Linearization | 5 Problems (Param 21–25) | ✅ Complete |
| [`Math-01/Page_40_Partial_Differentiation_Laplace`](file:///home/mhcybroot/Documents/AMIE/Math-01/Page_40_Partial_Differentiation_Laplace) | Partial Derivatives, Euler's Theorem & 2D Laplace Harmonic Potential | 3 Problems (Q-1, Q-2(i), Q-2(ii)) | ✅ Complete |

👉 **Full Problem-by-Problem Index:** View the complete catalog at [`Math-01/MASTER_INDEX.md`](file:///home/mhcybroot/Documents/AMIE/Math-01/MASTER_INDEX.md).

---

## 🎨 Publication Standards & Design Features
Every solution follows the **Executive Engineering Standard**:
1. **Typography & Layout:** Google Inter + Hind Siliguri + Fira Code with exact A4 margins (6mm x 9mm).
2. **Page 1 (Solution):** Step-by-step mathematical derivation with dual-language headings and a green highlighted Final Answer box.
3. **Page 2 (Engineering Analysis):** 5 color-coded structured callouts:
   - 💡 **Engineering Context:** Physical applications (Control Systems, Kinematics, Thermodynamics, Signal Processing).
   - 🔍 **Mathematical Rigor:** Mathematical tricks, substitutions, and identities.
   - ⚠️ **Common Pitfalls:** Exam traps and common student errors.
   - ⚙️ **Master Workflow:** Algorithmic, systematic problem-solving steps.
   - 🚀 **Alternative Verification:** Cross-checking results via polar coordinates, partial derivatives, or vector calculus.
4. **Pre-rendered KaTeX:** All LaTeX math is pre-compiled directly into HTML via `render_math.js` for instant rendering and offline PDF compilation.
5. **Strict 2-Page Constraint:** Every PDF output is guaranteed to compile to exactly 2 pages.

---

## 🛠️ Build & PDF Rendering Commands
To re-render math and re-compile PDFs across all directories:
```bash
# 1. Pre-render KaTeX math in all HTML files
node render_math.js

# 2. Compile any HTML file to a 2-page print PDF
chromium --headless --disable-gpu --no-pdf-header-footer --print-to-pdf=output.pdf input.html
```
