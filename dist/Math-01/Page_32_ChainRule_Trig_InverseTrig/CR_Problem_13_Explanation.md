# Chain Rule Problem 13: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \tan(\cos 6x)$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — 3-Tier Tangent-Cosine-Linear Chain Rule Formulation**
> The problem is a 3-tier composite trigonometric function:
> - **Tier 1 (Outer Tangent Function):** $f(u) = \tan u \implies f'(u) = \sec^2 u$
> - **Tier 2 (Middle Cosine Function):** $u = g(v) = \cos v \implies g'(v) = -\sin v$
> - **Tier 3 (Inner Linear Core):** $v = h(x) = 6x \implies h'(x) = 6$
> 
> Applying Leibniz's **3-Tier Chain Rule**:
> $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dv} \cdot \frac{dv}{dx} = [\sec^2(\cos 6x)] \cdot (-\sin 6x) \cdot (6) = -6\sin 6x \sec^2(\cos 6x)$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| স্তর (Tier) | উপাদান (Component) | ফাংশন রূপ | প্রমিত সূত্র (Standard Derivative) |
| :--- | :--- | :--- | :--- |
| **Tier 1 (Outer)** | ট্যাঞ্জেন্ট ফাংশন | $\tan u$ | $\frac{d}{du}(\tan u) = \sec^2 u$ |
| **Tier 2 (Middle)** | কোসাইন ফাংশন | $\cos v$ | $\frac{d}{dv}(\cos v) = -\sin v$ |
| **Tier 3 (Inner)** | রৈখিক আর্গুমেন্ট | $6x$ | $\frac{d}{dx}(6x) = 6$ |
| **সম্মিলিত রূপ** | পূর্ণাঙ্গ চেইন রুল | $\tan(\cos 6x)$ | $\frac{dy}{dx} = -6\sin 6x \sec^2(\cos 6x)$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Missing Negative Sign):**
>   $\cos(\cdot)$-এর ব্যবকলনে ঋণাত্মক চিহ্ন ($-\sin 6x$) বাদ যাওয়া একটি প্রধান অসাবধানতা।
> - **Trap 2 (Omitting the Inner Linear Factor $6$):**
>   কোণের সহগ $6$-এর অন্তরজ $6$ গুণ করতে ভুলে গিয়ে শুধু $-\sin 6x \sec^2(\cos 6x)$ লিখলে নম্বর কাটা যাবে।
> - **Trap 3 (Algebraic Misinterpretation of Negative Sign):**
>   চিহ্নটি বন্ধনী ছাড়া $\sec^2(\cos 6x) - 6\sin 6x$ লিখলে তা গুণের বদলে বিয়োগফল বোঝাবে, যা সম্পূর্ণ ভুল।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: প্রদত্ত সমীকরণ লেখা ও অন্তরীকরণ অপারেটর প্রয়োগ**
ধরি,
$$y = \tan(\cos 6x)$$

উভয় পক্ষে $x$-এর সাপেক্ষে ব্যবকলন অপারেটর $\frac{d}{dx}$ প্রয়োগ করে পাই:
$$\frac{dy}{dx} = \frac{d}{dx}\left[\tan(\cos 6x)\right]$$

### **ধাপ ২: Tier 1 (ট্যাঞ্জেন্ট) ফাংশনে চেইন রুল প্রয়োগ**
আমরা জানি, $\frac{d}{du}(\tan u) = \sec^2 u$। এখানে $u = \cos 6x$ বিবেচনা করে:
$$\frac{dy}{dx} = \sec^2(\cos 6x) \cdot \frac{d}{dx}(\cos 6x)$$

### **ধাপ ৩: Tier 2 (কোসাইন) ও Tier 3 (রৈখিক পদ $6x$) চেইন রুল বিস্তার**
আমরা জানি, $\frac{d}{dv}(\cos v) = -\sin v$ এবং $v = 6x$।
$$\frac{dy}{dx} = \sec^2(\cos 6x) \cdot (-\sin 6x) \cdot \frac{d}{dx}(6x)$$

### **ধাপ ৪: অভ্যন্তরীণ পদ $6x$-এর ব্যবকলন সম্পাদন**
যেহেতু $\frac{d}{dx}(6x) = 6$:
$$\frac{dy}{dx} = \sec^2(\cos 6x) \cdot (-\sin 6x) \cdot 6$$

### **ধাপ ৫: পদ সুবিন্যস্ত করে চূড়ান্ত প্রমিত উত্তর (Final Standard Answer)**
স্কেলার ধ্রুবক ও ঋণাত্মক চিহ্নকে প্রথমে এনে পাই:
$$\mathbf{\frac{dy}{dx} = -6\sin 6x \sec^2(\cos 6x)} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Domain, Regularity & Absence of Poles (AMIE Rigor)**
> - **Inner Argument Boundedness:** $\cos 6x \in [-1, 1]$ সকল বাস্তব $x \in \mathbb{R}$-এর জন্য।
> - **Absence of Tangent Asymptotes:** $\tan u$ ও $\sec^2 u$-এর অসংজ্ঞায়িত বিন্দুগুলো ঘটে যখন $u = \frac{(2k+1)\pi}{2} \approx \pm 1.5708, \dots$
>   যেহেতু $|\cos 6x| \le 1 < \frac{\pi}{2}$, তাই আর্গুমেন্ট কখনোই কোনো অসীমতটের সমান হতে পারে না!
> - **Entire Domain:** ফলে ফাংশনটি ও এর প্রথম অন্তরজ সমগ্র বাস্তব সংখ্যা সেট $\mathbb{R}$ জুড়ে মসৃণ ও অবিচ্ছিন্ন।
>   $$\text{Dom}(y) = \text{Dom}\left(\frac{dy}{dx}\right) = (-\infty, \infty) = \mathbb{R}$$

---

> [!TIP]
> **English Note — 3-Variable Formal Substitution Framework**
> Let $v = 6x \implies \frac{dv}{dx} = 6$
> Let $u = \cos v \implies \frac{du}{dv} = -\sin v = -\sin 6x$
> Then $y = \tan u \implies \frac{dy}{du} = \sec^2 u = \sec^2(\cos 6x)$
> 
> By Leibniz 3-Tier Chain Rule:
> $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dv} \cdot \frac{dv}{dx} = \sec^2(\cos 6x) \cdot (-\sin 6x) \cdot 6 = -6\sin 6x \sec^2(\cos 6x)$$

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. ট্যাঞ্জেন্ট চেইন রুল বিস্তার** | $\sec^2(\cos 6x) \cdot \frac{d}{dx}(\cos 6x)$ সঠিক উপস্থাপন | **১.৫** |
| **২. কোসাইন ও রৈখিক অন্তরজ বিস্তার** | $(-\sin 6x) \cdot 6$ সঠিকভাবে সম্পাদন | **২.০** |
| **৩. প্রমিত পদবিন্যাস ও চূড়ান্ত রূপ** | $-6\sin 6x \sec^2(\cos 6x)$ আকারে সমাপ্তি | **১.৫** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
