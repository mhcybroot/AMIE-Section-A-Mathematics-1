# Chain Rule Problem 06: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \log(\sin 5x)$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — 3-Tier Logarithmic-Trigonometric Chain Rule Formulation**
> The problem is a triple composite (3-tier) function:
> - **Tier 1 (Outer Logarithm):** $f(u) = \log u \implies f'(u) = \frac{1}{u}$
> - **Tier 2 (Middle Trigonometric Sine):** $u = g(v) = \sin v \implies g'(v) = \cos v$
> - **Tier 3 (Inner Linear Core):** $v = h(x) = 5x \implies h'(x) = 5$
> 
> Applying Leibniz's **3-Tier Chain Rule**:
> $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dv} \cdot \frac{dv}{dx} = \left(\frac{1}{\sin 5x}\right) \cdot (\cos 5x) \cdot (5) = 5\cot 5x$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| স্তর (Tier) | উপাদান (Component) | ফাংশন রূপ | প্রমিত সূত্র (Standard Derivative) |
| :--- | :--- | :--- | :--- |
| **Tier 1 (Outer)** | প্রাকৃতিক লগারিদম | $\log u$ | $\frac{d}{du}(\log u) = \frac{1}{u}$ |
| **Tier 2 (Middle)** | সাইন অনুপাত | $\sin v$ | $\frac{d}{dv}(\sin v) = \cos v$ |
| **Tier 3 (Inner)** | রৈখিক আর্গুমেন্ট | $5x$ | $\frac{d}{dx}(5x) = 5$ |
| **ত্রিকোণমিতিক রূপ** | কোট্যাঞ্জেন্ট রূপ | $\frac{\cos 5x}{\sin 5x}$ | $\cot 5x = \frac{\cos 5x}{\sin 5x}$ |
| **সম্মিলিত রূপ** | পূর্ণাঙ্গ চেইন রুল | $\log(\sin 5x)$ | $\frac{dy}{dx} = 5\cot 5x$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Omitting the Inner Scalar Coefficient $5$):**
>   লগারিদম ও সাইনের অন্তরীকরণ করার পর শেষ স্তরের $5x$-এর অন্তরজ $5$ গুণ করতে ভুলে যাওয়া একটি বহুল প্রচলিত ভুল। শুধু $\cot 5x$ লিখলে আংশিক নম্বর কাটা যাবে।
> - **Trap 2 (Misplaced Reciprocal Notation):**
>   $\frac{1}{\sin 5x} \cdot \cos 5x$ কে কখনো ভুলবশত $\frac{\sin 5x}{\cos 5x} = \tan 5x$ লেখা যাবে না। লবে সবসময় $(\sin 5x)' = \cos 5x$ থাকবে।
> - **Trap 3 (Logarithm Base Assumption):**
>   ক্যালকুলাসে প্রমিতভাবে $\log$ বলতে প্রাকৃতিক লগারিদম ($\ln$ বা $\log_e$) নির্দেশ করে। ভিত্তি $10$ ধরে $\frac{1}{\sin 5x \ln 10}$ লিখলে সাধারণ AMIE প্রকৌশল প্রশ্নপত্রের সাথে অসঙ্গতি দেখা দেবে।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: প্রদত্ত সমীকরণ লেখা ও অন্তরীকরণ অপারেটর প্রয়োগ**
ধরি,
$$y = \log(\sin 5x)$$

উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর $\frac{d}{dx}$ প্রয়োগ করে পাই:
$$\frac{dy}{dx} = \frac{d}{dx}\left[\log(\sin 5x)\right]$$

### **ধাপ ২: বহিঃস্থ লগারিদম ফাংশনের ওপর চেইন রুল প্রয়োগ**
আমরা জানি, $\frac{d}{du}(\log u) = \frac{1}{u}$। এখানে $u = \sin 5x$ ধরে:
$$\frac{dy}{dx} = \frac{1}{\sin 5x} \cdot \frac{d}{dx}(\sin 5x)$$

### **ধাপ ৩: মধ্যম সাইন ফাংশন ও অভ্যন্তরীণ পদের ওপর চেইন রুল বিস্তার**
আমরা জানি, $\frac{d}{dv}(\sin v) = \cos v$ এবং $v = 5x$।
$$\frac{dy}{dx} = \frac{1}{\sin 5x} \cdot \cos 5x \cdot \frac{d}{dx}(5x)$$

### **ধাপ ৪: অভ্যন্তরীণ রৈখিক পদ $5x$-এর অন্তরজ নির্ণয়**
যেহেতু $\frac{d}{dx}(5x) = 5$:
$$\frac{dy}{dx} = \frac{1}{\sin 5x} \cdot \cos 5x \cdot 5 = 5 \cdot \frac{\cos 5x}{\sin 5x}$$

### **ধাপ ৫: ত্রিকোণমিতিক রূপান্তর ও চূড়ান্ত প্রমিত উত্তর (Final Standard Answer)**
আমরা জানি, $\frac{\cos \theta}{\sin \theta} = \cot \theta$। অতএব:
$$\mathbf{\frac{dy}{dx} = 5\cot 5x} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Domain, Logarithmic Positivity & Singularities (AMIE Rigor)**
> - **Positivity Requirement:** $\log(\theta)$ বাস্তব হওয়ার জন্য $\theta > 0$ হতে হয়।
>   অতএব, $\sin 5x > 0 \implies 2k\pi < 5x < (2k+1)\pi \implies \frac{2k\pi}{5} < x < \frac{(2k+1)\pi}{5}, \; k \in \mathbb{Z}$।
> - **Singularities / Vertical Asymptotes:**
>   যখন $\sin 5x \to 0^+$, তখন $y \to -\infty$ এবং $\frac{dy}{dx} = 5\cot 5x \to \pm\infty$।
> - **Domain Set:**
>   $$\text{Dom}(y) = \text{Dom}\left(\frac{dy}{dx}\right) = \bigcup_{k \in \mathbb{Z}} \left( \frac{2k\pi}{5}, \frac{(2k+1)\pi}{5} \right)$$

---

> [!TIP]
> **English Note — Multi-Variable Substitution Framework**
> Let $v = 5x \implies \frac{dv}{dx} = 5$
> Let $u = \sin v \implies \frac{du}{dv} = \cos v = \cos 5x$
> Then $y = \log u \implies \frac{dy}{du} = \frac{1}{u} = \frac{1}{\sin 5x}$
> 
> According to Leibniz Chain Rule:
> $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dv} \cdot \frac{dv}{dx} = \frac{1}{\sin 5x} \cdot \cos 5x \cdot 5 = 5\cot 5x$$

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. লগারিদমিক চেইন রুল বিস্তার** | $\frac{1}{\sin 5x} \cdot \frac{d}{dx}(\sin 5x)$ সঠিক উপস্থাপন | **১.৫** |
| **২. সাইন ও রৈখিক অন্তরজ বিস্তার** | $\cos 5x \cdot \frac{d}{dx}(5x) = 5\cos 5x$ সম্পন্ন করা | **২.০** |
| **৩. ত্রিকোণমিতিক কোট্যাঞ্জেন্ট সরলীকরণ** | $5\cot 5x$ আকারে চূড়ান্ত উত্তর | **১.৫** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
