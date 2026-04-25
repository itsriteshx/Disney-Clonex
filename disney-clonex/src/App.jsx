import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TV from "./pages/TV";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";
import Premium from "./pages/Premium";
import Sports from "./pages/Sports";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv" element={<TV />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </HashRouter>
    </AppProvider>
  );
}

export default App;