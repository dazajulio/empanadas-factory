export default function Quality() {
  const reviews = [
    {
      name: "ARTURO MIER Y TERAN",
      initials: "A",
      color: "#4CAF50",
      stats: "Local Guide·144 opiniones·726 fotos",
      date: "Hace un mes",
      tags: "Comida para llevar | Desayuno | $10-20",
      text: "Muy buenas las empanadas, hechas en el momento, súper crujientes y el sabor de los rellenos excelentes, la de carne mechada y carne molida súper buenas. La atención es muy buena, muy atentas y cordiales. Para ser un foodtruck y estar en un estacionamiento el espacio es agradable, limpio y tienes sus mesas bajo toldos."
    },
    {
      name: "Jose Fernando Serrano",
      initials: "J",
      color: "#2196F3",
      stats: "4 opiniones·2 fotos",
      date: "Hace un mes",
      tags: "Consumo en el lugar | Desayuno | $10-20",
      text: "Excelente servicio, sabor: me recordó a mi Venezuela! El crouch de las empanadas increíble."
    },
    {
      name: "Elizabeth Cristina Barreto",
      initials: "E",
      color: "#9C27B0",
      stats: "9 opiniones·1 foto",
      date: "Hace un mes",
      tags: "Consumo en el lugar | Desayuno | $1-10",
      text: "Su personal muy gentil y el sabor el mas rico son sin duda las mejores empanadas que sigan asi de exelentes"
    },
    {
      name: "charbel el barche",
      initials: "c",
      color: "#F44336",
      stats: "9 opiniones·5 fotos",
      date: "Hace 5 meses",
      tags: "",
      text: "De las mejores empanadas de Miami! La masa es deliciosa y la atención increible! Sin duda se convertira en un sitio constante para mi!"
    },
    {
      name: "Leroy Contreras Bonet",
      initials: "L",
      color: "#FF9800",
      stats: "13 opiniones·1 foto",
      date: "Hace un mes",
      tags: "",
      text: "Las mejores empanadas de Miami y el Doral !! Atención increíble … el Verdadero Sabor de la empanada venezolana localizados en el Doral !! 100% Recomendados"
    },
    {
      name: "Lorena Romero",
      initials: "L",
      color: "#E91E63",
      stats: "8 opiniones·3 fotos",
      date: "Hace 3 meses",
      tags: "",
      text: "Las empanadas de queso venezolanas más ricas de miami. La masa súper finita y crocante. El queso de calidad.Penelope y Adrián súper amables❤️"
    },
    {
      name: "Manuel Salvatierra",
      initials: "M",
      color: "#3F51B5",
      stats: "11 opiniones·2 fotos",
      date: "Hace 10 meses",
      tags: "Consumo en el lugar | Desayuno | $1-10",
      text: "Es la mejor empanada que me he comido desde hace muchos años, súper amables, nos atendieron muy rápido, las empanadas estaban fresquitas crujientes el relleno delicioso! Súper recomendado ."
    },
    {
      name: "Hector Briceño",
      initials: "H",
      color: "#009688",
      stats: "6 opiniones·13 fotos",
      date: "Hace un mes",
      tags: "Consumo en el lugar | Desayuno | $1-10",
      text: "De las mejores empanadas que he comido! Crujientes y con mucho sabor. Además tienen muy buenos precios, el staff es amable y el lugar es agradable para comer 👌🏻"
    }
  ];

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
                    <h2 className="title-large" style={{color: 'var(--brand-red-dark)', marginBottom: '1rem', lineHeight: '1.1', fontSize: '2.5rem'}}>
                        EL VEREDICTO DE <br/>NUESTROS <span className="red">CLIENTES</span>
                    </h2>
                    <p style={{fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-charcoal)'}}>
                        No lo decimos nosotros. Lo confirman quienes ya han experimentado el verdadero crunch de Venezuela en cada mordisco.
                    </p>
                    
                    <div className="google-reviews-container">
                        {reviews.map((review, idx) => (
                            <div key={idx} className="google-review-card shadow-small">
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

                    <div style={{marginTop: '1.5rem'}}>
                         <a href="https://www.google.com/maps/place/Empanadas+Factory/@25.8315121,-80.3429396,17z/data=!4m8!3m7!1s0x88d9bbae92120e29:0xe89eb302ff4b24e6!8m2!3d25.8315073!4d-80.3403647!9m1!1b1!16s%2Fg%2F11vz20_17b?entry=ttu" target="_blank" rel="noopener noreferrer" className="gr-all-reviews-btn">
                            Ver todas las opiniones <i className="fas fa-arrow-right" style={{marginLeft: '0.5rem'}}></i>
                         </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
