# AMIE Section-A: Engineering Mathematics-1
## Differential Calculus — Logarithmic Differentiation of Multi-Term Power Functions
### Chapter: Differential Calculus (অন্তরীকরণ) — Page 37, Problem 15 [AMIE Exam Oct-17]

---

### **১. সমস্যা চিহ্নিতকরণ (Problem Identification)**
**সমস্যা (Problem 15):**  
যদি $y = x^{\ln x} + x^{\cos^{-1} x}$ হয়, তবে $\frac{dy}{dx}$ এর মান নির্ণয় কর।  
*(If $y = x^{\ln x} + x^{\cos^{-1} x}$, find $\frac{dy}{dx}$.)*

---

### **২. প্রয়োজনীয় মূল সূত্রাবলি (Key Engineering Formulas)**
1. **যোগফলের ব্যবকলন নীতি (Sum Rule):**  
   যদি $y = u + v$ হয়, তবে $\frac{dy}{dx} = \frac{du}{dx} + \frac{dv}{dx}$
2. **লগারিদমিক ব্যবকলন (Logarithmic Differentiation):**  
   $\frac{d}{dx}[\ln f(x)] = \frac{1}{f(x)}\frac{df}{dx} \implies \frac{df}{dx} = f(x)\frac{d}{dx}[\ln f(x)]$
3. **গুণনের অন্তরজ নীতি (Product Rule):**  
   $\frac{d}{dx}(u \cdot v) = u\frac{dv}{dx} + v\frac{du}{dx}$
4. **বিপরীত ত্রিকোণমিতিক অন্তরজ (Inverse Trigonometric Derivative):**  
   $\frac{d}{dx}(\cos^{-1} x) = -\frac{1}{\sqrt{1-x^2}}$
5. **লগারিদমের ঘাত ধর্ম (Power Property of Logarithm):**  
   $\ln(a^b) = b \ln a$

---

### **৩. ধাপে ধাপে বিস্তারিত সমাধান (Step-by-Step Mathematical Derivation)**

#### **ধাপ ১: ফাংশনটিকে দুটি পৃথক অংশে বিভক্তকরণ (Separation into Sub-Functions)**
ধরি,
$$u = x^{\ln x} \quad \text{এবং} \quad v = x^{\cos^{-1} x}$$
সুতরাং প্রদত্ত সমীকরণটি দাঁড়ায়:
$$y = u + v$$

উভয়পক্ষকে $x$ এর সাপেক্ষে ব্যবকলন করে পাই:
$$\frac{dy}{dx} = \frac{du}{dx} + \frac{dv}{dx} \quad \text{--- (1)}$$

---

#### **ধাপ ২: প্রথম অংশ $u = x^{\ln x}$ এর ব্যবকলন নির্ণয় (Evaluating $\frac{du}{dx}$)**
$$u = x^{\ln x}$$
উভয়পাশে স্বাভাবিক লগারিদম ($\ln$) নিয়ে পাই:
$$\ln u = \ln\left(x^{\ln x}\right) = \ln x \cdot \ln x = (\ln x)^2$$

উভয়পক্ষকে $x$ এর সাপেক্ষে ব্যবকলন করে পাই:
$$\frac{d}{dx}(\ln u) = \frac{d}{dx}\left[(\ln x)^2\right]$$
$$\implies \frac{1}{u}\frac{du}{dx} = 2(\ln x) \cdot \frac{d}{dx}(\ln x)$$
$$\implies \frac{1}{u}\frac{du}{dx} = 2(\ln x) \cdot \frac{1}{x} = \frac{2\ln x}{x}$$
$$\implies \frac{du}{dx} = u \left(\frac{2\ln x}{x}\right)$$

$u = x^{\ln x}$ এর মান বসিয়ে পাই:
$$\frac{du}{dx} = x^{\ln x} \cdot \frac{2\ln x}{x} = \frac{2 x^{\ln x} \ln x}{x} = 2 x^{\ln x - 1} \ln x \quad \text{--- (2)}$$

