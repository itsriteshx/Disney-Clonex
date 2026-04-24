import React, { useRef, useMemo } from "react";
import MovieCard from "./MovieCard";
import { movies } from "../data/movies";
import { useAppContext } from "../context/AppContext";

function MovieRow({ title, type, filterBrand }) {
  const rowRef = useRef(null);
  const { searchQuery, activeBrand } = useAppContext();

  const filteredMovies = useMemo(() => {
    return movies.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = activeBrand === 'all' ? true : movie.brand === activeBrand;
      const matchesCategory = filterBrand ? movie.brand === filterBrand : true;
      const matchesType = type ? movie.type === type : true;
      
      return matchesSearch && matchesBrand && matchesCategory && matchesType;
    });
  }, [searchQuery, activeBrand, filterBrand, type]);

  const scroll = (direction) => {
    const { current } = rowRef;
    const scrollAmount = direction === "left" ? -800 : 800;
    current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  if (filteredMovies.length === 0) return null;

  return (
    <div className="mb-12 relative group/row">
      <div className="flex justify-between items-center mb-6 px-2">
        <h3 className="text-white text-2xl font-bold tracking-widest font-heading uppercase">
          {title}
        </h3>
        <span className="text-brand-blue hover:text-white text-xs font-bold cursor-pointer transition-all uppercase tracking-tighter">
          View All
        </span>
      </div>

      <div className="relative group">
        {/* Navigation Arrows */}
        <button 
          onClick={() => scroll("left")}
          className="absolute left-[-20px] top-1/2 z-[60] -translate-y-1/2 bg-black/60 p-4 h-[70%] rounded-r-xl opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md border border-white/10 text-white font-bold text-2xl"
        >
          {"<"}
        </button>
        <button 
          onClick={() => scroll("right")}
          className="absolute right-[-20px] top-1/2 z-[60] -translate-y-1/2 bg-black/60 p-4 h-[70%] rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md border border-white/10 text-white font-bold text-2xl"
        >
          {">"}
        </button>

        <div
          ref={rowRef}
          className="flex overflow-x-scroll gap-6 pb-8 no-scrollbar scroll-smooth px-2"
        >
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieRow;
