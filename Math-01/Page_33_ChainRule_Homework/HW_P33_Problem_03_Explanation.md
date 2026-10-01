# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 03 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = \sqrt{2x^3 - 1}$$

---

### **Core Mathematical Concept & Formulas:**
1. **Square Root Chain Rule (বর্গমূল ও চেইন রুল):**
   $$\frac{d}{dx}[\sqrt{g(x)}] = \frac{g'(x)}{2\sqrt{g(x)}}$$
2. **Cubic Polynomial Derivative:**
   $$\frac{d}{dx}(2x^3 - 1) = 6x^2$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত বর্গমূল ফাংশনটি লিখি (Given function)**
$$y = \sqrt{2x^3 - 1} = (2x^3 - 1)^{1/2}$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ করি (Differentiating both sides w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}\left[ \sqrt{2x^3 - 1} \right]$$

**Step 3: বর্গমূলের চেইন রুল প্রয়োগ করি (Applying Chain Rule for Square Root)**
$$\frac{dy}{dx} = \frac{1}{2\sqrt{2x^3 - 1}} \cdot \frac{d}{dx}(2x^3 - 1)$$

**Step 4: ভেতরের ত্রিঘাত রাশির অন্তরক নির্ণয় করি (Differentiating Inner Cubic Expression)**
$$\frac{d}{dx}(2x^3 - 1) = 2(3x^2) - 0 = 6x^2$$

**Step 5: মান বসিয়ে ২ দ্বারা কাটাকাটি করে চূড়ান্ত ফল পাই (Cancelling factor of 2)**
$$\frac{dy}{dx} = \frac{1}{2\sqrt{2x^3 - 1}} \times 6x^2 = \frac{3x^2}{\sqrt{2x^3 - 1}}$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = \frac{3x^2}{\sqrt{2x^3 - 1}}$$
