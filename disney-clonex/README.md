# 🎬 Disney+ CloneX

A pixel-perfect, fully responsive clone of the **Disney+** streaming platform, built with **React 19**, **Vite**, **Tailwind CSS v4**, and **React Router v7**.

![Disney+ CloneX Banner](https://img.shields.io/badge/Disney%2B-CloneX-1a1d29?style=for-the-badge&logo=disney&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=flat-square&logo=react-router&logoColor=white)

---

## ✨ Features

- 🏠 **Home Page** — Browsable movie rows sorted by genre/category with an autoplay image slider
- 🔐 **Login Page** — Themed login screen matching the Disney+ aesthetic
- 🎞️ **Detail Page** — Dedicated movie/show detail view with metadata and actions
- 👤 **Profile Page** — User profile management page
- 🪟 **Global Modal** — Reusable modal component for quick previews
- 🏷️ **Production Houses** — Showcase of major studios (Disney, Pixar, Marvel, Star Wars, National Geographic)
- 📱 **Fully Responsive** — Optimised for mobile, tablet, and desktop
- ⚡ **Blazing Fast** — Built on Vite 8 with HMR for instant development feedback

---

## 🗂️ Project Structure

```
disney-clonex/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images, icons, and media
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Sidebar.jsx
│   │   ├── ImageSlider.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieRow.jsx
│   │   ├── ProductionHouses.jsx
│   │   └── GlobalModal.jsx
│   ├── context/
│   │   └── AppContext.jsx   # Global state management
│   ├── data/                # Static movie/show data
│   ├── pages/               # Page-level components
│   │   ├── Login.jsx
│   │   ├── Home.jsx
│   │   ├── Detail.jsx
│   │   └── Profile.jsx
│   ├── App.jsx              # Root component & routing
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── eslint.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/itsriteshx/Disney-Clonex.git
cd Disney-Clonex/disney-clonex

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173** with Hot Module Replacement enabled.

---

## 📜 Available Scripts

| Command           | Description                              |
|-------------------|------------------------------------------|
| `npm run dev`     | Start local dev server with HMR          |
| `npm run build`   | Build optimised production bundle        |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint across the codebase           |

---

## 🏗️ Tech Stack

| Technology         | Version  | Purpose                          |
|--------------------|----------|----------------------------------|
| React              | ^19.2.5  | UI library                       |
| Vite               | ^8.0.10  | Build tool & dev server          |
| Tailwind CSS       | ^4.2.4   | Utility-first styling            |
| React Router DOM   | ^7.14.2  | Client-side routing              |
| PostCSS            | ^8.5.10  | CSS processing                   |
| ESLint             | ^10.2.1  | Code quality & linting           |

---

## 🔀 Routing Structure

| Route            | Page       | Description                        |
|------------------|------------|------------------------------------|
| `/`              | Login      | Entry point / authentication       |
| `/home`          | Home       | Main content browsing page         |
| `/profile`       | Profile    | User profile management            |
| `/detail/:id`    | Detail     | Movie/show detail view             |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is made for **educational purposes only**. All Disney+ branding, logos, and content are property of **The Walt Disney Company**. This is not affiliated with or endorsed by Disney.

---

<p align="center">Made with ❤️ by <a href="https://github.com/itsriteshx">itsriteshx</a></p>
