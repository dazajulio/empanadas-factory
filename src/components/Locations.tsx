export default function Locations() {
  return (
    <section id="ubicaciones" className="locations">
        <div className="container center">
            <h2 className="section-title" style={{fontSize: '3rem'}}>NUESTRAS <span className="red">UBICACIONES</span></h2>
            <p className="subtitle" style={{marginBottom: '3rem', color: 'var(--text-light)', fontSize: '1.2rem'}}>Encuéntranos en Miami y disfruta del sabor original.</p>
            <div className="locations-grid">
                <a href="https://www.google.com/maps/dir/?api=1&destination=6475+NW+87th+Ave,+Miami,+FL" target="_blank" rel="noopener noreferrer" className="location-card shadow-large" style={{textDecoration: 'none', color: 'inherit', display: 'block'}}>
                    <i className="fas fa-map-marker-alt"></i>
                    <h3>Doral</h3>
                    <p>6475 NW 87th Ave<br/>Miami, FL</p>
                </a>
                <a href="https://www.google.com/maps/dir/?api=1&destination=4401+NW+2nd+Ave,+Miami,+FL" target="_blank" rel="noopener noreferrer" className="location-card shadow-large" style={{textDecoration: 'none', color: 'inherit', display: 'block'}}>
                    <i className="fas fa-map-marker-alt"></i>
                    <h3>Wynwood Area</h3>
                    <p>4401 NW 2nd Ave<br/>Miami, FL</p>
                </a>
                <a href="https://www.google.com/maps/dir/?api=1&destination=6868+SW+8th+St,+Miami,+FL" target="_blank" rel="noopener noreferrer" className="location-card shadow-large" style={{textDecoration: 'none', color: 'inherit', display: 'block'}}>
                    <i className="fas fa-map-marker-alt"></i>
                    <h3>Calle Ocho</h3>
                    <p>6868 SW 8th St<br/>Miami, FL</p>
                </a>
            </div>
        </div>
    </section>
  );
}
