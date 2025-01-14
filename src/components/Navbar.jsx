import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="menu">
      <h1 className="menu-title">HORAIS</h1>
      {/* Botón hamburguesa */}
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      {/* Menú desplegable para pantallas pequeñas */}
      <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/gallery" className="menu-link">Galería</Link>
        <Link to="/about" className="menu-link">About</Link>
        <Link to="/" className="menu-link">Home</Link>
      </div>
    </nav>
  );
}

export default Navbar;
