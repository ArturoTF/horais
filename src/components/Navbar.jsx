import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
function Navbar() {
  return (
    <nav className='menu'>
      <Link to="/">Home</Link>
      <Link to="/gallery">Galeria</Link>
      <Link to="/about">Acerca de</Link>
      <Link to="/contact">Contacto</Link>
    </nav>
  )
}

export default Navbar