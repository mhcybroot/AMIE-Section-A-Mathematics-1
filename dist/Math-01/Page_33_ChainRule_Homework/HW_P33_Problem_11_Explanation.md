# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 11 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = (2x^{3/2} - 3x^{4/3} - 5)^{5/2}$$

---

### **Core Mathematical Concept & Formulas:**
1. **Fractional Power Rule & Chain Rule (ভগ্নাংশীয় ঘাত ও চেইন রুল):**
   $$\frac{d}{dx}[u(x)^n] = n[u(x)]^{n-1} \cdot \frac{du}{dx}$$
2. **Fractional Powers Differentiation:**
   $$\frac{d}{dx}(x^{3/2}) = \frac{3}{2}x^{1/2} = \frac{3}{2}\sqrt{x}$$
   $$\frac{d}{dx}(x^{4/3}) = \frac{4}{3}x^{1/3} = \frac{4}{3}\sqrt[3]{x}$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত ভগ্নাংশীয় ঘাতের ফাংশনটি লিখি (Given function)**
$$y = (2x^{3/2} - 3x^{4/3} - 5)^{5/2}$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ করি (Differentiating both sides w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}\left[ (2x^{3/2} - 3x^{4/3} - 5)^{5/2} \right]$$

**Step 3: শক্তি বিধি ও চেইন রুল প্রয়োগ করি (Applying Power & Chain Rule)**
$$\frac{dy}{dx} = \frac{5}{2}(2x^{3/2} - 3x^{4/3} - 5)^{\frac{5}{2} - 1} \cdot \frac{d}{dx}(2x^{3/2} - 3x^{4/3} - 5)$$
$$\frac{dy}{dx} = \frac{5}{2}(2x^{3/2} - 3x^{4/3} - 5)^{3/2} \cdot \frac{d}{dx}(2x^{3/2} - 3x^{4/3} - 5)$$

**Step 4: বন্ধনীর ভেতরের প্রতিটি পদের অন্তরক নির্ণয় করি (Differentiating Inner Terms)**
$$\frac{d}{dx}(2x^{3/2} - 3x^{4/3} - 5) = 2 \cdot \left(\frac{3}{2}x^{\frac{3}{2}-1}\right) - 3 \cdot \left(\frac{4}{3}x^{\frac{4}{3}-1}\right) - 0$$
$$= 3x^{1/2} - 4x^{1/3} = 3\sqrt{x} - 4\sqrt[3]{x}$$

**Step 5: মান বসিয়ে চূড়ান্ত অন্তরজ পাই (Final Factorized Form)**
$$\frac{dy}{dx} = \frac{5}{2}(3x^{1/2} - 4x^{1/3})(2x^{3/2} - 3x^{4/3} - 5)^{3/2}$$
$$= \frac{5}{2}(3\sqrt{x} - 4\sqrt[3]{x})(2x^{3/2} - 3x^{4/3} - 5)^{3/2}$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = \frac{5}{2}(3x^{1/2} - 4x^{1/3})(2x^{3/2} - 3x^{4/3} - 5)^{3/2}$$
