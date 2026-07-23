import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Cookies() {
  return (
    <>
      <Navbar />
      <main style={{padding: '120px 20px 60px', maxWidth: '800px', margin: '0 auto', minHeight: '80vh', color: 'var(--text-dark)'}}>
        <h1 style={{fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--brand-red-dark)'}}>Política de Cookies</h1>
        <div style={{lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <p>Empanadas Factory Cafe utiliza cookies para mejorar tu experiencia de navegación y analizar el tráfico de nuestro sitio web.</p>
            <h2>1. ¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Ayudan a que el sitio web funcione correctamente y a proporcionar información a los propietarios del sitio.</p>
            <h2>2. ¿Cómo usamos las cookies?</h2>
            <p>Utilizamos cookies esenciales para el funcionamiento del sitio, cookies de rendimiento para analizar cómo los usuarios interactúan con nuestro sitio web, y cookies de funcionalidad para recordar tus preferencias.</p>
            <h2>3. Control de cookies</h2>
            <p>Puedes optar por aceptar o rechazar las cookies. La mayoría de los navegadores web aceptan cookies automáticamente, pero puedes modificar la configuración de tu navegador para rechazarlas si lo prefieres.</p>
            <h2>4. Cambios a esta política</h2>
            <p>Podemos actualizar nuestra Política de Cookies ocasionalmente. Te recomendamos revisar esta página periódicamente para cualquier cambio.</p>
            <p>Última actualización: Julio 2026.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
