# Problem 06: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = e^x\cos x + 6$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Engineering Formulation & Physical Significance**
> The term $e^x\cos x$ frequently appears in electrical circuits and mechanical dynamics representing **oscillatory transients (growing/damped sinusoidal response in RLC networks & vibration mechanics)**:
> $$y = u(x) \cdot v(x) + C, \quad \text{where } u(x) = e^x, \; v(x) = \cos x, \; C = 6$$
> By Leibniz Product Rule: $\frac{d}{dx}(u \cdot v) = u \frac{dv}{dx} + v \frac{du}{dx}$.

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান (Element) | প্রয়োগকৃত সূত্র (Formula) | ফলাফল ও প্রাসঙ্গিকতা |
| :--- | :--- | :--- |
| **$e^x$ (Exponential)** | $\frac{d}{dx}(e^x) = e^x$ | নিজস্ব ডেরিভেটিভ অপরিবর্তিত থাকে। |
| **$\cos x$ (Trigonometric)** | $\frac{d}{dx}(\cos x) = -\sin x$ | মাইনাস চিহ্ন পরিবর্তন আবশ্যক। |
| **$6$ (Constant)** | $\frac{d}{dx}(C) = 0 \implies \frac{d}{dx}(6) = 0$ | ধ্রুবকের অন্তরজ শূন্য। |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Trigonometric Negative Sign Omission):**
>   মনে রাখবেন: $\frac{d}{dx}(\cos x) = \mathbf{-\sin x}$। মাইনাস চিহ্ন বাদ দিয়ে $e^x\sin x + e^x\cos x$ লিখলে পুরো ক্যালকুলেশন ভুল হয়ে যাবে।
> - **Trap 2 (Leaving $e^x$ unfactored):**
>   ফলাফল $-e^x\sin x + e^x\cos x$ আকারে না রেখে $e^x$ কমন নিয়ে $e^x(\cos x - \sin x)$ আকারে সরলীকরণ করা স্ট্যান্ডার্ড।

---

## 📝 ২. ধাপে ধাপে লিখিত সমাধান (Step-by-Step Solution)

### **ধাপ ১: উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর নেওয়া**
$$\frac{dy}{dx} = \frac{d}{dx}\left(e^x\cos x + 6\right) = \frac{d}{dx}\left(e^x\cos x\right) + \frac{d}{dx}(6)$$

### **ধাপ ২: Product Rule ($u \cdot v$) প্রয়োগ করা**
এখানে $u = e^x$ এবং $v = \cos x$ ধরে:
$$\frac{dy}{dx} = \left[ e^x\frac{d}{dx}(\cos x) + \cos x\frac{d}{dx}(e^x) \right] + 0$$

### **ধাপ ৩: মান বসানো ও $e^x$ কমন নিয়ে সরলীকরণ**
$$\frac{dy}{dx} = e^x(-\sin x) + \cos x(e^x) = -e^x\sin x + e^x\cos x$$
$$\mathbf{\frac{dy}{dx} = e^x(\cos x - \sin x)}$$

---

> [!IMPORTANT]
> **English Note — Stationary Points & nth-Derivative Pattern (AMIE Rigor)**
> - **Turning Points:** Setting $\frac{dy}{dx} = 0 \implies \cos x - \sin x = 0 \implies \tan x = 1 \implies x = n\pi + \frac{\pi}{4}$ ($n \in \mathbb{Z}$).
> - **Leibniz Theorem for $n$-th Derivative:**
>   $$\frac{d^n}{dx^n}(e^x\cos x) = (\sqrt{2})^n e^x \cos\left(x + \frac{n\pi}{4}\right)$$

---

> [!TIP]
> **English Note — Harmonic / Phase-Shift Form**
> ত্রিকোণমিতিক রূপান্তর $\cos x - \sin x = \sqrt{2}\cos\left(x + \frac{\pi}{4}\right)$ ব্যবহার করে লেখা যায়:
> $$\mathbf{\frac{dy}{dx} = \sqrt{2}e^x\cos\left(x + \frac{\pi}{4}\right)}$$

---

### 🎯 **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dx} = e^x(\cos x - \sin x) \quad \text{বা} \quad \sqrt{2}e^x\cos\left(x + \frac{\pi}{4}\right)}$$
