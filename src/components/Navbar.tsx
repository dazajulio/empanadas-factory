'use client';
import { useEffect, useState } from 'react';

import Link from 'next/link';

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
        <Link href="/" className="logo" style={{textDecoration: 'none'}}>
          <span className="red">EMPANADAS</span>FACTORY
        </Link>
        <div className="nav-links">
          <Link href="/#hero">Inicio</Link>
          <Link href="/#storytelling">Historia</Link>
          <Link href="/#proceso">Calidad</Link>
          <Link href="/menu">Menú</Link>
          <Link href="/menu" className="btn-red">¡Pide Ahora!</Link>
        </div>
      </div>
    </nav>
  );
}
