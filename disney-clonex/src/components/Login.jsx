import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

function Login() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#0d0117",
        position: "relative",
      }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src="https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
          alt="bg"
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.25 }}
          onError={e => { e.target.style.display = "none"; }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0d0117 30%, rgba(13,1,23,0.7) 100%)" }} />
      </div>

      {/* Card */}
      <div
        className="animate-modal-up"
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "420px",
          padding: "48px 40px",
          background: "rgba(26,5,51,0.75)",
          backdropFilter: "blur(24px)",
          borderRadius: "24px",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "32px" }}>
          <AiFillStar style={{ color: "#f5a623", fontSize: "36px", marginBottom: "8px" }} />
          <h1 style={{ fontSize: "32px", fontWeight: 900, color: "white", letterSpacing: "-0.5px", margin: 0 }}>
            hotstar
          </h1>
        </div>

        <h2 style={{ textAlign: "center", fontSize: "18px", fontWeight: 800, marginBottom: "28px", color: "white", letterSpacing: "0.04em", textTransform: "uppercase" }}>
          Welcome Back
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={{ display: "block", fontSize: "11px", fontWeight: 800, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
              Email or Mobile Number
            </label>
            <input
              type="text"
              placeholder="Enter your email or mobile"
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "10px",
                padding: "14px 16px",
                color: "white",
                outline: "none",
                fontSize: "14px",
                boxSizing: "border-box",
                transition: "border-color 0.2s",
              }}
              onFocus={e => (e.target.style.borderColor = "#8B2FC9")}
              onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
            />
          </div>

          <button
            onClick={() => {
              localStorage.setItem("user", JSON.stringify({ loggedIn: true, username: "User" }));
              navigate("/home");
            }}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              border: "none",
              background: "linear-gradient(135deg, #8B2FC9, #6a1fa0)",
              color: "white",
              fontWeight: 800,
              fontSize: "15px",
              cursor: "pointer",
              letterSpacing: "0.04em",
              transition: "all 0.25s ease",
              boxShadow: "0 4px 20px rgba(139,47,201,0.4)",
              marginTop: "8px",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.02)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
          >
            LOG IN
          </button>
        </div>

        <p style={{ textAlign: "center", color: "#aaa", fontSize: "13px", marginTop: "24px" }}>
          New to Hotstar?{" "}
          <span
            onClick={() => navigate("/premium")}
            style={{ color: "#8B2FC9", fontWeight: 700, cursor: "pointer" }}
          >
            Subscribe Now
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
