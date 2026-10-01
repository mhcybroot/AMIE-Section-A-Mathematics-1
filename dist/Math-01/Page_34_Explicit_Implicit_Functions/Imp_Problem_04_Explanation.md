# AMIE Section-A Preparation: Mathematics-1 (Differential Calculus)
## Implicit Functions (ব্যক্ত ও অব্যক্ত ফাংশন) — Page 34, Problem 04

---

### **গাণিতিক সমস্যা (Problem Statement):**
যদি $\log(xy) = x^2 + y^2$ হয়, তবে $\frac{dy}{dx}$ এর মান নির্ণয় কর।  
*(If $\log(xy) = x^2 + y^2$, find $\frac{dy}{dx}$.)*

---

### **ধাপভিত্তিক গাণিতিক সমাধান (Step-by-Step Solution):**

#### **ধাপ ১: লগারিদমের ধর্ম প্রয়োগ (Applying Logarithmic Property)**
প্রদত্ত সমীকরণ:
$$\log(xy) = x^2 + y^2$$

আমরা জানি, $\log(AB) = \log A + \log B$। সুতরাং:
$$\log x + \log y = x^2 + y^2$$

---

#### **ধাপ ২: উভয় পক্ষকে $x$ এর সাপেক্ষে ব্যবকলন (Differentiating w.r.t $x$)**
সমীকরণের উভয় পাশে ব্যবকলন অপারেটর $\frac{d}{dx}$ প্রয়োগ করে পাই:
$$\frac{d}{dx}(\log x) + \frac{d}{dx}(\log y) = \frac{d}{dx}(x^2) + \frac{d}{dx}(y^2)$$

আমরা জানি:
- $\frac{d}{dx}(\log x) = \frac{1}{x}$
- $\frac{d}{dx}(\log y) = \frac{1}{y} \frac{dy}{dx}$ *(চেইন রুল অনুসারে)*
- $\frac{d}{dx}(x^2) = 2x$
- $\frac{d}{dx}(y^2) = 2y \frac{dy}{dx}$ *(চেইন রুল অনুসারে)*

মানগুলো সমীকরণে বসিয়ে পাই:
$$\frac{1}{x} + \frac{1}{y} \frac{dy}{dx} = 2x + 2y \frac{dy}{dx}$$

---

#### **ধাপ ৩: $\frac{dy}{dx}$ যুক্ত পদগুলোকে একপাশে স্থানান্তর (Grouping $\frac{dy}{dx}$ terms)**
$\frac{dy}{dx}$ সংবলিত পদগুলোকে বামপক্ষে এবং অবশিষ্ট পদগুলোকে ডানপক্ষে নিয়ে পাই:
$$\frac{1}{y} \frac{dy}{dx} - 2y \frac{dy}{dx} = 2x - \frac{1}{x}$$

উভয় পক্ষে ল.সা.গু (LCM) করে পাই:
$$\left(\frac{1 - 2y^2}{y}\right) \frac{dy}{dx} = \frac{2x^2 - 1}{x}$$

---

#### **ধাপ ৪: $\frac{dy}{dx}$ এর চূড়ান্ত মান নির্ণয় (Solving for $\frac{dy}{dx}$)**
$$\frac{dy}{dx} = \frac{2x^2 - 1}{x} \times \frac{y}{1 - 2y^2}$$

$$\therefore \frac{dy}{dx} = \frac{y(2x^2 - 1)}{x(1 - 2y^2)}$$

---

### **বিকল্প রূপ (Alternative Form):**
$$\frac{dy}{dx} = \frac{2x^2 y - y}{x - 2xy^2}$$

---

### **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dx} = \frac{y(2x^2 - 1)}{x(1 - 2y^2)} \quad \text{বা} \quad \frac{2x^2 y - y}{x - 2xy^2}}$$
