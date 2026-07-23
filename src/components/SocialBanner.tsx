'use client';
export default function SocialBanner() {
  return (
    <section className="social-banner" style={{
        position: 'relative',
        padding: '6rem 0',
        background: 'url(/assets/social_banner_bg.jpg) center center no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed', /* Efecto parallax */
        overflow: 'hidden',
        textAlign: 'center',
        color: 'white'
    }}>
        {/* Capa de transparencia/overlay */}
        <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 1
        }}></div>

        <div className="container" style={{position: 'relative', zIndex: 2}}>
            <h2 className="section-title" style={{color: 'white', marginBottom: '1.5rem', fontSize: '3rem'}}>
                SÍGUENOS EN <span style={{color: '#FF2A5F'}}>REDES</span>
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto'}}>
                ¡Únete a nuestra comunidad digital y vive la experiencia del verdadero crunch!
            </p>
            
            <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'}}>
                <a href="https://www.instagram.com/empanadasfactorycafe/?hl=es" target="_blank" rel="noopener noreferrer" className="shadow-large" style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                    padding: '1rem 2.5rem', borderRadius: '50px',
                    textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '1.3rem',
                    transition: 'transform 0.3s ease'
                }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    <i className="fab fa-instagram" style={{fontSize: '1.8rem'}}></i>
                    Instagram
                </a>
                
                <a href="https://www.tiktok.com/@empanadasfactorycafe/video/7662155072608111902" target="_blank" rel="noopener noreferrer" className="shadow-large" style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    background: 'black',
                    padding: '1rem 2.5rem', borderRadius: '50px',
                    textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '1.3rem',
                    transition: 'transform 0.3s ease',
                    border: '1px solid rgba(255,255,255,0.2)'
                }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    <i className="fab fa-tiktok" style={{fontSize: '1.8rem'}}></i>
                    TikTok
                </a>
            </div>
        </div>
    </section>
  );
}
