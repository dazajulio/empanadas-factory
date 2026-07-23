'use client';
export default function Locations() {
  const locations = [
    { name: "Doral", address: "6475 NW 87th Ave", city: "Miami, FL", url: "https://www.google.com/maps/dir/?api=1&destination=6475+NW+87th+Ave,+Miami,+FL" },
    { name: "Wynwood Area", address: "4401 NW 2nd Ave", city: "Miami, FL", url: "https://www.google.com/maps/dir/?api=1&destination=4401+NW+2nd+Ave,+Miami,+FL" },
    { name: "Calle Ocho", address: "6868 SW 8th St", city: "Miami, FL", url: "https://www.google.com/maps/dir/?api=1&destination=6868+SW+8th+St,+Miami,+FL" }
  ];

  return (
    <section id="ubicaciones" className="locations" style={{padding: '8rem 0', background: 'var(--bg-offwhite)'}}>
        <div className="container center" style={{marginBottom: '3rem'}}>
            <h2 className="section-title" style={{fontSize: '3rem'}}>NUESTRAS <span className="red">UBICACIONES</span></h2>
            <p className="subtitle" style={{color: 'var(--text-light)', fontSize: '1.2rem'}}>Encuéntranos en Miami y disfruta del sabor original.</p>
        </div>
        
        <div className="container grid-2" style={{alignItems: 'stretch'}}>
            <div className="locations-video shadow-large" style={{borderRadius: '16px', overflow: 'hidden', minHeight: '400px'}}>
                <video src="/assets/Cazon.mp4" autoPlay loop muted playsInline className="rounded-image" style={{width: '100%', height: '100%', objectFit: 'cover'}}></video>
            </div>
            
            <div className="locations-cards" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center'}}>
                {locations.map((loc, idx) => (
                    <a key={idx} href={loc.url} target="_blank" rel="noopener noreferrer" className="location-card shadow-small" style={{
                        textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '1.5rem',
                        padding: '1.5rem 2rem', borderRadius: '12px', background: 'white', position: 'relative',
                        overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'; }}>
                        
                        {/* Fondo estilo mapa */}
                        <div style={{
                            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                            backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
                            backgroundSize: '20px 20px',
                            zIndex: 0
                        }}></div>
                        
                        {/* Marca de agua */}
                        <i className="fas fa-map-marked-alt" style={{
                            position: 'absolute', right: '-5%', bottom: '-20%', fontSize: '8rem', color: 'rgba(220, 38, 38, 0.04)', zIndex: 0
                        }}></i>
                        
                        <div style={{
                            width: '50px', height: '50px', borderRadius: '50%', background: 'var(--brand-red)', color: 'white',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0, zIndex: 1
                        }}>
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div style={{zIndex: 1, flexGrow: 1}}>
                            <h3 style={{margin: '0 0 0.3rem 0', fontSize: '1.4rem', color: 'var(--text-dark)'}}>{loc.name}</h3>
                            <p style={{margin: 0, color: 'var(--text-charcoal)', lineHeight: '1.4'}}>{loc.address}<br/>{loc.city}</p>
                        </div>
                        <div style={{zIndex: 1, color: 'var(--brand-red)'}}>
                            <i className="fas fa-external-link-alt"></i>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
  );
}
