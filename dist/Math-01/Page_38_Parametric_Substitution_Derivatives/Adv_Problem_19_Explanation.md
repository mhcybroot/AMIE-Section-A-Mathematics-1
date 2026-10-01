# AMIE Section-A Preparation: Mathematics-1 (Differential Calculus)
## Inverse Trig Differentiation w.r.t Function — Page 38, Problem 19 [AMIE Standard Practice]

---

### **গাণিতিক সমস্যা (Problem Statement):**
যদি $y = \tan^{-1}\left(\frac{x}{\sqrt{1-x^2}}\right)$ এবং $z = \sec^{-1}\left(\frac{1}{2x^2-1}\right)$ হয়, তবে $\frac{dy}{dz}$ এর মান নির্ণয় কর।  
*(If $y = \tan^{-1}\left(\frac{x}{\sqrt{1-x^2}}\right)$ and $z = \sec^{-1}\left(\frac{1}{2x^2-1}\right)$, find $\frac{dy}{dz}$.)*

---

### **ধাপভিত্তিক গাণিতিক সমাধান (Step-by-Step Solution):**

#### **Step 1: $y$ এর জন্য ত্রিকোণমিতিক প্রতিস্থাপন ($x = \sin	heta$)**
ধরি $x = \sin\theta \implies \theta = \sin^{-1} x$।

$$
y = \tan^{-1}\left(\frac{\sin\theta}{\sqrt{1-\sin^2\theta}}\right) = \tan^{-1}\left(\frac{\sin\theta}{\cos\theta}\right) = \tan^{-1}(\tan\theta) = \theta = \sin^{-1} x
$$


$$
\therefore \frac{dy}{dx} = \frac{1}{\sqrt{1-x^2}} \quad \text{--- (1)}
$$


---

#### **Step 2: $z$ এর জন্য ত্রিকোণমিতিক প্রতিস্থাপন ($x = \cos\phi$)**
ধরি $x = \cos\phi \implies \phi = \cos^{-1} x$।

$$
z = \sec^{-1}\left(\frac{1}{2\cos^2\phi - 1}\right) = \sec^{-1}\left(\frac{1}{\cos 2\phi}\right) = \sec^{-1}(\sec 2\phi) = 2\phi = 2\cos^{-1} x
$$


---

#### **Step 3: $z$ এর অন্তরীকরণ ($rac{dz}{dx}$ নির্ণয়)**
উভয় পাশে $x$ এর সাপেক্ষে ব্যবকলন করে:

$$
\frac{dz}{dx} = \frac{d}{dx}(2\cos^{-1} x) = 2\left(-\frac{1}{\sqrt{1-x^2}}\right) = -\frac{2}{\sqrt{1-x^2}} \quad \text{--- (2)}
$$


---

#### **Step 4: চেইন রুল দ্বারা $rac{dy}{dz}$ নির্ণয় (Solving for $rac{dy}{dz}$)**
সমীকরণ (1) ও (2) ভাগ করে পাই:

$$
\frac{dy}{dz} = \frac{\frac{dy}{dx}}{\frac{dz}{dx}} = \frac{\frac{1}{\sqrt{1-x^2}}}{-\frac{2}{\sqrt{1-x^2}}} = -\frac{1}{2}
$$


---

### **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dz} = -\frac{1}{2}}$$
