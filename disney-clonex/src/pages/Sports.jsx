import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieRow from "../components/MovieRow";
import Modals from "../components/GlobalModal";

function Sports() {
  return (
    <div style={{ background: "#0d0117", minHeight: "100vh", color: "white" }} className="page-transition">
      <Header />

      <main style={{ paddingTop: "72px" }}>
        {/* Live Match Hero Banner */}
        <section
          style={{
            position: "relative",
            width: "100%",
            height: "500px",
            overflow: "hidden",
            background: "linear-gradient(135deg, #0d0117 0%, #1a0533 50%, #0d1a2e 100%)",
          }}
        >
          {/* Stadium background image with overlay */}
          <img
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1400&q=80"
            alt="Sports"
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }}
            onError={e => { e.target.style.display = "none"; }}
          />
          <div
            style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to right, rgba(13,1,23,0.95) 40%, rgba(13,1,23,0.5) 75%, transparent 100%)",
            }}
          />
          <div
            style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(13,1,23,1) 0%, transparent 50%)",
            }}
          />

          {/* Content */}
          <div
            style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center",
              padding: "0 4%",
            }}
          >
            <div className="animate-fade-in">
              
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div className="live-badge">
                  <span className="live-dot" />
                  LIVE
                </div>
                <span style={{ color: "#aaa", fontWeight: 600, fontSize: "14px" }}>
                  Border-Gavaskar Trophy
                </span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(36px, 5vw, 60px)",
                  fontWeight: 900,
                  color: "white",
                  marginBottom: "20px",
                  letterSpacing: "-1px",
                  lineHeight: 1.05,
                }}
              >
                India vs Australia
              </h1>

             
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "32px",
                  marginBottom: "28px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "36px", fontWeight: 900, color: "white" }}>128/3</div>
                  <div style={{ color: "#aaa", fontSize: "13px", fontWeight: 600 }}>Overs: 24.2</div>
                </div>
                <div style={{ width: "1px", height: "48px", background: "rgba(255,255,255,0.12)" }} />
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "22px", fontWeight: 900, color: "white" }}>IND leads by 42</div>
                  <div style={{ color: "#aaa", fontSize: "13px", fontWeight: 600 }}>Session 2</div>
                </div>
              </div>

              {/* CTA */}
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <button
                  className="pill-btn"
                  style={{ background: "white", color: "black" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#e8e8e8")}
                  onMouseLeave={e => (e.currentTarget.style.background = "white")}
                >
                  WATCH LIVE
                </button>
                <div>
                  <div style={{ color: "#aaa", fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Next Match
                  </div>
                  <div style={{ color: "white", fontWeight: 900, fontSize: "20px", letterSpacing: "2px" }}>
                    02 : 14 : 55
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Rows */}
        <div style={{ paddingBottom: "40px" }}>
          <MovieRow title="🏏 Cricket" type="sports" />
          <MovieRow title="⚽ Football" type="sports" />
          <MovieRow title="🤼 Kabaddi" type="sports" />
        </div>

        <Footer />
      </main>

      <Modals />
    </div>
  );
}

export default Sports;
