# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Explicit and Implicit Differentiation (Page 34)
### Problem 01 Detailed Explanation

---

### **Problem Statement:**
Find $\frac{dy}{dx}$ from the given implicit algebraic equation:
$$ax^2 + 2hxy + by^2 + d = 0$$

---

### **Core Mathematical Concept & Formulas:**
1. **Implicit Differentiation (অব্যক্ত ফাংশনের অন্তরীকরণ):**
   যখন একটি সমীকরণে স্বাধীন চলক $x$ এবং অধীন চলক $y$-কে পৃথক করে $y = f(x)$ আকারে সরাসরি প্রকাশ করা যায় না, তখন সমীকরণের উভয়পক্ষকে সরাসরি $x$-এর সাপেক্ষে অন্তরীকরণ করা হয়।

2. **Product Rule for Cross-Term $xy$ (গুণন বিধি):**
   $$\frac{d}{dx}(xy) = x\frac{dy}{dx} + y\frac{dx}{dx} = x\frac{dy}{dx} + y$$

3. **Power Rule Combined with Chain Rule for $y^2$:**
   $$\frac{d}{dx}(y^2) = 2y\frac{dy}{dx}$$

4. **Constant Term Derivative:**
   $$\frac{d}{dx}(d) = 0$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত দ্বিঘাত অব্যক্ত সমীকরণটি লিখি (Given implicit equation)**
$$ax^2 + 2hxy + by^2 + d = 0$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর প্রয়োগ করি (Differentiating w.r.t. $x$)**
$$\frac{d}{dx}(ax^2) + \frac{d}{dx}(2hxy) + \frac{d}{dx}(by^2) + \frac{d}{dx}(d) = 0$$

**Step 3: প্রতিটি পদের পৃথক অন্তরজ নির্ণয় করি (Differentiating term-by-term)**
$$a(2x) + 2h\left( x\frac{dy}{dx} + y\cdot 1 \right) + b\left( 2y\frac{dy}{dx} \right) + 0 = 0$$
$$2ax + 2hx\frac{dy}{dx} + 2hy + 2by\frac{dy}{dx} = 0$$

**Step 4: উভয়পক্ষ থেকে ধ্রুবক ২ বর্জন করে $\frac{dy}{dx}$ যুক্ত পদগুলোকে একপাশে রাখি (Grouping $\frac{dy}{dx}$ terms)**
$$ax + hy + (hx + by)\frac{dy}{dx} = 0$$
$$(hx + by)\frac{dy}{dx} = -(ax + hy)$$

**Step 5: $\frac{dy}{dx}$-এর মান সমাধান করি (Solving for $\frac{dy}{dx}$)**
$$\frac{dy}{dx} = -\frac{ax + hy}{hx + by}$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = -\frac{ax + hy}{hx + by}$$
