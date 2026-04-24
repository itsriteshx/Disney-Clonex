import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { HiPlay, HiPlus, HiCheck } from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";

function MovieCard({ movie }) {
  const { openModal, toggleWatchlist, watchlist } = useAppContext();
  const [imgError, setImgError] = useState(false);
  const isWatched = watchlist.find(m => m.id === movie.id);

  return (
    <div className="relative flex-none w-[220px] h-[124px] rounded-lg overflow-visible cursor-pointer group transition-all duration-300 hover:scale-[1.08] hover:z-[100] bg-brand-dark">
      {/* Card Body */}
      <div 
        onClick={() => openModal(movie)}
        className="relative w-full h-full rounded-lg overflow-hidden border border-white/5 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300"
      >
        {imgError ? (
          <div className="w-full h-full bg-gradient-to-br from-[#1a0533] to-[#0d0117] flex flex-col items-center justify-center p-3 text-center">
            <AiFillStar className="text-brand-gold text-2xl mb-1" />
            <span className="text-[10px] font-black text-white uppercase tracking-tighter line-clamp-1">{movie.title}</span>
          </div>
        ) : (
          <img 
            src={movie.backdrop || movie.poster} 
            alt={movie.title} 
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        
        {/* Badges */}
        {movie.isLive && (
          <div className="absolute top-2 left-2 bg-[#ff0000] text-white text-[8px] font-black px-1.5 py-0.5 rounded-sm animate-blink z-10">
            LIVE
          </div>
        )}
        {movie.isNew && (
          <div className="absolute top-2 left-2 bg-[#22c55e] text-white text-[8px] font-black px-1.5 py-0.5 rounded-sm z-10">
            NEW
          </div>
        )}
        {movie.brand === 'hotstar' && (
          <div className="absolute bottom-2 left-2 bg-brand-purple text-white text-[7px] font-black px-1 py-0.5 rounded-sm z-10 tracking-widest">
            HOTSTAR
          </div>
        )}
      </div>

      {/* Hover Info Overlay */}
      <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
        <div 
          onClick={() => openModal(movie)}
          className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent flex flex-col justify-end p-3 rounded-lg"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-black shadow-xl">
              <HiPlay className="text-xl translate-x-0.5" />
            </div>
            <button 
              onClick={(e) => { e.stopPropagation(); toggleWatchlist(movie); }}
              className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-all"
            >
              {isWatched ? <HiCheck className="text-lg" /> : <HiPlus className="text-lg" />}
            </button>
          </div>
          
          <h4 className="text-white font-black text-xs mb-0.5 line-clamp-1">{movie.title}</h4>
          <div className="flex items-center gap-1.5 text-[9px] font-bold text-text-gray">
            <span>{movie.year || "2024"}</span>
            <span>•</span>
            <span className="flex items-center gap-0.5 text-brand-gold"><AiFillStar /> {movie.rating}</span>
            <span>•</span>
            <span>2h 15m</span>
          </div>
          <div className="text-[8px] font-extrabold text-white/40 uppercase mt-0.5 tracking-wider">
            {movie.genre || "Action • Drama"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
