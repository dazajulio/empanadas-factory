'use client';
import { useState } from 'react';

export default function Storytelling() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <>
      <section id="storytelling" className="storytelling">
          <div className="container grid-2">
              <div className="story-content">
                  <h2 className="section-title">El Nacimiento de un <span className="red">Ícono</span> <br/><span style={{fontSize: '2rem', color: 'var(--text-light)'}}>(1972)</span></h2>
                  <p>En una esquina vibrante de Barquisimeto, la familia Esser Zavarce desafió las reglas de la cocina tradicional. ¿Por qué comer el pabellón en un plato si podías llevar toda la identidad de un país crujiendo en tus manos? Así nació la primera empanada de pabellón del mundo.</p>
                  
                  <div className="story-badge" style={{marginTop: '2rem'}}>
                      <span className="badge-number">#1</span>
                      <span className="badge-text">Creadores Históricos (Certificado 1984)</span>
                  </div>
              </div>
              <div className="story-image-container" style={{textAlign: 'center'}}>
                  {/* Placeholder for the diploma image */}
                  <video src="/assets/Conoce más sobre nuestra historia.mp4" poster="/assets/anavictoria.jpg" controls preload="metadata" className="rounded-image shadow-large" style={{maxWidth: '80%', margin: '0 auto', display: 'block'}}></video>
              </div>
          </div>
          
          <div className="container" style={{marginTop: '6rem', maxWidth: '800px', textAlign: 'center'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem'}}>Evidencia <span className="red">Innegable</span> de la Originalidad</h2>
            <p style={{fontSize: '1.2rem', color: 'var(--text-charcoal)', lineHeight: '1.8'}}>Cualquiera puede mezclar ingredientes, pero solo uno posee el diploma al mérito de 1984 por haber inventado el concepto. Nuestra receta está avalada por la historia, las familias larenses y el tiempo.</p>
          </div>
          
          {/* Premios Reales */}
          <div className="container awards-section center" style={{marginTop: '4rem'}}>
              <h2 className="section-title" style={{fontSize: '2.5rem'}}>GALARDONES <span className="red">OFICIALES</span></h2>
              <div className="awards-grid">
                  <div className="award-card">
                      <div className="award-card-inner">
                          <div className="award-front">
                              <i className="fas fa-award"></i>
                              <h3>Terepaima de Oro</h3>
                              <p>Barquisimeto, 1984</p>
                          </div>
                          <div className="award-back">
                              <img src="/assets/dimploma3.jpg" alt="Diploma 1984" onClick={() => setModalImage('/assets/dimploma3.jpg')} />
                          </div>
                      </div>
                  </div>
                  <div className="award-card">
                      <div className="award-card-inner">
                          <div className="award-front">
                              <i className="fas fa-award"></i>
                              <h3>Terepaima de Oro</h3>
                              <p>Barquisimeto, 1985</p>
                          </div>
                          <div className="award-back">
                              <img src="/assets/diploma original.png" alt="Diploma 1985" onClick={() => setModalImage('/assets/diploma original.png')} />
                          </div>
                      </div>
                  </div>
                  <div className="award-card">
                      <div className="award-card-inner">
                          <div className="award-front">
                              <i className="fas fa-trophy"></i>
                              <h3>Gran Premio Gastronómico</h3>
                              <p>Venezuela, 1986</p>
                          </div>
                          <div className="award-back">
                              <img src="/assets/diploma2.jpg" alt="Diploma 1986" onClick={() => setModalImage('/assets/diploma2.jpg')} />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Video Gallery Section */}
      <section id="videos" className="video-gallery" style={{paddingTop: '2rem'}}>
          <div className="container center">
              <h2 className="section-title" style={{fontSize: '3rem'}}>EL RETORNO DE LA <span className="red">LEYENDA</span> <br/><span style={{fontSize: '2rem', color: 'var(--text-light)'}}>(2026)</span></h2>
              <p className="subtitle" style={{marginBottom: '4rem', color: 'var(--text-charcoal)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 4rem auto'}}>Hoy, más de cinco décadas después, trasladamos ese mismo ADN disruptivo, esa masa perfectamente crujiente y ese equilibrio exacto al ecosistema digital actual. Mismo secreto, nueva era.</p>
              <div className="video-grid">
                  <div className="video-wrapper shadow-large">
                      <video src="/assets/historia.mp4#t=2" controls preload="metadata" className="rounded-image"></video>
                  </div>
                  <div className="video-wrapper shadow-large">
                      <video src="/assets/Creadores de la empanada de pabellón.mp4#t=3" controls preload="metadata" className="rounded-image"></video>
                  </div>
                  <div className="video-wrapper shadow-large">
                      <video src="/assets/1974.mp4#t=1" controls preload="metadata" className="rounded-image"></video>
                  </div>
              </div>
          </div>
      </section>

      {/* Image Modal */}
      {modalImage && (
        <div className="image-modal-overlay" onClick={() => setModalImage(null)}>
            <div className="image-modal-content" onClick={e => e.stopPropagation()}>
                <span className="close-modal" onClick={() => setModalImage(null)}>&times;</span>
                <img src={modalImage} alt="Diploma Ampliado" />
            </div>
        </div>
      )}
    </>
  );
}
