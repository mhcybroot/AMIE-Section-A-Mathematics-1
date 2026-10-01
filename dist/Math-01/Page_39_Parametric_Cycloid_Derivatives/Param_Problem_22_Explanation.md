# AMIE Section-A Preparation: Mathematics-1 (Differential Calculus)
## Parametric Derivative of Cycloid Equation — Page 39, Problem 22 [★ AMIE Oct-17 Exam Problem]

---

### **গাণিতিক সমস্যা (Problem Statement):**
যদি $x = a(\theta + \sin\theta)$ এবং $y = 1 + \cos\theta$ (বা $a(1-\cos\theta)$) হয়, তবে $\frac{dy}{dx}$ এর মান নির্ণয় কর।  
*(If $x = a(\theta + \sin\theta)$ and $y = 1 + \cos\theta$, find $\frac{dy}{dx}$.)*

---

### **ধাপভিত্তিক গাণিতিক সমাধান (Step-by-Step Solution):**

#### **Step 1: $x$ এর $	heta$ এর সাপেক্ষে ব্যবকলন ($rac{dx}{d	heta}$ নির্ণয়)**
প্রদত্ত: $x = a(\theta + \sin\theta)$।
$\theta$ এর সাপেক্ষে ব্যবকলন করে পাই:

$$
\frac{dx}{d\theta} = a\left[\frac{d}{d\theta}(\theta) + \frac{d}{d\theta}(\sin\theta)\right] = a(1 + \cos\theta) \quad \text{--- (1)}
$$


---

#### **Step 2: $y$ এর $	heta$ এর সাপেক্ষে ব্যবকলন ($rac{dy}{d	heta}$ নির্ণয়)**
প্রদত্ত: $y = 1 + \cos\theta$।
$\theta$ এর সাপেক্ষে ব্যবকলন করে পাই:

$$
\frac{dy}{d\theta} = 0 - \sin\theta = -\sin\theta \quad \text{--- (2)}
$$


---

#### **Step 3: প্যারামেট্রিক চেইন রুল দ্বারা $rac{dy}{dx}$ নির্ণয় (Parametric Chain Rule)**
আমরা জানি, $\frac{dy}{dx} = \frac{dy/d\theta}{dx/d\theta}$। সমীকরণ (2) ও (1) এর মান বসিয়ে পাই:

$$
\frac{dy}{dx} = \frac{-\sin\theta}{a(1 + \cos\theta)} \quad \text{--- (3)}
$$


---

#### **Step 4: অংশকোণের ত্রিকোণমিতিক সূত্রে সরলীকরণ (Half-Angle Form)**
আমরা জানি, $\sin\theta = 2\sin(\theta/2)\cos(\theta/2)$ এবং $1 + \cos\theta = 2\cos^2(\theta/2)$।
মানগুলো (3) এ বসালে:

$$
\frac{dy}{dx} = \frac{-2\sin(\theta/2)\cos(\theta/2)}{a \cdot 2\cos^2(\theta/2)} = -\frac{\sin(\theta/2)}{a\cos(\theta/2)} = -\frac{1}{a}\tan\left(\frac{\theta}{2}\right)
$$

*(পাঠ্যবইয়ের মূল আকারে: $\frac{dy}{dx} = \frac{-\sin\theta}{a(1+\cos\theta)}$)*

---

### **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dx} = \frac{-\sin\theta}{a(1+\cos\theta)} = -\frac{1}{a}\tan\left(\frac{\theta}{2}\right)}$$
