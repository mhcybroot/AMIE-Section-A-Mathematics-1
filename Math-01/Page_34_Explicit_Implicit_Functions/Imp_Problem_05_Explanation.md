# AMIE Section-A Preparation: Mathematics-1 (Differential Calculus)
## Inverse Trigonometric Differentiation — Page 34, Problem 05

---

### **গাণিতিক সমস্যা (Problem Statement):**
যদি $y = \tan^{-1}\sqrt{\frac{1-\cos x}{1+\cos x}}$ হয়, তবে $\frac{dy}{dx}$ এর মান নির্ণয় কর।  
*(If $y = \tan^{-1}\sqrt{\frac{1-\cos x}{1+\cos x}}$, find $\frac{dy}{dx}$.)*

---

### **ধাপভিত্তিক গাণিতিক সমাধান (Step-by-Step Solution):**

#### **ধাপ ১: ত্রিকোণমিতিক রূপান্তর সূত্রাবলি (Trigonometric Half-Angle Identities)**
প্রদত্ত ফাংশন:
$$y = \tan^{-1}\sqrt{\frac{1-\cos x}{1+\cos x}}$$

আমরা জানি, ত্রিকোণমিতির অংশকোণের মৌলিক সূত্র:
- $1 - \cos x = 2\sin^2\left(\frac{x}{2}\right)$
- $1 + \cos x = 2\cos^2\left(\frac{x}{2}\right)$

---

#### **ধাপ ২: বর্গমূলের ভেতরের অংশ সরলীকরণ (Simplifying the Radicand)**
অনুপাতটিতে সূত্র প্রয়োগ করে পাই:
$$\frac{1-\cos x}{1+\cos x} = \frac{2\sin^2(x/2)}{2\cos^2(x/2)} = \frac{\sin^2(x/2)}{\cos^2(x/2)} = \tan^2\left(\frac{x}{2}\right)$$

বর্গমূল নির্ণয় করে পাই:
$$\sqrt{\frac{1-\cos x}{1+\cos x}} = \sqrt{\tan^2\left(\frac{x}{2}\right)} = \tan\left(\frac{x}{2}\right)$$

---

#### **ধাপ ৩: বিপরীত ত্রিকোণমিতিক ফাংশন সরলীকরণ (Evaluating Inverse Trig Function)**
মানটি মূল ফাংশনে প্রতিস্থাপন করি:
$$y = \tan^{-1}\left(\tan\frac{x}{2}\right)$$

আমরা জানি, $\tan^{-1}(\tan \theta) = \theta$। সুতরাং:
$$y = \frac{x}{2} \quad \text{বা} \quad y = \frac{1}{2}x$$

---

#### **ধাপ ৪: $x$ এর সাপেক্ষে ব্যবকলন (Differentiating w.r.t $x$)**
উভয় পক্ষে $\frac{d}{dx}$ প্রয়োগ করে পাই:
$$\frac{dy}{dx} = \frac{d}{dx}\left(\frac{1}{2}x\right) = \frac{1}{2}\frac{d}{dx}(x) = \frac{1}{2}(1)$$

$$\therefore \mathbf{\frac{dy}{dx} = \frac{1}{2}}$$

---

### **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dx} = \frac{1}{2}}$$
