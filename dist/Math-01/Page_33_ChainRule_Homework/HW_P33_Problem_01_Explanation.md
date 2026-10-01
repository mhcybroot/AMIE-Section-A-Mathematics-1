# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 01 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = (5x - 3)^4$$

---

### **Core Mathematical Concept & Formulas:**
1. **Power Rule combined with Chain Rule (শক্তি বিধি ও চেইন রুল):**
   $$\frac{d}{dx}[u(x)^n] = n[u(x)]^{n-1} \cdot \frac{du}{dx}$$
2. **Linear Function Derivative:**
   $$\frac{d}{dx}(ax + b) = a$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত ফাংশনটি লিখি (Given function)**
$$y = (5x - 3)^4$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ করি (Differentiating both sides w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}\left[ (5x - 3)^4 \right]$$

**Step 3: চেইন রুল প্রয়োগ করি (Applying the Chain Rule)**
- ধরি $u = 5x - 3$, ফলে $y = u^4$
- $\frac{dy}{du} = 4u^3$
- $\frac{du}{dx} = \frac{d}{dx}(5x - 3) = 5$

$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = 4(5x - 3)^3 \cdot \frac{d}{dx}(5x - 3)$$

**Step 4: গুণফল নির্ণয় ও চূড়ান্ত সরলীকরণ (Multiplying and simplifying)**
$$\frac{dy}{dx} = 4(5x - 3)^3 \cdot 5 = 20(5x - 3)^3$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = 20(5x - 3)^3$$
