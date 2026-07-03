export default function Quality() {
  return (
    <section id="proceso" className="quality" style={{background: 'var(--bg-offwhite)', color: 'var(--text-charcoal)', padding: '10rem 0'}}>
        <div className="container center">
            <h2 className="title-large" style={{color: 'var(--brand-red-dark)', marginBottom: '1rem'}}>LOS PILARES DE <br/>LA <span className="red">RECETA</span> ORIGINAL</h2>
            <p style={{fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 4rem auto'}}>No es magia, es alquimia larense. Descubre los cuatro elementos que componen la empanada de pabellón perfecta.</p>
            
            <div className="quality-grid" style={{gap: '2rem'}}>
                <div className="quality-card" style={{background: 'var(--bg-white)', borderColor: 'rgba(0,0,0,0.05)', color: 'var(--text-dark)', boxShadow: '0 15px 35px rgba(0,0,0,0.05)'}}>
                    <i className="fas fa-drumstick-bite" style={{color: 'var(--brand-red)'}}></i>
                    <h3>La Carne Mechada</h3>
                    <p style={{color: 'var(--text-charcoal)'}}>El secreto de la cocción lenta y el sofrito criollo heredado de Doña Ana Victoria.</p>
                </div>
                
                <div className="quality-card active" style={{background: 'var(--brand-red)', color: 'white', borderColor: 'transparent', transform: 'translateY(-10px)', boxShadow: '0 25px 50px rgba(238, 29, 35, 0.2)'}}>
                    <i className="fas fa-bowl-rice" style={{color: 'white'}}></i>
                    <h3 style={{color: 'white'}}>Las Caraotas</h3>
                    <p style={{color: 'rgba(255,255,255,0.9)'}}>Refritas a la perfección, con el balance exacto de sazón larense.</p>
                </div>
                
                <div className="quality-card" style={{background: 'var(--bg-white)', borderColor: 'rgba(0,0,0,0.05)', color: 'var(--text-dark)', boxShadow: '0 15px 35px rgba(0,0,0,0.05)'}}>
                    <i className="fas fa-leaf" style={{color: '#D4AF37'}}></i>
                    <h3>Las Tajadas</h3>
                    <p style={{color: 'var(--text-charcoal)'}}>El toque dulce, dorado y nostálgico que amarra el plato.</p>
                </div>
                
                <div className="quality-card" style={{background: 'var(--bg-white)', borderColor: 'rgba(0,0,0,0.05)', color: 'var(--text-dark)', boxShadow: '0 15px 35px rgba(0,0,0,0.05)'}}>
                    <i className="fas fa-wheat-awn" style={{color: '#D4AF37'}}></i>
                    <h3>La Masa de Maíz</h3>
                    <p style={{color: 'var(--text-charcoal)'}}>Fina, crujiente, dorada. Una barrera perfecta que resguarda el tesoro nacional.</p>
                </div>
            </div>
        </div>
    </section>
  );
}
