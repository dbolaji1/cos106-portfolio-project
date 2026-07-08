# MIVA Open University - COS 106 Term Project
## Student Portfolio & Academic Management Website

### Course Details
* **Course:** COS 106 - Introduction to Web Technologies (Computing)
* **Academic Level:** 100 Level (100L)
* **Semester:** Term Project (20 Marks)
* **Institution:** MIVA Open University, Nigeria

### Student Profile
* **Student Name:** Oluwadara Bolaji
* **Programme:** B.Sc. Software Engineering
* **Matriculation/Student ID:** COS/100L/2025/MIVA
* **Email:** [darabolaji01@gmail.com](mailto:darabolaji01@gmail.com)

---

## 1. Project Overview
This project is a fully functional, multi-page, responsive website designed as a personal portfolio and academic management platform. It represents the final practical term project for COS 106 at MIVA Open University.

The primary goal of this application is to demonstrate clean, semantic implementation of HTML5, responsive styling with CSS3 (Flexbox/Grid), and interactive client-side logic using vanilla (pure) JavaScript. The website is structured around an authentic student persona to showcase coursework, skills, personal projects, and interactive tools for tracking academic tasks.

---

## 2. Feature List

### A. Core Website Pages
1. **Homepage (`index.html`):**
   * Professional greeting, profile photo, and biography.
   * "Quick Facts" grid highlighting key educational and professional goals.
   * Semantic "Current Courses" table showing course codes, titles, and unit loads for 100L.
2. **About Me (`pages/about.html`):**
   * Detailed educational timeline at MIVA Open University.
   * Interactive video introduction (`videos/introduction.mp4`) with a custom fallback poster image.
   * Responsive Technical Skills Grid showing animated proficiency level fill-bars.
   * Hobbies and interests panel representing academic and lifestyle interests.
3. **Projects (`pages/projects.html`):**
   * Interactive showcase of 3 sample projects (Calculator, To-Do App, and the Personal Portfolio itself).
   * Hover effects, category tags (e.g., HTML, CSS, Responsive), and direct source code links.
4. **Academic Planner (`pages/planner.html`):**
   * Active, client-side, local-first planner designed to track assignments and deadlines.
5. **Contact (`pages/contact.html`):**
   * Form with real-time, client-side input validation and error feedback.

### B. Interactive Academic Planner Features
* **Create Task:** Form supporting task description, custom due dates, and priority selections (High, Medium, Low).
* **Complete Task:** Interactive checkboxes that visually strike-through completed tasks and update the active count.
* **Delete Task:** Confirmational modal delete operation that instantly removes a task.
* **Edit Task:** Standard browser prompt permettant in-place title updates for any task.
* **Status Filtering:** Dynamic tabs to filter list items by `All`, `Active` (Pending), or `Completed`.
* **State Persistence (`localStorage`):** High-level synchronization that maintains tasks, completed states, due dates, priority tiers, and active filters across page reloads.
* **Friendly Empty States:** Shows custom, encouraging empty-state feedback messages when lists are filtered empty.
* **Live Task Counter:** Dynamically renders the total number of remaining active/pending tasks.

### C. Contact Form Validation
* **Field Checks:** Validates Full Name, Email, Phone Number, and Message body.
* **Email Syntax Match:** Assures standard email formats with a regular expression pattern.
* **Phone Digit Rule:** Strict requirement checking that the phone input contains only numerical digits (no letters or non-numeric symbols, as per curriculum guidelines).
* **Length Guard:** Enforces a minimum length of 10 characters for the message input to prevent blank or meaningless submissions.
* **Dynamic Inline Errors:** Highlights erroneous input boxes with a red border and reveals clear instruction labels underneath.
* **Live Clears:** Subtly removes error displays the moment a student begins typing valid data.
* **Submission Success Notification:** Features a green, auto-fading success box upon validating all fields, followed by an immediate form reset.

---

## 3. Technology Stack & Design Decisions
* **Semantic HTML5:** Structuring with `<nav>`, `<section>`, `<footer>`, `<video>`, and `<table>` blocks.
* **Responsive CSS3 (Grid & Flexbox):** Multi-column grid structures that degrade gracefully into stacked blocks on mobile devices without any external libraries or frameworks (No Bootstrap, React, or jQuery used).
* **Primary Navy Theme (`#1a3a5c`):** Deep academic navy representing focus and professional development.
* **Accent Gold Theme (`#f0c040`):** Energetic gold highlighting buttons, links, and important focal points.
* **Vanilla JavaScript:** Clean, procedural, event-driven DOM manipulation.

---

## 4. Folder Structure
```
cos106-portfolio-project/
├── index.html                  # Homepage (Main Landing Page)
├── README.md                   # Project Documentation
├── .gitignore                  # Git Ignore File
├── css/
│   └── style.css               # External CSS stylesheet with styling rules
├── js/
│   └── main.js                # Core JS file for Hamburger, Form, & Planner
├── images/
│   ├── profile.jpg             # Student Profile Photograph
│   ├── project-calculator.png  # Screenshot for Calculator Project
│   ├── project-todo.png        # Screenshot for To-Do List Project
│   ├── project-portfolio.png   # Screenshot for Portfolio Project
│   └── video-poster.jpg        # Video Thumbnail Image
├── videos/
│   └── introduction.mp4        # Quick student introductory video asset
└── pages/
    ├── about.html              # About Me section
    ├── projects.html           # Project Showcase page
    ├── planner.html            # Academic Planner tool
    └── contact.html            # Form contact page
```

---

## 5. Installation & Local Running Instructions
1. Clone the repository from GitHub:
   ```bash
   git clone https://github.com/dbolaji1/cos106-portfolio-project.git
   ```
2. Navigate to the project root:
   ```bash
   cd cos106-portfolio-project
   ```
3. Open `index.html` directly in any web browser of your choice (Chrome, Safari, Firefox, or Edge):
   * *Option A:* Double-click the file inside your local file explorer.
   * *Option B:* Run a lightweight local server if you wish to test fully-rendered video loads (e.g., using the Python command: `python3 -m http.server 8000`).

---

## 6. GitHub Pages Deployment Instructions
To host the portfolio live for assignment submission:
1. Push your completed codebase to your public GitHub repository (`https://github.com/dbolaji1/cos106-portfolio-project`).
2. On GitHub, navigate to the **Settings** tab of the repository.
3. Scroll down on the left-side menu and select **Pages** (under the "Code and automation" section).
4. Under the **Build and deployment** settings:
   * **Source:** Select `Deploy from a branch`.
   * **Branch:** Set to `main` (or `master`) and specify `/ (root)` as the folder.
5. Click **Save**.
6. Wait 1-2 minutes. GitHub will generate a live URL. It will look like:
   `https://dbolaji1.github.io/cos106-portfolio-project/`
7. Copy this URL and submit it alongside your repository link to the MIVA student portal!

---

## 7. Screenshots Section

### Desktop Dashboard Layout
*The primary desktop interface highlights the cohesive color palette of deep academic navy (`#1a3a5c`) and vibrant gold accents (`#f0c040`) across a sticky header, interactive grids, and tables.*

### Academic Planner Interface
*Displays the student planner with priority color-coded tags, completed check strikes, inline editing prompts, deletion triggers, empty-state notes, and robust filter tabs.*

### Responsive Mobile Drawer
*On compact devices (under 768px wide), the standard menu degrades gracefully into an accessible, animated hamburger menu drawer with smooth toggle transforms.*

---
*Developed with ❤️ as part of the 100L Software Engineering Curriculum at MIVA Open University.*
