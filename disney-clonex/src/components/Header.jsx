import React from "react";

function Header() {
  const navItems = [
    { title: "HOME", icon: "🏠" },
    { title: "SEARCH", icon: "🔍" },
    { title: "WATCHLIST", icon: "➕" },
    { title: "ORIGINALS", icon: "⭐" },
    { title: "MOVIES", icon: "🎬" },
    { title: "SERIES", icon: "📺" },
  ];

  return (
    <header
      style={{
        background: "#090b13",
        height: "70px",
        display: "flex",
        alignItems: "center",
        padding: "0 36px",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
        <h2 style={{ color: "white", margin: 0, fontSize: "24px", letterSpacing: "1.5px" }}>
          DISNEY+
        </h2>
        <nav style={{ display: "flex", gap: "25px" }}>
          {navItems.map((item) => (
            <div
              key={item.title}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                padding: "0 10px",
              }}
              onMouseOver={(e) => (e.currentTarget.style.borderBottom = "2px solid white")}
              onMouseOut={(e) => (e.currentTarget.style.borderBottom = "none")}
            >
              <span style={{ fontSize: "14px" }}>{item.icon}</span>
              <span
                style={{
                  color: "white",
                  fontSize: "13px",
                  letterSpacing: "1.42px",
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </span>
            </div>
          ))}
        </nav>
      </div>
      <img
        src="https://picsum.photos/40/40?random=102"
        alt="user"
        style={{ borderRadius: "50%", cursor: "pointer", border: "1px solid rgba(255,255,255,0.2)" }}
      />
    </header>
  );
}

export default Header;