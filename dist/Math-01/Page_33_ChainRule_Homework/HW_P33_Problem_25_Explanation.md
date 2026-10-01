# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 25 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = \frac{\sqrt{1 - \sqrt{x}}}{\sqrt{1 + \sqrt{x}}} = \sqrt{\frac{1 - \sqrt{x}}{1 + \sqrt{x}}}$$

---

### **Core Mathematical Concept & Formulas:**
1. **Unified Radical Representation (সম্মিলিত বর্গমূলীয় রূপ):**
   $$y = \left(\frac{1 - \sqrt{x}}{1 + \sqrt{x}}\right)^{1/2}$$

2. **Power Rule Combined with Quotient Rule & Chain Rule:**
   $$\frac{dy}{dx} = \frac{1}{2}\left(\frac{1 - \sqrt{x}}{1 + \sqrt{x}}\right)^{-1/2} \cdot \frac{d}{dx}\left(\frac{1 - \sqrt{x}}{1 + \sqrt{x}}\right)$$

3. **Quotient Derivative with Square Root Terms:**
   $$\frac{d}{dx}\left(\frac{1 - \sqrt{x}}{1 + \sqrt{x}}\right) = \frac{(1+\sqrt{x})\left(-\frac{1}{2\sqrt{x}}\right) - (1-\sqrt{x})\left(\frac{1}{2\sqrt{x}}\right)}{(1+\sqrt{x})^2} = -\frac{1}{\sqrt{x}(1+\sqrt{x})^2}$$

4. **Algebraic Radical Identity (অনুবন্ধী গুণফল):**
   $$(1 - \sqrt{x})(1 + \sqrt{x}) = 1 - x \implies \sqrt{1 - \sqrt{x}}\sqrt{1 + \sqrt{x}} = \sqrt{1 - x}$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত করণীযুক্ত ভগ্নাংশ ফাংশনটিকে লিখি (Given function)**
$$y = \sqrt{\frac{1 - \sqrt{x}}{1 + \sqrt{x}}} = \left(\frac{1 - \sqrt{x}}{1 + \sqrt{x}}\right)^{1/2}$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর প্রয়োগ করি (Differentiating w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{1}{2}\left(\frac{1 - \sqrt{x}}{1 + \sqrt{x}}\right)^{-1/2} \cdot \frac{d}{dx}\left(\frac{1 - \sqrt{x}}{1 + \sqrt{x}}\right)$$
$$\frac{dy}{dx} = \frac{1}{2}\sqrt{\frac{1 + \sqrt{x}}{1 - \sqrt{x}}} \cdot \frac{d}{dx}\left(\frac{1 - \sqrt{x}}{1 + \sqrt{x}}\right)$$

**Step 3: অভ্যন্তরীণ ভগ্নাংশের উপর ভাগ বিধি প্রয়োগ করি (Applying Quotient Rule to inner fraction)**
$$\frac{d}{dx}\left(\frac{1 - \sqrt{x}}{1 + \sqrt{x}}\right) = \frac{(1 + \sqrt{x})\cdot \frac{d}{dx}(1 - \sqrt{x}) - (1 - \sqrt{x})\cdot \frac{d}{dx}(1 + \sqrt{x})}{(1 + \sqrt{x})^2}$$
$$= \frac{(1 + \sqrt{x})\left(-\frac{1}{2\sqrt{x}}\right) - (1 - \sqrt{x})\left(\frac{1}{2\sqrt{x}}\right)}{(1 + \sqrt{x})^2}$$

**Step 4: সাধারণ গুণনীয়ক $-\frac{1}{2\sqrt{x}}$ কমন নিয়ে লব সরলীকরণ করি (Simplifying numerator)**
$$= \frac{-\frac{1}{2\sqrt{x}}\left[(1 + \sqrt{x}) + (1 - \sqrt{x})\right]}{(1 + \sqrt{x})^2} = \frac{-\frac{1}{2\sqrt{x}}(2)}{(1 + \sqrt{x})^2} = -\frac{1}{\sqrt{x}(1 + \sqrt{x})^2}$$

**Step 5: উভয় উৎপাদক একত্রিত করে অনুবন্ধী সূত্রে চূড়ান্ত রূপ পাই (Combining factors & applying difference of squares)**
$$\frac{dy}{dx} = \frac{1}{2}\frac{\sqrt{1+\sqrt{x}}}{\sqrt{1-\sqrt{x}}} \cdot \left( -\frac{1}{\sqrt{x}(1+\sqrt{x})^2} \right)$$
$$\frac{dy}{dx} = -\frac{1}{2\sqrt{x}\sqrt{1-\sqrt{x}}(1+\sqrt{x})^{3/2}} = -\frac{1}{2\sqrt{x}(1+\sqrt{x})\sqrt{(1-\sqrt{x})(1+\sqrt{x})}}$$
$$\frac{dy}{dx} = -\frac{1}{2\sqrt{x}(1+\sqrt{x})\sqrt{1 - x}}$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = -\frac{1}{2\sqrt{x}(1+\sqrt{x})\sqrt{1 - x}}$$
