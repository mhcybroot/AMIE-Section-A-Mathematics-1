# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 10 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = (x^3 + 2x - 1)^5$$

---

### **Core Mathematical Concept & Formulas:**
1. **Generalized Power Rule (চেইন রুল / শক্তি বিধি):**
   $$\frac{d}{dx}[u(x)^n] = n[u(x)]^{n-1} \cdot \frac{du}{dx}$$
2. **Cubic Polynomial Derivative:**
   $$\frac{d}{dx}(x^3 + 2x - 1) = 3x^2 + 2$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত ত্রিঘাত বহুপদী ঘাত ফাংশনটি লিখি (Given function)**
$$y = (x^3 + 2x - 1)^5$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ করি (Differentiating both sides w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}\left[ (x^3 + 2x - 1)^5 \right]$$

**Step 3: শক্তি বিধি ও চেইন রুল প্রয়োগ করি (Applying Power & Chain Rule)**
$$\frac{dy}{dx} = 5(x^3 + 2x - 1)^{5 - 1} \cdot \frac{d}{dx}(x^3 + 2x - 1) = 5(x^3 + 2x - 1)^4 \cdot \frac{d}{dx}(x^3 + 2x - 1)$$

**Step 4: বন্ধনীভুক্ত অভ্যন্তরীণ অংশের অন্তরক নির্ণয় করি (Differentiating Inner Expression)**
$$\frac{d}{dx}(x^3 + 2x - 1) = 3x^2 + 2(1) - 0 = 3x^2 + 2$$

**Step 5: মান বসিয়ে চূড়ান্ত উৎপাদকীয় অন্তরজ পাই (Final Factorized Form)**
$$\frac{dy}{dx} = 5(3x^2 + 2)(x^3 + 2x - 1)^4$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = 5(3x^2 + 2)(x^3 + 2x - 1)^4$$
