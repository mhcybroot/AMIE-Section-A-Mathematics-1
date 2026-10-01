# Problem 05: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = (x+1)^2(x+1)$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Mathematical Formulation & Dual Approaches**
> By index laws: $y = (x+1)^2(x+1)^1 = (x+1)^3$. This problem can be solved via two standard engineering methods:
> - **Method 1 (Algebraic Expansion — Textbook Style):** Expand into polynomial $x^3 + 3x^2 + 3x + 1$ and differentiate term-by-term.
> - **Method 2 (Chain Rule — Fast & Elegant):** $\frac{d}{dx}[(x+1)^3] = 3(x+1)^2 \cdot \frac{d}{dx}(x+1) = 3(x+1)^2$.

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| পদ্ধতি (Method) | প্রয়োগকৃত সূত্র (Formula) | প্রাসঙ্গিকতা |
| :--- | :--- | :--- |
| **Polynomial Expansion** | $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$, $\frac{d}{dx}(x^n) = nx^{n-1}$ | সহজে স্টেপ দেখানো যায়, কোনো চেইন রুলের জটিলতা থাকে না। |
| **Chain Rule / Power Rule** | $\frac{d}{dx}[u(x)]^n = n[u(x)]^{n-1} \cdot \frac{du}{dx}$ | দ্রুত ও উৎপাদকে সাজানো উত্তর পাওয়া যায়। |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Careless Expansion of $(x+1)^2$):**
>   অনেকে ভুল করে $(x+1)^2 = x^2 + 1$ লিখে ফেলে (মাঝের $2x$ বাদ দিয়ে)। এটি মারাত্মক ভুল।
> - **Trap 2 (Differentiating without combining bases):**
>   একই বেস $(x+1)$ থাকা সত্ত্বেও খেয়াল না করে দীর্ঘ $uv$ ফর্মুলা প্রয়োগ করলে অতিরিক্ত সময় নষ্ট হয়।

---

## 📝 ২. ধাপে ধাপে লিখিত সমাধান (Step-by-Step Solution)

### **ধাপ ১: বীজগাণিতিক গুণ ও পদ বিস্তার (Algebraic Expansion)**
$$y = (x+1)^2(x+1)$$
$$y = (x^2 + 2x + 1)(x + 1)$$
$$y = x^3 + 3x^2 + 3x + 1$$

### **ধাপ ২: উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ করা**
$$\frac{dy}{dx} = \frac{d}{dx}\left(x^3 + 3x^2 + 3x + 1\right)$$
$$\frac{dy}{dx} = \frac{d}{dx}(x^3) + 3\frac{d}{dx}(x^2) + 3\frac{d}{dx}(x) + \frac{d}{dx}(1)$$

### **ধাপ ৩: Power Rule প্রয়োগ ও মান নির্ণয়**
$$\frac{dy}{dx} = 3x^2 + 3(2x) + 3(1) + 0$$
$$\mathbf{\frac{dy}{dx} = 3x^2 + 6x + 3}$$

---

> [!IMPORTANT]
> **English Note — Critical Point & Monotonicity Analysis (AMIE Rigor)**
> - **Stationary Points:** Setting $\frac{dy}{dx} = 0 \implies 3(x+1)^2 = 0 \implies x = -1$.
> - **Monotonicity:** Since $3(x+1)^2 \ge 0$ for all $x \in \mathbb{R}$, the function is **monotonically increasing** throughout the real number line.
> - At $x = -1$, the function has a stationary point of inflection (saddle point).

---

> [!TIP]
> **English Note — Factorized Representation**
> ৩ কমন নিয়ে লিখলে:
> $$\frac{dy}{dx} = 3(x^2 + 2x + 1) = \mathbf{3(x+1)^2}$$
> পরীক্ষার খাতায় $3x^2 + 6x + 3$ অথবা $3(x+1)^2$ উভয় রূপই শতভাগ গ্রহণযোগ্য।

---

### 🎯 **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dx} = 3x^2 + 6x + 3 \quad \text{বা} \quad 3(x+1)^2}$$
