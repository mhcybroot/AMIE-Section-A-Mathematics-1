# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 18 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = \frac{(4x - 3)^5}{2x - 1}$$

---

### **Core Mathematical Concept & Formulas:**
1. **Quotient Rule of Differentiation (ভাগবিধি):**
   $$\frac{d}{dx}\left[\frac{u}{v}\right] = \frac{v \frac{du}{dx} - u \frac{dv}{dx}}{v^2}$$
2. **Generalized Power Rule:**
   $$\frac{d}{dx}[(4x - 3)^5] = 5(4x - 3)^4 \cdot 4 = 20(4x - 3)^4$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত মূলদ ঘাত ফাংশনটি লিখি (Given function)**
$$y = \frac{(4x - 3)^5}{2x - 1}$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ করি (Differentiating both sides w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}\left[ \frac{(4x - 3)^5}{2x - 1} \right]$$

**Step 3: ভাগবিধি বা Quotient Rule প্রয়োগ করি (Applying Quotient Rule)**
$$\frac{dy}{dx} = \frac{(2x - 1) \cdot \frac{d}{dx}\left[(4x - 3)^5\right] - (4x - 3)^5 \cdot \frac{d}{dx}(2x - 1)}{(2x - 1)^2}$$

**Step 4: লব ও হরের অন্তরক নির্ণয় করি (Evaluating Derivatives)**
- $\frac{d}{dx}\left[(4x - 3)^5\right] = 5(4x - 3)^4 \cdot 4 = 20(4x - 3)^4$
- $\frac{d}{dx}(2x - 1) = 2$

**Step 5: মান বসিয়ে সাধারণ উৎপাদক $2(4x - 3)^4$ কমন নিয়ে সরলীকরণ করি (Factoring and Simplifying)**
$$\frac{dy}{dx} = \frac{(2x - 1) \cdot 20(4x - 3)^4 - 2(4x - 3)^5}{(2x - 1)^2}$$
$$\frac{dy}{dx} = \frac{2(4x - 3)^4 \left[ 10(2x - 1) - (4x - 3) \right]}{(2x - 1)^2}$$
$$\frac{dy}{dx} = \frac{2(4x - 3)^4 (20x - 10 - 4x + 3)}{(2x - 1)^2}$$
$$\frac{dy}{dx} = \frac{2(16x - 7)(4x - 3)^4}{(2x - 1)^2}$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = \frac{2(16x - 7)(4x - 3)^4}{(2x - 1)^2}$$
