# AMIE Section-A Preparation: Mathematics-1 (Differential Calculus)
## Implicit Differentiation (অব্যক্ত ফাংশন) — Page 34, Problem 06 [AMIE Oct-16 Exam]

---

### **গাণিতিক সমস্যা (Problem Statement):**
যদি $\sin y = x \sin(a+y)$ হয়, তবে প্রমাণ কর যে,  
$$\frac{dy}{dx} = \frac{\sin^2(a+y)}{\sin a}$$
*(If $\sin y = x \sin(a+y)$, prove that $\frac{dy}{dx} = \frac{\sin^2(a+y)}{\sin a}$.)*

---

### **ধাপভিত্তিক গাণিতিক সমাধান (Step-by-Step Solution):**

#### **ধাপ ১: $x$ কে $y$ এর ফাংশন আকারে প্রকাশ (Expressing $x$ explicitly in terms of $y$)**
প্রদত্ত সমীকরণ:
$$\sin y = x \sin(a+y)$$

$x$ কে পৃথক করে পাই:
$$x = \frac{\sin y}{\sin(a+y)} \quad \text{--- (1)}$$

---

#### **ধাপ ২: $y$ এর সাপেক্ষে উভয় পাশে ব্যবকলন (Differentiating w.r.t $y$)**
সমীকরণ (1) এর উভয় পাশে $y$ এর সাপেক্ষে ব্যবকলন অপারেটর $\frac{d}{dy}$ প্রয়োগ করে পাই:
$$\frac{dx}{dy} = \frac{d}{dy}\left[\frac{\sin y}{\sin(a+y)}\right]$$

ভাগের সূত্র (Quotient Rule: $\frac{d}{dy}\left(\frac{u}{v}\right) = \frac{v \frac{du}{dy} - u \frac{dv}{dy}}{v^2}$) প্রয়োগ করে:
$$\frac{dx}{dy} = \frac{\sin(a+y) \cdot \frac{d}{dy}(\sin y) - \sin y \cdot \frac{d}{dy}[\sin(a+y)]}{[\sin(a+y)]^2}$$

আমরা জানি, $\frac{d}{dy}(\sin y) = \cos y$ এবং $\frac{d}{dy}[\sin(a+y)] = \cos(a+y) \cdot 1$। সুতরাং:
$$\frac{dx}{dy} = \frac{\sin(a+y)\cos y - \sin y \cos(a+y)}{\sin^2(a+y)}$$

---

#### **ধাপ ৩: ত্রিকোণমিতিক সূত্র প্রয়োগ (Applying Compound Angle Formula)**
আমরা ত্রিকোণমিতির সূত্র জানি:
$$\sin(A - B) = \sin A \cos B - \cos A \sin B$$

এখানে $A = a+y$ এবং $B = y$ বিবেচনা করলে লব অংশটি হয়:
$$\sin(a+y)\cos y - \cos(a+y)\sin y = \sin[(a+y) - y] = \sin a$$

সুতরাং:
$$\frac{dx}{dy} = \frac{\sin a}{\sin^2(a+y)}$$

---

#### **ধাপ ৪: বিপরীতকরণ করে $\frac{dy}{dx}$ নির্ণয় (Taking Reciprocal for $\frac{dy}{dx}$)**
আমরা জানি, $\frac{dy}{dx} = \frac{1}{\frac{dx}{dy}}$। সুতরাং:
$$\frac{dy}{dx} = \frac{1}{\frac{\sin a}{\sin^2(a+y)}} = \frac{\sin^2(a+y)}{\sin a}$$

$$\therefore \mathbf{\frac{dy}{dx} = \frac{\sin^2(a+y)}{\sin a}} \quad \text{(Proved / প্রমাণিত)}$$
