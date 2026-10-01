# AMIE Section-A Preparation: Mathematics-1 (Differential Calculus)
## Inverse Trigonometric Reduction — Page 36, Problem 13

---

### **গাণিতিক সমস্যা (Problem Statement):**
যদি $y = \tan^{-1}\left(\frac{\sqrt{1+x^2}-1}{x}\right)$ হয়, তবে $\frac{dy}{dx}$ এর মান নির্ণয় কর।  
*(If $y = \tan^{-1}\left(\frac{\sqrt{1+x^2}-1}{x}\right)$, find $\frac{dy}{dx}$.)*

---

### **ধাপভিত্তিক গাণিতিক সমাধান (Step-by-Step Solution):**

#### **ধাপ ১: ত্রিকোণমিতিক প্রতিস্থাপন (Trigonometric Substitution)**
প্রদত্ত ফাংশন:
$$y = \tan^{-1}\left(\frac{\sqrt{1+x^2}-1}{x}\right)$$

ধরি, $x = \tan\theta \implies \theta = \tan^{-1} x$।  
আমরা জানি, $\sqrt{1+x^2} = \sqrt{1+\tan^2\theta} = \sqrt{\sec^2\theta} = \sec\theta$।

---

#### **ধাপ ২: ভগ্নাংশটির ত্রিকোণমিতিক সরলীকরণ (Trigonometric Reduction)**
রাশিটিতে মান বসিয়ে পাই:
$$\frac{\sqrt{1+x^2}-1}{x} = \frac{\sec\theta - 1}{\tan\theta}$$

$\sec\theta = \frac{1}{\cos\theta}$ এবং $\tan\theta = \frac{\sin\theta}{\cos\theta}$ বসিয়ে:
$$= \frac{\frac{1}{\cos\theta} - 1}{\frac{\sin\theta}{\cos\theta}} = \frac{\frac{1-\cos\theta}{\cos\theta}}{\frac{\sin\theta}{\cos\theta}} = \frac{1-\cos\theta}{\sin\theta}$$

অংশকোণের ত্রিকোণমিতিক সূত্র $1-\cos\theta = 2\sin^2(\theta/2)$ এবং $\sin\theta = 2\sin(\theta/2)\cos(\theta/2)$ প্রয়োগ করে:
$$= \frac{2\sin^2(\theta/2)}{2\sin(\theta/2)\cos(\theta/2)} = \frac{\sin(\theta/2)}{\cos(\theta/2)} = \tan\left(\frac{\theta}{2}\right)$$

---

#### **ধাপ ৩: বিপরীত ফাংশন অপনয়ন (Evaluating the Inverse Function)**
সরলীকৃত মান মূল ফাংশনে প্রতিস্থাপন করি:
$$y = \tan^{-1}\left(\tan\frac{\theta}{2}\right) = \frac{\theta}{2} = \frac{1}{2}\theta$$

যেহেতু $\theta = \tan^{-1} x$, সুতরাং:
$$y = \frac{1}{2}\tan^{-1} x \quad \text{--- (1)}$$

---

#### **ধাপ ৪: $x$ এর সাপেক্ষে ব্যবকলন (Differentiating w.r.t $x$)**
সমীকরণ (1) এর উভয় পাশে $\frac{d}{dx}$ প্রয়োগ করে:
$$\frac{dy}{dx} = \frac{d}{dx}\left(\frac{1}{2}\tan^{-1} x\right) = \frac{1}{2} \cdot \frac{d}{dx}(\tan^{-1} x)$$

আমরা জানি, $\frac{d}{dx}(\tan^{-1} x) = \frac{1}{1+x^2}$। সুতরাং:
$$\therefore \mathbf{\frac{dy}{dx} = \frac{1}{2(1+x^2)}}$$

---

### **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dx} = \frac{1}{2(1+x^2)}}$$
