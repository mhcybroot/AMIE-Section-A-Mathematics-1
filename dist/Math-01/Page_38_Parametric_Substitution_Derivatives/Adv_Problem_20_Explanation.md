# AMIE Section-A Preparation: Mathematics-1 (Differential Calculus)
## Parametric Differentiation of Folium of Descartes — Page 38, Problem 20 [AMIE Standard Practice]

---

### **গাণিতিক সমস্যা (Problem Statement):**
যদি $x = \frac{3at}{1+t^3}$ এবং $y = \frac{3at^2}{1+t^3}$ হয়, তবে $\frac{dy}{dx}$ এর মান নির্ণয় কর।  
*(If $x = \frac{3at}{1+t^3}$ and $y = \frac{3at^2}{1+t^3}$, find $\frac{dy}{dx}$.)*

---

### **ধাপভিত্তিক গাণিতিক সমাধান (Step-by-Step Solution):**

#### **Step 1: $x$ এর $t$ এর সাপেক্ষে ব্যবকলন ($rac{dx}{dt}$ নির্ণয়)**
প্রদত্ত: $x = \frac{3at}{1+t^3}$। ভাগের সূত্র প্রয়োগ করে:

$$
\frac{dx}{dt} = \frac{(1+t^3)\cdot 3a - 3at \cdot (3t^2)}{(1+t^3)^2} = \frac{3a(1+t^3) - 9at^3}{(1+t^3)^2} = \frac{3a(1 - 2t^3)}{(1+t^3)^2} \quad \text{--- (1)}
$$


---

#### **Step 2: $y$ এর $t$ এর সাপেক্ষে ব্যবকলন ($rac{dy}{dt}$ নির্ণয়)**
প্রদত্ত: $y = \frac{3at^2}{1+t^3}$। ভাগের সূত্র প্রয়োগ করে:

$$
\frac{dy}{dt} = \frac{(1+t^3)\cdot 6at - 3at^2 \cdot (3t^2)}{(1+t^3)^2} = \frac{6at + 6at^4 - 9at^4}{(1+t^3)^2} = \frac{3at(2 - t^3)}{(1+t^3)^2} \quad \text{--- (2)}
$$


---

#### **Step 3: প্যারামেট্রিক চেইন রুল প্রয়োগ (Parametric Chain Rule)**
আমরা জানি, $\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$। সমীকরণ (2) কে (1) দ্বারা ভাগ করে পাই:

$$
\frac{dy}{dx} = \frac{\frac{3at(2 - t^3)}{(1+t^3)^2}}{\frac{3a(1 - 2t^3)}{(1+t^3)^2}}
$$


---

#### **Step 4: লঘিষ্ঠকরণ ও চূড়ান্ত ফলাফল (Simplification)**
সাধারণ উৎপাদক $\frac{3a}{(1+t^3)^2}$ উভয় লব ও হর থেকে কেটে পাই:

$$
\frac{dy}{dx} = \frac{t(2 - t^3)}{1 - 2t^3}
$$


---

### **চূড়ান্ত উত্তর (Final Answer):**
$$\mathbf{\frac{dy}{dx} = \frac{t(2 - t^3)}{1 - 2t^3}}$$
