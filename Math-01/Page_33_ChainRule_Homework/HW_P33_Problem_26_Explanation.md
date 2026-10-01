# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 26 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = \sqrt{e^x + 1}$$

---

### **Core Mathematical Concept & Formulas:**
1. **Radical of Exponential Function (সূচকীয় রাশির বর্গমূল):**
   $$y = (e^x + 1)^{1/2}$$

2. **Power Rule Combined with Chain Rule:**
   $$\frac{d}{dx}\left[u^{1/2}\right] = \frac{1}{2} u^{-1/2} \cdot \frac{du}{dx} = \frac{1}{2\sqrt{u}} \cdot \frac{du}{dx}$$

3. **Standard Exponential Derivative:**
   $$\frac{d}{dx}(e^x + 1) = e^x + 0 = e^x$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত সূচকীয় বর্গমূল ফাংশনটি লিখি (Given function)**
$$y = \sqrt{e^x + 1} = (e^x + 1)^{1/2}$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর প্রয়োগ করি (Differentiating w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}\left[ (e^x + 1)^{1/2} \right]$$

**Step 3: বহিস্থ সূচকের উপর শক্তি বিধি (Power Rule) প্রয়োগ করি (Applying Power Rule)**
$$\frac{dy}{dx} = \frac{1}{2}(e^x + 1)^{\frac{1}{2} - 1} \cdot \frac{d}{dx}(e^x + 1) = \frac{1}{2}(e^x + 1)^{-1/2} \cdot \frac{d}{dx}(e^x + 1)$$

**Step 4: অভ্যন্তরীণ সূচকীয় পদের অন্তরজ নির্ণয় করি (Differentiating inner exponential term)**
$$\frac{d}{dx}(e^x + 1) = \frac{d}{dx}(e^x) + \frac{d}{dx}(1) = e^x + 0 = e^x$$

**Step 5: মান প্রতিস্থাপন করে চূড়ান্ত সরল ভগ্নাংশ পাই (Combining into final expression)**
$$\frac{dy}{dx} = \frac{1}{2\sqrt{e^x + 1}} \cdot e^x = \frac{e^x}{2\sqrt{e^x + 1}}$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = \frac{e^x}{2\sqrt{e^x + 1}}$$
