import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Modals from "./GlobalModal";
import { useAppContext } from "../context/AppContext";
import { movies, sports } from "../data/movies";
import { HiPlay, HiArrowLeft } from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";

const allContent = [...movies, ...sports];

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useAppContext();
  const movie = allContent.find(m => String(m.id) === id);

  if (!movie) {
    return (
      <div style={{ background: "#0d0117", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "20px" }}>
        <Header />
        <h2 style={{ color: "white", fontSize: "24px" }}>{t("contentNotFound")}</h2>
        <button onClick={() => navigate("/home")} style={{ color: "#8B2FC9", background: "none", border: "none", cursor: "pointer", fontSize: "16px" }}>
          ← {t("goHome")}
        </button>
      </div>
    );
  }

  return (
    <div style={{ background: "#0d0117", minHeight: "100vh", color: "white" }}>
      <Header />

      {/* Cinematic background */}
      <div style={{ position: "fixed", top: 0, right: 0, width: "100%", height: "100vh", zIndex: 0 }}>
        <img
          src={movie.backdrop || movie.image || movie.poster}
          alt="bg"
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.5 }}
          onError={e => { e.target.style.display = "none"; }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0d0117 40%, rgba(13,1,23,0.7) 75%, transparent 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0d0117 0%, transparent 60%)" }} />
      </div>

      <main style={{ position: "relative", zIndex: 1, paddingTop: "140px", padding: "140px 4% 60px" }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            display: "flex", alignItems: "center", gap: "8px",
            background: "none", border: "none", color: "#aaa",
            cursor: "pointer", fontSize: "14px", fontWeight: 700,
            marginBottom: "32px", transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "white")}
          onMouseLeave={e => (e.currentTarget.style.color = "#aaa")}
        >
          <HiArrowLeft /> {t("back")}
        </button>

        <div style={{ maxWidth: "600px" }} className="animate-fade-in">
          <h1 style={{ fontSize: "clamp(36px,6vw,64px)", fontWeight: 900, marginBottom: "16px", letterSpacing: "-1px", lineHeight: 1.05 }}>
            {movie.title}
          </h1>

          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px", flexWrap: "wrap" }}>
            <span style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "4px", padding: "2px 8px", fontSize: "11px", fontWeight: 700 }}>
              U/A 16+
            </span>
            <span style={{ color: "#aaa" }}>{movie.year}</span>
            <span style={{ color: "#f5a623", display: "flex", alignItems: "center", gap: "4px", fontWeight: 800 }}>
              <AiFillStar /> {movie.rating}
            </span>
            {movie.genre && <span style={{ color: "#8B2FC9", fontWeight: 700 }}>{movie.genre}</span>}
          </div>

          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#ccc", marginBottom: "36px" }}>
            {movie.description}
          </p>

          <div style={{ display: "flex", gap: "14px" }}>
            <button
              className="pill-btn"
              style={{ background: "white", color: "black" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#e8e8e8")}
              onMouseLeave={e => (e.currentTarget.style.background = "white")}
            >
              <HiPlay style={{ fontSize: "22px" }} /> {t("watchNow")}
            </button>
          </div>
        </div>

        <div style={{ marginTop: "80px" }}>
          <Footer />
        </div>
      </main>

      <Modals />
    </div>
  );
}

export default Detail;
