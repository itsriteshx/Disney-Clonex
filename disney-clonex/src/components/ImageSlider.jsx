import React, { useState, useEffect } from "react";
import { movies } from "../data/movies";
import { useAppContext } from "../context/AppContext";
import { HiPlay, HiPlus, HiCheck } from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";
const heroMovies = movies.filter(m => m.backdrop).slice(0, 5);
function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const { openModal, toggleWatchlist, watchlist } = useAppContext();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % heroMovies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  if (!heroMovies.length) return null;
  const movie = heroMovies[current];
  const isWatched = watchlist.find(m => m.id === movie.id);
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "520px",
        overflow: "hidden",
        background: "#0d0117",
      }}
    >
      {heroMovies.map((m, i) => (
        <div
          key={m.id}
          style={{
            position: "absolute",
            inset: 0,
            transition: "opacity 1s ease-in-out",
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 2 : 1,
          }}
        >
          <img
            src={m.backdrop}
            alt={m.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={e => { e.target.style.display = "none"; }}
          />
        </div>
      ))}
      <div className="hero-overlay" style={{ zIndex: 3 }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 4,
          display: "flex",
          alignItems: "center",
          padding: "0 4%",
        }}
      >
        <div
          key={current}
          className="animate-fade-in"
          style={{ maxWidth: "580px" }}
        >
          <div style={{ display: "flex", gap: "8px", marginBottom: "14px", flexWrap: "wrap" }}>
            {(movie.genre || "").split("•").map((g, i) => (
              <span key={i} className="genre-pill">{g.trim()}</span>
            ))}
          </div>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.08,
              marginBottom: "16px",
              letterSpacing: "-1px",
            }}
          >
            {movie.title}
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "16px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "4px",
                padding: "2px 8px",
                fontSize: "11px",
                color: "white",
                fontWeight: 700,
              }}
            >
              U/A 16+
            </span>
            <span style={{ color: "#aaa", fontSize: "13px", fontWeight: 600 }}>{movie.year || "2024"}</span>
            <span style={{ color: "#aaa" }}>•</span>
            <span style={{ color: "#aaa", fontSize: "13px", fontWeight: 600 }}>2h 15m</span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                color: "#f5a623",
                fontWeight: 800,
                fontSize: "14px",
              }}
            >
              <AiFillStar /> {movie.rating}
            </span>
          </div>
          <p
            style={{
              color: "#aaaaaa",
              fontSize: "15px",
              lineHeight: 1.65,
              marginBottom: "28px",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {movie.description}
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <button
              onClick={() => openModal(movie, "trailer")}
              className="pill-btn"
              style={{ background: "#ffffff", color: "#000000" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#e8e8e8")}
              onMouseLeave={e => (e.currentTarget.style.background = "#ffffff")}
            >
              <HiPlay style={{ fontSize: "22px" }} /> Watch Now
            </button>
            <button
              onClick={() => toggleWatchlist(movie)}
              className="pill-btn"
              style={{
                background: isWatched ? "rgba(139,47,201,0.2)" : "rgba(255,255,255,0.08)",
                color: isWatched ? "#8B2FC9" : "#ffffff",
                border: isWatched ? "2px solid #8B2FC9" : "2px solid rgba(255,255,255,0.25)",
              }}
              onMouseEnter={e => { if (!isWatched) e.currentTarget.style.background = "rgba(255,255,255,0.14)"; }}
              onMouseLeave={e => { if (!isWatched) e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
            >
              {isWatched ? <HiCheck style={{ fontSize: "20px" }} /> : <HiPlus style={{ fontSize: "20px" }} />}
              Watchlist
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "28px",
          left: "4%",
          display: "flex",
          gap: "8px",
          zIndex: 5,
        }}
      >
        {heroMovies.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              height: "4px",
              width: i === current ? "36px" : "14px",
              borderRadius: "999px",
              background: i === current ? "#ffffff" : "rgba(255,255,255,0.25)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.5s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}
export default ImageSlider;