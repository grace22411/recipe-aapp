import React, { useState, useEffect } from "react";
import "../styles/all.scss";

const data = [
  {
    title: "Larasta",
    description: `20.44 min`,
    views: 3232,
    imageUrl: "/images/1.jpg",
  },
  {
    title: "Hamburger",
    description: `20.44 min`,
    views: 3232,
    imageUrl: "/images/8.jpg",
  },
  {
    title: "Salad",
    description: `20.44 min`,
    views: 3232,
    imageUrl: "/images/9.jpg",
  },
  {
    title: "Stir Fried",
    description: `20.44 min`,
    views: 3232,
    imageUrl: "/images/10.jpg",
  },
  {
    title: "Egg Sauce",
    description: `20.44 min`,
    views: 3232,
    imageUrl: "/images/11.jpg",
  },
  {
    title: "Chicken Nugget",
    description: `20.44 min`,
    views: 3232,
    imageUrl: "/images/12.jpg",
  },
  {
    title: "Italian Sauce",
    description: `20.44 min`,
    views: 3232,
    imageUrl: "/images/13.jpg",
  },
];

export const Slider = () => {
  const Slide = () => {
    return data.map((data, i) => {
      return (
        <div
          key={i}
          className="g-slide backgroundFix"
          style={{
            backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.85)),url(${data.imageUrl})`,
          }}
          loading="lazy"
        >
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
    <div className="g-slides-container">
      <h4 className="titleHeader">Trending</h4>
      <div className="g-slides-wrapper">
        <Slide />
      </div>
    </div>
  );
};
