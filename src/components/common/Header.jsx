import React, { useState } from 'react';

const Header = ({ isAdminAuthenticated, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('tout');

  const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.35-4.35"></path>
    </svg>
  );

  const HeartIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );

  const ShoppingBagIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
  );

  const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );

  const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  const categories = [
    { id: 'tout', label: 'Tout' },
    { id: 'cheveux', label: 'Cheveux' },
    { id: 'visage', label: 'Visage' },
    { id: 'corps', label: 'Corps' },
    { id: 'maquillage', label: 'Maquillage' },
    { id: 'parfums', label: 'Parfums' },
    { id: 'accessoires', label: 'Accessoires' }
  ];

  return (
    <header style={{
      background: '#F8F8F8', // Changed from #FFFFFF to #F8F8F8
      borderBottom: '1px solid #F0F0F0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
    }}>
      <style>
        {`
          .search-input:focus {
            outline: none;
            border-color: #fbacc1;
          }

          .nav-link:hover {
            color: #fbacc1;
          }

          .icon-button {
            position: relative;
            transition: all 0.2s ease;
          }

          .icon-button:hover {
            color: #fbacc1;
            transform: scale(1.1);
          }

          .category-tab {
            position: relative;
            transition: all 0.2s ease;
          }

          .category-tab::after {
            content: '';
            position: absolute;
            bottom: -12px;
            left: 0;
            width: 0;
            height: 2px;
            background: #fbacc1;
            transition: width 0.3s ease;
          }

          .category-tab:hover::after,
          .category-tab-active::after {
            width: 100%;
          }

          .category-tab-active {
            color: #fbacc1;
            font-weight: 600;
          }

          .cart-badge {
            position: absolute;
            top: -8px;
            right: -8px;
            background: #fbacc1;
            color: white;
            font-size: 11px;
            font-weight: 600;
            padding: 2px 6px;
            border-radius: 10px;
            min-width: 18px;
            text-align: center;
          }

          @media (max-width: 968px) {
            .desktop-header {
              display: none !important;
            }
            .mobile-menu-button {
              display: flex !important;
            }
            .mobile-menu-open {
              display: block !important;
            }
          }

          @media (min-width: 969px) {
            .mobile-header {
              display: none !important;
            }
          }
        `}
      </style>

      {/* Desktop Header */}
      <div className="desktop-header">
        {/* Top Bar */}
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 40px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '20px 0',
            gap: '40px'
          }}>
            {/* Search Bar */}
            <div style={{
              flex: '0 0 280px',
              position: 'relative'
            }}>
              <input
                type="text"
                placeholder="Rechercher..."
                className="search-input"
                style={{
                  width: '100%',
                  padding: '10px 40px 10px 16px',
                  border: '1px solid #E0E0E0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#1A1A1A',
                  background: '#FAFAFA',
                  transition: 'all 0.2s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#999999',
                pointerEvents: 'none'
              }}>
                <SearchIcon />
              </div>
            </div>

            {/* Logo - Centered */}
            <div style={{
              flex: '1',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <a href="/" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                color: '#1A1A1A',
                fontSize: '24px',
                fontWeight: '700',
                transition: 'opacity 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                <div style={{ color: '#fbacc1' }}>
                  <HeartIcon />
                </div>
                Hna logo(lqlb tan7ydo 3ndak a iliass)
              </a>
            </div>

            {/* Navigation & Icons */}
            <div style={{
              flex: '0 0 280px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '32px'
            }}>
              {/* Nav Links */}
              <nav style={{
                display: 'flex',
                gap: '32px',
                alignItems: 'center'
              }}>
                <a href="/" className="nav-link" style={{
                  textDecoration: 'none',
                  color: '#666666',
                  fontSize: '15px',
                  fontWeight: '500',
                  transition: 'color 0.2s ease'
                }}>
                  Accueil
                </a>
                <a href="/orders" className="nav-link" style={{
                  textDecoration: 'none',
                  color: '#666666',
                  fontSize: '15px',
                  fontWeight: '500',
                  transition: 'color 0.2s ease'
                }}>
                  Commandes
                </a>
                <a href="/contact" className="nav-link" style={{
                  textDecoration: 'none',
                  color: '#666666',
                  fontSize: '15px',
                  fontWeight: '500',
                  transition: 'color 0.2s ease'
                }}>
                  Contact
                </a>
              </nav>

              {/* Icons */}
              <div style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'center'
              }}>
                <a href="/wishlist" className="icon-button" style={{
                  color: '#666666',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <HeartIcon />
                </a>
                <a href="/cart" className="icon-button" style={{
                  color: '#666666',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative'
                }}>
                  <ShoppingBagIcon />
                  <span className="cart-badge">3</span>
                </a>
              </div>
            </div>
          </div>

          {/* Categories Tab */}
          <div style={{
            borderTop: '1px solid #F0F0F0',
            paddingTop: '12px',
            paddingBottom: '12px'
          }}>
            <div style={{
              display: 'flex',
              gap: '40px',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`category-tab ${activeCategory === category.id ? 'category-tab-active' : ''}`}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: activeCategory === category.id ? '#fbacc1' : '#666666',
                    fontSize: '14px',
                    fontWeight: activeCategory === category.id ? '600' : '500',
                    cursor: 'pointer',
                    padding: '8px 0'
                  }}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="mobile-header">
        <div style={{
          padding: '16px 20px'
        }}>
          {/* Mobile Top Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px'
          }}>
            <button
              style={{
                background: 'transparent',
                border: '1px solid #E0E0E0',
                borderRadius: '8px',
                padding: '8px',
                cursor: 'pointer',
                color: '#666666',
                display: 'flex',
                alignItems: 'center'
              }}
              className="mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            <a href="/" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              color: '#1A1A1A',
              fontSize: '20px',
              fontWeight: '700'
            }}>
              <div style={{ color: '#fbacc1' }}>
                <HeartIcon />
              </div>
              BelleÂme
            </a>

            <div style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'center'
            }}>
              <a href="/wishlist" style={{
                color: '#666666',
                display: 'flex',
                alignItems: 'center'
              }}>
                <HeartIcon />
              </a>
              <a href="/cart" style={{
                color: '#666666',
                display: 'flex',
                alignItems: 'center',
                position: 'relative'
              }}>
                <ShoppingBagIcon />
                <span className="cart-badge">3</span>
              </a>
            </div>
          </div>

          {/* Mobile Search */}
          <div style={{
            position: 'relative',
            marginBottom: '16px'
          }}>
            <input
              type="text"
              placeholder="Rechercher..."
              className="search-input"
              style={{
                width: '100%',
                padding: '10px 40px 10px 16px',
                border: '1px solid #E0E0E0',
                borderRadius: '8px',
                fontSize: '14px',
                color: '#1A1A1A',
                background: '#FAFAFA'
              }}
            />
            <div style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#999999'
            }}>
              <SearchIcon />
            </div>
          </div>

          {/* Mobile Categories */}
          <div style={{
            display: 'flex',
            gap: '12px',
            overflowX: 'auto',
            paddingBottom: '8px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                style={{
                  background: activeCategory === category.id ? '#fbacc1' : '#FAFAFA',
                  border: activeCategory === category.id ? 'none' : '1px solid #E0E0E0',
                  color: activeCategory === category.id ? '#FFFFFF' : '#666666',
                  fontSize: '13px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease'
                }}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="mobile-menu-open" style={{
              marginTop: '16px',
              paddingTop: '16px',
              borderTop: '1px solid #F0F0F0'
            }}>
              <nav style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <a href="/" style={{
                  textDecoration: 'none',
                  color: '#666666',
                  fontSize: '15px',
                  fontWeight: '500',
                  padding: '8px 0'
                }}>
                  Accueil
                </a>
                <a href="/orders" style={{
                  textDecoration: 'none',
                  color: '#666666',
                  fontSize: '15px',
                  fontWeight: '500',
                  padding: '8px 0'
                }}>
                  Commandes
                </a>
                <a href="/contact" style={{
                  textDecoration: 'none',
                  color: '#666666',
                  fontSize: '15px',
                  fontWeight: '500',
                  padding: '8px 0'
                }}>
                  Contact
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;