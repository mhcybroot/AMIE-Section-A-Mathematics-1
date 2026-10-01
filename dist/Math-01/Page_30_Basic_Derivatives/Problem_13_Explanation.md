# Problem 13: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \frac{1+\sin x}{1+\cos x}$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Trigonometric Quotient Rule Formulation**
> The function is a rational trigonometric fraction:
> $$y = \frac{u(x)}{v(x)}, \quad \text{where } u(x) = 1+\sin x, \; v(x) = 1+\cos x$$
> Applying the Quotient Rule followed by the **Pythagorean Identity $\cos^2 x + \sin^2 x = 1$**:
> $$\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v \frac{du}{dx} - u \frac{dv}{dx}}{v^2}$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান | ফাংশন রূপ | প্রমিত অন্তরীকরণ সূত্র (Derivative) |
| :--- | :--- | :--- |
| **লব ($u$)** | $1+\sin x$ | $\frac{d}{dx}(1+\sin x) = \cos x$ |
| **হর ($v$)** | $1+\cos x$ | $\frac{d}{dx}(1+\cos x) = -\sin x$ |
| **হরের বর্গ ($v^2$)** | $(1+\cos x)^2$ | $(1+\cos x)^2$ (উৎপাদক আকারেই রাখা শ্রেয়) |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Negative Sign in Denominator Derivative):**
>   মনে রাখবেন: $\frac{d}{dx}(1+\cos x) = \mathbf{-\sin x}$। ফলে $-u \cdot \frac{dv}{dx} = -(1+\sin x)(-\sin x) = \mathbf{+(1+\sin x)\sin x}$। মাইনাস চিহ্ন বাদ দিলে পিথাগোরাসের সূত্রে $\cos^2 x + \sin^2 x = 1$ মিলবে না।
> - **Trap 2 (Premature Denominator Expansion):**
>   হর $(1+\cos x)^2$ কে বিস্তার না করে উৎপাদক আকারেই রেখে দেওয়া স্ট্যান্ডার্ড।

---

## 📝 ২. ধাপে ধাপে লিখিত সমাধান (Step-by-Step Solution)

### **ধাপ ১: উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর নেওয়া**
$$\frac{dy}{dx} = \frac{d}{dx}\left(\frac{1+\sin x}{1+\cos x}\right)$$

### **ধাপ ২: ভাগফলের সূত্র (Quotient Rule) প্রয়োগ করা**
$$\frac{dy}{dx} = \frac{(1+\cos x)\frac{d}{dx}(1+\sin x) - (1+\sin x)\frac{d}{dx}(1+\cos x)}{(1+\cos x)^2}$$

### **ধাপ ৩: মান বসানো ও বন্ধনী গুণন**
$$\frac{dy}{dx} = \frac{(1+\cos x)(\cos x) - (1+\sin x)(-\sin x)}{(1+\cos x)^2}$$
$$\frac{dy}{dx} = \frac{\cos x + \cos^2 x + \sin x + \sin^2 x}{(1+\cos x)^2}$$

### **ধাপ ৪: পিথাগোরাসের ত্রিকোণমিতিক অভেদ ($\cos^2 x + \sin^2 x = 1$) প্রয়োগ**
$$\frac{dy}{dx} = \frac{\cos x + \sin x + (\cos^2 x + \sin^2 x)}{(1+\cos x)^2}$$
$$\mathbf{\frac{dy}{dx} = \frac{1 + \sin x + \cos x}{(1+\cos x)^2}}$$

---

> [!IMPORTANT]
> **English Note — Domain & Singularities (AMIE Rigor)**
> - **Singularities:** হর শূন্য হবে যখন $1+\cos x = 0 \implies \cos x = -1 \implies x = (2n+1)\pi$ ($n \in \mathbb{Z}$)।
> - **Domain of Differentiability:**
>   $$\text{Dom}\left(\frac{dy}{dx}\right) = \mathbb{R} \setminus \left\{ (2n+1)\pi \;\middle|\; n \in \mathbb{Z} \right\}$$

---

> [!TIP]
> **English Note — Half-Angle Identity Alternate Form**
> $1+\cos x = 2\cos^2(x/2)$ ব্যবহার করে লেখা যায়:
> $$\mathbf{\frac{dy}{dx} = \frac{1}{2}\sec^2\left(\frac{x}{2}\right)\left[1 + \tan\left(\frac{x}{2}\right)\right]}$$

---

### 🎯 **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dx} = \frac{1 + \sin x + \cos x}{(1+\cos x)^2}}$$
