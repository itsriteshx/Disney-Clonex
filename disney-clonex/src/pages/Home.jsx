import React from "react";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import ProductionHouses from "../components/ProductionHouses";
import MovieRow from "../components/MovieRow";
import Footer from "../components/Footer";

function Home() {
  return (
    <div style={{ background: "#040714", minHeight: "100vh" }}>
      <Header />
      <ImageSlider />
      <ProductionHouses />
      <MovieRow title="Recommended for You" />
      <MovieRow title="New on Disney+" />
      <MovieRow title="Trending Now" />
      <Footer />
    </div>
  );
}

export default Home;