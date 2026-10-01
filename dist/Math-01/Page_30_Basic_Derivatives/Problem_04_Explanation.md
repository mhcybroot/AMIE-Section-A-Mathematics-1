# Problem 04: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = 7\log x - 5\log x + 8\cos x$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Pre-Differentiation Algebraic Simplification**
> In engineering mathematics examinations, always inspect the function for **like terms (সদৃশ পদ)** before applying differentiation operators:
> $$7\log x - 5\log x = (7 - 5)\log x = 2\log x$$
> Thus, the simplified objective function is:
> $$y = 2\log x + 8\cos x$$
> This minimizes calculation steps and eliminates arithmetic errors under exam conditions.

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| ফাংশন পদ | ধ্রুবক সহগ নিয়ম (Constant Multiple) | প্রমিত অন্তরীকরণ সূত্র (Standard Derivative) | ফলাফল (Result) |
| :--- | :--- | :--- | :--- |
| **$2\log x$** | $\frac{d}{dx}[c \cdot f(x)] = c \frac{d}{dx}[f(x)]$ | $\frac{d}{dx}(\log x) = \frac{1}{x}$ | $2 \cdot \frac{1}{x} = \frac{2}{x}$ |
| **$8\cos x$** | $\frac{d}{dx}[c \cdot g(x)] = c \frac{d}{dx}[g(x)]$ | $\frac{d}{dx}(\cos x) = -\sin x$ | $8(-\sin x) = -8\sin x$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Trigonometric Negative Sign Omission):**
>   মনে রাখবেন: $\frac{d}{dx}(\sin x) = +\cos x$, কিন্তু $\frac{d}{dx}(\cos x) = \mathbf{-\sin x}$। মাইনাস চিহ্ন বাদ দিয়ে $+8\sin x$ লিখলে সরাসরি নম্বর কাটা যাবে।
> - **Trap 2 (Term-by-term Expansion without simplification):**
>   সরলীকরণ না করে $\frac{dy}{dx} = \frac{7}{x} - \frac{5}{x} - 8\sin x$ লিখে রাখলে প্রেজেন্টেশন মার্কস কাটা যেতে পারে।

---

## 📝 ২. ধাপে ধাপে লিখিত সমাধান (Step-by-Step Solution)

### **ধাপ ১: সদৃশ পদ বিয়োগ করে সরলীকরণ**
$$y = 7\log x - 5\log x + 8\cos x$$
$$y = 2\log x + 8\cos x$$

### **ধাপ ২: উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর নেওয়া**
$$\frac{dy}{dx} = \frac{d}{dx}\left(2\log x + 8\cos x\right)$$
$$\frac{dy}{dx} = 2\frac{d}{dx}(\log x) + 8\frac{d}{dx}(\cos x)$$

### **ধাপ ৩: প্রমিত সূত্র প্রয়োগ ও সরলীকরণ**
$$\frac{dy}{dx} = 2\left(\frac{1}{x}\right) + 8(-\sin x)$$
$$\mathbf{\frac{dy}{dx} = \frac{2}{x} - 8\sin x}$$

---

> [!IMPORTANT]
> **English Note — Domain & Analytic Continuity (AMIE Rigor)**
> - **Domain of $y(x)$:** $\log x$ is defined only for $x > 0$, while $\cos x$ is continuous on $\mathbb{R}$. Thus $\text{Dom}(y) = (0, \infty)$.
> - **Domain of $\frac{dy}{dx}$:** Since the derivative has $x$ in denominator, $\text{Dom}\left(\frac{dy}{dx}\right) = (0, \infty)$.
> - **Asymptote:** As $x \to 0^+$, $\frac{2}{x} \to +\infty$, creating a vertical asymptote as the curve approaches the y-axis.

---

> [!TIP]
> **English Note — Common Denominator Representation**
> In engineering exam answer scripts, combining under a common denominator is standard:
> $$\frac{dy}{dx} = \frac{2}{x} - 8\sin x = \frac{2 - 8x\sin x}{x} = \mathbf{\frac{2(1 - 4x\sin x)}{x}}$$

---

### 🎯 **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dx} = \frac{2}{x} - 8\sin x \quad \text{বা} \quad \frac{2(1 - 4x\sin x)}{x}}$$
