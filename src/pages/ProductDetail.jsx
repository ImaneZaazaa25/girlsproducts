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
    <div style={{ padding: '40px 0', minHeight: '100vh', background: 'var(--light-pink)' }}>
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
                background: 'var(--baby-pink)',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <span style={{ fontSize: '4rem' }}>👗</span>
              </div>
            </div>
            
            <div className="image-thumbnails">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${activeImage === index ? 'active' : ''}`}
                  onClick={() => setActiveImage(index)}
                >
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'var(--baby-pink)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span>👗</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Détails du produit */}
          <div className="product-info-detail">
            <div className="product-header">
              <h1>{product.name}</h1>
              <div className="product-badges">
                {product.isNew && <span className="badge new">Nouveau</span>}
                {product.isOnSale && <span className="badge sale">Promo</span>}
              </div>
            </div>

            {/* Rating */}
            <div className="product-rating-detail">
              <div className="stars">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={index < Math.floor(product.rating) ? 'star filled' : 'star'}>
                    ★
                  </span>
                ))}
              </div>
              <span className="rating-text">
                {product.rating} ({product.reviewCount} avis)
              </span>
            </div>

            {/* Prix */}
            <div className="product-pricing-detail">
              {product.isOnSale && (
                <span className="original-price">{product.originalPrice} €</span>
              )}
              <span className="current-price">{product.price} €</span>
              {product.isOnSale && (
                <span className="discount">
                  -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              )}
            </div>

            {/* Description */}
            <div className="product-description">
              <p>{product.description}</p>
              <p>{product.longDescription}</p>
            </div>

            {/* Caractéristiques */}
            <div className="product-features">
              <h4>Caractéristiques :</h4>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Sélection de la taille */}
            <div className="size-selection">
              <h4>Taille :</h4>
              <div className="size-options">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Sélection de la couleur */}
            <div className="color-selection">
              <h4>Couleur :</h4>
              <div className="color-options">
                {product.colors.map(color => (
                  <button
                    key={color.name}
                    className={`color-option ${selectedColor === color.name ? 'selected' : ''}`}
                    onClick={() => setSelectedColor(color.name)}
                    title={color.name}
                  >
                    <span
                      style={{
                        backgroundColor: color.value,
                        border: color.value === '#ffffff' ? '1px solid #ddd' : 'none'
                      }}
                    ></span>
                  </button>
                ))}
              </div>
              {selectedColor && <span className="selected-color">Couleur: {selectedColor}</span>}
            </div>

            {/* Quantité et Actions */}
            <div className="product-actions-detail">
              <div className="quantity-selector">
                <h4>Quantité :</h4>
                <div className="quantity-controls">
                  <button onClick={decreaseQuantity} disabled={quantity <= 1}>-</button>
                  <span>{quantity}</span>
                  <button onClick={increaseQuantity} disabled={quantity >= product.stock}>+</button>
                </div>
                <span className="stock-info">{product.stock} disponibles</span>
              </div>

              <div className="action-buttons">
                <Button 
                  variant="primary" 
                  size="large"
                  onClick={handleAddToCart}
                  disabled={!selectedSize || !selectedColor || product.stock === 0}
                >
                  🛒 Ajouter au panier
                </Button>
                
                <Button 
                  variant="secondary" 
                  size="large"
                  onClick={handleBuyNow}
                  disabled={!selectedSize || !selectedColor || product.stock === 0}
                >
                  Acheter maintenant
                </Button>
              </div>
            </div>

            {/* Informations supplémentaires */}
            <div className="product-meta">
              <div className="meta-item">
                <strong>Référence:</strong> {product.sku}
              </div>
              <div className="meta-item">
                <strong>Catégorie:</strong> {product.category}
              </div>
              <div className="meta-item">
                <strong>Livraison:</strong> 2-3 jours ouvrables
              </div>
              <div className="meta-item">
                <strong>Retour:</strong> 30 jours satisfait ou remboursé
              </div>
            </div>
          </div>
        </div>

        {/* Produits similaires */}
        <section className="related-products">
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Produits Similaires</h2>
          <div className="products-grid">
            {relatedProducts.map(product => (
              <div key={product.id} className="related-product-card">
                <div style={{
                  width: '100%',
                  height: '200px',
                  background: 'var(--baby-pink)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '15px'
                }}>
                  <span style={{ fontSize: '2rem' }}>🛍️</span>
                </div>
                <h3>{product.name}</h3>
                <p className="price">{product.price} €</p>
                <Link to={`/product/${product.id}`}>
                  <Button variant="ghost" size="small">
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