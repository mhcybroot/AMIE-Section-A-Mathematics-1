# AMIE Section-A Preparation: Mathematics-1 (Differential Calculus)
## Logarithmic Differentiation of Dual Exponential Terms — Page 35, Problem 11

---

### **গাণিতিক সমস্যা (Problem Statement):**
যদি $y = (\tan x)^{\cot x} + (\cot x)^{\tan x}$ হয়, তবে $\frac{dy}{dx}$ এর মান নির্ণয় কর।  
*(If $y = (\tan x)^{\cot x} + (\cot x)^{\tan x}$, find $\frac{dy}{dx}$.)*

---

### **ধাপভিত্তিক গাণিতিক সমাধান (Step-by-Step Solution):**

#### **ধাপ ১: চলকের পৃথকীকরণ (Separation into Sub-Functions)**
প্রদত্ত ফাংশন:
$$y = (\tan x)^{\cot x} + (\cot x)^{\tan x}$$

ধরি, $u = (\tan x)^{\cot x}$ এবং $v = (\cot x)^{\tan x}$।  
সুতরাং $y = u + v$ এবং $\frac{dy}{dx} = \frac{du}{dx} + \frac{dv}{dx} \quad \text{--- (1)}$

---

#### **ধাপ ২: $u = (\tan x)^{\cot x}$ এর ব্যবকলন (Differentiating $u$)**
উভয় পাশে প্রাকৃতিক লগারিদম $\log$ নিয়ে:
$$\log u = \log\left[(\tan x)^{\cot x}\right] = \cot x \log(\tan x)$$

উভয় পাশে $x$ এর সাপেক্ষে ব্যবকলন করে পাই:
$$\frac{1}{u}\frac{du}{dx} = \frac{d}{dx}(\cot x)\cdot \log(\tan x) + \cot x \cdot \frac{d}{dx}[\log(\tan x)]$$
$$\frac{1}{u}\frac{du}{dx} = (-\csc^2 x)\log(\tan x) + \cot x \cdot \frac{1}{\tan x} \cdot \sec^2 x$$
যেহেতু $\cot x \cdot \frac{1}{\tan x} \cdot \sec^2 x = \cot^2 x \sec^2 x = \frac{\cos^2 x}{\sin^2 x}\cdot\frac{1}{\cos^2 x} = \csc^2 x$:
$$\frac{du}{dx} = u \left[\sec^2 x \cot^2 x - \csc^2 x \log(\tan x)\right]$$
$$\frac{du}{dx} = (\tan x)^{\cot x}\left[\sec^2 x \cot^2 x - \csc^2 x \log(\tan x)\right] \quad \text{--- (2)}$$

---

#### **ধাপ ৩: $v = (\cot x)^{\tan x}$ এর ব্যবকলন (Differentiating $v$)**
উভয় পাশে প্রাকৃতিক লগারিদম $\log$ নিয়ে:
$$\log v = \log\left[(\cot x)^{\tan x}\right] = \tan x \log(\cot x)$$

উভয় পাশে $x$ এর সাপেক্ষে ব্যবকলন করে পাই:
$$\frac{1}{v}\frac{dv}{dx} = \frac{d}{dx}(\tan x)\cdot \log(\cot x) + \tan x \cdot \frac{d}{dx}[\log(\cot x)]$$
$$\frac{1}{v}\frac{dv}{dx} = \sec^2 x \log(\cot x) + \tan x \cdot \frac{1}{\cot x} \cdot (-\csc^2 x)$$
যেহেতু $\tan x \cdot \frac{1}{\cot x} \cdot (-\csc^2 x) = -\tan^2 x \csc^2 x = -\frac{\sin^2 x}{\cos^2 x}\cdot\frac{1}{\sin^2 x} = -\sec^2 x$:
$$\frac{dv}{dx} = v \left[\sec^2 x \log(\cot x) - \csc^2 x \tan^2 x\right]$$
$$\frac{dv}{dx} = (\cot x)^{\tan x}\left[\sec^2 x \log(\cot x) - \csc^2 x \tan^2 x\right] \quad \text{--- (3)}$$

---

#### **ধাপ ৪: সমীকরণ (1) এ মান প্রতিস্থাপন (Final Assembly)**
$$\mathbf{\frac{dy}{dx} = (\tan x)^{\cot x}\left[\sec^2 x \cot^2 x - \csc^2 x \log(\tan x)\right] + (\cot x)^{\tan x}\left[\sec^2 x \log(\cot x) - \csc^2 x \tan^2 x\right]}$$
