# AMIE Section-A Engineering Mathematics-1
## Chapter 2: Differential Calculus — Chain Rule (Page 33)
### Home Work Problem 30 Detailed Explanation

---

### **Problem Statement:**
Find the derivative with respect to $x$ of:
$$y = \tan^4(\sec^2 x)$$

---

### **Core Mathematical Concept & Formulas:**
1. **Explicit Multi-tier Power Notation (বহুস্তরীয় সূচকীয় রূপ):**
   $$y = \left[ \tan\left( (\sec x)^2 \right) \right]^4$$

2. **Power Rule Combined with Chain Rule:**
   $$\frac{d}{dx}[u^4] = 4u^3 \cdot \frac{du}{dx}$$

3. **Tangent Derivative Rule:**
   $$\frac{d}{dv}[\tan v] = \sec^2 v \cdot \frac{dv}{dx}$$

4. **Secant-Squared Derivative (সেকেন্ট বর্গের অন্তরজ):**
   $$\frac{d}{dx}[\sec^2 x] = 2\sec x \cdot \frac{d}{dx}(\sec x) = 2\sec x (\sec x \tan x) = 2\sec^2 x \tan x$$

---

### **Step-by-Step Solution (ধাপে ধাপে সমাধান):**

**Step 1: প্রদত্ত ৪-স্তরীয় যৌগিক ত্রিকোণমিতিক ফাংশনটি লিখি (Given function)**
$$y = \tan^4(\sec^2 x) = \left[ \tan(\sec^2 x) \right]^4$$

**Step 2: উভয়পক্ষে $x$-এর সাপেক্ষে অন্তরীকরণ অপারেটর প্রয়োগ করি (Differentiating w.r.t. $x$)**
$$\frac{dy}{dx} = \frac{d}{dx}\left( \left[ \tan(\sec^2 x) \right]^4 \right)$$

**Step 3: সর্ববহিঃস্থ ঘাত ৪-এর জন্য শক্তি বিধি (Power Rule) প্রয়োগ করি (Applying Power Rule)**
$$\frac{dy}{dx} = 4\left[ \tan(\sec^2 x) \right]^{4-1} \cdot \frac{d}{dx}\left[ \tan(\sec^2 x) \right] = 4\tan^3(\sec^2 x) \cdot \frac{d}{dx}\left[ \tan(\sec^2 x) \right]$$

**Step 4: ট্যানজেন্ট ফাংশনের জন্য অন্তরজ নির্ণয় করি (Differentiating Tangent Function via Chain Rule)**
$$\frac{d}{dx}\left[ \tan(\sec^2 x) \right] = \sec^2(\sec^2 x) \cdot \frac{d}{dx}(\sec^2 x)$$

**Step 5: সর্বঅভ্যন্তরীণ $\sec^2 x$-এর অন্তরজ নির্ণয় করে সামগ্রিক গুণফল সাজাই (Differentiating innermost $\sec^2 x$ & combining)**
$$\frac{d}{dx}(\sec^2 x) = 2\sec x \cdot (\sec x\tan x) = 2\sec^2 x \tan x$$
$$\frac{dy}{dx} = 4\tan^3(\sec^2 x) \cdot \sec^2(\sec^2 x) \cdot \left[ 2\sec^2 x \tan x \right]$$
$$\frac{dy}{dx} = 8\sec^2 x \tan x \tan^3(\sec^2 x) \sec^2(\sec^2 x)$$

$$\mathbf{Ans:}\quad \frac{dy}{dx} = 8\sec^2 x \tan x \tan^3(\sec^2 x) \sec^2(\sec^2 x)$$
