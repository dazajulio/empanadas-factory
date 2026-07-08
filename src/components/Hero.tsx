import Link from 'next/link';

export default function Hero() {
  return (
    <header id="hero" className="hero">
        <img className="hero-bg-image" src="/assets/HERO2_v5.png" alt="Fondo Empanadas Factory" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
            <h1 className="split-text"><span style={{ color: 'black' }}>EL AUTÉNTICO SABOR QUE CREÓ</span> <br/><span style={{ color: 'var(--brand-red)' }}>UNA LEYENDA</span></h1>
            <p>Bienvenidos a la cuna de la Empanada de Pabellón Original. Desde 1972, definiendo el crunch de Venezuela.</p>
            <div className="hero-actions">
                <Link href="/menu" className="btn-main-red">Hacer un Pedido</Link>
                <Link href="/#storytelling" className="btn-black">Nuestra Historia</Link>
            </div>
        </div>
        
        {/* Uber Eats Action Button */}
        <a 
            href="https://www.ubereats.com/store/empanadas-factory-doral/G4U9QDnoXU2xnprnNBb_Og?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjEyNjAxJTIwV2VzdGVybiUyMEF2ZSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMjU0NGNjZjljLWIwNWUtOTdjYi03ZTQ4LWViYTlhNGM3YTBkZiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDEuNjY0MzUxJTJDJTIybG9uZ2l0dWRlJTIyJTNBLTg3LjY3OTg1NCU3RA%3D%3D&ps=1&from_challenge=1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="uber-eats-btn shadow-large"
        >
            <img src="/assets/Uber-Eats-Logo-1.jpg" alt="Uber Eats" />
            <span>Delivery</span>
        </a>

        {/* Hero Locations */}
        <div className="hero-locations">
            <a href="https://www.google.com/maps/dir/?api=1&destination=6475+NW+87th+Ave,+Miami,+FL" target="_blank" rel="noopener noreferrer" className="hero-loc" style={{textDecoration: 'none', color: 'inherit'}}>
                <i className="fas fa-map-marker-alt"></i> 
                <div className="loc-details">
                    <strong>Doral</strong>
                    <span>6475 NW 87th Ave, Miami</span>
                </div>
            </a>
            <a href="https://www.google.com/maps/dir/?api=1&destination=4401+NW+2nd+Ave,+Miami,+FL" target="_blank" rel="noopener noreferrer" className="hero-loc" style={{textDecoration: 'none', color: 'inherit'}}>
                <i className="fas fa-map-marker-alt"></i> 
                <div className="loc-details">
                    <strong>Wynwood</strong>
                    <span>4401 NW 2nd Ave, Miami</span>
                </div>
            </a>
            <a href="https://www.google.com/maps/dir/?api=1&destination=6868+SW+8th+St,+Miami,+FL" target="_blank" rel="noopener noreferrer" className="hero-loc" style={{textDecoration: 'none', color: 'inherit'}}>
                <i className="fas fa-map-marker-alt"></i> 
                <div className="loc-details">
                    <strong>Calle Ocho</strong>
                    <span>6868 SW 8th St, Miami</span>
                </div>
            </a>
        </div>
    </header>
  );
}
