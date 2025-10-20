import React, { useState } from 'react';
import AdminPanel from '../components/admin/AdminPanel';
import ProductManagement from '../components/admin/ProductManagement';
import OrderManagement from '../components/admin/OrderManagement';
import Statistics from '../components/admin/Statistics';

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('products');

  const renderTabContent = () => {
    switch(activeTab) {
      case 'products':
        return <ProductManagement />;
      case 'orders':
        return <OrderManagement />;
      case 'stats':
        return <Statistics />;
      default:
        return <ProductManagement />;
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'var(--light-pink)',
      padding: '2rem 0'
    }}>
      <div className="elegant-container">
        <div className="admin-header">
          <h1>Dashboard Administrateur</h1>
          <button onClick={onLogout} className="elegant-btn logout-btn">
            Déconnexion
          </button>
        </div>

        <AdminPanel activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="admin-content">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;