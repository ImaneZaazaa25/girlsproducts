import React from 'react';

const NotFound = () => {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '100px 20px',
      background: 'var(--light-pink)',
      minHeight: '60vh'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Page non trouvée
      </p>
      <a href="/" className="elegant-btn">
        Retour à l'accueil
      </a>
    </div>
  );
};

export default NotFound;