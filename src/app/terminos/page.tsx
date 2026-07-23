import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Terminos() {
  return (
    <>
      <Navbar />
      <main style={{padding: '120px 20px 60px', maxWidth: '800px', margin: '0 auto', minHeight: '80vh', color: 'var(--text-dark)'}}>
        <h1 style={{fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--brand-red-dark)'}}>Términos y Condiciones</h1>
        <div style={{lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <p>Bienvenido a Empanadas Factory Cafe. Al acceder y utilizar nuestro sitio web, aceptas cumplir con los siguientes términos y condiciones.</p>
            <h2>1. Uso del Sitio Web</h2>
            <p>El contenido de este sitio web es para tu información y uso general únicamente. Está sujeto a cambios sin previo aviso.</p>
            <h2>2. Pedidos y Pagos</h2>
            <p>Todos los pedidos realizados a través del sitio web o nuestras plataformas asociadas están sujetos a disponibilidad y confirmación. Los precios pueden variar.</p>
            <h2>3. Propiedad Intelectual</h2>
            <p>El material contenido en este sitio, incluyendo pero no limitado al diseño, apariencia, gráficos y textos, es propiedad nuestra o tiene licencia para nosotros.</p>
            <h2>4. Limitación de Responsabilidad</h2>
            <p>No seremos responsables de ningún daño indirecto, incidental o consecuente que surja del uso de nuestro sitio web o productos.</p>
            <p>Última actualización: Julio 2026.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
