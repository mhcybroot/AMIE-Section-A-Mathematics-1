# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Explicit and Implicit Functions (Page 34)
### Problem 02 Detailed Explanation

---

### **Problem Statement:**
Find $\frac{dy}{dx}$ from the given product function:
$$y = e^{\sin x} \sin(a^x)$$

---

### **Core Mathematical Concept & Formulas:**
1. **Logarithmic Differentiation (লগারিদমীয় অন্তরীকরণ):**
   $$\log(u \cdot v) = \log u + \log v, \quad \log(e^{\sin x}) = \sin x$$

2. **Derivative of Exponential $a^x$ with Base $a$:**
   $$\frac{d}{dx}(a^x) = a^x \ln a = a^x \log a$$

3. **Chain Rule on Trigonometric Composite Function:**
   $$\frac{d}{dx}[\sin(a^x)] = \cos(a^x) \cdot \frac{d}{dx}(a^x) = a^x \log a \cos(a^x)$$

4. **Trigonometric Ratio:**
   $$\frac{\cos(a^x)}{\sin(a^x)} = \cot(a^x)$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত সূচকীয়-ত্রিকোণমিতিক গুণফল ফাংশনটি লিখি (Given function)**
$$y = e^{\sin x} \sin(a^x)$$

**Step 2: উভয়পক্ষে স্বাভাবিক লগারিদম ($\log$) গ্রহণ করি (Taking natural logarithm on both sides)**
$$\log y = \log\left[ e^{\sin x} \cdot \sin(a^x) \right]$$
$$\log y = \log(e^{\sin x}) + \log\left(\sin(a^x)\right) = \sin x + \log\left(\sin(a^x)\right)$$

**Step 3: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর প্রয়োগ করি (Differentiating w.r.t. $x$)**
$$\frac{1}{y}\frac{dy}{dx} = \frac{d}{dx}(\sin x) + \frac{d}{dx}\left[ \log\left(\sin(a^x)\right) \right]$$

**Step 4: চেইন রুল প্রয়োগ করে প্রতিটি অংশের অন্তরজ নির্ণয় করি (Applying Chain Rule to each term)**
$$\frac{1}{y}\frac{dy}{dx} = \cos x + \frac{1}{\sin(a^x)} \cdot \frac{d}{dx}\left[\sin(a^x)\right]$$
$$\frac{1}{y}\frac{dy}{dx} = \cos x + \frac{1}{\sin(a^x)} \cdot \cos(a^x) \cdot \frac{d}{dx}(a^x)$$
$$\frac{1}{y}\frac{dy}{dx} = \cos x + \cot(a^x) \cdot \left(a^x \log a\right) = \cos x + a^x \cot(a^x)\log a$$

**Step 5: $y$-এর মান দ্বারা গুণ করে চূড়ান্ত অন্তরজ পাই (Multiplying by $y$ to obtain $\frac{dy}{dx}$)**
$$\frac{dy}{dx} = y\left[ \cos x + a^x \cot(a^x)\log a \right]$$
$$\frac{dy}{dx} = e^{\sin x}\sin(a^x)\left[ \cos x + a^x \cot(a^x)\log a \right]$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = e^{\sin x}\sin(a^x)\left( \cos x + a^x \cot(a^x)\log a \right)$$
