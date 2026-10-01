# Problem 03: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \sqrt{x} + \sqrt[4]{x} + \frac{2}{x}$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Fractional & Negative Power Formulation**
> Before differentiating, transform every radical and reciprocal term into **rational exponential form** $x^n$:
> $$\sqrt{x} = x^{\frac{1}{2}}, \quad \sqrt[4]{x} = x^{\frac{1}{4}}, \quad \frac{2}{x} = 2x^{-1}$$
> Thus, the equation simplifies into:
> $$y = x^{\frac{1}{2}} + x^{\frac{1}{4}} + 2x^{-1}$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| পদ (Term) | ঘাত রূপ (Power Form) | প্রয়োগকৃত সূত্র (Power Rule) | ফলাফল (Derivative) |
| :--- | :--- | :--- | :--- |
| **$\sqrt{x}$** | $x^{\frac{1}{2}}$ | $\frac{1}{2} x^{\frac{1}{2}-1} = \frac{1}{2} x^{-\frac{1}{2}}$ | $\frac{1}{2\sqrt{x}}$ |
| **$\sqrt[4]{x}$** | $x^{\frac{1}{4}}$ | $\frac{1}{4} x^{\frac{1}{4}-1} = \frac{1}{4} x^{-\frac{3}{4}}$ | $\frac{1}{4x^{\frac{3}{4}}} = \frac{1}{4\sqrt[4]{x^3}}$ |
| **$\frac{2}{x}$** | $2x^{-1}$ | $2(-1) x^{-1-1} = -2x^{-2}$ | $-\frac{2}{x^2}$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Fractional Subtraction Error):**
>   ভগ্নাংশের পাওয়ারের বিয়োগ: $\frac{1}{4} - 1 = -\frac{3}{4}$। অনেকেই তাড়াহুড়োয় $-\frac{1}{4}$ বা $\frac{3}{4}$ লিখে ফেলে।
> - **Trap 2 (Sign Error on Reciprocal Derivative):**
>   মনে রাখবেন: $\frac{d}{dx}\left(\frac{1}{x}\right) = -\frac{1}{x^2}$। তাই $\frac{d}{dx}\left(\frac{2}{x}\right) = -\frac{2}{x^2}$। মাইনাস চিহ্ন বাদ পড়লে পুরো নম্বর কাটা যাবে।

---

## 📝 ২. ধাপে ধাপে লিখিত সমাধান (Step-by-Step Solution)

### **ধাপ ১: ঘাত (Power) আকারে সাজিয়ে উভয় পক্ষে অন্তরীকরণ করা**
$$y = x^{\frac{1}{2}} + x^{\frac{1}{4}} + 2x^{-1}$$
$$\frac{dy}{dx} = \frac{d}{dx}\left(x^{\frac{1}{2}} + x^{\frac{1}{4}} + 2x^{-1}\right)$$

### **ধাপ ২: যোগের নিয়মে প্রতিটি পদ পৃথকীকরণ**
$$\frac{dy}{dx} = \frac{d}{dx}\left(x^{\frac{1}{2}}\right) + \frac{d}{dx}\left(x^{\frac{1}{4}}\right) + 2\frac{d}{dx}\left(x^{-1}\right)$$

### **ধাপ ৩: Power Rule $\frac{d}{dx}(x^n) = n x^{n-1}$ প্রয়োগ করা**
$$\frac{dy}{dx} = \frac{1}{2}x^{\frac{1}{2}-1} + \frac{1}{4}x^{\frac{1}{4}-1} + 2(-1)x^{-1-1}$$
$$\frac{dy}{dx} = \frac{1}{2}x^{-\frac{1}{2}} + \frac{1}{4}x^{-\frac{3}{4}} - 2x^{-2}$$

### **ধাপ ৪: ধনাত্মক ঘাত ও মূলক আকারে রূপান্তর**
$$\mathbf{\frac{dy}{dx} = \frac{1}{2\sqrt{x}} + \frac{1}{4x^{3/4}} - \frac{2}{x^2}}$$

---

> [!IMPORTANT]
> **English Note — Domain & Differentiability (AMIE Rigor)**
> - **Domain of $y(x)$:** $\sqrt{x}$ and $\sqrt[4]{x}$ require $x \ge 0$, but the term $\frac{2}{x}$ prohibits $x = 0$. Thus $\text{Dom}(y) = (0, \infty)$.
> - **Domain of $\frac{dy}{dx}$:** All derivative terms have powers of $x$ in denominators, so the differentiability domain is strictly $(0, \infty)$.

---

> [!TIP]
> **English Note — Equivalent Radicand Notations**
> In AMIE examination sheets, either notation is fully valid:
> $$\frac{1}{4x^{3/4}} \equiv \frac{1}{4\sqrt[4]{x^3}} \equiv \frac{1}{4(\sqrt[4]{x})^3}$$

---

### 🎯 **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dx} = \frac{1}{2\sqrt{x}} + \frac{1}{4x^{3/4}} - \frac{2}{x^2} \quad \text{বা} \quad \frac{1}{2\sqrt{x}} + \frac{1}{4\sqrt[4]{x^3}} - \frac{2}{x^2}}$$
