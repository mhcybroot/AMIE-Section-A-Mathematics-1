# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 29 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = \log\left(\cos(e^{3x})\right)$$

---

### **Core Mathematical Concept & Formulas:**
1. **Multi-layer Composite Function (ত্রি-স্তর যৌগিক ফাংশন):**
   $$y = f(g(h(x)))$$
   where $f(u) = \log u$, $g(v) = \cos v$, and $h(x) = e^{3x}$.

2. **Standard Logarithmic Derivative:**
   $$\frac{d}{du}[\log u] = \frac{1}{u}$$

3. **Cosine Trigonometric Derivative:**
   $$\frac{d}{dv}[\cos v] = -\sin v$$

4. **Exponential Chain Derivative:**
   $$\frac{d}{dx}[e^{ax}] = a e^{ax} \implies \frac{d}{dx}[e^{3x}] = 3e^{3x}$$

5. **Trigonometric Ratio Identity:**
   $$\frac{-\sin\theta}{\cos\theta} = -\tan\theta \implies \frac{-\sin(e^{3x})}{\cos(e^{3x})} = -\tan(e^{3x})$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত ত্রি-স্তরীয় লগারিদমীয়-ত্রিকোণমিতিক ফাংশনটি লিখি (Given function)**
$$y = \log\left(\cos(e^{3x})\right)$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর প্রয়োগ করি (Differentiating w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}\left[ \log\left(\cos(e^{3x})\right) \right]$$

**Step 3: সর্ববহিঃস্থ লগারিদমীয় ফাংশনের উপর চেইন রুল প্রয়োগ করি (Differentiating outermost logarithm)**
$$\frac{dy}{dx} = \frac{1}{\cos(e^{3x})} \cdot \frac{d}{dx}\left[\cos(e^{3x})\right]$$

**Step 4: মধ্যবর্তী কোসাইন ফাংশনের উপর চেইন রুল প্রয়োগ করি (Differentiating intermediate cosine function)**
$$\frac{d}{dx}\left[\cos(e^{3x})\right] = -\sin(e^{3x}) \cdot \frac{d}{dx}(e^{3x})$$
$$\frac{dy}{dx} = \frac{1}{\cos(e^{3x})} \cdot \left[-\sin(e^{3x})\right] \cdot \frac{d}{dx}(e^{3x})$$

**Step 5: সর্বঅভ্যন্তরীণ সূচকীয় পদের অন্তরজ নির্ণয় করে ত্রিকোণমিতিক ট্যানজেন্ট আকারে সরলীকরণ করি (Differentiating innermost exponential & simplifying)**
$$\frac{d}{dx}(e^{3x}) = 3e^{3x}$$
$$\frac{dy}{dx} = -\frac{\sin(e^{3x})}{\cos(e^{3x})} \cdot 3e^{3x} = -\tan(e^{3x}) \cdot 3e^{3x} = -3e^{3x}\tan(e^{3x})$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = -3e^{3x}\tan(e^{3x})$$
