# Chain Rule Problem 21: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \sqrt[3]{\sin x - 1} \quad \text{অথবা} \quad y = (\sin x - 1)^{\frac{1}{3}}$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Fractional Power Trigonometric Chain Rule Formulation**
> The problem is a composite function with a fractional cube root power and an inner shifted trigonometric expression:
> - **Exponents Transformation:** $y = (\sin x - 1)^{\frac{1}{3}}$
> - **Outer Power Rule:** $f(u) = u^{\frac{1}{3}} \implies f'(u) = \frac{1}{3}u^{\frac{1}{3} - 1} = \frac{1}{3}u^{-\frac{2}{3}} = \frac{1}{3 u^{\frac{2}{3}}}$
> - **Inner Function:** $u = g(x) = \sin x - 1 \implies g'(x) = \cos x$
> 
> Applying Leibniz's **Chain Rule**:
> $$\frac{dy}{dx} = \frac{d}{du}(u^{\frac{1}{3}}) \cdot \frac{du}{dx} = \frac{1}{3}(\sin x - 1)^{-\frac{2}{3}} \cdot \frac{d}{dx}(\sin x - 1) = \frac{\cos x}{3(\sin x - 1)^{\frac{2}{3}}} = \frac{\cos x}{3\sqrt[3]{(\sin x - 1)^2}}$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান (Component) | ফাংশন রূপ | প্রমিত সূত্র (Standard Derivative) |
| :--- | :--- | :--- |
| **বহিঃস্থ ঘনমূল ঘাত (Outer Power)** | $u^{\frac{1}{3}}$ | $\frac{d}{du}(u^n) = n u^{n-1} \implies \frac{d}{du}(u^{\frac{1}{3}}) = \frac{1}{3}u^{-\frac{2}{3}}$ |
| **অভ্যন্তরীণ ত্রিকোণমিতিক পদ** | $u = \sin x - 1$ | $\frac{du}{dx} = \frac{d}{dx}(\sin x - 1) = \cos x$ |
| **সম্মিলিত চেইন রুল** | $(\sin x - 1)^{\frac{1}{3}}$ | $\frac{dy}{dx} = \frac{\cos x}{3(\sin x - 1)^{\frac{2}{3}}} = \frac{\cos x}{3\sqrt[3]{(\sin x - 1)^2}}$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Fractional Exponent Subtraction Error):**
>   $\frac{1}{3} - 1 = -\frac{2}{3}$। ভুলবশত $\frac{2}{3}$ বা $-\frac{1}{3}$ লিখলে সম্পূর্ণ গণনা ভুল হবে।
> - **Trap 2 (Omitting the Inner Derivative $\cos x$):**
>   শুধু $\frac{1}{3}(\sin x - 1)^{-2/3}$ লিখে অন্তরীকরণ সমাপ্ত ভাবা ভুল; ভিতরের $\sin x$-এর অন্তরজ $\cos x$ গুণ দিতে হবে।
> - **Trap 3 (Sign Error on Inner Derivative):**
>   $\frac{d}{dx}(\sin x - 1) = +\cos x - 0 = +\cos x$। ধ্রুবক $-1$-এর অন্তরজ শূন্য।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: প্রদত্ত ঘনমূলকে ভগ্নাংশ ঘাত আকারে প্রকাশ**
ধরি,
$$y = \sqrt[3]{\sin x - 1} = (\sin x - 1)^{\frac{1}{3}}$$

উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর $\frac{d}{dx}$ প্রয়োগ করে পাই:
$$\frac{dy}{dx} = \frac{d}{dx}\left[(\sin x - 1)^{\frac{1}{3}}\right]$$

