# Week 5: React & Single-Page Applications (SPA) Master Guide

---

## 📑 Module Overview
This master repository contains complete solutions for all six hands-on labs in **Week 5**:

1. 🚀 **Lab 1: `myfirstreact`** — Introduction to React, SPA Architecture, & Environment Setup.
2. 🧩 **Lab 2: `StudentApp`** — React Components, Class Components, Constructor & `render()` Method.
3. 🎨 **Lab 3: `scorecalculatorapp`** — Functional Components, Props Processing & External CSS Stylesheets.
4. 🔄 **Lab 4: `blogapp`** — React Lifecycle Hooks (`componentDidMount`, `componentDidCatch`) & Fetch API.
5. 📦 **Lab 5: `cohortdetailsapp`** — CSS Modules (`CohortDetails.module.css`) & Conditional Inline Styles.
6. ⚡ **Lab 6: `cricketapp`** — ES6 Features (Arrow Functions, Destructuring, `.map()` Method).

---

## 💡 Comprehensive Theory & Objectives

### 1. SPA & React Fundamentals (Lab 1)
- **Single-Page Application (SPA)**: Rewrites the current page dynamically without full-page reloads.
- **SPA vs. MPA**:
  - *SPA*: Dynamic client-side rendering, decoupled backend REST API, fast page transitions.
  - *MPA*: Full page reload per request, server-rendered HTML.
- **Virtual DOM & Reconciliation**: React keeps an in-memory Virtual DOM tree, computes minimal changes via the *Diffing Algorithm*, and updates only modified elements in the real DOM.

### 2. React Component Architecture (Lab 2)
- **React Components**: Independent, reusable UI building blocks.
- **Component vs JS Function**: Components return JSX layouts, accept `props`, and handle internal lifecycle/state.
- **Class Components**: Extend `React.Component`, require a `constructor(props)` to initialize state, and a mandatory `render()` method returning JSX.
- **Function Components**: ES6 functions receiving `props` and returning JSX; standard in modern React with Hooks.

### 3. Functional Components & CSS Stylesheets (Lab 3)
- **External Stylesheets**: CSS files imported into components (`import '../Stylesheets/mystyle.css'`).
- **Score Calculation**: Function component accepting props (`Name`, `School`, `Total`, `goal`) and computing calculated properties (Average score = `Total / goal`).

### 4. Component Lifecycle Hooks (Lab 4)
- **Need & Benefits**: Allows components to run side effects (fetching API data, setting timers) when mounted, updated, or unmounted.
- **Key Hooks**:
  - `componentDidMount()`: Invoked immediately after component mounting. Ideal for `fetch()` calls.
  - `componentDidCatch(error, info)`: Error Boundary lifecycle hook that catches JavaScript errors anywhere in child components and displays fallback alert UIs.

### 5. CSS Modules & Inline Styling (Lab 5)
- **CSS Modules (`CohortDetails.module.css`)**: Encapsulates CSS styles locally to avoid global namespace collisions.
- **Styling Rules**:
  - `.box` class: `width: 300px; display: inline-block; margin: 10px; padding: 10px 20px; border: 1px solid black; border-radius: 10px;`
  - Element selector `dt`: `font-weight: 500;`
- **Conditional Inline Styles**: `color: status.toLowerCase() === 'ongoing' ? 'green' : 'blue'`.

### 6. Modern ES6 Features (Lab 6)
- **`let` vs `var` vs `const`**: `let` and `const` provide block scope (`{}`), preventing hoisting side effects.
- **Arrow Functions**: Concise syntax `() => {}` with implicit lexical `this` binding.
- **Destructuring**: Extracts array items or object properties into distinct variables: `const { Name, School } = props;`.
- **Array `.map()`**: Iterates through array elements to transform data into JSX element lists.

---

## 📂 Repository Layout

```
Week 5/
├── README.md
├── myfirstreact/          # Lab 1: React Setup ("welcome to the first session of React")
├── StudentApp/            # Lab 2: Home, About, Contact Components
├── scorecalculatorapp/    # Lab 3: CalculateScore component & mystyle.css
├── blogapp/               # Lab 4: Posts component, componentDidMount & componentDidCatch
├── cohortdetailsapp/      # Lab 5: CohortDetails component & CohortDetails.module.css
└── cricketapp/            # Lab 6: ListofPlayers component, map() & destructuring
```
