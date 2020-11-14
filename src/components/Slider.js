import React, { useState, useEffect } from "react";
import "../styles/slider.scss";

const data = [
  {
    title: "Larasta",
    description: `20.44 min`,
    views: 3232,
    imageUrl: "images/eating-greasy-food.jpeg",
  },
  {
    title: "Hamburger",
    description: `20.44 min`,
    views: 3232,
    imageUrl: "images/eating-greasy-food.jpeg",
  },
  {
    title: "Salad",
    description: `20.44 min`,
    views: 3232,
    imageUrl: "images/eating-greasy-food.jpeg",
  },
  {
    title: "Stir Fried",
    description: `20.44 min`,
    views: 3232,
    imageUrl: "images/eating-greasy-food.jpeg",
  },
  {
    title: "Egg Sauce",
    description: `20.44 min`,
    views: 3232,
    imageUrl: "images/eating-greasy-food.jpeg",
  },
];

export const Slider = () => {
  const Slide = () => {
    return data.map((data) => {
      return (
        <div className="g-slide backgroundFix" style={{backgroundImage:`linear-gradient(to left, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.85)),url(${data.imageUrl})`}}>
          <div>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <p>{data.views} views</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container g-slides-container">
      <div className="g-slides-wrapper">
        <Slide />
      </div>
    </div>
  );
};
