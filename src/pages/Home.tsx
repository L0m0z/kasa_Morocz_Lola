import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import homeBanner from '../assets/images/image-source-1.png';
import logements from "../data/logements.json";
import '../styles/pages/home.scss';

const Home = () => {
  return (
    <main>
      <Banner image={homeBanner} title="Chez vous, partout et ailleurs" isHome={true} />
      
      <section className="gallery">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
