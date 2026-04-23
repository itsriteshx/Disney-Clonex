import React from "react";

function Footer() {
  return (
    <footer
      style={{
        padding: "40px 0",
        background: "#090b13",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        marginTop: "50px",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <img
        src="https://picsum.photos/100/40?random=200"
        alt="logo"
        style={{ height: "40px" }}
      />
      <div style={{ display: "flex", gap: "20px" }}>
        <span style={{ color: "#f9f9f9", fontSize: "12px", cursor: "pointer" }}>Privacy Policy</span>
        <span style={{ color: "#f9f9f9", fontSize: "12px", cursor: "pointer" }}>Terms of Use</span>
        <span style={{ color: "#f9f9f9", fontSize: "12px", cursor: "pointer" }}>Subscriber Agreement</span>
        <span style={{ color: "#f9f9f9", fontSize: "12px", cursor: "pointer" }}>Help</span>
        <span style={{ color: "#f9f9f9", fontSize: "12px", cursor: "pointer" }}>Supported Devices</span>
      </div>
      <p style={{ color: "rgba(249, 249, 249, 0.6)", fontSize: "11px", textAlign: "center", maxWidth: "600px" }}>
        © Disney. All Rights Reserved. Disney+ is a subscription service. Content is subject to availability.
        The Disney+ service is provided by Disney Entertainment.
      </p>
    </footer>
  );
}

export default Footer;
