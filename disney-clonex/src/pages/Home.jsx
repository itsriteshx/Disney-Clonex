import { useState, useEffect } from "react";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import MovieRow from "../components/MovieRow";
import Footer from "../components/Footer";
import Modals from "../components/GlobalModal";
import { useAppContext } from "../context/AppContext";

function Home() {
  const [loading, setLoading] = useState(true);
  const { searchQuery } = useAppContext();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ background: "#0d0117", minHeight: "100vh", color: "white" }} className="page-transition">
      <Header />

      <main style={{ paddingTop: "72px" }}>
        {loading ? (
          <div style={{ padding: "0 4%", paddingTop: "20px" }}>
            <div style={{ width: "100%", height: "520px", background: "rgba(255,255,255,0.04)", borderRadius: "12px", animation: "pulse 1.5s infinite" }} />
            {[1, 2, 3].map(i => (
              <div key={i} style={{ marginTop: "40px" }}>
                <div style={{ width: "220px", height: "24px", background: "rgba(255,255,255,0.04)", borderRadius: "8px", marginBottom: "16px" }} />
                <div style={{ display: "flex", gap: "12px", overflow: "hidden" }}>
                  {[1,2,3,4,5,6].map(j => (
                    <div key={j} style={{ width: "220px", aspectRatio: "16/9", background: "rgba(255,255,255,0.04)", borderRadius: "8px", flexShrink: 0 }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {!searchQuery && <ImageSlider />}

            <div style={searchQuery ? { paddingTop: "20px" } : {}}>

              {searchQuery ? (
                <MovieRow title={`Results for "${searchQuery}"`} />
              ) : (
                <>
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
                </>
              )}
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