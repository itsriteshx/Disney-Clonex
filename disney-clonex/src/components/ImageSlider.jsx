import React, { useState, useEffect } from "react";
import { movies } from "../data/movies";
import { useAppContext } from "../context/AppContext";
import { HiPlay, HiPlus, HiCheck } from "react-icons/hi2";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { openModal, toggleWatchlist, watchlist } = useAppContext();
  
  const featuredMovies = movies.filter(m => m.id <= 5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === featuredMovies.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredMovies.length]);

  return (
    <section className="relative w-full h-[520px] overflow-hidden bg-black mt-0">
      {featuredMovies.map((movie, index) => {
        const isWatched = watchlist.find(m => m.id === movie.id);
        const isActive = index === currentIndex;
        
        return (
          <div 
            key={movie.id} 
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {/* Background Image */}
            <img
              src={movie.backdrop}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent z-[5]" style={{ background: 'linear-gradient(to right, rgba(13,1,23,1) 30%, transparent 100%)' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-[5]" />
            
            {/* Content Container */}
            <div className="absolute inset-0 z-10 flex items-center px-[4%]">
              <div className="max-w-[650px] animate-fade-in">
                <div className="text-text-gray font-extrabold text-sm uppercase tracking-widest mb-4">
                  {movie.genre || "Action • Adventure"}
                </div>
                <h1 className="text-[56px] font-black text-white leading-[1.1] mb-6 tracking-tighter">
                  {movie.title}
                </h1>
                <div className="flex items-center gap-4 mb-8 text-white/50 font-bold">
                  <span className="bg-white/10 px-2.5 py-0.5 rounded text-xs text-white border border-white/20">U/A 16+</span>
                  <span>{movie.year || "2024"}</span>
                  <span>•</span>
                  <span>2h 15m</span>
                  <span className="flex items-center gap-1 text-brand-gold ml-2">★ {movie.rating}</span>
                </div>
                <p className="text-lg text-text-gray font-medium mb-10 leading-relaxed line-clamp-3">
                  {movie.description}
                </p>
                <div className="flex items-center gap-5">
                  <button 
                    onClick={() => openModal(movie, 'trailer')}
                    className="flex items-center gap-3 bg-white text-black px-10 py-4 rounded-xl font-black text-lg hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
                  >
                    <HiPlay className="text-3xl" /> WATCH NOW
                  </button>
                  <button 
                    onClick={() => toggleWatchlist(movie)}
                    className={`flex items-center gap-3 px-10 py-4 rounded-xl font-black text-lg transition-all border-2 active:scale-95 ${
                      isWatched 
                      ? "bg-brand-purple/20 border-brand-purple text-brand-purple" 
                      : "bg-transparent border-white/30 text-white hover:bg-white/5"
                    }`}
                  >
                    {isWatched ? <HiCheck className="text-2xl" /> : <HiPlus className="text-2xl" />}
                    {isWatched ? "WATCHLIST" : "WATCHLIST"}
                  </button>
                </div>
              </div>

              {/* Floating Thumbnails on Right */}
              <div className="hidden lg:flex flex-col gap-4 ml-auto self-end pb-20">
                {featuredMovies.map((m, i) => (
                  <div 
                    key={m.id}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-[120px] aspect-video rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-500 hover:scale-110 ${
                      i === currentIndex ? 'border-brand-purple scale-110 shadow-lg shadow-brand-purple/20' : 'border-transparent opacity-40 hover:opacity-80'
                    }`}
                  >
                    <img src={m.backdrop} alt={m.title} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
      
      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-[4%] flex gap-2 z-20">
        {featuredMovies.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? "bg-white w-10" : "bg-white/20 w-4 hover:bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}

export default ImageSlider;