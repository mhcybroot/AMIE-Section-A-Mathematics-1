# Chain Rule Problem 16: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = (4x + 3)^2$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Polynomial Power Chain Rule Formulation**
> The problem is a composite algebraic power function:
> - **Outer Function (Power Rule):** $f(u) = u^2 \implies f'(u) = 2u$
> - **Inner Function (Linear Polynomial):** $u = g(x) = 4x + 3 \implies g'(x) = 4$
> 
> Applying Leibniz's **Chain Rule**:
> $$\frac{dy}{dx} = \frac{d}{du}(u^2) \cdot \frac{du}{dx} = 2(4x + 3) \cdot \frac{d}{dx}(4x + 3) = 2(4x + 3) \cdot 4 = 8(4x + 3) = 32x + 24$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান (Component) | ফাংশন রূপ | প্রমিত সূত্র (Standard Derivative) |
| :--- | :--- | :--- |
| **বহিঃস্থ ঘাত ফাংশন (Outer Power)** | $u^2$ | $\frac{d}{du}(u^n) = n u^{n-1} \implies \frac{d}{du}(u^2) = 2u$ |
| **অভ্যন্তরীণ রৈখিক বহুপদী (Inner Linear)** | $u = 4x + 3$ | $\frac{du}{dx} = \frac{d}{dx}(4x + 3) = 4$ |
| **সম্মিলিত চেইন রুল** | $(4x + 3)^2$ | $\frac{dy}{dx} = 8(4x + 3) = 32x + 24$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Omitting the Inner Linear Derivative 4):**
>   বহিঃস্থ ঘাতের জন্য শুধু $2(4x+3)$ লিখে শেষ ভাবা ভুল। ভিতরের রৈখিক পদ $(4x+3)$-এর অন্তরজ $4$ অবশ্যই গুণ করতে হবে।
> - **Trap 2 (Distributive Multiplication Errors):**
>   $2(4x+3) \cdot 4 = 8(4x+3)$। যদি বন্ধনী ভেঙে লেখা হয়, তবে $8 \times 4x + 8 \times 3 = 32x + 24$ হবে; $32x + 12$ লেখা ভুল।
> - **Trap 3 (Equivalence of Product & Expanded Forms):**
>   উভয় রূপ $8(4x+3)$ এবং $32x+24$ প্রমিত। তবে উৎপাদক রূপ $8(4x+3)$ পাঠ্যপুস্তকের আদর্শ উত্তর।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: প্রদত্ত সমীকরণ লেখা ও অন্তরীকরণ অপারেটর প্রয়োগ**
ধরি,
$$y = (4x + 3)^2$$

উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর $\frac{d}{dx}$ প্রয়োগ করে পাই:
$$\frac{dy}{dx} = \frac{d}{dx}\left[(4x + 3)^2\right]$$

### **ধাপ ২: বহিঃস্থ ঘাতের ওপর Power Rule ও শৃঙ্খল নিয়ম প্রয়োগ**
আমরা জানি, $\frac{d}{du}(u^2) = 2u$। এখানে $u = 4x + 3$ বিবেচনা করে:
$$\frac{dy}{dx} = 2(4x + 3)^{2-1} \cdot \frac{d}{dx}(4x + 3)$$
$$\implies \frac{dy}{dx} = 2(4x + 3) \cdot \frac{d}{dx}(4x + 3)$$

### **ধাপ ৩: অভ্যন্তরীণ রৈখিক পদ $(4x+3)$-এর ব্যবকলন সম্পাদন**
যোগের নিয়ম ও ধ্রুবক অন্তরজ সূত্র অনুযায়ী:
$$\frac{d}{dx}(4x + 3) = \frac{d}{dx}(4x) + \frac{d}{dx}(3) = 4(1) + 0 = 4$$

অতএব:
$$\frac{dy}{dx} = 2(4x + 3) \cdot 4$$

### **ধাপ ৪: স্কেলার গুণফল ও চূড়ান্ত প্রমিত উত্তর (Final Standard Answer)**
ধ্রুবক পদগুলো গুণ করে পাই:
$$\mathbf{\frac{dy}{dx} = 8(4x + 3) = 32x + 24} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Domain, Polynomial Smoothness & Linearity of Derivative (AMIE Rigor)**
> - **Entire Domain:** বহুপদী ফাংশন হওয়ায় $y$ এবং $\frac{dy}{dx}$ সমগ্র বাস্তব রেখা $\mathbb{R}$ জুড়ে অবিচ্ছিন্ন ও মসৃণ।
>   $$\text{Dom}(y) = \text{Dom}\left(\frac{dy}{dx}\right) = (-\infty, \infty) = \mathbb{R}$$
> - **Stationary / Critical Point:**
>   $$\frac{dy}{dx} = 0 \implies 8(4x + 3) = 0 \implies x = -\frac{3}{4}$$
>   $x = -\frac{3}{4}$ বিন্দুতে বক্ররেখার নূন্যতম মান (Global Minimum) $y = 0$ অবস্থান করে।

---

> [!TIP]
> **English Note — Algebraic Expansion Alternative Method**
> $(a+b)^2 = a^2 + 2ab + b^2$ সূত্র দিয়ে বর্গ বিস্তার করে:
> $$y = (4x + 3)^2 = 16x^2 + 24x + 9$$
> পদভিত্তিক অন্তরীকরণ করে:
> $$\frac{dy}{dx} = \frac{d}{dx}(16x^2 + 24x + 9) = 16(2x) + 24(1) + 0 = 32x + 24 = 8(4x + 3)$$
> (উভয় পদ্ধতিতে প্রাপ্ত ফলাফল হুবহু অভিন্ন)।

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. Power Rule & Chain Rule বিস্তার** | $2(4x+3) \cdot \frac{d}{dx}(4x+3)$ সঠিক উপস্থাপন | **২.০** |
| **২. রৈখিক পদের অন্তরজ নির্ণয়** | $\frac{d}{dx}(4x+3) = 4$ সফলভাবে সম্পাদন | **১.৫** |
| **৩. স্কেলার গুণ ও প্রমিত রূপ** | $8(4x+3)$ বা $32x+24$ আকারে সমাপনী | **১.৫** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
