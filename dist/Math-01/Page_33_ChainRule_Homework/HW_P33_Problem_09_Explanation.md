# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 09 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = \sin(x^3 + x^2 + 8)$$

---

### **Core Mathematical Concept & Formulas:**
1. **Trigonometric Chain Rule (ত্রিকোণমিতিক চেইন রুল):**
   $$\frac{d}{dx}[\sin(g(x))] = \cos(g(x)) \cdot g'(x)$$
2. **Polynomial Derivative Rule:**
   $$\frac{d}{dx}(x^3 + x^2 + 8) = 3x^2 + 2x$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত ত্রিকোণমিতিক বহুপদী ফাংশনটি লিখি (Given function)**
$$y = \sin(x^3 + x^2 + 8)$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ করি (Differentiating both sides w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}\left[ \sin(x^3 + x^2 + 8) \right]$$

**Step 3: সাইন ফাংশনে চেইন রুল প্রয়োগ করি (Applying Chain Rule)**
$$\frac{dy}{dx} = \cos(x^3 + x^2 + 8) \cdot \frac{d}{dx}(x^3 + x^2 + 8)$$

**Step 4: বন্ধনীভুক্ত বহুপদী কোণের অন্তরক নির্ণয় করি (Differentiating Inner Polynomial Angle)**
$$\frac{d}{dx}(x^3 + x^2 + 8) = 3x^2 + 2x + 0 = 3x^2 + 2x$$

**Step 5: মান বসিয়ে চূড়ান্ত অন্তরজ পাই (Final Factorized Form)**
$$\frac{dy}{dx} = (3x^2 + 2x)\cos(x^3 + x^2 + 8) = x(3x + 2)\cos(x^3 + x^2 + 8)$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = (3x^2 + 2x)\cos(x^3 + x^2 + 8)$$
