import React, { useRef } from "react";
import "./Home.scss";

import Card from "../../components/public/Card/Card.jsx";
import BestLike from "../../components/user/BestLike/BestLike.jsx";
import SliderCustom from "../../components/public/Slider/Slider.jsx";
import SliderOwl from "../../components/user/SliderOwl/SliderOwl.jsx";
import WorkFlow from "../../components/user/WorkFlow/WorkFlow.jsx";
import PopularCat from "../../components/user/PopularCat/PopularCat.jsx";
import Featured from "../../components/user/Featured/Featured.jsx";
import HeaderPage from "../../components/user/HeaderPage/HeaderPage.jsx";

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
        <HeaderPage/>
        <SliderOwl />
        <WorkFlow />
        <PopularCat />
        <Featured/>
        <BestLike/>
        {/* <SliderCustom settings={settings} psbutton={"haha"}>
          <div className="bbook_crs_item">
            <img src="./img/hinh.jpg" alt="image" />
          </div>
          <div className="bbook_crs_item">
            <img src="./img/logo_dhct.png" alt="image" />
          </div>
          <div className="bbook_crs_item">
            <img src="./img/hinh.jpg" alt="image" />
          </div>
        </SliderCustom> */}

      </div>
    </div>
  );
};

export default Home;
