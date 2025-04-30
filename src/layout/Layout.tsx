// src/layouts/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* ici se rendront les pages comme Home, About, etc. */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
