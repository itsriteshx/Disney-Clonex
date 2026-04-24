import React from 'react';
import { useAppContext } from '../context/AppContext';

function MovieCard({ movie }) {
  const { openModal } = useAppContext();

  return (
    <div 
      onClick={() => openModal(movie)}
      className="relative flex-none w-[200px] aspect-[2/3] rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-110 hover:z-50 hover:shadow-[0_0_30px_rgba(22,104,220,0.5)] border-2 border-transparent hover:border-brand-blue group"
    >
      <img 
        src={movie.poster} 
        alt={movie.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h4 className="text-white font-bold text-sm mb-1 truncate">{movie.title}</h4>
        <div className="flex items-center gap-2">
          <span className="text-brand-gold text-xs font-bold">★ {movie.rating}</span>
          <span className="text-white/60 text-[10px] uppercase">{movie.brand}</span>
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 border border-white/5 group-hover:border-white/20 transition-all rounded-xl" />
    </div>
  );
}

export default MovieCard;
