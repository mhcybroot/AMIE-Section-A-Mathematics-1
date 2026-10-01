# Chain Rule Problem 20: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = (x^2 + 5)^3 (x^3 - 1)^4$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Product-Chain Hybrid Rule Formulation**
> The problem is a product of two composite polynomial power expressions:
> - **First Function:** $u = (x^2 + 5)^3 \implies \frac{du}{dx} = 3(x^2 + 5)^2 \cdot (2x) = 6x(x^2 + 5)^2$
> - **Second Function:** $v = (x^3 - 1)^4 \implies \frac{dv}{dx} = 4(x^3 - 1)^3 \cdot (3x^2) = 12x^2(x^3 - 1)^3$
> 
> Applying Leibniz's **Product Rule & Chain Rule**:
> $$\frac{dy}{dx} = u \frac{dv}{dx} + v \frac{du}{dx} = (x^2 + 5)^3 [12x^2(x^3 - 1)^3] + (x^3 - 1)^4 [6x(x^2 + 5)^2]$$
> Factoring out the GCF $6x(x^2 + 5)^2 (x^3 - 1)^3$:
> $$\frac{dy}{dx} = 6x(x^2 + 5)^2 (x^3 - 1)^3 (3x^3 + 10x - 1)$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান (Component) | ফাংশন রূপ | প্রমিত সূত্র (Standard Derivative) |
| :--- | :--- | :--- |
| **প্রথম পদ ($u$)** | $(x^2 + 5)^3$ | $\frac{du}{dx} = 3(x^2 + 5)^2 \cdot 2x = 6x(x^2 + 5)^2$ |
| **দ্বিতীয় পদ ($v$)** | $(x^3 - 1)^4$ | $\frac{dv}{dx} = 4(x^3 - 1)^3 \cdot 3x^2 = 12x^2(x^3 - 1)^3$ |
| **গুণের নিয়ম (Product Rule)** | $u \cdot v$ | $\frac{d}{dx}(uv) = u \frac{dv}{dx} + v \frac{du}{dx}$ |
| **সর্বোচ্চ সাধারণ উৎপাদক (GCF)** | কমন নেওয়া | $6x(x^2 + 5)^2 (x^3 - 1)^3$ |
| **সম্মিলিত রূপ** | পূর্ণাঙ্গ সরলীকৃত রূপ | $\frac{dy}{dx} = 6x(x^2 + 5)^2 (x^3 - 1)^3 (3x^3 + 10x - 1)$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Omitting the Inner Polynomial Derivatives):**
>   - $(x^2 + 5)^3$-এর অন্তরজে $2x$ গুণ করতে হবে।
>   - $(x^3 - 1)^4$-এর অন্তরজে $3x^2$ গুণ করতে হবে।
> - **Trap 2 (Factoring Arithmetic Errors):**
>   $6x(x^2+5)^2(x^3-1)^3$ কমন নেওয়ার পর প্রথম অংশে $2x(x^2+5) = 2x^3 + 10x$ এবং দ্বিতীয় অংশে $(x^3-1)$ অবশিষ্ট থাকে। এগুলো যোগ করলে $3x^3 + 10x - 1$ হয়।
> - **Trap 3 (Stopping at Unfactored Expression):**
>   যোগ আকারে রেখে দেওয়া আংশিক নম্বর পেলেও প্রকৌশল পরীক্ষায় সম্পূর্ণ উৎপাদক রূপ ($6x(x^2+5)^2(x^3-1)^3(3x^3+10x-1)$) উপস্থাপন করা সর্বোচ্চ নম্বরের মাপকাঠি।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: প্রদত্ত সমীকরণ লেখা ও অন্তরীকরণ অপারেটর প্রয়োগ**
ধরি,
$$y = (x^2 + 5)^3 (x^3 - 1)^4$$

উভয় পক্ষে $x$-এর সাপেক্ষে ব্যবকলন অপারেটর $\frac{d}{dx}$ প্রয়োগ করে পাই:
$$\frac{dy}{dx} = \frac{d}{dx}\left[(x^2 + 5)^3 (x^3 - 1)^4\right]$$

### **ধাপ ২: Product Rule ($u v' + v u'$) বিস্তার**
$$\frac{dy}{dx} = (x^2 + 5)^3 \cdot \frac{d}{dx}\left[(x^3 - 1)^4\right] + (x^3 - 1)^4 \cdot \frac{d}{dx}\left[(x^2 + 5)^3\right]$$

