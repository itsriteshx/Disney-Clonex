import React from "react";

function Login() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "url('https://picsum.photos/1920/1080?random=100') no-repeat center center/cover",
        padding: "0 40px",
      }}
    >
      <div
        style={{
          maxWidth: "650px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "rgba(0,0,0,0.6)",
          padding: "40px",
          borderRadius: "10px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h1 style={{ color: "white", marginBottom: "20px", fontSize: "40px" }}>
          Disney+ Hotstar
        </h1>
        <button
          style={{
            width: "100%",
            padding: "16px",
            fontSize: "18px",
            fontWeight: "bold",
            color: "white",
            background: "#0063e5",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginBottom: "12px",
            letterSpacing: "1.5px",
            transition: "all 0.2s ease",
          }}
          onMouseOver={(e) => (e.target.style.background = "#0483ee")}
          onMouseOut={(e) => (e.target.style.background = "#0063e5")}
          onClick={() => (window.location.href = "/home")}
        >
          GET ALL THERE
        </button>
        <p
          style={{
            color: "#f9f9f9",
            fontSize: "11px",
            textAlign: "center",
            lineHeight: "1.5",
            letterSpacing: "1.5px",
            margin: "0 0 20px",
          }}
        >
          Get Premier Access to Raya and the Last Dragon for an additional fee with
          a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney
          Bundle will increase by $1.
        </p>
        <img
          src="https://picsum.photos/600/100?random=101"
          alt="logos"
          style={{ width: "100%", marginBottom: "20px" }}
        />
      </div>
    </div>
  );
}

export default Login;
