# Home Work Problem 05: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \frac{2x + 1}{3x + 1}$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Linear Fractional (Bilinear) Quotient Formulation**
> The problem presents a general linear rational polynomial quotient of the form $y = \frac{ax+b}{cx+d}$:
> $$y = \frac{u(x)}{v(x)}, \quad \text{where } u(x) = 2x + 1, \; v(x) = 3x + 1$$
> Applying the fundamental **Quotient Rule**:
> $$\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v \frac{du}{dx} - u \frac{dv}{dx}}{v^2}$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান (Component) | ফাংশন রূপ | প্রমিত অন্তরজ সূত্র (Standard Derivative) |
| :--- | :--- | :--- |
| **লব ($u$)** | $2x + 1$ | $\frac{d}{dx}(2x + 1) = 2$ |
| **হর ($v$)** | $3x + 1$ | $\frac{d}{dx}(3x + 1) = 3$ |
| **হরের বর্গ ($v^2$)** | $(3x + 1)^2$ | $(3x + 1)^2$ *(উৎপাদক আকারেই রাখা শ্রেয়)* |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Sign Distribution Error):**
>   $-(2x + 1)(3) = \mathbf{-(6x + 3) = -6x - 3}$। ব্র্যাকেট খোলার সময় মাইনাস দিয়ে গুণ না করে $-6x + 3$ লিখলে লবে $+5$ চলে আসবে যা সম্পূর্ণ ভুল।
> - **Trap 2 (Factored Form Retention):**
>   হরকে $(3x + 1)^2$ আকারেই রাখা সমীচীন; $9x^2 + 6x + 1$ বিস্তার করার প্রয়োজন নেই।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর প্রয়োগ করে**
$$\frac{dy}{dx} = \frac{d}{dx}\left(\frac{2x + 1}{3x + 1}\right)$$

### **ধাপ ২: ভাগফলের সূত্র (Quotient Rule) অনুসারে সাজানো**
$$\frac{dy}{dx} = \frac{(3x + 1)\frac{d}{dx}(2x + 1) - (2x + 1)\frac{d}{dx}(3x + 1)}{(3x + 1)^2}$$

### **ধাপ ৩: প্রমিত অন্তরজের মান বসিয়ে**
আমরা জানি, $\frac{d}{dx}(2x + 1) = 2$ এবং $\frac{d}{dx}(3x + 1) = 3$।
$$\frac{dy}{dx} = \frac{(3x + 1)\cdot 2 - (2x + 1)\cdot 3}{(3x + 1)^2}$$

### **ধাপ ৪: লবের বন্ধনী বিস্তার ও পদ অপসারণ (Cancellation)**
$$\frac{dy}{dx} = \frac{6x + 2 - (6x + 3)}{(3x + 1)^2}$$
$$\frac{dy}{dx} = \frac{6x + 2 - 6x - 3}{(3x + 1)^2}$$

### **ধাপ ৫: চূড়ান্ত প্রমিত উত্তর (Final Standard Answer)**
$$\mathbf{\frac{dy}{dx} = -\frac{1}{(3x + 1)^2}} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Domain, Monotonicity & Asymptotes (AMIE Rigor)**
> - **Domain of Function & Derivative:**
>   হরের শূন্যতা পরিহারের জন্য $3x + 1 \neq 0 \implies x \neq -\frac{1}{3}$।
>   অতএব, ডোমেন: $\text{Dom}(y) = \text{Dom}\left(\frac{dy}{dx}\right) = \mathbb{R} \setminus \left\{-\frac{1}{3}\right\} = \left(-\infty, -\frac{1}{3}\right) \cup \left(-\frac{1}{3}, \infty\right)$।
> - **Strict Decreasing Monotonicity:**
>   যেহেতু সকল $x \neq -\frac{1}{3}$-এর জন্য $(3x + 1)^2 > 0$ এবং লব $-1 < 0$, তাই $\frac{dy}{dx} < 0$।
>   ফাংশনটি এর প্রতিটি সংজ্ঞায়িত অন্তরালে **সর্বদা ক্রমহ্রাসমান (Strictly Decreasing)**।
> - **Asymptotes:**
>   উল্লম্ব অসীমতট (Vertical Asymptote): $x = -\frac{1}{3}$
>   অনুভূমিক অসীমতট (Horizontal Asymptote): $y = \lim_{x \to \pm\infty}\frac{2x+1}{3x+1} = \frac{2}{3}$

---

> [!TIP]
> **English Note — Determinant Shortcut for Bilinear Functions**
> For any bilinear function $y = \frac{ax+b}{cx+d}$, the derivative is given by:
> $$\frac{dy}{dx} = \frac{ad - bc}{(cx+d)^2}$$
> Here $a = 2, b = 1, c = 3, d = 1$:
> $$ad - bc = (2)(1) - (1)(3) = 2 - 3 = -1 \implies \frac{dy}{dx} = -\frac{1}{(3x+1)^2}$$
> *(Instant 5-second mental check!)*

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. Quotient Rule কাঠামো** | $\frac{v u' - u v'}{v^2}$ সূত্রের সঠিক বিস্তার | **১.৫** |
| **২. অন্তরজ নির্ণয়** | সহগ অন্তরজ $2$ এবং $3$ সঠিকভাবে বসানো | **১.৫** |
| **৩. লবের বিস্তার ও কাটাকাটি** | $6x + 2 - 6x - 3 = -1$ বের করা | **১.০** |
| **৪. প্রমিত উত্তর** | $-\frac{1}{(3x + 1)^2}$ উপস্থাপন | **১.০** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
