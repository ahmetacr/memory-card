import React from "react";
import "../styles/Main.css";
import cardsArr from "./cardsArr";

function Main() {
  return (
    <div className="mainContainer">
      {cardsArr.map((card, index) => (
        <React.Fragment key={index}>{card}</React.Fragment>
      ))}
    </div>
  );
}

export default Main;
