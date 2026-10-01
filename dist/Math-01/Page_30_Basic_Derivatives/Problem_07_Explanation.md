# Problem 07: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = 2x^6 - 5e^x + 7\tan x$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Linear Superposition of Elementary Functions**
> The objective function is a 3-term linear superposition of a **power function**, an **exponential function**, and a **trigonometric function**:
> $$y = c_1 f_1(x) - c_2 f_2(x) + c_3 f_3(x)$$
> By the **Linearity Property of the Derivative Operator $\mathcal{D}$**:
> $$\frac{d}{dx}\left[2x^6 - 5e^x + 7\tan x\right] = 2\frac{d}{dx}(x^6) - 5\frac{d}{dx}(e^x) + 7\frac{d}{dx}(\tan x)$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| ফাংশন পদ | প্রমিত সূত্র (Standard Formula) | সহগ গুণন (Coefficient Scaling) | ফলাফল (Derivative) |
| :--- | :--- | :--- | :--- |
| **$2x^6$** | $\frac{d}{dx}(x^n) = nx^{n-1}$ | $2(6x^5)$ | $12x^5$ |
| **$-5e^x$** | $\frac{d}{dx}(e^x) = e^x$ | $-5(e^x)$ | $-5e^x$ |
| **$7\tan x$** | $\frac{d}{dx}(\tan x) = \sec^2 x$ | $7(\sec^2 x)$ | $7\sec^2 x$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Confusing $\tan x$ and $\sec x$ derivatives):**
>   মনে রাখবেন: $\frac{d}{dx}(\tan x) = \mathbf{\sec^2 x}$। ভুলবশত $\sec x \tan x$ লিখে ফেললে ক্যালকুলেশন ভুল হয়ে যাবে।
> - **Trap 2 (Power Rule Scalar Multiplication):**
>   প্রথম পদে $2 \times 6 = 12$ সতর্কতার সাথে গুণ করতে হবে ($12x^5$)।

---

## 📝 ২. ধাপে ধাপে লিখিত সমাধান (Step-by-Step Solution)

### **ধাপ ১: উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর নেওয়া**
$$\frac{dy}{dx} = \frac{d}{dx}\left(2x^6 - 5e^x + 7\tan x\right)$$

### **ধাপ ২: যোগ-বিয়োগের নিয়ম ও ধ্রুবক সহগ নিয়ম (Constant Multiple) প্রয়োগ**
$$\frac{dy}{dx} = 2\frac{d}{dx}(x^6) - 5\frac{d}{dx}(e^x) + 7\frac{d}{dx}(\tan x)$$

### **ধাপ ৩: প্রমিত সূত্র বসিয়ে চূড়ান্ত মান নির্ণয়**
$$\frac{dy}{dx} = 2(6x^{6-1}) - 5(e^x) + 7(\sec^2 x)$$
$$\mathbf{\frac{dy}{dx} = 12x^5 - 5e^x + 7\sec^2 x}$$

---

> [!IMPORTANT]
> **English Note — Domain & Asymptotic Singularities (AMIE Rigor)**
> - **Domain of $2x^6$ and $5e^x$:** Entire on $\mathbb{R}$.
> - **Singularities of $\tan x$:** Undefined where $\cos x = 0 \implies x = (2n+1)\frac{\pi}{2}$ ($n \in \mathbb{Z}$).
> - **Domain of Differentiability:**
>   $$\text{Dom}\left(\frac{dy}{dx}\right) = \mathbb{R} \setminus \left\{ (2n+1)\frac{\pi}{2} \;\middle|\; n \in \mathbb{Z} \right\}$$

---

> [!TIP]
> **English Note — Alternate Form using Identity $\sec^2 x = 1 + \tan^2 x$**
> ত্রিকোণমিতিক অভেদ $\sec^2 x = 1 + \tan^2 x$ ব্যবহার করে লেখা যায়:
> $$\frac{dy}{dx} = 12x^5 - 5e^x + 7(1 + \tan^2 x) = \mathbf{12x^5 - 5e^x + 7\tan^2 x + 7}$$

---

### 🎯 **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dx} = 12x^5 - 5e^x + 7\sec^2 x}$$
