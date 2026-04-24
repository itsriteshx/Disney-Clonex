import React from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const sidebarItems = [
  { icon: "🏠", title: "Home", path: "/home" },
  { icon: "🔍", title: "Search", path: "/home?search=true" },
  { icon: "📺", title: "TV", path: "/home?type=tv" },
  { icon: "🎞️", title: "Movies", path: "/home?type=movie" },
  { icon: "⚽", title: "Sports", path: "/home?type=sports" },
  { icon: "👤", title: "Profile", path: "/profile" },
];

function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-20 bg-brand-dark flex flex-col items-center py-10 z-[1001] gap-8 border-r border-white/5 backdrop-blur-md">
      <div className="text-3xl text-brand-gold mb-6 cursor-pointer hover:scale-110 transition-transform font-bold">
        D+
      </div>

      {sidebarItems.map((item) => (
        <NavLink
          key={item.title}
          to={item.path}
          className={({ isActive }) => 
            `group cursor-pointer flex flex-col items-center transition-all duration-300 p-2 w-full text-center relative ${
              isActive ? "bg-white/10" : "hover:bg-white/5"
            }`
          }
          title={item.title}
        >
          <span className="text-2xl text-white group-hover:scale-110 transition-all">
            {item.icon}
          </span>
          <span className="text-[10px] text-white/50 group-hover:text-white font-bold uppercase tracking-widest mt-1">
            {item.title}
          </span>
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue scale-y-0 group-hover:scale-y-100 transition-transform origin-center"></div>
        </NavLink>
      ))}
    </div>
  );
}

export default Sidebar;
