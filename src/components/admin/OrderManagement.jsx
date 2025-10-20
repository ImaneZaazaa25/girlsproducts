import React, { useState } from 'react';

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    { 
      id: 'CMD-001', 
      customer: 'Marie Dupont', 
      date: '2024-01-15', 
      total: 215.97, 
      status: 'livrée',
      items: ['Robe Élégante', 'Sac à Main']
    },
    { 
      id: 'CMD-002', 
      customer: 'Sophie Martin', 
      date: '2024-01-16', 
      total: 89.99, 
      status: 'expédiée',
      items: ['Robe Élégante']
    },
    { 
      id: 'CMD-003', 
      customer: 'Julie Bernard', 
      date: '2024-01-17', 
      total: 45.99, 
      status: 'en attente',
      items: ['Bijou Fantaisie']
    }
  ]);

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'livrée': return '#4caf50';
      case 'expédiée': return '#2196f3';
      case 'en attente': return '#ff9800';
      case 'annulée': return '#f44336';
      default: return '#666';
    }
  };

  return (
    <div className="order-management">
      <h2>Gestion des Commandes</h2>
      
      <div className="orders-stats">
        <div className="stat-card">
          <h3>{orders.length}</h3>
          <p>Commandes totales</p>
        </div>
        <div className="stat-card">
          <h3>{orders.filter(o => o.status === 'en attente').length}</h3>
          <p>En attente</p>
        </div>
        <div className="stat-card">
          <h3>{orders.filter(o => o.status === 'expédiée').length}</h3>
          <p>Expédiées</p>
        </div>
        <div className="stat-card">
          <h3>{orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)} €</h3>
          <p>Chiffre d'affaires</p>
        </div>
      </div>

      <div className="orders-list">
        <h3>Détails des commandes</h3>
        <div className="table-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>ID Commande</th>
                <th>Client</th>
                <th>Date</th>
                <th>Total</th>
                <th>Statut</th>
                <th>Articles</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.date}</td>
                  <td>{order.total} €</td>
                  <td>
                    <span 
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(order.status) }}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <ul className="items-list">
                      {order.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <select 
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                      className="status-select"
                    >
                      <option value="en attente">En attente</option>
                      <option value="expédiée">Expédiée</option>
                      <option value="livrée">Livrée</option>
                      <option value="annulée">Annulée</option>
                    </select>
                    <button className="btn-view">Détails</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;