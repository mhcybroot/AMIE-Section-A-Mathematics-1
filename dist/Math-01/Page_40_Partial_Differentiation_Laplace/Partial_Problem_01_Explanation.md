# AMIE Section-A Preparation: Mathematics-1 (Differential Calculus)
## Partial Differentiation of Multi-Variable Cyclic Function — Page 40, Problem 01 [AMIE Core Standard]

---

### **১. সমস্যা চিহ্নিতকরণ (Problem Identification)**
**সমস্যা (Problem 01 / Q-1):**  
যদি $v = \frac{y}{z} + \frac{z}{x} + \frac{x}{y}$ হয়, তবে প্রমাণ কর যে, $x\frac{\partial v}{\partial x} + y\frac{\partial v}{\partial y} + z\frac{\partial v}{\partial z} = 0$।  
*(If $v = \frac{y}{z} + \frac{z}{x} + \frac{x}{y}$, prove that $x\frac{\partial v}{\partial x} + y\frac{\partial v}{\partial y} + z\frac{\partial v}{\partial z} = 0$.)*

---

### **২. প্রয়োজনীয় মূল সূত্রাবলি (Key Engineering Formulas)**
1. **আংশিক অন্তরীকরণের সংজ্ঞা (Partial Differentiation Rule):**  
   একটি চলকের সাপেক্ষে ব্যবকলনের সময় বাকি সমস্ত চলককে ধ্রুবক (Constant) বিবেচনা করতে হয়।
2. **মৌলিক ঘাত ব্যবকলন সূত্র:**  
   $$\frac{\partial}{\partial x}\left(\frac{1}{x}\right) = -\frac{1}{x^2}, \quad \frac{\partial}{\partial x}(x) = 1$$
3. **অয়লারের সমমাত্রিক উপপাদ্য (Euler's Theorem on Homogeneous Functions):**  
   যদি $v(x, y, z)$ একটি $n$-মাত্রার সমমাত্রিক ফাংশন হয়, তবে:
   $$x\frac{\partial v}{\partial x} + y\frac{\partial v}{\partial y} + z\frac{\partial v}{\partial z} = n \cdot v$$
   এখানে $n = 0$, তাই ফলাফল সর্বদা $0$ হবে।

---

### **৩. ধাপে ধাপে বিস্তারিত সমাধান (Step-by-Step Mathematical Derivation)**

#### **ধাপ ১: $x$ এর সাপেক্ষে আংশিক অন্তরজ নির্ণয় (Partial Derivative w.r.t $x$)**
প্রদত্ত সমীকরণ:
$$v = \frac{y}{z} + \frac{z}{x} + \frac{x}{y}$$
$y$ এবং $z$ কে ধ্রুবক বিবেচনা করে $x$ এর সাপেক্ষে আংশিক ব্যবকলন করে পাই:
$$\frac{\partial v}{\partial x} = 0 + z\left(-\frac{1}{x^2}\right) + \frac{1}{y}(1) = -\frac{z}{x^2} + \frac{1}{y}$$

উভয়পক্ষকে $x$ দ্বারা গুণ করে পাই:
$$x\frac{\partial v}{\partial x} = x\left(-\frac{z}{x^2} + \frac{1}{y}\right) = -\frac{z}{x} + \frac{x}{y} \quad \text{--- (1)}$$

---

#### **ধাপ ২: $y$ এর সাপেক্ষে আংশিক অন্তরজ নির্ণয় (Partial Derivative w.r.t $y$)**
$x$ এবং $z$ কে ধ্রুবক বিবেচনা করে $y$ এর সাপেক্ষে আংশিক ব্যবকলন করে পাই:
$$\frac{\partial v}{\partial y} = \frac{1}{z}(1) + 0 + x\left(-\frac{1}{y^2}\right) = \frac{1}{z} - \frac{x}{y^2}$$

উভয়পক্ষকে $y$ দ্বারা গুণ করে পাই:
$$y\frac{\partial v}{\partial y} = y\left(\frac{1}{z} - \frac{x}{y^2}\right) = \frac{y}{z} - \frac{x}{y} \quad \text{--- (2)}$$

---

#### **ধাপ ৩: $z$ এর সাপেক্ষে আংশিক অন্তরজ নির্ণয় (Partial Derivative w.r.t $z$)**
$x$ এবং $y$ কে ধ্রুবক বিবেচনা করে $z$ এর সাপেক্ষে আংশিক ব্যবকলন করে পাই:
$$\frac{\partial v}{\partial z} = y\left(-\frac{1}{z^2}\right) + \frac{1}{x}(1) + 0 = -\frac{y}{z^2} + \frac{1}{x}$$

উভয়পক্ষকে $z$ দ্বারা গুণ করে পাই:
$$z\frac{\partial v}{\partial z} = z\left(-\frac{y}{z^2} + \frac{1}{x}\right) = -\frac{y}{z} + \frac{z}{x} \quad \text{--- (3)}$$

---

#### **ধাপ ৪: সমীকরণত্রয় যোগকরণ ও প্রমাণ (Summing Equations)**
সমীকরণ (1), (2) এবং (3) যোগ করে পাই:
$$x\frac{\partial v}{\partial x} + y\frac{\partial v}{\partial y} + z\frac{\partial v}{\partial z} = \left(-\frac{z}{x} + \frac{x}{y}\right) + \left(\frac{y}{z} - \frac{x}{y}\right) + \left(-\frac{y}{z} + \frac{z}{x}\right)$$
$$= \left(-\frac{z}{x} + \frac{z}{x}\right) + \left(\frac{x}{y} - \frac{x}{y}\right) + \left(\frac{y}{z} - \frac{y}{z}\right) = 0$$

---

### **৪. চূড়ান্ত উত্তর (Final Answer)**
$$\mathbf{x\frac{\partial v}{\partial x} + y\frac{\partial v}{\partial y} + z\frac{\partial v}{\partial z} = 0 \quad \text{[প্রমাণিত / Proved]}}$$
