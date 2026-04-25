import { useRef, useState, useEffect } from "react";
import { movies as allMovies, sports as allSports } from "../data/movies";
import MovieCard from "./MovieCard";
import { useAppContext } from "../context/AppContext";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const allContent = [...allMovies, ...allSports];

function MovieRow({ title, type, filterBrand, isLive, movies: propMovies, showSeeAll = true }) {
  const rowRef = useRef(null);
  const { searchQuery } = useAppContext();
  const [showLeft, setShowLeft]   = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scroll = dir => {
    if (rowRef.current) {
      const amount = rowRef.current.clientWidth * 0.75;
      rowRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      setShowLeft(scrollLeft > 20);
      setShowRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  const displayMovies = propMovies || allContent.filter(movie => {
    const matchesSearch = !searchQuery || movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType   = !type  || movie.type  === type;
    const matchesBrand  = !filterBrand || movie.brand === filterBrand;
    const matchesLive   = isLive === undefined ? true : movie.isLive === isLive;
    return matchesSearch && matchesType && matchesBrand && matchesLive;
  });

  if (!displayMovies || displayMovies.length === 0) return null;

  return (
    <div
      style={{ padding: "16px 4%", position: "relative" }}
      className="group-row"
    >
      {/* Row header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "14px",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: 800,
            color: "#ffffff",
            margin: 0,
            letterSpacing: "-0.3px",
          }}
        >
          {title}
        </h2>
        {showSeeAll && (
          <a
            href="#"
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "#8B2FC9",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#a855f7")}
            onMouseLeave={e => (e.currentTarget.style.color = "#8B2FC9")}
          >
            See All →
          </a>
        )}
      </div>

      {/* Carousel */}
      <div style={{ position: "relative" }}>
        {/* Left arrow */}
        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="scroll-arrow scroll-arrow-left"
          >
            <HiChevronLeft style={{ fontSize: "26px" }} />
          </button>
        )}

        {/* Cards track */}
        <div
          ref={rowRef}
          onScroll={handleScroll}
          className="no-scrollbar"
          style={{
            display: "flex",
            gap: "12px",
            overflowX: "auto",
            paddingBottom: "8px",
            paddingTop: "4px",
            scrollSnapType: "x mandatory",
          }}
        >
          {displayMovies.map(movie => (
            <div key={movie.id} style={{ scrollSnapAlign: "start" }}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>

        {/* Right arrow */}
        {showRight && (
          <button
            onClick={() => scroll("right")}
            className="scroll-arrow scroll-arrow-right"
          >
            <HiChevronRight style={{ fontSize: "26px" }} />
          </button>
        )}
      </div>
    </div>
  );
}

export default MovieRow;
