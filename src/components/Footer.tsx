
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/LOGO (2).png'


const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/">
        <img src={logo} alt="Kasa" className="footer__logo" />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer