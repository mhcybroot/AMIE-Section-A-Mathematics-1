# Chain Rule Problem 08: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \log(\sec 5x)$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — 3-Tier Logarithmic-Secant Chain Rule Formulation**
> The problem is a 3-tier composite function:
> - **Tier 1 (Outer Logarithm):** $f(u) = \log u \implies f'(u) = \frac{1}{u}$
> - **Tier 2 (Middle Secant Function):** $u = g(v) = \sec v \implies g'(v) = \sec v \tan v$
> - **Tier 3 (Inner Linear Core):** $v = h(x) = 5x \implies h'(x) = 5$
> 
> Applying Leibniz's **3-Tier Chain Rule**:
> $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dv} \cdot \frac{dv}{dx} = \left(\frac{1}{\sec 5x}\right) \cdot (\sec 5x \tan 5x) \cdot (5) = 5\tan 5x$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| স্তর (Tier) | উপাদান (Component) | ফাংশন রূপ | প্রমিত সূত্র (Standard Derivative) |
| :--- | :--- | :--- | :--- |
| **Tier 1 (Outer)** | প্রাকৃতিক লগারিদম | $\log u$ | $\frac{d}{du}(\log u) = \frac{1}{u}$ |
| **Tier 2 (Middle)** | সেকেন্ট অনুপাত | $\sec v$ | $\frac{d}{dv}(\sec v) = \sec v \tan v$ |
| **Tier 3 (Inner)** | রৈখিক আর্গুমেন্ট | $5x$ | $\frac{d}{dx}(5x) = 5$ |
| **সরলীকরণ ধাপ** | সেকেন্ট অপনয়ন | $\frac{\sec 5x \tan 5x}{\sec 5x}$ | $\tan 5x$ |
| **সম্মিলিত রূপ** | পূর্ণাঙ্গ চেইন রুল | $\log(\sec 5x)$ | $\frac{dy}{dx} = 5\tan 5x$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Incomplete Secant Expansion):**
>   $\sec(5x)$-এর অন্তরজ করার সময় $\sec 5x \tan 5x$ উভয় পদ লিখতে হবে। শুধু $\tan 5x$ লিখলে গাণিতিক ধারাবাহিকতা ভেঙে যাবে।
> - **Trap 2 (Omitting the Inner Scalar Factor $5$):**
>   সবশেষে আর্গুমেন্ট $5x$-এর অন্তরজ $5$ গুণ করতে ভুলে যাওয়া এবং শুধু $\tan 5x$ লেখা মারাত্মক নম্বর কর্তনের কারণ।
> - **Trap 3 (Canceling Argument with Multiplier):**
>   কখনোই $5\tan 5x$-কে গুণ করে $\tan 25x$ লেখা যাবে না! বহিস্থ ৫ হলো স্কেলার গুণক এবং ভেতরের $5x$ হলো ত্রিকোণমিতিক কোণ।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: প্রদত্ত সমীকরণ লেখা ও অন্তরীকরণ অপারেটর প্রয়োগ**
ধরি,
$$y = \log(\sec 5x)$$

উভয় পক্ষে $x$-এর সাপেক্ষে ব্যবকলন অপারেটর $\frac{d}{dx}$ প্রয়োগ করে পাই:
$$\frac{dy}{dx} = \frac{d}{dx}\left[\log(\sec 5x)\right]$$

### **ধাপ ২: বহিঃস্থ লগারিদম ফাংশনে চেইন রুল প্রয়োগ**
আমরা জানি, $\frac{d}{du}(\log u) = \frac{1}{u}$। এখানে $u = \sec 5x$ ধরে:
$$\frac{dy}{dx} = \frac{1}{\sec 5x} \cdot \frac{d}{dx}(\sec 5x)$$

