# Chain Rule Problem 03: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = 8\cos\sqrt{x}$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Scalar-Trigonometric-Radical Chain Rule Formulation**
> The problem combines a scalar constant, a trigonometric cosine envelope, and a radical inner argument:
> - **Scalar Constant:** $c = 8$
> - **Outer Function:** $f(u) = \cos u$
> - **Inner Function:** $u = g(x) = \sqrt{x} = x^{1/2}$
> 
> Applying Leibniz's **Chain Rule**:
> $$\frac{dy}{dx} = 8 \cdot \frac{d}{du}(\cos u) \cdot \frac{du}{dx} = 8 \cdot (-\sin u) \cdot \frac{1}{2\sqrt{x}}$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান (Component) | ফাংশন রূপ | প্রমিত সূত্র (Standard Derivative) |
| :--- | :--- | :--- |
| **স্কেলার ধ্রুবক (Scalar)** | $8$ | ধ্রুবক গুণক বাইরে অপরিবর্তিত থাকে |
| **বহিঃস্থ ফাংশন (Outer)** | $\cos u$ | $\frac{d}{du}(\cos u) = -\sin u$ |
| **অভ্যন্তরীণ ফাংশন (Inner)** | $u = \sqrt{x}$ | $\frac{du}{dx} = \frac{d}{dx}(\sqrt{x}) = \frac{1}{2\sqrt{x}}$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Negative Sign in Cosine Derivative):**
>   মনে রাখবেন: $\frac{d}{dx}(\cos \theta) = \mathbf{-\sin \theta}$। মাইনাস চিহ্ন বাদ দেওয়া একটি মারাত্মক ভুল।
> - **Trap 2 (Radical Inner Derivative):**
>   ভেতরের $\sqrt{x}$-এর অন্তরজ $\frac{1}{2\sqrt{x}}$ দিয়ে গুণ করতে ভুললে সম্পূর্ণ সমাধান বাতিল হবে।
> - **Trap 3 (Argument vs. Coefficient Confusion):**
>   $-\frac{4\sin\sqrt{x}}{\sqrt{x}} \neq -4\sin(1)$। হরের $\sqrt{x}$ কখনোই সাইনের কোণের $\sqrt{x}$-এর সাথে কাটাকাটি যাবে না!

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর প্রয়োগ করে**
$$\frac{dy}{dx} = \frac{d}{dx}(8\cos\sqrt{x})$$
$$\frac{dy}{dx} = 8 \cdot \frac{d}{dx}(\cos\sqrt{x})$$

### **ধাপ ২: শৃঙ্খল নিয়ম (Chain Rule) অনুসারে সাজানো**
$$\frac{dy}{dx} = 8 \cdot (-\sin\sqrt{x}) \cdot \frac{d}{dx}(\sqrt{x})$$

### **ধাপ ৩: অভ্যন্তরীণ পদ $\sqrt{x}$-এর অন্তরজ বসিয়ে**
আমরা জানি, $\frac{d}{dx}(\sqrt{x}) = \frac{1}{2\sqrt{x}}$।
$$\frac{dy}{dx} = 8 \cdot (-\sin\sqrt{x}) \cdot \frac{1}{2\sqrt{x}}$$
$$\frac{dy}{dx} = \frac{-8\sin\sqrt{x}}{2\sqrt{x}}$$

### **ধাপ ৪: সহগ সরলীকরণ ($8/2 = 4$) ও চূড়ান্ত উত্তর**
$$\mathbf{\frac{dy}{dx} = -\frac{4\sin\sqrt{x}}{\sqrt{x}}} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Domain & Right-hand Differentiability (AMIE Rigor)**
> - **Domain of $y(x)$:** বাস্তব বর্গমূলের সংজ্ঞার জন্য $x \ge 0$। অতএব, $\text{Dom}(y) = [0, \infty)$।
> - **Domain of Differentiability ($\frac{dy}{dx}$):** হরে $\sqrt{x}$ থাকায় $x = 0$ বিন্দু বাদ দিতে হবে।
>   অতএব, $\text{Dom}\left(\frac{dy}{dx}\right) = (0, \infty)$।
> - **Limiting Behavior at Origin:**
>   $$\lim_{x \to 0^+} \frac{dy}{dx} = \lim_{x \to 0^+} \left( -4 \cdot \frac{\sin\sqrt{x}}{\sqrt{x}} \right) = -4 \cdot 1 = -4$$

---

> [!TIP]
> **English Note — Formal Substitution Model**
> ধরি, $u = \sqrt{x} \implies \frac{du}{dx} = \frac{1}{2\sqrt{x}}$।
> তাহলে $y = 8\cos u \implies \frac{dy}{du} = -8\sin u$।
> চেইন রুল অনুসারে:
> $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = (-8\sin u) \cdot \frac{1}{2\sqrt{x}} = -\frac{4\sin\sqrt{x}}{\sqrt{x}}$$

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. Chain Rule কাঠামো** | $8(-\sin\sqrt{x})\cdot\frac{d}{dx}(\sqrt{x})$ সঠিক প্রয়োগ | **২.০** |
| **২. বর্গমূল অন্তরজ নির্ণয়** | $\frac{d}{dx}(\sqrt{x}) = \frac{1}{2\sqrt{x}}$ সঠিকভাবে বসানো | **১.৫** |
| **৩. সহগ সরলীকরণ** | $-\frac{8}{2} = -4$ করে $-\frac{4\sin\sqrt{x}}{\sqrt{x}}$ লেখা | **১.৫** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
