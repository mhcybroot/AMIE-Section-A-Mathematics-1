# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 21 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = \sqrt[3]{\log(\sin x)}$$

---

### **Core Mathematical Concept & Formulas:**
1. **Exponential/Power Representation of Radicals (ঘনমূলের শক্তি আকার):**
   $$y = \left[\log(\sin x)\right]^{1/3}$$

2. **Power Rule Combined with Chain Rule (শক্তি বিধি ও চেইন রুল):**
   $$\frac{d}{dx}[u^n] = n u^{n-1} \cdot \frac{du}{dx}$$
   $$\frac{d}{dx}\left[u^{1/3}\right] = \frac{1}{3} u^{-2/3} \cdot \frac{du}{dx} = \frac{1}{3 u^{2/3}} \cdot \frac{du}{dx}$$

3. **Logarithmic Trigonometric Derivative (ত্রিকোণমিতিক লগ ফাংশনের অন্তরজ):**
   $$\frac{d}{dx}[\log(\sin x)] = \frac{1}{\sin x} \cdot \frac{d}{dx}(\sin x) = \frac{\cos x}{\sin x} = \cot x$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত ঘনমূলীয় যৌগিক ফাংশনটি লিখি (Given function)**
$$y = \sqrt[3]{\log(\sin x)} = [\log(\sin x)]^{1/3}$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর প্রয়োগ করি (Differentiating w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}\left( [\log(\sin x)]^{1/3} \right)$$

**Step 3: শক্তি বিধি অনুসারে বাহ্যিক ঘনমূলের অন্তরজ নির্ণয় করি (Applying Power Rule)**
$$\frac{dy}{dx} = \frac{1}{3} [\log(\sin x)]^{\frac{1}{3} - 1} \cdot \frac{d}{dx}[\log(\sin x)]$$
$$\frac{dy}{dx} = \frac{1}{3} [\log(\sin x)]^{-2/3} \cdot \frac{d}{dx}[\log(\sin x)]$$

**Step 4: চেইন রুল প্রয়োগ করে অভ্যন্তরীণ $\log(\sin x)$-এর অন্তরজ নির্ণয় করি (Differentiating inner composite function)**
$$\frac{d}{dx}[\log(\sin x)] = \frac{1}{\sin x} \cdot \frac{d}{dx}(\sin x) = \frac{1}{\sin x} \cdot \cos x = \cot x$$

**Step 5: মান প্রতিস্থাপন করে চূড়ান্ত বীজগাণিতিক সরল মান পাই (Combining terms)**
$$\frac{dy}{dx} = \frac{1}{3 [\log(\sin x)]^{2/3}} \cdot \cot x = \frac{\cot x}{3 [\log(\sin x)]^{2/3}}$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = \frac{\cot x}{3 [\log(\sin x)]^{2/3}} \quad \left(\text{বা, } \frac{\cot x}{3 \sqrt[3]{\log^2(\sin x)}}\right)$$
