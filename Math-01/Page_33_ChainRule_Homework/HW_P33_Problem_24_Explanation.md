# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 24 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = \frac{\cos^2 x}{\cos(x^2)}$$

---

### **Core Mathematical Concept & Formulas:**
1. **Quotient Rule for Differentiation (ভাগ বিধি):**
   $$\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v \frac{du}{dx} - u \frac{dv}{dx}}{v^2}$$

2. **Derivative of Numerator $u = \cos^2 x = (\cos x)^2$ via Power & Chain Rule:**
   $$\frac{du}{dx} = 2\cos x \cdot \frac{d}{dx}(\cos x) = 2\cos x(-\sin x) = -2\sin x\cos x = -\sin 2x$$

3. **Derivative of Denominator $v = \cos(x^2)$ via Chain Rule:**
   $$\frac{dv}{dx} = -\sin(x^2) \cdot \frac{d}{dx}(x^2) = -\sin(x^2) \cdot (2x) = -2x\sin(x^2)$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত ত্রিকোণমিতিক ভগ্নাংশ ফাংশনটি লিখি (Given function)**
$$y = \frac{\cos^2 x}{\cos(x^2)}$$

**Step 2: ভাগ বিধি (Quotient Rule) অনুসারে সূত্র স্থাপন করি (Setting up Quotient Rule)**
$$\frac{dy}{dx} = \frac{\cos(x^2)\cdot \frac{d}{dx}(\cos^2 x) - \cos^2 x \cdot \frac{d}{dx}\left[\cos(x^2)\right]}{\left[\cos(x^2)\right]^2}$$

**Step 3: লবের পদ $u = \cos^2 x$-এর অন্তরজ নির্ণয় করি (Differentiating numerator)**
$$\frac{d}{dx}(\cos^2 x) = 2\cos x \cdot (-\sin x) = -2\sin x\cos x = -\sin 2x$$

**Step 4: হরের পদ $v = \cos(x^2)$-এর অন্তরজ নির্ণয় করি (Differentiating denominator)**
$$\frac{d}{dx}\left[\cos(x^2)\right] = -\sin(x^2)\cdot \frac{d}{dx}(x^2) = -2x\sin(x^2)$$

**Step 5: অন্তরজগুলির মান সূত্রে বসিয়ে চূড়ান্ত বীজগণিতীয় সরলীকরণ করি (Combining into final expression)**
$$\frac{dy}{dx} = \frac{\cos(x^2)\left[-2\sin x\cos x\right] - \cos^2 x\left[-2x\sin(x^2)\right]}{\cos^2(x^2)}$$
$$\frac{dy}{dx} = \frac{2x\cos^2 x\sin(x^2) - 2\sin x\cos x\cos(x^2)}{\cos^2(x^2)}$$
$$\frac{dy}{dx} = \frac{2x\cos^2 x\sin(x^2) - \sin 2x\cos(x^2)}{\cos^2(x^2)}$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = \frac{2x\cos^2 x\sin(x^2) - \sin 2x\cos(x^2)}{\cos^2(x^2)}$$
