# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 15 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = (1 + \cos 2x)^2$$

---

### **Core Mathematical Concept & Formulas:**
1. **Power Rule with Chain Rule (শক্তি বিধি ও চেইন রুল):**
   $$\frac{d}{dx}[u(x)^n] = n[u(x)]^{n-1} \cdot \frac{du}{dx}$$
2. **Cosine Derivative Rule:**
   $$\frac{d}{dx}[\cos(2x)] = -2\sin 2x$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত ত্রিকোণমিতিক ঘাত ফাংশনটি লিখি (Given function)**
$$y = (1 + \cos 2x)^2$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ করি (Differentiating both sides w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}\left[ (1 + \cos 2x)^2 \right]$$

**Step 3: শক্তি বিধি ও চেইন রুল প্রয়োগ করি (Applying Power & Chain Rule)**
$$\frac{dy}{dx} = 2(1 + \cos 2x)^{2 - 1} \cdot \frac{d}{dx}(1 + \cos 2x)$$
$$\frac{dy}{dx} = 2(1 + \cos 2x) \cdot \frac{d}{dx}(1 + \cos 2x)$$

**Step 4: বন্ধনীর ভেতরের অংশের অন্তরক নির্ণয় করি (Differentiating Inner Expression)**
$$\frac{d}{dx}(1 + \cos 2x) = 0 - \sin 2x \cdot \frac{d}{dx}(2x) = -2\sin 2x$$

**Step 5: মান বসিয়ে ধ্রুবক গুণ করে চূড়ান্ত অন্তরজ পাই (Multiplying and Simplifying)**
$$\frac{dy}{dx} = 2(1 + \cos 2x) \cdot (-2\sin 2x) = -4\sin 2x (1 + \cos 2x)$$

**বিকল্প ত্রিকোণমিতিক সরল রূপ (Alternative Trigonometric Form):**
$$1 + \cos 2x = 2\cos^2 x \implies \frac{dy}{dx} = -4\sin 2x (2\cos^2 x) = -8\sin 2x \cos^2 x = -16\sin x \cos^3 x$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = -4\sin 2x(1 + \cos 2x)$$
