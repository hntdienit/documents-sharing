import React, { useRef } from "react";
import "./Home.scss";

import Card from "../../components/public/Card/Card.jsx";
import BestLike from "../../components/user/BestLike/BestLike.jsx";
import SliderCustom from "../../components/public/Slider/Slider.jsx";
import SliderOwl from "../../components/user/SliderOwl/SliderOwl.jsx";
import WorkFlow from "../../components/user/WorkFlow/WorkFlow.jsx";
import PopularCat from "../../components/user/PopularCat/PopularCat.jsx";

const Home = () => {
  const settings = {
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    infinite: true,
    rows: 1,
    slidesPerRow: 1,
    autoplay: true,
    speed: 600,
    initialSlide: 0,
    autoplaySpeed: 5000,
  };

  return (
    <div className="home">
      <div className="container">
        <SliderOwl />
        <WorkFlow />
        <PopularCat />
        <div className="card">
          <Card />
          <Card />
          <Card />
        </div>
        {/* <BestLike/> */}
        <SliderCustom settings={settings} psbutton={"haha"}>
          <div className="bbook_crs_item">
            <img src="./img/hinh.jpg" alt="image" />
          </div>
          <div className="bbook_crs_item">
            <img src="./img/logo_dhct.png" alt="image" />
          </div>
          <div className="bbook_crs_item">
            <img src="./img/hinh.jpg" alt="image" />
          </div>
        </SliderCustom>
        <SliderCustom settings={settings} psbutton={"thu"}>
          <div className="bbook_crs_item">
            <p>1111111</p>
          </div>
          <div className="bbook_crs_item">
            <p>22222222</p>
          </div>
          <div className="bbook_crs_item">
            <p>333333333333</p>
          </div>
          <div className="bbook_crs_item">
            <p>4444444444</p>
          </div>
        </SliderCustom>
      </div>
    </div>
  );
};

export default Home;
