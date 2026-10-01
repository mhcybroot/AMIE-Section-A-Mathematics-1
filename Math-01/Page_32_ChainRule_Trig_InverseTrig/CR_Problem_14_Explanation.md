# Chain Rule Problem 14: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \sqrt{e^{\sqrt{x}}}$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — 3-Tier Radical-Exponential-Radical Chain Rule Formulation**
> The problem is a nested composite function:
> - **Tier 1 (Outer Square Root):** $f(u) = \sqrt{u} \implies f'(u) = \frac{1}{2\sqrt{u}}$
> - **Tier 2 (Middle Exponential):** $u = g(v) = e^v \implies g'(v) = e^v$
> - **Tier 3 (Inner Square Root):** $v = h(x) = \sqrt{x} \implies h'(x) = \frac{1}{2\sqrt{x}}$
> 
> Applying Leibniz's **3-Tier Chain Rule**:
> $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dv} \cdot \frac{dv}{dx} = \left(\frac{1}{2\sqrt{e^{\sqrt{x}}}}\right) \cdot \left(e^{\sqrt{x}}\right) \cdot \left(\frac{1}{2\sqrt{x}}\right) = \frac{e^{\sqrt{x}}}{4\sqrt{x}\sqrt{e^{\sqrt{x}}}} = \frac{\sqrt{e^{\sqrt{x}}}}{4\sqrt{x}}$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| স্তর (Tier) | উপাদান (Component) | ফাংশন রূপ | প্রমিত সূত্র (Standard Derivative) |
| :--- | :--- | :--- | :--- |
| **Tier 1 (Outer)** | বহিস্থ বর্গমূল | $\sqrt{u}$ | $\frac{d}{du}(\sqrt{u}) = \frac{1}{2\sqrt{u}}$ |
| **Tier 2 (Middle)** | এক্সপোনেনশিয়াল | $e^v$ | $\frac{d}{dv}(e^v) = e^v$ |
| **Tier 3 (Inner)** | অভ্যন্তরীণ বর্গমূল | $\sqrt{x}$ | $\frac{d}{dx}(\sqrt{x}) = \frac{1}{2\sqrt{x}}$ |
| **সরলীকরণ রূপ** | ঘাত সূচকীয় রূপ | $\frac{e^{\sqrt{x}}}{\sqrt{e^{\sqrt{x}}}}$ | $\sqrt{e^{\sqrt{x}}}$ |
| **সম্মিলিত রূপ** | পূর্ণাঙ্গ চেইন রুল | $\sqrt{e^{\sqrt{x}}}$ | $\frac{dy}{dx} = \frac{e^{\sqrt{x}}}{4\sqrt{x}\sqrt{e^{\sqrt{x}}}} = \frac{\sqrt{e^{\sqrt{x}}}}{4\sqrt{x}}$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Dropping Tier 3 Derivative):**
>   সবশেষ স্তরের $\sqrt{x}$-এর ব্যবকলন $\frac{1}{2\sqrt{x}}$ গুণ দিতে ভুলে যাওয়া একটি প্রধান ভুল।
> - **Trap 2 (Coefficient Multiplication Error):**
>   বহিস্থ হর $2$ এবং অভ্যন্তরীণ হর $2$ গুণ হয়ে হর সর্বদা $4\sqrt{x}$ হবে; ভুলবশত হরকে $2\sqrt{x}$ লেখা যাবে না।
> - **Trap 3 (Canceling Nested Roots):**
>   $\frac{e^{\sqrt{x}}}{\sqrt{e^{\sqrt{x}}}} = (e^{\sqrt{x}})^{1 - \frac{1}{2}} = (e^{\sqrt{x}})^{\frac{1}{2}} = \sqrt{e^{\sqrt{x}}}$। উভয় প্রকাশভঙ্গিই সঠিক ও প্রমিত।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: প্রদত্ত সমীকরণ লেখা ও অন্তরীকরণ অপারেটর প্রয়োগ**
ধরি,
$$y = \sqrt{e^{\sqrt{x}}}$$

উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর $\frac{d}{dx}$ প্রয়োগ করে পাই:
$$\frac{dy}{dx} = \frac{d}{dx}\left[\sqrt{e^{\sqrt{x}}}\right]$$

### **ধাপ ২: Tier 1 (বহিস্থ বর্গমূল) চেইন রুল বিস্তার**
আমরা জানি, $\frac{d}{du}(\sqrt{u}) = \frac{1}{2\sqrt{u}}$। এখানে $u = e^{\sqrt{x}}$ বিবেচনা করে:
$$\frac{dy}{dx} = \frac{1}{2\sqrt{e^{\sqrt{x}}}} \cdot \frac{d}{dx}\left(e^{\sqrt{x}}\right)$$

