# AMIE Section-A Preparation: Mathematics-1 (Differential Calculus)
## Infinite Series Differentiation (অসীম ধারার অন্তরীকরণ) — Page 35, Problem 09 [AMIE Ap-19, Ap-18 Exam]

---

### **গাণিতিক সমস্যা (Problem Statement):**
যদি $y = \sqrt{\sin x + \sqrt{\sin x + \sqrt{\sin x + \dots \infty}}}$ হয়, তবে প্রমাণ কর যে,  
$$\frac{dy}{dx} = \frac{\cos x}{2y-1}$$
*(If $y = \sqrt{\sin x + \sqrt{\sin x + \sqrt{\sin x + \dots \infty}}}$, prove that $\frac{dy}{dx} = \frac{\cos x}{2y-1}$.)*

---

### **ধাপভিত্তিক গাণিতিক সমাধান (Step-by-Step Solution):**

#### **ধাপ ১: অসীম ধারার স্ব-অনুরূপতা ধর্ম প্রয়োগ (Self-Similarity Property)**
প্রদত্ত অসীম ধারা:
$$y = \sqrt{\sin x + \sqrt{\sin x + \sqrt{\sin x + \dots \infty}}}$$

যেহেতু ধারাটি অসীম পর্যন্ত বিস্তৃত, প্রথম পদের পরের অভ্যন্তরীণ সম্পূর্ণ ধারাটিও মূল চলক $y$ এর সমান। সুতরাং:
$$y = \sqrt{\sin x + y} \quad \text{--- (1)}$$

---

#### **ধাপ ২: উভয় পক্ষে বর্গকরণ (Squaring Both Sides)**
বর্গমূল অপসারন করতে সমীকরণ (1) এর উভয় পাশে বর্গ করে পাই:
$$y^2 = \sin x + y \quad \text{--- (2)}$$

---

#### **ধাপ ৩: উভয় পাশে $x$ এর সাপেক্ষে ব্যবকলন (Differentiating w.r.t $x$)**
সমীকরণ (2) এর উভয় পাশে $\frac{d}{dx}$ প্রয়োগ করে:
$$\frac{d}{dx}(y^2) = \frac{d}{dx}(\sin x) + \frac{d}{dx}(y)$$

চেইন রুল অনুসারে:
$$2y \frac{dy}{dx} = \cos x + \frac{dy}{dx}$$

---

#### **ধাপ ৪: $\frac{dy}{dx}$ কে পক্ষান্তর ও মান নির্ণয় (Solving for $\frac{dy}{dx}$)**
$\frac{dy}{dx}$ যুক্ত পদগুলোকে বামপাশে নিয়ে পাই:
$$2y \frac{dy}{dx} - \frac{dy}{dx} = \cos x$$

$\frac{dy}{dx}$ কমন নিয়ে:
$$(2y - 1) \frac{dy}{dx} = \cos x$$

$$\therefore \mathbf{\frac{dy}{dx} = \frac{\cos x}{2y-1}} \quad \text{[Proved / প্রমাণিত]}$$
