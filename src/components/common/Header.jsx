import React from 'react';
import { Link } from 'react-router-dom';
import AdminButton from './AdminButton';

const Header = ({ isAdminAuthenticated, onLogout }) => {
  return (
    <header className="header">
      <div className="elegant-container">
        <nav className="navbar">
          <Link to="/" className="logo">Belle Élégance</Link>
          
          <ul className="nav-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/products">Boutique</Link></li>
          </ul>

          <div className="nav-actions">
            <Link to="/cart" className="elegant-btn">Panier</Link>
            {isAdminAuthenticated && (
              <button 
                onClick={onLogout}
                className="elegant-btn"
                style={{ marginLeft: '10px', background: '#ff6b6b' }}
              >
                Déconnexion
              </button>
            )}
          </div>
        </nav>
      </div>
      <AdminButton />
    </header>
  );
};

export default Header;