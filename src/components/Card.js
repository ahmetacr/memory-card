import React from "react";
import "../styles/Card.css";

const Card = ({ src, name, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={src} alt={name} />
    </div>
  );
};

export default Card;
