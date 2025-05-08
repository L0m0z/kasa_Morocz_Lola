import React from 'react';
import { useParams } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer'
import logements from "../data/logements.json";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import "../styles/pages/logement.scss";


const Logement = () => {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) return <Navigate to="/404" />;

  const rating = parseInt(logement.rating);
  const stars = Array(5).fill(null);

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
          <div className="rating">
            {stars.map((_, i) => (
              <span
                key={i}
                className={i < rating ? "star filled" : "star"}
              >★</span>
            ))}
          </div>
        </div>
      </div>

      <div className="logement-collapse">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={logement.equipments.map((eq, i) => <li key={i}>{eq}</li>)}
        />
      </div>
    </main>
  );
};

export default Logement;
