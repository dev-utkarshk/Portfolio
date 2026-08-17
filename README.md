# Utkarsh Kumar — Personal Developer Portfolio

A modern, minimal, and responsive personal portfolio website built with **Semantic HTML5**, **Vanilla CSS3**, and **Vanilla JavaScript**. 

Designed to present an authentic developer profile for a B.Tech Computer Science & Engineering student actively learning, building, and exploring software engineering and AI-assisted development.

---

## ✨ Features

- **🎨 Modern Dark Theme (Primary)**: Clean, high-contrast dark aesthetic with an electric sapphire blue accent.
- **☀️ Light / Dark Theme Switcher**: Instant theme toggle with `localStorage` persistence (remembers user preference on page refresh).
- **📱 Fully Responsive**: Custom layouts optimized for desktop, tablet, and mobile screens.
- **🧭 Scroll-Spy Navigation**: Top navigation bar automatically highlights the section currently in view.
- **📂 Mobile Navigation Drawer**: Smooth slide-down navigation menu for smartphone screens with automatic close on link click.
- **♿ Accessible & Semantic**: Built using semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), `aria-*` attributes, and `:focus-visible` states.
- **⚡ Zero External Frameworks**: Pure vanilla web technologies for instant loading speed and zero build setup.

---

## 📁 Project Structure

```text
vibe-coding-projects/
├── index.html              # Main HTML markup (Semantic structure & content)
├── css/
│   ├── reset.css           # Cross-browser CSS normalization
│   └── style.css           # Complete design tokens, components, themes & media queries
├── js/
│   └── main.js             # Theme toggle, mobile drawer & scroll-spy logic
└── README.md               # Project documentation & deployment guide
```

---

## 🚀 How to Run & Test Locally

You do not need to install any heavy packages or build tools to view and test this project.

### Option 1: Direct File Opening (Simplest)
1. Navigate to your project folder: `vibe-coding-projects/`.
2. Double-click `index.html` (or right-click `index.html` → **Open With** → Select your preferred browser: Chrome, Edge, Firefox, Brave).

### Option 2: VS Code "Live Server" (Recommended for Development)
1. Open the `vibe-coding-projects` folder in **VS Code**.
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions tab (`Ctrl + Shift + X`).
3. Right-click `index.html` in the file explorer and click **"Open with Live Server"** (or click **Go Live** at the bottom-right corner).
4. The site will open automatically at `http://127.0.0.1:5500/` and auto-reload whenever you save changes.

---

## 🌐 How to Deploy for Free on GitHub Pages

Publish your portfolio to a live public URL in a few simple steps:

### Step 1: Initialize Git in your project folder
Open your terminal (PowerShell / Command Prompt / Git Bash) inside the `vibe-coding-projects` folder and run:
```bash
git init
git add .
git commit -m "Initial commit: Complete personal portfolio website"
```

### Step 2: Create a New Repository on GitHub
1. Log into your GitHub account at [github.com](https://github.com).
2. Click the **`+`** icon in the top-right corner → select **New repository**.
3. Name your repository (for example: `portfolio` or `developer-portfolio`).
4. Keep it **Public**.
5. Do **NOT** check "Add a README file" (we already created one).
6. Click **Create repository**.

### Step 3: Push Your Code to GitHub
Copy the commands shown on GitHub under **"…or push an existing repository from the command line"** and run them in your terminal:
```bash
git branch -M main
git remote add origin https://github.com/[YOUR-USERNAME]/[YOUR-REPO-NAME].git
git push -u origin main
```
*(Replace `[YOUR-USERNAME]` and `[YOUR-REPO-NAME]` with your actual GitHub username and repository name).*

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** (top tab) → Click **Pages** in the left sidebar (under "Code and automation").
3. Under **Build and deployment** > **Branch**:
   - Change `None` to `main`.
   - Leave the folder as `/ (root)`.
   - Click **Save**.
4. Wait 1 to 2 minutes for GitHub to build the site.
5. Refresh the Settings > Pages page. GitHub will show your live URL:
   ```text
   Your site is live at https://[YOUR-USERNAME].github.io/[YOUR-REPO-NAME]/
   ```

---

## 🛠️ How to Update Content in the Future

- **Add real project links**: In `index.html`, locate `<section id="projects">` and replace the placeholder `<span>` tags with `<a>` links pointing to your live demo and GitHub repository.
- **Update skills or education**: In `index.html`, edit the `<li class="skill-badge">` or `<article class="timeline-item">` elements.
- **Push updates to live site**:
  ```bash
  git add .
  git commit -m "Update project links and skills"
  git push
  ```
  GitHub Pages will automatically rebuild and update your live website within a minute!

---

## 📜 License
Designed and developed by Utkarsh Kumar. Feel free to use this structure as a template for your own projects.
