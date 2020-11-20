import React from "react";

const recentData = [
  {
    title: "Burger",
    author: "John Doe",
    authorProfile: "",
    description: "Have the best burger of a lifetime",
    time: "5mins ago",
    views: Math.ceil(Math.random() * 1000),
    image: "/images/1.jpg",
    id: 1,
  },
  {
    title: "Stakes",
    author: "Jamie  joe",
    authorProfile: "",
    description: "Have the best burger of a lifetime",
    time: "5mins ago",
    views: Math.ceil(Math.random() * 1000),
    image: "/images/4.jpg",
    id: 1,
  },
  {
    title: "Gorgorn",
    author: "Grace Omole",
    authorProfile: "",
    description: "Have the best burger of a lifetime",
    time: "5mins ago",
    views: Math.ceil(Math.random() * 1000),
    image: "/images/8.jpg",
    id: 1,
  },
  {
    title: "Ham and chesse",
    author: "Emmaccen O",
    authorProfile: "",
    description: "Have the best burger of a lifetime",
    time: "5mins ago",
    views: Math.ceil(Math.random() * 1000),
    image: "/images/2.jpg",
    id: 1,
  },
  {
    title: "Italian",
    author: "Adesola M",
    authorProfile: "",
    description: "Have the best burger of a lifetime",
    time: "5mins ago",
    views: Math.ceil(Math.random() * 1000),
    image: "/images/3.jpg",
    id: 1,
  },
  {
    title: "French",
    author: "Niyi Adek",
    authorProfile: "",
    description: "Have the best burger of a lifetime",
    time: "5mins ago",
    views: Math.ceil(Math.random() * 1000),
    image: "/images/6.jpg",
    id: 1,
  },
  {
    title: "Blake",
    author: "John Anwana",
    authorProfile: "",
    description: "Have the best burger of a lifetime",
    time: "5mins ago",
    views: Math.ceil(Math.random() * 1000),
    image: "/images/5.jpg",
    id: 1,
  },
  {
    title: "Pasta",
    author: "Bunmi O",
    authorProfile: "",
    description: "Have the best burger of a lifetime",
    time: "5mins ago",
    views: Math.ceil(Math.random() * 1000),
    image: "/images/7.jpg",
    id: 1,
  },
  {
    title: "Pork Meal",
    author: "Qomodo Q",
    authorProfile: "",
    description: "Have the best burger of a lifetime",
    time: "5mins ago",
    views: Math.ceil(Math.random() * 1000),
    image: "/images/13.jpg",
    id: 1,
  },
  {
    title: "Snack",
    author: "French M",
    authorProfile: "",
    description: "Have the best burger of a lifetime",
    time: "5mins ago",
    views: Math.ceil(Math.random() * 1000),
    image: "/images/14.jpg",
    id: 1,
  },
];

const recentCard = ({ title, author, description, time, views, image, id }) => {
  return (
    <div key={id} className="recentCard">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="backgroundFix recentBg"
      ></div>
      <div className="recentContent">
        <div className="flex-sp-btw">
          <div className="centered">
            <div className="">
              <div className="author"></div>
              <p>{author}</p>
            </div>
          </div>
          <div className="centered">
            <i className="fa fa-bookmark"></i>
          </div>
        </div>
        <div>
          <h4>{title}</h4>
          <p className="recentDesc">{description}</p>
        </div>
        <div className="row">
          <p className=" col">{time}</p>
          <p className=" col">{views} views</p>
        </div>
      </div>
    </div>
  );
};
const Recent = () => {
  return (
    <div>
      <h4 className="titleHeader">Recent</h4>
      {recentData.map((recent) => recentCard(recent))}
    </div>
  );
};

export default Recent;
