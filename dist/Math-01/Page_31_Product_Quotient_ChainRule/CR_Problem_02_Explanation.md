# Chain Rule Problem 02: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \log\sin x$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Logarithmic-Trigonometric Chain Rule Formulation**
> The problem is a composite function of logarithmic and trigonometric operations:
> - **Outer Function:** $f(u) = \log u \; (\equiv \ln u)$
> - **Inner Function:** $u = g(x) = \sin x$
> 
> Applying Leibniz's **Chain Rule**:
> $$\frac{dy}{dx} = \frac{d}{du}(\log u) \cdot \frac{du}{dx} = \frac{1}{u} \cdot \frac{d}{dx}(\sin x)$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান (Component) | ফাংশন রূপ | প্রমিত সূত্র (Standard Derivative) |
| :--- | :--- | :--- |
| **বহিঃস্থ ফাংশন (Outer)** | $\log u$ | $\frac{d}{du}(\log u) = \frac{1}{u}$ |
| **অভ্যন্তরীণ ফাংশন (Inner)** | $u = \sin x$ | $\frac{du}{dx} = \frac{d}{dx}(\sin x) = \cos x$ |
| **ত্রিকোণমিতিক অনুপাত** | $\frac{\cos x}{\sin x}$ | $\frac{\cos x}{\sin x} = \cot x$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Incomplete Chain Rule):**
>   লগারিদমিক ডেরিভেটিভ হিসেবে শুধু $\frac{1}{\sin x}$ লিখে শেষ করলে অভ্যন্তরীণ ডেরিভেটিভ বাদ পড়ে যাবে।
> - **Trap 2 (Trigonometric Ratio Simplification):**
>   চূড়ান্ত উত্তর $\frac{\cos x}{\sin x}$ আকারে না রেখে প্রমিত রূপ $\mathbf{\cot x}$ আকারে প্রকাশ করা ইঞ্জিনিয়ারিং পরীক্ষায় বাধ্যতামূলক।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর প্রয়োগ করে**
$$\frac{dy}{dx} = \frac{d}{dx}(\log\sin x)$$

### **ধাপ ২: শৃঙ্খল নিয়ম (Chain Rule) অনুসারে বিস্তার**
$$\frac{dy}{dx} = \frac{1}{\sin x} \cdot \frac{d}{dx}(\sin x)$$

### **ধাপ ৩: অভ্যন্তরীণ পদ $\sin x$-এর অন্তরজ বসিয়ে**
আমরা জানি, $\frac{d}{dx}(\sin x) = \cos x$।
$$\frac{dy}{dx} = \frac{1}{\sin x} \cdot \cos x$$
$$\frac{dy}{dx} = \frac{\cos x}{\sin x}$$

### **ধাপ ৪: ত্রিকোণমিতিক অনুপাতে রূপান্তর ও চূড়ান্ত উত্তর**
$$\mathbf{\frac{dy}{dx} = \cot x} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Domain, Singularities & Logarithmic Positivity (AMIE Rigor)**
> - **Domain of $y(x)$:**
>   বাস্তব সংখ্যার ক্ষেত্রে লগারিদমের আর্গুমেন্ট ধনাত্মক হতে হয়: $\sin x > 0$।
>   অতএব, $x \in (2k\pi, (2k+1)\pi), \; k \in \mathbb{Z}$ (১ম ও ২য় চতুর্ভাগ)।
>   $$\text{Dom}(y) = \bigcup_{k \in \mathbb{Z}} (2k\pi, (2k+1)\pi)$$
> - **Fundamental Integral Duality:**
>   সমাকলনের মৌলিক সূত্র $\int \cot x \, dx = \log|\sin x| + C$ এখান থেকেই সরাসরি প্রমাণিত হয়।

---

> [!TIP]
> **English Note — Formal Substitution Model**
> ধরি, $u = \sin x \implies \frac{du}{dx} = \cos x$।
> তাহলে $y = \log u \implies \frac{dy}{du} = \frac{1}{u}$।
> অতএব, চেইন রুল অনুসারে:
> $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = \frac{1}{u} \cdot \cos x = \frac{\cos x}{\sin x} = \cot x$$

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. Chain Rule কাঠামো** | $\frac{1}{\sin x} \cdot \frac{d}{dx}(\sin x)$ সঠিক প্রয়োগ | **২.০** |
| **২. সাইন অন্তরজ নির্ণয়** | $\frac{d}{dx}(\sin x) = \cos x$ সঠিকভাবে বসানো | **১.৫** |
| **৩. প্রমিত সরলীকরণ** | $\frac{\cos x}{\sin x} = \cot x$ আকারে উপস্থাপন | **১.৫** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
