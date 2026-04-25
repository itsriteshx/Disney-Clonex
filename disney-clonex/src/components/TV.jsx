import { useState, useEffect } from "react";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import MovieRow from "./MovieRow";
import Footer from "./Footer";
import Modals from "./GlobalModal";
import { useAppContext } from "../context/AppContext";

function TV() {
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
        {!searchQuery && <ImageSlider />}

        {loading ? (
          <div style={{ padding: "40px 4%" }}>
            {[1, 2, 3].map(i => (
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
            <MovieRow title={`Results for "${searchQuery}"`} />
          ) : (
            <>
              <MovieRow title="Popular Shows" type="tv" />
              <MovieRow title="Hotstar Specials" filterBrand="hotstar" />
              <MovieRow title="Drama Series" type="tv" />
              <MovieRow title="Reality &amp; Comedy" type="tv" />
            </>
          )
        )}

        <Footer />
      </main>

      <Modals />
    </div>
  );
}

export default TV;
