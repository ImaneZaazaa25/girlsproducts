import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--white)',
      padding: '40px 0',
      borderTop: '1px solid var(--baby-pink)',
      marginTop: 'auto'
    }}>
      <div className="elegant-container">
        <div style={{ textAlign: 'center' }}>
          <p>&copy; 2024 Belle Élégance. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;