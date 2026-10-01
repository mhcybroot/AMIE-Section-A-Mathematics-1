# Home Work Problem 01: Differential Calculus — AMIE (IEB) Section-A Guide

---

### **প্রদত্ত সমস্যা (Given Problem):**
$$y = \frac{x}{\log x}$$

**লক্ষ্য (Target):** $x$-এর সাপেক্ষে প্রথম অন্তরজ $\frac{dy}{dx}$ নির্ণয় করা।

---

> [!NOTE]
> **English Note — Transcendental-Algebraic Quotient Formulation**
> The given function is a quotient involving a linear polynomial numerator and a natural logarithmic denominator:
> $$y = \frac{u(x)}{v(x)}, \quad \text{where } u(x) = x, \; v(x) = \log x \; (\equiv \ln x)$$
> Applying the standard **Quotient Rule**:
> $$\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v \frac{du}{dx} - u \frac{dv}{dx}}{v^2}$$

---

## 🔍 ১. গাণিতিক কাঠামো ও প্রয়োজনীয় সূত্রসমূহ

| উপাদান (Component) | ফাংশন রূপ | প্রমিত অন্তরজ সূত্র (Standard Derivative) |
| :--- | :--- | :--- |
| **লব ($u$)** | $x$ | $\frac{d}{dx}(x) = 1$ |
| **হর ($v$)** | $\log x$ | $\frac{d}{dx}(\log x) = \frac{1}{x}$ |
| **হরের বর্গ ($v^2$)** | $(\log x)^2$ | $(\log x)^2$ |

---

> [!CAUTION]
> **English Note — Critical AMIE Exam Traps & Pitfalls**
> - **Trap 1 (Logarithmic Base Convention in Calculus):**
>   উচ্চতর গণিত ও প্রকৌশল ক্যালকুলাসে ভিত্তিহীন $\log x$ সর্বদা প্রাকৃতিক লগারিদম $\ln x = \log_e x$ নির্দেশ করে।
> - **Trap 2 (Cancellation of $x \cdot \frac{1}{x}$):**
>   $x \cdot \frac{1}{x} = 1$। তাড়াহুড়োয় কেউ কেউ $x$ বাদ দিয়ে শুধু $\log x$ লিখে ফেলে, যা মারাত্মক ভুল।
> - **Trap 3 ($(\log x)^2 \neq \log(x^2)$):**
>   $(\log x)^2$ হলো পুরো লগের বর্গ, এটি কখনই $\log(x^2) = 2\log x$-এর সমান নয়।

---

## 📝 ২. ধাপে ধাপে পূর্ণাঙ্গ সমাধান (Step-by-Step Solution)

### **ধাপ ১: উভয় পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর প্রয়োগ করে**
$$\frac{dy}{dx} = \frac{d}{dx}\left(\frac{x}{\log x}\right)$$

### **ধাপ ২: ভাগফলের সূত্র (Quotient Rule) অনুসারে সাজানো**
$$\frac{dy}{dx} = \frac{\log x \cdot \frac{d}{dx}(x) - x \cdot \frac{d}{dx}(\log x)}{(\log x)^2}$$

### **ধাপ ৩: অন্তরজের প্রমিত মান বসিয়ে**
আমরা জানি, $\frac{d}{dx}(x) = 1$ এবং $\frac{d}{dx}(\log x) = \frac{1}{x}$।
$$\frac{dy}{dx} = \frac{(\log x)\cdot 1 - x \cdot\left(\frac{1}{x}\right)}{(\log x)^2}$$

### **ধাপ ৪: বীজগণিতীয় সরলীকরণ**
যেহেতু $x \cdot \frac{1}{x} = 1$:
$$\mathbf{\frac{dy}{dx} = \frac{\log x - 1}{(\log x)^2}} \quad \text{(Ans.)}$$

---

> [!IMPORTANT]
> **English Note — Domain, Critical Points & Singularity Analysis (AMIE Rigor)**
> - **Domain of $y(x)$:**
>   1. লগারিদমের অস্তিত্বের জন্য: $x > 0$
>   2. হরের শূন্যতা পরিহারের জন্য: $\log x \neq 0 \implies x \neq 1$
>   - অতএব, সংজ্ঞার ডোমেন: $\text{Dom}(y) = (0, 1) \cup (1, \infty)$
> - **Stationary / Critical Point:**
>   $\frac{dy}{dx} = 0 \implies \log x - 1 = 0 \implies \log x = 1 \implies x = e$।
>   $x = e$ বিন্দুতে বক্ররেখার স্পর্শক অনুভূমিক ($y(e) = e$) এবং এটি একটি স্থানীয় সর্বনিম্ন বিন্দু (Local Minimum)।

---

> [!TIP]
> **English Note — General Base $\log_a x$ Extension**
> If the problem specified base $10$ or base $a$ ($\log_a x$):
> $$\frac{d}{dx}(\log_a x) = \frac{1}{x \ln a} \implies \frac{dy}{dx} = \frac{\log_a x - \frac{1}{\ln a}}{(\log_a x)^2} = \frac{\ln a \log_a x - 1}{\ln a (\log_a x)^2}$$
> Standard AMIE textbook convention assumes base $e$ ($\ln x$).

---

## 🎯 ৩. নম্বর বণ্টন ও পরীক্ষার উপস্থাপনা কৌশল (Marks Distribution)

| মূল্যায়ন ধাপ | প্রত্যাশিত গাণিতিক পদক্ষেপ | নম্বর (Marks) |
| :--- | :--- | :--- |
| **১. Quotient Rule কাঠামো** | $\frac{v u' - u v'}{v^2}$ সূত্রের সঠিক বিস্তার | **১.৫** |
| **২. অন্তরজ নির্ণয়** | $\frac{d}{dx}(\log x) = \frac{1}{x}$ সঠিকভাবে বসানো | **১.৫** |
| **৩. বীজগণিতীয় কাটাকাটি** | $x \cdot \frac{1}{x} = 1$ সরলীকরণ | **১.০** |
| **৪. প্রমিত চূড়ান্ত রূপ** | $\frac{\log x - 1}{(\log x)^2}$ আকারে উত্তর লেখা | **১.০** |
| **মোট** | **AMIE Section-A পূর্ণাঙ্গ নম্বর** | **৫.০ / ৫.০** |
