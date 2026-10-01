# AMIE Section-A Preparation: Mathematics-1 (Differential Calculus)
## Inverse Trigonometric Differentiation — Page 39, Problem 24 [AMIE Nov-23 Exam]

---

### **১. সমস্যা চিহ্নিতকরণ (Problem Identification)**
**সমস্যা (Problem 24):**  
$y = \tan^{-1}\left[\frac{\cos x}{1 + \sin x}\right]$ ফাংশনটির অন্তরজ নির্ণয় কর।  
*(Find the derivative of the function $y = \tan^{-1}\left[\frac{\cos x}{1 + \sin x}\right]$.)*

---

### **২. প্রয়োজনীয় মূল সূত্রাবলি (Key Engineering Formulas)**
1. **ত্রিকোণমিতিক অংশকোণ সূত্র (Half-Angle Trigonometric Identities):**  
   $$\cos x = \cos^2\left(\frac{x}{2}\right) - \sin^2\left(\frac{x}{2}\right)$$
   $$1 + \sin x = \left[\cos\left(\frac{x}{2}\right) + \sin\left(\frac{x}{2}\right)\right]^2$$
2. **ট্যাঞ্জেন্ট বিয়োগ সূত্র (Tangent Difference Formula):**  
   $$\frac{1 - \tan\theta}{1 + \tan\theta} = \tan\left(\frac{\pi}{4} - \theta\right)$$
3. **বিপরীত ট্যাঞ্জেন্ট অভেদ:**  
   $$\tan^{-1}[\tan\phi] = \phi$$

---

### **৩. ধাপে ধাপে বিস্তারিত সমাধান (Step-by-Step Mathematical Derivation)**

#### **ধাপ ১: ভিতরের ভগ্নাংশের অংশকোণীয় রূপান্তর (Trigonometric Decomposition)**
প্রদত্ত ফাংশন:
$$y = \tan^{-1}\left[\frac{\cos x}{1 + \sin x}\right]$$

লব ও হরকে অংশকোণে প্রকাশ করি:
$$\cos x = \cos^2\left(\frac{x}{2}\right) - \sin^2\left(\frac{x}{2}\right) = \left[\cos\left(\frac{x}{2}\right) - \sin\left(\frac{x}{2}\right)\right]\left[\cos\left(\frac{x}{2}\right) + \sin\left(\frac{x}{2}\right)\right]$$
$$1 + \sin x = \cos^2\left(\frac{x}{2}\right) + \sin^2\left(\frac{x}{2}\right) + 2\sin\left(\frac{x}{2}\right)\cos\left(\frac{x}{2}\right) = \left[\cos\left(\frac{x}{2}\right) + \sin\left(\frac{x}{2}\right)\right]^2$$

---

#### **ধাপ ২: ভগ্নাংশ লঘিষ্ঠকরণ ও ট্যাঞ্জেন্ট সূত্রে রূপান্তর (Simplification)**
$$\frac{\cos x}{1 + \sin x} = \frac{\left[\cos(x/2) - \sin(x/2)\right]\left[\cos(x/2) + \sin(x/2)\right]}{\left[\cos(x/2) + \sin(x/2)\right]^2} = \frac{\cos(x/2) - \sin(x/2)}{\cos(x/2) + \sin(x/2)}$$

লব ও হরকে $\cos(x/2)$ দ্বারা ভাগ করে পাই:
$$\frac{1 - \tan(x/2)}{1 + \tan(x/2)} = \frac{\tan(\pi/4) - \tan(x/2)}{1 + \tan(\pi/4)\tan(x/2)} = \tan\left(\frac{\pi}{4} - \frac{x}{2}\right)$$

---

#### **ধাপ ৩: বিপরীত ফাংশন ও অন্তরীকরণ (Inverse Application & Derivative)**
মূল ফাংশনে মান বসিয়ে পাই:
$$y = \tan^{-1}\left[\tan\left(\frac{\pi}{4} - \frac{x}{2}\right)\right] = \frac{\pi}{4} - \frac{x}{2}$$

এখন $x$ এর সাপেক্ষে উভয়পক্ষকে ব্যবকলন করে পাই:
$$\frac{dy}{dx} = \frac{d}{dx}\left(\frac{\pi}{4} - \frac{x}{2}\right) = 0 - \frac{1}{2} = -\frac{1}{2}$$

---

### **৪. চূড়ান্ত উত্তর (Final Answer)**
$$\mathbf{\frac{dy}{dx} = -\frac{1}{2}}$$
