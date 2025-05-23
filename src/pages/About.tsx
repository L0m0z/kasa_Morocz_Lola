import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Collapse from "../components/Collapse";
import Banner from "../components/Banner";
import aboutBanner from "../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import "../styles/pages/about.scss";


const About = () => {
  return (
    <>
      <main className="about">
        <Banner image={aboutBanner} isHome={false} />
        <div className="about-collapse">
          <Collapse title="Fiabilité">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
          </Collapse>
          <Collapse title="Respect">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbateur entraînera une exclusion de notre plateforme.
          </Collapse>
          <Collapse title="Service">
            Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
          </Collapse>
          <Collapse title="Sécurité">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
          </Collapse>
        </div>
      </main>
    </>
  );
};

export default About;
  