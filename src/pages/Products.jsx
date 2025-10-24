import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);
  const [sortBy, setSortBy] = useState('newest');
  const [filterCategory, setFilterCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const allProducts = [
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
    },
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
    },
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
    },
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
  ];

  const categories = ['all', 'Robes', 'Accessoires', 'Bijoux', 'Chaussures'];

  // Filtrage et tri des produits
  const filteredProducts = allProducts
    .filter(product => {
      const categoryMatch = filterCategory === 'all' || product.category === filterCategory;
      const priceMatch = product.price >= priceRange.min && product.price <= priceRange.max;
      return categoryMatch && priceMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
        default:
          return b.isNew - a.isNew || a.id - b.id;
      }
    });

  // Calcul de la pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset à la page 1 quand les filtres changent
  React.useEffect(() => {
    setCurrentPage(1);
  }, [filterCategory, priceRange, sortBy]);

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

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const HeartIcon = ({ filled }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? "#fbacc1" : "none"} stroke="#fbacc1" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );

  const Pagination = () => {
    if (totalPages <= 1) return null;

    const getPageNumbers = () => {
      const pages = [];
      const maxVisiblePages = 5;
      
      if (totalPages <= maxVisiblePages) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        if (currentPage <= 3) {
          for (let i = 1; i <= 4; i++) {
            pages.push(i);
          }
          pages.push('...');
          pages.push(totalPages);
        } else if (currentPage >= totalPages - 2) {
          pages.push(1);
          pages.push('...');
          for (let i = totalPages - 3; i <= totalPages; i++) {
            pages.push(i);
          }
        } else {
          pages.push(1);
          pages.push('...');
          for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            pages.push(i);
          }
          pages.push('...');
          pages.push(totalPages);
        }
      }
      
      return pages;
    };

    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        marginTop: '40px',
        padding: '20px'
      }}>
        {/* Bouton Précédent */}
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          style={{
            padding: '10px 16px',
            border: '1px solid #E0E0E0',
            background: currentPage === 1 ? '#F5F5F5' : '#FFFFFF',
            color: currentPage === 1 ? '#999999' : '#1A1A1A',
            borderRadius: '8px',
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'all 0.2s ease',
            opacity: currentPage === 1 ? 0.5 : 1
          }}
          onMouseEnter={(e) => {
            if (currentPage !== 1) {
              e.currentTarget.style.background = '#F8F8F8';
              e.currentTarget.style.borderColor = '#fbacc1';
            }
          }}
          onMouseLeave={(e) => {
            if (currentPage !== 1) {
              e.currentTarget.style.background = '#FFFFFF';
              e.currentTarget.style.borderColor = '#E0E0E0';
            }
          }}
        >
          Précédent
        </button>

        {/* Numéros de pages */}
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && setCurrentPage(page)}
            disabled={page === '...'}
            style={{
              padding: '10px 16px',
              border: page === currentPage ? '1px solid #fbacc1' : '1px solid #E0E0E0',
              background: page === currentPage ? '#fbacc1' : '#FFFFFF',
              color: page === currentPage ? '#FFFFFF' : (page === '...' ? '#999999' : '#1A1A1A'),
              borderRadius: '8px',
              cursor: page === '...' ? 'default' : 'pointer',
              fontSize: '14px',
              fontWeight: page === currentPage ? '600' : '500',
              transition: 'all 0.2s ease',
              minWidth: '44px'
            }}
            onMouseEnter={(e) => {
              if (page !== '...' && page !== currentPage) {
                e.currentTarget.style.background = '#F8F8F8';
                e.currentTarget.style.borderColor = '#fbacc1';
              }
            }}
            onMouseLeave={(e) => {
              if (page !== '...' && page !== currentPage) {
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.style.borderColor = '#E0E0E0';
              }
            }}
          >
            {page}
          </button>
        ))}

        {/* Bouton Suivant */}
        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          style={{
            padding: '10px 16px',
            border: '1px solid #E0E0E0',
            background: currentPage === totalPages ? '#F5F5F5' : '#FFFFFF',
            color: currentPage === totalPages ? '#999999' : '#1A1A1A',
            borderRadius: '8px',
            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'all 0.2s ease',
            opacity: currentPage === totalPages ? 0.5 : 1
          }}
          onMouseEnter={(e) => {
            if (currentPage !== totalPages) {
              e.currentTarget.style.background = '#F8F8F8';
              e.currentTarget.style.borderColor = '#fbacc1';
            }
          }}
          onMouseLeave={(e) => {
            if (currentPage !== totalPages) {
              e.currentTarget.style.background = '#FFFFFF';
              e.currentTarget.style.borderColor = '#E0E0E0';
            }
          }}
        >
          Suivant
        </button>
      </div>
    );
  };

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
      onClick={() => handleProductClick(product.id)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
      }}
    >
      {/* Badge Special/Nouveau */}
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

      {product.isNew && !product.isSpecial && (
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          background: '#1A1A1A',
          color: 'white',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: '600',
          zIndex: 2
        }}>
          Nouveau
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
          e.currentTarget.style.background = 'white';
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
          e.currentTarget.style.transform = 'scale(1)';
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
      <style>
        {`
          .filter-select:focus {
            outline: none;
            border-color: #fbacc1;
          }

          @media (max-width: 768px) {
            .filters-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>

      {/* Banner Section - Full Width */}
      <section >
        
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: '#1A1A1A'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '20px',
          }}>
            Notre Collection
          </h1>
          <p style={{
            fontSize: '1.2rem',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Découvrez notre sélection de produits tendance
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section style={{
        padding: '60px 20px 40px',
        background: '#F8F8F8'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Filters Bar */}
          <div style={{
            background: '#FFFFFF',
            padding: '30px',
            borderRadius: '12px',
            marginBottom: '40px',
            border: '1px solid #F0F0F0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
          }}>
            <div className="filters-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              alignItems: 'end'
            }}>
              {/* Category Filter */}
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600',
                  color: '#1A1A1A',
                  fontSize: '14px'
                }}>
                  Catégorie
                </label>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="filter-select"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #E0E0E0',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#1A1A1A',
                    background: '#FAFAFA',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'Toutes les catégories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Filter */}
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600',
                  color: '#1A1A1A',
                  fontSize: '14px'
                }}>
                  Trier par
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="filter-select"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #E0E0E0',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#1A1A1A',
                    background: '#FAFAFA',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <option value="newest">Plus récents</option>
                  <option value="price-low">Prix croissant</option>
                  <option value="price-high">Prix décroissant</option>
                  <option value="rating">Mieux notés</option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600',
                  color: '#1A1A1A',
                  fontSize: '14px'
                }}>
                  Prix max: {priceRange.max}€
                </label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                  style={{
                    width: '100%',
                    height: '6px',
                    background: '#E0E0E0',
                    borderRadius: '3px',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                />
              </div>

              {/* Results Count */}
              <div style={{
                padding: '12px 20px',
                background: '#FAFAFA',
                borderRadius: '8px',
                border: '1px solid #E0E0E0',
                textAlign: 'center'
              }}>
                <div style={{ 
                  fontWeight: '600', 
                  fontSize: '18px',
                  color: '#1A1A1A'
                }}>
                  {filteredProducts.length}
                </div>
                <div style={{ 
                  fontSize: '13px',
                  color: '#666666'
                }}>
                  produits trouvés
                </div>
                {totalPages > 1 && (
                  <div style={{ 
                    fontSize: '12px',
                    color: '#999999',
                    marginTop: '4px'
                  }}>
                    Page {currentPage} sur {totalPages}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section style={{
        padding: '0 20px 80px',
        background: '#F8F8F8'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {filteredProducts.length > 0 ? (
            <>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px'
              }}>
                {currentProducts.map(product => (
                  <ProductItem key={product.id} product={product} />
                ))}
              </div>
              <Pagination />
            </>
          ) : (
            /* Empty State */
            <div style={{
              textAlign: 'center',
              padding: '80px 20px',
              background: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid #F0F0F0'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🔍</div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#1A1A1A',
                marginBottom: '10px'
              }}>
                Aucun produit trouvé
              </h3>
              <p style={{
                color: '#666666',
                marginBottom: '30px',
                fontSize: '1.1rem'
              }}>
                Essayez de modifier vos critères de recherche
              </p>
              <button
                onClick={() => {
                  setFilterCategory('all');
                  setPriceRange({ min: 0, max: 200 });
                  setSortBy('newest');
                }}
                style={{
                  padding: '12px 30px',
                  background: '#fbacc1',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f8a5c2';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#fbacc1';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;