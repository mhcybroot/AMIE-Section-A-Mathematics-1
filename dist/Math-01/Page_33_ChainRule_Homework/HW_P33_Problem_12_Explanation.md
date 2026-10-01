# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 12 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = \sqrt{x^2 + \sqrt{x^2 + 1}}$$

---

### **Core Mathematical Concept & Formulas:**
1. **Square Root Chain Rule (নেস্টেড বর্গমূল চেইন রুল):**
   $$\frac{d}{dx}[\sqrt{g(x)}] = \frac{g'(x)}{2\sqrt{g(x)}}$$
2. **Inner Radical Derivative:**
   $$\frac{d}{dx}\left(x^2 + \sqrt{x^2 + 1}\right) = 2x + \frac{2x}{2\sqrt{x^2 + 1}} = 2x + \frac{x}{\sqrt{x^2 + 1}} = \frac{x(2\sqrt{x^2 + 1} + 1)}{\sqrt{x^2 + 1}}$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত দ্বিস্তরীয় বর্গমূল ফাংশনটি লিখি (Given function)**
$$y = \sqrt{x^2 + \sqrt{x^2 + 1}}$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ করি (Differentiating w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}\left[ \sqrt{x^2 + \sqrt{x^2 + 1}} \right]$$

**Step 3: বহিঃস্থ বর্গমূলে চেইন রুল প্রয়োগ করি (Outer Square Root Derivative)**
$$\frac{dy}{dx} = \frac{1}{2\sqrt{x^2 + \sqrt{x^2 + 1}}} \cdot \frac{d}{dx}\left( x^2 + \sqrt{x^2 + 1} \right)$$

**Step 4: অভ্যন্তরীণ অংশের অন্তরক নির্ণয় করি (Inner Derivative)**
$$\frac{d}{dx}\left( x^2 + \sqrt{x^2 + 1} \right) = \frac{d}{dx}(x^2) + \frac{d}{dx}\left(\sqrt{x^2 + 1}\right)$$
$$= 2x + \frac{1}{2\sqrt{x^2 + 1}} \cdot \frac{d}{dx}(x^2 + 1)$$
$$= 2x + \frac{2x}{2\sqrt{x^2 + 1}} = 2x + \frac{x}{\sqrt{x^2 + 1}}$$
$$= \frac{2x\sqrt{x^2 + 1} + x}{\sqrt{x^2 + 1}} = \frac{x(2\sqrt{x^2 + 1} + 1)}{\sqrt{x^2 + 1}}$$

**Step 5: মানগুলো গুণ করে চূড়ান্ত অন্তরজ পাই (Final Combined Form)**
$$\frac{dy}{dx} = \frac{1}{2\sqrt{x^2 + \sqrt{x^2 + 1}}} \cdot \frac{x(2\sqrt{x^2 + 1} + 1)}{\sqrt{x^2 + 1}}$$
$$\frac{dy}{dx} = \frac{x(2\sqrt{x^2 + 1} + 1)}{2\sqrt{x^2 + 1}\sqrt{x^2 + \sqrt{x^2 + 1}}}$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = \frac{x(2\sqrt{x^2 + 1} + 1)}{2\sqrt{x^2 + 1}\sqrt{x^2 + \sqrt{x^2 + 1}}}$$
