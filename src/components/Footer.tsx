import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="footer-flex">
                <div className="logo">EMPANADAS<span className="red">FACTORY</span></div>
                <div className="footer-social">
                    <a href="https://www.instagram.com/empanadasfactorycafe/?hl=es" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-tiktok"></i></a>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                </div>
            </div>
            
            <div style={{display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem', flexWrap: 'wrap'}}>
                <Link href="/terminos" style={{color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem'}}>Términos y Condiciones</Link>
                <Link href="/privacidad" style={{color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem'}}>Política de Privacidad</Link>
                <Link href="/cookies" style={{color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem'}}>Política de Cookies</Link>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', flexWrap: 'wrap', gap: '1rem'}}>
                <p className="copyright" style={{margin: 0}}>&copy; 2026 Empanadas Factory Cafe. Redefiniendo el sabor.</p>
                <div style={{fontSize: '0.8rem', color: 'var(--text-light)', marginLeft: 'auto'}}>
                    Powered By: <a href="https://dazajulio.com" target="_blank" rel="noopener noreferrer" style={{color: 'var(--brand-red)', fontWeight: 700, textDecoration: 'none'}}>dazajulio.com</a>
                </div>
            </div>
        </div>
    </footer>
  );
}
