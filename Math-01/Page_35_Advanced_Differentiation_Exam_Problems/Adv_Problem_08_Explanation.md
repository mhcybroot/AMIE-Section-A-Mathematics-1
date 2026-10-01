# AMIE Section-A Preparation: Mathematics-1 (Differential Calculus)
## Inverse Trigonometric Substitution — Page 35, Problem 08 [AMIE Oct-17 Exam]

---

### **গাণিতিক সমস্যা (Problem Statement):**
যদি $y = \sin\left(2\tan^{-1}\sqrt{\frac{1-x}{1+x}}\right)$ হয়, তবে $\frac{dy}{dx}$ এর মান নির্ণয় কর।  
*(If $y = \sin\left(2\tan^{-1}\sqrt{\frac{1-x}{1+x}}\right)$, find $\frac{dy}{dx}$.)*

---

### **ধাপভিত্তিক গাণিতিক সমাধান (Step-by-Step Solution):**

#### **ধাপ ১: ত্রিকোণমিতিক প্রতিস্থাপন (Trigonometric Substitution)**
প্রদত্ত ফাংশন:
$$y = \sin\left(2\tan^{-1}\sqrt{\frac{1-x}{1+x}}\right)$$

ধরি, $x = \cos\theta \implies \theta = \cos^{-1} x$।  
আমরা জানি:
- $1 - x = 1 - \cos\theta = 2\sin^2\left(\frac{\theta}{2}\right)$
- $1 + x = 1 + \cos\theta = 2\cos^2\left(\frac{\theta}{2}\right)$

---

#### **ধাপ ২: বর্গমূল অংশের সরলীকরণ (Simplifying the Radicand)**
অনুপাতটিতে মান প্রতিস্থাপন করে পাই:
$$\sqrt{\frac{1-x}{1+x}} = \sqrt{\frac{2\sin^2(\theta/2)}{2\cos^2(\theta/2)}} = \sqrt{\tan^2\left(\frac{\theta}{2}\right)} = \tan\left(\frac{\theta}{2}\right)$$

---

#### **ধাপ ৩: বিপরীত ত্রিকোণমিতিক ফাংশনের মান নির্ণয় (Evaluating the Inverse Function)**
মানটি মূল রাশিতে বসিয়ে পাই:
$$2\tan^{-1}\sqrt{\frac{1-x}{1+x}} = 2\tan^{-1}\left(\tan\frac{\theta}{2}\right) = 2 \cdot \frac{\theta}{2} = \theta$$

সুতরাং মূল ফাংশনটি দাঁড়ায়:
$$y = \sin\theta$$

যেহেতু $x = \cos\theta$, তাই ত্রিকোণমিতিক অভেদ $\sin\theta = \sqrt{1 - \cos^2\theta}$ প্রয়োগ করে:
$$y = \sqrt{1 - x^2} = (1 - x^2)^{1/2} \quad \text{--- (1)}$$

---

#### **ধাপ ৪: $x$ এর সাপেক্ষে ব্যবকলন (Differentiating w.r.t $x$)**
সমীকরণ (1) এর উভয় পাশে $\frac{d}{dx}$ প্রয়োগ করে:
$$\frac{dy}{dx} = \frac{d}{dx}\left[\sqrt{1 - x^2}\right] = \frac{1}{2\sqrt{1 - x^2}} \cdot \frac{d}{dx}(1 - x^2)$$

$$\frac{dy}{dx} = \frac{1}{2\sqrt{1 - x^2}} \cdot (-2x) = -\frac{2x}{2\sqrt{1 - x^2}}$$

$$\therefore \mathbf{\frac{dy}{dx} = -\frac{x}{\sqrt{1 - x^2}}}$$

---

### **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dx} = -\frac{x}{\sqrt{1 - x^2}}}$$
