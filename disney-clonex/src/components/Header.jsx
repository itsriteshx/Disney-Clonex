import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function Header() {
  const { searchQuery, setSearchQuery } = useAppContext();
  const location = useLocation();
  const isSearchActive = new URLSearchParams(location.search).get('search') === 'true';

  const navItems = [
    { title: "TV", icon: "📺", path: "/home?type=tv" },
    { title: "Movies", icon: "🎬", path: "/home?type=movie" },
    { title: "Sports", icon: "⚽", path: "/home?type=sports" },
    { title: "Originals", icon: "⭐", path: "/home?type=originals" },
  ];

  return (
    <header className="sticky top-0 h-20 flex items-center px-10 justify-between z-[1000] backdrop-blur-md bg-brand-dark/80">
      <div className="flex items-center gap-12">
        <Link to="/home" className="text-white text-3xl font-bold tracking-tight cursor-pointer">
          Disney+ <span className="text-brand-gold italic">hotstar</span>
        </Link>
        <nav className="hidden lg:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="text-white/70 hover:text-white text-base font-bold uppercase tracking-widest cursor-pointer transition-all duration-300 relative group"
            >
              {item.title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-8">
        <div className={`relative flex items-center transition-all duration-500 ${isSearchActive ? 'w-80' : 'w-48'}`}>
          <input
            type="text"
            placeholder="Search movies, shows and more"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-white/5 border-b border-white/10 px-10 py-2.5 rounded-lg text-white outline-none focus:border-brand-blue transition-all duration-300 w-full text-sm placeholder:text-white/30"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">🔍</span>
        </div>
        <button className="bg-brand-blue hover:scale-105 active:scale-95 text-white px-6 py-2.5 rounded-lg font-bold text-xs tracking-widest transition-all shadow-lg shadow-brand-blue/20">
          SUBSCRIBE
        </button>
      </div>
    </header>
  );
}

export default Header;