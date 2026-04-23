import React from "react";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";

function Home() {
  return (
    <div style={{ background: "#040714", minHeight: "100vh" }}>
      <Header />
      <ImageSlider />
    </div>
  );
}

export default Home;