# 🎬 Disney+ Hotstar Clone

A complete, production-ready clone of the Disney+ Hotstar streaming platform.

## ✨ Features

- **React Router Navigation**: Seamless client-side routing between Home, Movies, TV, Sports, Detail, and Login pages.
- **Movie Details Page**: Dynamic route pages showing movie thumbnails, cinematic backdrops, descriptions, play buttons, and watchlist buttons.
- **Search Feature**: Real-time search and filtering logic built right into the Header.
- **Watchlist Feature**: Users can add and remove movies to their personal watchlist which persists across reloads using `localStorage`.
- **Loading Skeleton UI**: Premium shimmer-effect loading placeholders displayed while content data is fetched.
- **Dark Mode Toggle**: Built using React Context API allowing users to switch between the native dark theme and a high-contrast light theme.
- **Responsive Design**: Fluidly works across mobile, tablet, and desktop views using Tailwind CSS.
- **Clean State Management**: Implemented effectively via `useContext` and `useReducer` to avoid prop-drilling.

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 & custom CSS variables
- **Routing**: React Router DOM v7
- **Icons**: React Icons (Heroicons, AntDesign)
- **Deployment**: GitHub Pages

## 📸 Screenshots

*(Add screenshots of your project here)*

- **Home Page** - `[Screenshot placeholder]`
- **Detail Modal** - `[Screenshot placeholder]`
- **Search Results** - `[Screenshot placeholder]`
- **Light Theme** - `[Screenshot placeholder]`

## 🚀 Installation Steps

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/itsriteshx/Disney-Clonex.git
   cd Disney-Clonex
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   Visit `http://localhost:5173` to view the application.

## 🌍 Deployment Instructions

This project is configured to deploy easily to GitHub Pages.

1. Ensure the `homepage` and `base` paths in `vite.config.js` and `package.json` are set to your repository name (`/Disney-Clonex/`).
2. Run the deployment script:
   ```bash
   npm run deploy
   ```
3. The script will automatically build the production files and push them to the `gh-pages` branch.
4. Go to your GitHub repository settings, under **Pages**, and ensure it is being served from the `gh-pages` branch.

---

> **Note**: This is an educational project not affiliated with the Walt Disney Company.
