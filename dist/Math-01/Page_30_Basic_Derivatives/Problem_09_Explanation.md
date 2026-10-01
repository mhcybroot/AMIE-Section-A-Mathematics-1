# Problem 09: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \log x \cdot \cos x$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Dual Transcendental Product Formulation**
> The function is a product of two distinct transcendental functions: a **natural logarithm** and a **cosine trigonometric function**:
> $$y = u(x) \cdot v(x), \quad \text{where } u(x) = \log x = \ln x, \; v(x) = \cos x$$
> By Leibniz Product Rule:
> $$\frac{d}{dx}[u(x) \cdot v(x)] = u(x)\frac{dv}{dx} + v(x)\frac{du}{dx}$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান (Element) | প্রমিত সূত্র (Standard Derivative) | ফলাফল (Derivative) |
| :--- | :--- | :--- |
| **$u(x) = \log x$** | $\frac{d}{dx}(\log x) = \frac{1}{x}$ | $\frac{1}{x}$ |
| **$v(x) = \cos x$** | $\frac{d}{dx}(\cos x) = -\sin x$ | $-\sin x$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Trigonometric Derivative Sign Error):**
>   মনে রাখবেন: $\frac{d}{dx}(\cos x) = \mathbf{-\sin x}$। মাইনাস বাদ দিলে পুরো উত্তর ভুল হয়ে যাবে।
> - **Trap 2 (Notation Ambiguity):**
>   $-\sin x \log x$ বা $-(\log x)\sin x$ স্পষ্টভাবে লিখুন, যাতে $-\sin(x\log x)$ মনে না হয়।

---

## 📝 ২. ধাপে ধাপে লিখিত সমাধান (Step-by-Step Solution)

### **ধাপ ১: উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর নেওয়া**
$$\frac{dy}{dx} = \frac{d}{dx}(\log x \cdot \cos x)$$

### **ধাপ ২: Product Rule ($u \cdot v$) প্রয়োগ করা**
এখানে $u = \log x$ এবং $v = \cos x$ ধরে:
$$\frac{dy}{dx} = \log x \frac{d}{dx}(\cos x) + \cos x \frac{d}{dx}(\log x)$$

### **ধাপ ৩: প্রমিত সূত্র বসিয়ে মান নির্ণয়**
$$\frac{dy}{dx} = \log x(-\sin x) + \cos x\left(\frac{1}{x}\right)$$
$$\mathbf{\frac{dy}{dx} = -\sin x \log x + \frac{\cos x}{x}}$$

---

> [!IMPORTANT]
> **English Note — Domain & Asymptotic Behavior (AMIE Rigor)**
> - **Domain of $y(x)$:** Natural logarithm requires $x > 0$. Thus $\text{Dom}(y) = (0, \infty)$.
> - **Domain of $\frac{dy}{dx}$:** $\text{Dom}\left(\frac{dy}{dx}\right) = (0, \infty)$.
> - **Origin Asymptote:** As $x \to 0^+$, $\frac{\cos x}{x} \to +\infty$ and $x\log x \to 0$, so $\lim_{x \to 0^+} \frac{dy}{dx} = +\infty$.

---

> [!TIP]
> **English Note — Single Common Denominator Representation**
> সাধারণ ল.সা.গু করে একটি একক ভগ্নাংশ হিসেবে লেখা যায়:
> $$\mathbf{\frac{dy}{dx} = \frac{\cos x - x\sin x \log x}{x}}$$

---

### 🎯 **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dx} = -\sin x \log x + \frac{\cos x}{x} \quad \text{বা} \quad \frac{\cos x - x\sin x \log x}{x}}$$
