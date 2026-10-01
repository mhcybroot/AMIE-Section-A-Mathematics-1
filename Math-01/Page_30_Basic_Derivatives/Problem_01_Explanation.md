# Problem 01: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \sqrt{x}\sin x - 6$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Engineering Formulation & Linearity Property**
> The function is composed of a composite product of an algebraic fractional power term and a trigonometric term, shifted by a scalar constant:
> $$y(x) = u(x) \cdot v(x) - C, \quad \text{where } u(x) = x^{1/2}, \; v(x) = \sin x, \; C = 6$$
> By the **Linearity Property of Differential Operator $\mathcal{D} = \frac{d}{dx}$**:
> $$\frac{d}{dx}[u(x)v(x) - C] = \frac{d}{dx}[u(x)v(x)] - \frac{d}{dx}[C]$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| সূত্রের নাম | গাণিতিক রূপ (Formula) | যে অংশে প্রযোজ্য |
| :--- | :--- | :--- |
| **Leibniz Product Rule ($uv$)** | $\frac{d}{dx}(u \cdot v) = u \frac{dv}{dx} + v \frac{du}{dx}$ | $\sqrt{x}\sin x$ অংশে |
| **Power Rule** | $\frac{d}{dx}(x^n) = n x^{n-1} \implies \frac{d}{dx}(\sqrt{x}) = \frac{1}{2\sqrt{x}}$ | $u = \sqrt{x} = x^{1/2}$ অংশে |
| **Trigonometric Derivative** | $\frac{d}{dx}(\sin x) = \cos x$ | $v = \sin x$ অংশে |
| **Constant Rule** | $\frac{d}{dx}(C) = 0 \implies \frac{d}{dx}(6) = 0$ | ধ্রুবক $6$ অংশে |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Distributing derivative over multiplication):**
>   $$\frac{d}{dx}(u \cdot v) \neq \frac{du}{dx} \cdot \frac{dv}{dx}$$
>   কখনোই $\frac{d}{dx}(\sqrt{x}\sin x) = \left(\frac{1}{2\sqrt{x}}\right)(\cos x)$ লিখবেন না। এতে পুরো স্টেপ ক্রেডিট কাটা যাবে।
> - **Trap 2 (Constant term):**
>   $\frac{d}{dx}(6) = 0$, এটি কখনো $-6$ বা $-1$ রাখা যাবে না।

---

## 📝 ২. ধাপে ধাপে লিখিত সমাধান (Step-by-Step Solution)

### **ধাপ ১: উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ করে পাই**
$$\frac{dy}{dx} = \frac{d}{dx}\left(\sqrt{x}\sin x - 6\right) = \frac{d}{dx}\left(\sqrt{x}\sin x\right) - \frac{d}{dx}(6)$$

### **ধাপ ২: Product Rule ($u \cdot v$) প্রয়োগ করা**
এখানে $u = \sqrt{x}$ এবং $v = \sin x$ ধরে:
$$\frac{dy}{dx} = \left[ \sqrt{x}\frac{d}{dx}(\sin x) + \sin x\frac{d}{dx}(\sqrt{x}) \right] - 0$$

### **ধাপ ৩: মান বসিয়ে সরলীকরণ করা**
$$\frac{dy}{dx} = \sqrt{x}(\cos x) + \sin x \cdot \left(\frac{1}{2\sqrt{x}}\right)$$

$$\mathbf{\frac{dy}{dx} = \sqrt{x}\cos x + \frac{\sin x}{2\sqrt{x}}}$$

---

> [!IMPORTANT]
> **English Note — Domain & Differentiability Analysis (AMIE Rigor)**
> - **Domain of $y(x)$:** For $y = \sqrt{x}\sin x - 6$, since $\sqrt{x}$ requires $x \ge 0$, $\text{Dom}(y) = [0, \infty)$.
> - **Domain of $\frac{dy}{dx}$:** In $\frac{dy}{dx} = \sqrt{x}\cos x + \frac{\sin x}{2\sqrt{x}}$, the denominator contains $\sqrt{x}$, requiring $x \neq 0$.
> - Therefore, the function is differentiable strictly on **$(0, \infty)$**. At $x = 0$, the gradient approaches $+\infty$ (infinite vertical tangent from the right):
>   $$\lim_{x \to 0^+} \frac{dy}{dx} = +\infty$$

---

> [!TIP]
> **English Note — Alternative Simplified Single Fraction Form**
> In AMIE examination answer sheets, expressing as a common denominator is completely standard:
> $$\frac{dy}{dx} = \frac{2(\sqrt{x})(\sqrt{x})\cos x + \sin x}{2\sqrt{x}} = \mathbf{\frac{2x\cos x + \sin x}{2\sqrt{x}}}$$

---

### 🎯 **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dx} = \sqrt{x}\cos x + \frac{\sin x}{2\sqrt{x}} \quad \text{অথবা} \quad \frac{2x\cos x + \sin x}{2\sqrt{x}}}$$
