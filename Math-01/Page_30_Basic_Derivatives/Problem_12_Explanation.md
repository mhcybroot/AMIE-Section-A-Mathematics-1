# Problem 12: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \frac{\ln x}{\cos x}$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Quotient Rule Formulation ($u/v$ Rule)**
> The objective function is a rational quotient of a **transcendental logarithm** and a **circular cosine function**:
> $$y = \frac{u(x)}{v(x)}, \quad \text{where } u(x) = \ln x, \; v(x) = \cos x$$
> By the Quotient Rule of Differentiation:
> $$\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v \frac{du}{dx} - u \frac{dv}{dx}}{v^2}$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান | ফাংশন রূপ | প্রমিত অন্তরীকরণ সূত্র (Derivative) |
| :--- | :--- | :--- |
| **লব (Numerator, $u$)** | $\ln x$ | $\frac{d}{dx}(\ln x) = \frac{1}{x}$ |
| **হর (Denominator, $v$)** | $\cos x$ | $\frac{d}{dx}(\cos x) = -\sin x$ |
| **হরের বর্গ (Denominator Squared)** | $v^2$ | $\cos^2 x$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Numerator Order Reversal in Quotient Rule):**
>   কখনোই $u v' - v u'$ লিখবেন না। নিয়মটি হলো **$v u' - u v'$** (হর $\times$ লবের অন্তরজ $-$ লব $\times$ হরের অন্তরজ)।
> - **Trap 2 (Double-Negative Sign Error):**
>   $- u \cdot \frac{dv}{dx} = - \ln x(-\sin x) = \mathbf{+\sin x \ln x}$। মাইনাসে মাইনাসে প্লাস করতে ভুলে যাওয়া অন্যতম মারাত্মক ভুল।

---

## 📝 ২. ধাপে ধাপে লিখিত সমাধান (Step-by-Step Solution)

### **ধাপ ১: উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর নেওয়া**
$$\frac{dy}{dx} = \frac{d}{dx}\left(\frac{\ln x}{\cos x}\right)$$

### **ধাপ ২: ভাগফলের সূত্র (Quotient Rule) প্রয়োগ করা**
$$\frac{dy}{dx} = \frac{\cos x \frac{d}{dx}(\ln x) - \ln x \frac{d}{dx}(\cos x)}{\cos^2 x}$$

### **ধাপ ৩: মান বসিয়ে চূড়ান্ত রূপ প্রদান**
$$\frac{dy}{dx} = \frac{\cos x\left(\frac{1}{x}\right) - \ln x(-\sin x)}{\cos^2 x}$$
$$\mathbf{\frac{dy}{dx} = \frac{\frac{\cos x}{x} + \sin x \ln x}{\cos^2 x}}$$

---

> [!IMPORTANT]
> **English Note — Domain & Asymptotic Singularities (AMIE Rigor)**
> - **Domain of $\ln x$:** Strictly $x > 0$.
> - **Denominator Zeroes:** $\cos x = 0 \implies x = (2n+1)\frac{\pi}{2}$ ($n \in \mathbb{N}_0$).
> - **Domain of Differentiability:**
>   $$\text{Dom}\left(\frac{dy}{dx}\right) = (0, \infty) \setminus \left\{ (2n+1)\frac{\pi}{2} \;\middle|\; n \in \mathbb{N}_0 \right\}$$

---

> [!TIP]
> **English Note — Single Denominator & Secant-Tangent Form**
> সাধারণ হর নিয়ে লিখলে:
> $$\frac{dy}{dx} = \mathbf{\frac{\cos x + x\sin x \ln x}{x\cos^2 x}}$$
> অথবা সেকেন্ট-ট্যানজেন্ট আকারে:
> $$\frac{dy}{dx} = \mathbf{\sec x\left(\frac{1}{x} + \tan x \ln x\right)}$$

---

### 🎯 **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dx} = \frac{\frac{\cos x}{x} + \sin x \ln x}{\cos^2 x} \quad \text{বা} \quad \frac{\cos x + x\sin x \ln x}{x\cos^2 x}}$$
