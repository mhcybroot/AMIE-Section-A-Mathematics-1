# Problem 10: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \tan x \sec x$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Trigonometric Product Rule Formulation**
> The objective function is a product of two related circular trigonometric functions:
> $$y = u(x) \cdot v(x), \quad \text{where } u(x) = \tan x, \; v(x) = \sec x$$
> By Leibniz Product Rule:
> $$\frac{d}{dx}[\tan x \sec x] = \tan x \frac{d}{dx}(\sec x) + \sec x \frac{d}{dx}(\tan x)$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান (Element) | প্রমিত সূত্র (Standard Derivative) | প্রমাণ সংক্ষেপ |
| :--- | :--- | :--- |
| **$u = \tan x$** | $\frac{d}{dx}(\tan x) = \sec^2 x$ | $\frac{d}{dx}\left(\frac{\sin x}{\cos x}\right) = \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = \sec^2 x$ |
| **$v = \sec x$** | $\frac{d}{dx}(\sec x) = \sec x \tan x$ | $\frac{d}{dx}[(\cos x)^{-1}] = -(\cos x)^{-2}(-\sin x) = \sec x \tan x$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Confusing the paired derivatives):**
>   স্পষ্টভাবে মনে রাখুন:
>   $$\frac{d}{dx}(\tan x) = \mathbf{\sec^2 x}, \quad \text{কিন্তু} \quad \frac{d}{dx}(\sec x) = \mathbf{\sec x \tan x}$$
>   এই দুটি সূত্রের মধ্যে গুলিয়ে ফেলা শিক্ষার্থীদের অন্যতম প্রধান ভুল।
> - **Trap 2 (Leaving unfactored):**
>   কমন টার্ম $\sec x$ বাইরে এনে $\sec x(\sec^2 x + \tan^2 x)$ আকারে লেখা স্ট্যান্ডার্ড।

---

## 📝 ২. ধাপে ধাপে লিখিত সমাধান (Step-by-Step Solution)

### **ধাপ ১: উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর নেওয়া**
$$\frac{dy}{dx} = \frac{d}{dx}(\tan x \sec x)$$

### **ধাপ ২: Product Rule ($u \cdot v$) প্রয়োগ করা**
$$\frac{dy}{dx} = \tan x \frac{d}{dx}(\sec x) + \sec x \frac{d}{dx}(\tan x)$$

### **ধাপ ৩: মান বসানো ও $\sec x$ কমন নিয়ে চূড়ান্ত রূপ প্রদান**
$$\frac{dy}{dx} = \tan x(\sec x \tan x) + \sec x(\sec^2 x)$$
$$\frac{dy}{dx} = \sec x \tan^2 x + \sec^3 x = \sec x(\sec^2 x + \tan^2 x)$$

---

> [!IMPORTANT]
> **English Note — Domain & Asymptotic Singularities (AMIE Rigor)**
> - **Singularities:** $\tan x$ এবং $\sec x$ উভয়ের হরে $\cos x$ রয়েছে।
> - $\cos x = 0 \implies x = (2n+1)\frac{\pi}{2}$ ($n \in \mathbb{Z}$) বিন্দুগুলোতে ফাংশন ও ডেরিভেটিভ অসংজ্ঞায়িত।
> - **Domain of Differentiability:**
>   $$\text{Dom}\left(\frac{dy}{dx}\right) = \mathbb{R} \setminus \left\{ (2n+1)\frac{\pi}{2} \;\middle|\; n \in \mathbb{Z} \right\}$$

---

> [!TIP]
> **English Note — Equivalent Standard Trigonometric Forms**
> অভেদ $\tan^2 x = \sec^2 x - 1$ বসালে পাই:
> $$\frac{dy}{dx} = \sec x(\sec^2 x + \sec^2 x - 1) = \mathbf{2\sec^3 x - \sec x}$$
> অথবা সাইন-কস আকারে:
> $$\frac{dy}{dx} = \mathbf{\frac{1 + \sin^2 x}{\cos^3 x}}$$

---

### 🎯 **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dx} = \sec x(\sec^2 x + \tan^2 x) \quad \text{বা} \quad 2\sec^3 x - \sec x \quad \text{বা} \quad \frac{1 + \sin^2 x}{\cos^3 x}}$$
