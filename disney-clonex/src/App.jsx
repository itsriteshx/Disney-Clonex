import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TV from "./pages/TV";
import MovieDetails from "./pages/MovieDetails";
import Watchlist from "./pages/Watchlist";
import Premium from "./pages/Premium";
import Sports from "./pages/Sports";
import { AppProvider } from "./context/AppContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <HashRouter>
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/tv" element={<TV />} />
              <Route path="/watchlist" element={<Watchlist />} />
              <Route path="/premium" element={<Premium />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </div>
        </HashRouter>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;