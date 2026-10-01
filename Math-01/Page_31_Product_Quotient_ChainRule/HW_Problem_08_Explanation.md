# Home Work Problem 08: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \frac{\sec x}{8\tan x}$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Trigonometric Reduction vs. Quotient Rule Formulation**
> The problem contains reciprocal and ratio trigonometric functions:
> $$y = \frac{\sec x}{8\tan x} = \frac{1}{8} \cdot \frac{\sec x}{\tan x}$$
> This problem can be solved in two elegant ways:
> 1. **Method A (Trigonometric Simplification First - Recommended):** Transform $\frac{\sec x}{\tan x}$ into $\csc x$ before differentiating.
> 2. **Method B (Direct Quotient Rule):** Apply $\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v u' - u v'}{v^2}$ using $\sec^2 x - \tan^2 x = 1$.

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান (Component) | ফাংশন রূপ | প্রমিত অন্তরজ সূত্র (Standard Derivative) |
| :--- | :--- | :--- |
| **ত্রিকোণমিতিক রূপান্তর** | $\frac{\sec x}{\tan x} = \frac{1/\cos x}{\sin x/\cos x} = \frac{1}{\sin x} = \csc x$ | $y = \frac{1}{8}\csc x$ |
| **কোসেক অন্তরজ সূত্র** | $\csc x$ | $\frac{d}{dx}(\csc x) = -\csc x \cot x$ |
| **ভাগফলের সূত্র (বিকল্প)** | $u = \sec x, \; v = \tan x$ | $\frac{d}{dx}(\sec x) = \sec x \tan x, \; \frac{d}{dx}(\tan x) = \sec^2 x$ |
| **পিথাগোরাসের অভেদ** | $\sec^2 x - \tan^2 x = 1$ | $\tan^2 x - \sec^2 x = -1$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Constant Multiplier $\frac{1}{8}$):**
>   হরস্থ সহগ $8$ হলো একটি গুণনীয়ক ধ্রুবক $\frac{1}{8}$, এটিকে অন্তরীকরণের বাইরে কমন রেখে হিসাব করা নিরাপদ।
> - **Trap 2 (Trigonometric Negative Sign in Cosecant):**
>   মনে রাখবেন: $\frac{d}{dx}(\csc x) = \mathbf{-\csc x \cot x}$। মাইনাস চিহ্ন বাদ দিলে সম্পূর্ণ নম্বর কাটা যাবে।
> - **Trap 3 (Pythagorean Identity Sign in Quotient Method):**
>   $\tan^2 x - \sec^2 x = \mathbf{-1}$ (কারণ $\sec^2 x - \tan^2 x = +1$)।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **পদ্ধতি ১: ত্রিকোণমিতিক সরলীকরণ পদ্ধতি (Method 1 — Simplified Form)**

### **ধাপ ১: প্রদত্ত ফাংশনকে সাইন ও কোসাইনে রূপান্তর করা**
$$y = \frac{\sec x}{8\tan x} = \frac{1}{8} \cdot \frac{\frac{1}{\cos x}}{\frac{\sin x}{\cos x}}$$
$$y = \frac{1}{8} \cdot \left(\frac{1}{\cos x} \times \frac{\cos x}{\sin x}\right)$$
$$y = \frac{1}{8} \cdot \frac{1}{\sin x} = \frac{1}{8}\csc x$$

### **ধাপ ২: উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর প্রয়োগ করে**
$$\frac{dy}{dx} = \frac{d}{dx}\left(\frac{1}{8}\csc x\right)$$
$$\frac{dy}{dx} = \frac{1}{8} \frac{d}{dx}(\csc x)$$

### **ধাপ ৩: প্রমিত অন্তরজ সূত্র প্রয়োগ ও চূড়ান্ত উত্তর**
আমরা জানি, $\frac{d}{dx}(\csc x) = -\csc x \cot x$।
$$\mathbf{\frac{dy}{dx} = -\frac{1}{8}\csc x \cot x = -\frac{\csc x \cot x}{8}} \quad \text{(Ans.)}$$

---

### **পদ্ধতি ২: সরাসরি ভাগফলের সূত্র প্রয়োগ (Method 2 — Direct Quotient Rule)**

$$\frac{dy}{dx} = \frac{1}{8} \left[ \frac{\tan x \frac{d}{dx}(\sec x) - \sec x \frac{d}{dx}(\tan x)}{\tan^2 x} \right]$$
$$\frac{dy}{dx} = \frac{1}{8} \left[ \frac{\tan x (\sec x \tan x) - \sec x (\sec^2 x)}{\tan^2 x} \right]$$
$$\frac{dy}{dx} = \frac{1}{8} \left[ \frac{\sec x (\tan^2 x - \sec^2 x)}{\tan^2 x} \right]$$
যেহেতু $\tan^2 x - \sec^2 x = -1$:
$$\frac{dy}{dx} = \frac{1}{8} \left[ \frac{\sec x (-1)}{\tan^2 x} \right] = -\frac{1}{8}\cdot\frac{\sec x}{\tan^2 x}$$
সাইন-কোসাইনে প্রকাশ করে:
$$-\frac{1}{8}\cdot\frac{\frac{1}{\cos x}}{\frac{\sin^2 x}{\cos^2 x}} = -\frac{1}{8}\cdot\frac{\cos x}{\sin^2 x} = \mathbf{-\frac{1}{8}\csc x \cot x}$$

---

> [!IMPORTANT]
> **English Note — Domain, Singularities & Rigor (AMIE Rigor)**
> - **Domain of Function & Derivative:**
>   1. $\sec x$ ও $\tan x$-এর সংজ্ঞায়িত হওয়ার জন্য: $\cos x \neq 0 \implies x \neq k\pi + \frac{\pi}{2}$
>   2. হরের $\tan x \neq 0$-এর জন্য: $\sin x \neq 0 \implies x \neq k\pi$
>   - অতএব, সমগ্র সংজ্ঞার ডোমেন:
>   $$\text{Dom}(y) = \text{Dom}\left(\frac{dy}{dx}\right) = \mathbb{R} \setminus \left\{ \frac{k\pi}{2} \;\middle|\; k \in \mathbb{Z} \right\}$$

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. ত্রিকোণমিতিক রূপান্তর / Quotient Rule** | $y = \frac{1}{8}\csc x$ বের করা অথবা $u/v$ সাজানো | **১.৫** |
| **২. অন্তরজ নির্ণয়** | $\frac{d}{dx}(\csc x) = -\csc x \cot x$ বসানো | **১.৫** |
| **৩. চিহ্ন ও সহগ নিয়ন্ত্রণ** | $-\frac{1}{8}$ সঠিকভাবে রাখা | **১.০** |
| **৪. প্রমিত উত্তর** | $-\frac{1}{8}\csc x \cot x$ বা $-\frac{\cos x}{8\sin^2 x}$ উপস্থাপন | **১.০** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
