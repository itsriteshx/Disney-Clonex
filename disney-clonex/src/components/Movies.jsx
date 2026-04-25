import { useState, useEffect } from "react";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import MovieRow from "./MovieRow";
import Footer from "./Footer";
import Modals from "./GlobalModal";
import { useAppContext } from "../context/AppContext";
import { movies } from "../data/movies";

const GENRES = ["All", "Action", "Comedy", "Drama", "Horror", "Sci-Fi"];

function Movies() {
  const [loading, setLoading] = useState(true);
  const [activeGenre, setActiveGenre] = useState("All");
  const { searchQuery, t } = useAppContext();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const filtered = activeGenre === "All"
    ? movies.filter(m => m.type === "movie")
    : movies.filter(m => m.type === "movie" && (m.genre || "").toLowerCase().includes(activeGenre.toLowerCase()));

  return (
    <div style={{ background: "#0d0117", minHeight: "100vh", color: "white" }} className="page-transition">
      <Header />

      <main style={{ paddingTop: "72px" }}>
        {!searchQuery && <ImageSlider />}

        <div style={{ padding: "28px 4% 0" }}>
          {/* Genre filter tabs */}
          {!searchQuery && (
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "8px" }}>
              {GENRES.map(g => (
                <button
                  key={g}
                  onClick={() => setActiveGenre(g)}
                  className={`filter-tab ${activeGenre === g ? "active" : ""}`}
                >
                  {g}
                </button>
              ))}
            </div>
          )}
        </div>

        {loading ? (
          <div style={{ padding: "20px 4%" }}>
            {[1, 2].map(i => (
              <div key={i} style={{ marginBottom: "40px" }}>
                <div style={{ width: "220px", height: "24px", background: "rgba(255,255,255,0.04)", borderRadius: "8px", marginBottom: "16px" }} />
                <div style={{ display: "flex", gap: "12px", overflow: "hidden" }}>
                  {[1,2,3,4,5].map(j => (
                    <div key={j} style={{ width: "220px", aspectRatio: "16/9", background: "rgba(255,255,255,0.04)", borderRadius: "8px", flexShrink: 0 }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          searchQuery ? (
            <MovieRow title={t("resultsFor", { query: searchQuery })} />
          ) : activeGenre === "All" ? (
            <>
              <MovieRow title={t("newReleases")} type="movie" />
              <MovieRow title={t("blockbusterAction")} filterBrand="marvel" />
              <MovieRow title={t("internationalMovies")} filterBrand="international" />
            </>
          ) : (
            <MovieRow
              title={t("genreMovies", { genre: activeGenre })}
              movies={filtered}
            />
          )
        )}

        <Footer />
      </main>

      <Modals />
    </div>
  );
}

export default Movies;
