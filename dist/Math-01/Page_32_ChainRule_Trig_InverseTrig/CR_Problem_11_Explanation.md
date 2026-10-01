# Chain Rule Problem 11: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \cos(\log 5x)$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — 3-Tier Trigonometric-Logarithmic Chain Rule Formulation**
> The problem is a 3-tier composite function:
> - **Tier 1 (Outer Trigonometric Cosine):** $f(u) = \cos u \implies f'(u) = -\sin u$
> - **Tier 2 (Middle Natural Logarithm):** $u = g(v) = \log v \implies g'(v) = \frac{1}{v}$
> - **Tier 3 (Inner Linear Core):** $v = h(x) = 5x \implies h'(x) = 5$
> 
> Applying Leibniz's **3-Tier Chain Rule**:
> $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dv} \cdot \frac{dv}{dx} = [-\sin(\log 5x)] \cdot \left(\frac{1}{5x}\right) \cdot (5) = -\frac{\sin(\log 5x)}{x}$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| স্তর (Tier) | উপাদান (Component) | ফাংশন রূপ | প্রমিত সূত্র (Standard Derivative) |
| :--- | :--- | :--- | :--- |
| **Tier 1 (Outer)** | কোসাইন ফাংশন | $\cos u$ | $\frac{d}{du}(\cos u) = -\sin u$ |
| **Tier 2 (Middle)** | প্রাকৃতিক লগারিদম | $\log v$ | $\frac{d}{dv}(\log v) = \frac{1}{v}$ |
| **Tier 3 (Inner)** | রৈখিক আর্গুমেন্ট | $5x$ | $\frac{d}{dx}(5x) = 5$ |
| **সরলীকরণ** | ধ্রুবক ৫ অপনয়ন | $\frac{5}{5x}$ | $\frac{1}{x}$ |
| **সম্মিলিত রূপ** | পূর্ণাঙ্গ চেইন রুল | $\cos(\log 5x)$ | $\frac{dy}{dx} = -\frac{1}{x}\sin(\log 5x)$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Missing Negative Sign of Cosine Derivative):**
>   $\cos(\cdot)$-এর অন্তরজ হলো $-\sin(\cdot)$। ঋণাত্মক চিহ্ন বাদ পড়া একটি প্রচলিত ভুল।
> - **Trap 2 (Omitting Inner Linear Derivative $5$):**
>   $\log(5x)$-এর অন্তরজে $\frac{1}{5x}$ লেখার পর আবার $(5x)$-এর ব্যবকলন $5$ গুণ করতে হবে। (উল্লেখ্য: $\frac{d}{dx}(\log 5x) = \frac{1}{5x} \cdot 5 = \frac{1}{x}$)।
> - **Trap 3 (Treating Log-Multiplier Property):**
>   $\log(5x) = \log 5 + \log x \implies \frac{d}{dx}[\log 5 + \log x] = 0 + \frac{1}{x} = \frac{1}{x}$। এটি একটি চমৎকার বিকল্প যাচাইকরণ কৌশল!

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: প্রদত্ত সমীকরণ লেখা ও অন্তরীকরণ অপারেটর প্রয়োগ**
ধরি,
$$y = \cos(\log 5x)$$

উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর $\frac{d}{dx}$ প্রয়োগ করে পাই:
$$\frac{dy}{dx} = \frac{d}{dx}\left[\cos(\log 5x)\right]$$

### **ধাপ ২: Tier 1 (কোসাইন) ফাংশনে চেইন রুল প্রয়োগ**
আমরা জানি, $\frac{d}{du}(\cos u) = -\sin u$। এখানে $u = \log 5x$ বিবেচনা করে:
$$\frac{dy}{dx} = -\sin(\log 5x) \cdot \frac{d}{dx}(\log 5x)$$

### **ধাপ ৩: Tier 2 (লগারিদম) ও Tier 3 (রৈখিক পদ $5x$) চেইন রুল বিস্তার**
আমরা জানি, $\frac{d}{dv}(\log v) = \frac{1}{v}$ এবং $v = 5x$।
$$\frac{dy}{dx} = -\sin(\log 5x) \cdot \frac{1}{5x} \cdot \frac{d}{dx}(5x)$$

### **ধাপ ৪: অভ্যন্তরীণ পদ $5x$-এর ব্যবকলন ও ধ্রুবক ৫ বাতিলকরণ**
$\frac{d}{dx}(5x) = 5$ বসিয়ে পাই:
$$\frac{dy}{dx} = -\sin(\log 5x) \cdot \frac{1}{5x} \cdot 5$$
$$= -\sin(\log 5x) \cdot \frac{1}{x}$$

### **ধাপ ৫: চূড়ান্ত প্রমিত রূপ (Final Standard Answer)**
$$\mathbf{\frac{dy}{dx} = -\frac{1}{x}\sin(\log 5x) = -\frac{\sin(\log 5x)}{x}} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Domain, Logarithmic Positivity & Asymptotic Behavior (AMIE Rigor)**
> - **Logarithmic Real Condition:** $\log(5x)$ বাস্তব হওয়ার জন্য $5x > 0 \implies x > 0$।
> - **Domain:** $\text{Dom}(y) = \text{Dom}\left(\frac{dy}{dx}\right) = (0, \infty)$।
> - **Origin Behavior ($x \to 0^+$):** যখন $x \to 0^+$, তখন $\log 5x \to -\infty$। কোসাইন ও সাইন পদগুলো $[-1, 1]$ পরিসরে অসীমভাবে দ্রুত স্পন্দিত (infinite frequency oscillation) হতে থাকে এবং $\frac{1}{x} \to \infty$ হওয়ার কারণে অন্তরজের বিস্তার অসীম হয়।

---

> [!TIP]
> **English Note — Substitution & Logarithmic Splitting Proofs**
> **Method A (3-Tier Substitution):**
> Let $v = 5x \implies \frac{dv}{dx} = 5$
> Let $u = \log v \implies \frac{du}{dv} = \frac{1}{v} = \frac{1}{5x}$
> Then $y = \cos u \implies \frac{dy}{du} = -\sin u = -\sin(\log 5x)$
> $$\frac{dy}{dx} = [-\sin(\log 5x)] \cdot \left(\frac{1}{5x}\right) \cdot 5 = -\frac{\sin(\log 5x)}{x}$$
> 
> **Method B (Log Splitting):**
> $y = \cos(\log 5 + \log x) \implies \frac{dy}{dx} = -\sin(\log 5 + \log x) \cdot \left(0 + \frac{1}{x}\right) = -\frac{\sin(\log 5x)}{x}$

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. কোসাইন চেইন রুল ও ঋণাত্মক চিহ্ন** | $-\sin(\log 5x) \cdot \frac{d}{dx}(\log 5x)$ সঠিক উপস্থাপন | **২.০** |
| **২. লগারিদমিক ও রৈখিক অন্তরজ বিস্তার** | $\frac{1}{5x} \cdot 5 = \frac{1}{x}$ সঠিকভাবে সম্পন্ন করা | **১.৫** |
| **৩. প্রমিত চূড়ান্ত রূপ** | $-\frac{1}{x}\sin(\log 5x)$ আকারে প্রকাশ | **১.৫** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
