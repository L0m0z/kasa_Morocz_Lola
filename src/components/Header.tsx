// src/components/Header.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/LOGO (1).png'
import '../styles/layout/header.scss'

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Kasa" className="header__logo" />
      </Link>
      <nav className="header__nav">
        <Link to="/" className="header__link">Accueil</Link>
        <Link to="/a-propos" className="header__link">À propos</Link>
      </nav>
    </header>
  )
}

export default Header
