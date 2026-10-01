# AMIE Section-A Preparation: Mathematics-1 (Differential Calculus)
## 2D Laplace Equation for Logarithmic Potential — Page 40, Problem 02(i) [AMIE Core Standard]

---

### **১. সমস্যা চিহ্নিতকরণ (Problem Identification)**
**সমস্যা (Problem 02(i) / Q-2.i):**  
যদি $v = \log(x^2 + y^2)$ হয়, তবে দেখাও যে, $\frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0$।  
*(Show that $\frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0$ if $v = \log(x^2 + y^2)$.)*

---

### **২. প্রয়োজনীয় মূল সূত্রাবলি (Key Engineering Formulas)**
1. **ল্যাপ্লাস সমীকরণ ও হারমোনিক ফাংশন (Laplace's Equation in 2D):**  
   $$\nabla^2 v = \frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0$$
2. **লগারিদমের আংশিক অন্তরজ নীতি:**  
   $$\frac{\partial}{\partial x}[\log f(x, y)] = \frac{1}{f(x, y)}\frac{\partial f}{\partial x}$$
3. **ভাগফলের অন্তরজ নীতি (Quotient Rule):**  
   $$\frac{\partial}{\partial x}\left(\frac{u}{w}\right) = \frac{w\frac{\partial u}{\partial x} - u\frac{\partial w}{\partial x}}{w^2}$$

---

### **৩. ধাপে ধাপে বিস্তারিত সমাধান (Step-by-Step Mathematical Derivation)**

#### **ধাপ ১: $x$ এর সাপেক্ষে প্রথম ও দ্বিতীয় ক্রমের আংশিক অন্তরজ (Evaluating $\frac{\partial^2 v}{\partial x^2}$)**
প্রদত্ত সমীকরণ:
$$v = \log(x^2 + y^2)$$

$y$ কে ধ্রুবক বিবেচনা করে $x$ এর সাপেক্ষে আংশিক অন্তরীকরণ করি:
$$\frac{\partial v}{\partial x} = \frac{1}{x^2 + y^2} \cdot \frac{\partial}{\partial x}(x^2 + y^2) = \frac{2x}{x^2 + y^2}$$

এখন পুনরায় $x$ এর সাপেক্ষে আংশিক অন্তরীকরণ করি (Quotient Rule প্রয়োগ করে):
$$\frac{\partial^2 v}{\partial x^2} = \frac{\partial}{\partial x}\left(\frac{2x}{x^2 + y^2}\right) = \frac{(x^2 + y^2)\cdot \frac{\partial}{\partial x}(2x) - 2x \cdot \frac{\partial}{\partial x}(x^2 + y^2)}{(x^2 + y^2)^2}$$
$$\implies \frac{\partial^2 v}{\partial x^2} = \frac{(x^2 + y^2)\cdot 2 - 2x \cdot (2x)}{(x^2 + y^2)^2} = \frac{2x^2 + 2y^2 - 4x^2}{(x^2 + y^2)^2} = \frac{2y^2 - 2x^2}{(x^2 + y^2)^2} \quad \text{--- (1)}$$

---

#### **ধাপ ২: $y$ এর সাপেক্ষে প্রথম ও দ্বিতীয় ক্রমের আংশিক অন্তরজ (Evaluating $\frac{\partial^2 v}{\partial y^2}$)**
$x$ কে ধ্রুবক বিবেচনা করে $y$ এর সাপেক্ষে আংশিক অন্তরীকরণ করি:
$$\frac{\partial v}{\partial y} = \frac{1}{x^2 + y^2} \cdot \frac{\partial}{\partial y}(x^2 + y^2) = \frac{2y}{x^2 + y^2}$$

পুনরায় $y$ এর সাপেক্ষে আংশিক অন্তরীকরণ করি:
$$\frac{\partial^2 v}{\partial y^2} = \frac{\partial}{\partial y}\left(\frac{2y}{x^2 + y^2}\right) = \frac{(x^2 + y^2)\cdot 2 - 2y \cdot (2y)}{(x^2 + y^2)^2}$$
$$\implies \frac{\partial^2 v}{\partial y^2} = \frac{2x^2 + 2y^2 - 4y^2}{(x^2 + y^2)^2} = \frac{2x^2 - 2y^2}{(x^2 + y^2)^2} \quad \text{--- (2)}$$

---

#### **ধাপ ৩: দ্বিতীয় অন্তরজদ্বয় যোগকরণ ও প্রমাণ (Summation & Proof)**
সমীকরণ (1) এবং (2) যোগ করে পাই:
$$\frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = \frac{2y^2 - 2x^2}{(x^2 + y^2)^2} + \frac{2x^2 - 2y^2}{(x^2 + y^2)^2}$$
$$\implies \frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = \frac{(2y^2 - 2x^2) + (2x^2 - 2y^2)}{(x^2 + y^2)^2} = \frac{0}{(x^2 + y^2)^2} = 0$$

---

### **৪. চূড়ান্ত উত্তর (Final Answer)**
$$\mathbf{\frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0 \quad \text{[দেখানো হলো / Proved]}}$$
