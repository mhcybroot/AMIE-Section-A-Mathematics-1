# Chain Rule Problem 15: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \cot(\log \sqrt[3]{x}) \quad \text{অথবা} \quad y = \cot\left(\log x^{\frac{1}{3}}\right)$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — 3-Tier Cotangent-Logarithmic-Radical Chain Rule Formulation**
> The problem is a 3-tier composite function:
> - **Tier 1 (Outer Cotangent):** $f(u) = \cot u \implies f'(u) = -\csc^2 u$
> - **Tier 2 (Middle Natural Logarithm):** $u = g(v) = \log v \implies g'(v) = \frac{1}{v}$
> - **Tier 3 (Inner Cube Root Power):** $v = h(x) = \sqrt[3]{x} = x^{\frac{1}{3}} \implies h'(x) = \frac{1}{3}x^{-\frac{2}{3}}$
> 
> Applying Leibniz's **3-Tier Chain Rule**:
> $$\frac{dy}{dx} = [-\csc^2(\log\sqrt[3]{x})] \cdot \left(\frac{1}{\sqrt[3]{x}}\right) \cdot \left(\frac{1}{3}x^{-\frac{2}{3}}\right) = -\frac{1}{3x}\csc^2(\log\sqrt[3]{x})$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| স্তর (Tier) | উপাদান (Component) | ফাংশন রূপ | প্রমিত সূত্র (Standard Derivative) |
| :--- | :--- | :--- | :--- |
| **Tier 1 (Outer)** | কোট্যাঞ্জেন্ট ফাংশন | $\cot u$ | $\frac{d}{du}(\cot u) = -\csc^2 u$ |
| **Tier 2 (Middle)** | প্রাকৃতিক লগারিদম | $\log v$ | $\frac{d}{dv}(\log v) = \frac{1}{v}$ |
| **Tier 3 (Inner)** | ঘনমূল ফাংশন | $\sqrt[3]{x} = x^{\frac{1}{3}}$ | $\frac{d}{dx}(x^{\frac{1}{3}}) = \frac{1}{3}x^{-\frac{2}{3}}$ |
| **বীজগাণিতিক গুণ** | সূচকের যোগফল | $\frac{1}{x^{1/3}} \cdot \frac{1}{3x^{2/3}}$ | $\frac{1}{3x^{1/3 + 2/3}} = \frac{1}{3x}$ |
| **সম্মিলিত রূপ** | পূর্ণাঙ্গ চেইন রুল | $\cot(\log\sqrt[3]{x})$ | $\frac{dy}{dx} = -\frac{1}{3x}\csc^2(\log\sqrt[3]{x})$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Missing Negative Sign):**
>   $\cot(\cdot)$-এর অন্তরজে সর্বদা ঋণাত্মক চিহ্ন ($-\csc^2(\cdot)$) থাকবে।
> - **Trap 2 (Exponent Addition Slip in Denominator):**
>   $\frac{1}{\sqrt[3]{x}} \cdot \frac{1}{3}x^{-2/3} = \frac{1}{3 \cdot x^{1/3} \cdot x^{2/3}} = \frac{1}{3x^1} = \frac{1}{3x}$। এটি সরল না করে জটিল আকারে রেখে দিলে পূর্ণ নম্বর প্রাপ্তিতে ঝুঁকি থাকে।
> - **Trap 3 (Cube Root Derivative Miscalculation):**
>   $\frac{d}{dx}(\sqrt[3]{x}) \neq \frac{1}{3\sqrt{x}}$। পাওয়ার রুলে $\frac{1}{3} - 1 = -\frac{2}{3} \implies \frac{1}{3\sqrt[3]{x^2}}$ হবে।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: প্রদত্ত সমীকরণ লেখা ও অন্তরীকরণ অপারেটর প্রয়োগ**
ধরি,
$$y = \cot(\log \sqrt[3]{x})$$

উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর $\frac{d}{dx}$ প্রয়োগ করে পাই:
$$\frac{dy}{dx} = \frac{d}{dx}\left[\cot(\log \sqrt[3]{x})\right]$$

