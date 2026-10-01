# AMIE Section-A: Engineering Mathematics-1
## Differential Calculus — Derivative of One Variable-Power Function with Respect to Another
### Chapter: Differential Calculus (অন্তরীকরণ) — Page 38, Problem 17

---

### **১. সমস্যা চিহ্নিতকরণ (Problem Identification)**
**সমস্যা (Problem 17):**  
যদি $y = x^{\sin x}$ এবং $Z = (\sin x)^x$ হয়, তবে $\frac{dy}{dZ}$ এর মান নির্ণয় কর।  
*(If $y = x^{\sin x}$ and $Z = (\sin x)^x$, find $\frac{dy}{dZ}$.)*

---

### **২. প্রয়োজনীয় মূল সূত্রাবলি (Key Engineering Formulas)**
1. **এক ফাংশনের সাপেক্ষে অন্য ফাংশনের ব্যবকলন (Derivative of $y$ with respect to $Z$):**  
   $$\frac{dy}{dZ} = \frac{\frac{dy}{dx}}{\frac{dZ}{dx}}$$
2. **লগারিদমিক ব্যবকলন নীতি (Logarithmic Differentiation):**  
   $$\frac{d}{dx}[\ln u] = \frac{1}{u}\frac{du}{dx} \implies \frac{du}{dx} = u \cdot \frac{d}{dx}[\ln u]$$
3. **গুণনের সূত্র (Product Rule):**  
   $$\frac{d}{dx}(u \cdot v) = u\frac{dv}{dx} + v\frac{du}{dx}$$
4. **ত্রিকোণমিতিক ও লগারিদমিক আদর্শ অন্তরজ:**  
   $$\frac{d}{dx}(\sin x) = \cos x, \quad \frac{d}{dx}(\ln x) = \frac{1}{x}, \quad \frac{d}{dx}[\ln(\sin x)] = \frac{\cos x}{\sin x} = \cot x$$

---

### **৩. ধাপে ধাপে বিস্তারিত সমাধান (Step-by-Step Mathematical Derivation)**

#### **ধাপ ১: প্রথম ফাংশন $y = x^{\sin x}$ এর অন্তরীকরণ (Evaluating $\frac{dy}{dx}$)**
প্রদত্ত,
$$y = x^{\sin x}$$
উভয়পাশে স্বাভাবিক লগারিদম ($\ln$) গ্রহণ করে পাই:
$$\ln y = \ln\left(x^{\sin x}\right) = \sin x \cdot \ln x$$

উভয়পক্ষকে $x$ এর সাপেক্ষে অন্তরীকরণ করি (Product Rule প্রয়োগ করে):
$$\frac{d}{dx}(\ln y) = \frac{d}{dx}[\sin x \cdot \ln x]$$
$$\implies \frac{1}{y}\frac{dy}{dx} = \frac{d}{dx}(\sin x)\cdot \ln x + \sin x \cdot \frac{d}{dx}(\ln x)$$
$$\implies \frac{1}{y}\frac{dy}{dx} = \cos x \cdot \ln x + \sin x \cdot \frac{1}{x} = \frac{\sin x}{x} + \cos x \ln x$$
$$\implies \frac{dy}{dx} = y \left[ \frac{\sin x + x \ln x \cos x}{x} \right]$$

$y = x^{\sin x}$ এর মান বসিয়ে পাই:
$$\frac{dy}{dx} = \frac{x^{\sin x}(\sin x + x \cos x \ln x)}{x} \quad \text{--- (1)}$$

---

#### **ধাপ ২: দ্বিতীয় ফাংশন $Z = (\sin x)^x$ এর অন্তরীকরণ (Evaluating $\frac{dZ}{dx}$)**
প্রদত্ত,
$$Z = (\sin x)^x$$
উভয়পাশে স্বাভাবিক লগারিদম ($\ln$) গ্রহণ করে পাই:
$$\ln Z = \ln\left[(\sin x)^x\right] = x \cdot \ln(\sin x)$$

উভয়পক্ষকে $x$ এর সাপেক্ষে অন্তরীকরণ করি (Product Rule ও Chain Rule প্রয়োগ করে):
$$\frac{d}{dx}(\ln Z) = \frac{d}{dx}[x \cdot \ln(\sin x)]$$
$$\implies \frac{1}{Z}\frac{dZ}{dx} = \frac{d}{dx}(x)\cdot \ln(\sin x) + x \cdot \frac{d}{dx}[\ln(\sin x)]$$
$$\implies \frac{1}{Z}\frac{dZ}{dx} = 1 \cdot \ln(\sin x) + x \cdot \frac{1}{\sin x}\cdot \cos x$$
$$\implies \frac{1}{Z}\frac{dZ}{dx} = \ln(\sin x) + x \cot x$$
$$\implies \frac{dZ}{dx} = Z \left[ x \cot x + \ln(\sin x) \right]$$

$Z = (\sin x)^x$ এর মান বসিয়ে পাই:
$$\frac{dZ}{dx} = (\sin x)^x [x \cot x + \ln(\sin x)] \quad \text{--- (2)}$$

---

#### **ধাপ ৩: $Z$ এর সাপেক্ষে $y$ এর অন্তরজ $\frac{dy}{dZ}$ নির্ণয় (Calculating $\frac{dy}{dZ}$)**
চেইন রুল অনুসারে:
$$\frac{dy}{dZ} = \frac{\frac{dy}{dx}}{\frac{dZ}{dx}}$$

সমীকরণ (1) এবং সমীকরণ (2) হতে মান বসিয়ে পাই:
$$\frac{dy}{dZ} = \frac{\frac{x^{\sin x}(\sin x + x \cos x \ln x)}{x}}{(\sin x)^x [x \cot x + \ln(\sin x)]}$$
$$\implies \frac{dy}{dZ} = \frac{x^{\sin x}(\sin x + x \cos x \ln x)}{x (\sin x)^x [x \cot x + \ln(\sin x)]}$$

---

### **৪. চূড়ান্ত উত্তর (Final Answer)**
$$\mathbf{\frac{dy}{dZ} = \frac{x^{\sin x}(\sin x + x \cos x \ln x)}{x (\sin x)^x [x \cot x + \ln(\sin x)]}}$$
*(অথবা সমতুল্য রূপ: $\frac{dy}{dZ} = \frac{x^{\sin x}\left(\frac{\sin x}{x} + \cos x \ln x\right)}{(\sin x)^x [x \cot x + \ln(\sin x)]}$)*
