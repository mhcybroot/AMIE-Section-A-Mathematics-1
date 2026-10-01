# AMIE Section-A Preparation: Mathematics-1 (Differential Calculus)
## Parametric Differentiation of Cycloid — Page 39, Problem 23 [AMIE Apr-24 Exam]

---

### **১. সমস্যা চিহ্নিতকরণ (Problem Identification)**
**সমস্যা (Problem 23):**  
যদি $x = a(t - \sin t)$ এবং $y = a(1 - \cos t)$ হয়, তবে $\frac{dy}{dx}$ এর মান নির্ণয় কর।  
*(Find the derivative of the parametric equation $x = a(t - \sin t), y = a(1 - \cos t)$.)*

---

### **২. প্রয়োজনীয় মূল সূত্রাবলি (Key Engineering Formulas)**
1. **প্যারামেট্রিক ব্যবকলন সূত্র (Parametric Derivative Rule):**  
   $$\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}}$$
2. **ত্রিকোণমিতিক অংশকোণ সূত্র (Half-Angle Trigonometric Formulas):**  
   $$\sin t = 2\sin\left(\frac{t}{2}\right)\cos\left(\frac{t}{2}\right)$$
   $$1 - \cos t = 2\sin^2\left(\frac{t}{2}\right)$$
3. **মৌলিক ব্যবকলন সূত্র:**  
   $$\frac{d}{dt}(t) = 1, \quad \frac{d}{dt}(\sin t) = \cos t, \quad \frac{d}{dt}(\cos t) = -\sin t$$

---

### **৩. ধাপে ধাপে বিস্তারিত সমাধান (Step-by-Step Mathematical Derivation)**

#### **ধাপ ১: $x$ এর $t$ এর সাপেক্ষে ব্যবকলন (Differentiating $x(t)$ w.r.t $t$)**
প্রদত্ত সমীকরণ:
$$x = a(t - \sin t)$$
উভয়পক্ষকে $t$ এর সাপেক্ষে ব্যবকলন করে পাই:
$$\frac{dx}{dt} = a \cdot \frac{d}{dt}(t - \sin t) = a(1 - \cos t) \quad \text{--- (1)}$$

---

#### **ধাপ ২: $y$ এর $t$ এর সাপেক্ষে ব্যবকলন (Differentiating $y(t)$ w.r.t $t$)**
প্রদত্ত সমীকরণ:
$$y = a(1 - \cos t)$$
উভয়পক্ষকে $t$ এর সাপেক্ষে ব্যবকলন করে পাই:
$$\frac{dy}{dt} = a \cdot \frac{d}{dt}(1 - \cos t) = a(0 - (-\sin t)) = a\sin t \quad \text{--- (2)}$$

---

#### **ধাপ ৩: প্যারামেট্রিক চেইন রুল প্রয়োগ (Applying Parametric Chain Rule)**
প্যারামেট্রিক নিয়মানুযায়ী:
$$\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}}$$

সমীকরণ (2) এবং সমীকরণ (1) থেকে মান বসিয়ে পাই:
$$\frac{dy}{dx} = \frac{a\sin t}{a(1 - \cos t)} = \frac{\sin t}{1 - \cos t} \quad \text{--- (3)}$$

---

#### **ধাপ ৪: অংশকোণের সূত্রে সরলীকরণ (Half-Angle Trigonometric Simplification)**
ত্রিকোণমিতিক অংশকোণ সূত্র প্রয়োগ করে পাই:
$$\frac{dy}{dx} = \frac{2\sin(t/2)\cos(t/2)}{2\sin^2(t/2)} = \frac{\cos(t/2)}{\sin(t/2)} = \cot\left(\frac{t}{2}\right)$$

---

### **৪. চূড়ান্ত উত্তর (Final Answer)**
$$\mathbf{\frac{dy}{dx} = \frac{\sin t}{1 - \cos t} = \cot\left(\frac{t}{2}\right)}$$
