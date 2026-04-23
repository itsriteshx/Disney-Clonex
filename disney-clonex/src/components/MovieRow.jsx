import React from "react";
import { useNavigate } from "react-router-dom";

const dummyMovies = [
  { id: 1, title: "Movie 1", img: "https://picsum.photos/200/300?random=11" },
  { id: 2, title: "Movie 2", img: "https://picsum.photos/200/300?random=12" },
  { id: 3, title: "Movie 3", img: "https://picsum.photos/200/300?random=13" },
  { id: 4, title: "Movie 4", img: "https://picsum.photos/200/300?random=14" },
  { id: 5, title: "Movie 5", img: "https://picsum.photos/200/300?random=15" },
  { id: 6, title: "Movie 6", img: "https://picsum.photos/200/300?random=16" },
  { id: 7, title: "Movie 7", img: "https://picsum.photos/200/300?random=17" },
  { id: 8, title: "Movie 8", img: "https://picsum.photos/200/300?random=18" },
];

function MovieRow({ title }) {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "0 40px", marginBottom: "30px" }}>
      <h3 style={{ color: "#f9f9f9", marginBottom: "15px", textAlign: "left" }}>
        {title}
      </h3>
      <div
        style={{
          display: "flex",
          overflowX: "scroll",
          gap: "20px",
          padding: "10px 0",
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For Internet Explorer/Edge
        }}
        className="no-scrollbar"
      >
        {dummyMovies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => navigate(`/detail/${movie.id}`)}
            style={{
              minWidth: "180px",
              cursor: "pointer",
              transition: "all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s",
              borderRadius: "10px",
              overflow: "hidden",
              border: "3px solid rgba(249, 249, 249, 0.1)",
              boxShadow: "rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.borderColor = "rgba(249, 249, 249, 0.8)";
              e.currentTarget.style.boxShadow = "rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.borderColor = "rgba(249, 249, 249, 0.1)";
              e.currentTarget.style.boxShadow = "rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px";
            }}
          >
            <img
              src={movie.img}
              alt={movie.title}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                display: "block"
              }}
            />
            <div style={{ padding: "10px", background: "rgba(0,0,0,0.5)" }}>
              <p style={{ color: "#f9f9f9", fontSize: "14px", margin: 0 }}>
                {movie.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
