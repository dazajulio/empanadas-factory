'use client';

import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function FloatingCart() {
  const { cart, cartCount, cartTotal, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useCart();

  const handleCheckout = () => {
    // Generar mensaje de WhatsApp
    const phone = "1234567890"; // Reemplazar con el número real
    let text = "¡Hola! Quiero hacer el siguiente pedido:\n\n";
    cart.forEach(item => {
      text += `${item.quantity}x ${item.name} ($${(item.price * item.quantity).toFixed(2)})\n`;
    });
    text += `\nTotal: $${cartTotal.toFixed(2)}`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encodedText}`, '_blank');
  };

  return (
    <>
      {/* Floating Button */}
      {cartCount > 0 && !isCartOpen && (
        <button 
          className="floating-cart-btn shadow-large" 
          onClick={() => setIsCartOpen(true)}
        >
          <div className="cart-icon-wrapper">
            <i className="fas fa-shopping-bag"></i>
            <span className="cart-badge">{cartCount}</span>
          </div>
          <span className="cart-total-btn">${cartTotal.toFixed(2)}</span>
        </button>
      )}

      {/* Cart Sidebar Overlay */}
      <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)}></div>

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Tu Pedido</h2>
          <button className="close-cart" onClick={() => setIsCartOpen(false)}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <i className="fas fa-shopping-basket" style={{fontSize: '3rem', color: 'var(--text-light)', marginBottom: '1rem'}}></i>
              <p>Tu carrito está vacío</p>
              <button className="btn-outline-red" style={{marginTop: '1rem'}} onClick={() => setIsCartOpen(false)}>Ver Menú</button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img" style={{backgroundImage: `url(${item.image})`}}></div>
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <div className="cart-item-controls">
                    <div className="quantity-selector">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <span className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
                <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p style={{fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '1rem', textAlign: 'center'}}>Los impuestos y el envío se calcularán al finalizar la compra.</p>
            <button className="btn-main-red" style={{width: '100%', padding: '1rem', fontSize: '1.1rem'}} onClick={handleCheckout}>
              Proceder al Pago <i className="fas fa-arrow-right" style={{marginLeft: '0.5rem'}}></i>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
