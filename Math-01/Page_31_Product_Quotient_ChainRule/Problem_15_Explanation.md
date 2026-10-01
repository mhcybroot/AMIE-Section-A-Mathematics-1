# Problem 15: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \frac{\sqrt{x} + 1}{\sqrt{x} - 1}$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Algebraic Radical Quotient Rule Formulation**
> The function is an algebraic quotient composed of square root terms in both numerator and denominator:
> $$y = \frac{u(x)}{v(x)}, \quad \text{where } u(x) = \sqrt{x} + 1, \; v(x) = \sqrt{x} - 1$$
> Using the standard power rule $\frac{d}{dx}(\sqrt{x}) = \frac{d}{dx}(x^{1/2}) = \frac{1}{2\sqrt{x}}$, we apply the **Quotient Rule**:
> $$\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v \frac{du}{dx} - u \frac{dv}{dx}}{v^2}$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান | ফাংশন রূপ | প্রমিত অন্তরীকরণ সূত্র (Derivative) |
| :--- | :--- | :--- |
| **লব ($u$)** | $\sqrt{x} + 1$ | $\frac{d}{dx}(\sqrt{x} + 1) = \frac{1}{2\sqrt{x}}$ |
| **হর ($v$)** | $\sqrt{x} - 1$ | $\frac{d}{dx}(\sqrt{x} - 1) = \frac{1}{2\sqrt{x}}$ |
| **হরের বর্গ ($v^2$)** | $(\sqrt{x}-1)^2$ | $(\sqrt{x}-1)^2$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Fractional Algebra Cancellation):**
>   লব থেকে $\frac{1}{2\sqrt{x}}$ কমন নেওয়ার পর বন্ধনীর ভেতরের মাইনাস চিহ্নে সতর্ক থাকতে হবে:
>   $$(\sqrt{x} - 1) - (\sqrt{x} + 1) = \sqrt{x} - 1 - \sqrt{x} - 1 = \mathbf{-2}$$
>   চিহ্নের ভুলের কারণে $+2$ বা $0$ লিখলে সম্পূর্ণ সমাধান বাতিল হয়ে যাবে।
> - **Trap 2 (Denominator Level Fraction):**
>   $\frac{1}{2\sqrt{x}} \times (-2) = -\frac{1}{\sqrt{x}}$। এই $\sqrt{x}$ পদটিকে মূল হরের সাথে নামিয়ে $\mathbf{-\frac{1}{\sqrt{x}(\sqrt{x}-1)^2}}$ আকারে প্রকাশ করতে হবে।

---

## 📝 ২. ধাপে ধাপে লিখিত সমাধান (Step-by-Step Solution)

### **ধাপ ১: উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর নেওয়া**
$$\frac{dy}{dx} = \frac{d}{dx}\left(\frac{\sqrt{x}+1}{\sqrt{x}-1}\right)$$

### **ধাপ ২: ভাগফলের সূত্র (Quotient Rule) প্রয়োগ করা**
$$\frac{dy}{dx} = \frac{(\sqrt{x}-1)\frac{d}{dx}(\sqrt{x}+1) - (\sqrt{x}+1)\frac{d}{dx}(\sqrt{x}-1)}{(\sqrt{x}-1)^2}$$

### **ধাপ ৩: মূল অন্তরজ বসানো**
আমরা জানি, $\frac{d}{dx}(\sqrt{x}) = \frac{1}{2\sqrt{x}}$ এবং $\frac{d}{dx}(\pm 1) = 0$।
$$\frac{dy}{dx} = \frac{(\sqrt{x}-1)\cdot\frac{1}{2\sqrt{x}} - (\sqrt{x}+1)\cdot\frac{1}{2\sqrt{x}}}{(\sqrt{x}-1)^2}$$

### **ধাপ ৪: সাধারণ উৎপাদক $\frac{1}{2\sqrt{x}}$ কমন নেওয়া ও সরলীকরণ**
$$\frac{dy}{dx} = \frac{\frac{1}{2\sqrt{x}}\left[(\sqrt{x}-1) - (\sqrt{x}+1)\right]}{(\sqrt{x}-1)^2}$$
$$\frac{dy}{dx} = \frac{\frac{1}{2\sqrt{x}}\left[\sqrt{x}-1-\sqrt{x}-1\right]}{(\sqrt{x}-1)^2}$$
$$\frac{dy}{dx} = \frac{\frac{1}{2\sqrt{x}}\cdot(-2)}{(\sqrt{x}-1)^2}$$
$$\frac{dy}{dx} = \frac{-\frac{1}{\sqrt{x}}}{(\sqrt{x}-1)^2}$$

### **ধাপ ৫: চূড়ান্ত প্রমিত রূপ (Final Simplified Standard Form)**
$$\mathbf{\frac{dy}{dx} = -\frac{1}{\sqrt{x}(\sqrt{x}-1)^2}} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Rigor, Domain & Singularity Analysis**
> - **Domain of $y(x)$:**
>   1. বর্গমূলের বাস্তব অস্তিত্বের জন্য: $x \ge 0$
>   2. হরের শূন্যতা পরিহারের জন্য: $\sqrt{x} - 1 \neq 0 \implies x \neq 1$
>   - অতএব, সংজ্ঞার ডোমেন: $\text{Dom}(y) = [0, 1) \cup (1, \infty)$
> - **Domain of Differentiability ($\frac{dy}{dx}$):**
>   অন্তরজে $\frac{1}{\sqrt{x}}$ থাকায় $x = 0$ বিন্দুতে স্পর্শক উল্লম্ব (Vertical Tangent, $\frac{dy}{dx} \to -\infty$)।
>   - অতএব, অন্তরীকরণযোগ্যতার ডোমেন: $\text{Dom}\left(\frac{dy}{dx}\right) = (0, 1) \cup (1, \infty)$

---

> [!TIP]
> **English Note — Alternative Substitution / Chain Rule Verification**
> Let $t = \sqrt{x}$. Then:
> $$y = \frac{t+1}{t-1} = \frac{(t-1)+2}{t-1} = 1 + \frac{2}{t-1} = 1 + 2(t-1)^{-1}$$
> Differentiating with respect to $x$ via Chain Rule:
> $$\frac{dy}{dx} = \frac{dy}{dt} \cdot \frac{dt}{dx} = \left[-2(t-1)^{-2}\right] \cdot \left(\frac{1}{2\sqrt{x}}\right) = -\frac{1}{\sqrt{x}(t-1)^2} = -\frac{1}{\sqrt{x}(\sqrt{x}-1)^2}$$
> *(Matches the Quotient Rule result identically!)*

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| ধাপ | প্রত্যাশিত ধাপসমূহ | পূর্ণমান (Marks) |
| :--- | :--- | :--- |
| **১. সূত্র প্রয়োগ** | $u/v$ সূত্রের সঠিক কাঠামো উপস্থাপন | **১.৫** |
| **২. অন্তরীকরণ** | $\frac{d}{dx}(\sqrt{x}) = \frac{1}{2\sqrt{x}}$ সঠিকভাবে বসানো | **১.৫** |
| **৩. বীজগণিতীয় সরলীকরণ** | $\frac{1}{2\sqrt{x}}$ কমন নিয়ে লব সরল করা | **১.০** |
| **৪. চূড়ান্ত উত্তর** | $-\frac{1}{\sqrt{x}(\sqrt{x}-1)^2}$ আকারে উপস্থাপন | **১.০** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
