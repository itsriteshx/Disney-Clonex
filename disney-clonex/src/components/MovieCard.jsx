import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { HiPlay, HiPlus, HiCheck } from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";
function MovieCard({ movie }) {
  const { toggleWatchlist, watchlist } = useAppContext();
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);
  const isWatched = watchlist.find(m => m.id === movie.id);
  const imgSrc = movie.image || movie.poster;
  return (
    <div
      style={{
        position: "relative",
        flexShrink: 0,
        width: "220px",
        aspectRatio: "16/9",
        borderRadius: "8px",
        overflow: "visible",
        cursor: "pointer",
        transition: "transform 0.3s ease",
      }}
      className="card-hover-group"
      onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.08)"; e.currentTarget.style.zIndex = 100; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.zIndex = "auto"; }}
    >
      {}
      <div
        onClick={() => navigate(`/movie/${movie.id}`)}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "8px",
          overflow: "hidden",
          position: "relative",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.6)",
        }}
      >
        {imgError ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, #1a0533, #2d0d60)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
              textAlign: "center",
              gap: "6px",
            }}
          >
            <AiFillStar style={{ color: "#f5a623", fontSize: "22px" }} />
            <span style={{ fontSize: "11px", fontWeight: 800, color: "white", lineHeight: 1.3 }}>
              {movie.title}
            </span>
          </div>
        ) : (
          <img
            src={imgSrc}
            alt={movie.title}
            onError={() => setImgError(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        )}
        {}
        {movie.isLive && (
          <div className="live-badge" style={{ position: "absolute", top: "8px", left: "8px", zIndex: 5 }}>
            <span className="live-dot" />
            LIVE
          </div>
        )}
        {}
        {movie.isNew && !movie.isLive && (
          <span className="new-badge" style={{ position: "absolute", top: "8px", left: "8px", zIndex: 5 }}>
            NEW
          </span>
        )}
      </div>
      {}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "8px",
          background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)",
          opacity: 0,
          transition: "opacity 0.3s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "12px",
          pointerEvents: "none",
        }}
        className="card-overlay"
      >
        {}
        <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
          <button
            onClick={e => { e.stopPropagation(); navigate(`/movie/${movie.id}`); }}
            style={{
              background: "white",
              border: "none",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "transform 0.2s",
              pointerEvents: "all",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.15)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            <HiPlay style={{ fontSize: "14px", color: "#000", transform: "translateX(1px)" }} />
          </button>
          <button
            onClick={e => { e.stopPropagation(); toggleWatchlist(movie); }}
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "white",
              transition: "background 0.2s",
              pointerEvents: "all",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(139,47,201,0.5)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
          >
            {isWatched ? <HiCheck style={{ fontSize: "14px" }} /> : <HiPlus style={{ fontSize: "14px" }} />}
          </button>
        </div>
        {}
        <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "10px", marginBottom: "4px", display: "flex", gap: "6px" }}>
          <span>{movie.year || "2024"}</span>
          <span>•</span>
          <span>
            <AiFillStar style={{ color: "#f5a623", verticalAlign: "middle", fontSize: "10px" }} />
            {" "}{movie.rating}
          </span>
        </div>
        <h4 style={{ color: "white", fontSize: "11px", fontWeight: 800, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {movie.title}
        </h4>
      </div>
      <style>{`
        .card-hover-group:hover .card-overlay { opacity: 1 !important; pointer-events: all !important; }
      `}</style>
    </div>
  );
}
export default MovieCard;