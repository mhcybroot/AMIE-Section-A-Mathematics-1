# Chain Rule Problem 12: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = e^{\sqrt{\sin x}}$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — 3-Tier Exponential-Radical-Trigonometric Chain Rule Formulation**
> The problem is a 3-tier composite function:
> - **Tier 1 (Outer Natural Exponential):** $f(u) = e^u \implies f'(u) = e^u$
> - **Tier 2 (Middle Square Root):** $u = g(v) = \sqrt{v} \implies g'(v) = \frac{1}{2\sqrt{v}}$
> - **Tier 3 (Inner Trigonometric Sine):** $v = h(x) = \sin x \implies h'(x) = \cos x$
> 
> Applying Leibniz's **3-Tier Chain Rule**:
> $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dv} \cdot \frac{dv}{dx} = \left(e^{\sqrt{\sin x}}\right) \cdot \left(\frac{1}{2\sqrt{\sin x}}\right) \cdot (\cos x) = \frac{e^{\sqrt{\sin x}} \cos x}{2\sqrt{\sin x}}$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| স্তর (Tier) | উপাদান (Component) | ফাংশন রূপ | প্রমিত সূত্র (Standard Derivative) |
| :--- | :--- | :--- | :--- |
| **Tier 1 (Outer)** | এক্সপোনেনশিয়াল ফাংশন | $e^u$ | $\frac{d}{du}(e^u) = e^u$ |
| **Tier 2 (Middle)** | বর্গমূল ফাংশন | $\sqrt{v}$ | $\frac{d}{dv}(\sqrt{v}) = \frac{1}{2\sqrt{v}}$ |
| **Tier 3 (Inner)** | সাইন ফাংশন | $\sin x$ | $\frac{d}{dx}(\sin x) = \cos x$ |
| **সম্মিলিত রূপ** | পূর্ণাঙ্গ চেইন রুল | $e^{\sqrt{\sin x}}$ | $\frac{dy}{dx} = \frac{e^{\sqrt{\sin x}}\cos x}{2\sqrt{\sin x}}$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Stopping after Tier 1 or Tier 2):**
>   শুধু $e^{\sqrt{\sin x}}$ বা $e^{\sqrt{\sin x}} \cdot \frac{1}{2\sqrt{\sin x}}$ লিখে অন্তরীকরণ থামানো যাবে না। সবশেষ স্তর $\sin x$-এর অন্তরজ $\cos x$ গুণ করা বাধ্যতামূলক।
> - **Trap 2 (Sign Error on Inner Sine Derivative):**
>   $\sin x$-এর অন্তরজ ধনাত্মক $+\cos x$। অসাবধানতাবশত $-\cos x$ লেখা যাবে না।
> - **Trap 3 (Radical in Denominator Singularity):**
>   যেহেতু হর $2\sqrt{\sin x}$, তাই $\sin x = 0$ হলে $\frac{dy}{dx}$ অসংজ্ঞায়িত হয়।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: প্রদত্ত সমীকরণ লেখা ও অন্তরীকরণ অপারেটর প্রয়োগ**
ধরি,
$$y = e^{\sqrt{\sin x}}$$

উভয় পক্ষে $x$-এর সাপেক্ষে ব্যবকলন অপারেটর $\frac{d}{dx}$ প্রয়োগ করে পাই:
$$\frac{dy}{dx} = \frac{d}{dx}\left[e^{\sqrt{\sin x}}\right]$$

### **ধাপ ২: Tier 1 (এক্সপোনেনশিয়াল) চেইন রুল বিস্তার**
আমরা জানি, $\frac{d}{du}(e^u) = e^u$। এখানে $u = \sqrt{\sin x}$ বিবেচনা করে:
$$\frac{dy}{dx} = e^{\sqrt{\sin x}} \cdot \frac{d}{dx}\left(\sqrt{\sin x}\right)$$

### **ধাপ ৩: Tier 2 (বর্গমূল) ও Tier 3 (সাইন) চেইন রুল বিস্তার**
আমরা জানি, $\frac{d}{dv}(\sqrt{v}) = \frac{1}{2\sqrt{v}}$ এবং $v = \sin x$।
$$\frac{dy}{dx} = e^{\sqrt{\sin x}} \cdot \frac{1}{2\sqrt{\sin x}} \cdot \frac{d}{dx}(\sin x)$$

### **ধাপ ৪: অভ্যন্তরীণ পদ $\sin x$-এর অন্তরজ বসিয়ে প্রমিত রূপায়ন**
$\frac{d}{dx}(\sin x) = \cos x$ মান বসিয়ে পাই:
$$\frac{dy}{dx} = e^{\sqrt{\sin x}} \cdot \frac{1}{2\sqrt{\sin x}} \cdot \cos x$$

### **ধাপ ৫: চূড়ান্ত প্রমিত উত্তর (Final Standard Answer)**
$$\mathbf{\frac{dy}{dx} = \frac{e^{\sqrt{\sin x}} \cos x}{2\sqrt{\sin x}}} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Domain, Non-Negativity & Regularity (AMIE Rigor)**
> - **Real Radicand Condition:** $\sqrt{\sin x}$ বাস্তব হওয়ার জন্য $\sin x \ge 0 \implies x \in [2k\pi, (2k+1)\pi], \; k \in \mathbb{Z}$।
> - **Differentiability Domain (Open Intervals):**
>   অন্তরজে হর $2\sqrt{\sin x} \neq 0 \implies \sin x > 0$।
>   $$\text{Dom}\left(\frac{dy}{dx}\right) = \bigcup_{k \in \mathbb{Z}} (2k\pi, (2k+1)\pi)$$
> - **Boundary Limits ($x \to k\pi$):** যখন $x \to (2k\pi)^+$, $\frac{dy}{dx} \to +\infty$; যখন $x \to ((2k+1)\pi)^-$, $\cos x < 0 \implies \frac{dy}{dx} \to -\infty$।

---

> [!TIP]
> **English Note — Multi-Variable Substitution Framework**
> Let $v = \sin x \implies \frac{dv}{dx} = \cos x$
> Let $u = \sqrt{v} = v^{\frac{1}{2}} \implies \frac{du}{dv} = \frac{1}{2\sqrt{v}} = \frac{1}{2\sqrt{\sin x}}$
> Then $y = e^u \implies \frac{dy}{du} = e^u = e^{\sqrt{\sin x}}$
> 
> By Leibniz 3-Tier Chain Rule:
> $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dv} \cdot \frac{dv}{dx} = e^{\sqrt{\sin x}} \cdot \frac{1}{2\sqrt{\sin x}} \cdot \cos x = \frac{e^{\sqrt{\sin x}} \cos x}{2\sqrt{\sin x}}$$

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. এক্সপোনেনশিয়াল চেইন রুল বিস্তার** | $e^{\sqrt{\sin x}} \cdot \frac{d}{dx}(\sqrt{\sin x})$ সঠিক প্রয়োগ | **১.৫** |
| **২. বর্গমূল ও সাইন অন্তরজ বিস্তার** | $\frac{1}{2\sqrt{\sin x}} \cdot \cos x$ সফলভাবে সম্পন্ন | **২.০** |
| **৩. প্রমিত ভগ্নাংশ রূপ** | $\frac{e^{\sqrt{\sin x}}\cos x}{2\sqrt{\sin x}}$ আকারে চূড়ান্ত উত্তর | **১.৫** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
