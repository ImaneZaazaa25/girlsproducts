import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Robe Élégante Soirée',
      price: 89.99,
      image: '/api/placeholder/150/200',
      quantity: 1,
      size: 'M',
      color: 'Rose',
      stock: 15
    },
    {
      id: 2,
      name: 'Sac à Main Cuir',
      price: 129.99,
      image: '/api/placeholder/150/200',
      quantity: 2,
      size: 'Unique',
      color: 'Noir',
      stock: 8
    },
    {
      id: 3,
      name: 'Collier Perles',
      price: 45.99,
      image: '/api/placeholder/150/200',
      quantity: 1,
      size: 'Unique',
      color: 'Blanc',
      stock: 25
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = subtotal > 100 ? 0 : 9.99;
    const tax = subtotal * 0.2; // 20% TVA
    return subtotal + shipping + tax;
  };

  const subtotal = calculateSubtotal();
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.2;
  const total = calculateTotal();

  return (
    <div style={{ padding: '40px 0', minHeight: '100vh', background: 'var(--light-pink)' }}>
      <div className="elegant-container">
        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Mon Panier</h1>

        {cartItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🛒</div>
            <h2 style={{ marginBottom: '20px' }}>Votre panier est vide</h2>
            <p style={{ marginBottom: '30px', color: 'var(--text-light)' }}>
              Découvrez nos produits et ajoutez-les à votre panier.
            </p>
            <Link to="/products">
              <Button variant="primary" size="large">
                Découvrir nos produits
              </Button>
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            {/* Liste des articles */}
            <div className="cart-items">
              <h2 style={{ marginBottom: '20px' }}>Articles ({cartItems.length})</h2>
              
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <div style={{
                      width: '100px',
                      height: '120px',
                      background: 'var(--baby-pink)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <span>🛍️</span>
                    </div>
                  </div>
                  
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <div className="item-options">
                      <span className="option">Taille: {item.size}</span>
                      <span className="option">Couleur: {item.color}</span>
                    </div>
                    <div className="item-price">{item.price} €</div>
                  </div>
                  
                  <div className="item-quantity">
                    <div className="quantity-controls">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="quantity-btn"
                      >
                        -
                      </button>
                      <span className="quantity-display">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        disabled={item.quantity >= item.stock}
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="item-total">
                    {(item.price * item.quantity).toFixed(2)} €
                  </div>
                  
                  <div className="item-actions">
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="remove-btn"
                      title="Supprimer l'article"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Récapitulatif de commande */}
            <div className="cart-summary">
              <div className="summary-card">
                <h3>Récapitulatif</h3>
                
                <div className="summary-row">
                  <span>Sous-total:</span>
                  <span>{subtotal.toFixed(2)} €</span>
                </div>
                
                <div className="summary-row">
                  <span>Livraison:</span>
                  <span>
                    {shipping === 0 ? (
                      <span style={{ color: '#4caf50' }}>Gratuite</span>
                    ) : (
                      `${shipping} €`
                    )}
                  </span>
                </div>
                
                <div className="summary-row">
                  <span>TVA (20%):</span>
                  <span>{tax.toFixed(2)} €</span>
                </div>
                
                <div className="summary-divider"></div>
                
                <div className="summary-row total">
                  <span>Total:</span>
                  <span>{total.toFixed(2)} €</span>
                </div>

                {subtotal < 100 && (
                  <div className="shipping-notice">
                    🚚 Ajoutez {(100 - subtotal).toFixed(2)} € pour la livraison gratuite !
                  </div>
                )}

                <Button variant="primary" size="large" className="checkout-btn">
                  Procéder au paiement
                </Button>

                <div className="secure-payment">
                  <span>🔒 Paiement sécurisé</span>
                </div>

                <Link to="/products" style={{ textDecoration: 'none' }}>
                  <Button variant="ghost" size="medium" className="continue-shopping">
                    ← Continuer mes achats
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;