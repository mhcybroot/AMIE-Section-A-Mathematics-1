# Chain Rule Problem 17: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \frac{2}{(x^4 + 2)^3} \quad \text{অথবা} \quad y = 2(x^4 + 2)^{-3}$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Reciprocal Power Chain Rule Formulation**
> The problem is a rational function with a composite polynomial denominator:
> - **Exponents Transformation:** $y = 2(x^4 + 2)^{-3}$
> - **Outer Power Rule:** $f(u) = 2u^{-3} \implies f'(u) = 2(-3)u^{-4} = -6u^{-4} = -\frac{6}{u^4}$
> - **Inner Polynomial:** $u = g(x) = x^4 + 2 \implies g'(x) = 4x^3$
> 
> Applying Leibniz's **Chain Rule**:
> $$\frac{dy}{dx} = \frac{d}{du}(2u^{-3}) \cdot \frac{du}{dx} = -6(x^4 + 2)^{-4} \cdot \frac{d}{dx}(x^4 + 2) = -6(x^4 + 2)^{-4} \cdot (4x^3) = -\frac{24x^3}{(x^4 + 2)^4}$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান (Component) | ফাংশন রূপ | প্রমিত সূত্র (Standard Derivative) |
| :--- | :--- | :--- |
| **বহিঃস্থ ঋণাত্মক ঘাত (Outer Power)** | $2u^{-3}$ | $\frac{d}{du}(2u^{-3}) = 2(-3)u^{-4} = -6u^{-4}$ |
| **অভ্যন্তরীণ বহুপদী (Inner Polynomial)** | $u = x^4 + 2$ | $\frac{du}{dx} = \frac{d}{dx}(x^4 + 2) = 4x^3$ |
| **সম্মিলিত চেইন রুল** | $2(x^4 + 2)^{-3}$ | $\frac{dy}{dx} = -\frac{24x^3}{(x^4 + 2)^4}$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Exponent Subtraction Error with Negative Powers):**
>   $-3 - 1 = -4$। ভুলবশত $-3 - 1 = -2$ লিখলে সম্পূর্ণ অন্তরজ ভুল হয়ে যাবে।
> - **Trap 2 (Omitting the Inner Derivative $4x^3$):**
>   শুধু $-6(x^4+2)^{-4}$ লিখে থামলে ভিতরের $x^4$-এর অন্তরজ বাদ পড়ে যাবে।
> - **Trap 3 (Sign Error):**
>   ঋণাত্মক ঘাত নামানোর সময় $-6$ উৎপন্ন হয়, ফলে চূড়ান্ত উত্তরের আগে মাইনাস চিহ্ন নিশ্চিত করতে হবে।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: প্রদত্ত ভগ্নাংশকে ঋণাত্মক ঘাত আকারে প্রকাশ**
ধরি,
$$y = \frac{2}{(x^4 + 2)^3} = 2(x^4 + 2)^{-3}$$

উভয় পক্ষে $x$-এর সাপেক্ষে ব্যবকলন অপারেটর $\frac{d}{dx}$ প্রয়োগ করে পাই:
$$\frac{dy}{dx} = \frac{d}{dx}\left[2(x^4 + 2)^{-3}\right]$$

### **ধাপ ২: বহিঃস্থ ঘাতের ওপর Power Rule ও শৃঙ্খল নিয়ম প্রয়োগ**
আমরা জানি, $\frac{d}{du}(u^n) = n u^{n-1}$। এখানে $u = x^4 + 2$ এবং $n = -3$ বিবেচনা করে:
$$\frac{dy}{dx} = 2 \cdot (-3)(x^4 + 2)^{-3 - 1} \cdot \frac{d}{dx}(x^4 + 2)$$
$$\implies \frac{dy}{dx} = -6(x^4 + 2)^{-4} \cdot \frac{d}{dx}(x^4 + 2)$$

### **ধাপ ৩: অভ্যন্তরীণ বহুপদী পদ $(x^4+2)$-এর ব্যবকলন সম্পাদন**
যেহেতু $\frac{d}{dx}(x^4 + 2) = 4x^3 + 0 = 4x^3$:
$$\frac{dy}{dx} = -6(x^4 + 2)^{-4} \cdot 4x^3$$

### **ধাপ ৪: সহগ গুণ ও ধনাত্মক ঘাতে ভগ্নাংশ রূপান্তর (Final Standard Answer)**
ধ্রুবকগুলো গুণ করে $(-6 \times 4 = -24)$ এবং ঋণাত্মক ঘাতকে হরে এনে পাই:
$$\mathbf{\frac{dy}{dx} = -6(x^4 + 2)^{-4} \cdot 4x^3 = -\frac{24x^3}{(x^4 + 2)^4}} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Domain, Non-Zero Denominator & Symmetry (AMIE Rigor)**
> - **Denominator Real Positivity:** যে কোনো বাস্তব $x \in \mathbb{R}$-এর জন্য $x^4 \ge 0 \implies x^4 + 2 \ge 2 > 0$।
> - **Absence of Singularities:** হর কখনোই শূন্য হতে পারে না, ফলে ফাংশনটি সমগ্র বাস্তব রেখায় মসৃণ ও অবিচ্ছিন্ন।
>   $$\text{Dom}(y) = \text{Dom}\left(\frac{dy}{dx}\right) = (-\infty, \infty) = \mathbb{R}$$
> - **Symmetry & Critical Point:**
>   - $y(x)$ একটি জোড় ফাংশন (Even Function): $y(-x) = y(x)$।
>   - $\frac{dy}{dx}$ একটি বিজোড় ফাংশন (Odd Function): $\frac{dy}{dx}(-x) = -\frac{dy}{dx}(x)$।
>   - $\frac{dy}{dx} = 0 \implies -24x^3 = 0 \implies x = 0$ (বক্ররেখার শীর্ষবিন্দু/Global Maximum $y(0) = \frac{2}{8} = \frac{1}{4}$)।

---

> [!TIP]
> **English Note — Quotient Rule Alternative Verification**
> $y = \frac{u}{v}$, where $u = 2 \implies u' = 0$, and $v = (x^4 + 2)^3 \implies v' = 3(x^4 + 2)^2 \cdot 4x^3 = 12x^3(x^4 + 2)^2$।
> $$\frac{dy}{dx} = \frac{v u' - u v'}{v^2} = \frac{(x^4 + 2)^3(0) - 2 \cdot 12x^3(x^4 + 2)^2}{[(x^4 + 2)^3]^2} = \frac{-24x^3(x^4 + 2)^2}{(x^4 + 2)^6} = -\frac{24x^3}{(x^4 + 2)^4}$$
> (উভয় পদ্ধতিতে প্রাপ্ত ফলাফল হুবহু অভিন্ন)।

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. ঘাত রূপান্তর ও চেইন রুল বিস্তার** | $-6(x^4+2)^{-4} \cdot \frac{d}{dx}(x^4+2)$ সঠিক প্রয়োগ | **২.০** |
| **২. অভ্যন্তরীণ বহুপদী অন্তরজ** | $\frac{d}{dx}(x^4+2) = 4x^3$ নিখুঁতভাবে সম্পাদন | **১.৫** |
| **৩. সহগ গুণ ও প্রমিত ভগ্নাংশ রূপ** | $-\frac{24x^3}{(x^4+2)^4}$ আকারে সমাপনী | **১.৫** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
