import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Movies from "./components/Movies";
import TV from "./components/TV";
import Detail from "./components/Detail";
import Watchlist from "./components/Watchlist";
import Premium from "./components/Premium";
import Sports from "./components/Sports";
import Search from "./components/Search";
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
              <Route path="/search" element={<Search />} />
              <Route path="/movie/:id" element={<Detail />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </div>
        </HashRouter>
      </AppProvider>
    </ThemeProvider>
  );
}
export default App;