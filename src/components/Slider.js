import React, { useState, useEffect } from "react";
import "../styles/slider.css";

const data = [
  {
    title: "Hello World",
    description: `non quos iste impedit ipsam quia, laudantium quam obcaecati amet ad labore natus magnam! Iusto.`,
    views: 3232,
    imageUrl: "images/3.png",
  },
  {
    title: "Hello World",
    description: `non quos iste impedit ipsam quia, laudantium quam obcaecati amet ad labore natus magnam! Iusto.`,
    views: 3232,
    imageUrl: "images/3.png",
  },
  {
    title: "Hello World",
    description: `non quos iste impedit ipsam quia, laudantium quam obcaecati amet ad labore natus magnam! Iusto.`,
    views: 3232,
    imageUrl: "images/3.png",
  },
  {
    title: "Hello World",
    description: `non quos iste impedit ipsam quia, laudantium quam obcaecati amet ad labore natus magnam! Iusto.`,
    views: 3232,
    imageUrl: "images/3.png",
  },
  {
    title: "Hello World",
    description: `non quos iste impedit ipsam quia, laudantium quam obcaecati amet ad labore natus magnam! Iusto.`,
    views: 3232,
    imageUrl: "images/3.png",
  },
];

export const Slider = () => {
  const Slide = () => {
    return data.map((data) => {
      return (
        <div className="g-slide backgroundFix">
          <div>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <p>{data.views}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div className="g-slides-wrapper">
        <Slide />
      </div>
    </div>
  );
};
