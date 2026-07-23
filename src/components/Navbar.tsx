'use client';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkBg = pathname === '/menu';
  const navClass = `${scrolled ? 'scrolled' : ''} ${isDarkBg && !scrolled ? 'navbar-dark-bg' : ''}`.trim();

  return (
    <nav id="navbar" className={navClass}>
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
