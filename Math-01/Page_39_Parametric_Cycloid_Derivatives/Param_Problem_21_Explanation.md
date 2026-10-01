# AMIE Section-A Preparation: Mathematics-1 (Differential Calculus)
## Inverse Trigonometric Derivative w.r.t $x$ — Page 39, Problem 21 [AMIE Standard Core Problem]

---

### **গাণিতিক সমস্যা (Problem Statement):**
$x$ এর সাপেক্ষে $\tan^{-1}\left(\frac{\sqrt{1+x^2}-1}{x}\right)$ এর অন্তরজ নির্ণয় কর।  
*(Differentiate $\tan^{-1}\left(\frac{\sqrt{1+x^2}-1}{x}\right)$ with respect to $x$.)*

---

### **ধাপভিত্তিক গাণিতিক সমাধান (Step-by-Step Solution):**

#### **Step 1: ত্রিকোণমিতিক প্রতিস্থাপন নির্বাচন ($x = 	an	heta$)**
ধরি, $y = \tan^{-1}\left(\frac{\sqrt{1+x^2}-1}{x}\right)$।
ধরি, $x = \tan\theta \implies \theta = \tan^{-1} x$।

---

#### **Step 2: ত্রিকোণমিতিক অনুপাত সরলীকরণ (Trig Simplification)**

$$
\frac{\sqrt{1+\tan^2\theta}-1}{\tan\theta} = \frac{\sec\theta - 1}{\tan\theta} = \frac{\frac{1-\cos\theta}{\cos\theta}}{\frac{\sin\theta}{\cos\theta}} = \frac{1-\cos\theta}{\sin\theta} = \frac{2\sin^2(\theta/2)}{2\sin(\theta/2)\cos(\theta/2)} = \tan\left(\frac{\theta}{2}\right)
$$


---

#### **Step 3: বিপরীত ত্রিকোণমিতি রূপান্তর (Inverse Trig Evaluation)**
মানটি মূল সমীকরণে প্রতিস্থাপন করে পাই:

$$
y = \tan^{-1}\left(\tan\frac{\theta}{2}\right) = \frac{\theta}{2} = \frac{1}{2}\tan^{-1} x \quad \text{--- (1)}
$$


---

#### **Step 4: $x$ এর সাপেক্ষে ব্যবকলন (Differentiating w.r.t $x$)**
সমীকরণ (1) এর উভয় পাশে $\frac{d}{dx}$ প্রয়োগ করে পাই:

$$
\frac{dy}{dx} = \frac{1}{2}\frac{d}{dx}(\tan^{-1} x) = \frac{1}{2}\cdot\frac{1}{1+x^2} = \frac{1}{2(1+x^2)}
$$


---

### **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dx} = \frac{1}{2(1+x^2)}}$$
