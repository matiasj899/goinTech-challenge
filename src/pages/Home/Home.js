import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import ImageGallery from "react-image-gallery";
import "../../pages/Home/Home.css";
import clienteAxios from "../../config/axios";
import { useHistory } from "react-router-dom";

const images = [
  { original: "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3740_.jpg" },
  { original: "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" },
];

function Home() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    clienteAxios
      .get("products/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  const eachCategory = categories.map((category) => {
    return (
      <div className="home-cards" key={category}>
        <h2>{category}</h2>
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
          alt="randomImg"
          onClick={() => history.push(`/categories/${category}`)}
        ></img>
        <button onClick={() => history.push(`/categories/${category}`)}>
          See more
        </button>
      </div>
    );
  });
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
          <div className="home-cards-cn">
            {eachCategory}
            <div className="home-cards" >
              <h2>See all</h2>
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
                alt="randomImg"
                onClick={() => history.push(`/categories/all`)}
              ></img>
              <button onClick={() => history.push(`/categories/all`)}>
                See more
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
