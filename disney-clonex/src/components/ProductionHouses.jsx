import React from "react";
import { brands } from "../data/movies";
import { useAppContext } from "../context/AppContext";

function ProductionHouses() {
  const { activeBrand, setActiveBrand } = useAppContext();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
      {brands.map((brand) => (
        <div
          key={brand.id}
          onClick={() => setActiveBrand(activeBrand === brand.id ? 'all' : brand.id)}
          className={`relative h-40 border-2 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 overflow-hidden group ${
            activeBrand === brand.id 
              ? "border-brand-blue bg-white/10 shadow-[0_0_40px_rgba(22,104,220,0.3)] scale-105" 
              : "border-white/10 bg-gradient-to-b from-white/5 to-transparent hover:scale-105 hover:border-white/30"
          }`}
        >
          <img 
            src={brand.logo} 
            alt={brand.name} 
            className="w-3/4 h-3/4 object-contain z-10 group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Video hover effect placeholder or just glow */}
          <div className={`absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent transition-opacity duration-500 ${activeBrand === brand.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
          
          {/* Subtle glow border */}
          <div className="absolute inset-0 border border-white/5 rounded-2xl group-hover:border-white/20 transition-all" />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouses;
