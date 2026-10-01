# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 17 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = (3x - 2)(5x + 4)^4$$

---

### **Core Mathematical Concept & Formulas:**
1. **Product Rule of Differentiation (গুণন বিধি):**
   $$\frac{d}{dx}[u \cdot v] = u \frac{dv}{dx} + v \frac{du}{dx}$$
2. **Generalized Power Rule:**
   $$\frac{d}{dx}[(5x + 4)^4] = 4(5x + 4)^3 \cdot 5 = 20(5x + 4)^3$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত গুণফলীয় বহুপদী ফাংশনটি লিখি (Given function)**
$$y = (3x - 2)(5x + 4)^4$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ করি (Differentiating both sides w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}\left[ (3x - 2)(5x + 4)^4 \right] $$

**Step 3: গুণন বিধি বা Product Rule প্রয়োগ করি (Applying Product Rule)**
$$\frac{dy}{dx} = (3x - 2) \cdot \frac{d}{dx}\left[(5x + 4)^4\right] + (5x + 4)^4 \cdot \frac{d}{dx}(3x - 2)$$

**Step 4: প্রতিটি অংশের অন্তরক নির্ণয় করি (Evaluating Derivatives)**
- $\frac{d}{dx}\left[(5x + 4)^4\right] = 4(5x + 4)^3 \cdot 5 = 20(5x + 4)^3$
- $\frac{d}{dx}(3x - 2) = 3$

**Step 5: মান বসিয়ে সাধারণ উৎপাদক $(5x + 4)^3$ কমন নিই ও সরলীকরণ করি (Factoring and Simplifying)**
$$\frac{dy}{dx} = (3x - 2) \cdot 20(5x + 4)^3 + 3(5x + 4)^4$$
$$\frac{dy}{dx} = (5x + 4)^3 \left[ 20(3x - 2) + 3(5x + 4) \right]$$
$$\frac{dy}{dx} = (5x + 4)^3 \left[ 60x - 40 + 15x + 12 \right]$$
$$\frac{dy}{dx} = (75x - 28)(5x + 4)^3$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = (75x - 28)(5x + 4)^3$$
