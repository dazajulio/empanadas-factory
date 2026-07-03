'use client';
import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [hidden, setHidden] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);

  const handleEnter = () => {
    setHidden(true);
    if (!audioPlayed) {
      const audio = new Audio('/assets/Eating crunchy food noisily.mp3');
      audio.play().catch(e => console.log('Audio autoplay blocked', e));
      setAudioPlayed(true);
    }
  };

  if (hidden) return null;

  return (
    <div id="splash-screen" className={`splash-screen ${hidden ? 'hidden' : ''}`}>
        <div className="splash-content">
            <h1 className="logo"><span className="red">EMPANADAS</span>FACTORY</h1>
            <p>Descubre el crujido de la tradición</p>
            <button id="enter-btn" className="btn-main-red" onClick={handleEnter}>Entrar a la Experiencia</button>
        </div>
    </div>
  );
}
