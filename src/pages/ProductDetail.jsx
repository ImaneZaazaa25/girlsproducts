import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  // Données simulées pour le produit
  const product = {
    id: parseInt(id),
    name: 'Robe Élégante Soirée',
    price: 89.99,
    originalPrice: 119.99,
    description: 'Une robe élégante parfaite pour les occasions spéciales. Confectionnée avec des matériaux de haute qualité pour un confort optimal et un style raffiné.',
    longDescription: 'Cette robe sophistiquée est conçue pour mettre en valeur votre silhouette. Avec son tissu fluide et sa coupe ajustée, elle offre élégance et confort. Parfaite pour les mariages, cocktails et événements formels.',
    category: 'Robes',
    images: [
      '/api/placeholder/600/800',
      '/api/placeholder/600/800',
      '/api/placeholder/600/800',
      '/api/placeholder/600/800'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Rose Poudré', value: '#f8d7da' },
      { name: 'Noir', value: '#000000' },
      { name: 'Blanc', value: '#ffffff' },
      { name: 'Bordeaux', value: '#800020' }
    ],
    features: [
      '✅ 100% Polyester de haute qualité',
      '✅ Lavable en machine',
      '✅ Coupe ajustée',
      '✅ Longueur mi-mollet',
      '✅ Dos fermé par une fermeture éclair'
    ],
    rating: 4.5,
    reviewCount: 128,
    stock: 15,
    isNew: true,
    isOnSale: true,
    sku: 'PROD-001'
  };

  const relatedProducts = [
    {
      id: 2,
      name: 'Sac à Main Cuir',
      price: 129.99,
      image: '/api/placeholder/300/400',
      category: 'Accessoires'
    },
    {
      id: 3,
      name: 'Collier Perles',
      price: 45.99,
      image: '/api/placeholder/300/400',
      category: 'Bijoux'
    },
    {
      id: 4,
      name: 'Chaussures Talons',
      price: 99.99,
      image: '/api/placeholder/300/400',
      category: 'Chaussures'
    }
  ];

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Veuillez sélectionner une taille et une couleur');
      return;
    }

    const cartItem = {
      ...product,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity
    };

    console.log('Ajouter au panier:', cartItem);
    // Ici vous ajouterez la logique pour ajouter au panier
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/cart');
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div style={{ padding: '40px 0', minHeight: '100vh', background: '#F8F8F8' }}>
      <div className="elegant-container">
        {/* Fil d'Ariane */}
        <nav className="breadcrumb">
          <Link to="/">Accueil</Link>
          <span> / </span>
          <Link to="/products">Boutique</Link>
          <span> / </span>
          <Link to={`/category/${product.category.toLowerCase()}`}>{product.category}</Link>
          <span> / </span>
          <span>{product.name}</span>
        </nav>

        <div className="product-detail-layout">
          {/* Galerie d'images */}
          <div className="product-gallery">
            <div className="main-image">
              <div style={{
                width: '100%',
                height: '600px',
                background: '#FFFFFF',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                border: '1px solid #f0f0f0'
              }}>
                <span style={{ fontSize: '6rem', color: '#fbacc1' }}>👗</span>
              </div>
            </div>
            
            <div className="image-thumbnails">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${activeImage === index ? 'active' : ''}`}
                  onClick={() => setActiveImage(index)}
                  style={{
                    border: '2px solid transparent',
                    background: 'none',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    padding: '0',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: '#FFFFFF',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                    border: '1px solid #f0f0f0'
                  }}>
                    <span style={{ fontSize: '1.5rem', color: '#fbacc1' }}>👗</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Détails du produit */}
          <div className="product-info-detail" style={{
            background: '#FFFFFF',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            border: '1px solid #f0f0f0'
          }}>
            <div className="product-header">
              <h1 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#1A1A1A',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>{product.name}</h1>
              <div className="product-badges" style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '20px'
              }}>
                {product.isNew && <span style={{
                  background: '#fbacc1',
                  color: '#FFFFFF',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  textTransform: 'uppercase'
                }}>Nouveau</span>}
                {product.isOnSale && <span style={{
                  background: '#ff6b6b',
                  color: '#FFFFFF',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  textTransform: 'uppercase'
                }}>Promo</span>}
              </div>
            </div>

            {/* Rating */}
            <div className="product-rating-detail" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '20px'
            }}>
              <div className="stars" style={{ display: 'flex', gap: '3px' }}>
                {[...Array(5)].map((_, index) => (
                  <span key={index} style={{
                    color: index < Math.floor(product.rating) ? '#ffc107' : '#ddd',
                    fontSize: '1.2rem'
                  }}>
                    ★
                  </span>
                ))}
              </div>
              <span style={{
                color: '#666666',
                fontSize: '1rem'
              }}>
                {product.rating} ({product.reviewCount} avis)
              </span>
            </div>

            {/* Prix */}
            <div className="product-pricing-detail" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '25px'
            }}>
              {product.isOnSale && (
                <span style={{
                  textDecoration: 'line-through',
                  color: '#999999',
                  fontSize: '1.3rem',
                  fontWeight: '500'
                }}>{product.originalPrice} €</span>
              )}
              <span style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#fbacc1'
              }}>{product.price} €</span>
              {product.isOnSale && (
                <span style={{
                  background: '#ff6b6b',
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '15px',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}>
                  -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              )}
            </div>

            {/* Description */}
            <div className="product-description" style={{
              marginBottom: '25px',
              lineHeight: '1.6'
            }}>
              <p style={{
                fontSize: '1.1rem',
                color: '#333333',
                marginBottom: '15px'
              }}>{product.description}</p>
              <p style={{
                fontSize: '1rem',
                color: '#666666'
              }}>{product.longDescription}</p>
            </div>

            {/* Caractéristiques */}
            <div className="product-features" style={{
              marginBottom: '25px',
              background: '#FFF0F5',
              padding: '20px',
              borderRadius: '10px'
            }}>
              <h4 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: '#1A1A1A',
                marginBottom: '15px'
              }}>Caractéristiques :</h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {product.features.map((feature, index) => (
                  <li key={index} style={{
                    padding: '5px 0',
                    fontSize: '1rem',
                    color: '#333333'
                  }}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Sélection de la taille */}
            <div className="size-selection" style={{ marginBottom: '25px' }}>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#1A1A1A',
                marginBottom: '12px'
              }}>Taille :</h4>
              <div className="size-options" style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap'
              }}>
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      padding: '12px 20px',
                      border: '2px solid #fbacc1',
                      background: selectedSize === size ? '#fbacc1' : '#FFFFFF',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: selectedSize === size ? '#FFFFFF' : '#1A1A1A'
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Sélection de la couleur */}
            <div className="color-selection" style={{ marginBottom: '25px' }}>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#1A1A1A',
                marginBottom: '12px'
              }}>Couleur :</h4>
              <div className="color-options" style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap'
              }}>
                {product.colors.map(color => (
                  <button
                    key={color.name}
                    className={`color-option ${selectedColor === color.name ? 'selected' : ''}`}
                    onClick={() => setSelectedColor(color.name)}
                    title={color.name}
                    style={{
                      width: '45px',
                      height: '45px',
                      border: selectedColor === color.name ? '3px solid #1A1A1A' : '2px solid #ddd',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      padding: '0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <span
                      style={{
                        width: '30px',
                        height: '30px',
                        backgroundColor: color.value,
                        border: color.value === '#ffffff' ? '1px solid #ddd' : 'none',
                        borderRadius: '50%',
                        display: 'block'
                      }}
                    ></span>
                  </button>
                ))}
              </div>
              {selectedColor && <span style={{
                marginTop: '10px',
                fontStyle: 'italic',
                color: '#666666',
                fontSize: '0.9rem'
              }}>Couleur: {selectedColor}</span>}
            </div>

            {/* Quantité et Actions */}
            <div className="product-actions-detail" style={{
              display: 'flex',
              gap: '30px',
              alignItems: 'end',
              marginBottom: '30px'
            }}>
              <div className="quantity-selector" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#1A1A1A',
                  margin: 0
                }}>Quantité :</h4>
                <div className="quantity-controls" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  background: '#FFF0F5',
                  padding: '10px 15px',
                  borderRadius: '8px',
                  border: '1px solid #fbacc1'
                }}>
                  <button 
                    onClick={decreaseQuantity} 
                    disabled={quantity <= 1}
                    style={{
                      width: '35px',
                      height: '35px',
                      border: '1px solid #fbacc1',
                      background: '#FFFFFF',
                      borderRadius: '50%',
                      cursor: quantity <= 1 ? 'not-allowed' : 'pointer',
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      color: quantity <= 1 ? '#ccc' : '#fbacc1',
                      opacity: quantity <= 1 ? 0.5 : 1
                    }}
                  >-</button>
                  <span style={{
                    padding: '0 15px',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    color: '#1A1A1A'
                  }}>{quantity}</span>
                  <button 
                    onClick={increaseQuantity} 
                    disabled={quantity >= product.stock}
                    style={{
                      width: '35px',
                      height: '35px',
                      border: '1px solid #fbacc1',
                      background: '#FFFFFF',
                      borderRadius: '50%',
                      cursor: quantity >= product.stock ? 'not-allowed' : 'pointer',
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      color: quantity >= product.stock ? '#ccc' : '#fbacc1',
                      opacity: quantity >= product.stock ? 0.5 : 1
                    }}
                  >+</button>
                </div>
                <span style={{
                  fontSize: '0.9rem',
                  color: '#666666',
                  textAlign: 'center'
                }}>{product.stock} disponibles</span>
              </div>

              <div className="action-buttons" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                flex: 1
              }}>
                <Button 
                  variant="primary" 
                  size="large"
                  onClick={handleAddToCart}
                  disabled={!selectedSize || !selectedColor || product.stock === 0}
                  style={{
                    width: '100%',
                    padding: '15px 30px',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}
                >
                  🛒 Ajouter au panier
                </Button>
                
                <Button 
                  variant="secondary" 
                  size="large"
                  onClick={handleBuyNow}
                  disabled={!selectedSize || !selectedColor || product.stock === 0}
                  style={{
                    width: '100%',
                    padding: '15px 30px',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}
                >
                  Acheter maintenant
                </Button>
              </div>
            </div>

            {/* Informations supplémentaires */}
            <div className="product-meta" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '15px',
              padding: '20px',
              background: '#FFF0F5',
              borderRadius: '10px',
              fontSize: '0.9rem'
            }}>
              <div style={{
                padding: '8px 0',
                borderBottom: '1px solid #fbacc1'
              }}>
                <strong style={{ color: '#1A1A1A' }}>Référence:</strong> <span style={{ color: '#666666' }}>{product.sku}</span>
              </div>
              <div style={{
                padding: '8px 0',
                borderBottom: '1px solid #fbacc1'
              }}>
                <strong style={{ color: '#1A1A1A' }}>Catégorie:</strong> <span style={{ color: '#666666' }}>{product.category}</span>
              </div>
              <div style={{
                padding: '8px 0',
                borderBottom: '1px solid #fbacc1'
              }}>
                <strong style={{ color: '#1A1A1A' }}>Livraison:</strong> <span style={{ color: '#666666' }}>2-3 jours ouvrables</span>
              </div>
              <div style={{
                padding: '8px 0',
                borderBottom: '1px solid #fbacc1'
              }}>
                <strong style={{ color: '#1A1A1A' }}>Retour:</strong> <span style={{ color: '#666666' }}>30 jours satisfait ou remboursé</span>
              </div>
            </div>
          </div>
        </div>

        {/* Produits similaires */}
        <section className="related-products" style={{ marginTop: '60px' }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '40px',
            fontSize: '2.2rem',
            fontWeight: '700',
            color: '#1A1A1A'
          }}>Produits Similaires</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {relatedProducts.map(product => (
              <div key={product.id} style={{
                background: '#FFFFFF',
                padding: '25px',
                borderRadius: '15px',
                textAlign: 'center',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                border: '1px solid #f0f0f0'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
              }}
              >
                <div style={{
                  width: '100%',
                  height: '200px',
                  background: '#FFFFFF',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0 3px 10px rgba(0,0,0,0.1)'
                }}>
                  <span style={{ fontSize: '3rem', color: '#fbacc1' }}>🛍️</span>
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1A1A1A',
                  marginBottom: '10px',
                  lineHeight: '1.3'
                }}>{product.name}</h3>
                <p style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#fbacc1',
                  marginBottom: '20px'
                }}>{product.price} €</p>
                <Link to={`/product/${product.id}`}>
                  <Button variant="ghost" size="small" style={{
                    width: '100%',
                    padding: '12px 20px',
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}>
                    Voir le produit
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;