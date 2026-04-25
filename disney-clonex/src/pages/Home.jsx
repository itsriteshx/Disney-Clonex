import { useState, useEffect } from "react";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import MovieRow from "../components/MovieRow";
import Footer from "../components/Footer";
import Modals from "../components/GlobalModal";
import { SkeletonHero, SkeletonCard } from "../components/Skeleton";
import { useAppContext } from "../context/AppContext";

function Home() {
  const { searchQuery } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate network delay for skeleton loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5s delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ background: "#0d0117", minHeight: "100vh", color: "white" }} className="page-transition">
      <Header />

      <main style={{ paddingTop: "72px" }}>
        {isLoading ? (
          <div className="pt-20">
            <SkeletonHero />
            <div className="px-10 mt-8 mb-6 text-xl font-bold">🔴 Live & Upcoming</div>
            <div className="px-10 flex gap-4 overflow-hidden mb-12">
              {[1, 2, 3, 4, 5, 6].map((i) => <SkeletonCard key={i} />)}
            </div>
            <div className="px-10 mb-6 text-xl font-bold">🎬 Featured Today</div>
            <div className="px-10 flex gap-4 overflow-hidden">
              {[1, 2, 3, 4, 5, 6].map((i) => <SkeletonCard key={i} />)}
            </div>
          </div>
        ) : (
          <>
            {!searchQuery && <ImageSlider />}

            <div style={{ paddingTop: "20px" }}>
              {/* 🔴 Live & Upcoming */}
              <MovieRow title="🔴 Live & Upcoming" type="sports" />

              {/* 🎬 Featured Today */}
              <MovieRow title="🎬 Featured Today" type="movie" filterBrand="marvel" />

              {/* ⭐ Hotstar Specials */}
              <MovieRow title="⭐ Hotstar Specials" filterBrand="hotstar" />

              {/* 🎯 Top Picks For You */}
              <MovieRow title="🎯 Top Picks For You" type="movie" />

              {/* 🎥 Bollywood Hits */}
              <MovieRow title="🎥 Bollywood Hits" filterBrand="bollywood" />

              {/* 🏆 Sports */}
              <MovieRow title="🏆 Sports" type="sports" />

              {/* 🌍 International */}
              <MovieRow title="🌍 International" filterBrand="international" />
            </div>
          </>
        )}

        <Footer />
      </main>

      <Modals />
    </div>
  );
}

export default Home;