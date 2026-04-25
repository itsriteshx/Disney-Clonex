import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Header from "./Header";
import Footer from "./Footer";
import MovieCard from "./MovieCard";
import Modals from "./GlobalModal";
import { movies, sports } from "../data/movies";

const allContent = [...movies, ...sports];

function Search() {
  const { searchQuery, setSearchQuery, t } = useAppContext();
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Sync global search query with URL param when URL changes
  useEffect(() => {
    const q = searchParams.get("q");
    if (q !== null && q !== searchQuery) {
      setSearchQuery(q);
    }
  }, [searchParams, setSearchQuery]);

  // Filter based on search query
  const results = searchQuery
    ? allContent.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div style={{ background: "#0d0117", minHeight: "100vh", color: "white" }} className="page-transition">
      <Header />
      
      <main style={{ paddingTop: "120px", paddingBottom: "60px", paddingLeft: "4%", paddingRight: "4%", minHeight: "calc(100vh - 80px)" }}>
        {searchQuery ? (
          <>
            <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px" }}>
              {t("resultsFor", { query: searchQuery })}
            </h1>
            
            {results.length > 0 ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                  gap: "20px",
                }}
              >
                {results.map((item) => (
                  <MovieCard key={item.id} movie={item} />
                ))}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "60px 0", color: "#888", fontSize: "18px" }}>
                {t("noResults", { query: searchQuery })}
              </div>
            )}
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#888", fontSize: "18px" }}>
            {t("startTyping")}
          </div>
        )}
      </main>

      <Footer />
      <Modals />
    </div>
  );
}

export default Search;
