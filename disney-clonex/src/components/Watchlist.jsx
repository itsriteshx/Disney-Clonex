import Header from "./Header";
import MovieCard from "./MovieCard";
import Footer from "./Footer";
import Modals from "./GlobalModal";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
function Profile() {
  const { watchlist, t } = useAppContext();
  const navigate = useNavigate();
  return (
    <div style={{ background: "#0d0117", minHeight: "100vh", color: "white" }} className="page-transition">
      <Header />
      <main style={{ paddingTop: "72px", padding: "110px 4% 60px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "48px" }} className="animate-fade-in">
            <div style={{
              width: "72px", height: "72px", borderRadius: "50%",
              background: "linear-gradient(135deg, #8B2FC9, #6a1fa0)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "24px", fontWeight: 900, color: "white",
              border: "3px solid rgba(139,47,201,0.4)",
            }}>
              US
            </div>
            <div>
              <h1 style={{ fontSize: "32px", fontWeight: 900, margin: "0 0 4px", letterSpacing: "-0.5px" }}>
                {t("mySpace")}
              </h1>
              <p style={{ color: "#aaa", fontSize: "14px", margin: 0 }}>{t("manageWatchlist")}</p>
            </div>
          </div>
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <h2 style={{ fontSize: "22px", fontWeight: 800, margin: 0 }}>{t("myWatchlist")}</h2>
              <span style={{
                background: "linear-gradient(135deg, #8B2FC9, #6a1fa0)",
                color: "white", padding: "2px 12px", borderRadius: "999px",
                fontSize: "12px", fontWeight: 800,
              }}>
                {watchlist.length}
              </span>
            </div>
            {watchlist.length > 0 ? (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                {watchlist.map(movie => (
                  <div key={movie.id} className="animate-fade-in">
                    <MovieCard movie={movie} />
                  </div>
                ))}
              </div>
            ) : (
              <div style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "80px 40px",
                textAlign: "center",
              }}>
                <AiFillStar style={{ color: "#f5a623", fontSize: "48px", marginBottom: "16px" }} />
                <h3 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "10px" }}>{t("watchlistEmpty")}</h3>
                <p style={{ color: "#aaa", fontSize: "14px", marginBottom: "28px" }}>
                  {t("watchlistEmptyDesc")}
                </p>
                <button
                  onClick={() => navigate("/home")}
                  style={{
                    background: "linear-gradient(135deg, #8B2FC9, #6a1fa0)",
                    color: "white", border: "none", padding: "12px 32px",
                    borderRadius: "10px", fontWeight: 800, fontSize: "14px",
                    cursor: "pointer", letterSpacing: "0.04em",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                >
                  {t("discoverContent")}
                </button>
              </div>
            )}
          </section>
        </div>
        <div style={{ marginTop: "60px" }}>
          <Footer />
        </div>
      </main>
      <Modals />
    </div>
  );
}
export default Profile;