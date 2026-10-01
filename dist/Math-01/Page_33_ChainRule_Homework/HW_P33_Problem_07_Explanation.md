# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 07 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = 3\tan^2 x$$

---

### **Core Mathematical Concept & Formulas:**
1. **Power Rule on Trigonometric Function:**
   $$\frac{d}{dx}[c \cdot u(x)^n] = c \cdot n [u(x)]^{n-1} \cdot \frac{du}{dx}$$
2. **Tangent Derivative Formula:**
   $$\frac{d}{dx}(\tan x) = \sec^2 x$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত ত্রিকোণমিতিক ঘাত ফাংশনটি লিখি (Given function)**
$$y = 3\tan^2 x = 3(\tan x)^2$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ করি (Differentiating both sides w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}\left[ 3(\tan x)^2 \right] = 3 \cdot \frac{d}{dx}\left[ (\tan x)^2 \right]$$

**Step 3: শক্তি বিধি ও চেইন রুল প্রয়োগ করি (Applying Power & Chain Rule)**
$$\frac{dy}{dx} = 3 \cdot \left[ 2(\tan x)^{2 - 1} \cdot \frac{d}{dx}(\tan x) \right] = 6\tan x \cdot \frac{d}{dx}(\tan x)$$

**Step 4: অভ্যন্তরীণ ট্যানজেন্ট ফাংশনের অন্তরক নির্ণয় করি (Differentiating Inner Tangent Function)**
$$\frac{d}{dx}(\tan x) = \sec^2 x$$

**Step 5: মান বসিয়ে চূড়ান্ত অন্তরজ পাই (Final Simplification)**
$$\frac{dy}{dx} = 6\tan x \sec^2 x$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = 6\tan x \sec^2 x$$