---

#### **ধাপ ৩: দ্বিতীয় অংশ $v = x^{\cos^{-1} x}$ এর ব্যবকলন নির্ণয় (Evaluating $\frac{dv}{dx}$)**
$$v = x^{\cos^{-1} x}$$
উভয়পাশে স্বাভাবিক লগারিদম ($\ln$) নিয়ে পাই:
$$\ln v = \ln\left(x^{\cos^{-1} x}\right) = \cos^{-1} x \cdot \ln x$$

উভয়পক্ষকে $x$ এর সাপেক্ষে ব্যবকলন করে Product Rule প্রয়োগ করি:
$$\frac{d}{dx}(\ln v) = \frac{d}{dx}\left[\cos^{-1} x \cdot \ln x\right]$$
$$\implies \frac{1}{v}\frac{dv}{dx} = \frac{d}{dx}(\cos^{-1} x)\cdot \ln x + \cos^{-1} x \cdot \frac{d}{dx}(\ln x)$$
$$\implies \frac{1}{v}\frac{dv}{dx} = \left(-\frac{1}{\sqrt{1-x^2}}\right) \ln x + \cos^{-1} x \cdot \left(\frac{1}{x}\right)$$
$$\implies \frac{1}{v}\frac{dv}{dx} = \frac{\cos^{-1} x}{x} - \frac{\ln x}{\sqrt{1-x^2}}$$
$$\implies \frac{dv}{dx} = v \left[ \frac{\cos^{-1} x}{x} - \frac{\ln x}{\sqrt{1-x^2}} \right]$$

$v = x^{\cos^{-1} x}$ এর মান বসিয়ে পাই:
$$\frac{dv}{dx} = x^{\cos^{-1} x} \left[ \frac{\cos^{-1} x}{x} - \frac{\ln x}{\sqrt{1-x^2}} \right] \quad \text{--- (3)}$$

---

#### **ধাপ ৪: চূড়ান্ত অন্তরজ $\frac{dy}{dx}$ সংকলন (Final Synthesis)**
সমীকরণ (2) এবং সমীকরণ (3) এর মান সমীকরণ (1)-এ বসিয়ে পাই:
$$\frac{dy}{dx} = \frac{2 x^{\ln x} \ln x}{x} + x^{\cos^{-1} x} \left[ \frac{\cos^{-1} x}{x} - \frac{\ln x}{\sqrt{1-x^2}} \right]$$

---

### **৪. চূড়ান্ত উত্তর (Final Answer)**
$$\mathbf{\frac{dy}{dx} = \frac{2 x^{\ln x}\ln x}{x} + x^{\cos^{-1} x}\left(\frac{\cos^{-1} x}{x} - \frac{\ln x}{\sqrt{1-x^2}}\right)}$$

---

### **৫. ইঞ্জিনিয়ারিং বিশ্লেষণ ও পরীক্ষার গুরুত্বপূর্ণ নোট (Engineering Notes & Callouts)**
1. **লগারিদমের ভুল প্রয়োগ পরিহার:** সরাসরি $y = u + v$ সমীকরণে $\ln y = \ln(u+v) \neq \ln u + \ln v$। যোগফলের ক্ষেত্রে অবশ্যই পৃথকভাবে $u$ ও $v$ ধরে আলাদা ব্যবকলন করতে হবে।
2. **চেইন রুল সতর্কতা:** $\cos^{-1} x$ এর ব্যবকলনে ঋণাত্মক চিহ্ন এবং বর্গমূলের ভিতরের $(1-x^2)$ পদটি সতর্কভাবে বজায় রাখতে হবে।
3. **ঘাতের সূচকীয় সরলীকরণ:** $\frac{x^{\ln x}}{x} = x^{\ln x - 1}$ এবং $\frac{x^{\cos^{-1} x}}{x} = x^{\cos^{-1} x - 1}$ আকারেও উত্তর প্রকাশ করা সম্পূর্ণ বৈধ।
