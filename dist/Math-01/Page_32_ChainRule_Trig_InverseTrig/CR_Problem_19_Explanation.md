# Chain Rule Problem 19: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \sin(e^x \cdot x^2) \quad \text{অথবা} \quad y = \sin(x^2 e^x)$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Trigonometric Product-Argument Chain Rule Formulation**
> The problem is a composite function where the outer shell is trigonometric sine and the inner argument is an exponential-polynomial product:
> - **Outer Function:** $f(u) = \sin u \implies f'(u) = \cos u$
> - **Inner Product Argument:** $u = g(x) = e^x \cdot x^2 \implies \frac{du}{dx} = e^x(2x) + x^2(e^x) = e^x(2x + x^2) = x e^x(x + 2)$
> 
> Applying Leibniz's **Chain Rule & Product Rule**:
> $$\frac{dy}{dx} = \cos(e^x \cdot x^2) \cdot \frac{d}{dx}(e^x \cdot x^2) = e^x(2x + x^2)\cos(e^x x^2) = x e^x(x + 2)\cos(x^2 e^x)$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান (Component) | ফাংশন রূপ | প্রমিত সূত্র (Standard Derivative) |
| :--- | :--- | :--- |
| **বহিঃস্থ সাইন ফাংশন (Outer)** | $\sin u$ | $\frac{d}{du}(\sin u) = \cos u$ |
| **অভ্যন্তরীণ গুণফল (Product Rule)** | $e^x \cdot x^2$ | $\frac{d}{dx}(u \cdot v) = u v' + v u' = e^x(2x) + x^2(e^x)$ |
| **উৎপাদকে বিশ্লেষণ** | সাধারণ উৎপাদক $e^x$ | $e^x(2x + x^2) = x e^x(x + 2)$ |
| **সম্মিলিত চেইন রুল** | $\sin(e^x \cdot x^2)$ | $\frac{dy}{dx} = e^x(2x + x^2)\cos(e^x x^2)$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Incomplete Product Rule in Argument):**
>   $e^x \cdot x^2$-এর ব্যবকলন করতে গিয়ে শুধু $e^x \cdot 2x$ লেখা একটি মারাত্মক ভুল। গুণের নিয়মে $u v' + v u'$ উভয় পদই লিখতে হবে।
> - **Trap 2 (Distributive Bracket Errors):**
>   $e^x(2x + x^2)\cos(e^x x^2)$ লেখার সময় $(2x + x^2)$-এর চারপাশে বন্ধনী দেওয়া অপরিহার্য; বন্ধনী না দিলে তা ভুল অর্থ প্রকাশ করবে।
> - **Trap 3 (Separating Exterior Factor from Angle):**
>   $e^x(2x+x^2)$ বহিস্থ বীজগাণিতিক গুণক, একে কোসাইন বন্ধনীর ভেতরে গুণ করা সম্পূর্ণ ভুল।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: প্রদত্ত সমীকরণ লেখা ও অন্তরীকরণ অপারেটর প্রয়োগ**
ধরি,
$$y = \sin(e^x \cdot x^2)$$

উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর $\frac{d}{dx}$ প্রয়োগ করে পাই:
$$\frac{dy}{dx} = \frac{d}{dx}\left[\sin(e^x \cdot x^2)\right]$$

### **ধাপ ২: বহিঃস্থ সাইন ফাংশনে চেইন রুল প্রয়োগ**
আমরা জানি, $\frac{d}{du}(\sin u) = \cos u$। এখানে $u = e^x \cdot x^2$ বিবেচনা করে:
$$\frac{dy}{dx} = \cos(e^x \cdot x^2) \cdot \frac{d}{dx}(e^x \cdot x^2)$$

### **ধাপ ৩: অভ্যন্তরীণ পদে Product Rule ($u v' + v u'$) প্রয়োগ**
গুণের ব্যবকলন সূত্র অনুযায়ী:
$$\frac{d}{dx}(e^x \cdot x^2) = e^x \cdot \frac{d}{dx}(x^2) + x^2 \cdot \frac{d}{dx}(e^x)$$
$$= e^x \cdot (2x) + x^2 \cdot (e^x)$$

### **ধাপ ৪: সাধারণ উৎপাদক $e^x$ কমন নেওয়া**
$$= e^x (2x + x^2) = x e^x (2 + x)$$

### **ধাপ ৫: চূড়ান্ত প্রমিত উত্তর (Final Standard Answer)**
মানগুলো সন্নিবেশ করে প্রমিত রূপ লিখি:
$$\mathbf{\frac{dy}{dx} = \cos(e^x \cdot x^2) \cdot (e^x \cdot 2x + x^2 e^x) = e^x(2x + x^2)\cos(e^x x^2)} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Domain, Smoothness & Critical Points (AMIE Rigor)**
> - **Entire Domain:** $e^x$ এবং $x^2$ উভয়ই সমগ্র বাস্তব রেখায় মসৃণ ও অবিচ্ছিন্ন।
>   $$\text{Dom}(y) = \text{Dom}\left(\frac{dy}{dx}\right) = (-\infty, \infty) = \mathbb{R}$$
> - **Stationary / Critical Points ($\frac{dy}{dx} = 0$):**
>   - $x e^x(x + 2) = 0 \implies x = 0$ অথবা $x = -2$।
>   - $\cos(x^2 e^x) = 0 \implies x^2 e^x = \frac{(2k+1)\pi}{2}, \; k \in \mathbb{Z}_{\ge 0}$।

---

> [!TIP]
> **English Note — Formal Substitution Model**
> Let $u = x^2 e^x \implies \frac{du}{dx} = 2x e^x + x^2 e^x = e^x(2x + x^2)$.
> Then $y = \sin u \implies \frac{dy}{du} = \cos u = \cos(x^2 e^x)$.
> 
> By Leibniz Chain Rule:
> $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = \cos(x^2 e^x) \cdot e^x(2x + x^2) = e^x(2x + x^2)\cos(e^x x^2)$$

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. সাইন চেইন রুল বিস্তার** | $\cos(e^x \cdot x^2) \cdot \frac{d}{dx}(e^x \cdot x^2)$ সঠিক প্রয়োগ | **১.৫** |
| **২. অভ্যন্তরীণ Product Rule প্রয়োগ** | $e^x(2x) + x^2(e^x)$ সফলভাবে সম্পন্ন | **২.০** |
| **৩. বীজগাণিতিক বিন্যাস ও প্রমিত রূপ** | $e^x(2x + x^2)\cos(e^x x^2)$ আকারে সমাপনী | **১.৫** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
