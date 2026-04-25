import React from "react";
import { useAppContext } from "../context/AppContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import Modals from "../components/GlobalModal";
import { movies, sports } from "../data/movies";

const allContent = [...movies, ...sports];

function Search() {
  const { searchQuery } = useAppContext();

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
              Results for "{searchQuery}"
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
                No results found for "{searchQuery}". Try a different term.
              </div>
            )}
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#888", fontSize: "18px" }}>
            Start typing in the search bar above to find movies and shows!
          </div>
        )}
      </main>

      <Footer />
      <Modals />
    </div>
  );
}

export default Search;
