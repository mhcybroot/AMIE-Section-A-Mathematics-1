# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Explicit and Implicit Functions (Page 34)
### Problem 03 Detailed Explanation

---

### **Problem Statement:**
Find $\frac{dy}{dx}$ from the given multi-composite quotient function:
$$y = \frac{e^{x^2} \tan^{-1} x}{\sqrt{1 + x^2}}$$

---

### **Core Mathematical Concept & Formulas:**
1. **Logarithmic Transformation of Rational Products (লগারিদমের রূপান্তর বিধি):**
   $$\log\left(\frac{u \cdot v}{w}\right) = \log u + \log v - \log w$$
   $$\log(e^{x^2}) = x^2, \quad \log(\sqrt{1 + x^2}) = \frac{1}{2}\log(1 + x^2)$$

2. **Standard Inverse Trigonometric Derivative:**
   $$\frac{d}{dx}(\tan^{-1} x) = \frac{1}{1 + x^2}$$

3. **Composite Logarithmic Derivatives:**
   $$\frac{d}{dx}[\log(\tan^{-1} x)] = \frac{1}{\tan^{-1} x} \cdot \frac{1}{1 + x^2} = \frac{1}{(1 + x^2)\tan^{-1} x}$$
   $$\frac{d}{dx}\left[\frac{1}{2}\log(1 + x^2)\right] = \frac{1}{2} \cdot \frac{2x}{1 + x^2} = \frac{x}{1 + x^2}$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত জটিল ভগ্নাংশ ফাংশনটি লিখি (Given function)**
$$y = \frac{e^{x^2} \tan^{-1} x}{\sqrt{1 + x^2}}$$

**Step 2: উভয়পক্ষে স্বাভাবিক লগারিদম ($\log$) গ্রহণ করে সরল আকারে বিশ্লেষণ করি (Taking natural log on both sides)**
$$\log y = \log\left( \frac{e^{x^2} \tan^{-1} x}{\sqrt{1 + x^2}} \right)$$
$$\log y = \log(e^{x^2}) + \log(\tan^{-1} x) - \log(\sqrt{1 + x^2})$$
$$\log y = x^2 + \log(\tan^{-1} x) - \frac{1}{2}\log(1 + x^2)$$

**Step 3: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর প্রয়োগ করি (Differentiating w.r.t. $x$)**
$$\frac{1}{y}\frac{dy}{dx} = \frac{d}{dx}(x^2) + \frac{d}{dx}\left[\log(\tan^{-1} x)\right] - \frac{1}{2}\frac{d}{dx}\left[\log(1 + x^2)\right]$$

**Step 4: চেইন রুল প্রয়োগ করে প্রতিটি অংশের পৃথক অন্তরজ নির্ণয় করি (Applying Chain Rule to each component)**
$$\frac{1}{y}\frac{dy}{dx} = 2x + \frac{1}{\tan^{-1} x}\cdot \frac{d}{dx}(\tan^{-1} x) - \frac{1}{2}\cdot \frac{1}{1 + x^2}\cdot \frac{d}{dx}(1 + x^2)$$
$$\frac{1}{y}\frac{dy}{dx} = 2x + \frac{1}{\tan^{-1} x}\cdot \frac{1}{1 + x^2} - \frac{1}{2(1 + x^2)}\cdot (2x)$$
$$\frac{1}{y}\frac{dy}{dx} = 2x + \frac{1}{(1 + x^2)\tan^{-1} x} - \frac{x}{1 + x^2}$$

**Step 5: $y$-এর মূল মান প্রতিস্থাপন করে চূড়ান্ত অন্তরজ পাই (Multiplying by $y$ to get $\frac{dy}{dx}$)**
$$\frac{dy}{dx} = y \left[ 2x + \frac{1}{(1 + x^2)\tan^{-1} x} - \frac{x}{1 + x^2} \right]$$
$$\frac{dy}{dx} = \frac{e^{x^2} \tan^{-1} x}{\sqrt{1 + x^2}} \left[ 2x + \frac{1}{(1 + x^2)\tan^{-1} x} - \frac{x}{1 + x^2} \right]$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = \frac{e^{x^2} \tan^{-1} x}{\sqrt{1 + x^2}} \left( 2x + \frac{1}{(1 + x^2)\tan^{-1} x} - \frac{x}{1 + x^2} \right)$$
