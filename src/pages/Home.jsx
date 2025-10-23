import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/UI/ProductCard';
import Button from '../components/UI/Button';

const Home = () => {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

  // Données de produits pour chaque collection
  const collections = {
    nouvelle: [
      {
        id: 1,
        name: 'Robe Élégante Soirée',
        price: 89.99,
        originalPrice: 119.99,
        category: 'Robes',
        image: '/banner1.jpg',
        isNew: true,
        isOnSale: true,
        isSpecial: true,
        rating: 4.5,
        stock: 15
      },
      {
        id: 2,
        name: 'Sac à Main Cuir Premium',
        price: 129.99,
        category: 'Accessoires',
        image: '/banner2.jpg',
        isNew: true,
        isSpecial: false,
        rating: 4.8,
        stock: 8
      },
      {
        id: 3,
        name: 'Collier Perles Dorées',
        price: 45.99,
        category: 'Bijoux',
        image: '/banner1.jpg',
        isNew: true,
        isSpecial: true,
        rating: 4.2,
        stock: 25
      },
      {
        id: 4,
        name: 'Chaussures Talons Nude',
        price: 99.99,
        originalPrice: 129.99,
        category: 'Chaussures',
        image: '/banner2.jpg',
        isNew: true,
        isOnSale: true,
        isSpecial: false,
        rating: 4.3,
        stock: 12
      }
    ],
    speciale: [
      {
        id: 5,
        name: 'Robe Cocktail Rose',
        price: 79.99,
        category: 'Robes',
        image: '/banner1.jpg',
        isSpecial: true,
        rating: 4.6,
        stock: 20
      },
      {
        id: 6,
        name: 'Sac Bandoulière Noir',
        price: 95.99,
        category: 'Accessoires',
        image: '/banner2.jpg',
        isSpecial: true,
        rating: 4.7,
        stock: 15
      },
      {
        id: 7,
        name: 'Boucles d\'Oreilles Diamant',
        price: 65.99,
        category: 'Bijoux',
        image: '/banner1.jpg',
        isSpecial: true,
        rating: 4.4,
        stock: 30
      },
      {
        id: 8,
        name: 'Escarpins Rouge',
        price: 89.99,
        category: 'Chaussures',
        image: '/banner2.jpg',
        isSpecial: true,
        rating: 4.5,
        stock: 18
      }
    ],
    meilleureVente: [
      {
        id: 9,
        name: 'Robe Midi Floral',
        price: 69.99,
        originalPrice: 89.99,
        category: 'Robes',
        image: '/banner1.jpg',
        isOnSale: true,
        isSpecial: false,
        rating: 4.8,
        stock: 35
      },
      {
        id: 10,
        name: 'Sac Tote Cuir',
        price: 149.99,
        category: 'Accessoires',
        image: '/banner2.jpg',
        isSpecial: false,
        rating: 4.9,
        stock: 22
      },
      {
        id: 11,
        name: 'Bracelet Argent',
        price: 35.99,
        category: 'Bijoux',
        image: '/banner1.jpg',
        isSpecial: false,
        rating: 4.3,
        stock: 40
      },
      {
        id: 12,
        name: 'Bottines Cuir Marron',
        price: 119.99,
        category: 'Chaussures',
        image: '/banner2.jpg',
        isSpecial: false,
        rating: 4.6,
        stock: 28
      }
    ],
    promotion: [
      {
        id: 13,
        name: 'Robe Maxi Été',
        price: 49.99,
        originalPrice: 79.99,
        category: 'Robes',
        image: '/banner1.jpg',
        isOnSale: true,
        isSpecial: true,
        rating: 4.4,
        stock: 25
      },
      {
        id: 14,
        name: 'Sac à Dos Cuir',
        price: 79.99,
        originalPrice: 119.99,
        category: 'Accessoires',
        image: '/banner2.jpg',
        isOnSale: true,
        isSpecial: false,
        rating: 4.5,
        stock: 18
      },
      {
        id: 15,
        name: 'Pendentif Cœur',
        price: 29.99,
        originalPrice: 45.99,
        category: 'Bijoux',
        image: '/banner1.jpg',
        isOnSale: true,
        isSpecial: true,
        rating: 4.2,
        stock: 32
      },
      {
        id: 16,
        name: 'Sandales Plateforme',
        price: 59.99,
        originalPrice: 89.99,
        category: 'Chaussures',
        image: '/banner2.jpg',
        isOnSale: true,
        isSpecial: false,
        rating: 4.3,
        stock: 20
      }
    ]
  };

  const handleAddToCart = (product) => {
    console.log('Ajouter au panier:', product);
  };

  const handleQuickView = (product) => {
    console.log('Vue rapide:', product);
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  const handleWishlistToggle = (product) => {
    setWishlist(prev => {
      const isInWishlist = prev.some(item => item.id === product.id);
      if (isInWishlist) {
        return prev.filter(item => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  // Icônes SVG
  const TruckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="3" width="15" height="13"></rect>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
      <circle cx="5.5" cy="18.5" r="2.5"></circle>
      <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
  );

  const ShieldIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );

  const GiftIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 12 20 22 4 22 4 12"></polyline>
      <rect x="2" y="7" width="20" height="5"></rect>
      <line x1="12" y1="22" x2="12" y2="7"></line>
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
    </svg>
  );

  const StarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );

  const HeartIcon = ({ filled = false }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? "#fbacc1" : "none"} stroke="#fbacc1" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );

  // Composant pour afficher un produit
  const ProductItem = ({ product }) => (
    <div 
      style={{
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        background: 'white',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}
      onClick={() => handleProductClick(product)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
      }}
    >
      {/* Badge Special */}
      {product.isSpecial && (
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          background: '#fbacc1',
          color: 'white',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: '600',
          zIndex: 2
        }}>
          Special
        </div>
      )}

      {/* Bouton Wishlist */}
      <button
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'rgba(255, 255, 255, 0.9)',
          border: 'none',
          borderRadius: '50%',
          width: '35px',
          height: '35px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 2,
          transition: 'all 0.3s ease'
        }}
        onClick={(e) => {
          e.stopPropagation();
          handleWishlistToggle(product);
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'white';
          e.target.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.9)';
          e.target.style.transform = 'scale(1)';
        }}
      >
        <HeartIcon filled={isInWishlist(product.id)} />
      </button>

      {/* Image du produit */}
      <div style={{
        height: '300px',
        background: `url(${product.image}) center/cover`,
        position: 'relative'
      }}>
        {/* Overlay avec nom du produit */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
          padding: '20px',
          color: 'white'
        }}>
          <h4 style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            margin: '0 0 5px 0',
            textShadow: '0 1px 2px rgba(0,0,0,0.5)'
          }}>
            {product.name}
          </h4>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{
              fontSize: '1rem',
              fontWeight: '500'
            }}>
              {product.price} €
              {product.originalPrice && (
                <span style={{
                  textDecoration: 'line-through',
                  opacity: 0.7,
                  marginLeft: '8px',
                  fontSize: '0.9rem'
                }}>
                  {product.originalPrice} €
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ 
      background: '#F8F8F8',
      minHeight: '100vh'
    }}>
      {/* Banner Section - Full Width */}
      <section style={{
        width: '100%',
        height: '400px',
        background: 'linear-gradient(135deg, #fbacc1 0%, #f8a5c2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url(/banner1.jpg) center/cover',
          opacity: 0.4
        }}></div>
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: 'white'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '20px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Bienvenue chez GirlsProducts
          </h1>
          <p style={{
            fontSize: '1.2rem',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Découvrez notre univers de mode féminine
          </p>
        </div>
      </section>


      {/* Stats Section */}
      <section style={{
        background: '#F8F8F8',
        padding: '60px 20px',
        borderBottom: '1px solid #F0F0F0'
      }}>
        <div className="elegant-container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '80px',
            flexWrap: 'wrap',
            paddingTop: '20px'
          }}>
            {[
              { number: '10 000+', label: 'Clientes satisfaites' },
              { number: '500+', label: 'Produits exclusifs' },
              { number: '4.9', label: 'Note moyenne' }
            ].map((stat, i) => (
              <div key={i}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#1A1A1A',
                  marginBottom: '5px'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '13px',
                  color: '#999999',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Features Section Propre */}
      <section style={{
        padding: '80px 20px',
        background: '#F8F8F8'
      }}>
        <div className="elegant-container" style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px'
          }}>
            {[
              { icon: TruckIcon, title: 'Livraison gratuite', desc: 'Une livraison gratuite' },
              { icon: ShieldIcon, title: 'POD', desc: 'Payement à la livraison' },
              { icon: GiftIcon, title: 'Emballage cadeau', desc: 'Offert sur tous les produits' },
              { icon: StarIcon, title: 'Qualité premium', desc: 'Sélection rigoureuse' }
            ].map((feature, index) => (
              <div key={index} style={{
                padding: '35px 25px',
                background: '#FFFFFF',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: '1px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#F8F8F8';
                e.currentTarget.style.borderColor = '#fbacc1';
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: '#FFF0F5',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fbacc1',
                  marginBottom: '20px'
                }}>
                  <feature.icon />
                </div>
                <h3 style={{
                  fontSize: '17px',
                  fontWeight: '600',
                  color: '#1A1A1A',
                  marginBottom: '8px'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666666',
                  margin: 0,
                  lineHeight: '1.5'
                }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trouvé notre collection Section */}
      <section style={{
        padding: '60px 20px',
        background: '#F8F8F8',
        textAlign: 'center'
      }}>
        <div className="elegant-container" style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#1A1A1A',
            marginBottom: '20px',
            letterSpacing: '-0.5px'
          }}>
            Trouvé notre collection
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666666',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Explorez nos différentes catégories et trouvez votre style unique
          </p>
        </div>
      </section>

      {/* Nouvelle collection Section */}
      <section style={{
        padding: '60px 20px',
        background: '#F8F8F8'
      }}>
        <div className="elegant-container" style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#1A1A1A',
              margin: 0
            }}>
              Nouvelle collection
            </h3>
            <button style={{
              padding: '12px 30px',
              background: '#fbacc1',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#f8a5c2';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#fbacc1';
              e.target.style.transform = 'translateY(0)';
            }}>
              Voir tout
              <ArrowRightIcon />
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {collections.nouvelle.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>


      {/* Collection spéciale Section */}
      <section style={{
        padding: '60px 20px',
        background: '#F8F8F8'
      }}>
        <div className="elegant-container" style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#1A1A1A',
              margin: 0
            }}>
              Collection spéciale
            </h3>
            <button style={{
              padding: '12px 30px',
              background: '#fbacc1',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#f8a5c2';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#fbacc1';
              e.target.style.transform = 'translateY(0)';
            }}>
              Voir tout
              <ArrowRightIcon />
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {collections.speciale.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>


      {/* Meilleure vente Section */}
      <section style={{
        padding: '60px 20px',
        background: '#F8F8F8'
      }}>
        <div className="elegant-container" style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#1A1A1A',
              margin: 0
            }}>
              Meilleure vente
            </h3>
            <button style={{
              padding: '12px 30px',
              background: '#fbacc1',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#f8a5c2';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#fbacc1';
              e.target.style.transform = 'translateY(0)';
            }}>
              Voir tout
              <ArrowRightIcon />
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {collections.meilleureVente.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>


      {/* Promotion Section */}
      <section style={{
        padding: '60px 20px',
        background: '#F8F8F8'
      }}>
        <div className="elegant-container" style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#1A1A1A',
              margin: 0
            }}>
              Promotion
            </h3>
            <button style={{
              padding: '12px 30px',
              background: '#fbacc1',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#f8a5c2';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#fbacc1';
              e.target.style.transform = 'translateY(0)';
            }}>
              Voir tout
              <ArrowRightIcon />
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {collections.promotion.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;