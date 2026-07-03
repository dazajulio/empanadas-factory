'use client';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <div className="logo">
          <span className="red">EMPANADAS</span>FACTORY
        </div>
        <div className="nav-links">
          <a href="#hero">Inicio</a>
          <a href="#storytelling">Historia</a>
          <a href="#proceso">Calidad</a>
          <a href="#menu">Menú</a>
          <a href="https://www.ubereats.com/store/empanadas-factory-doral/G4U9QDnoXU2xnprnNBb_Og?srsltid=AfmBOopMAkjIwFLyHSY2XjYcTTgee9GuUted4hqSX3p2EzLrhPVL-guy" target="_blank" className="btn-red" rel="noreferrer">¡Pide Ahora!</a>
        </div>
      </div>
    </nav>
  );
}
