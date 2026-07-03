import Link from 'next/link';

export default function Hero() {
  return (
    <header id="hero" className="hero">
        <img className="hero-bg-image" src="/assets/HERO IMAGE.png" alt="Fondo Empanadas Factory" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
            <h1 className="split-text">LA HISTORIA <br/>NO SE SABORIZA, <br/><span className="red-text">SE HEREDA.</span></h1>
            <p>Bienvenidos a la cuna de la Empanada de Pabellón Original. Desde 1972, definiendo el crunch de Venezuela.</p>
            <div className="hero-actions">
                <Link href="/menu" className="btn-main-red">Hacer un Pedido</Link>
                <Link href="/#storytelling" className="btn-outline-white">Nuestra Historia</Link>
            </div>
        </div>
        {/* Hero Locations */}
        <div className="hero-locations">
            <div className="hero-loc">
                <i className="fas fa-map-marker-alt"></i> 
                <div className="loc-details">
                    <strong>Doral</strong>
                    <span>6475 NW 87th Ave, Miami</span>
                </div>
            </div>
            <div className="hero-loc">
                <i className="fas fa-map-marker-alt"></i> 
                <div className="loc-details">
                    <strong>Wynwood</strong>
                    <span>4401 NW 2nd Ave, Miami</span>
                </div>
            </div>
            <div className="hero-loc">
                <i className="fas fa-map-marker-alt"></i> 
                <div className="loc-details">
                    <strong>Calle Ocho</strong>
                    <span>6868 SW 8th St, Miami</span>
                </div>
            </div>
        </div>
    </header>
  );
}
