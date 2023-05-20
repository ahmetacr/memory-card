import React, { useState } from "react";
import "../styles/Main.css";
import cardsArr from "./cardsArr";
import Card from "./Card";

function Main({ incrementScore, gameOver }) {
  const [cardArr, setCardArr] = useState(cardsArr);

  const click = (e) => {
    const clickedCardName = e.target.alt;
    let hasLost = false;

    const updatedArr = cardArr.map((card) => {
      if (card.name === clickedCardName) {
        if (card.clicked === false) {
          return { ...card, clicked: true };
        } else {
          hasLost = true;
        }
      }
      return card;
    });

    if (hasLost) {
      gameOver();
    } else {
      incrementScore();
      setCardArr(shuffleArray(updatedArr));
    }
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  };

  return (
    <div className="mainContainer">
      {cardArr.map((card, index) => (
        <Card key={index} src={card.src} name={card.name} onClick={click} />
      ))}
    </div>
  );
}

export default Main;
