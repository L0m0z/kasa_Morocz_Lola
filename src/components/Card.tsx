import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/card.scss";

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt={title} className="card-cover" />
      <h2 className="card-title">{title}</h2>
    </Link>
  );
};

export default Card;
