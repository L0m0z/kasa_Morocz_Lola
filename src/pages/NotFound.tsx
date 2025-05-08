import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import '../styles/pages/notfound.scss';


const NotFound = () => {
  return (
    <>
    <Header />
      <main className="notfound">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-text">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="notfound-link">
          Retourner sur la page d’accueil
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;