### **ধাপ ৩: উভয় পদে Power Rule ও Chain Rule প্রয়োগ**
- $\frac{d}{dx}[(x^3 - 1)^4] = 4(x^3 - 1)^3 \cdot \frac{d}{dx}(x^3 - 1) = 4(x^3 - 1)^3 \cdot (3x^2) = 12x^2(x^3 - 1)^3$
- $\frac{d}{dx}[(x^2 + 5)^3] = 3(x^2 + 5)^2 \cdot \frac{d}{dx}(x^2 + 5) = 3(x^2 + 5)^2 \cdot (2x) = 6x(x^2 + 5)^2$

মানগুলো বসিয়ে পাই:
$$\frac{dy}{dx} = (x^2 + 5)^3 \cdot [12x^2(x^3 - 1)^3] + (x^3 - 1)^4 \cdot [6x(x^2 + 5)^2]$$
$$= 12x^2(x^3 - 1)^3(x^2 + 5)^3 + 6x(x^3 - 1)^4(x^2 + 5)^2$$

### **ধাপ ৪: সাধারণ উৎপাদক (GCF) কমন নেওয়া ও সরলীকরণ**
উভয় পদ থেকে $6x(x^2 + 5)^2 (x^3 - 1)^3$ কমন নিয়ে পাই:
$$\frac{dy}{dx} = 6x(x^2 + 5)^2 (x^3 - 1)^3 \left[ 2x(x^2 + 5) + (x^3 - 1) \right]$$
$$= 6x(x^2 + 5)^2 (x^3 - 1)^3 \left[ 2x^3 + 10x + x^3 - 1 \right]$$

### **ধাপ ৫: চূড়ান্ত প্রমিত উত্তর (Final Standard Answer)**
$$\mathbf{\frac{dy}{dx} = 6x(x^2 + 5)^2 (x^3 - 1)^3 (3x^3 + 10x - 1)} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Domain, Smoothness & Roots of Derivative (AMIE Rigor)**
> - **Domain:** বহুপদী রাশির গুণফল হওয়ায় ফাংশনটি সর্বত্র সংজ্ঞায়িত:
>   $$\text{Dom}(y) = \text{Dom}\left(\frac{dy}{dx}\right) = (-\infty, \infty) = \mathbb{R}$$
> - **Stationary Points ($\frac{dy}{dx} = 0$):**
>   - $x = 0$
>   - $x^3 - 1 = 0 \implies x = 1$ (Third-order stationary inflection)
>   - $3x^3 + 10x - 1 = 0$ (একটি বাস্তব মূল $x \approx 0.0984$)

---

> [!TIP]
> **English Note — Logarithmic Differentiation Alternative Method**
> $\ln y = 3\ln(x^2 + 5) + 4\ln(x^3 - 1)$
> $$\frac{1}{y}\frac{dy}{dx} = \frac{3 \cdot 2x}{x^2 + 5} + \frac{4 \cdot 3x^2}{x^3 - 1} = \frac{6x}{x^2 + 5} + \frac{12x^2}{x^3 - 1} = \frac{6x(x^3 - 1) + 12x^2(x^2 + 5)}{(x^2 + 5)(x^3 - 1)}$$
> $$= \frac{6x[(x^3 - 1) + 2x(x^2 + 5)]}{(x^2 + 5)(x^3 - 1)} = \frac{6x(3x^3 + 10x - 1)}{(x^2 + 5)(x^3 - 1)}$$
> $\frac{dy}{dx} = y \cdot \frac{6x(3x^3 + 10x - 1)}{(x^2 + 5)(x^3 - 1)} = 6x(x^2 + 5)^2(x^3 - 1)^3(3x^3 + 10x - 1)$।

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. Product Rule ও Chain Rule বিস্তার** | $u \frac{dv}{dx} + v \frac{du}{dx}$ সঠিক উপস্থাপন | **১.৫** |
| **২. অভ্যন্তরীণ অন্তরজ সম্পন্নকরণ** | $12x^2(x^3-1)^3$ ও $6x(x^2+5)^2$ নির্ণয় | **১.৫** |
| **৩. GCF কমন ও চূড়ান্ত উৎপাদক বিশ্লেষণ** | $6x(x^2+5)^2(x^3-1)^3(3x^3+10x-1)$ সমাপনী | **২.০** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
