# AMIE Section-A Preparation: Mathematics-1 (Differential Calculus)
## Composite Functions & Inverse Trigonometry — Page 36, Problem 12

---

### **গাণিতিক সমস্যা (Problem Statement):**
যদি $y = \sin(x^{\log x}) + \sin^2(\cos^{-1} x)$ হয়, তবে $\frac{dy}{dx}$ এর মান নির্ণয় কর।  
*(If $y = \sin(x^{\log x}) + \sin^2(\cos^{-1} x)$, find $\frac{dy}{dx}$.)*

---

### **ধাপভিত্তিক গাণিতিক সমাধান (Step-by-Step Solution):**

#### **ধাপ ১: দ্বিতীয় পদটির ত্রিকোণমিতিক সরলীকরণ (Trigonometric Simplification)**
প্রদত্ত সমীকরণ:
$$y = \sin(x^{\log x}) + \sin^2(\cos^{-1} x)$$

দ্বিতীয় পদটি লক্ষ্য করি: $\sin^2(\cos^{-1} x)$।  
আমরা জানি, $\sin^2 \theta = 1 - \cos^2 \theta$। এখানে $\theta = \cos^{-1} x$ বসালে:
$$\sin^2(\cos^{-1} x) = 1 - \left[\cos(\cos^{-1} x)\right]^2 = 1 - (x)^2 = 1 - x^2$$

সুতরাং মূল সমীকরণটি দাঁড়ায়:
$$y = \sin(x^{\log x}) + 1 - x^2 \quad \text{--- (1)}$$

---

#### **ধাপ ২: প্রথম পদের অভ্যন্তরীণ রাশি $u = x^{\log x}$ এর ব্যবকলন (Differentiating $x^{\log x}$)**
ধরি, $u = x^{\log x}$।  
উভয় পাশে প্রাকৃতিক লগারিদম $\log$ নিয়ে:
$$\log u = \log\left(x^{\log x}\right) = \log x \cdot \log x = (\log x)^2$$

উভয় পাশে $x$ এর সাপেক্ষে অন্তরীকরণ করে:
$$\frac{1}{u}\frac{du}{dx} = 2(\log x)^{2-1} \cdot \frac{d}{dx}(\log x) = 2\log x \cdot \frac{1}{x} = \frac{2\log x}{x}$$

$$\therefore \frac{du}{dx} = u \cdot \frac{2\log x}{x} = x^{\log x} \cdot \frac{2\log x}{x} \quad \text{--- (2)}$$

---

#### **ধাপ ৩: মূল সমীকরণ (1) এর উভয় পাশে ব্যবকলন (Differentiating Main Equation)**
সমীকরণ (1) এর উভয় পাশে $\frac{d}{dx}$ প্রয়োগ করে:
$$\frac{dy}{dx} = \frac{d}{dx}\left[\sin(x^{\log x})\right] + \frac{d}{dx}(1) - \frac{d}{dx}(x^2)$$

চেইন রুল অনুসারে:
$$\frac{dy}{dx} = \cos(x^{\log x}) \cdot \frac{d}{dx}(x^{\log x}) + 0 - 2x$$

---

#### **ধাপ ৪: সমীকরণ (2) এর মান প্রতিস্থাপন (Final Substitution)**
$$\frac{dy}{dx} = \cos(x^{\log x}) \cdot \left(x^{\log x} \cdot \frac{2\log x}{x}\right) - 2x$$

$$\therefore \mathbf{\frac{dy}{dx} = \cos(x^{\log x}) \cdot x^{\log x} \cdot \frac{2\log x}{x} - 2x \quad \text{বা} \quad \frac{2\log x}{x} x^{\log x} \cos(x^{\log x}) - 2x}$$

---

### **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dx} = \cos(x^{\log x}) \cdot x^{\log x} \cdot \frac{2\log x}{x} - 2x}$$
