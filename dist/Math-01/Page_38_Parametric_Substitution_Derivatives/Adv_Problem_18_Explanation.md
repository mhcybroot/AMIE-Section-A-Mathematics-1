# AMIE Section-A: Engineering Mathematics-1
## Differential Calculus — Inverse Trigonometric Substitution Derivative
### Chapter: Differential Calculus (অন্তরীকরণ) — Page 38, Problem 18 [AMIE Exam Nov-21, Oct-18]

---

### **১. সমস্যা চিহ্নিতকরণ (Problem Identification)**
**সমস্যা (Problem 18):**  
$\sin^{-1}\left(\frac{2x}{1+x^2}\right)$ এর সাপেক্ষে $\tan^{-1}\left(\frac{2x}{1-x^2}\right)$ এর অন্তরজ নির্ণয় কর।  
*(Differentiate $\tan^{-1}\left(\frac{2x}{1-x^2}\right)$ with respect to $\sin^{-1}\left(\frac{2x}{1+x^2}\right)$.)*

---

### **২. প্রয়োজনীয় মূল সূত্রাবলি (Key Engineering Formulas)**
1. **এক ফাংশনের সাপেক্ষে অন্য ফাংশনের অন্তরজ (Relative Derivative Rule):**  
   $$\frac{dy}{dZ} = \frac{\frac{dy}{dx}}{\frac{dZ}{dx}}$$
2. **বিপরীত ত্রিকোণমিতিক আদর্শ অভেদসমূহ (Standard Inverse Identities):**  
   $$\tan^{-1}\left(\frac{2x}{1-x^2}\right) = 2\tan^{-1} x \quad (|x| < 1)$$
   $$\sin^{-1}\left(\frac{2x}{1+x^2}\right) = 2\tan^{-1} x \quad (|x| \le 1)$$
3. **বিপরীত ট্যাঞ্জেন্ট ব্যবকলন সূত্র (Derivative of $\tan^{-1} x$):**  
   $$\frac{d}{dx}(\tan^{-1} x) = \frac{1}{1+x^2}$$

---

### **৩. ধাপে ধাপে বিস্তারিত সমাধান (Step-by-Step Mathematical Derivation)**

#### **ধাপ ১: ফাংশনদ্বয় চিহ্নিতকরণ ও প্রতিস্থাপন (Identification & Variable Assignment)**
ধরি,
$$y = \tan^{-1}\left(\frac{2x}{1-x^2}\right) \quad \text{এবং} \quad Z = \sin^{-1}\left(\frac{2x}{1+x^2}\right)$$
আমাদের নির্ণয় করতে হবে $\frac{dy}{dZ}$।

---

#### **ধাপ ২: প্রথম ফাংশন $y$ এর সরলীকরণ ও ব্যবকলন (Simplifying & Differentiating $y$)**
$$y = \tan^{-1}\left(\frac{2x}{1-x^2}\right)$$
ধরি, $x = \tan \theta \implies \theta = \tan^{-1} x$।  
আমরা জানি, $\frac{2\tan\theta}{1-\tan^2\theta} = \tan 2\theta$।  
অতএব:
$$y = \tan^{-1}(\tan 2\theta) = 2\theta = 2\tan^{-1} x$$

এখন $x$ এর সাপেক্ষে উভয়পক্ষকে অন্তরীকরণ করে পাই:
$$\frac{dy}{dx} = \frac{d}{dx}(2\tan^{-1} x) = 2 \cdot \frac{1}{1+x^2} = \frac{2}{1+x^2} \quad \text{--- (1)}$$

---

#### **ধাপ ৩: দ্বিতীয় ফাংশন $Z$ এর সরলীকরণ ও ব্যবকলন (Simplifying & Differentiating $Z$)**
$$Z = \sin^{-1}\left(\frac{2x}{1+x^2}\right)$$
একই প্রতিস্থাপন $x = \tan \theta \implies \theta = \tan^{-1} x$ ব্যবহার করে পাই:
$$\frac{2\tan\theta}{1+\tan^2\theta} = \sin 2\theta$$
অতএব:
$$Z = \sin^{-1}(\sin 2\theta) = 2\theta = 2\tan^{-1} x$$

এখন $x$ এর সাপেক্ষে উভয়পক্ষকে অন্তরীকরণ করে পাই:
$$\frac{dZ}{dx} = \frac{d}{dx}(2\tan^{-1} x) = 2 \cdot \frac{1}{1+x^2} = \frac{2}{1+x^2} \quad \text{--- (2)}$$

---

#### **ধাপ ৪: চেইন রুল প্রয়োগ করে $\frac{dy}{dZ}$ নির্ণয় (Calculating $\frac{dy}{dZ}$)**
চেইন রুল অনুসারে:
$$\frac{dy}{dZ} = \frac{\frac{dy}{dx}}{\frac{dZ}{dx}}$$

সমীকরণ (1) এবং সমীকরণ (2) এর মান বসিয়ে পাই:
$$\frac{dy}{dZ} = \frac{\frac{2}{1+x^2}}{\frac{2}{1+x^2}} = 1$$

---

### **৪. বিকল্প প্রত্যক্ষ পদ্ধতি (Direct Functional Equivalence)**
যেহেতু উভয় ফাংশনই $2\tan^{-1} x$ এর সমান:
$$y = 2\tan^{-1} x = Z \implies y = Z$$
অতএব $Z$ এর সাপেক্ষে সরাসরি অন্তরীকরণ করলে:
$$\frac{dy}{dZ} = \frac{d}{dZ}(Z) = 1$$

---

### **৫. চূড়ান্ত উত্তর (Final Answer)**
$$\mathbf{\frac{dy}{dZ} = 1}$$
