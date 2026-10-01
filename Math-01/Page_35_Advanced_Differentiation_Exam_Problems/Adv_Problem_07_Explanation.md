# AMIE Section-A Preparation: Mathematics-1 (Differential Calculus)
## Advanced Logarithmic & Trigonometric Differentiation — Page 35, Problem 07

---

### **গাণিতিক সমস্যা (Problem Statement):**
যদি $y = \frac{\tan x}{x} \log\left(\frac{e^x}{x^2}\right)$ হয়, তবে $\frac{dy}{dx}$ এর মান নির্ণয় কর।  
*(If $y = \frac{\tan x}{x} \log\left(\frac{e^x}{x^2}\right)$, find $\frac{dy}{dx}$.)*

---

### **ধাপভিত্তিক গাণিতিক সমাধান (Step-by-Step Solution):**

#### **ধাপ ১: লগারিদম অংশটি সরলীকরণ (Simplifying the Logarithmic Component)**
প্রদত্ত ফাংশন:
$$y = \frac{\tan x}{x} \log\left(\frac{e^x}{x^2}\right)$$

লগারিদমের ভাগ ও সূচকীয় ধর্মাবলী ($\log(A/B) = \log A - \log B$ এবং $\log(A^k) = k\log A$) প্রয়োগ করে:
$$\log\left(\frac{e^x}{x^2}\right) = \log(e^x) - \log(x^2) = x\log_e e - 2\log x = x - 2\log x$$

সুতরাং মূল সমীকরণটি দাঁড়ায়:
$$y = \frac{\tan x}{x}(x - 2\log x)$$
$$y = \frac{\tan x \cdot x}{x} - \frac{2\tan x \log x}{x} = \tan x - \frac{2\tan x \log x}{x} \quad \text{--- (1)}$$

---

#### **ধাপ ২: উভয় পাশে $x$ এর সাপেক্ষে ব্যবকলন (Differentiating w.r.t $x$)**
সমীকরণ (1) এ ব্যবকলন অপারেটর প্রয়োগ করি:
$$\frac{dy}{dx} = \frac{d}{dx}(\tan x) - 2\frac{d}{dx}\left[\frac{\tan x \log x}{x}\right]$$

আমরা জানি, $\frac{d}{dx}(\tan x) = \sec^2 x$। সুতরাং:
$$\frac{dy}{dx} = \sec^2 x - 2 \cdot \frac{d}{dx}\left[\frac{\tan x \log x}{x}\right] \quad \text{--- (2)}$$

---

#### **ধাপ ৩: ভাগের সূত্র প্রয়োগ (Quotient Rule on Second Term)**
ধরি $u = \tan x \log x$ এবং $v = x$।  
প্রথমে গুণন সূত্র (Product Rule) দ্বারা $u$ এর ব্যবকলন:
$$\frac{du}{dx} = \frac{d}{dx}(\tan x \log x) = \frac{d}{dx}(\tan x)\cdot \log x + \tan x \cdot \frac{d}{dx}(\log x)$$
$$\frac{du}{dx} = \sec^2 x \log x + \frac{\tan x}{x}$$

এখন ভাগের সূত্র $\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v \frac{du}{dx} - u \frac{dv}{dx}}{v^2}$ অনুসারে:
$$\frac{d}{dx}\left[\frac{\tan x \log x}{x}\right] = \frac{x\left(\sec^2 x \log x + \frac{\tan x}{x}\right) - (\tan x \log x)\cdot 1}{x^2}$$
$$= \frac{x\log x \sec^2 x + \tan x - \tan x \log x}{x^2}$$

---

#### **ধাপ ৪: পদগুলো পৃথক করে চূড়ান্ত মান নির্ণয় (Final Algebraic Expansion)**
সমীকরণ (2) এ মানটি বসিয়ে পাই:
$$\frac{dy}{dx} = \sec^2 x - 2\left[\frac{x\log x \sec^2 x + \tan x - \tan x \log x}{x^2}\right]$$

$$= \sec^2 x - \frac{2x\log x \sec^2 x}{x^2} - \frac{2\tan x}{x^2} + \frac{2\tan x \log x}{x^2}$$

$$\therefore \mathbf{\frac{dy}{dx} = \sec^2 x - \frac{2\log x \sec^2 x}{x} - \frac{2\tan x}{x^2} + \frac{2\tan x \log x}{x^2}}$$

---

### **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dx} = \sec^2 x - \frac{2\log x \sec^2 x}{x} - \frac{2\tan x}{x^2} + \frac{2\tan x \log x}{x^2}}$$
