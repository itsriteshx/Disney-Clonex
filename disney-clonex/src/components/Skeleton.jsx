import React from "react";
import { useTheme } from "../context/ThemeContext";
export function SkeletonCard() {
  const { isDarkMode } = useTheme();
  return (
    <div
      style={{
        flexShrink: 0,
        width: "220px",
        aspectRatio: "16/9",
        borderRadius: "8px",
        background: isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.08)",
        position: "relative",
        overflow: "hidden"
      }}
      className="skeleton-card"
    >
      <div 
        className="skeleton-shimmer"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: isDarkMode 
            ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)"
            : "linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)",
        }}
      />
    </div>
  );
}
export function SkeletonHero() {
  const { isDarkMode } = useTheme();
  return (
    <div
      style={{
        width: "100%",
        height: "65vh",
        background: isDarkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.05)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div 
        className="skeleton-shimmer"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: isDarkMode 
            ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)"
            : "linear-gradient(90deg, transparent, rgba(0,0,0,0.04), transparent)",
        }}
      />
    </div>
  );
}