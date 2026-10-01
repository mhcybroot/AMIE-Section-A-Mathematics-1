# Chain Rule Problem 05: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = (\sin x)^2 \quad \text{অথবা} \quad y = \sin^2 x$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Power-Trigonometric Chain Rule Formulation**
> The problem is a composition of an outer algebraic power function and an inner trigonometric function:
> - **Outer Function (Power Rule):** $f(u) = u^2 \implies f'(u) = 2u$
> - **Inner Function (Trigonometric Sine):** $u = g(x) = \sin x \implies g'(x) = \cos x$
> 
> Applying Leibniz's **Chain Rule**:
> $$\frac{dy}{dx} = \frac{d}{du}(u^2) \cdot \frac{du}{dx} = (2u) \cdot \frac{d}{dx}(\sin x) = 2\sin x \cos x = \sin 2x$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান (Component) | ফাংশন রূপ | প্রমিত সূত্র (Standard Derivative) |
| :--- | :--- | :--- |
| **বহিঃস্থ ঘাত ফাংশন (Outer Power)** | $u^2$ | $\frac{d}{du}(u^n) = n u^{n-1} \implies \frac{d}{du}(u^2) = 2u$ |
| **অভ্যন্তরীণ সাইন ফাংশন (Inner)** | $u = \sin x$ | $\frac{du}{dx} = \frac{d}{dx}(\sin x) = \cos x$ |
| **ত্রিকোণমিতিক দ্বিগুণ কোণ সূত্র** | $2\sin x \cos x$ | $\sin 2x = 2\sin x \cos x$ |
| **সম্মিলিত রূপ (Combined Chain Rule)** | $\sin^2 x$ | $\frac{dy}{dx} = 2\sin x \cos x = \sin 2x$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Confusing $\sin^2 x$ with $\sin(x^2)$):**
>   - $\sin^2 x = (\sin x)^2 \implies \frac{d}{dx}(\sin^2 x) = 2\sin x \cos x = \sin 2x$
>   - $\sin(x^2) \implies \frac{d}{dx}[\sin(x^2)] = \cos(x^2) \cdot 2x = 2x\cos(x^2)$
>   পরীক্ষায় প্রশ্নটি খেয়াল করে পড়তে হবে; ঘাতটি সমগ্র সাইন অনুপাতের ওপর নাকি শুধু কোণের ($x$) ওপর।
> - **Trap 2 (Stopping at Incomplete Differentiation):**
>   বহিঃস্থ ঘাতের জন্য $2\sin x$ লিখে অন্তরীকরণ সমাপ্ত ভাবা ভুল। ভেতরের $\sin x$-কে $x$-এর সাপেক্ষে অন্তরীকরণ করে $\cos x$ গুণ দিতে হবে।
> - **Trap 3 (Final Expression Equivalence):**
>   উভয় রূপ $2\sin x \cos x$ এবং $\sin 2x$ প্রমিত ও সঠিক। তবে AMIE পরীক্ষায় সাধারণত দ্বিগুণ কোণের রূপ $\sin 2x$ উল্লেখ করাকে অধিকতর মার্জিত বিবেচনা করা হয়।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: প্রদত্ত সমীকরণ লেখা ও অন্তরীকরণ অপারেটর প্রয়োগ**
ধরি,
$$y = (\sin x)^2$$

উভয় পক্ষে $x$-এর সাপেক্ষে ব্যবকলন অপারেটর $\frac{d}{dx}$ প্রয়োগ করে পাই:
$$\frac{dy}{dx} = \frac{d}{dx}\left[(\sin x)^2\right]$$

### **ধাপ ২: বহিঃস্থ ঘাতের ওপর Power Rule ও শৃঙ্খল নিয়ম প্রয়োগ**
আমরা জানি, $\frac{d}{du}(u^2) = 2u$। এখানে $u = \sin x$ বিবেচনা করে:
$$\frac{dy}{dx} = 2(\sin x)^{2-1} \cdot \frac{d}{dx}(\sin x)$$
$$\implies \frac{dy}{dx} = 2\sin x \cdot \frac{d}{dx}(\sin x)$$

### **ধাপ ৩: অভ্যন্তরীণ $\sin x$-এর অন্তরজ বসিয়ে**
আমরা জানি, $\frac{d}{dx}(\sin x) = \cos x$। অতএব:
$$\frac{dy}{dx} = 2\sin x \cdot \cos x$$

### **ধাপ ৪: ত্রিকোণমিতিক রূপান্তর ও চূড়ান্ত প্রমিত উত্তর (Final Standard Answer)**
আমরা জানি, ত্রিকোণমিতিক সূত্র অনুসারে $2\sin x \cos x = \sin 2x$।
$$\mathbf{\frac{dy}{dx} = 2\sin x \cos x = \sin 2x} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Domain, Continuity & Bounded Oscillations (AMIE Rigor)**
> - **Domain of Function & Derivative:** $\sin x$ এবং $\cos x$ উভয়ই সমগ্র বাস্তব সংখ্যা সেট $\mathbb{R}$ জুড়ে সংজ্ঞায়িত ও অবিচ্ছিন্ন।
>   $$\text{Dom}(y) = \text{Dom}\left(\frac{dy}{dx}\right) = (-\infty, \infty) = \mathbb{R}$$
> - **Range & Extrema:**
>   - $y = \sin^2 x \in [0, 1]$
>   - $\frac{dy}{dx} = \sin 2x \in [-1, 1]$
> - **Stationary Points:** $\frac{dy}{dx} = 0 \implies \sin 2x = 0 \implies 2x = k\pi \implies x = \frac{k\pi}{2}, \; k \in \mathbb{Z}$। এটি নির্দেশ করে ফাংশনটির শীর্ষ ও তলদেশ প্রতি $\frac{\pi}{2}$ ব্যবধানে অবস্থান করে।

---

> [!TIP]
> **English Note — Formal Substitution Model & Alternative Approaches**
> **পদ্ধতি ১ (Formal Substitution):**
> ধরি, $u = \sin x \implies \frac{du}{dx} = \cos x$।
> তাহলে $y = u^2 \implies \frac{dy}{du} = 2u$।
> Leibniz Chain Rule অনুসারে:
> $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = (2u)(\cos x) = 2\sin x \cos x = \sin 2x$$
> 
> **পদ্ধতি ২ (Trigonometric Linearization Before Differentiation):**
> আমরা জানি, $\sin^2 x = \frac{1 - \cos 2x}{2} = \frac{1}{2} - \frac{1}{2}\cos 2x$।
> $$\frac{dy}{dx} = \frac{d}{dx}\left(\frac{1}{2} - \frac{1}{2}\cos 2x\right) = 0 - \frac{1}{2}(-\sin 2x \cdot 2) = \sin 2x$$
> (উভয় পদ্ধতিতে একই ফলাফল যাচাইকৃত)।

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. Chain Rule & Power Rule কাঠামো** | $2\sin x \cdot \frac{d}{dx}(\sin x)$ সঠিক প্রয়োগ | **২.০** |
| **২. অভ্যন্তরীণ সাইন অন্তরজ** | $\frac{d}{dx}(\sin x) = \cos x$ মান স্থাপন | **১.৫** |
| **৩. প্রমিত ত্রিকোণমিতিক সরলীকরণ** | $2\sin x \cos x$ বা $\sin 2x$ আকারে চূড়ান্ত উত্তর | **১.৫** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
