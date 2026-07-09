# COS 106 Term Project — Personal Portfolio & Academic Planner

## My Details

- **Name:** Oluwadara Bolaji
- **Student ID:** 2025/B/SENG/0541
- **Programme:** B.Sc. Software Engineering (100 Level)
- **Course:** COS 106 — Introduction to Web Technologies
- **Institution:** MIVA Open University, Nigeria
- **Email:** o.bolaji6795@miva.edu.ng

---

## What I Built

This is my term project for COS 106. It is a 5-page personal portfolio website built with HTML, CSS, and vanilla JavaScript. The site has:

- A **homepage** with my photo, a short bio, quick facts about me, and a table of my current courses
- An **About Me** page covering my education, career goals, technical skills (with animated skill bars), hobbies, and a short video introduction
- A **Projects** page showing three sample projects I have worked on
- An **Academic Planner** where I can add, edit, complete, and delete tasks — with localStorage so tasks are saved between visits
- A **Contact** page with a form that validates inputs before showing a success message

Everything is responsive and works on both desktop and mobile screens.

---

## Pages

### Homepage (`index.html`)
- My name, profile photo, and a short introduction
- A "Quick Facts" grid (Education, Skills, Goals)
- A table showing my current 100L courses with codes, titles, and unit loads

### About Me (`pages/about.html`)
- My educational background at MIVA Open University
- My career aspirations and what I hope to do after my degree
- A skills section with animated progress bars (HTML5, CSS3, JavaScript, Problem Solving, Teamwork, Git)
- Hobbies and interests
- A short video introduction — **note:** the video file was too large to upload to GitHub, so only the poster image is in the repo. I included a poster fallback so the page does not look broken.

### Projects (`pages/projects.html`)
- Three project cards: Calculator App, To-Do List App, and this Portfolio itself
- Each card has a screenshot, a short description, technology tags, and a link to view the source code

### Academic Planner (`pages/planner.html`)
- A form to add new tasks with descriptions, due dates, and priority levels (High, Medium, Low)
- Checkboxes to mark tasks as done (completed tasks get a strikethrough)
- Edit and delete buttons for each task
- Filter buttons to show All, Active, or Completed tasks
- A live counter showing how many tasks are still pending
- Friendly messages when a filtered list is empty
- All tasks are saved to localStorage so they stay even after closing the browser

### Contact (`pages/contact.html`)
- My contact information (email, phone, location, GitHub)
- A form with fields for Name, Email, Phone Number, and Message
- JavaScript validation that checks:
  - No field is left empty
  - Email matches a proper format
  - Phone number contains only digits
  - Message is at least 10 characters long
- Errors appear under each field in red, and clear when you start typing
- A green success message appears when the form is complete, then the form resets

---

## Technologies Used

- **HTML5** — semantic tags like `<nav>`, `<section>`, `<footer>`, `<table>`, and `<video>`
- **CSS3** — external stylesheet, Flexbox and CSS Grid for layout, media queries for responsive design, transitions and hover effects
- **JavaScript (Vanilla)** — no libraries or frameworks. Used for:
  - Mobile hamburger menu toggle
  - Contact form validation with live error clearing
  - Academic Planner CRUD operations with localStorage
- **Color Scheme** — navy blue (`#1a3a5c`) and gold (`#f0c040`) on a light gray background

---

## Folder Structure

```
cos106-portfolio-project/
├── index.html
├── README.md
├── .gitignore
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── profile.jpg
│   ├── project-calculator.png
│   ├── project-todo.png
│   ├── project-portfolio.png
│   └── video-poster.jpg
├── videos/
│   └── introduction.mp4        (not in repo — too large for GitHub)
└── pages/
    ├── about.html
    ├── projects.html
    ├── planner.html
    └── contact.html
```

---

## How to Run Locally

1. Clone the repo:
   ```
   git clone https://github.com/dbolaji1/cos106-portfolio-project.git
   ```
2. Open `index.html` in any browser (Chrome, Firefox, Edge, or Safari).
3. Or serve it locally with Python if you want to test the video:
   ```
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000`.

---

## Deploying to GitHub Pages

1. Go to the repository **Settings** tab on GitHub.
2. Click **Pages** in the left sidebar.
3. Under "Build and deployment", set **Source** to "Deploy from a branch" and **Branch** to `main` (root folder).
4. Click **Save**.
5. After a minute or two, the site will be live at:
   `https://dbolaji1.github.io/cos106-portfolio-project/`

---

## Challenges I Faced

- The video file for my introduction was over 100MB, which is GitHub's file size limit. I had to gitignore it and use a poster image as a fallback.
- Getting the localStorage to work properly with the task filters took some trial and error. I had to make sure the filter state was saved and restored correctly on page reload.
- The navigation bar is repeated across all five HTML pages, which means any change has to be made in five places. I understand that frameworks solve this problem, but for this project we had to use only vanilla HTML/CSS/JS.
- Making the planner form and the contact form validation feel consistent was something I worked on. The contact form has inline error messages but the planner still uses browser alerts for some things — something I would improve if I had more time.

---

## What I Would Improve

- Use the same inline error style from the contact form on the planner instead of the browser popups
- Add a proper favicon
- Record a shorter, compressed version of my introduction video that fits within GitHub's limits
- Make the navigation reusable instead of copying it into every HTML file
- Add keyboard focus styles for better accessibility

---

Built as part of my COS 106 coursework at MIVA Open University, 2026.
