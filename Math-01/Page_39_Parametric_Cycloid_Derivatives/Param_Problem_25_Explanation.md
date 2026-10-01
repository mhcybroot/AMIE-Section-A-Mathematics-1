# AMIE Section-A Preparation: Mathematics-1 (Differential Calculus)
## Inverse Trigonometric Differentiation — Page 39, Problem 25 [AMIE Standard Practice]

---

### **১. সমস্যা চিহ্নিতকরণ (Problem Identification)**
**সমস্যা (Problem 25):**  
$y = \tan^{-1}\left[\frac{\sin x}{1 + \cos x}\right]$ ফাংশনটির অন্তরজ নির্ণয় কর।  
*(Find the derivative of the function $y = \tan^{-1}\left[\frac{\sin x}{1 + \cos x}\right]$.)*

---

### **২. প্রয়োজনীয় মূল সূত্রাবলি (Key Engineering Formulas)**
1. **ত্রিকোণমিতিক অংশকোণ সূত্র (Half-Angle Trigonometric Identities):**  
   $$\sin x = 2\sin\left(\frac{x}{2}\right)\cos\left(\frac{x}{2}\right)$$
   $$1 + \cos x = 2\cos^2\left(\frac{x}{2}\right)$$
2. **বিপরীত ট্যাঞ্জেন্ট অভেদ:**  
   $$\tan^{-1}[\tan\theta] = \theta$$

---

### **৩. ধাপে ধাপে বিস্তারিত সমাধান (Step-by-Step Mathematical Derivation)**

#### **ধাপ ১: ভিতরের ভগ্নাংশের অংশকোণীয় রূপান্তর (Trigonometric Decomposition)**
প্রদত্ত ফাংশন:
$$y = \tan^{-1}\left[\frac{\sin x}{1 + \cos x}\right]$$

লব ও হরকে অংশকোণে প্রকাশ করি:
$$\sin x = 2\sin\left(\frac{x}{2}\right)\cos\left(\frac{x}{2}\right)$$
$$1 + \cos x = 2\cos^2\left(\frac{x}{2}\right)$$

---

#### **ধাপ ২: ভগ্নাংশ লঘিষ্ঠকরণ ও সরলীকরণ (Simplification)**
$$\frac{\sin x}{1 + \cos x} = \frac{2\sin(x/2)\cos(x/2)}{2\cos^2(x/2)} = \frac{\sin(x/2)}{\cos(x/2)} = \tan\left(\frac{x}{2}\right)$$

---

#### **ধাপ ৩: বিপরীত ফাংশন অবলোপন ও ব্যবকলন (Inverse Application & Derivative)**
মূল ফাংশনে মান বসিয়ে পাই:
$$y = \tan^{-1}\left[\tan\left(\frac{x}{2}\right)\right] = \frac{x}{2}$$

এখন $x$ এর সাপেক্ষে উভয়পক্ষকে ব্যবকলন করে পাই:
$$\frac{dy}{dx} = \frac{d}{dx}\left(\frac{x}{2}\right) = \frac{1}{2}$$

---

### **৪. চূড়ান্ত উত্তর (Final Answer)**
$$\mathbf{\frac{dy}{dx} = \frac{1}{2}}$$
