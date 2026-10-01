# Chain Rule Problem 01: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \sin 5x$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Fundamental Chain Rule (Composite Function) Formulation**
> The function is a composite trigonometric function of the form $y = f(g(x))$:
> - **Outer Function:** $f(u) = \sin u$
> - **Inner Function:** $u = g(x) = 5x$
> 
> According to Leibniz's **Chain Rule (শৃঙ্খল নিয়ম)**:
> $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$
> Direct operator formulation: $\frac{d}{dx}[\sin(g(x))] = \cos(g(x)) \cdot g'(x)$.

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান (Component) | ফাংশন রূপ | প্রমিত সূত্র (Standard Derivative) |
| :--- | :--- | :--- |
| **বহিঃস্থ ফাংশন (Outer)** | $\sin u$ | $\frac{d}{du}(\sin u) = \cos u$ |
| **অভ্যন্তরীণ ফাংশন (Inner)** | $u = 5x$ | $\frac{du}{dx} = \frac{d}{dx}(5x) = 5$ |
| **সাধারণ আকার (General)** | $\sin(ax)$ | $\frac{d}{dx}(\sin ax) = a\cos(ax)$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Forgetting Inner Function Derivative):**
>   সবচেয়ে পরিচিত ভুল হলো কেবল $\cos 5x$ লিখে ফেলা এবং ভেতরের $5x$-এর অন্তরজ $5$ দিয়ে গুণ করতে ভুলে যাওয়া।
> - **Trap 2 (Argument Misplacement):**
>   $5 \cos 5x \neq \cos(25x)$। সহগ $5$ হলো সম্পূর্ণ ফাংশনের গুণনীয়ক, কোণের ভেতরের গুণ নয়।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর প্রয়োগ করে**
$$\frac{dy}{dx} = \frac{d}{dx}(\sin 5x)$$

### **ধাপ ২: শৃঙ্খল নিয়ম (Chain Rule) অনুসারে বিস্তার**
$$\frac{dy}{dx} = \cos 5x \cdot \frac{d}{dx}(5x)$$

### **ধাপ ৩: অভ্যন্তরীণ রৈখিক পদ $5x$-এর অন্তরজ নির্ণয়**
আমরা জানি, $\frac{d}{dx}(5x) = 5 \cdot \frac{d}{dx}(x) = 5 \cdot 1 = 5$।
$$\frac{dy}{dx} = \cos 5x \cdot 5$$

### **ধাপ ৪: চূড়ান্ত প্রমিত উত্তর (Final Standard Answer)**
$$\mathbf{\frac{dy}{dx} = 5\cos 5x} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Amplitude, Frequency & Harmonics in Engineering (AMIE Context)**
> - **Simple Harmonic Motion (SHM):** যদি $y = \sin 5t$ একটি কম্পনশীল সিস্টেমের সরণ (Displacement) নির্দেশ করে, তবে এর বেগ (Velocity) $v = \frac{dy}{dt} = 5\cos 5t$।
> - **Frequency Scaling:** কৌণিক কম্পাঙ্ক $\omega = 5 \text{ rad/s}$ হওয়ায় অন্তরীকরণ প্রক্রিয়ায় বিস্তার (Amplitude) $5$ গুণ বৃদ্ধি পায়।
> - **Domain:** ফাংশন ও এর ডেরিভেটিভ সমগ্র বাস্তব রেখায় সংজ্ঞায়িত: $\text{Dom}(y) = \text{Dom}\left(\frac{dy}{dx}\right) = \mathbb{R} = (-\infty, \infty)$।

---

> [!TIP]
> **English Note — Formal Substitution Model**
> Let $u = 5x \implies \frac{du}{dx} = 5$.
> Then $y = \sin u \implies \frac{dy}{du} = \cos u$.
> By Chain Rule:
> $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = (\cos u) \cdot 5 = 5\cos 5x$$
> *(Step-by-step substitution guarantees zero deduction in AMIE Section-A exams!)*

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. Chain Rule কাঠামো** | $\cos 5x \cdot \frac{d}{dx}(5x)$ সঠিক উপস্থাপন | **২.০** |
| **২. অভ্যন্তরীণ অন্তরজ** | $\frac{d}{dx}(5x) = 5$ সঠিকভাবে সম্পন্ন করা | **১.৫** |
| **৩. প্রমিত চূড়ান্ত উত্তর** | $5\cos 5x$ আকারে স্পষ্ট উত্তর লেখা | **১.৫** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
