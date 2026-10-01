# Problem 11: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = 4\sqrt{x}\sin^{-1}x$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Algebraic & Inverse Trigonometric Coupling**
> The function is a scaled product of an **algebraic radical term** and an **inverse circular sine (arcsin) function**:
> $$y = c \cdot [u(x) \cdot v(x)], \quad \text{where } u(x) = \sqrt{x} = x^{1/2}, \; v(x) = \sin^{-1}x, \; c = 4$$
> Applying Leibniz Product Rule:
> $$\frac{dy}{dx} = 4 \left[ \sqrt{x}\frac{d}{dx}(\sin^{-1}x) + \sin^{-1}x\frac{d}{dx}(\sqrt{x}) \right]$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান | প্রমিত সূত্র (Standard Derivative) | ফলাফল (Component Derivative) |
| :--- | :--- | :--- |
| **$u(x) = \sqrt{x}$** | $\frac{d}{dx}(\sqrt{x}) = \frac{1}{2\sqrt{x}}$ | $\frac{1}{2\sqrt{x}}$ |
| **$v(x) = \sin^{-1}x$** | $\frac{d}{dx}(\sin^{-1}x) = \frac{1}{\sqrt{1-x^2}}$ | $\frac{1}{\sqrt{1-x^2}}$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Confusing Inverse Trigonometric Derivatives):**
>   মনে রাখবেন: $\frac{d}{dx}(\sin^{-1}x) = \mathbf{\frac{1}{\sqrt{1-x^2}}}$। ভুলবশত $-\frac{1}{\sqrt{1-x^2}}$ ($\cos^{-1}x$) বা $\frac{1}{1+x^2}$ ($\tan^{-1}x$) লিখলে পুরো সমাধান ভুল হবে।
> - **Trap 2 (Fraction Coefficient Omission):**
>   $\frac{d}{dx}(\sqrt{x}) = \frac{1}{2\sqrt{x}}$, হরে থাকা $2$ বাদ পড়ে যাওয়া সাধারণ ভুলগুলোর একটি।

---

## 📝 ২. ধাপে ধাপে লিখিত সমাধান (Step-by-Step Solution)

### **ধাপ ১: উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর নেওয়া**
$$\frac{dy}{dx} = \frac{d}{dx}\left(4\sqrt{x}\sin^{-1}x\right) = 4\frac{d}{dx}\left(\sqrt{x}\sin^{-1}x\right)$$

### **ধাপ ২: Product Rule ($u \cdot v$) প্রয়োগ করা**
$$\frac{dy}{dx} = 4\left[ \sqrt{x}\frac{d}{dx}(\sin^{-1}x) + \sin^{-1}x\frac{d}{dx}(\sqrt{x}) \right]$$

### **ধাপ ৩: প্রমিত সূত্র বসিয়ে চূড়ান্ত মান নির্ণয়**
$$\frac{dy}{dx} = 4\left[ \sqrt{x}\left(\frac{1}{\sqrt{1-x^2}}\right) + \sin^{-1}x\left(\frac{1}{2\sqrt{x}}\right) \right]$$
$$\mathbf{\frac{dy}{dx} = 4\left[ \frac{\sqrt{x}}{\sqrt{1-x^2}} + \frac{\sin^{-1}x}{2\sqrt{x}} \right]}$$

---

> [!IMPORTANT]
> **English Note — Domain & Differentiability Boundary Analysis (AMIE Rigor)**
> - **Domain of $y(x)$:** $\sqrt{x} \implies x \ge 0$ এবং $\sin^{-1}x \implies x \in [-1, 1]$। এদের সাধারণ ডোমেন $\text{Dom}(y) = [0, 1]$।
> - **Domain of $\frac{dy}{dx}$:** হরের কারণে $x > 0$ এবং $1-x^2 > 0 \implies x < 1$। সুতরাং অন্তরীকরণযোগ্যতার ডোমেন উন্মুক্ত ব্যবধি **$(0, 1)$**।
> - **Boundary Singularity:** উভয় প্রান্তসীমা $x \to 0^+$ এবং $x \to 1^-$ এ ডেরিভেটিভ $+\infty$ এর দিকে ধাবিত হয় (উল্লম্ব স্পর্শক)।

---

> [!TIP]
> **English Note — Single Combined Radical Denominator Form**
> সাধারণ ল.সা.গু নিয়ে সাজিয়ে লিখলে:
> $$\mathbf{\frac{dy}{dx} = \frac{2\left(2x + \sqrt{1-x^2}\sin^{-1}x\right)}{\sqrt{x(1-x^2)}}}$$

---

### 🎯 **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dx} = 4\left[ \frac{\sqrt{x}}{\sqrt{1-x^2}} + \frac{\sin^{-1}x}{2\sqrt{x}} \right] \quad \text{বা} \quad \frac{4\sqrt{x}}{\sqrt{1-x^2}} + \frac{2\sin^{-1}x}{\sqrt{x}}}$$
