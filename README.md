# Sujitha V — AI & Data Science Portfolio

A modern, ATS-friendly, fully animated portfolio website built with **React.js**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Install & Run
```bash
npm install
npm start
```
Open [http://localhost:3000](http://localhost:3000).

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── profile-photo.jpg      ← Add your photo here
│   ├── resume.pdf             ← Add your resume here
│   ├── project-images/        ← project1.jpg, project2.jpg …
│   ├── certificates/          ← cert1.jpg, cert2.jpg …
│   └── awards/                ← award1.jpg, award2.jpg …
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Achievements.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── BackToTop.jsx
│   │   ├── FloatingSocials.jsx
│   │   ├── AnimatedCursor.jsx
│   │   └── SectionHeader.jsx
│   │
│   ├── data/
│   │   └── portfolioData.js   ← All your content lives here
│   │
│   ├── App.jsx
│   ├── index.js
│   └── index.css
```

---

## ✏️ Personalizing Content

**All content is in `src/data/portfolioData.js`.**  
Edit the exported objects:

| Export | What it controls |
|--------|-----------------|
| `personalInfo` | Name, email, phone, LinkedIn, GitHub, bio |
| `skillsData` | Languages, technologies, tools with level % |
| `projects` | Project cards with GitHub/demo links |
| `certifications` | Certificates with org, date, credential URL |
| `achievements` | Awards with images, descriptions, dates |
| `experiences` | Internships, hackathons, workshops, leadership |
| `education` | Degrees with CGPA and duration |
| `stats` | Hero counter numbers |

---

## 🖼️ Adding Your Files

| File | Path |
|------|------|
| Profile photo | `public/profile-photo.jpg` |
| Resume PDF | `public/resume.pdf` |
| Project images | `public/project-images/project1.jpg` etc. |
| Certificate images | `public/certificates/cert1.jpg` etc. |
| Award photos | `public/awards/award1.jpg` etc. |

---

## 📧 Setting Up the Contact Form

The form is pre-built. To make it actually send emails, integrate **EmailJS** or **Formspree**:

### EmailJS (recommended)
1. Sign up at [emailjs.com](https://emailjs.com)
2. Create a service + email template
3. In `Contact.jsx`, replace the `setTimeout` mock with:
```js
import emailjs from '@emailjs/browser';
emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY');
```

### Formspree
Set `action="https://formspree.io/f/YOUR_ID"` on the form element.

---

## 🚢 Deployment

### Vercel (Recommended — Zero config)
```bash
npm install -g vercel
vercel
```
Follow the prompts. Done!

### GitHub Pages
1. Add to `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
```
2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```
3. Add scripts to `package.json`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```
4. Deploy:
```bash
npm run deploy
```

### Netlify
Drag & drop the `build/` folder at [netlify.com/drop](https://app.netlify.com/drop) after running `npm run build`.

---

## ✨ Features

- ✅ Dark / Light mode toggle
- ✅ Typing animation (Hero)
- ✅ Scroll-triggered animations (Framer Motion)
- ✅ Professional loading screen
- ✅ Back-to-top button
- ✅ Floating social media buttons
- ✅ Custom animated cursor
- ✅ Project filtering by category
- ✅ Certifications carousel
- ✅ Achievements lightbox + timeline
- ✅ Glassmorphism design throughout
- ✅ Fully responsive (mobile + desktop)
- ✅ SEO meta tags in `public/index.html`

---

## 🛠️ Tech Stack

- **React 18** — UI framework
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion** — Animations
- **react-type-animation** — Typing effect
- **react-countup** — Number counters
- **react-intersection-observer** — Scroll triggers
- **react-icons** — Icon library

---

## 📄 License

MIT — free to use and customize.