### **ধাপ ৩: Tier 2 (এক্সপোনেনশিয়াল) ও Tier 3 (অভ্যন্তরীণ বর্গমূল) চেইন রুল বিস্তার**
আমরা জানি, $\frac{d}{dv}(e^v) = e^v$ এবং $v = \sqrt{x}$।
$$\frac{dy}{dx} = \frac{1}{2\sqrt{e^{\sqrt{x}}}} \cdot e^{\sqrt{x}} \cdot \frac{d}{dx}\left(\sqrt{x}\right)$$

### **ধাপ ৪: অভ্যন্তরীণ পদ $\sqrt{x}$-এর ব্যবকলন সম্পাদন**
আমরা জানি, $\frac{d}{dx}(\sqrt{x}) = \frac{1}{2\sqrt{x}}$। মান বসিয়ে পাই:
$$\frac{dy}{dx} = \frac{1}{2\sqrt{e^{\sqrt{x}}}} \cdot e^{\sqrt{x}} \cdot \frac{1}{2\sqrt{x}}$$

### **ধাপ ৫: বীজগাণিতিক গুণফল ও চূড়ান্ত প্রমিত উত্তর (Final Standard Answer)**
লব ও হরের পদগুলো গুণ করে পাই:
$$\mathbf{\frac{dy}{dx} = \frac{e^{\sqrt{x}}}{4\sqrt{x}\sqrt{e^{\sqrt{x}}}} = \frac{\sqrt{e^{\sqrt{x}}}}{4\sqrt{x}}} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Domain, Non-Negativity & Origin Behavior (AMIE Rigor)**
> - **Inner Radical Condition:** $\sqrt{x}$ বাস্তব হওয়ার জন্য $x \ge 0$।
> - **Differentiability Condition ($x > 0$):** অন্তরজের হরে $\sqrt{x}$ বিদ্যমান থাকায় $x \neq 0$।
>   $$\text{Dom}(y) = [0, \infty), \quad \text{Dom}\left(\frac{dy}{dx}\right) = (0, \infty)$$
> - **Limit at Origin:** যখন $x \to 0^+$, তখন $\sqrt{e^{\sqrt{x}}} \to e^0 = 1$, কিন্তু হর $4\sqrt{x} \to 0^+$, ফলে $\frac{dy}{dx} \to +\infty$ (মূলবিন্দুতে উল্লম্ব স্পর্শক)।

---

> [!TIP]
> **English Note — Exponent Algebraic Simplification (Alternative Fast Method)**
> সূচকের নিয়ম অনুসারে:
> $$y = \sqrt{e^{\sqrt{x}}} = \left(e^{\sqrt{x}}\right)^{\frac{1}{2}} = e^{\frac{1}{2}\sqrt{x}}$$
> এখন সরাসরি চেইন রুল প্রয়োগ করে:
> $$\frac{dy}{dx} = e^{\frac{1}{2}\sqrt{x}} \cdot \frac{d}{dx}\left(\frac{1}{2}\sqrt{x}\right) = e^{\frac{\sqrt{x}}{2}} \cdot \left(\frac{1}{2} \cdot \frac{1}{2\sqrt{x}}\right) = \frac{\sqrt{e^{\sqrt{x}}}}{4\sqrt{x}}$$
> (উভয় পদ্ধতিতে প্রাপ্ত উত্তর নিখুঁতভাবে অভিন্ন)।

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. বহিস্থ বর্গমূল চেইন রুল বিস্তার** | $\frac{1}{2\sqrt{e^{\sqrt{x}}}} \cdot \frac{d}{dx}(e^{\sqrt{x}})$ সঠিক উপস্থাপন | **১.৫** |
| **২. সূচকীয় ও অভ্যন্তরীণ বর্গমূল অন্তরজ** | $e^{\sqrt{x}} \cdot \frac{1}{2\sqrt{x}}$ সফলভাবে নির্ণয় | **২.০** |
| **৩. প্রমিত ভগ্নাংশ রূপ ও সহগ গুণ** | $\frac{e^{\sqrt{x}}}{4\sqrt{x}\sqrt{e^{\sqrt{x}}}}$ বা $\frac{\sqrt{e^{\sqrt{x}}}}{4\sqrt{x}}$ সমাপনী | **১.৫** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