### **ধাপ ৩: মধ্যবর্তী সেকেন্ট ফাংশন ও অভ্যন্তরীণ রৈখিক পদে চেইন রুল বিস্তার**
আমরা জানি, $\frac{d}{dv}(\sec v) = \sec v \tan v$ এবং $v = 5x$।
$$\frac{dy}{dx} = \frac{1}{\sec 5x} \cdot \left(\sec 5x \tan 5x\right) \cdot \frac{d}{dx}(5x)$$

### **ধাপ ৪: অভ্যন্তরীণ পদ $5x$-এর ব্যবকলন ও বীজগাণিতিক কাটাকাটি**
$\frac{d}{dx}(5x) = 5$ বসিয়ে পাই:
$$\frac{dy}{dx} = \frac{\sec 5x \tan 5x}{\sec 5x} \cdot 5$$

লব ও হর থেকে সাধারণ উৎপাদক $\sec 5x$ অপনয়ন করে পাই:
$$\frac{dy}{dx} = 5\tan 5x$$

### **ধাপ ৫: চূড়ান্ত প্রমিত উত্তর (Final Standard Answer)**
$$\mathbf{\frac{dy}{dx} = 5\tan 5x} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Domain, Logarithmic Positivity & Vertical Asymptotes (AMIE Rigor)**
> - **Logarithmic Positivity:** $\log(\sec 5x)$ বাস্তব হওয়ার জন্য $\sec 5x > 0 \implies \cos 5x > 0$।
>   অতএব, $2k\pi - \frac{\pi}{2} < 5x < 2k\pi + \frac{\pi}{2} \implies \frac{4k-1}{10}\pi < x < \frac{4k+1}{10}\pi, \; k \in \mathbb{Z}$।
> - **Singularities:**
>   যখন $5x \to \left(\frac{\pi}{2}\right)^-$, তখন $\sec 5x \to \infty \implies y \to \infty$ এবং $\frac{dy}{dx} = 5\tan 5x \to \infty$।
> - **Domain Set:**
>   $$\text{Dom}(y) = \text{Dom}\left(\frac{dy}{dx}\right) = \bigcup_{k \in \mathbb{Z}} \left( \frac{(4k-1)\pi}{10}, \frac{(4k+1)\pi}{10} \right)$$

---

> [!TIP]
> **English Note — Multi-Variable Substitution Framework & Cosine Relation**
> **Method A (Leibniz Substitution):**
> Let $v = 5x \implies \frac{dv}{dx} = 5$
> Let $u = \sec v \implies \frac{du}{dv} = \sec v \tan v = \sec 5x \tan 5x$
> Then $y = \log u \implies \frac{dy}{du} = \frac{1}{u} = \frac{1}{\sec 5x}$
> $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dv} \cdot \frac{dv}{dx} = \frac{1}{\sec 5x} \cdot (\sec 5x \tan 5x) \cdot 5 = 5\tan 5x$$
> 
> **Method B (Log-Cosine Property):**
> $y = \log(\sec 5x) = \log\left(\frac{1}{\cos 5x}\right) = -\log(\cos 5x)$
> $$\frac{dy}{dx} = -\frac{1}{\cos 5x} \cdot (-\sin 5x \cdot 5) = 5 \cdot \frac{\sin 5x}{\cos 5x} = 5\tan 5x$$
> (উভয় পদ্ধতিতে ফলাফল হুবহু অভিন্ন ও পরীক্ষিত)।

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. লগারিদমিক চেইন রুল বিস্তার** | $\frac{1}{\sec 5x} \cdot \frac{d}{dx}(\sec 5x)$ সঠিক উপস্থাপন | **১.৫** |
| **২. সেকেন্ট ও রৈখিক অন্তরজ বিস্তার** | $(\sec 5x \tan 5x) \cdot 5$ সফলভাবে নির্ণয় | **২.০** |
| **৩. পদ বাতিলকরণ ও প্রমিত রূপ** | $\sec 5x$ বাতিল করে $5\tan 5x$ প্রকাশ | **১.৫** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
