# Problem 02: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \log x + \sec x$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Logarithm Base Convention & Sum Rule**
> - **Base Convention:** In higher engineering mathematics (AMIE / IEB Section-A), $\log x$ without an explicit base index always denotes the **Natural Logarithm** $\ln x = \log_e x$.
> - **Sum Rule of Differentiation:** The derivative of a sum of functions is the linear sum of their individual derivatives:
>   $$\frac{d}{dx}[f(x) + g(x)] = \frac{d}{dx}[f(x)] + \frac{d}{dx}[g(x)]$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| ফাংশন উপাদান | অন্তরীকরণ সূত্র (Standard Formula) | ব্যাখ্যা / অন্তর্দৃষ্টি সংক্ষেপ |
| :--- | :--- | :--- |
| **$\log x$ (Natural Logarithm)** | $\frac{d}{dx}(\log x) = \frac{1}{x}$ | $\lim_{h \to 0} \frac{\ln(x+h) - \ln x}{h} = \frac{1}{x}$ |
| **$\sec x$ (Trigonometric)** | $\frac{d}{dx}(\sec x) = \sec x \tan x$ | $\sec x = (\cos x)^{-1} \implies -(\cos x)^{-2}(-\sin x) = \sec x \tan x$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Confusing $\sec x$ derivative with $\tan x$):**
>   অনেকেই ভুল করে $\frac{d}{dx}(\sec x) = \sec^2 x$ লিখে ফেলে। মনে রাখবেন:
>   $$\frac{d}{dx}(\tan x) = \sec^2 x, \quad \text{কিন্তু} \quad \frac{d}{dx}(\sec x) = \sec x \tan x$$
> - **Trap 2 (Base-10 Assumption):**
>   প্রশ্নপত্রে সরাসরি $\log_{10} x$ উল্লেখ না থাকলে $\frac{1}{x \ln 10}$ লিখবেন না।

---

## 📝 ২. ধাপে ধাপে লিখিত সমাধান (Step-by-Step Solution)

### **ধাপ ১: প্রদত্ত সমীকরণ এবং উভয় পক্ষে অন্তরীকরণ অপারেটর গ্রহণ**
$$y = \log x + \sec x$$
$$\frac{dy}{dx} = \frac{d}{dx}(\log x + \sec x)$$

### **ধাপ ২: যোগের নিয়ম (Sum Rule) অনুযায়ী প্রতিটি পদ পৃথকীকরণ**
$$\frac{dy}{dx} = \frac{d}{dx}(\log x) + \frac{d}{dx}(\sec x)$$

### **ধাপ ৩: প্রমিত সূত্র (Standard Derivative Formulas) প্রয়োগ**
আমরা জানি, $\frac{d}{dx}(\log x) = \frac{1}{x}$ এবং $\frac{d}{dx}(\sec x) = \sec x \tan x$।

$$\mathbf{\frac{dy}{dx} = \frac{1}{x} + \sec x \tan x}$$

---

> [!IMPORTANT]
> **English Note — Domain & Asymptotic Singularities (AMIE Rigor)**
> - **Domain of $\log x$:** Defined strictly for $x > 0$.
> - **Domain of $\sec x = \frac{1}{\cos x}$:** Defined for all real numbers except where $\cos x = 0 \implies x = (2n+1)\frac{\pi}{2}$ ($n \in \mathbb{Z}$).
> - **Combined Domain of Differentiability:**
>   $$\text{Dom}\left(\frac{dy}{dx}\right) = (0, \infty) \setminus \left\{ \frac{\pi}{2}, \frac{3\pi}{2}, \frac{5\pi}{2}, \dots \right\}$$
>   At these points, vertical asymptotes occur, causing infinite discontinuity.

---

> [!TIP]
> **English Note — Alternative Combined Trigonometric Form**
> In engineering exam scripts, writing in common denominator format is fully valid:
> $$\frac{dy}{dx} = \frac{1}{x} + \frac{\sin x}{\cos^2 x} = \mathbf{\frac{\cos^2 x + x \sin x}{x \cos^2 x}}$$

---

### 🎯 **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dx} = \frac{1}{x} + \sec x \tan x \quad \text{বা} \quad \frac{\cos^2 x + x \sin x}{x \cos^2 x}}$$
