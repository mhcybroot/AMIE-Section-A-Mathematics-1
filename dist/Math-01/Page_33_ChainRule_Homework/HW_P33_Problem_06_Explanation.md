# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 06 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = \sin^3 x$$

---

### **Core Mathematical Concept & Formulas:**
1. **Power Rule on Trigonometric Function (ঘাত ও চেইন রুল):**
   $$\frac{d}{dx}[u(x)^n] = n[u(x)]^{n-1} \cdot \frac{du}{dx}$$
2. **Basic Sine Derivative:**
   $$\frac{d}{dx}(\sin x) = \cos x$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত ত্রিকোণমিতিক ঘাত ফাংশনটি লিখি (Given function)**
$$y = \sin^3 x = (\sin x)^3$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ করি (Differentiating both sides w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}\left[ (\sin x)^3 \right]$$

**Step 3: শক্তি বিধি ও চেইন রুল প্রয়োগ করি (Applying Power & Chain Rule)**
$$\frac{dy}{dx} = 3(\sin x)^{3 - 1} \cdot \frac{d}{dx}(\sin x) = 3\sin^2 x \cdot \frac{d}{dx}(\sin x)$$

**Step 4: অভ্যন্তরীণ সাইন ফাংশনের অন্তরক নির্ণয় করি (Differentiating Inner Sine Function)**
$$\frac{d}{dx}(\sin x) = \cos x$$

**Step 5: মান বসিয়ে চূড়ান্ত অন্তরজ পাই (Final Simplification)**
$$\frac{dy}{dx} = 3\sin^2 x \cos x$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = 3\sin^2 x \cos x$$
