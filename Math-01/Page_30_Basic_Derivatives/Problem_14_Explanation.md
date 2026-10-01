# Problem 14: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \frac{\sin x}{x+\cos x}$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Composite Algebraic-Trigonometric Quotient Rule**
> The function features a pure trigonometric numerator and a **hybrid algebraic-trigonometric denominator**:
> $$y = \frac{u(x)}{v(x)}, \quad \text{where } u(x) = \sin x, \; v(x) = x + \cos x$$
> Applying the Quotient Rule followed by the **Pythagorean Identity $\cos^2 x + \sin^2 x = 1$**:
> $$\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v \frac{du}{dx} - u \frac{dv}{dx}}{v^2}$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান | ফাংশন রূপ | প্রমিত অন্তরীকরণ সূত্র (Derivative) |
| :--- | :--- | :--- |
| **লব ($u$)** | $\sin x$ | $\frac{d}{dx}(\sin x) = \cos x$ |
| **হর ($v$)** | $x + \cos x$ | $\frac{d}{dx}(x + \cos x) = 1 - \sin x$ |
| **হরের বর্গ ($v^2$)** | $(x+\cos x)^2$ | $(x+\cos x)^2$ (উৎপাদক আকারেই রাখা শ্রেয়) |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Denominator Differentiation Mistake):**
>   মনে রাখবেন: $\frac{d}{dx}(x+\cos x) = \mathbf{1 - \sin x}$। $x$ এর ডেরিভেটিভ $1$ বাদ দিয়ে শুধু $-\sin x$ লিখলে সমাধান ভুল হয়ে যাবে।
> - **Trap 2 (Sign Distribution Error):**
>   $-\sin x(1 - \sin x) = \mathbf{-\sin x + \sin^2 x}$। মাইনাসে মাইনাসে প্লাস না লিখলে পিথাগোরাসের সূত্রে $\cos^2 x + \sin^2 x = 1$ মিলবে না।

---

## 📝 ২. ধাপে ধাপে লিখিত সমাধান (Step-by-Step Solution)

### **ধাপ ১: উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর নেওয়া**
$$\frac{dy}{dx} = \frac{d}{dx}\left(\frac{\sin x}{x+\cos x}\right)$$

### **ধাপ ২: ভাগফলের সূত্র (Quotient Rule) প্রয়োগ করা**
$$\frac{dy}{dx} = \frac{(x+\cos x)\frac{d}{dx}(\sin x) - \sin x \frac{d}{dx}(x+\cos x)}{(x+\cos x)^2}$$

### **ধাপ ৩: মান বসানো ও বন্ধনী বিস্তার**
$$\frac{dy}{dx} = \frac{(x+\cos x)(\cos x) - \sin x(1 - \sin x)}{(x+\cos x)^2}$$
$$\frac{dy}{dx} = \frac{x\cos x + \cos^2 x - \sin x + \sin^2 x}{(x+\cos x)^2}$$

### **ধাপ ৪: পিথাগোরাসের অভেদ ($\cos^2 x + \sin^2 x = 1$) প্রয়োগ ও চূড়ান্ত মান**
$$\frac{dy}{dx} = \frac{x\cos x - \sin x + (\cos^2 x + \sin^2 x)}{(x+\cos x)^2}$$
$$\mathbf{\frac{dy}{dx} = \frac{x\cos x - \sin x + 1}{(x+\cos x)^2}}$$

---

> [!IMPORTANT]
> **English Note — Singularities & Transcendental Root Analysis (AMIE Rigor)**
> - **Singularities:** হর শূন্য হবে যেখানে $x + \cos x = 0 \implies \cos x = -x$।
> - Intermediate Value Theorem অনুযায়ী এই সমীকরণের একটিমাত্র বাস্তব সমাধান রয়েছে: $x \approx -0.739085$।
> - **Domain of Differentiability:** $\text{Dom}\left(\frac{dy}{dx}\right) = \mathbb{R} \setminus \{ -0.739085 \}$।

---

> [!TIP]
> **English Note — Standard Factored Denominator Form**
> হরকে বিস্তার না করে $(x+\cos x)^2$ উৎপাদক আকারেই রেখে দেওয়া ইঞ্জিনিয়ারিং পরীক্ষায় আদর্শ।

---

### 🎯 **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dx} = \frac{x\cos x - \sin x + 1}{(x+\cos x)^2} \quad \text{বা} \quad \frac{1 + x\cos x - \sin x}{(x+\cos x)^2}}$$
