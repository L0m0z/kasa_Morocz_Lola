// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Fichier de styles
import App from './App'; // Importation de ton composant principal

// Création du point d'entrée React et rendu de l'application
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App /> {/* Pas besoin de BrowserRouter ici */}
  </StrictMode>
);
