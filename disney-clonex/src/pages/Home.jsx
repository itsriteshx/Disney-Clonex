import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import MovieRow from "../components/MovieRow";
import Footer from "../components/Footer";
import GlobalModal from "../components/GlobalModal";
import { useAppContext } from "../context/AppContext";

function Home() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { searchQuery } = useAppContext();
  
  const searchParams = new URLSearchParams(location.search);
  const typeFilter = searchParams.get('type');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const movieFilters = ["All", "Action", "Comedy", "Drama", "Thriller", "Romance"];

  return (
    <div className="bg-brand-dark min-h-screen relative font-body selection:bg-brand-purple selection:text-white page-transition">
      <Header />
      
      <main className="pt-0">
        {loading ? (
          <div className="space-y-12 animate-pulse px-[4%] pt-28">
            <div className="w-full h-[520px] bg-white/5 rounded-xl"></div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-6">
                <div className="w-64 h-8 bg-white/5 rounded-lg"></div>
                <div className="flex gap-4 overflow-hidden">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <div key={j} className="min-w-[220px] h-[124px] bg-white/5 rounded-lg"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {!searchQuery && <ImageSlider />}

            <div className={`pb-20 ${searchQuery ? 'pt-28' : 'pt-4'}`}>
              {searchQuery && (
                <MovieRow title={`Results for "${searchQuery}"`} />
              )}

              {/* Home Page Layout */}
              {!typeFilter && !searchQuery && (
                <>
                  <MovieRow title="Live & Upcoming" type="sports" />
                  <MovieRow title="Featured Today" type="movie" />
                  <MovieRow title="Hotstar Specials" filterBrand="hotstar" />
                  <MovieRow title="Top Picks For You" type="movie" />
                  <MovieRow title="Hotstar Multi" filterBrand="pixar" />
                  <MovieRow title="Sports" type="sports" />
                  <MovieRow title="International" filterBrand="international" />
                </>
              )}

              {/* TV Page Layout */}
              {typeFilter === 'tv' && !searchQuery && (
                <>
                  <MovieRow title="Popular Shows" type="tv" />
                  <MovieRow title="Reality TV" type="tv" />
                  <MovieRow title="Drama" type="tv" />
                  <MovieRow title="Comedy" type="tv" />
                </>
              )}

              {/* Movies Page Layout */}
              {typeFilter === 'movie' && !searchQuery && (
                <>
                  <div className="px-[4%] flex gap-4 mb-8 overflow-x-auto no-scrollbar">
                    {movieFilters.map(filter => (
                      <button 
                        key={filter}
                        className={`px-8 py-2.5 rounded-full font-black text-xs uppercase tracking-widest transition-all ${
                          filter === 'All' ? 'bg-white text-black' : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                  <MovieRow title="New Releases" type="movie" />
                  <MovieRow title="Blockbuster Action" type="movie" />
                  <MovieRow title="Comedy Hits" type="movie" />
                  <MovieRow title="Must-Watch Thrillers" type="movie" />
                </>
              )}
            </div>
          </div>
        )}
        <Footer />
      </main>
      
      <GlobalModal />
    </div>
  );
}

export default Home;