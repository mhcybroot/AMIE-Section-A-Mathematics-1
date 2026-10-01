# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 02 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = (3x^2 + 4)^5$$

---

### **Core Mathematical Concept & Formulas:**
1. **Generalized Power Rule (চেইন রুল / শক্তি বিধি):**
   $$\frac{d}{dx}[u(x)^n] = n[u(x)]^{n-1} \cdot \frac{du}{dx}$$
2. **Polynomial Derivative:**
   $$\frac{d}{dx}(ax^2 + c) = 2ax$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত দ্বিঘাত ঘাত ফাংশনটি লিখি (Given function)**
$$y = (3x^2 + 4)^5$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ করি (Differentiating both sides w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}\left[ (3x^2 + 4)^5 \right]$$

**Step 3: শক্তি বিধি ও চেইন রুল প্রয়োগ করি (Applying Power & Chain Rule)**
$$\frac{dy}{dx} = 5(3x^2 + 4)^{5 - 1} \cdot \frac{d}{dx}(3x^2 + 4) = 5(3x^2 + 4)^4 \cdot \frac{d}{dx}(3x^2 + 4)$$

**Step 4: বন্ধনীর ভেতরের অংশের অন্তরক নির্ণয় করি (Differentiating Inner Quadratic Expression)**
$$\frac{d}{dx}(3x^2 + 4) = 3(2x) + 0 = 6x$$

**Step 5: মান বসিয়ে ধ্রুবক ও চলকের গুণফল হিসাব করে চূড়ান্ত অন্তরজ পাই (Final Simplification)**
$$\frac{dy}{dx} = 5(3x^2 + 4)^4 \times 6x = 30x(3x^2 + 4)^4$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = 30x(3x^2 + 4)^4$$
