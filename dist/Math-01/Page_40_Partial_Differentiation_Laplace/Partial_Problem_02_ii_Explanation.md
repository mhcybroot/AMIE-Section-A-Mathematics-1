# AMIE Section-A Preparation: Mathematics-1 (Differential Calculus)
## 2D Laplace Equation for Inverse Tangent Potential — Page 40, Problem 02(ii) [AMIE Core Standard]

---

### **১. সমস্যা চিহ্নিতকরণ (Problem Identification)**
**সমস্যা (Problem 02(ii) / Q-2.ii):**  
যদি $v = \tan^{-1}\left(\frac{y}{x}\right)$ হয়, তবে দেখাও যে, $\frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0$।  
*(Show that $\frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0$ if $v = \tan^{-1}\left(\frac{y}{x}\right)$.)*

---

### **২. প্রয়োজনীয় মূল সূত্রাবলি (Key Engineering Formulas)**
1. **দ্বিমাত্রিক ল্যাপ্লাস সমীকরণ (2D Laplace's Equation):**  
   $$\frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0$$
2. **ইনভার্স ট্যানের আংশিক অন্তরজ সূত্র:**  
   $$\frac{\partial}{\partial x}[\tan^{-1} u] = \frac{1}{1+u^2}\frac{\partial u}{\partial x}$$
3. **ঘাত ও চেইন রুল অন্তরজ:**  
   $$\frac{\partial}{\partial x}\left[(x^2+y^2)^{-1}\right] = -(x^2+y^2)^{-2}(2x) = -\frac{2x}{(x^2+y^2)^2}$$

---

### **৩. ধাপে ধাপে বিস্তারিত সমাধান (Step-by-Step Mathematical Derivation)**

#### **ধাপ ১: $x$ এর সাপেক্ষে প্রথম ও দ্বিতীয় ক্রমের আংশিক অন্তরজ (Evaluating $\frac{\partial^2 v}{\partial x^2}$)**
প্রদত্ত সমীকরণ:
$$v = \tan^{-1}\left(\frac{y}{x}\right)$$

$y$ কে ধ্রুবক বিবেচনা করে $x$ এর সাপেক্ষে আংশিক অন্তরীকরণ করি:
$$\frac{\partial v}{\partial x} = \frac{1}{1 + \left(\frac{y}{x}\right)^2} \cdot \frac{\partial}{\partial x}\left(\frac{y}{x}\right) = \frac{1}{\frac{x^2 + y^2}{x^2}} \cdot \left(-\frac{y}{x^2}\right) = \frac{x^2}{x^2 + y^2} \cdot \left(-\frac{y}{x^2}\right) = -\frac{y}{x^2 + y^2}$$

এখন পুনরায় $x$ এর সাপেক্ষে আংশিক অন্তরীকরণ করি:
$$\frac{\partial^2 v}{\partial x^2} = \frac{\partial}{\partial x}\left[-y(x^2 + y^2)^{-1}\right] = -y \cdot \left[-(x^2 + y^2)^{-2} \cdot 2x\right] = \frac{2xy}{(x^2 + y^2)^2} \quad \text{--- (1)}$$

---

#### **ধাপ ২: $y$ এর সাপেক্ষে প্রথম ও দ্বিতীয় ক্রমের আংশিক অন্তরজ (Evaluating $\frac{\partial^2 v}{\partial y^2}$)**
$x$ কে ধ্রুবক বিবেচনা করে $y$ এর সাপেক্ষে আংশিক অন্তরীকরণ করি:
$$\frac{\partial v}{\partial y} = \frac{1}{1 + \left(\frac{y}{x}\right)^2} \cdot \frac{\partial}{\partial y}\left(\frac{y}{x}\right) = \frac{x^2}{x^2 + y^2} \cdot \left(\frac{1}{x}\right) = \frac{x}{x^2 + y^2}$$

পুনরায় $y$ এর সাপেক্ষে আংশিক অন্তরীকরণ করি:
$$\frac{\partial^2 v}{\partial y^2} = \frac{\partial}{\partial y}\left[x(x^2 + y^2)^{-1}\right] = x \cdot \left[-(x^2 + y^2)^{-2} \cdot 2y\right] = -\frac{2xy}{(x^2 + y^2)^2} \quad \text{--- (2)}$$

---

#### **ধাপ ৩: ল্যাপ্লাসিয়ান যোগ ও প্রতিপাদন (Summation & Proof)**
সমীকরণ (1) এবং (2) যোগ করে পাই:
$$\frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = \frac{2xy}{(x^2 + y^2)^2} + \left(-\frac{2xy}{(x^2 + y^2)^2}\right) = 0$$

---

### **৪. চূড়ান্ত উত্তর (Final Answer)**
$$\mathbf{\frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0 \quad \text{[দেখানো হলো / Proved]}}$$
