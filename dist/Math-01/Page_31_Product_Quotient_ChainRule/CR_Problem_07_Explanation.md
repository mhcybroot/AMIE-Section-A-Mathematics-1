# Chain Rule Problem 07: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \tan(\cos x)$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Tangent-Cosine Composite Chain Rule Formulation**
> The problem is a composite trigonometric function:
> - **Outer Function:** $f(u) = \tan u \implies f'(u) = \sec^2 u$
> - **Inner Function:** $u = g(x) = \cos x \implies g'(x) = -\sin x$
> 
> Applying Leibniz's **Chain Rule**:
> $$\frac{dy}{dx} = \frac{d}{du}(\tan u) \cdot \frac{du}{dx} = \sec^2 u \cdot \frac{d}{dx}(\cos x) = \sec^2(\cos x) \cdot (-\sin x) = -\sin x \sec^2(\cos x)$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান (Component) | ফাংশন রূপ | প্রমিত সূত্র (Standard Derivative) |
| :--- | :--- | :--- |
| **বহিঃস্থ ফাংশন (Outer)** | $\tan u$ | $\frac{d}{du}(\tan u) = \sec^2 u$ |
| **অভ্যন্তরীণ ফাংশন (Inner)** | $u = \cos x$ | $\frac{du}{dx} = \frac{d}{dx}(\cos x) = -\sin x$ |
| **সম্মিলিত চেইন রুল** | $\tan(\cos x)$ | $\frac{dy}{dx} = -\sin x \sec^2(\cos x)$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Missing Negative Sign of Cosine Derivative):**
>   $\cos x$-এর অন্তরজ হলো $-\sin x$। মাইনাস চিহ্ন বাদ পড়ে যাওয়া পরীক্ষার্থীদের সবচেয়ে সাধারণ ভুল।
> - **Trap 2 (Misplaced Negative Sign Causing Subtraction Confusion):**
>   $-\sin x \sec^2(\cos x)$ লেখার সময় স্পষ্ট বন্ধনী বা শুরুতে মাইনাস দিতে হবে; ভুলবশত $\sec^2(\cos x) - \sin x$ লিখলে গুণের বদলে বিয়োগ বোঝাবে।
> - **Trap 3 (Treating Composition as Multiplication):**
>   $\tan(\cos x) \neq \tan x \cdot \cos x = \sin x$। এটি একটি কম্পোজিট ফাংশন, ত্রিকোণমিতিক গুণফল নয়।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: প্রদত্ত সমীকরণ লেখা ও অন্তরীকরণ অপারেটর প্রয়োগ**
ধরি,
$$y = \tan(\cos x)$$

উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর $\frac{d}{dx}$ প্রয়োগ করে পাই:
$$\frac{dy}{dx} = \frac{d}{dx}\left[\tan(\cos x)\right]$$

### **ধাপ ২: বহিঃস্থ ট্যাঞ্জেন্ট ফাংশনের ওপর চেইন রুল প্রয়োগ**
আমরা জানি, $\frac{d}{du}(\tan u) = \sec^2 u$। এখানে $u = \cos x$ ধরে:
$$\frac{dy}{dx} = \sec^2(\cos x) \cdot \frac{d}{dx}(\cos x)$$

### **ধাপ ৩: অভ্যন্তরীণ কোসাইন পদের অন্তরজ নির্ণয়**
আমরা জানি, $\frac{d}{dx}(\cos x) = -\sin x$। মান বসিয়ে পাই:
$$\frac{dy}{dx} = \sec^2(\cos x) \cdot (-\sin x)$$

### **ধাপ ৪: বীজগাণিতিক পদবিন্যাস ও চূড়ান্ত প্রমিত উত্তর (Final Standard Answer)**
ঋণাত্মক চিহ্ন ও সাইন পদকে প্রথমে এনে সুবিন্যস্ত করে পাই:
$$\mathbf{\frac{dy}{dx} = -\sin x \sec^2(\cos x)} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Domain, Regularity & Absence of Poles (AMIE Rigor)**
> - **Inner Function Range:** $\cos x \in [-1, 1]$ সকল $x \in \mathbb{R}$-এর জন্য।
> - **Outer Tangent Poles:** $\tan \theta$ এবং $\sec^2 \theta$-এর অসংজ্ঞায়িত বিন্দুগুলো ঘটে যখন $\theta = \frac{(2k+1)\pi}{2} \approx \pm 1.5708, \pm 4.712, \dots$
> - **No Real Poles:** যেহেতু $\cos x$ সর্বদা $[-1, 1]$ ব্যবধানে সীমাবদ্ধ এবং $1 < \frac{\pi}{2} \approx 1.5708$, তাই $\cos x$ কখনোই $\frac{\pi}{2}$ বা বিজোড় গুণিতকের সমান হতে পারে না!
> - **Entire Domain:** ফাংশনটি এবং এর অন্তরজ সমগ্র বাস্তব রেখা $\mathbb{R}$ জুড়ে পূর্ণাঙ্গভাবে সংজ্ঞায়িত ও মসৃণ (smooth/regular everywhere on $\mathbb{R}$)।
>   $$\text{Dom}(y) = \text{Dom}\left(\frac{dy}{dx}\right) = (-\infty, \infty) = \mathbb{R}$$

---

> [!TIP]
> **English Note — Formal Substitution Model**
> Let $u = \cos x \implies \frac{du}{dx} = -\sin x$.
> Then $y = \tan u \implies \frac{dy}{du} = \sec^2 u = \sec^2(\cos x)$.
> 
> Applying Leibniz's Chain Rule:
> $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = \sec^2(\cos x) \cdot (-\sin x) = -\sin x \sec^2(\cos x)$$

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. ট্যাঞ্জেন্ট চেইন রুল কাঠামো** | $\sec^2(\cos x) \cdot \frac{d}{dx}(\cos x)$ সঠিক উপস্থাপন | **২.০** |
| **২. কোসাইন অন্তরজ ও চিহ্নের নির্ভুলতা** | $\frac{d}{dx}(\cos x) = -\sin x$ নিখুঁত প্রয়োগ | **১.৫** |
| **৩. প্রমিত চূড়ান্ত রূপ** | $-\sin x \sec^2(\cos x)$ আকারে যথাযথ সমাপ্তি | **১.৫** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
