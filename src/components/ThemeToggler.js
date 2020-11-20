import React, { useState, useEffect } from "react";

const ThemeToggler = () => {
  const [isDarkTheme, setDark] = useState(false);

  useEffect(() => {
    if (isDarkTheme) {
      document.querySelector("body").classList.remove("theme");
    } else {
      document.querySelector("body").classList.add("theme");
    }
  }, [isDarkTheme]);

  return (
    <div
      onClick={() => setDark(!isDarkTheme)}
      style={
        isDarkTheme
          ? { backgroundColor: "whitesmoke" }
          : { backgroundColor: "black" }
      }
      className="themeToggler"
    >
      <i
        style={isDarkTheme ? { color: "black" } : { color: "whitesmoke" }}
        className="fa fa-moon"
      ></i>
    </div>
  );
};

export default ThemeToggler;