### **ধাপ ২: বহিঃস্থ ঘাতের ওপর Power Rule ও শৃঙ্খল নিয়ম প্রয়োগ**
আমরা জানি, $\frac{d}{du}(u^n) = n u^{n-1}$। এখানে $u = \sin x - 1$ এবং $n = \frac{1}{3}$ বিবেচনা করে:
$$\frac{dy}{dx} = \frac{1}{3}(\sin x - 1)^{\frac{1}{3} - 1} \cdot \frac{d}{dx}(\sin x - 1)$$
$$\implies \frac{dy}{dx} = \frac{1}{3}(\sin x - 1)^{-\frac{2}{3}} \cdot \frac{d}{dx}(\sin x - 1)$$

### **ধাপ ৩: অভ্যন্তরীণ পদ $(\sin x - 1)$-এর ব্যবকলন সম্পাদন**
যেহেতু $\frac{d}{dx}(\sin x - 1) = \cos x - 0 = \cos x$:
$$\frac{dy}{dx} = \frac{1}{3}(\sin x - 1)^{-\frac{2}{3}} \cdot \cos x$$
$$= \frac{1}{3}\cos x (\sin x - 1)^{-\frac{2}{3}}$$

### **ধাপ ৪: ধনাত্মক সূচকে প্রমিত ভগ্নাংশ রূপান্তর (Final Standard Answer)**
ঋণাত্মক ঘাতকে হরে এনে পাই:
$$\mathbf{\frac{dy}{dx} = \frac{\cos x}{3(\sin x - 1)^{\frac{2}{3}}} = \frac{\cos x}{3\sqrt[3]{(\sin x - 1)^2}}} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Domain, Non-Differentiability & Cusp Analysis (AMIE Rigor)**
> - **Domain of Function:** যেহেতু ঘনমূল (Cube Root) বাস্তব সংখ্যার জন্য যেকোনো চিহ্নের ক্ষেত্রে সংজ্ঞায়িত (এমনকি ঋণাত্মক সংখ্যার জন্যও), তাই:
>   $$\text{Dom}(y) = (-\infty, \infty) = \mathbb{R}$$
> - **Domain of Derivative (Singularities):**
>   অন্তরজের হরে $(\sin x - 1)^{2/3}$ থাকায় $\sin x - 1 \neq 0 \implies \sin x \neq 1$।
>   $$\sin x = 1 \implies x = 2k\pi + \frac{\pi}{2}, \; k \in \mathbb{Z}$$
>   অতএব: $\text{Dom}\left(\frac{dy}{dx}\right) = \mathbb{R} \setminus \left\{ 2k\pi + \frac{\pi}{2} \;\middle|\; k \in \mathbb{Z} \right\}$।
> - **Vertical Tangent / Cusp at $x \to \frac{\pi}{2}$:**
>   যখন $x \to \frac{\pi}{2}$, তখন লব $\cos x \to 0$ এবং হর $(\sin x - 1)^{2/3} \to 0$। L'Hôpital বা সীমার বিচারে দেখা যায় $\lim_{x \to \pi/2} \frac{dy}{dx}$ অসীমে ধাবিত হয়।

---

> [!TIP]
> **English Note — Formal Substitution Model**
> Let $u = \sin x - 1 \implies \frac{du}{dx} = \cos x$.
> Then $y = u^{1/3} \implies \frac{dy}{du} = \frac{1}{3}u^{-2/3} = \frac{1}{3u^{2/3}}$.
> 
> By Leibniz Chain Rule:
> $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = \frac{1}{3u^{2/3}} \cdot \cos x = \frac{\cos x}{3(\sin x - 1)^{2/3}}$$

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. ঘাত রূপান্তর ও চেইন রুল বিস্তার** | $\frac{1}{3}(\sin x - 1)^{-2/3} \cdot \frac{d}{dx}(\sin x - 1)$ সঠিক প্রয়োগ | **২.০** |
| **২. অভ্যন্তরীণ সাইন অন্তরজ** | $\frac{d}{dx}(\sin x - 1) = \cos x$ সফলভাবে সম্পন্ন | **১.৫** |
| **৩. প্রমিত ভগ্নাংশ রূপ** | $\frac{\cos x}{3(\sin x - 1)^{2/3}}$ আকারে সমাপনী | **১.৫** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
