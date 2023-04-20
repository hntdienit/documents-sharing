import React, { useRef } from "react";
import "./Home.scss";

import Banner from "../../components/user/Banner/Banner.jsx";
import PopularCat from "../../components/user/PopularCat/PopularCat";

const Home = () => {
  return (
    <>
      <Banner />
      <PopularCat />
    </>
  );
};

export default Home;
