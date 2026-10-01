# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 08 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = \sin\{\cos(\log x^3)\}$$

---

### **Core Mathematical Concept & Formulas:**
1. **Multi-layer Chain Rule (বহুস্তরীয় শৃঙ্খল বিধি):**
   $$\frac{d}{dx}[f(g(h(x)))] = f'(g(h(x))) \cdot g'(h(x)) \cdot h'(x)$$
2. **Logarithmic Differentiation:**
   $$\frac{d}{dx}[\log(x^3)] = \frac{d}{dx}[3\log x] = \frac{3}{x}$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত ত্রিস্তরীয় সংযোজিত ফাংশনটি লিখি (Given Function)**
$$y = \sin\{\cos(\log x^3)\}$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ করি (Differentiating w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}\left[ \sin\{\cos(\log x^3)\} \right]$$

**Step 3: প্রথম স্তর (বহিঃস্থ সাইন ফাংশন) চেইন রুল প্রয়োগ (Layer 1: Sine Function)**
$$\frac{dy}{dx} = \cos\{\cos(\log x^3)\} \cdot \frac{d}{dx}\left[ \cos(\log x^3) \right]$$

**Step 4: দ্বিতীয় স্তর (কোসাইন ফাংশন) চেইন রুল প্রয়োগ (Layer 2: Cosine Function)**
$$\frac{d}{dx}\left[ \cos(\log x^3) \right] = -\sin(\log x^3) \cdot \frac{d}{dx}(\log x^3)$$

**Step 5: তৃতীয় স্তর (লগারিদমিক ও ঘাত ফাংশন) অন্তরক নির্ণয় (Layer 3: Logarithm)**
$$\frac{d}{dx}(\log x^3) = \frac{1}{x^3} \cdot \frac{d}{dx}(x^3) = \frac{1}{x^3} \cdot 3x^2 = \frac{3}{x}$$

**Step 6: সকল স্তরের অন্তরজগুলো একত্রিত করে চূড়ান্ত মান পাই (Combining all layers)**
$$\frac{dy}{dx} = \cos\{\cos(\log x^3)\} \cdot \left[-\sin(\log x^3)\right] \cdot \left(\frac{3}{x}\right)$$
$$\frac{dy}{dx} = -\frac{3}{x}\sin(\log x^3)\cos\{\cos(\log x^3)\}$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = -\frac{3}{x}\sin(\log x^3)\cos\{\cos(\log x^3)\}$$
