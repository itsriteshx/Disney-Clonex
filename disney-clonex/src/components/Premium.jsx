import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Modals from "./GlobalModal";
import { HiCheck } from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";

const plans = [
  {
    name: "Mobile",
    price: "₹299",
    period: "Year",
    quality: "HD (720p)",
    devices: 1,
    ads: "With Ads",
    highlight: false,
    features: ["Mobile & Tablet Only", "HD Quality", "Ads Supported", "Live Sports"],
  },
  {
    name: "Super",
    price: "₹899",
    period: "Year",
    quality: "Full HD (1080p)",
    devices: 2,
    ads: "Ad-free (Except Sports)",
    highlight: false,
    features: ["All Devices", "Full HD", "Ad-free", "Live Sports", "Dolby Audio"],
  },
  {
    name: "Premium",
    price: "₹1499",
    period: "Year",
    quality: "4K + HDR",
    devices: 4,
    ads: "Completely Ad-free",
    highlight: true,
    features: ["4 Devices", "4K + HDR", "Completely Ad-free", "All Sports", "Dolby Atmos", "IMAX Enhanced"],
  },
];

const featureRows = [
  { label: "All Content (Movies, TV, Live Sports)", mobile: true, super: true, premium: true },
  { label: "Watch on TV & Laptop",                  mobile: false, super: true, premium: true },
  { label: "Ad-free (Except Sports)",               mobile: false, super: true, premium: true },
  { label: "Completely Ad-free",                    mobile: false, super: false, premium: true },
  { label: "4K + HDR",                              mobile: false, super: false, premium: true },
  { label: "Dolby Atmos Audio",                     mobile: false, super: true,  premium: true },
  { label: "Number of Devices",                     mobile: "1",   super: "2",   premium: "4"  },
  { label: "Max Video Quality",                     mobile: "HD",  super: "Full HD", premium: "4K" },
];

function Tick({ val }) {
  if (val === true)  return <span style={{ color: "#8B2FC9", fontSize: "20px" }}>✓</span>;
  if (val === false) return <span style={{ color: "#555",   fontSize: "18px" }}>✕</span>;
  return <span style={{ color: "white", fontWeight: 700, fontSize: "13px" }}>{val}</span>;
}

function Premium() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ background: "#0d0117", minHeight: "100vh", color: "white" }} className="page-transition">
      <Header />

      <main style={{ paddingTop: "72px" }}>
        {/* Hero Section */}
        <div
          style={{
            textAlign: "center",
            padding: "60px 4% 20px",
            background: "linear-gradient(to bottom, #1a0533 0%, #0d0117 100%)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <AiFillStar style={{ color: "#f5a623", fontSize: "28px" }} />
            <span style={{ fontSize: "14px", fontWeight: 800, color: "#f5a623", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              hotstar premium
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 900, marginBottom: "12px", letterSpacing: "-0.5px" }}>
            Subscribe to Hotstar
          </h1>
          <p style={{ color: "#aaa", fontSize: "16px", fontWeight: 500 }}>
            Unlock all content. Choose the plan that's right for you.
          </p>
        </div>

        {/* Plans Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 320px))",
            gap: "20px",
            maxWidth: "1000px",
            margin: "40px auto",
            padding: "0 4%",
            justifyContent: "center",
          }}
        >
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: "36px 28px",
                borderRadius: "20px",
                border: plan.highlight
                  ? "2px solid #8B2FC9"
                  : "1px solid rgba(255,255,255,0.1)",
                background: plan.highlight
                  ? "linear-gradient(135deg, rgba(139,47,201,0.15), rgba(106,31,160,0.08))"
                  : "rgba(255,255,255,0.03)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
                transform: hovered === i ? "scale(1.04)" : "scale(1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: hovered === i
                  ? plan.highlight ? "0 20px 60px rgba(139,47,201,0.35)" : "0 12px 40px rgba(0,0,0,0.5)"
                  : "none",
                cursor: "default",
              }}
            >
              {plan.highlight && (
                <span
                  style={{
                    position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)",
                    background: "linear-gradient(135deg, #8B2FC9, #f5a623)",
                    color: "white", fontSize: "10px", fontWeight: 900,
                    padding: "4px 16px", borderRadius: "999px", letterSpacing: "0.08em",
                    whiteSpace: "nowrap",
                  }}
                >
                  ⭐ BEST EXPERIENCE
                </span>
              )}

              <h3 style={{ fontSize: "22px", fontWeight: 900, marginBottom: "6px", marginTop: plan.highlight ? "10px" : "0" }}>
                {plan.name}
              </h3>

              <div style={{ marginBottom: "24px" }}>
                <span style={{ fontSize: "36px", fontWeight: 900, color: plan.highlight ? "#8B2FC9" : "#f5a623" }}>
                  {plan.price}
                </span>
                <span style={{ color: "#aaa", fontSize: "14px" }}>/{plan.period}</span>
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", width: "100%" }}>
                {plan.features.map((f, fi) => (
                  <li
                    key={fi}
                    style={{
                      display: "flex", alignItems: "center", gap: "10px",
                      padding: "8px 0",
                      borderBottom: fi < plan.features.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                      color: "#ccc", fontSize: "13px", fontWeight: 500,
                    }}
                  >
                    <HiCheck style={{ color: "#8B2FC9", flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                style={{
                  width: "100%", padding: "14px",
                  borderRadius: "12px", border: "none", cursor: "pointer",
                  fontWeight: 800, fontSize: "14px", textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  background: plan.highlight
                    ? "linear-gradient(135deg, #8B2FC9, #6a1fa0)"
                    : "rgba(255,255,255,0.08)",
                  color: "white",
                  transition: "all 0.25s ease",
                  boxShadow: plan.highlight ? "0 4px 20px rgba(139,47,201,0.4)" : "none",
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
              >
                Select {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div style={{ maxWidth: "900px", margin: "0 auto 60px", padding: "0 4%" }}>
          <h2 style={{ textAlign: "center", marginBottom: "28px", fontSize: "22px", fontWeight: 800 }}>
            Plan Comparison
          </h2>
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.08)",
              overflow: "hidden",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <th style={{ padding: "20px 24px", textAlign: "left", color: "white", fontSize: "15px", fontWeight: 800 }}>Features</th>
                  {plans.map(p => (
                    <th key={p.name} style={{ padding: "20px", textAlign: "center", color: p.highlight ? "#8B2FC9" : "#aaa", fontSize: "13px", fontWeight: 800 }}>
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row, ri) => (
                  <tr
                    key={ri}
                    style={{ borderBottom: ri < featureRows.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                  >
                    <td style={{ padding: "16px 24px", color: "#ccc", fontSize: "13px" }}>{row.label}</td>
                    <td style={{ padding: "16px", textAlign: "center" }}><Tick val={row.mobile} /></td>
                    <td style={{ padding: "16px", textAlign: "center" }}><Tick val={row.super} /></td>
                    <td style={{ padding: "16px", textAlign: "center" }}><Tick val={row.premium} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Footer />
      </main>

      <Modals />
    </div>
  );
}

export default Premium;
