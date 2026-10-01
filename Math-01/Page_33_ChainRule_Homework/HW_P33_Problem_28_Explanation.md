# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 28 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = \sin^2 x + \cos^3 x$$

---

### **Core Mathematical Concept & Formulas:**
1. **Sum Rule for Differentiation (যোগ বিধি):**
   $$\frac{d}{dx}[u(x) + v(x)] = \frac{du}{dx} + \frac{dv}{dx}$$

2. **Power Rule Combined with Chain Rule for Trigonometric Powers:**
   $$\frac{d}{dx}[\sin^n x] = n \sin^{n-1} x \cdot \frac{d}{dx}(\sin x) = n \sin^{n-1} x \cos x$$
   $$\frac{d}{dx}[\cos^n x] = n \cos^{n-1} x \cdot \frac{d}{dx}(\cos x) = n \cos^{n-1} x (-\sin x) = -n \sin x \cos^{n-1} x$$

3. **Double-Angle Trigonometric Identity:**
   $$2\sin x\cos x = \sin 2x$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত ত্রিকোণমিতিক যোগফল ফাংশনটি স্পষ্ট ঘাত আকারে লিখি (Given function)**
$$y = (\sin x)^2 + (\cos x)^3$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর প্রয়োগ করি (Differentiating w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}\left[ (\sin x)^2 \right] + \frac{d}{dx}\left[ (\cos x)^3 \right]$$

**Step 3: প্রথম পদ $(\sin x)^2$-এর উপর শক্তি বিধি ও চেইন রুল প্রয়োগ করি (Differentiating first term)**
$$\frac{d}{dx}\left[ (\sin x)^2 \right] = 2\sin x \cdot \frac{d}{dx}(\sin x) = 2\sin x \cos x = \sin 2x$$

**Step 4: দ্বিতীয় পদ $(\cos x)^3$-এর উপর শক্তি বিধি ও চেইন রুল প্রয়োগ করি (Differentiating second term)**
$$\frac{d}{dx}\left[ (\cos x)^3 \right] = 3\cos^2 x \cdot \frac{d}{dx}(\cos x) = 3\cos^2 x (-\sin x) = -3\sin x \cos^2 x$$

**Step 5: পদ দুটি একত্রিত করে চূড়ান্ত অন্তরজ পাই (Combining both derivative terms)**
$$\frac{dy}{dx} = 2\sin x\cos x - 3\sin x\cos^2 x = \sin 2x - 3\sin x\cos^2 x = \sin x\cos x(2 - 3\cos x)$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = 2\sin x\cos x - 3\sin x\cos^2 x \quad \left(\text{বা, } \sin 2x - 3\sin x\cos^2 x\right)$$
