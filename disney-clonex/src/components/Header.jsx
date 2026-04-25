import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useTheme } from "../context/ThemeContext";
import { HiMagnifyingGlass, HiXMark, HiSun, HiMoon } from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";
import { movies, sports } from "../data/movies";

const allContent = [...movies, ...sports];

function Header() {
  const { searchQuery, setSearchQuery, openModal, setShowPlansModal } = useAppContext();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { title: "Home",    path: "/home" },
    { title: "TV",      path: "/tv" },
    { title: "Movies",  path: "/movies" },
    { title: "Sports",  path: "/sports" },
    { title: "Premium", path: "/premium" },
  ];

  const searchResults = searchQuery
    ? allContent
        .filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .slice(0, 6)
    : [];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 4%",
        zIndex: 1000,
        transition: "all 0.4s ease",
        background: isScrolled
          ? "rgba(13,1,23,0.97)"
          : "linear-gradient(to bottom, rgba(13,1,23,0.95) 0%, rgba(13,1,23,0.6) 70%, transparent 100%)",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      {/* LEFT — Logo + Nav */}
      <div style={{ display: "flex", alignItems: "center", gap: "36px" }}>
        {/* Logo */}
        <Link
          to="/home"
          style={{ display: "flex", alignItems: "center", gap: "6px", textDecoration: "none" }}
        >
          <AiFillStar style={{ color: "#f5a623", fontSize: "26px" }} />
          <span
            style={{
              fontSize: "26px",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-0.5px",
              lineHeight: 1,
            }}
          >
            hotstar
          </span>
        </Link>

        {/* Nav */}
        <nav style={{ display: "flex", gap: "28px" }}>
          {navItems.map(item => (
            <NavLink
              key={item.title}
              to={item.path}
              style={({ isActive }) => ({
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                textDecoration: "none",
                color: isActive ? "#ffffff" : "#aaaaaa",
                borderBottom: isActive ? "3px solid #8B2FC9" : "3px solid transparent",
                paddingBottom: "4px",
                transition: "all 0.25s ease",
                height: "72px",
                display: "flex",
                alignItems: "center",
              })}
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* RIGHT — Search + Language + Subscribe + Avatar */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>

        {/* Search */}
        <div ref={searchRef} style={{ position: "relative" }}>
          {searchOpen ? (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <input
                autoFocus
                type="text"
                placeholder="Search movies, shows..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "8px",
                  padding: "7px 14px",
                  color: "white",
                  fontSize: "13px",
                  outline: "none",
                  width: "260px",
                  transition: "all 0.3s ease",
                }}
              />
              <button
                onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                style={{ background: "none", border: "none", color: "#aaa", cursor: "pointer", fontSize: "18px", padding: "4px" }}
              >
                <HiXMark />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              style={{
                background: "none",
                border: "none",
                color: "#aaaaaa",
                cursor: "pointer",
                fontSize: "20px",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#aaaaaa")}
            >
              <HiMagnifyingGlass />
            </button>
          )}

          {/* Search dropdown */}
          {searchQuery && searchOpen && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 10px)",
                right: 0,
                width: "320px",
                background: "#1a0533",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
                zIndex: 2000,
                animation: "fadeIn 0.25s ease",
              }}
            >
              {searchResults.length > 0 ? (
                searchResults.map(item => (
                  <div
                    key={item.id}
                    onClick={() => { openModal(item); setSearchOpen(false); setSearchQuery(""); }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "10px 14px",
                      cursor: "pointer",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(139,47,201,0.2)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                  >
                    <img
                      src={item.image || item.poster}
                      alt=""
                      style={{ width: "64px", aspectRatio: "16/9", objectFit: "cover", borderRadius: "6px" }}
                      onError={e => { e.target.style.display = "none"; }}
                    />
                    <div>
                      <div style={{ color: "white", fontSize: "13px", fontWeight: 700 }}>{item.title}</div>
                      <div style={{ color: "#aaa", fontSize: "11px", marginTop: "2px" }}>
                        {item.year} • ★ {item.rating}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ padding: "20px", textAlign: "center", color: "#aaa", fontSize: "13px" }}>
                  No results found
                </div>
              )}
            </div>
          )}
        </div>

        {/* Language */}
        <div
          style={{
            fontSize: "12px",
            fontWeight: 700,
            color: "#aaaaaa",
            cursor: "pointer",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={e => (e.currentTarget.style.color = "#aaa")}
        >
          English <span style={{ fontSize: "9px", opacity: 0.6 }}>▼</span>
        </div>

        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          style={{
            background: "none",
            border: "none",
            color: isDarkMode ? "white" : "#1a1d29",
            cursor: "pointer",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.8,
            transition: "all 0.3s ease"
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = 1}
          onMouseLeave={e => e.currentTarget.style.opacity = 0.8}
        >
          {isDarkMode ? <HiSun /> : <HiMoon />}
        </button>

        {/* Subscribe */}
        <button
          className="subscribe-btn"
          onClick={() => setShowPlansModal && setShowPlansModal(true)}
        >
          SUBSCRIBE
        </button>

        {/* Avatar */}
        <Link
          to="/profile"
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #8B2FC9, #6a1fa0)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: 900,
            fontSize: "11px",
            textDecoration: "none",
            border: "2px solid rgba(139,47,201,0.4)",
            transition: "transform 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          US
        </Link>
      </div>
    </header>
  );
}

export default Header;