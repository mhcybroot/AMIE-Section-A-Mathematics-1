# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 20 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = \log\left(\frac{x+1}{x-1}\right)$$

---

### **Core Mathematical Concept & Formulas:**
1. **Logarithmic Quotient Property (লগারিদমের ভাগ বিধি):**
   $$\log\left(\frac{u}{v}\right) = \log u - \log v \quad (u > 0, v > 0)$$
   অন্তরীকরণের পূর্বে লগারিদমের এই বিধি প্রয়োগ করলে জটিল ভগ্নাংশের অন্তরীকরণ সরল বিয়োগফলে রূপান্তরিত হয়।

2. **Standard Logarithmic Derivative with Chain Rule:**
   $$\frac{d}{dx}[\log(ax + b)] = \frac{1}{ax + b} \cdot \frac{d}{dx}(ax + b) = \frac{a}{ax + b}$$

3. **Algebraic Subtraction & Factorization:**
   $$\frac{1}{x+1} - \frac{1}{x-1} = \frac{(x-1) - (x+1)}{(x+1)(x-1)} = \frac{-2}{x^2 - 1} = -\frac{2}{x^2 - 1}$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত লগারিদমীয় ফাংশনটি লিখি (Given function)**
$$y = \log\left(\frac{x+1}{x-1}\right)$$

**Step 2: লগারিদমের ভাগ সূত্র প্রয়োগ করে সরলীকরণ করি (Applying Logarithmic Quotient Law)**
$$y = \log(x+1) - \log(x-1)$$

**Step 3: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ করি (Differentiating w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}[\log(x+1)] - \frac{d}{dx}[\log(x-1)]$$

**Step 4: চেইন রুল প্রয়োগ করি (Applying Chain Rule to each term)**
$$\frac{dy}{dx} = \frac{1}{x+1} \cdot \frac{d}{dx}(x+1) - \frac{1}{x-1} \cdot \frac{d}{dx}(x-1)$$
$$\frac{dy}{dx} = \frac{1}{x+1}(1) - \frac{1}{x-1}(1) = \frac{1}{x+1} - \frac{1}{x-1}$$

**Step 5: লসাগু নিয়ে বীজগাণিতিক সরলীকরণ করি (Simplifying by common denominator)**
$$\frac{dy}{dx} = \frac{(x-1) - (x+1)}{(x+1)(x-1)} = \frac{x - 1 - x - 1}{x^2 - 1} = \frac{-2}{x^2 - 1}$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = -\frac{2}{x^2 - 1} \quad \left(\text{বা, } \frac{2}{1 - x^2}\right)$$
