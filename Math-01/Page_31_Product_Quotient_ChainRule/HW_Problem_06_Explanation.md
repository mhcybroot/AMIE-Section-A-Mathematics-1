# Home Work Problem 06: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \frac{x+1}{x+2}$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Linear Rational Quotient Formulation**
> The problem presents a first-degree monic rational polynomial quotient:
> $$y = \frac{u(x)}{v(x)}, \quad \text{where } u(x) = x + 1, \; v(x) = x + 2$$
> Applying the fundamental **Quotient Rule**:
> $$\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v \frac{du}{dx} - u \frac{dv}{dx}}{v^2}$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান (Component) | ফাংশন রূপ | প্রমিত অন্তরজ সূত্র (Standard Derivative) |
| :--- | :--- | :--- |
| **লব ($u$)** | $x + 1$ | $\frac{d}{dx}(x + 1) = 1$ |
| **হর ($v$)** | $x + 2$ | $\frac{d}{dx}(x + 2) = 1$ |
| **হরের বর্গ ($v^2$)** | $(x + 2)^2$ | $(x + 2)^2$ *(উৎপাদক আকারেই রাখা শ্রেয়)* |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Sign Distribution Across Subtraction):**
>   $(x + 2) - (x + 1) = \mathbf{x + 2 - x - 1 = +1}$। বন্ধনী খোলার সময় ভুল করে $x + 2 - x + 1 = 3$ লিখলে সম্পূর্ণ সমাধান বাতিল হয়ে যাবে।
> - **Trap 2 (Factored Form Retention):**
>   হরকে $(x + 2)^2$ আকারেই রাখা সমীচীন; $x^2 + 4x + 4$ বিস্তার করার প্রয়োজন নেই।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর প্রয়োগ করে**
$$\frac{dy}{dx} = \frac{d}{dx}\left(\frac{x+1}{x+2}\right)$$

### **ধাপ ২: ভাগফলের সূত্র (Quotient Rule) অনুসারে সাজানো**
$$\frac{dy}{dx} = \frac{(x+2)\frac{d}{dx}(x+1) - (x+1)\frac{d}{dx}(x+2)}{(x+2)^2}$$

### **ধাপ ৩: প্রমিত অন্তরজের মান $\frac{d}{dx}(x+1)=1, \frac{d}{dx}(x+2)=1$ বসিয়ে**
$$\frac{dy}{dx} = \frac{(x+2)\cdot 1 - (x+1)\cdot 1}{(x+2)^2}$$

### **ধাপ ৪: লবের বন্ধনী বিস্তার ও পদ অপসারণ (Cancellation)**
$$\frac{dy}{dx} = \frac{x + 2 - x - 1}{(x+2)^2}$$

### **ধাপ ৫: চূড়ান্ত প্রমিত উত্তর (Final Standard Answer)**
$$\mathbf{\frac{dy}{dx} = \frac{1}{(x+2)^2}} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Domain, Monotonicity & Asymptotes (AMIE Rigor)**
> - **Domain of Function & Derivative:**
>   হরের শূন্যতা পরিহারের জন্য $x + 2 \neq 0 \implies x \neq -2$।
>   অতএব, ডোমেন: $\text{Dom}(y) = \text{Dom}\left(\frac{dy}{dx}\right) = \mathbb{R} \setminus \{-2\} = (-\infty, -2) \cup (-2, \infty)$।
> - **Strict Increasing Monotonicity:**
>   যেহেতু সকল $x \neq -2$-এর জন্য $(x+2)^2 > 0$ এবং লব $1 > 0$, তাই $\frac{dy}{dx} > 0$।
>   ফাংশনটি এর সমগ্র সংজ্ঞার ডোমেনে **সর্বদা ক্রমবর্ধমান (Strictly Increasing)** এবং এর কোনো চরম বিন্দু (Extrema) নেই।
> - **Asymptotes:**
>   উল্লম্ব অসীমতট (Vertical Asymptote): $x = -2$
>   অনুভূমিক অসীমতট (Horizontal Asymptote): $y = \lim_{x \to \pm\infty}\frac{x+1}{x+2} = 1$

---

> [!TIP]
> **English Note — Double Verification: Determinant & Synthetic Shift**
> 1. **Determinant Method:** $y = \frac{1x+1}{1x+2} \implies ad - bc = (1)(2) - (1)(1) = 2 - 1 = 1 \implies \frac{dy}{dx} = \frac{1}{(x+2)^2}$
> 2. **Synthetic Shift:** $y = \frac{(x+2)-1}{x+2} = 1 - (x+2)^{-1} \implies \frac{dy}{dx} = 0 - (-1)(x+2)^{-2} = \frac{1}{(x+2)^2}$
> *(Both methods verify the exact standard result instantly!)*

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. Quotient Rule কাঠামো** | $\frac{v u' - u v'}{v^2}$ সূত্রের সঠিক বিস্তার | **১.৫** |
| **২. অন্তরজ নির্ণয়** | $\frac{d}{dx}(x+1)=1, \frac{d}{dx}(x+2)=1$ বসানো | **১.৫** |
| **৩. লবের বিস্তার ও কাটাকাটি** | $x + 2 - x - 1 = 1$ বের করা | **১.০** |
| **৪. প্রমিত উত্তর** | $\frac{1}{(x+2)^2}$ উপস্থাপন | **১.০** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
