import React, { useState, useEffect } from "react";

const images = [
  "https://picsum.photos/1200/400?random=1",
  "https://picsum.photos/1200/400?random=2",
  "https://picsum.photos/1200/400?random=3",
  "https://picsum.photos/1200/400?random=4"
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "90%",
        margin: "20px auto",
        overflow: "hidden",
        borderRadius: "10px"
      }}
    >
      <img
        src={images[currentIndex]}
        alt="slider"
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover"
        }}
      />
    </div>
  );
}

export default ImageSlider;