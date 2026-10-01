# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 23 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = \sin^2(x^2)$$

---

### **Core Mathematical Concept & Formulas:**
1. **Trigonometric Power Notation (ত্রিকোণমিতিক সূচকীয় আকার):**
   $$y = [\sin(x^2)]^2$$

2. **Power Rule Combined with Multi-layer Chain Rule:**
   $$\frac{d}{dx}[u^2] = 2u \cdot \frac{du}{dx}$$

3. **Sine Derivative & Polynomial Derivative:**
   $$\frac{d}{dx}[\sin(x^2)] = \cos(x^2) \cdot \frac{d}{dx}(x^2) = \cos(x^2) \cdot 2x$$

4. **Trigonometric Double-Angle Identity (দ্বিগুণ কোণের সূত্র):**
   $$2\sin\theta\cos\theta = \sin(2\theta) \implies 2\sin(x^2)\cos(x^2) = \sin(2x^2)$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত যৌগিক ত্রিকোণমিতিক ফাংশনটি স্পষ্ট সূচকীয় আকারে লিখি (Given function)**
$$y = \sin^2(x^2) = \left[\sin(x^2)\right]^2$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর প্রয়োগ করি (Differentiating w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}\left( \left[\sin(x^2)\right]^2 \right)$$

**Step 3: বহিস্থ ঘাত ২-এর জন্য শক্তি বিধি প্রয়োগ করি (Applying Power Rule)**
$$\frac{dy}{dx} = 2\left[\sin(x^2)\right]^{2-1} \cdot \frac{d}{dx}\left[\sin(x^2)\right] = 2\sin(x^2) \cdot \frac{d}{dx}\left[\sin(x^2)\right]$$

**Step 4: সাইন ফাংশন ও অভ্যন্তরীণ চলক $x^2$-এর উপর চেইন রুল প্রয়োগ করি (Differentiating inner sine & quadratic angle)**
$$\frac{d}{dx}\left[\sin(x^2)\right] = \cos(x^2) \cdot \frac{d}{dx}(x^2) = \cos(x^2) \cdot 2x = 2x\cos(x^2)$$

**Step 5: মান প্রতিস্থাপন ও ত্রিকোণমিতিক সূত্র প্রয়োগ করে চূড়ান্ত রূপ পাই (Simplifying and applying double-angle identity)**
$$\frac{dy}{dx} = 2\sin(x^2) \cdot \left[2x\cos(x^2)\right] = 4x\sin(x^2)\cos(x^2)$$
$$\frac{dy}{dx} = 2x \cdot \left[2\sin(x^2)\cos(x^2)\right] = 2x\sin(2x^2)$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = 4x\sin(x^2)\cos(x^2) \quad \left(\text{বা, } 2x\sin(2x^2)\right)$$
