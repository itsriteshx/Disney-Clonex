import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ImageSlider from "../components/ImageSlider";
import ProductionHouses from "../components/ProductionHouses";
import MovieRow from "../components/MovieRow";
import Footer from "../components/Footer";
import GlobalModal from "../components/GlobalModal";
import { useAppContext } from "../context/AppContext";

function Home() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { searchQuery, setActiveBrand } = useAppContext();
  
  const searchParams = new URLSearchParams(location.search);
  const typeFilter = searchParams.get('type');
  const isSearching = searchParams.get('search') === 'true';

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Reset brand filter when navigating to specific types
  useEffect(() => {
    if (typeFilter || isSearching) {
      // Keep search or type as is, but maybe reset brand if it conflicts
    }
  }, [typeFilter, isSearching]);

  return (
    <div className="bg-brand-dark min-h-screen relative flex font-body selection:bg-brand-blue selection:text-white">
      <Sidebar />
      <div className="flex-1 ml-20">
        <Header />
        <main className="px-10 py-6 max-w-[1600px] mx-auto">
          {loading ? (
            <div className="space-y-10 animate-pulse">
              <div className="w-full h-[550px] bg-white/5 rounded-3xl"></div>
              <div className="grid grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-40 bg-white/5 rounded-2xl"></div>
                ))}
              </div>
              <div className="space-y-6">
                <div className="w-64 h-10 bg-white/5 rounded-lg"></div>
                <div className="flex gap-6 overflow-hidden">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="min-w-[200px] aspect-[2/3] bg-white/5 rounded-2xl"></div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-12 pb-20">
              {/* Only show slider and brands if not searching specifically */}
              {!searchQuery && !typeFilter && (
                <>
                  <ImageSlider />
                  <ProductionHouses />
                </>
              )}

              {/* Dynamic Rows based on state */}
              {searchQuery && (
                <MovieRow title={`Results for "${searchQuery}"`} />
              )}

              {(!searchQuery || typeFilter === 'movie') && (
                <MovieRow title="Latest & Trending Movies" type="movie" />
              )}
              
              {(!searchQuery || typeFilter === 'tv') && (
                <MovieRow title="Popular TV Shows" type="tv" />
              )}

              {!searchQuery && !typeFilter && (
                <>
                  <MovieRow title="Disney+ Originals" filterBrand="disney" />
                  <MovieRow title="Marvel Universe" filterBrand="marvel" />
                  <MovieRow title="Pixar Animation" filterBrand="pixar" />
                  <MovieRow title="Star Wars Saga" filterBrand="starwars" />
                </>
              )}
            </div>
          )}
          <Footer />
        </main>
      </div>
      <GlobalModal />
    </div>
  );
}

export default Home;