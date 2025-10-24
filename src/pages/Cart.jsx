import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Robe Élégante Soirée',
      price: 89.99,
      quantity: 1,
      size: 'M',
      color: 'Rose',
      stock: 15
    },
    {
      id: 2,
      name: 'Sac à Main Cuir',
      price: 129.99,
      quantity: 2,
      size: 'Unique',
      color: 'Noir',
      stock: 8
    },
    {
      id: 3,
      name: 'Collier Perles',
      price: 45.99,
      quantity: 1,
      size: 'Unique',
      color: 'Blanc',
      stock: 25
    }
  ]);

  const TrashIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
  );

  const ShoppingBagIcon = () => (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
  );

  const HeartIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );

  const GiftIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 12 20 22 4 22 4 12"></polyline>
      <rect x="2" y="7" width="20" height="5"></rect>
      <line x1="12" y1="22" x2="12" y2="7"></line>
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
    </svg>
  );

  const TruckIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="3" width="15" height="13"></rect>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
      <circle cx="5.5" cy="18.5" r="2.5"></circle>
      <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
  );

  const ArrowLeftIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  );

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
    const tax = subtotal * 0.2;
    return subtotal + shipping + tax;
  };

  const subtotal = calculateSubtotal();
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.2;
  const total = calculateTotal();

  return (
    <div style={{ 
      padding: '40px 0 80px', 
      minHeight: '100vh', 
      background: '#FAFAFA'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{
          marginBottom: '40px'
        }}>
          <h1 style={{
            fontSize: '22px',
            fontWeight: '700',
            color: '#1A1A1A',
            marginBottom: '8px'
          }}>
            Panier
          </h1>
          <p style={{
            color: '#666666',
            fontSize: '15px',
            fontWeight: '500'
          }}>
            {cartItems.length} article{cartItems.length > 1 ? 's' : ''}
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div style={{
            background: '#FFFFFF',
            borderRadius: '12px',
            padding: '80px 20px',
            textAlign: 'center',
            border: '1px solid #F0F0F0',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
          }}>
            <div style={{ 
              color: '#E0E0E0',
              marginBottom: '24px',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <ShoppingBagIcon />
            </div>
            <h2 style={{ 
              fontSize: '22px',
              fontWeight: '700',
              color: '#1A1A1A',
              marginBottom: '12px'
            }}>
              Votre panier est vide
            </h2>
            <p style={{ 
              marginBottom: '32px', 
              color: '#666666',
              fontSize: '15px',
              fontWeight: '500'
            }}>
              Découvrez nos produits et ajoutez-les à votre panier
            </p>
            <button style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              background: '#fbacc1',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#f998b5';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#fbacc1';
              e.target.style.transform = 'translateY(0)';
            }}>
              Découvrir la boutique
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 380px',
            gap: '32px',
            alignItems: 'start'
          }}>
            <div>
              {cartItems.map((item) => (
                <div key={item.id} style={{
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '24px',
                  marginBottom: '16px',
                  border: '1px solid #F0F0F0',
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr auto',
                  gap: '20px',
                  alignItems: 'center',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#fbacc1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#F0F0F0';
                }}>
                  <div style={{
                    width: '100px',
                    height: '120px',
                    background: '#FAFAFA',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    border: '1px solid #F0F0F0'
                  }}>
                    🛍️
                  </div>
                  
                  <div>
                    <h3 style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#1A1A1A',
                      marginBottom: '8px'
                    }}>
                      {item.name}
                    </h3>
                    <div style={{
                      display: 'flex',
                      gap: '16px',
                      marginBottom: '12px',
                      fontSize: '13px',
                      color: '#666666',
                      fontWeight: '500'
                    }}>
                      <span>Taille: {item.size}</span>
                      <span>•</span>
                      <span>Couleur: {item.color}</span>
                    </div>
                    <div style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#1A1A1A',
                      marginBottom: '12px'
                    }}>
                      {item.price.toFixed(2)} €
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        border: '1px solid #E0E0E0',
                        borderRadius: '8px',
                        overflow: 'hidden'
                      }}>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          style={{
                            width: '36px',
                            height: '36px',
                            border: 'none',
                            background: 'transparent',
                            cursor: item.quantity <= 1 ? 'not-allowed' : 'pointer',
                            fontSize: '18px',
                            color: item.quantity <= 1 ? '#CCCCCC' : '#666666',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            if (item.quantity > 1) e.target.style.background = '#FAFAFA';
                          }}
                          onMouseLeave={(e) => e.target.style.background = 'transparent'}
                        >
                          −
                        </button>
                        <span style={{
                          padding: '0 16px',
                          fontSize: '15px',
                          fontWeight: '600',
                          color: '#1A1A1A',
                          borderLeft: '1px solid #E0E0E0',
                          borderRight: '1px solid #E0E0E0'
                        }}>
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          disabled={item.quantity >= item.stock}
                          style={{
                            width: '36px',
                            height: '36px',
                            border: 'none',
                            background: 'transparent',
                            cursor: item.quantity >= item.stock ? 'not-allowed' : 'pointer',
                            fontSize: '18px',
                            color: item.quantity >= item.stock ? '#CCCCCC' : '#666666',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            if (item.quantity < item.stock) e.target.style.background = '#FAFAFA';
                          }}
                          onMouseLeave={(e) => e.target.style.background = 'transparent'}
                        >
                          +
                        </button>
                      </div>
                      
                      <button 
                        style={{
                          padding: '8px',
                          border: 'none',
                          background: 'transparent',
                          cursor: 'pointer',
                          color: '#999999',
                          display: 'flex',
                          alignItems: 'center',
                          transition: 'color 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#fbacc1'}
                        onMouseLeave={(e) => e.target.style.color = '#999999'}
                        title="Ajouter aux favoris"
                      >
                        <HeartIcon />
                      </button>

                      <button 
                        onClick={() => removeItem(item.id)}
                        style={{
                          padding: '8px',
                          border: 'none',
                          background: 'transparent',
                          cursor: 'pointer',
                          color: '#999999',
                          display: 'flex',
                          alignItems: 'center',
                          transition: 'color 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#EF4444'}
                        onMouseLeave={(e) => e.target.style.color = '#999999'}
                        title="Supprimer"
                      >
                        <TrashIcon />
                      </button>
                    </div>
                  </div>
                  
                  <div style={{
                    textAlign: 'right'
                  }}>
                    <div style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: '#1A1A1A'
                    }}>
                      {(item.price * item.quantity).toFixed(2)} €
                    </div>
                  </div>
                </div>
              ))}

              <div style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '20px 24px',
                marginTop: '24px',
                border: '1px solid #F0F0F0',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
              }}>
                <div style={{ color: '#fbacc1' }}>
                  <GiftIcon />
                </div>
                <span style={{ 
                  color: '#666666',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  Emballage cadeau disponible au paiement
                </span>
              </div>
            </div>

            <div style={{
              position: 'sticky',
              top: '100px'
            }}>
              <div style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '28px',
                border: '1px solid #F0F0F0',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#1A1A1A',
                  marginBottom: '24px'
                }}>
                  Récapitulatif
                </h3>
                
                <div style={{ marginBottom: '20px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '12px',
                    fontSize: '14px',
                    color: '#666666',
                    fontWeight: '500'
                  }}>
                    <span>Sous-total</span>
                    <span style={{ color: '#1A1A1A', fontWeight: '600' }}>
                      {subtotal.toFixed(2)} €
                    </span>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '12px',
                    fontSize: '14px',
                    color: '#666666',
                    fontWeight: '500'
                  }}>
                    <span>Livraison</span>
                    <span style={{ 
                      color: shipping === 0 ? '#10B981' : '#1A1A1A',
                      fontWeight: '600'
                    }}>
                      {shipping === 0 ? 'Gratuite' : `${shipping.toFixed(2)} €`}
                    </span>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                    fontSize: '14px',
                    color: '#666666',
                    fontWeight: '500'
                  }}>
                    <span>TVA (20%)</span>
                    <span style={{ color: '#1A1A1A', fontWeight: '600' }}>
                      {tax.toFixed(2)} €
                    </span>
                  </div>
                </div>

                <div style={{
                  height: '1px',
                  background: '#F0F0F0',
                  margin: '20px 0'
                }}></div>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '24px',
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#1A1A1A'
                }}>
                  <span>Total</span>
                  <span>{total.toFixed(2)} €</span>
                </div>

                {subtotal < 100 && (
                  <div style={{
                    background: '#FFF7ED',
                    border: '1px solid #FED7AA',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    marginBottom: '20px',
                    fontSize: '13px',
                    color: '#C2410C',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontWeight: '500'
                  }}>
                    <TruckIcon />
                    <span>
                      Ajoutez <strong>{(100 - subtotal).toFixed(2)} €</strong> pour la livraison gratuite
                    </span>
                  </div>
                )}

                <button style={{
                  width: '100%',
                  padding: '16px',
                  background: '#fbacc1',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  marginBottom: '16px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#f998b5';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#fbacc1';
                  e.target.style.transform = 'translateY(0)';
                }}>
                  Procéder au paiement
                </button>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  color: '#666666',
                  marginBottom: '16px',
                  fontWeight: '500'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <span>Paiement 100% sécurisé</span>
                </div>

                <button style={{
                  width: '100%',
                  padding: '14px',
                  background: 'transparent',
                  color: '#666666',
                  border: '1px solid #E0E0E0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#fbacc1';
                  e.target.style.color = '#fbacc1';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#E0E0E0';
                  e.target.style.color = '#666666';
                }}>
                  <ArrowLeftIcon />
                  Continuer mes achats
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>
        {`
          @media (max-width: 968px) {
            div[style*="grid-template-columns: 1fr 380px"] {
              grid-template-columns: 1fr !important;
            }
            div[style*="position: sticky"] {
              position: static !important;
            }
          }

          @media (max-width: 640px) {
            div[style*="grid-template-columns: 100px 1fr auto"] {
              grid-template-columns: 80px 1fr !important;
              gap: 16px !important;
            }
            div[style*="grid-template-columns: 100px 1fr auto"] > div:last-child {
              grid-column: 2 / 3 !important;
              text-align: left !important;
              margin-top: 8px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Cart;