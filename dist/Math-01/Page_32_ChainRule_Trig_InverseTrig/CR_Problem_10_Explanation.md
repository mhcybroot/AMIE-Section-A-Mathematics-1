# Chain Rule Problem 10: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \sqrt{\sin x} \quad \text{অথবা} \quad y = (\sin x)^{\frac{1}{2}}$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Radical Trigonometric Chain Rule Formulation**
> The problem is a composite radical-trigonometric function:
> - **Outer Function (Radical Power):** $f(u) = \sqrt{u} = u^{\frac{1}{2}} \implies f'(u) = \frac{1}{2\sqrt{u}}$
> - **Inner Function (Trigonometric Core):** $u = g(x) = \sin x \implies g'(x) = \cos x$
> 
> Applying Leibniz's **Chain Rule**:
> $$\frac{dy}{dx} = \frac{d}{du}(\sqrt{u}) \cdot \frac{du}{dx} = \frac{1}{2\sqrt{u}} \cdot \frac{d}{dx}(\sin x) = \frac{\cos x}{2\sqrt{\sin x}}$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান (Component) | ফাংশন রূপ | প্রমিত সূত্র (Standard Derivative) |
| :--- | :--- | :--- |
| **বহিঃস্থ বর্গমূল ফাংশন (Outer Radical)** | $\sqrt{u}$ | $\frac{d}{du}(\sqrt{u}) = \frac{1}{2\sqrt{u}}$ |
| **অভ্যন্তরীণ সাইন ফাংশন (Inner Core)** | $u = \sin x$ | $\frac{du}{dx} = \frac{d}{dx}(\sin x) = \cos x$ |
| **সম্মিলিত চেইন রুল** | $\sqrt{\sin x}$ | $\frac{dy}{dx} = \frac{\cos x}{2\sqrt{\sin x}}$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Stopping at Outer Radical):**
>   শুধু $\frac{1}{2\sqrt{\sin x}}$ লিখে অন্তরীকরণ শেষ ভাবা মারাত্মক ভুল। চেইন রুল অনুসারে অবশ্যই ভেতরের $\sin x$-এর অন্তরজ $\cos x$ গুণ করতে হবে।
> - **Trap 2 (Sign Error on Inner Derivative):**
>   $\sin x$-এর অন্তরজ হলো $+\cos x$ (কিন্তু $\cos x$-এর অন্তরজ $-\sin x$)। চিহ্নের অসাবধানতা পরিহার করতে হবে।
> - **Trap 3 (Radical Division by Zero):**
>   যখন $\sin x = 0$, তখন হর শূন্য হয়ে $\frac{dy}{dx}$ অসংজ্ঞায়িত হয়। এই বিন্দুগুলোতে অন্তরজ বিদ্যমান নয় (Vertical Tangents)।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: প্রদত্ত সমীকরণ লেখা ও অন্তরীকরণ অপারেটর প্রয়োগ**
ধরি,
$$y = \sqrt{\sin x}$$

উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর $\frac{d}{dx}$ প্রয়োগ করে পাই:
$$\frac{dy}{dx} = \frac{d}{dx}\left[\sqrt{\sin x}\right]$$

### **ধাপ ২: বহিঃস্থ বর্গমূল ফাংশনের ওপর চেইন রুল প্রয়োগ**
আমরা জানি, $\frac{d}{du}(\sqrt{u}) = \frac{1}{2\sqrt{u}}$। এখানে $u = \sin x$ বিবেচনা করে:
$$\frac{dy}{dx} = \frac{1}{2\sqrt{\sin x}} \cdot \frac{d}{dx}(\sin x)$$

### **ধাপ ৩: অভ্যন্তরীণ সাইন পদের অন্তরজ নির্ণয়**
আমরা জানি, $\frac{d}{dx}(\sin x) = \cos x$। মান বসিয়ে পাই:
$$\frac{dy}{dx} = \frac{1}{2\sqrt{\sin x}} \cdot \cos x$$

### **ধাপ ৪: ভগ্নাংশ সুবিন্যস্ত করে চূড়ান্ত প্রমিত উত্তর (Final Standard Answer)**
$$\mathbf{\frac{dy}{dx} = \frac{\cos x}{2\sqrt{\sin x}}} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Domain, Non-Negativity & Boundary Regularity (AMIE Rigor)**
> - **Real Radicand Requirement:** $\sqrt{\sin x}$ বাস্তব হতে হলে $\sin x \ge 0$ হতে হবে।
>   অতএব, $2k\pi \le x \le (2k+1)\pi, \; k \in \mathbb{Z}$।
> - **Differentiability Domain (Open Intervals):**
>   যেহেতু অন্তরজের হরে $\sqrt{\sin x}$ রয়েছে, তাই $\sin x \neq 0$ হতে হবে (হর শূন্য হওয়া যাবে না)।
>   $$\text{Dom}\left(\frac{dy}{dx}\right) = \bigcup_{k \in \mathbb{Z}} (2k\pi, (2k+1)\pi)$$
> - **Vertical Tangents:** প্রান্তবিন্দু $x = k\pi$-এ $\lim_{x \to k\pi} \frac{dy}{dx} = \pm\infty$, যা উল্লম্ব স্পর্শক নির্দেশ করে।

---

> [!TIP]
> **English Note — Formal Substitution Model & Power Rule**
> **পদ্ধতি ১ (Leibniz Substitution):**
> ধরি, $u = \sin x \implies \frac{du}{dx} = \cos x$।
> তাহলে $y = \sqrt{u} = u^{\frac{1}{2}} \implies \frac{dy}{du} = \frac{1}{2\sqrt{u}}$।
> $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = \frac{1}{2\sqrt{u}} \cdot \cos x = \frac{\cos x}{2\sqrt{\sin x}}$$
> 
> **পদ্ধতি ২ (Fractional Power Rule):**
> $y = (\sin x)^{\frac{1}{2}} \implies \frac{dy}{dx} = \frac{1}{2}(\sin x)^{-\frac{1}{2}} \cdot \frac{d}{dx}(\sin x) = \frac{1}{2\sqrt{\sin x}} \cdot \cos x = \frac{\cos x}{2\sqrt{\sin x}}$

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. বর্গমূল চেইন রুল বিস্তার** | $\frac{1}{2\sqrt{\sin x}} \cdot \frac{d}{dx}(\sin x)$ সঠিক উপস্থাপন | **২.০** |
| **২. অভ্যন্তরীণ সাইন ব্যবকলন** | $\frac{d}{dx}(\sin x) = \cos x$ সফলভাবে সম্পন্ন | **১.৫** |
| **৩. প্রমিত চূড়ান্ত রূপ** | $\frac{\cos x}{2\sqrt{\sin x}}$ আকারে যথাযথ প্রকাশ | **১.৫** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
