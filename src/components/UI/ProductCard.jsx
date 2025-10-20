import React, { useState } from 'react';
import Button from './Button';

const ProductCard = ({ 
  product, 
  onAddToCart,
  onQuickView 
}) => {
  const [imageLoaded, setImageLoaded] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const {
    id,
    name,
    price,
    originalPrice,
    image,
    category,
    isNew = false,
    isOnSale = false,
    rating = 0,
    stock = 0
  } = product;

  const handleImageError = () => {
    setImageLoaded(false);
  };

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="product-badges">
        {isNew && <span className="badge new">Nouveau</span>}
        {isOnSale && originalPrice && (
          <span className="badge sale">-{discount}%</span>
        )}
        {stock < 5 && stock > 0 && (
          <span className="badge low-stock">Stock bas</span>
        )}
        {stock === 0 && (
          <span className="badge out-of-stock">Rupture</span>
        )}
      </div>

      {/* Image du produit */}
      <div className="product-image-container">
        {imageLoaded && image ? (
          <img 
            src={image} 
            alt={name}
            className="product-image"
            onError={handleImageError}
          />
        ) : (
          <div className="product-image-placeholder">
            <span>🛍️</span>
            <p>Image non disponible</p>
          </div>
        )}
        
        {/* Actions au survol */}
        <div className={`product-actions ${isHovered ? 'visible' : ''}`}>
          <Button 
            variant="ghost" 
            size="small"
            onClick={() => onQuickView && onQuickView(product)}
          >
            👁️ Vite fait
          </Button>
          <Button 
            variant="primary" 
            size="small"
            onClick={() => onAddToCart && onAddToCart(product)}
            disabled={stock === 0}
          >
            {stock === 0 ? 'Rupture' : '🛒 Ajouter'}
          </Button>
        </div>
      </div>

      {/* Informations du produit */}
      <div className="product-info">
        <div className="product-category">{category}</div>
        <h3 className="product-name">{name}</h3>
        
        {/* Rating */}
        <div className="product-rating">
          {[...Array(5)].map((_, index) => (
            <span 
              key={index} 
              className={`star ${index < rating ? 'filled' : ''}`}
            >
              ★
            </span>
          ))}
          <span className="rating-count">({Math.floor(Math.random() * 100)})</span>
        </div>

        {/* Prix */}
        <div className="product-pricing">
          {isOnSale && originalPrice && (
            <span className="original-price">{originalPrice} €</span>
          )}
          <span className="current-price">{price} €</span>
        </div>

        {/* Stock */}
        <div className="product-stock">
          {stock > 0 ? (
            <span className="in-stock">🟢 {stock} en stock</span>
          ) : (
            <span className="out-of-stock">🔴 Rupture de stock</span>
          )}
        </div>

        {/* Bouton principal */}
        <Button 
          variant="primary"
          size="medium"
          onClick={() => onAddToCart && onAddToCart(product)}
          disabled={stock === 0}
          className="add-to-cart-btn"
        >
          {stock === 0 ? 'Rupture de stock' : 'Ajouter au panier'}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;