import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Storytelling from '@/components/Storytelling';
import Quality from '@/components/Quality';
import Gallery from '@/components/Gallery';
import Locations from '@/components/Locations';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen';

export default function Home() {
  return (
    <>
      <SplashScreen />
      <div className="scroll-path-container">
          <div className="scroll-path"></div>
      </div>
      <Navbar />
      <Hero />
      <Storytelling />
      <Quality />
      <Gallery />
      <Locations />
      <Footer />
    </>
  );
}
