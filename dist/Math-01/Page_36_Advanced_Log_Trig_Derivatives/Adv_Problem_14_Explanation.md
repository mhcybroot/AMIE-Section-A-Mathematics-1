# AMIE Section-A Preparation: Mathematics-1 (Differential Calculus)
## Implicit Dual Variable-Power Differentiation — Page 36, Problem 14

---

### **গাণিতিক সমস্যা (Problem Statement):**
যদি $(\cos x)^y + (\sin y)^x = 0$ হয়, তবে $\frac{dy}{dx}$ এর মান নির্ণয় কর।  
*(If $(\cos x)^y + (\sin y)^x = 0$, find $\frac{dy}{dx}$.)*

---

### **ধাপভিত্তিক গাণিতিক সমাধান (Step-by-Step Solution):**

#### **ধাপ ১: চলকের পৃথকীকরণ (Splitting into Auxiliary Variables)**
প্রদত্ত সমীকরণ:
$$(\cos x)^y + (\sin y)^x = 0$$

ধরি, $u = (\cos x)^y$ এবং $v = (\sin y)^x$।  
সুতরাং সমীকরণটি দাঁড়ায় $u + v = 0$।  
উভয় পাশে $x$ এর সাপেক্ষে ব্যবকলন করে পাই:
$$\frac{du}{dx} + \frac{dv}{dx} = 0 \quad \text{--- (1)}$$

---

#### **ধাপ ২: $u = (\cos x)^y$ এর ব্যবকলন (Differentiating $u$)**
উভয় পাশে প্রাকৃতিক লগারিদম $\log$ নিয়ে:
$$\log u = \log\left[(\cos x)^y\right] = y \log(\cos x)$$

উভয় পাশে $x$ এর সাপেক্ষে অন্তরীকরণ করে পাই:
$$\frac{1}{u}\frac{du}{dx} = \frac{dy}{dx} \cdot \log(\cos x) + y \cdot \frac{d}{dx}[\log(\cos x)]$$
$$\frac{1}{u}\frac{du}{dx} = \log(\cos x)\frac{dy}{dx} + y \cdot \frac{1}{\cos x}(-\sin x) = \log(\cos x)\frac{dy}{dx} - y\tan x$$

$$\therefore \frac{du}{dx} = u \left[\log(\cos x)\frac{dy}{dx} - y\tan x\right] = (\cos x)^y \log(\cos x)\frac{dy}{dx} - y(\cos x)^y \tan x \quad \text{--- (2)}$$

---

#### **ধাপ ৩: $v = (\sin y)^x$ এর ব্যবকলন (Differentiating $v$)**
উভয় পাশে প্রাকৃতিক লগারিদম $\log$ নিয়ে:
$$\log v = \log\left[(\sin y)^x\right] = x \log(\sin y)$$

উভয় পাশে $x$ এর সাপেক্ষে অন্তরীকরণ করে পাই:
$$\frac{1}{v}\frac{dv}{dx} = \frac{d}{dx}(x) \cdot \log(\sin y) + x \cdot \frac{d}{dx}[\log(\sin y)]$$
$$\frac{1}{v}\frac{dv}{dx} = 1 \cdot \log(\sin y) + x \cdot \frac{1}{\sin y}\left(\cos y \frac{dy}{dx}\right) = \log(\sin y) + x \cot y \frac{dy}{dx}$$

$$\therefore \frac{dv}{dx} = v \left[\log(\sin y) + x\cot y \frac{dy}{dx}\right] = (\sin y)^x \log(\sin y) + x(\sin y)^x \cot y \frac{dy}{dx} \quad \text{--- (3)}$$

---

#### **ধাপ ৪: সমীকরণ (1) এ মান প্রতিস্থাপন ও $\frac{dy}{dx}$ নির্ণয় (Solving for $\frac{dy}{dx}$)**
সমীকরণ (2) ও (3) এর মান সমীকরণ (1) এ বসিয়ে পাই:
$$\left[(\cos x)^y \log(\cos x)\frac{dy}{dx} - y(\cos x)^y \tan x\right] + \left[(\sin y)^x \log(\sin y) + x(\sin y)^x \cot y \frac{dy}{dx}\right] = 0$$

$\frac{dy}{dx}$ যুক্ত পদগুলোকে বামপাশে এবং অবশিষ্ট পদগুলোকে ডানপাশে নিয়ে পাই:
$$\left[(\cos x)^y \log(\cos x) + x(\sin y)^x \cot y\right]\frac{dy}{dx} = y(\cos x)^y \tan x - (\sin y)^x \log(\sin y)$$

$$\therefore \mathbf{\frac{dy}{dx} = \frac{y(\cos x)^y \tan x - (\sin y)^x \log(\sin y)}{(\cos x)^y \log(\cos x) + x(\sin y)^x \cot y}}$$

---

### **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dx} = \frac{y(\cos x)^y \tan x - (\sin y)^x \log(\sin y)}{(\cos x)^y \log(\cos x) + x(\sin y)^x \cot y}}$$
