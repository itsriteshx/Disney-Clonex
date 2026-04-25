import { useAppContext } from '../context/AppContext';
import { HiXMark, HiPlay, HiPlus, HiCheck, HiShare } from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";
const PLANS = [
  { name: "Mobile",  price: "₹299",  quality: "HD (720p)",         devices: 1, ads: "With Ads",                  highlight: false },
  { name: "Super",   price: "₹899",  quality: "Full HD (1080p)",    devices: 2, ads: "Ad-free (Except Sports)",   highlight: false },
  { name: "Premium", price: "₹1499", quality: "4K (2160p) + HDR",   devices: 4, ads: "Completely Ad-free",        highlight: true  },
];
function PlansModal() {
  const { showPlansModal, setShowPlansModal, t } = useAppContext();
  if (!showPlansModal) return null;
  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 3000,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(13,1,23,0.92)", backdropFilter: "blur(16px)",
        animation: "fadeIn 0.3s ease",
      }}
      onClick={() => setShowPlansModal(false)}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#1a0533",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "24px",
          padding: "40px",
          maxWidth: "860px",
          width: "90%",
          animation: "modalUp 0.4s ease",
          position: "relative",
        }}
      >
        <button
          onClick={() => setShowPlansModal(false)}
          style={{
            position: "absolute", top: "20px", right: "20px",
            background: "rgba(255,255,255,0.1)", border: "none",
            borderRadius: "50%", width: "38px", height: "38px",
            color: "white", fontSize: "20px", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <HiXMark />
        </button>
        <h2 style={{ textAlign: "center", fontSize: "28px", fontWeight: 900, marginBottom: "8px", color: "white" }}>
          {t("subscribeToHotstar")}
        </h2>
        <p style={{ textAlign: "center", color: "#aaa", marginBottom: "36px", fontSize: "15px" }}>
          {t("choosePlan")}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {PLANS.map(plan => (
            <div
              key={plan.name}
              style={{
                padding: "28px 20px",
                borderRadius: "16px",
                border: plan.highlight ? "2px solid #8B2FC9" : "1px solid rgba(255,255,255,0.1)",
                background: plan.highlight ? "rgba(139,47,201,0.12)" : "rgba(255,255,255,0.04)",
                textAlign: "center",
                transition: "transform 0.2s",
                cursor: "default",
                position: "relative",
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              {plan.highlight && (
                <span style={{
                  position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)",
                  background: "linear-gradient(135deg,#8B2FC9,#f5a623)",
                  color: "white", fontSize: "10px", fontWeight: 900,
                  padding: "3px 14px", borderRadius: "999px", letterSpacing: "0.06em",
                }}>
                  {t("bestExperience")}
                </span>
              )}
              <h3 style={{ color: "white", fontSize: "20px", fontWeight: 800, marginBottom: "6px" }}>{plan.name}</h3>
              <div style={{ color: plan.highlight ? "#8B2FC9" : "#f5a623", fontSize: "28px", fontWeight: 900, marginBottom: "20px" }}>
                {plan.price}<span style={{ fontSize: "13px", color: "#aaa", fontWeight: 600 }}>/Year</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", color: "#ccc", fontSize: "13px", lineHeight: 2 }}>
                <li style={{ color: "white", fontWeight: 700 }}>{plan.quality}</li>
                <li>{plan.devices} device{plan.devices > 1 ? "s" : ""}</li>
                <li>{plan.ads}</li>
              </ul>
              <button
                style={{
                  width: "100%", padding: "12px",
                  borderRadius: "10px", border: "none", cursor: "pointer",
                  fontWeight: 800, fontSize: "14px",
                  background: plan.highlight ? "linear-gradient(135deg,#8B2FC9,#6a1fa0)" : "rgba(255,255,255,0.1)",
                  color: "white",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                {t("select")} {plan.name.toUpperCase()}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function GlobalModal() {
  const { modalState, closeModal, toggleWatchlist, watchlist, openModal, t } = useAppContext();
  const { isOpen, movie, type } = modalState;
  if (!isOpen || !movie) return null;
  const isWatched = watchlist.find(m => m.id === movie.id);
  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 2000,
        display: "flex", alignItems: "flex-end", justifyContent: "center",
      }}
    >
      {}
      <div
        onClick={closeModal}
        style={{
          position: "absolute", inset: 0,
          background: "rgba(13,1,23,0.92)",
          backdropFilter: "blur(20px)",
          animation: "fadeIn 0.3s ease",
        }}
      />
      {}
      <div
        style={{
          position: "relative",
          background: "#0d0117",
          width: "100%",
          maxWidth: "1400px",
          height: "85vh",
          borderRadius: "32px 32px 0 0",
          overflow: "hidden",
          boxShadow: "0 -20px 80px rgba(0,0,0,0.9)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "none",
          animation: "modalUp 0.4s cubic-bezier(0.25,1,0.5,1)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {}
        <button
          onClick={closeModal}
          style={{
            position: "absolute", top: "24px", right: "24px", zIndex: 10,
            background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)",
            border: "none", borderRadius: "50%", width: "44px", height: "44px",
            color: "white", fontSize: "22px", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
          onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
        >
          <HiXMark />
        </button>
        {type === "trailer" ? (
          <div style={{ width: "100%", height: "100%", background: "#000" }}>
            <iframe
              width="100%" height="100%"
              src={`${movie.trailer}?autoplay=1`}
              title={movie.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <>
            {}
            <div style={{ width: "60%", height: "100%", position: "relative", flexShrink: 0 }}>
              <img
                src={movie.backdrop || movie.image || movie.poster}
                alt={movie.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={e => { e.target.style.display = "none"; }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to right, transparent 60%, #0d0117 100%), linear-gradient(to top, #0d0117 0%, transparent 40%)",
              }} />
            </div>
            {}
            <div
              style={{
                flex: 1,
                padding: "60px 48px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                overflowY: "auto",
              }}
            >
              <div style={{ display: "flex", gap: "10px", marginBottom: "18px", flexWrap: "wrap" }}>
                <span style={{
                  background: "linear-gradient(135deg,#8B2FC9,#6a1fa0)",
                  color: "white", padding: "3px 10px",
                  borderRadius: "4px", fontSize: "10px", fontWeight: 900, letterSpacing: "0.08em",
                }}>
                  {movie.brand === "hotstar" ? "HOTSTAR SPECIAL" : movie.type === "tv" ? "TV SHOW" : "MOVIE"}
                </span>
                <span style={{ color: "#aaa", fontSize: "11px", fontWeight: 600, alignSelf: "center" }}>
                  {movie.year} • 4K • HDR
                </span>
              </div>
              <h2 style={{
                fontSize: "clamp(32px,4vw,52px)", fontWeight: 900,
                color: "white", marginBottom: "16px", lineHeight: 1.1, letterSpacing: "-0.5px",
              }}>
                {movie.title}
              </h2>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px", flexWrap: "wrap" }}>
                <span style={{
                  background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "4px", padding: "2px 8px", fontSize: "11px", color: "white", fontWeight: 700,
                }}>
                  U/A 16+
                </span>
                <span style={{ color: "#f5a623", fontWeight: 800, display: "flex", alignItems: "center", gap: "4px" }}>
                  <AiFillStar /> {movie.rating}
                </span>
                <span style={{ color: "#aaa" }}>•</span>
                <span style={{ color: "#aaa", fontSize: "13px" }}>2h 15m</span>
              </div>
              {(movie.genre || "").split("•").map((g, i) => (
                <span key={i} className="genre-pill" style={{ display: "inline-block", marginRight: "8px", marginBottom: "12px" }}>
                  {g.trim()}
                </span>
              ))}
              <p style={{
                color: "#aaaaaa", fontSize: "15px", lineHeight: 1.7,
                marginBottom: "32px", marginTop: "8px",
              }}>
                {movie.description}
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <button
                  onClick={() => openModal(movie, "trailer")}
                  className="pill-btn"
                  style={{ background: "white", color: "black" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#e8e8e8")}
                  onMouseLeave={e => (e.currentTarget.style.background = "white")}
                >
                  <HiPlay style={{ fontSize: "20px" }} /> {t("watchNow")}
                </button>
                <button
                  onClick={() => toggleWatchlist(movie)}
                  style={{
                    width: "52px", height: "52px", borderRadius: "10px", border: "2px solid",
                    borderColor: isWatched ? "#8B2FC9" : "rgba(255,255,255,0.2)",
                    background: isWatched ? "rgba(139,47,201,0.2)" : "rgba(255,255,255,0.05)",
                    color: isWatched ? "#8B2FC9" : "white", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "22px", transition: "all 0.2s",
                  }}
                  title={t("addToWatchlist")}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                >
                  {isWatched ? <HiCheck /> : <HiPlus />}
                </button>
                <button
                  style={{
                    width: "52px", height: "52px", borderRadius: "10px",
                    border: "2px solid rgba(255,255,255,0.2)",
                    background: "rgba(255,255,255,0.05)",
                    color: "white", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "20px", transition: "all 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <HiShare />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
function Modals() {
  return (
    <>
      <GlobalModal />
      <PlansModal />
    </>
  );
}
export default Modals;