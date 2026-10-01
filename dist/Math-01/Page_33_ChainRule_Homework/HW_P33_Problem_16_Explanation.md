# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 16 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = \sqrt{x + \frac{1}{x}}$$

---

### **Core Mathematical Concept & Formulas:**
1. **Square Root Chain Rule (বর্গমূল চেইন রুল):**
   $$\frac{d}{dx}[\sqrt{g(x)}] = \frac{g'(x)}{2\sqrt{g(x)}}$$
2. **Standard Power Rule:**
   $$\frac{d}{dx}\left(x + \frac{1}{x}\right) = 1 - \frac{1}{x^2} = \frac{x^2 - 1}{x^2}$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত অমূলদ ফাংশনটি লিখি (Given function)**
$$y = \sqrt{x + \frac{1}{x}} = \left(x + x^{-1}\right)^{1/2}$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ করি (Differentiating both sides w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}\left[ \sqrt{x + \frac{1}{x}} \right]$$

**Step 3: বর্গমূলের ওপর চেইন রুল প্রয়োগ করি (Applying Chain Rule for Square Root)**
$$\frac{dy}{dx} = \frac{1}{2\sqrt{x + \frac{1}{x}}} \cdot \frac{d}{dx}\left(x + \frac{1}{x}\right)$$

**Step 4: বন্ধনীভুক্ত অংশের অন্তরক নির্ণয় করি (Differentiating Inner Term)**
$$\frac{d}{dx}\left(x + \frac{1}{x}\right) = \frac{d}{dx}(x) + \frac{d}{dx}(x^{-1}) = 1 - x^{-2} = 1 - \frac{1}{x^2} = \frac{x^2 - 1}{x^2}$$

**Step 5: মান বসিয়ে বীজগাণিতিক সরলীকরণ করি (Final Algebraic Simplification)**
$$\frac{dy}{dx} = \frac{1}{2\sqrt{x + \frac{1}{x}}} \cdot \left(\frac{x^2 - 1}{x^2}\right) = \frac{x^2 - 1}{2x^2\sqrt{x + \frac{1}{x}}}$$

**বিকল্প সরলীকৃত রূপ (Alternative Compact Radical Form):**
$$\frac{dy}{dx} = \frac{x^2 - 1}{2x^2 \sqrt{\frac{x^2+1}{x}}} = \frac{x^2 - 1}{2x^{3/2}\sqrt{x^2 + 1}}$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = \frac{x^2 - 1}{2x^2\sqrt{x + \frac{1}{x}}}$$
