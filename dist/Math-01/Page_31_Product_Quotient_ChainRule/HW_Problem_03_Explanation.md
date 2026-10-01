# Home Work Problem 03: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \frac{5x + 3}{2x - 1}$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Linear Fractional (Möbius) Quotient Formulation**
> The given function is a general linear rational transformation of the form $y = \frac{ax+b}{cx+d}$:
> $$y = \frac{u(x)}{v(x)}, \quad \text{where } u(x) = 5x + 3, \; v(x) = 2x - 1$$
> Applying the fundamental **Quotient Rule**:
> $$\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v \frac{du}{dx} - u \frac{dv}{dx}}{v^2}$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান (Component) | ফাংশন রূপ | প্রমিত অন্তরজ সূত্র (Standard Derivative) |
| :--- | :--- | :--- |
| **লব ($u$)** | $5x + 3$ | $\frac{d}{dx}(5x + 3) = 5$ |
| **হর ($v$)** | $2x - 1$ | $\frac{d}{dx}(2x - 1) = 2$ |
| **হরের বর্গ ($v^2$)** | $(2x - 1)^2$ | $(2x - 1)^2$ *(উৎপাদক আকারেই রাখা শ্রেয়)* |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Sign Distribution Across Multi-term Expansion):**
>   $-(5x + 3)(2) = \mathbf{-(10x + 6) = -10x - 6}$। ভুল করে $-10x + 6$ লিখলে লবে $+1$ চলে আসবে যা সম্পূর্ণ ভুল।
> - **Trap 2 (Linear Coefficient Derivative):**
>   $\frac{d}{dx}(5x+3) = 5$ এবং $\frac{d}{dx}(2x-1) = 2$। ধ্রুবকের অন্তরজ $0$ এবং $x$-এর সহগ যথাযথভাবে গুণ করতে হবে।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর প্রয়োগ করে**
$$\frac{dy}{dx} = \frac{d}{dx}\left(\frac{5x + 3}{2x - 1}\right)$$

### **ধাপ ২: ভাগফলের সূত্র (Quotient Rule) অনুসারে সাজানো**
$$\frac{dy}{dx} = \frac{(2x - 1)\frac{d}{dx}(5x + 3) - (5x + 3)\frac{d}{dx}(2x - 1)}{(2x - 1)^2}$$

### **ধাপ ৩: প্রমিত অন্তরজের মান $\frac{d}{dx}(5x+3)=5$ এবং $\frac{d}{dx}(2x-1)=2$ বসিয়ে**
$$\frac{dy}{dx} = \frac{(2x - 1)\cdot 5 - (5x + 3)\cdot 2}{(2x - 1)^2}$$

### **ধাপ ৪: বন্ধনী বিস্তার ও পদ অপসারণ (Cancellation)**
$$\frac{dy}{dx} = \frac{10x - 5 - (10x + 6)}{(2x - 1)^2}$$
$$\frac{dy}{dx} = \frac{10x - 5 - 10x - 6}{(2x - 1)^2}$$

### **ধাপ ৫: চূড়ান্ত প্রমিত উত্তর (Final Standard Answer)**
$$\mathbf{\frac{dy}{dx} = -\frac{11}{(2x - 1)^2}} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Monotonicity, Singularity & Engineering Rigor**
> - **Domain of Function & Derivative:**
>   হরের শূন্যতা পরিহারের জন্য $2x - 1 \neq 0 \implies x \neq \frac{1}{2}$।
>   অতএব, ডোমেন: $\text{Dom}(y) = \text{Dom}\left(\frac{dy}{dx}\right) = \mathbb{R} \setminus \left\{\frac{1}{2}\right\} = \left(-\infty, \frac{1}{2}\right) \cup \left(\frac{1}{2}, \infty\right)$।
> - **Strictly Monotonic Decreasing Property:**
>   যেহেতু সকল $x \neq \frac{1}{2}$-এর জন্য $(2x - 1)^2 > 0$ এবং লব $-11 < 0$, তাই $\frac{dy}{dx} < 0$।
>   ফাংশনটি এর প্রতিটি সংজ্ঞায়িত অন্তরালে **সর্বদা ক্রমহ্রাসমান (Strictly Decreasing)**।

---

> [!TIP]
> **English Note — Determinant Shortcut for Linear Fractional Forms**
> For any bilinear function $y = \frac{ax+b}{cx+d}$, the derivative is given by the determinant of the coefficient matrix:
> $$\frac{dy}{dx} = \frac{\det \begin{pmatrix} a & b \\ c & d \end{pmatrix}}{(cx+d)^2} = \frac{ad - bc}{(cx+d)^2}$$
> For $y = \frac{5x+3}{2x-1}$:
> $$ad - bc = (5)(-1) - (3)(2) = -5 - 6 = -11 \implies \frac{dy}{dx} = -\frac{11}{(2x-1)^2}$$
> *(Instant 5-second engineering mental check!)*

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. Quotient Rule কাঠামো** | $\frac{v u' - u v'}{v^2}$ সূত্রের সঠিক বিস্তার | **১.৫** |
| **২. অন্তরজ নির্ণয়** | সহগ অন্তরজ $5$ এবং $2$ সঠিকভাবে বসানো | **১.৫** |
| **৩. লবের বীজগণিতীয় বিস্তার** | $10x - 5 - 10x - 6 = -11$ সঠিক করা | **১.০** |
| **৪. প্রমিত উত্তর** | $-\frac{11}{(2x - 1)^2}$ আকারে চূড়ান্ত উত্তর | **১.০** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
