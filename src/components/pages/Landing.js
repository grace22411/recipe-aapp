import React from "react";
import { Header } from "../Header";
import { Slider } from "../Slider";
import Categories from "../Categories";

const LandingPage = () => {
  return (
    <div className="container">
      <Header />
      <Slider />
      <Categories />
    </div>
  );
};

export default LandingPage;
