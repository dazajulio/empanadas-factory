export default function Quality() {
  return (
    <section id="proceso" className="quality" style={{background: 'var(--bg-offwhite)', color: 'var(--text-charcoal)', padding: '8rem 0'}}>
        <div className="container">
            <div className="quality-layout">
                {/* Video del lado izquierdo */}
                <div className="quality-video-wrapper shadow-large">
                    <video src="/assets/Cazon.mp4" autoPlay loop muted playsInline controls className="rounded-image" style={{width: '100%', height: '100%', objectFit: 'cover'}}></video>
                </div>
                
                {/* Contenido y Reviews del lado derecho */}
                <div className="quality-content">
                    <h2 className="title-large" style={{color: 'var(--brand-red-dark)', marginBottom: '1rem', lineHeight: '1.1'}}>EL VEREDICTO DE <br/>NUESTROS <span className="red">CLIENTES</span></h2>
                    <p style={{fontSize: '1.2rem', marginBottom: '3rem', color: 'var(--text-charcoal)'}}>No lo decimos nosotros. Lo confirman quienes ya han experimentado el verdadero crunch de Venezuela en cada mordisco.</p>
                    
                    <div className="quality-grid-2x2">
                        <div className="quality-card" style={{background: 'var(--bg-white)', borderColor: 'rgba(0,0,0,0.05)', color: 'var(--text-dark)', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', padding: '2rem'}}>
                            <div style={{color: '#FBC02D', marginBottom: '0.5rem'}}>
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <p style={{color: 'var(--text-charcoal)', fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1rem'}}>"This place is the best empanadas spot in the area, and I'm a Venezuelan living here for more than 25 years. You gotta try it!"</p>
                            <h3 style={{fontSize: '1.1rem', marginBottom: '0.2rem', fontWeight: 700}}>Yetzabeth A.</h3>
                            <p style={{fontSize: '0.8rem', color: 'var(--text-light)'}}>04/20/26</p>
                        </div>
                        
                        <div className="quality-card active" style={{background: 'var(--brand-red)', color: 'white', borderColor: 'transparent', transform: 'translateY(-10px)', boxShadow: '0 25px 50px rgba(238, 29, 35, 0.2)', padding: '2rem'}}>
                            <div style={{color: '#FBC02D', marginBottom: '0.5rem'}}>
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <p style={{color: 'rgba(255,255,255,0.95)', fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1rem'}}>"Probé por primera vez las empanadas y están buenisimas. Mis nuevas Fav 🤩"</p>
                            <h3 style={{fontSize: '1.1rem', marginBottom: '0.2rem', color: 'white', fontWeight: 700}}>Roberto C.</h3>
                            <p style={{fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)'}}>03/08/26</p>
                        </div>
                        
                        <div className="quality-card" style={{background: 'var(--bg-white)', borderColor: 'rgba(0,0,0,0.05)', color: 'var(--text-dark)', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', padding: '2rem'}}>
                            <div style={{color: '#FBC02D', marginBottom: '0.5rem'}}>
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <p style={{color: 'var(--text-charcoal)', fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1rem'}}>"The best Empanadas in town. I live far and always order from here even if it takes long to arrive. Absolutely amazing, consistent quality."</p>
                            <h3 style={{fontSize: '1.1rem', marginBottom: '0.2rem', fontWeight: 700}}>Shimon C.</h3>
                            <p style={{fontSize: '0.8rem', color: 'var(--text-light)'}}>03/22/26</p>
                        </div>
                        
                        <div className="quality-card" style={{background: 'var(--bg-white)', borderColor: 'rgba(0,0,0,0.05)', color: 'var(--text-dark)', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', padding: '2rem'}}>
                            <div style={{color: '#FBC02D', marginBottom: '0.5rem'}}>
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <p style={{color: 'var(--text-charcoal)', fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1rem'}}>"Estas empanadas son mundiales 🤤"</p>
                            <h3 style={{fontSize: '1.1rem', marginBottom: '0.2rem', fontWeight: 700}}>TEDDY R.</h3>
                            <p style={{fontSize: '0.8rem', color: 'var(--text-light)'}}>05/18/26</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
