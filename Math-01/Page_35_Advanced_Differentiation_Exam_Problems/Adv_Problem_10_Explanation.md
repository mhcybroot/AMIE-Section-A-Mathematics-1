# AMIE Section-A Preparation: Mathematics-1 (Differential Calculus)
## Implicit Point Derivative — Page 35, Problem 10 [AMIE April-17 Exam]

---

### **গাণিতিক সমস্যা (Problem Statement):**
যদি $\sqrt[3]{x} + \sqrt[3]{y} = 3$ হয়, তবে $(1, 8)$ বিন্দুতে $\frac{dy}{dx}$ এর মান নির্ণয় কর।  
*(Find $\frac{dy}{dx}$ at $x = 1, y = 8$ where $\sqrt[3]{x} + \sqrt[3]{y} = 3$.)*

---

### **ধাপভিত্তিক গাণিতিক সমাধান (Step-by-Step Solution):**

#### **ধাপ ১: সমীকরণকে সূচকীয় আকারে প্রকাশ (Power Form)**
প্রদত্ত সমীকরণ:
$$\sqrt[3]{x} + \sqrt[3]{y} = 3$$
$$x^{1/3} + y^{1/3} = 3 \quad \text{--- (1)}$$

---

#### **ধাপ ২: উভয় পাশে $x$ এর সাপেক্ষে অন্তরীকরণ (Differentiating w.r.t $x$)**
সমীকরণ (1) এর উভয় পাশে $\frac{d}{dx}$ প্রয়োগ করে:
$$\frac{d}{dx}\left(x^{1/3}\right) + \frac{d}{dx}\left(y^{1/3}\right) = \frac{d}{dx}(3)$$

পাওয়ার রুল ও চেইন রুল প্রয়োগ করে:
$$\frac{1}{3} x^{\frac{1}{3}-1} + \frac{1}{3} y^{\frac{1}{3}-1} \frac{dy}{dx} = 0$$
$$\frac{1}{3} x^{-2/3} + \frac{1}{3} y^{-2/3} \frac{dy}{dx} = 0$$

উভয় পাশকে $3$ দ্বারা গুণ করে পাই:
$$x^{-2/3} + y^{-2/3} \frac{dy}{dx} = 0$$

---

#### **ধাপ ৩: $\frac{dy}{dx}$ এর সাধারণ রূপ নির্ণয় (General Derivative Expression)**
$$y^{-2/3} \frac{dy}{dx} = -x^{-2/3}$$
$$\frac{dy}{dx} = -\frac{x^{-2/3}}{y^{-2/3}} = -\left(\frac{y}{x}\right)^{2/3} = -\left(\sqrt[3]{\frac{y}{x}}\right)^2$$

---

#### **ধাপ ৪: প্রদত্ত বিন্দু $(1, 8)$ এ মান নির্ণয় (Evaluating at Point $(1, 8)$)**
$x = 1$ এবং $y = 8$ বসিয়ে পাই:
$$\left.\frac{dy}{dx}\right|_{(1, 8)} = -\left(\frac{8}{1}\right)^{2/3} = -\left(8^{1/3}\right)^2 = -(2)^2 = -4$$

$$\therefore \mathbf{\left.\frac{dy}{dx}\right|_{(1, 8)} = -4}$$
