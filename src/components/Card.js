import React from "react";
import "../styles/Card.css";

const Card = ({ src, alt, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Card;
