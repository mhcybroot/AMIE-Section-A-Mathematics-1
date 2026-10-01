# AMIE Section-A: Engineering Mathematics-1
## Differential Calculus — Parametric & Inverse Trigonometric Substitution
### Chapter: Differential Calculus (অন্তরীকরণ) — Page 37, Problem 16

---

### **১. সমস্যা চিহ্নিতকরণ (Problem Identification)**
**সমস্যা (Problem 16):**  
যদি $\sin x = \frac{2t}{1+t^2}$ এবং $\tan y = \frac{2t}{1-t^2}$ হয়, তবে $\frac{dy}{dx}$ এর মান নির্ণয় কর।  
*(If $\sin x = \frac{2t}{1+t^2}$ and $\tan y = \frac{2t}{1-t^2}$, find $\frac{dy}{dx}$.)*

---

### **২. প্রয়োজনীয় মূল সূত্রাবলি (Key Engineering Formulas)**
1. **প্যারামেট্রিক ব্যবকলন সূত্র (Parametric Derivative Formula):**  
   $$\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}}$$
2. **বিপরীত ত্রিকোণমিতিক আদর্শ রূপান্তর (Inverse Trigonometric Identites):**  
   $$\sin^{-1}\left(\frac{2t}{1+t^2}\right) = 2\tan^{-1} t \quad (\text{for } |t| \le 1)$$
   $$\tan^{-1}\left(\frac{2t}{1-t^2}\right) = 2\tan^{-1} t \quad (\text{for } |t| < 1)$$
3. **বিপরীত ট্যাঞ্জেন্ট ব্যবকলন (Derivative of $\tan^{-1} t$):**  
   $$\frac{d}{dt}(\tan^{-1} t) = \frac{1}{1+t^2}$$

---

### **৩. ধাপে ধাপে বিস্তারিত সমাধান (Step-by-Step Mathematical Derivation)**

#### **ধাপ ১: $x$ ফাংশনটিকে $t$ এর মাধ্যমে প্রকাশ ও অন্তরীকরণ (Expressing & Differentiating $x(t)$)**
প্রদত্ত,
$$\sin x = \frac{2t}{1+t^2} \implies x = \sin^{-1}\left(\frac{2t}{1+t^2}\right)$$

ত্রিকোণমিতিক প্রতিস্থাপন প্রয়োগ করি: ধরি, $t = \tan \theta \implies \theta = \tan^{-1} t$।  
তাহলে:
$$\frac{2t}{1+t^2} = \frac{2\tan\theta}{1+\tan^2\theta} = \sin 2\theta$$
অতএব,
$$x = \sin^{-1}(\sin 2\theta) = 2\theta = 2\tan^{-1} t$$

এখন $t$ এর সাপেক্ষে অন্তরীকরণ করে পাই:
$$\frac{dx}{dt} = \frac{d}{dt}(2\tan^{-1} t) = 2 \cdot \frac{1}{1+t^2} = \frac{2}{1+t^2} \quad \text{--- (1)}$$

---

#### **ধাপ ২: $y$ ফাংশনটিকে $t$ এর মাধ্যমে প্রকাশ ও অন্তরীকরণ (Expressing & Differentiating $y(t)$)**
প্রদত্ত,
$$\tan y = \frac{2t}{1-t^2} \implies y = \tan^{-1}\left(\frac{2t}{1-t^2}\right)$$

একইভাবে $t = \tan \theta$ প্রতিস্থাপন বিবেচনা করে পাই:
$$\frac{2t}{1-t^2} = \frac{2\tan\theta}{1-\tan^2\theta} = \tan 2\theta$$
অতএব,
$$y = \tan^{-1}(\tan 2\theta) = 2\theta = 2\tan^{-1} t$$

এখন $t$ এর সাপেক্ষে অন্তরীকরণ করে পাই:
$$\frac{dy}{dt} = \frac{d}{dt}(2\tan^{-1} t) = 2 \cdot \frac{1}{1+t^2} = \frac{2}{1+t^2} \quad \text{--- (2)}$$

---

#### **ধাপ ৩: চেইন রুল প্রয়োগ করে $\frac{dy}{dx}$ নির্ণয় (Calculating $\frac{dy}{dx}$ via Parametric Rule)**
প্যারামেট্রিক ব্যবকলন সূত্রানুযায়ী:
$$\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}}$$

সমীকরণ (1) ও (2) থেকে মান বসিয়ে পাই:
$$\frac{dy}{dx} = \frac{\frac{2}{1+t^2}}{\frac{2}{1+t^2}} = 1$$

---

### **৪. বিকল্প প্রত্যক্ষ পদ্ধতি (Direct Elimination Method)**
যেহেতু $x = 2\tan^{-1} t$ এবং $y = 2\tan^{-1} t$, সরাসরি দেখা যাচ্ছে যে:
$$y = x$$
উভয়পক্ষকে $x$ এর সাপেক্ষে সরাসরি ব্যবকলন করলে:
$$\frac{dy}{dx} = \frac{d}{dx}(x) = 1$$

---

### **৫. চূড়ান্ত উত্তর (Final Answer)**
$$\mathbf{\frac{dy}{dx} = 1}$$
