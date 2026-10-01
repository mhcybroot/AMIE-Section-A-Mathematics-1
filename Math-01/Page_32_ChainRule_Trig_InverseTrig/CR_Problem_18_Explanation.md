# Chain Rule Problem 18: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \sin\left(\frac{e^x}{x^2}\right)$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Trigonometric Quotient-Argument Chain Rule Formulation**
> The problem is a composite function where the outer shell is trigonometric sine and the inner argument requires the quotient rule:
> - **Outer Function:** $f(u) = \sin u \implies f'(u) = \cos u$
> - **Inner Quotient Argument:** $u = \frac{e^x}{x^2} \implies \frac{du}{dx} = \frac{x^2 \cdot e^x - e^x \cdot 2x}{(x^2)^2} = \frac{e^x(x^2 - 2x)}{x^4} = \frac{e^x(x - 2)}{x^3}$
> 
> Applying Leibniz's **Chain Rule**:
> $$\frac{dy}{dx} = \cos\left(\frac{e^x}{x^2}\right) \cdot \frac{d}{dx}\left(\frac{e^x}{x^2}\right) = \cos\left(\frac{e^x}{x^2}\right) \cdot \frac{e^x(x^2 - 2x)}{x^4} = \frac{e^x(x - 2)}{x^3} \cos\left(\frac{e^x}{x^2}\right)$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান (Component) | ফাংশন রূপ | প্রমিত সূত্র (Standard Derivative) |
| :--- | :--- | :--- |
| **বহিঃস্থ সাইন ফাংশন (Outer)** | $\sin u$ | $\frac{d}{du}(\sin u) = \cos u$ |
| **অভ্যন্তরীণ ভগ্নাংশ (Quotient Rule)** | $\frac{e^x}{x^2}$ | $\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v u' - u v'}{v^2} = \frac{x^2 e^x - 2x e^x}{x^4}$ |
| **বীজগাণিতিক সরলীকরণ** | $x$ উৎপাদক বাতিল | $\frac{x e^x (x - 2)}{x^4} = \frac{e^x(x - 2)}{x^3}$ |
| **সম্মিলিত চেইন রুল** | $\sin\left(\frac{e^x}{x^2}\right)$ | $\frac{dy}{dx} = \frac{e^x(x - 2)}{x^3}\cos\left(\frac{e^x}{x^2}\right)$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Quotient Rule Sign Slip):**
>   ভাগফলের নিয়মে লবে বিয়োগ চিহ্ন থাকে: $v u' - u v'$। ভুলবশত যোগ চিহ্ন লিখে $x^2 e^x + 2x e^x$ করা যাবে না।
> - **Trap 2 (Denominator Power Error):**
>   হরের বর্গ হলো $(x^2)^2 = x^4$। ভুলবশত $x^2$ বা $x^3$ লেখা যাবে না।
> - **Trap 3 (Separating Angle from Function):**
>   $\frac{e^x(x-2)}{x^3}$ একটি বহিস্থ বীজগাণিতিক উৎপাদক; একে ভেতরের আর্গুমেন্টের সাথে কাটাকাটি বা গুণ করা সম্পূর্ণ নিষিদ্ধ।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: প্রদত্ত সমীকরণ লেখা ও অন্তরীকরণ অপারেটর প্রয়োগ**
ধরি,
$$y = \sin\left(\frac{e^x}{x^2}\right)$$

উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর $\frac{d}{dx}$ প্রয়োগ করে পাই:
$$\frac{dy}{dx} = \frac{d}{dx}\left[\sin\left(\frac{e^x}{x^2}\right)\right]$$

### **ধাপ ২: বহিঃস্থ সাইন ফাংশনের ওপর চেইন রুল প্রয়োগ**
আমরা জানি, $\frac{d}{du}(\sin u) = \cos u$। এখানে $u = \frac{e^x}{x^2}$ বিবেচনা করে:
$$\frac{dy}{dx} = \cos\left(\frac{e^x}{x^2}\right) \cdot \frac{d}{dx}\left(\frac{e^x}{x^2}\right)$$

### **ধাপ ৩: অভ্যন্তরীণ ভাগফল পদে Quotient Rule প্রয়োগ**
ভাগফলের ব্যবকলন সূত্র $\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v \frac{du}{dx} - u \frac{dv}{dx}}{v^2}$ অনুসারে:
$$\frac{d}{dx}\left(\frac{e^x}{x^2}\right) = \frac{x^2 \cdot \frac{d}{dx}(e^x) - e^x \cdot \frac{d}{dx}(x^2)}{(x^2)^2}$$
$$= \frac{x^2 \cdot e^x - e^x \cdot 2x}{x^4}$$

### **ধাপ ৪: উৎপাদকে বিশ্লেষণ ও লব-হর থেকে $x$ অপসারণ**
$$\frac{x^2 e^x - 2x e^x}{x^4} = \frac{x e^x (x - 2)}{x^4} = \frac{e^x(x - 2)}{x^3}$$

### **ধাপ ৫: চূড়ান্ত প্রমিত উত্তর (Final Standard Answer)**
মানগুলো সন্নিবেশ করে পাই:
$$\mathbf{\frac{dy}{dx} = \cos\left(\frac{e^x}{x^2}\right) \cdot \frac{e^x(x^2 - 2x)}{x^4} = \frac{e^x(x - 2)}{x^3}\cos\left(\frac{e^x}{x^2}\right)} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Domain, Singularities & Critical Points (AMIE Rigor)**
> - **Domain of Function & Derivative:** হর $x^2 \neq 0 \implies x \neq 0$।
>   $$\text{Dom}(y) = \text{Dom}\left(\frac{dy}{dx}\right) = (-\infty, 0) \cup (0, \infty) = \mathbb{R} \setminus \{0\}$$
> - **Stationary / Critical Points ($\frac{dy}{dx} = 0$):**
>   - $x = 2$ হলে $x - 2 = 0 \implies \frac{dy}{dx} = 0$ (বক্ররেখার চরম বিন্দু)।
>   - $\cos\left(\frac{e^x}{x^2}\right) = 0 \implies \frac{e^x}{x^2} = \frac{(2k+1)\pi}{2}, \; k \in \mathbb{Z}$।

---

> [!TIP]
> **English Note — Product Rule with Negative Exponent Alternative**
> $u = e^x \cdot x^{-2}$
> $$\frac{du}{dx} = e^x \cdot x^{-2} + e^x \cdot (-2x^{-3}) = e^x x^{-3}(x - 2) = \frac{e^x(x - 2)}{x^3}$$
> $$\frac{dy}{dx} = \cos(e^x x^{-2}) \cdot \frac{e^x(x - 2)}{x^3} = \frac{e^x(x - 2)}{x^3}\cos\left(\frac{e^x}{x^2}\right)$$
> (উভয় পদ্ধতিতে ফলাফল অভিন্ন)।

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. সাইন চেইন রুল বিস্তার** | $\cos\left(\frac{e^x}{x^2}\right) \cdot \frac{d}{dx}\left(\frac{e^x}{x^2}\right)$ সঠিক প্রয়োগ | **১.৫** |
| **২. অভ্যন্তরীণ Quotient Rule প্রয়োগ** | $\frac{x^2 e^x - 2x e^x}{x^4}$ সফলভাবে নির্ণয় | **২.০** |
| **৩. বীজগাণিতিক সরলীকরণ ও প্রমিত রূপ** | $\frac{e^x(x-2)}{x^3}\cos\left(\frac{e^x}{x^2}\right)$ সমাপনী | **১.৫** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
