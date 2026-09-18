# WEDE5020-Shaun-stroebel-APEX-Endurance
# Apex Endurance — Web Interface

A modern, responsive landing page and interactive toolkit built for long-distance runners and endurance cyclists. The platform features an event discipline filter, dynamic pace and split time calculations, interactive training gear checklists, and curated endurance routes.

---

## 📌 Project Overview

This repository contains the complete frontend implementation (HTML5, CSS3, JavaScript) for **Apex Endurance**. The landing page serves as an all-in-one resource hub for endurance athletes, providing client-side calculations for race metrics and structured training resources.

### Key Features

* **Dynamic Content Filtering:** Real-time DOM filtering based on discipline (`data-category`: Running, Cycling, or Dual Sport).
* **Pace & Metric Calculator:** Client-side JavaScript algorithm calculating average speed ($\text{km/h}$), pace per kilometer ($\text{min/km}$), and halfway 50% split times based on user duration and event distance inputs.
* **Interactive Gear Checklists:** Custom interactive list elements with custom checkbox styling for athlete preparation.
* **Responsive Layout:** Mobile-first, fully responsive UI built using CSS Grid and Flexbox with a custom mobile collapsible menu navigation.

---

## 🛠️ Tech Stack & Dependencies

* **HTML5:** Semantic structure (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
* **CSS3:** Custom properties (CSS variables), Flexbox, CSS Grid layouts, and CSS media queries.
* **JavaScript (ES6+):** Pure Vanilla JS DOM manipulation and event listeners (no external frameworks required).
* **Font Awesome (v6.4.0):** Vector icons loaded via CDN for athletic interface elements.
* **Google System Fonts:** Modern fallbacks utilizing `system-ui` stack for fast rendering.

---

## 📂 Project Structure

```text
apex-endurance/
│
├── index.html          # Main HTML document structure
├── style.css           # Global stylesheet, design system, and responsive breakpoints
├── script.js          # Core application logic, event listeners, and dynamic calculations
└── README.md           # Documentation

```

---

## ⚙️ Core Functionality Breakdown

### 1. Discipline Filtering System

The filtering component queries all DOM elements possessing a `data-category` attribute. When a user selects a filter button, the script checks if the target category array includes the selected key (`all`, `running`, or `cycling`) and toggles element visibility using CSS display properties:

```javascript
filterableItems.forEach(item => {
    const categories = item.getAttribute('data-category').split(' ');
    if (filterValue === 'all' || categories.includes(filterValue)) {
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
});

```

### 2. Pace & Metric Calculations

The pace calculator converts user time inputs (hours, minutes, seconds) into total seconds, computes speed and pace using standard unit conversions, and updates the output DOM elements:

* **Speed Formula:**

$$\text{Speed (km/h)} = \frac{\text{Distance (km)}}{\text{Total Hours}}$$


* **Pace Formula:**

$$\text{Pace (min/km)} = \frac{\text{Total Seconds}}{\text{Distance (km)}} \div 60$$


* **50% Split Time:**

$$\text{Split Seconds} = \frac{\text{Total Seconds}}{2}$$



---

## 🚀 How to Run the Project Locally

1. **Clone the Repository:**
```bash
git clone https://github.com/your-username/apex-endurance.git

```


2. **Navigate to the Directory:**
```bash
cd apex-endurance

```


3. **Open in Browser:**
* Open `index.html` directly in any web browser.
* Alternatively, use VS Code Live Server extension to view real-time changes.



---

## 📱 Responsive Layout Design

The user interface uses a mobile-first fluid layout design with a breakpoint set at `768px`:

* **Desktop:** Full desktop menu, 2-column calculation grids, and multi-column article grids.
* **Mobile ($\le$ 768px):** Hamburger menu toggle triggered via `script.js`, single-column forms, and full-width touch targets.

---

## 📚 References

* **Font Awesome Free CDN:** Fonticons, Inc. (2023). *Font Awesome 6.4.0 Icon Library*. Available at: `[https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css)`
* **Unsplash Stock Photography:** Unsplash Inc. (2023). *Running Track Background Image*. Available at: `[https://images.unsplash.com/photo-1530549387789-4c1017266635](https://images.unsplash.com/photo-1530549387789-4c1017266635)`
* **MDN Web Docs — Web APIs:** Mozilla Developer Network. (2024). *Document Object Model (DOM) and EventTarget.addEventListener()*. Available at: `[https://developer.mozilla.org/en-US/docs/Web/API](https://developer.mozilla.org/en-US/docs/Web/API)`
* **W3C Standards:** World Wide Web Consortium. (2023). *HTML5 & CSS Flexible Box Layout Module Specification*. Available at: `[https://www.w3.org/TR/css-flexbox-1/](https://www.w3.org/TR/css-flexbox-1/)`
