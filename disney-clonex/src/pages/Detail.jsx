import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ background: "#040714", minHeight: "100vh", color: "white" }}>
      <Header />
      <div
        style={{
          position: "relative",
          minHeight: "calc(100vh - 70px)",
          padding: "0 calc(3.5vw + 5px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
            opacity: 0.8,
          }}
        >
          <img
            src={`https://picsum.photos/1920/1080?random=${id}`}
            alt="background"
            style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
          />
        </div>

        <div style={{ maxWidth: "600px" }}>
          <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>Movie Title {id}</h1>
          <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
            <button
              style={{
                padding: "0 24px",
                height: "56px",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "white",
                color: "black",
                border: "none",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "bold",
                letterSpacing: "1.8px",
              }}
            >
              PLAY
            </button>
            <button
              style={{
                padding: "0 24px",
                height: "56px",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0,0,0,0.3)",
                color: "white",
                border: "1px solid white",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "bold",
                letterSpacing: "1.8px",
              }}
            >
              TRAILER
            </button>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "2px solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0,0,0,0.6)",
                cursor: "pointer",
                fontSize: "30px",
              }}
            >
              +
            </div>
          </div>
          <p style={{ color: "rgba(249, 249, 249, 0.8)", fontSize: "15px", marginBottom: "20px" }}>
            2021 • 1h 52m • Family, Fantasy, Animation, Action-Adventure
          </p>
          <p style={{ fontSize: "20px", lineHeight: "1.4", color: "#f9f9f9" }}>
            This is a dummy description for the movie with ID {id}. A young girl named Raya travels to the kingdom of Kumandra to find the last dragon and save her world from a dark force.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
