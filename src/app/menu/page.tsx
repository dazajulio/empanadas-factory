'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCart from '@/components/Cart/FloatingCart';
import { menuData } from '@/data/menuData';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function MenuPage() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    document.getElementById(`category-${id}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      
      {/* Menu Hero */}
      <header className="menu-hero" style={{paddingTop: '150px', paddingBottom: '60px', background: 'var(--text-dark)', color: 'white', textAlign: 'center'}}>
        <h1 className="title-large" style={{marginBottom: '1rem', fontSize: '4rem'}}>NUESTRO <span className="red">MENÚ</span></h1>
        <p style={{fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)'}}>Elige tus empanadas favoritas y nosotros nos encargamos del resto.</p>
      </header>

      {/* Category Navigation */}
      <div className="menu-nav" style={{position: 'sticky', top: '80px', background: 'var(--bg-white)', zIndex: 90, padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 15px rgba(0,0,0,0.02)'}}>
        <div className="container" style={{display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '0.5rem', scrollbarWidth: 'none'}}>
          {menuData.map(cat => (
            <button 
              key={cat.id} 
              onClick={() => scrollToCategory(cat.id)}
              className={`btn-category ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <main className="menu-content" style={{background: 'var(--bg-offwhite)', minHeight: '100vh', padding: '4rem 0'}}>
        <div className="container">
          {menuData.map(cat => (
            <section key={cat.id} id={`category-${cat.id}`} style={{marginBottom: '5rem', scrollMarginTop: '160px'}}>
              <h2 className="section-title" style={{textAlign: 'left', marginBottom: '2rem', color: 'var(--brand-red-dark)'}}>{cat.title}</h2>
              <div className="menu-grid">
                {cat.items.map(item => (
                  <div key={item.id} className="menu-card shadow-large">
                    <div className="menu-card-image" style={{backgroundImage: `url(${item.image})`}}>
                        {item.popular && <span className="popular-badge">Top Ventas</span>}
                    </div>
                    <div className="menu-card-content">
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem'}}>
                        <h3 style={{fontSize: '1.3rem', fontWeight: 700, paddingRight: '1rem'}}>{item.name}</h3>
                        <span style={{fontSize: '1.2rem', fontWeight: 900, color: 'var(--brand-red)'}}>${item.price.toFixed(2)}</span>
                      </div>
                      <p style={{color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '40px'}}>{item.description}</p>
                      <button className="btn-main-red" style={{width: '100%', padding: '0.8rem'}} onClick={() => addToCart(item)}>
                        Añadir al Carrito
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
      <FloatingCart />
    </>
  );
}
