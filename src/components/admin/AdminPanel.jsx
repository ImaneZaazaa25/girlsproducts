import React from 'react';

const AdminPanel = ({ activeTab, onTabChange }) => {
  return (
    <div className="admin-panel">
      <div className="admin-tabs">
        <button 
          className={`tab-button ${activeTab === 'products' ? 'active' : ''}`}
          onClick={() => onTabChange('products')}
        >
          📦 Gestion Produits
        </button>
        <button 
          className={`tab-button ${activeTab === 'orders' ? 'active' : ''}`}
          onClick={() => onTabChange('orders')}
        >
          📋 Commandes
        </button>
        <button 
          className={`tab-button ${activeTab === 'stats' ? 'active' : ''}`}
          onClick={() => onTabChange('stats')}
        >
          📊 Statistiques
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;