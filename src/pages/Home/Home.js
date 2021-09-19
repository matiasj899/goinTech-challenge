import React from "react";
import Header from "../../components/Header";
import ImageGallery from "react-image-gallery";
import "../../pages/Home/Home.css";

const images = [
  { original: "https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3740_.jpg" },
  { original: "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3740_.jpg" },
  { original: "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" },
];

function Home() {
  return (
    <>
      <Header></Header>
      <section id="home">
        <div>
          <ImageGallery
            items={images}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay={true}
          ></ImageGallery>
          <div className="home-cards">
            <h2>Productos</h2>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
