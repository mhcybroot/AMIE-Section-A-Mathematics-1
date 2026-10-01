# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 27 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = \sin^3(2x + 3)$$

---

### **Core Mathematical Concept & Formulas:**
1. **Explicit Power Form (সূচকীয় আকার):**
   $$y = [\sin(2x + 3)]^3$$

2. **Power Rule Combined with Multi-tier Chain Rule:**
   $$\frac{d}{dx}[u^3] = 3u^2 \cdot \frac{du}{dx}$$

3. **Trigonometric Derivative & Linear Argument Derivative:**
   $$\frac{d}{dx}[\sin(ax + b)] = \cos(ax + b) \cdot \frac{d}{dx}(ax + b) = a\cos(ax + b)$$

4. **Double-Angle Trigonometric Identity (দ্বিকোণ সূত্র):**
   $$2\sin\theta\cos\theta = \sin(2\theta) \implies 2\sin(2x+3)\cos(2x+3) = \sin(4x+6)$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত ঘনকীয় ত্রিকোণমিতিক ফাংশনটি লিখি (Given function)**
$$y = \sin^3(2x + 3) = [\sin(2x + 3)]^3$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর প্রয়োগ করি (Differentiating w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}\left( [\sin(2x + 3)]^3 \right)$$

**Step 3: বহিস্থ ঘাত ৩-এর জন্য শক্তি বিধি (Power Rule) প্রয়োগ করি (Applying Power Rule)**
$$\frac{dy}{dx} = 3[\sin(2x + 3)]^{3-1} \cdot \frac{d}{dx}[\sin(2x + 3)] = 3\sin^2(2x + 3) \cdot \frac{d}{dx}[\sin(2x + 3)]$$

**Step 4: সাইন ফাংশন ও রৈখিক কোণ $(2x+3)$-এর অন্তরজ নির্ণয় করি (Differentiating Sine & Linear Angle)**
$$\frac{d}{dx}[\sin(2x + 3)] = \cos(2x + 3) \cdot \frac{d}{dx}(2x + 3) = \cos(2x + 3) \cdot (2) = 2\cos(2x + 3)$$

**Step 5: মান প্রতিস্থাপন করে চূড়ান্ত বীজগাণিতিক গুণফল পাই (Combining all factors)**
$$\frac{dy}{dx} = 3\sin^2(2x + 3) \cdot [2\cos(2x + 3)] = 6\sin^2(2x + 3)\cos(2x + 3)$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = 6\sin^2(2x + 3)\cos(2x + 3) \quad \left(\text{বা, } 3\sin(2x + 3)\sin(4x + 6)\right)$$
