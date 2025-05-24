import React from 'react';
import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import StarRating from "../components/StarRating";
import "../styles/pages/logement.scss";

const Logement = () => {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) return <Navigate to="/404" />;

  return (
    <main className="logement">
      <Slideshow pictures={logement.pictures} />

      <div className="logement-header">
        <div className="logement-info">
          <h1>{logement.title}</h1>
          <p className="location">{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span className="tag" key={index}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="host-rating">
          <div className="host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <StarRating rating={parseInt(logement.rating)} />
        </div>
      </div>

      <div className="logement-collapse">
        <Collapse title="Description">
          {logement.description}
        </Collapse>

        <Collapse title="Équipements">
          {logement.equipments.map((eq, i) => (
            <div key={i}>{eq}</div>
          ))}
        </Collapse>
      </div>
    </main>
  );
};

export default Logement;
