import React from "react";

const colors = ["#E11419", "darkblue", "green", "indigo"];

const categoriesData = [
  {
    name: "Fruits",
    icon: "fa-lemon",
  },
  {
    name: "Fast Food",
    icon: "fa-hamburger",
  },
  {
    name: "Drinks",
    icon: "fa-cocktail",
  },
  {
    name: "Others",
    icon: "fa-utensils",
  },
];

const categoriesUi = ({ name, icon }, color) => {
  return (
    <div key={Math.random()} className="centered">
      <div>
        <div
          style={{ backgroundColor: colors[color] }}
          className="categorie centered"
        >
          <i className={`fa ${icon} iconColor`}></i>
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <div>
      <h4 className="titleHeader">Categories</h4>
      <div className="categoriesList">
        {categoriesData.map((cat, i) => categoriesUi(cat, i))}
      </div>
    </div>
  );
};

export default Categories;
