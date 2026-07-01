document.addEventListener('DOMContentLoaded', () => {
    // 0. Splash Screen & Audio
    const splashScreen = document.getElementById('splash-screen');
    const enterBtn = document.getElementById('enter-btn');
    const crunchSound = document.getElementById('crunch-sound');

    if (enterBtn) {
        enterBtn.addEventListener('click', () => {
            // Reproducir sonido
            if (crunchSound) {
                crunchSound.volume = 0.5;
                crunchSound.play().catch(e => console.log('Audio play failed:', e));
            }
            
            // Ocultar splash screen
            splashScreen.classList.add('hidden');
            
            // Permitir scroll si estaba bloqueado, opcional
            document.body.style.overflowY = 'auto';
        });
    }

    // Bloquear scroll inicial hasta entrar
    document.body.style.overflowY = 'hidden';

    // 1. Scroll Path Progress
    const scrollPath = document.querySelector('.scroll-path');
    
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const fullHeight = document.body.clientHeight;
        const scrolled = window.scrollY;
        
        // Calculate percentage (subtracting window height to finish at the bottom)
        const percent = (scrolled / (fullHeight - windowHeight)) * 100;
        if (scrollPath) {
            scrollPath.style.height = `${percent}%`;
        }
        
        // Navbar Scrolled Effect
        const navbar = document.getElementById('navbar');
        if (scrolled > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // 2. Parallax Effects
        const qualityBg = document.querySelector('.quality-bg-parallax');

        if (qualityBg) {
            const qualitySection = document.querySelector('.quality');
            const rect = qualitySection.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom > 0) {
                const relativeScroll = windowHeight - rect.top;
                qualityBg.style.transform = `translateY(${relativeScroll * 0.1}px)`;
            }
        }
    });

    // 3. Reveal Animations on Scroll
    const revealOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target); // Reveal once
            }
        });
    }, revealOptions);

    // Prepare elements for reveal
    const revealElements = document.querySelectorAll('.quality-card, .award-card, .video-wrapper, .location-card');
    
    revealElements.forEach(el => {
        el.classList.add('reveal-init');
        revealObserver.observe(el);
    });

    // CSS for reveal animations
    const style = document.createElement('style');
    style.innerHTML = `
        .reveal-init {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .revealed {
            opacity: 1;
            transform: translateY(0);
        }
        .story-video-container.reveal-init {
            transform: scale(0.9) translateY(40px);
        }
        .story-video-container.revealed {
            transform: scale(1) translateY(0);
        }
    `;
    document.head.appendChild(style);

    // 4. Smooth Anchor Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // The native <video> elements handle their own play interactions now.
});
