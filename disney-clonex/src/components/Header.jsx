import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useTheme } from "../context/ThemeContext";
import { HiMagnifyingGlass, HiXMark, HiSun, HiMoon, HiBars3 } from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";
import { movies, sports } from "../data/movies";
const allContent = [...movies, ...sports];
function Header() {
  const { searchQuery, setSearchQuery, openModal, setShowPlansModal, language, setLanguage, t } = useAppContext();
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const searchRef = useRef(null);
  const langRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
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
    { title: t("home"),    path: "/home" },
    { title: t("tv"),      path: "/tv" },
    { title: t("movies"),  path: "/movies" },
    { title: t("sports"),  path: "/sports" },
    { title: t("premium"), path: "/premium" },
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
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(true)}
          style={{
            background: "none",
            border: "none",
            color: isDarkMode ? "white" : "#1a1d29",
            fontSize: "24px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center"
          }}
        >
          <HiBars3 />
        </button>
        <Link
          to="/home"
          style={{ display: "flex", alignItems: "center", gap: "6px", textDecoration: "none" }}
        >
          <AiFillStar className="hidden md:block" style={{ color: "#f5a623", fontSize: "26px" }} />
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
        <nav className="hidden md:flex" style={{ gap: "28px", marginLeft: "20px" }}>
          {navItems.map(item => (
            <NavLink
              key={item.path}
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
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div ref={searchRef} style={{ position: "relative" }}>
          {searchOpen ? (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <input
                autoFocus
                type="text"
                placeholder={t("searchPlaceholder")}
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  if (e.target.value) {
                    navigate(`/search?q=${encodeURIComponent(e.target.value)}`);
                  }
                }}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "8px",
                  padding: "7px 14px",
                  color: isDarkMode ? "white" : "#000",
                  fontSize: "13px",
                  outline: "none",
                  width: "200px",
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
        </div>
        <div ref={langRef} style={{ position: "relative" }} className="hidden md:block">
          <div
            onClick={() => setLangOpen(!langOpen)}
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "#aaaaaa",
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "color 0.2s",
              padding: "4px 0",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = langOpen ? "#fff" : "#aaa")}
          >
            {language} 
            <span style={{ 
              fontSize: "10px", 
              opacity: 0.8,
              transform: langOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease"
            }}>
              ▼
            </span>
          </div>
          {langOpen && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 14px)",
                right: "-20px",
                width: "140px",
                background: isDarkMode ? "#1a0533" : "#ffffff",
                border: isDarkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: isDarkMode ? "0 20px 60px rgba(0,0,0,0.7)" : "0 10px 30px rgba(0,0,0,0.1)",
                zIndex: 2000,
                animation: "fadeIn 0.2s ease",
              }}
            >
              {["English", "Hindi"].map(lang => (
                <div
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    setLangOpen(false);
                  }}
                  style={{
                    padding: "12px 16px",
                    color: isDarkMode ? "white" : "#000",
                    fontSize: "13px",
                    fontWeight: language === lang ? 800 : 500,
                    cursor: "pointer",
                    borderBottom: isDarkMode ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.05)",
                    transition: "background 0.2s",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = isDarkMode ? "rgba(139,47,201,0.2)" : "rgba(139,47,201,0.1)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  {lang}
                  {language === lang && <span style={{ color: "#8B2FC9", fontSize: "14px" }}>✓</span>}
                </div>
              ))}
            </div>
          )}
        </div>
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
        <button
          className="subscribe-btn hidden md:block"
          onClick={() => setShowPlansModal && setShowPlansModal(true)}
        >
          {t("subscribe")}
        </button>
        <Link
          to="/watchlist"
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
            flexShrink: 0
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          {t("watchlist").substring(0, 2).toUpperCase()}
        </Link>
      </div>
      <div 
        className="md:hidden"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "250px",
          height: "100vh",
          background: isDarkMode ? "#0d0117" : "#f5f5f7",
          zIndex: 2000,
          transform: mobileMenuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease",
          boxShadow: mobileMenuOpen ? "4px 0 24px rgba(0,0,0,0.5)" : "none",
          padding: "24px"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
          <span style={{ fontSize: "20px", fontWeight: 900, color: isDarkMode ? "white" : "#000" }}>hotstar</span>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            style={{ background: "none", border: "none", color: isDarkMode ? "white" : "#1a1d29", fontSize: "24px" }}
          >
            <HiXMark />
          </button>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {navItems.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive 
                  ? (isDarkMode ? "white" : "#000") 
                  : (isDarkMode ? "#aaaaaa" : "#666"),
                fontWeight: isActive ? 800 : 600,
                fontSize: "18px"
              })}
            >
              {link.title}
            </NavLink>
          ))}
          <NavLink
            to="/watchlist"
            onClick={() => setMobileMenuOpen(false)}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive 
                ? (isDarkMode ? "white" : "#000") 
                : (isDarkMode ? "#aaaaaa" : "#666"),
              fontWeight: isActive ? 800 : 600,
              fontSize: "18px"
            })}
          >
            {t("watchlist")}
          </NavLink>
        </nav>
        <button
          className="subscribe-btn"
          style={{ width: "100%", marginTop: "32px" }}
          onClick={() => {
            setMobileMenuOpen(false);
            if (setShowPlansModal) setShowPlansModal(true);
          }}
        >
          {t("subscribeNow")}
        </button>
      </div>
      {mobileMenuOpen && (
        <div 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            zIndex: 1500
          }}
        />
      )}
    </header>
  );
}
export default Header;