import React, { useRef, useState, useEffect } from "react";
import { movies as allMovies } from "../data/movies";
import MovieCard from "./MovieCard";
import { useAppContext } from "../context/AppContext";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

function MovieRow({ title, type, filterBrand, movies: propMovies }) {
  const rowRef = useRef(null);
  const { searchQuery } = useAppContext();
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth * 0.8 : scrollLeft + clientWidth * 0.8;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      setShowLeft(scrollLeft > 20);
      setShowRight(scrollLeft < (scrollWidth - clientWidth - 20));
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  const displayMovies = propMovies || allMovies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = !type || movie.type === type;
    const matchesBrand = !filterBrand || movie.brand === filterBrand;
    return matchesSearch && matchesType && matchesBrand;
  });

  if (displayMovies.length === 0) return null;

  return (
    <div className="relative group/row py-6 px-[4%]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[22px] font-black text-white tracking-tight">
          {title}
        </h2>
        <a href="#" className="text-brand-purple text-xs font-black uppercase tracking-widest hover:brightness-125 transition-all">
          See All <span className="ml-1">→</span>
        </a>
      </div>
      
      <div className="relative overflow-visible">
        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-50 bg-black/60 hover:bg-black text-white w-10 h-16 rounded-md flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-all duration-300 backdrop-blur-md border border-white/5"
          >
            <HiChevronLeft className="text-3xl" />
          </button>
        )}
        
        <div
          ref={rowRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth py-2"
        >
          {displayMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {showRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-50 bg-black/60 hover:bg-black text-white w-10 h-16 rounded-md flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-all duration-300 backdrop-blur-md border border-white/5"
          >
            <HiChevronRight className="text-3xl" />
          </button>
        )}
      </div>
    </div>
  );
}

export default MovieRow;
