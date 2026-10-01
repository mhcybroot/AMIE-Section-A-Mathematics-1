# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Problem 22 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = e^{\sqrt{x}} \cdot \sqrt{x^2 - 1}$$

---

### **Core Mathematical Concept & Formulas:**
1. **Product Rule of Differentiation (গুণন বিধি):**
   $$\frac{d}{dx}[u \cdot v] = u \frac{dv}{dx} + v \frac{du}{dx}$$
2. **Exponential & Chain Rule:**
   $$\frac{d}{dx}[e^{\sqrt{x}}] = e^{\sqrt{x}} \cdot \frac{d}{dx}(\sqrt{x}) = e^{\sqrt{x}} \cdot \frac{1}{2\sqrt{x}} = \frac{e^{\sqrt{x}}}{2\sqrt{x}}$$
3. **Power & Chain Rule:**
   $$\frac{d}{dx}[\sqrt{x^2 - 1}] = \frac{1}{2\sqrt{x^2 - 1}} \cdot \frac{d}{dx}(x^2 - 1) = \frac{2x}{2\sqrt{x^2 - 1}} = \frac{x}{\sqrt{x^2 - 1}}$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত ফাংশনটি লিখি (Given function)**
$$y = e^{\sqrt{x}} \cdot \sqrt{x^2 - 1}$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ করি (Differentiating both sides w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}\left[ e^{\sqrt{x}} \cdot \sqrt{x^2 - 1} \right]$$

**Step 3: Product Rule প্রয়োগ করি (Applying the Product Rule)**
$$\frac{dy}{dx} = e^{\sqrt{x}} \cdot \frac{d}{dx}(\sqrt{x^2 - 1}) + \sqrt{x^2 - 1} \cdot \frac{d}{dx}(e^{\sqrt{x}})$$

**Step 4: প্রতিটি অংশের অন্তরক সহগ নির্ণয় (Evaluating individual derivatives)**
- $\frac{d}{dx}(\sqrt{x^2 - 1}) = \frac{1}{2\sqrt{x^2 - 1}} \cdot \frac{d}{dx}(x^2 - 1) = \frac{2x}{2\sqrt{x^2 - 1}} = \frac{x}{\sqrt{x^2 - 1}}$
- $\frac{d}{dx}(e^{\sqrt{x}}) = e^{\sqrt{x}} \cdot \frac{d}{dx}(\sqrt{x}) = e^{\sqrt{x}} \cdot \frac{1}{2\sqrt{x}} = \frac{e^{\sqrt{x}}}{2\sqrt{x}}$

**Step 5: মানগুলো মূল রাশিতে বসিয়ে সরলীকরণ (Substituting and factoring out $e^{\sqrt{x}}$)**
$$\frac{dy}{dx} = e^{\sqrt{x}} \left( \frac{x}{\sqrt{x^2 - 1}} \right) + \sqrt{x^2 - 1} \left( \frac{e^{\sqrt{x}}}{2\sqrt{x}} \right)$$
$$\frac{dy}{dx} = e^{\sqrt{x}} \left[ \frac{x}{\sqrt{x^2 - 1}} + \frac{\sqrt{x^2 - 1}}{2\sqrt{x}} \right]$$

**বিকল্প সরলীকৃত রূপ (Alternative Combined Algebraic Form):**
$$\frac{dy}{dx} = e^{\sqrt{x}} \left[ \frac{2x\sqrt{x} + (x^2 - 1)}{2\sqrt{x}\sqrt{x^2 - 1}} \right] = \frac{e^{\sqrt{x}}(2x^{3/2} + x^2 - 1)}{2\sqrt{x(x^2 - 1)}}$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = e^{\sqrt{x}}\left( \frac{x}{\sqrt{x^2 - 1}} + \frac{\sqrt{x^2 - 1}}{2\sqrt{x}} \right)$$
