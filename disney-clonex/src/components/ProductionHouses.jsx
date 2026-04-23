import React from "react";

const houses = [
  { id: 1, name: "Disney" },
  { id: 2, name: "Pixar" },
  { id: 3, name: "Marvel" },
  { id: 4, name: "Star Wars" },
  { id: 5, name: "National Geographic" },
];

function ProductionHouses() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px 40px",
        justifyContent: "space-between",
      }}
    >
      {houses.map((house) => (
        <div
          key={house.id}
          style={{
            flex: 1,
            height: "100px",
            border: "2px solid rgba(249, 249, 249, 0.1)",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            background: "rgba(249, 249, 249, 0.05)",
            boxShadow: "rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px",
            transition: "all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.borderColor = "rgba(249, 249, 249, 0.8)";
            e.currentTarget.style.background = "rgba(249, 249, 249, 0.1)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.borderColor = "rgba(249, 249, 249, 0.1)";
            e.currentTarget.style.background = "rgba(249, 249, 249, 0.05)";
          }}
        >
          <h4 style={{ color: "#f9f9f9", margin: 0, fontSize: "16px", textAlign: "center" }}>
            {house.name}
          </h4>
        </div>
      ))}
    </div>
  );
}

export default ProductionHouses;
