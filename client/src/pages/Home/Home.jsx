import React, { useRef } from "react";
import "./Home.scss";

// import Card from "../../components/public/Card/Card.jsx";
// import SliderCustom from "../../components/public/Slider/Slider.jsx";
// import SliderOwl from "../../components/user/SliderOwl/SliderOwl.jsx";
// import WorkFlow from "../../components/user/WorkFlow/WorkFlow.jsx";
// import PopularCat from "../../components/user/PopularCat/PopularCat.jsx";
// import Featured from "../../components/user/Categories/Categories.jsx";
import Banner from "../../components/user/Banner/Banner.jsx";
import Categories from "../../components/user/Categories/Categories.jsx"
import Featured from "../../components/user/Featured/Featured.jsx";

const Home = () => {
  return (
    <div className="home">
      <div className="">
        <Banner/>
        <Categories/>
        <Featured/>

        {/* <SliderOwl />
        <WorkFlow />
        <PopularCat />
        <Featured/>
        <BestLike/> */}
      </div>
    </div>
  );
};

export default Home;
