import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Privacidad() {
  return (
    <>
      <Navbar />
      <main style={{padding: '120px 20px 60px', maxWidth: '800px', margin: '0 auto', minHeight: '80vh', color: 'var(--text-dark)'}}>
        <h1 style={{fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--brand-red-dark)'}}>Política de Privacidad</h1>
        <div style={{lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <p>En Empanadas Factory Cafe, valoramos y respetamos tu privacidad. Esta política describe cómo recopilamos, usamos y protegemos tu información personal.</p>
            <h2>1. Información que recopilamos</h2>
            <p>Podemos recopilar información personal como tu nombre, dirección de correo electrónico, número de teléfono y dirección de envío cuando realizas un pedido o te suscribes a nuestro boletín.</p>
            <h2>2. Uso de la información</h2>
            <p>Utilizamos tu información para procesar pedidos, mejorar nuestro servicio al cliente, personalizar tu experiencia en el sitio web y enviarte correos electrónicos promocionales (si te has suscrito).</p>
            <h2>3. Protección de datos</h2>
            <p>Implementamos medidas de seguridad para mantener la seguridad de tu información personal. No vendemos, intercambiamos ni transferimos tus datos a terceros.</p>
            <h2>4. Tus derechos</h2>
            <p>Tienes derecho a acceder, corregir o eliminar tu información personal en cualquier momento poniéndote en contacto con nosotros.</p>
            <p>Última actualización: Julio 2026.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
