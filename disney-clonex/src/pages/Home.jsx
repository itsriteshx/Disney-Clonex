import React from "react";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import MovieRow from "../components/MovieRow";

function Home() {
  return (
    <div style={{ background: "#040714", minHeight: "100vh" }}>
      <Header />
      <ImageSlider />
      <MovieRow title="Recommended for You" />
      <MovieRow title="New on Disney+" />
      <MovieRow title="Trending Now" />
    </div>
  );
}

export default Home;