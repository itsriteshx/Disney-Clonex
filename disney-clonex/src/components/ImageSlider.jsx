import React, { useState, useEffect } from "react";
import { movies } from "../data/movies";
import { useAppContext } from "../context/AppContext";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { openModal } = useAppContext();
  
  // Only use 4 featured movies for the slider
  const featuredMovies = movies.slice(0, 4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === featuredMovies.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredMovies.length]);

  return (
    <div className="relative w-full h-[550px] overflow-hidden rounded-2xl shadow-2xl mb-12 group">
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {featuredMovies.map((movie, index) => (
          <div key={movie.id} className="min-w-full h-full relative">
            <img
              src={movie.backdrop}
              alt={movie.title}
              className="w-full h-full object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-[5s]"
            />
            {/* Content overlay */}
            <div className="absolute bottom-16 left-16 z-10 text-left max-w-2xl animate-fade-in-up">
              <h2 className="text-7xl font-bold text-white mb-6 drop-shadow-2xl font-heading tracking-wider">
                {movie.title}
              </h2>
              <p className="text-white/90 text-lg mb-8 line-clamp-3 font-body leading-relaxed drop-shadow-lg">
                {movie.description}
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => openModal(movie, 'trailer')}
                  className="bg-white text-brand-dark hover:bg-brand-gold hover:text-brand-dark px-10 py-4 rounded-xl font-bold transition-all flex items-center gap-3 shadow-xl hover:shadow-brand-gold/20"
                >
                  <span className="text-xl">▶</span> WATCH NOW
                </button>
                <button 
                  onClick={() => openModal(movie, 'detail')}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/20 px-10 py-4 rounded-xl font-bold transition-all"
                >
                  DETAILS
                </button>
              </div>
            </div>
            {/* Animated Gradient shadow */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
          </div>
        ))}
      </div>
      
      {/* Dots */}
      <div className="absolute bottom-10 right-16 flex gap-3 z-20">
        {featuredMovies.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? "bg-brand-gold w-12" : "bg-white/20 w-4 hover:bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;

export default ImageSlider;