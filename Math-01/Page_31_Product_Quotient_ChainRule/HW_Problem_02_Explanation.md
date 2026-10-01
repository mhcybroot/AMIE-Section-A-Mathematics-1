# Home Work Problem 02: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \frac{x-1}{x+1}$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Linear Rational (Möbius) Quotient Formulation**
> The problem involves a standard first-degree rational polynomial quotient (a linear fractional transformation):
> $$y = \frac{u(x)}{v(x)}, \quad \text{where } u(x) = x - 1, \; v(x) = x + 1$$
> Applying the fundamental **Quotient Rule**:
> $$\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v \frac{du}{dx} - u \frac{dv}{dx}}{v^2}$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান (Component) | ফাংশন রূপ | প্রমিত অন্তরজ সূত্র (Standard Derivative) |
| :--- | :--- | :--- |
| **লব ($u$)** | $x - 1$ | $\frac{d}{dx}(x - 1) = 1$ |
| **হর ($v$)** | $x + 1$ | $\frac{d}{dx}(x + 1) = 1$ |
| **হরের বর্গ ($v^2$)** | $(x + 1)^2$ | $(x + 1)^2$ *(উৎপাদক আকারেই রাখা শ্রেয়)* |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Sign Distribution in Subtraction):**
>   লবে বিয়োগ করার সময় বন্ধনী পরিবর্তন লক্ষ্য করুন:
>   $$(x+1) - (x-1) = x + 1 - x + 1 = \mathbf{+2}$$
>   ভুল করে $x + 1 - x - 1 = 0$ লিখলে সম্পূর্ণ সমাধান বাতিল হয়ে যাবে।
> - **Trap 2 (Denominator Expansion):**
>   হরকে $(x+1)^2$ আকারেই রাখা উচিত; $x^2 + 2x + 1$ বিস্তার করার প্রয়োজন নেই।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর প্রয়োগ করে**
$$\frac{dy}{dx} = \frac{d}{dx}\left(\frac{x-1}{x+1}\right)$$

### **ধাপ ২: ভাগফলের সূত্র (Quotient Rule) অনুসারে সাজানো**
$$\frac{dy}{dx} = \frac{(x+1)\frac{d}{dx}(x-1) - (x-1)\frac{d}{dx}(x+1)}{(x+1)^2}$$

### **ধাপ ৩: প্রমিত অন্তরজের মান $\frac{d}{dx}(x \pm 1) = 1$ বসিয়ে**
$$\frac{dy}{dx} = \frac{(x+1)\cdot 1 - (x-1)\cdot 1}{(x+1)^2}$$

### **ধাপ ৪: লবের বন্ধনী বিস্তার ও পদ অপসারণ (Cancellation)**
$$\frac{dy}{dx} = \frac{x + 1 - x + 1}{(x+1)^2}$$

### **ধাপ ৫: চূড়ান্ত প্রমিত উত্তর (Final Standard Form)**
$$\mathbf{\frac{dy}{dx} = \frac{2}{(x+1)^2}} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Monotonicity, Rigor & Singularity Analysis (AMIE Rigor)**
> - **Domain of $y(x)$ and $\frac{dy}{dx}$:**
>   হরের শূন্যতা পরিহারের জন্য $x + 1 \neq 0 \implies x \neq -1$।
>   অতএব, ডোমেন: $\text{Dom}(y) = \text{Dom}\left(\frac{dy}{dx}\right) = \mathbb{R} \setminus \{-1\} = (-\infty, -1) \cup (-1, \infty)$।
> - **Strictly Monotonic Increasing Property:**
>   যেহেতু সকল $x \neq -1$-এর জন্য $(x+1)^2 > 0$, তাই $\frac{dy}{dx} = \frac{2}{(x+1)^2} > 0$।
>   ফাংশনটি এর সমগ্র সংজ্ঞার ডোমেনে **সর্বদা ক্রমবর্ধমান (Strictly Increasing)** এবং এর কোনো চরম বিন্দু (Extrema/Critical Points) নেই।

---

> [!TIP]
> **English Note — Algebraic Partial Fraction / Shift Verification**
> We can decompose $y$ algebraically before differentiating:
> $$y = \frac{(x+1) - 2}{x+1} = 1 - \frac{2}{x+1} = 1 - 2(x+1)^{-1}$$
> Differentiating directly using the Power Rule:
> $$\frac{dy}{dx} = 0 - 2 \cdot (-1)(x+1)^{-2} = \frac{2}{(x+1)^2}$$
> *(Linear fractional derivative verified in 10 seconds!)*

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. Quotient Rule কাঠামো** | $\frac{v u' - u v'}{v^2}$ সূত্রের সঠিক বিস্তার | **১.৫** |
| **২. অন্তরজ নির্ণয়** | $\frac{d}{dx}(x \pm 1) = 1$ সঠিকভাবে বসানো | **১.৫** |
| **৩. লবের চিহ্ন সরলীকরণ** | $(x+1) - (x-1) = 2$ সঠিক করা | **১.০** |
| **৪. প্রমিত উত্তর** | $\frac{2}{(x+1)^2}$ আকারে চূড়ান্ত উত্তর | **১.০** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