### **ধাপ ২: Tier 1 (কোট্যাঞ্জেন্ট) চেইন রুল বিস্তার**
আমরা জানি, $\frac{d}{du}(\cot u) = -\csc^2 u$। এখানে $u = \log \sqrt[3]{x}$ বিবেচনা করে:
$$\frac{dy}{dx} = -\csc^2(\log \sqrt[3]{x}) \cdot \frac{d}{dx}\left(\log \sqrt[3]{x}\right)$$

### **ধাপ ৩: Tier 2 (লগারিদম) ও Tier 3 (ঘনমূল) চেইন রুল বিস্তার**
আমরা জানি, $\frac{d}{dv}(\log v) = \frac{1}{v}$ এবং $v = \sqrt[3]{x} = x^{\frac{1}{3}}$।
$$\frac{dy}{dx} = -\csc^2(\log \sqrt[3]{x}) \cdot \frac{1}{\sqrt[3]{x}} \cdot \frac{d}{dx}\left(x^{\frac{1}{3}}\right)$$

### **ধাপ ৪: অভ্যন্তরীণ পদ $x^{\frac{1}{3}}$-এর ব্যবকলন ও সূচকীয় সরলীকরণ**
$\frac{d}{dx}(x^{\frac{1}{3}}) = \frac{1}{3}x^{\frac{1}{3} - 1} = \frac{1}{3}x^{-\frac{2}{3}}$ বসিয়ে পাই:
$$\frac{dy}{dx} = -\csc^2(\log \sqrt[3]{x}) \cdot \frac{1}{x^{\frac{1}{3}}} \cdot \frac{1}{3x^{\frac{2}{3}}}$$
$$= -\csc^2(\log \sqrt[3]{x}) \cdot \frac{1}{3x^{\frac{1}{3} + \frac{2}{3}}} = -\csc^2(\log \sqrt[3]{x}) \cdot \frac{1}{3x}$$

### **ধাপ ৫: চূড়ান্ত প্রমিত উত্তর (Final Standard Answer)**
$$\mathbf{\frac{dy}{dx} = -\frac{1}{3x}\csc^2(\log \sqrt[3]{x}) = -\frac{\csc^2(\log \sqrt[3]{x})}{3x}} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Domain, Logarithmic Positivity & Singularities (AMIE Rigor)**
> - **Logarithmic Domain:** $\log\sqrt[3]{x}$ বাস্তব হওয়ার জন্য $\sqrt[3]{x} > 0 \implies x > 0$।
> - **Cotangent Singularities (Poles):** $\cot \theta$ অসংজ্ঞায়িত হয় যখন $\log\sqrt[3]{x} = k\pi \implies \sqrt[3]{x} = e^{k\pi} \implies x = e^{3k\pi}, \; k \in \mathbb{Z}$।
> - **Domain Set:**
>   $$\text{Dom}(y) = \text{Dom}\left(\frac{dy}{dx}\right) = (0, \infty) \setminus \{ e^{3k\pi} \mid k \in \mathbb{Z} \}$$

---

> [!TIP]
> **English Note — Log-Power Property Fast Method**
> আমরা জানি, $\log\sqrt[3]{x} = \log\left(x^{\frac{1}{3}}\right) = \frac{1}{3}\log x$।
> অতএব, $y = \cot\left(\frac{1}{3}\log x\right)$।
> $$\frac{dy}{dx} = -\csc^2\left(\frac{1}{3}\log x\right) \cdot \frac{d}{dx}\left(\frac{1}{3}\log x\right) = -\csc^2(\log\sqrt[3]{x}) \cdot \left(\frac{1}{3x}\right) = -\frac{\csc^2(\log\sqrt[3]{x})}{3x}$$
> (মাত্র দুই লাইনে বিকল্প সমাধান যাচাইকৃত)।

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. কোট্যাঞ্জেন্ট চেইন রুল ও চিহ্ন** | $-\csc^2(\log\sqrt[3]{x}) \cdot \frac{d}{dx}(\log\sqrt[3]{x})$ সঠিক প্রয়োগ | **২.০** |
| **২. লগারিদম ও ঘনমূল অন্তরজ** | $\frac{1}{\sqrt[3]{x}} \cdot \frac{1}{3}x^{-2/3} = \frac{1}{3x}$ সফল সরলীকরণ | **১.৫** |
| **৩. প্রমিত সমাপনী** | $-\frac{1}{3x}\csc^2(\log\sqrt[3]{x})$ আকারে প্রকাশ | **১.৫** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
