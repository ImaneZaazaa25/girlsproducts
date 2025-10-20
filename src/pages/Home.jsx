import React from 'react';
import ProductCard from '../components/UI/ProductCard';
import Button from '../components/UI/Button';

const Home = () => {
  // Données exemple pour les produits
  const featuredProducts = [
    {
      id: 1,
      name: 'Robe Élégante Soirée',
      price: 89.99,
      originalPrice: 119.99,
      category: 'Robes',
      image: '/api/placeholder/300/400',
      isNew: true,
      isOnSale: true,
      rating: 4.5,
      stock: 15
    },
    {
      id: 2,
      name: 'Sac à Main Cuir',
      price: 129.99,
      category: 'Accessoires',
      image: '/api/placeholder/300/400',
      isNew: false,
      rating: 4.8,
      stock: 8
    },
    {
      id: 3,
      name: 'Collier Perles',
      price: 45.99,
      category: 'Bijoux',
      image: '/api/placeholder/300/400',
      isNew: true,
      rating: 4.2,
      stock: 25
    },
    {
      id: 4,
      name: 'Chaussures Talons',
      price: 99.99,
      originalPrice: 129.99,
      category: 'Chaussures',
      image: '/api/placeholder/300/400',
      isOnSale: true,
      rating: 4.3,
      stock: 0
    }
  ];

  const handleAddToCart = (product) => {
    console.log('Ajouter au panier:', product);
    // Ici vous ajouterez la logique pour ajouter au panier
  };

  const handleQuickView = (product) => {
    console.log('Vue rapide:', product);
    // Ici vous ajouterez la logique pour la vue rapide
  };

  return (
    <div style={{ background: 'var(--light-pink)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="elegant-container">
          <h1>Élégance Féminine</h1>
          <p>Découvrez notre collection exclusive pour la femme moderne</p>
          <Button variant="primary" size="large">
            Découvrir la collection
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ padding: '80px 0' }}>
        <div className="elegant-container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Nos Produits Phares
          </h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onQuickView={handleQuickView}
              />
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button variant="secondary" size="large">
              Voir tous les produits
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;