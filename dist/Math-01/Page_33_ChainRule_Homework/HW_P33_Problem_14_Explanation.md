# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 14 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = e^{2x+1} \cdot \sin^3 x$$

---

### **Core Mathematical Concept & Formulas:**
1. **Product Rule of Differentiation (গুণন বিধি):**
   $$\frac{d}{dx}[u \cdot v] = u \frac{dv}{dx} + v \frac{du}{dx}$$
2. **Exponential & Trigonometric Chain Rules:**
   $$\frac{d}{dx}[e^{2x+1}] = 2e^{2x+1}$$
   $$\frac{d}{dx}[\sin^3 x] = 3\sin^2 x \cos x$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত গুণফলীয় ফাংশনটি লিখি (Given function)**
$$y = e^{2x+1} \cdot \sin^3 x$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ করি (Differentiating both sides w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}\left[ e^{2x+1} \cdot \sin^3 x \right]$$

**Step 3: গুণন বিধি বা Product Rule প্রয়োগ করি (Applying Product Rule)**
$$\frac{dy}{dx} = e^{2x+1} \cdot \frac{d}{dx}(\sin^3 x) + \sin^3 x \cdot \frac{d}{dx}(e^{2x+1})$$

**Step 4: প্রতিটি অংশের ওপর চেইন রুল প্রয়োগ করে অন্তরক নির্ণয় করি (Evaluating Derivatives via Chain Rule)**
- $\frac{d}{dx}(\sin^3 x) = 3\sin^2 x \cdot \frac{d}{dx}(\sin x) = 3\sin^2 x \cos x$
- $\frac{d}{dx}(e^{2x+1}) = e^{2x+1} \cdot \frac{d}{dx}(2x + 1) = 2e^{2x+1}$

**Step 5: মান বসিয়ে সাধারণ উৎপাদক $e^{2x+1}\sin^2 x$ কমন নিয়ে চূড়ান্ত অন্তরজ পাই (Factoring and Simplifying)**
$$\frac{dy}{dx} = e^{2x+1}(3\sin^2 x \cos x) + \sin^3 x(2e^{2x+1})$$
$$\frac{dy}{dx} = e^{2x+1}\sin^2 x (3\cos x + 2\sin x)$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = e^{2x+1}\sin^2 x (3\cos x + 2\sin x)$$
