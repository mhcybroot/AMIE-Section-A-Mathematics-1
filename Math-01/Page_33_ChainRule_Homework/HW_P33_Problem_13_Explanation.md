# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 13 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = \left(\frac{x^2 + 1}{x^2 - 1}\right)^3$$

---

### **Core Mathematical Concept & Formulas:**
1. **Power Rule combined with Chain Rule:**
   $$\frac{d}{dx}[u(x)^n] = n[u(x)]^{n-1} \cdot \frac{du}{dx}$$
2. **Quotient Rule of Differentiation (ভাগবিধি):**
   $$\frac{d}{dx}\left[\frac{u}{v}\right] = \frac{v \frac{du}{dx} - u \frac{dv}{dx}}{v^2}$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত মূলদ ঘাত ফাংশনটি লিখি (Given function)**
$$y = \left(\frac{x^2 + 1}{x^2 - 1}\right)^3$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ করি (Differentiating both sides w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}\left[ \left(\frac{x^2 + 1}{x^2 - 1}\right)^3 \right]$$

**Step 3: শক্তি বিধি ও চেইন রুল প্রয়োগ করি (Applying Power & Chain Rule)**
$$\frac{dy}{dx} = 3\left(\frac{x^2 + 1}{x^2 - 1}\right)^{3 - 1} \cdot \frac{d}{dx}\left(\frac{x^2 + 1}{x^2 - 1}\right)$$
$$\frac{dy}{dx} = 3\left(\frac{x^2 + 1}{x^2 - 1}\right)^2 \cdot \frac{d}{dx}\left(\frac{x^2 + 1}{x^2 - 1}\right)$$

**Step 4: ভাগবিধি প্রয়োগ করে ভেতরের ভগ্নাংশের অন্তরক নির্ণয় করি (Applying Quotient Rule)**
$$\frac{d}{dx}\left(\frac{x^2 + 1}{x^2 - 1}\right) = \frac{(x^2 - 1)\frac{d}{dx}(x^2 + 1) - (x^2 + 1)\frac{d}{dx}(x^2 - 1)}{(x^2 - 1)^2}$$
$$= \frac{(x^2 - 1)(2x) - (x^2 + 1)(2x)}{(x^2 - 1)^2}$$
$$= \frac{2x\left[(x^2 - 1) - (x^2 + 1)\right]}{(x^2 - 1)^2} = \frac{2x(-2)}{(x^2 - 1)^2} = -\frac{4x}{(x^2 - 1)^2}$$

**Step 5: মান বসিয়ে চূড়ান্ত বীজগাণিতিক সরলীকরণ করি (Final Multiplication)**
$$\frac{dy}{dx} = 3 \cdot \frac{(x^2 + 1)^2}{(x^2 - 1)^2} \cdot \left( -\frac{4x}{(x^2 - 1)^2} \right)$$
$$\frac{dy}{dx} = -\frac{12x(x^2 + 1)^2}{(x^2 - 1)^4}$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = -\frac{12x(x^2 + 1)^2}{(x^2 - 1)^4}$$
