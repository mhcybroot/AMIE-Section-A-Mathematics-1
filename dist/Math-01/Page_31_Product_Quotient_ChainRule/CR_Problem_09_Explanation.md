# Chain Rule Problem 09: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \sec(5x+3)$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Secant Linear Composite Chain Rule Formulation**
> The problem is a composite trigonometric-linear function:
> - **Outer Function:** $f(u) = \sec u \implies f'(u) = \sec u \tan u$
> - **Inner Function:** $u = g(x) = 5x + 3 \implies g'(x) = 5$
> 
> Applying Leibniz's **Chain Rule**:
> $$\frac{dy}{dx} = \frac{d}{du}(\sec u) \cdot \frac{du}{dx} = [\sec u \tan u] \cdot \frac{d}{dx}(5x+3) = 5\sec(5x+3)\tan(5x+3)$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান (Component) | ফাংশন রূপ | প্রমিত সূত্র (Standard Derivative) |
| :--- | :--- | :--- |
| **বহিঃস্থ ফাংশন (Outer)** | $\sec u$ | $\frac{d}{du}(\sec u) = \sec u \tan u$ |
| **অভ্যন্তরীণ রৈখিক বহুপদী (Inner Linear)** | $u = 5x + 3$ | $\frac{du}{dx} = \frac{d}{dx}(5x + 3) = 5$ |
| **সম্মিলিত চেইন রুল** | $\sec(5x+3)$ | $\frac{dy}{dx} = 5\sec(5x+3)\tan(5x+3)$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Incomplete Secant Differentiation):**
>   $\sec \theta$-এর অন্তরজে সর্বদা দুটি পদ $(\sec \theta \tan \theta)$ থাকবে। শুধু $\sec(5x+3)$ বা শুধু $\tan(5x+3)$ লিখলে মারাত্মক ভুল হবে।
> - **Trap 2 (Omitting the Linear Derivative $5$):**
>   কোণের সহগ $5$-এর ব্যবকলন $5$ গুণ করতে ভুলে যাওয়া। এটি AMIE পরীক্ষায় সাধারণ কিন্তু নম্বর বিধ্বংসী ত্রুটি।
> - **Trap 3 (Multiplying Constant into Angle):**
>   $5\sec(5x+3)\tan(5x+3)$-এর ক্ষেত্রে ৫ হলো বহিস্থ স্কেলার গুণক; একে ভুলেও বন্ধনীর ভেতর কোণের সাথে গুণ করে $\sec(25x+15)$ লেখা সম্পূর্ণ নিষিদ্ধ।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: প্রদত্ত সমীকরণ লেখা ও অন্তরীকরণ অপারেটর প্রয়োগ**
ধরি,
$$y = \sec(5x+3)$$

উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর $\frac{d}{dx}$ প্রয়োগ করে পাই:
$$\frac{dy}{dx} = \frac{d}{dx}\left[\sec(5x+3)\right]$$

### **ধাপ ২: বহিঃস্থ সেকেন্ট ফাংশনের ওপর চেইন রুল প্রয়োগ**
আমরা জানি, $\frac{d}{du}(\sec u) = \sec u \tan u$। এখানে $u = 5x+3$ বিবেচনা করে:
$$\frac{dy}{dx} = \sec(5x+3) \cdot \tan(5x+3) \cdot \frac{d}{dx}(5x+3)$$

### **ধাপ ৩: অভ্যন্তরীণ রৈখিক পদ $(5x+3)$-এর ব্যবকলন নির্ণয়**
যোগের নিয়ম ও ধ্রুবক ব্যবকলন সূত্র অনুযায়ী:
$$\frac{d}{dx}(5x+3) = \frac{d}{dx}(5x) + \frac{d}{dx}(3) = 5(1) + 0 = 5$$

অতএব:
$$\frac{dy}{dx} = \sec(5x+3) \cdot \tan(5x+3) \cdot 5$$

### **ধাপ ৪: পদ সুবিন্যস্ত করে চূড়ান্ত প্রমিত উত্তর (Final Standard Answer)**
স্কেলার ধ্রুবক ৫-কে প্রথমে এনে পাই:
$$\mathbf{\frac{dy}{dx} = 5\sec(5x+3)\tan(5x+3)} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Domain, Singularities & Periodic Discontinuities (AMIE Rigor)**
> - **Secant Asymptotes:** $\sec \theta$ অসংজ্ঞায়িত হয় যখন $\cos \theta = 0 \implies \theta = k\pi + \frac{\pi}{2}, \; k \in \mathbb{Z}$।
> - **Poles of $y$ and $\frac{dy}{dx}$:**
>   $$5x + 3 = k\pi + \frac{\pi}{2} \implies 5x = \frac{(2k+1)\pi - 6}{2} \implies x = \frac{(2k+1)\pi - 6}{10}, \; k \in \mathbb{Z}$$
> - **Domain Set:**
>   $$\text{Dom}(y) = \text{Dom}\left(\frac{dy}{dx}\right) = \mathbb{R} \setminus \left\{ \frac{(2k+1)\pi - 6}{10} \;\middle|\; k \in \mathbb{Z} \right\}$$

---

> [!TIP]
> **English Note — Formal Substitution Model**
> Let $u = 5x + 3 \implies \frac{du}{dx} = 5$.
> Then $y = \sec u \implies \frac{dy}{du} = \sec u \tan u = \sec(5x+3)\tan(5x+3)$.
> 
> By Leibniz's Chain Rule:
> $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = [\sec(5x+3)\tan(5x+3)] \cdot 5 = 5\sec(5x+3)\tan(5x+3)$$

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. সেকেন্ট চেইন রুল কাঠামো** | $\sec(5x+3)\tan(5x+3) \cdot \frac{d}{dx}(5x+3)$ সঠিক বিস্তার | **২.০** |
| **২. রৈখিক অন্তরজ সম্পাদন** | $\frac{d}{dx}(5x+3) = 5$ নিখুঁতভাবে নির্ণয় | **১.৫** |
| **৩. প্রমিত পদবিন্যাস ও সমাপনী** | $5\sec(5x+3)\tan(5x+3)$ আকারে চূড়ান্ত রূপ | **১.৫** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
