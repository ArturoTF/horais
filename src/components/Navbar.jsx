import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
function Navbar() {
  return (
    <nav className='menu'>
      <link to="/">Home</link>
      <link to="/gallery">Galeria</link>
      <link to="/about">Acerca de</link>
      <link to="/contact">Contacto</link>
    </nav>
  )
}

export default Navbar