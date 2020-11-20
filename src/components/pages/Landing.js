import React from "react";
import { Header } from "../Header";
import { Slider } from "../Slider";
import Categories from "../Categories";
import Recent from "../Recent";

const LandingPage = () => {
  return (
    <div className="container">
      <Header />
      <Slider />
      <Categories />
      <Recent />
    </div>
  );
};

export default LandingPage;
