# Home Work Problem 04: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \frac{2x}{x+1}$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Linear Rational Quotient Formulation**
> The problem presents a rational quotient where the numerator is a pure linear term $2x$ and the denominator is an affine polynomial $x + 1$:
> $$y = \frac{u(x)}{v(x)}, \quad \text{where } u(x) = 2x, \; v(x) = x + 1$$
> Applying the fundamental **Quotient Rule**:
> $$\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v \frac{du}{dx} - u \frac{dv}{dx}}{v^2}$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান (Component) | ফাংশন রূপ | প্রমিত অন্তরজ সূত্র (Standard Derivative) |
| :--- | :--- | :--- |
| **লব ($u$)** | $2x$ | $\frac{d}{dx}(2x) = 2$ |
| **হর ($v$)** | $x + 1$ | $\frac{d}{dx}(x + 1) = 1$ |
| **হরের বর্গ ($v^2$)** | $(x + 1)^2$ | $(x + 1)^2$ *(উৎপাদক আকারেই রাখা শ্রেয়)* |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Linear Term Subtraction):**
>   $2(x+1) - 2x = \mathbf{2x + 2 - 2x = +2}$। সরলীকরণের সময় ধ্রুবক পদ $2$ বাদ দিয়ে শুধু $0$ বা $2x$ লিখলে সম্পূর্ণ নম্বর কাটা যাবে।
> - **Trap 2 (Factored Form Retention):**
>   হরকে $(x+1)^2$ আকারেই রাখা সমীচীন; $x^2 + 2x + 1$ বিস্তার করার প্রয়োজন নেই।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর প্রয়োগ করে**
$$\frac{dy}{dx} = \frac{d}{dx}\left(\frac{2x}{x+1}\right)$$

### **ধাপ ২: ভাগফলের সূত্র (Quotient Rule) অনুসারে সাজানো**
$$\frac{dy}{dx} = \frac{(x + 1)\frac{d}{dx}(2x) - (2x)\frac{d}{dx}(x + 1)}{(x + 1)^2}$$

### **ধাপ ৩: প্রমিত অন্তরজের মান বসিয়ে**
আমরা জানি, $\frac{d}{dx}(2x) = 2$ এবং $\frac{d}{dx}(x+1) = 1$।
$$\frac{dy}{dx} = \frac{(x + 1)\cdot 2 - (2x)\cdot 1}{(x + 1)^2}$$

### **ধাপ ৪: লবের বন্ধনী বিস্তার ও পদ অপসারণ (Cancellation)**
$$\frac{dy}{dx} = \frac{2x + 2 - 2x}{(x + 1)^2}$$

### **ধাপ ৫: চূড়ান্ত প্রমিত উত্তর (Final Standard Answer)**
$$\mathbf{\frac{dy}{dx} = \frac{2}{(x + 1)^2}} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Domain, Monotonicity & Asymptotes (AMIE Rigor)**
> - **Domain of Function & Derivative:**
>   হরের শূন্যতা পরিহারের জন্য $x + 1 \neq 0 \implies x \neq -1$।
>   অতএব, ডোমেন: $\text{Dom}(y) = \text{Dom}\left(\frac{dy}{dx}\right) = \mathbb{R} \setminus \{-1\} = (-\infty, -1) \cup (-1, \infty)$।
> - **Strict Increasing Monotonicity:**
>   যেহেতু সকল $x \neq -1$-এর জন্য $(x + 1)^2 > 0$ এবং লব $2 > 0$, তাই $\frac{dy}{dx} > 0$।
>   ফাংশনটি এর সমগ্র ডোমেনে **সর্বদা ক্রমবর্ধমান (Strictly Increasing)**।
> - **Asymptotes:**
>   উল্লম্ব অসীম রেখা (Vertical Asymptote): $x = -1$
>   অনুভূমিক অসীম রেখা (Horizontal Asymptote): $y = \lim_{x \to \pm\infty}\frac{2x}{x+1} = 2$

---

> [!TIP]
> **English Note — Determinant Shortcut & Synthetic Shift Verification**
> 1. **Determinant Method:** $y = \frac{2x+0}{1x+1} \implies ad - bc = (2)(1) - (0)(1) = 2 \implies \frac{dy}{dx} = \frac{2}{(x+1)^2}$
> 2. **Synthetic Shift:** $y = \frac{2(x+1)-2}{x+1} = 2 - 2(x+1)^{-1} \implies \frac{dy}{dx} = 0 - 2(-1)(x+1)^{-2} = \frac{2}{(x+1)^2}$
> *(Both independent methods verify the solution instantly!)*

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. Quotient Rule কাঠামো** | $\frac{v u' - u v'}{v^2}$ সূত্রের সঠিক বিস্তার | **১.৫** |
| **২. অন্তরজ নির্ণয়** | $\frac{d}{dx}(2x)=2$ এবং $\frac{d}{dx}(x+1)=1$ বসানো | **১.৫** |
| **৩. লবের বিস্তার ও কাটাকাটি** | $2x + 2 - 2x = 2$ বের করা | **১.০** |
| **৪. প্রমিত উত্তর** | $\frac{2}{(x+1)^2}$ আকারে উপস্থাপন | **১.০** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
