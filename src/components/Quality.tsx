export default function Quality() {
  const reviews = [
    { name: "Maria", initials: "M", color: "#E91E63", stats: "2 opiniones", date: "Hace un mes", text: "Buenisimas!!! Vinimos por la empanada de cazón y de verdad que estaba riquisima y por supuesto la de pabellón que nunca deja mal. Excelente! Recomendado 100%" },
    { name: "Luis Fernando Londoño", initials: "L", color: "#2196F3", stats: "5 opiniones", date: "Hace 3 meses", text: "Si estás buscando comida callejera con sabor brutal, este food truck es una parada obligatoria. El lugar combina lo mejor de una cafetería con comida rápida estilo latino: desde empanadas bien rellenas hasta pepitos, hamburguesas y jugos naturales." },
    { name: "Summit Axis Export", initials: "S", color: "#4CAF50", stats: "1 opinión·1 foto", date: "Hace 2 meses", text: "Buen precio. Buena atención. Excelente comida. Recomendado 100%" },
    { name: "solange sanchez", initials: "s", color: "#FF9800", stats: "Local Guide·88 opiniones", date: "Hace 5 meses", text: "Las empanadas estaban super deliciosas,lo mejor estaban crujientes y recien hechas,la de cazon mi favorita y su picante mezclado con su salsa algo genial de verdad los recomiendo un lugar que volveria a ir" },
    { name: "Carmen Perozo", initials: "C", color: "#9C27B0", stats: "Local Guide·16 opiniones", date: "Hace 6 meses", text: "Deliciosas empanadas, frescas y crocantes. Buen ambiente y excelente atención." },
    { name: "Job Santana", initials: "J", color: "#3F51B5", stats: "3 opiniones", date: "Hace 2 meses", text: "Riquísimo, la de carne mechada deben probarla si o si 10/10" },
    { name: "Juan Benavides", initials: "J", color: "#009688", stats: "1 opinión", date: "Hace un mes", text: "La atención es excelente, las empanadas con buen sabor, 100% recomendado, sabor a mi país!! Que ricoooo!!!" },
    { name: "Dayan Gutierrez", initials: "D", color: "#F44336", stats: "Local Guide·51 opiniones", date: "Hace un mes", text: "Lugar excelente. Ni hablar de la atención y el trato al costumer. Sin duda un lugar para pasarla bien y compartir con amigos." },
    { name: "francisca di lucente de silva", initials: "f", color: "#795548", stats: "4 opiniones", date: "Hace un mes", text: "Divino siempre excellent service" }
  ];

  return (
    <section id="proceso" className="quality" style={{background: 'var(--bg-offwhite)', color: 'var(--text-charcoal)', padding: '8rem 0', overflow: 'hidden'}}>
        <div className="container center" style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <h2 className="title-large" style={{color: 'var(--brand-red-dark)', marginBottom: '1rem', lineHeight: '1.1', fontSize: '3rem'}}>
                EL VEREDICTO DE <br/>NUESTROS <span className="red">CLIENTES</span>
            </h2>
            <p style={{fontSize: '1.1rem', marginBottom: '4rem', color: 'var(--text-charcoal)'}}>
                No lo decimos nosotros. Lo confirman quienes ya han experimentado el verdadero crunch de Venezuela en cada mordisco.
            </p>
        </div>
        
        <div className="marquee-wrapper" style={{width: '100%', overflow: 'hidden', position: 'relative'}}>
            <div className="marquee-content" style={{display: 'flex', gap: '1.5rem', width: 'max-content'}}>
                {/* Doble render para que el marquee sea infinito sin saltos */}
                {[...reviews, ...reviews].map((review, idx) => (
                    <div key={idx} className="google-review-card shadow-small" style={{width: '350px', flexShrink: 0, whiteSpace: 'normal'}}>
                        <div className="gr-header">
                            <div className="gr-avatar" style={{backgroundColor: review.color}}>{review.initials}</div>
                            <div className="gr-meta">
                                <div className="gr-name">{review.name}</div>
                                <div className="gr-date">{review.date}</div>
                            </div>
                            <div className="gr-google-icon">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="18" height="18" />
                            </div>
                        </div>
                        <div className="gr-stars">
                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                        </div>
                        <p className="gr-text">{review.text}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="container center" style={{marginTop: '3rem'}}>
             <a href="https://share.google/GoYObDX8SLAgoo7wK" target="_blank" rel="noopener noreferrer" className="gr-all-reviews-btn" style={{display: 'inline-block'}}>
                Ver todas las opiniones <i className="fas fa-arrow-right" style={{marginLeft: '0.5rem'}}></i>
             </a>
        </div>
    </section>
  );
}
