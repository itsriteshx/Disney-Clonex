import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";
import { movies } from "../data/movies";

function Header() {
  const { searchQuery, setSearchQuery, openModal } = useAppContext();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchExpanded(false);
        if (!searchQuery) setSearchExpanded(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchQuery]);

  const navItems = [
    { title: "Home", path: "/home" },
    { title: "TV", path: "/home?type=tv" },
    { title: "Movies", path: "/home?type=movie" },
    { title: "Sports", path: "/sports" },
    { title: "Premium", path: "/premium" },
  ];

  const searchResults = searchQuery 
    ? movies.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5)
    : [];

  return (
    <header 
      className={`fixed top-0 w-full h-[80px] flex items-center justify-between px-[4%] z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-2xl' : 'bg-gradient-to-b from-brand-dark to-transparent'
      }`}
    >
      <div className="flex items-center gap-10">
        <Link to="/home" className="flex items-center gap-1.5 cursor-pointer">
          <AiFillStar className="text-brand-gold text-[28px]" />
          <span className="text-[30px] font-black tracking-tighter text-white">hotstar</span>
        </Link>
        
        <nav className="flex gap-8 ml-4">
          {navItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) => 
                `text-sm font-extrabold uppercase tracking-widest transition-all duration-300 relative h-[80px] flex items-center ${
                  isActive || (item.path === '/home' && location.pathname === '/home' && !location.search)
                  ? 'text-white border-b-[3px] border-brand-purple' 
                  : 'text-text-gray hover:text-white'
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-8">
        <div ref={searchRef} className={`relative flex items-center transition-all duration-500 ${searchExpanded || searchQuery ? 'w-80' : 'w-40'}`}>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onFocus={() => setSearchExpanded(true)}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-b border-white/20 px-1 py-1.5 text-white outline-none w-full text-sm placeholder:text-text-gray focus:border-brand-purple transition-colors"
          />
          <HiMagnifyingGlass className={`absolute right-0 text-lg transition-colors ${searchExpanded || searchQuery ? 'text-brand-purple' : 'text-text-gray'}`} />
          
          {/* Search Results Dropdown */}
          {searchQuery && searchExpanded && (
            <div className="absolute top-[100%] left-0 w-full bg-brand-dark border border-white/10 rounded-xl mt-2 shadow-2xl overflow-hidden animate-fade-in z-[110]">
              {searchResults.length > 0 ? (
                searchResults.map((movie) => (
                  <div 
                    key={movie.id} 
                    onClick={() => { openModal(movie); setSearchExpanded(false); setSearchQuery(""); }}
                    className="flex items-center gap-4 p-3 hover:bg-white/5 cursor-pointer transition-colors border-b border-white/5 last:border-none"
                  >
                    <img src={movie.backdrop || movie.poster} alt="" className="w-16 aspect-video object-cover rounded-md" />
                    <div>
                      <h4 className="text-white text-xs font-bold truncate">{movie.title}</h4>
                      <p className="text-text-gray text-[10px] font-medium">{movie.year} • {movie.rating} ★</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-text-gray text-xs">No results found</div>
              )}
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-1 text-xs font-bold text-text-gray cursor-pointer hover:text-white uppercase tracking-widest">
          English <span className="text-[10px] opacity-50">▼</span>
        </div>

        <button className="subscribe-btn">SUBSCRIBE</button>
        
        <Link to="/profile" className="w-9 h-9 rounded-full bg-brand-purple/20 flex items-center justify-center border border-brand-purple/30 text-white font-black text-xs cursor-pointer hover:scale-105 transition-all">
          US
        </Link>
      </div>
    </header>
  );
}

export default Header;