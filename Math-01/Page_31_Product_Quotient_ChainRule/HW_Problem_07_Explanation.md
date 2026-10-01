# Home Work Problem 07: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \frac{1 - \cos x}{1 - \sin x}$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Trigonometric Quotient & Pythagorean Identity Formulation**
> The problem features a quotient composed entirely of elementary trigonometric sinusoidal functions:
> $$y = \frac{u(x)}{v(x)}, \quad \text{where } u(x) = 1 - \cos x, \; v(x) = 1 - \sin x$$
> Applying the fundamental **Quotient Rule** alongside trigonometric derivatives $\frac{d}{dx}(\cos x) = -\sin x$ and $\frac{d}{dx}(\sin x) = \cos x$:
> $$\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v \frac{du}{dx} - u \frac{dv}{dx}}{v^2}$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান (Component) | ফাংশন রূপ | প্রমিত অন্তরজ সূত্র (Standard Derivative) |
| :--- | :--- | :--- |
| **লব ($u$)** | $1 - \cos x$ | $\frac{d}{dx}(1 - \cos x) = 0 - (-\sin x) = \sin x$ |
| **হর ($v$)** | $1 - \sin x$ | $\frac{d}{dx}(1 - \sin x) = 0 - \cos x = -\cos x$ |
| **হরের বর্গ ($v^2$)** | $(1 - \sin x)^2$ | $(1 - \sin x)^2$ *(উৎপাদক আকারেই রাখা শ্রেয়)* |
| **পিথাগোরাসের অভেদ** | $\sin^2 x + \cos^2 x = 1$ | লবের $-\sin^2 x - \cos^2 x = -(\sin^2 x + \cos^2 x) = -1$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Double Negative in Derivatives):**
>   - $\frac{d}{dx}(1 - \cos x) = \mathbf{+\sin x}$ (যেহেতু $\frac{d}{dx}\cos x = -\sin x$, তাই $-(-\sin x) = +\sin x$).
>   - $\frac{d}{dx}(1 - \sin x) = \mathbf{-\cos x}$.
> - **Trap 2 (Sign Distribution Across Multi-term Multiplication):**
>   $-(1 - \cos x)(-\cos x) = \mathbf{-(-\cos x + \cos^2 x) = +\cos x - \cos^2 x}$। চিহ্নের এলোমেলো হলে লবে $+1$ চলে আসবে যা মারাত্মক ভুল।
> - **Trap 3 (Pythagorean Factorization):**
>   $-\sin^2 x - \cos^2 x = -(\sin^2 x + \cos^2 x) = \mathbf{-1}$।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর প্রয়োগ করে**
$$\frac{dy}{dx} = \frac{d}{dx}\left(\frac{1 - \cos x}{1 - \sin x}\right)$$

### **ধাপ ২: ভাগফলের সূত্র (Quotient Rule) অনুসারে সাজানো**
$$\frac{dy}{dx} = \frac{(1 - \sin x)\frac{d}{dx}(1 - \cos x) - (1 - \cos x)\frac{d}{dx}(1 - \sin x)}{(1 - \sin x)^2}$$

### **ধাপ ৩: প্রমিত অন্তরজের মান বসিয়ে**
$$\frac{dy}{dx} = \frac{(1 - \sin x)(\sin x) - (1 - \cos x)(-\cos x)}{(1 - \sin x)^2}$$

### **ধাপ ৪: লবের বন্ধনী বিস্তার ও পদ পুনর্বিন্যাস**
$$\frac{dy}{dx} = \frac{\sin x - \sin^2 x - (-\cos x + \cos^2 x)}{(1 - \sin x)^2}$$
$$\frac{dy}{dx} = \frac{\sin x - \sin^2 x + \cos x - \cos^2 x}{(1 - \sin x)^2}$$
$$\frac{dy}{dx} = \frac{\sin x + \cos x - (\sin^2 x + \cos^2 x)}{(1 - \sin x)^2}$$

### **ধাপ ৫: পিথাগোরাসের অভেদ ($\sin^2 x + \cos^2 x = 1$) প্রয়োগ ও চূড়ান্ত উত্তর**
$$\mathbf{\frac{dy}{dx} = \frac{\sin x + \cos x - 1}{(1 - \sin x)^2}} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Singularities & Domain of Differentiability (AMIE Rigor)**
> - **Domain of Function & Derivative:**
>   হরের শূন্যতা পরিহারের জন্য $1 - \sin x \neq 0 \implies \sin x \neq 1$।
>   অতএব, $x \neq 2k\pi + \frac{\pi}{2}, \; k \in \mathbb{Z}$।
>   ডোমেন: $\text{Dom}(y) = \text{Dom}\left(\frac{dy}{dx}\right) = \mathbb{R} \setminus \left\{ 2k\pi + \frac{\pi}{2} \;\middle|\; k \in \mathbb{Z} \right\}$।

---

> [!TIP]
> **English Note — Alternative Separated & Half-Angle Forms**
> 1. **Partial Quotient Form:**
>    $$\frac{\sin x + \cos x - 1}{(1 - \sin x)^2} = \frac{-(1 - \sin x) + \cos x}{(1 - \sin x)^2} = -\frac{1}{1 - \sin x} + \frac{\cos x}{(1 - \sin x)^2}$$
> 2. **Half-Angle Form:**
>    $1 - \cos x = 2\sin^2(x/2)$ এবং $1 - \sin x = \left(\cos\frac{x}{2} - \sin\frac{x}{2}\right)^2$ রূপেও প্রকাশ করা যায়।
>    *(পরীক্ষায় প্রমিত বন্ধনীযুক্ত রূপ $\frac{\sin x + \cos x - 1}{(1 - \sin x)^2}$ রাখা সর্বাধিক গ্রহণযোগ্য।)*

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. Quotient Rule কাঠামো** | $\frac{v u' - u v'}{v^2}$ সূত্রের সঠিক বিস্তার | **১.৫** |
| **২. ত্রিকোণমিতিক অন্তরজ** | $\frac{d}{dx}(1-\cos x)=\sin x, \frac{d}{dx}(1-\sin x)=-\cos x$ বসানো | **১.৫** |
| **৩. চিহ্ন বিস্তার ও পিথাগোরাস** | $-(\sin^2 x + \cos^2 x) = -1$ সরলীকরণ | **১.০** |
| **৪. প্রমিত উত্তর** | $\frac{\sin x + \cos x - 1}{(1 - \sin x)^2}$ উপস্থাপন | **১.০** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
