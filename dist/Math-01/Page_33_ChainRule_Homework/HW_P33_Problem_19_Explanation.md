# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 19 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = \sqrt{\frac{2x}{x^3 - 2x}}$$

---

### **Core Mathematical Concept & Formulas:**
1. **Algebraic Simplification Prior to Differentiation (অন্তরীকরণের পূর্বে সরলীকরণ):**
   $$\frac{2x}{x^3 - 2x} = \frac{2x}{x(x^2 - 2)} = \frac{2}{x^2 - 2} = 2(x^2 - 2)^{-1} \quad (x \ne 0)$$
2. **Power Rule combined with Chain Rule:**
   $$y = \sqrt{2}(x^2 - 2)^{-1/2}$$
   $$\frac{d}{dx}[(x^2 - 2)^{-1/2}] = -\frac{1}{2}(x^2 - 2)^{-3/2} \cdot \frac{d}{dx}(x^2 - 2)$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত মূলদ বর্গমূলীয় ফাংশনটি লিখি (Given function)**
$$y = \sqrt{\frac{2x}{x^3 - 2x}}$$

**Step 2: অন্তরীকরণের পূর্বে লব ও হর থেকে সাধারণ উৎপাদক $x$ বর্জন করে সরলীকরণ করি (Simplifying algebraically)**
$$y = \sqrt{\frac{2x}{x(x^2 - 2)}} = \sqrt{\frac{2}{x^2 - 2}} = \sqrt{2} \cdot (x^2 - 2)^{-1/2}$$

**Step 3: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ করি (Differentiating w.r.t. $x$)**
$$\frac{dy}{dx} = \sqrt{2} \cdot \frac{d}{dx}\left[ (x^2 - 2)^{-1/2} \right]$$

**Step 4: শক্তি বিধি ও চেইন রুল প্রয়োগ করি (Applying Power & Chain Rule)**
$$\frac{dy}{dx} = \sqrt{2} \cdot \left[ -\frac{1}{2}(x^2 - 2)^{-\frac{1}{2} - 1} \cdot \frac{d}{dx}(x^2 - 2) \right]$$
$$\frac{dy}{dx} = -\frac{\sqrt{2}}{2}(x^2 - 2)^{-3/2} \cdot (2x)$$

**Step 5: ধ্রুবক ২ কাটাকাটি করে চূড়ান্ত বীজগাণিতিক অন্তরজ পাই (Cancelling factor of 2)**
$$\frac{dy}{dx} = -\frac{\sqrt{2}x}{(x^2 - 2)^{3/2}} = -\frac{\sqrt{2}x}{(x^2 - 2)\sqrt{x^2 - 2}}$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = -\frac{\sqrt{2}x}{(x^2 - 2)^{3/2}}$$
