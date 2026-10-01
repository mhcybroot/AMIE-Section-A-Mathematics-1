# Problem 08: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = 8e^x\tan x$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Constant Scaling with Leibniz Product Rule**
> The function is an 8-fold scalar multiple of an exponential-tangent product:
> $$y = c \cdot [u(x) \cdot v(x)], \quad \text{where } u(x) = e^x, \; v(x) = \tan x, \; c = 8$$
> Applying the Constant Multiple and Leibniz Product rules simultaneously:
> $$\frac{dy}{dx} = c \left[ u(x)\frac{dv}{dx} + v(x)\frac{du}{dx} \right]$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান | প্রয়োগকৃত সূত্র (Standard Formula) | ফলাফল (Derivative) |
| :--- | :--- | :--- |
| **$e^x$ (Exponential)** | $\frac{d}{dx}(e^x) = e^x$ | $e^x$ অপরিবর্তিত থাকে। |
| **$\tan x$ (Trigonometric)** | $\frac{d}{dx}(\tan x) = \sec^2 x$ | $\sec^2 x$ এ রূপান্তরিত হয়। |
| **$8$ (Scalar Multiplier)** | $\frac{d}{dx}[8f(x)] = 8f'(x)$ | পুরো ব্র্যাকেটের বাইরে গুণ আকারে থাকবে। |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Partial Scalar Distribution):**
>   অনেকেই তাড়াহুড়োয় $8e^x\sec^2 x + e^x\tan x$ লিখে ফেলে (দ্বিতীয় পদে $8$ গুণ করতে ভুলে যায়)। ৮ কে কমন রেখে বা উভয় পদে গুণ করে লেখা আবশ্যক।
> - **Trap 2 (Misidentifying $\tan x$ derivative):**
>   ভুলবশত $\frac{d}{dx}(\tan x) = \sec x \tan x$ লিখে ফেললে পুরো স্টেপ কাটা যাবে।

---

## 📝 ২. ধাপে ধাপে লিখিত সমাধান (Step-by-Step Solution)

### **ধাপ ১: উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর নেওয়া**
$$\frac{dy}{dx} = \frac{d}{dx}\left(8e^x\tan x\right) = 8\frac{d}{dx}\left(e^x\tan x\right)$$

### **ধাপ ২: Product Rule ($u \cdot v$) প্রয়োগ করা**
এখানে $u = e^x$ এবং $v = \tan x$ ধরে:
$$\frac{dy}{dx} = 8\left[ e^x\frac{d}{dx}(\tan x) + \tan x\frac{d}{dx}(e^x) \right]$$

### **ধাপ ৩: মান বসানো ও $e^x$ কমন নিয়ে চূড়ান্ত রূপ প্রদান**
$$\frac{dy}{dx} = 8\left[ e^x(\sec^2 x) + \tan x(e^x) \right]$$
$$\mathbf{\frac{dy}{dx} = 8e^x(\sec^2 x + \tan x)}$$

---

> [!IMPORTANT]
> **English Note — Domain & Analytic Discontinuities (AMIE Rigor)**
> - **Singularities:** Tangent and Secant have infinite vertical asymptotes where $\cos x = 0 \implies x = (2n+1)\frac{\pi}{2}$ ($n \in \mathbb{Z}$).
> - **Domain of Differentiability:**
>   $$\text{Dom}\left(\frac{dy}{dx}\right) = \mathbb{R} \setminus \left\{ (2n+1)\frac{\pi}{2} \;\middle|\; n \in \mathbb{Z} \right\}$$

---

> [!TIP]
> **English Note — Quadratic in $\tan x$ & Positivity Analysis**
> অভেদ $\sec^2 x = 1 + \tan^2 x$ বসালে পাই:
> $$\frac{dy}{dx} = \mathbf{8e^x(\tan^2 x + \tan x + 1)}$$
> যেহেতু $\tan^2 x + \tan x + 1 > 0$ (নিশ্চায়ক $\Delta = -3 < 0$), তাই সংজ্ঞার ডোমেইনে **$\frac{dy}{dx} > 0$ সর্বদা ধনাত্মক** (প্রতিটি নিরবচ্ছিন্ন শাখায় ফাংশনটি কঠোরভাবে ক্রমবর্ধমান)।

---

### 🎯 **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dx} = 8e^x(\sec^2 x + \tan x) \quad \text{বা} \quad 8e^x(\tan^2 x + \tan x + 1)}$$
