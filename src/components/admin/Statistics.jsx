import React from 'react';

const Statistics = () => {
  const statsData = {
    revenue: [1200, 1900, 1500, 2100, 1800, 2400, 2800],
    orders: [15, 22, 18, 25, 20, 28, 35],
    products: [45, 52, 48, 55, 50, 58, 60]
  };

  const popularProducts = [
    { name: 'Robe Élégante', sales: 45, revenue: 4049.55 },
    { name: 'Sac à Main', sales: 28, revenue: 3639.72 },
    { name: 'Bijou Fantaisie', sales: 60, revenue: 2759.40 },
    { name: 'Chaussures Talons', sales: 22, revenue: 2199.78 },
    { name: 'Écharpe Soie', sales: 35, revenue: 1399.65 }
  ];

  return (
    <div className="statistics">
      <h2>Statistiques et Analytics</h2>
      
      {/* Cartes de statistiques */}
      <div className="stats-overview">
        <div className="stat-card large">
          <h3>2,847.50 €</h3>
          <p>Chiffre d'affaires ce mois</p>
          <span className="trend positive">+12% vs mois dernier</span>
        </div>
        <div className="stat-card large">
          <h3>35</h3>
          <p>Commandes ce mois</p>
          <span className="trend positive">+8% vs mois dernier</span>
        </div>
        <div className="stat-card large">
          <h3>60</h3>
          <p>Produits en stock</p>
          <span className="trend neutral">Stable</span>
        </div>
        <div className="stat-card large">
          <h3>84%</h3>
          <p>Taux de satisfaction</p>
          <span className="trend positive">+5%</span>
        </div>
      </div>

      {/* Graphiques simplifiés */}
      <div className="charts-section">
        <div className="chart-card">
          <h3>Chiffre d'affaires (7 derniers jours)</h3>
          <div className="bar-chart">
            {statsData.revenue.map((value, index) => (
              <div key={index} className="bar-container">
                <div 
                  className="bar" 
                  style={{ height: `${(value / 3000) * 100}%` }}
                  title={`${value} €`}
                ></div>
                <span className="day-label">{['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'][index]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="chart-card">
          <h3>Commandes (7 derniers jours)</h3>
          <div className="line-chart-simple">
            {statsData.orders.map((value, index) => (
              <div key={index} className="data-point">
                <div className="point" style={{ bottom: `${(value / 40) * 100}%` }}></div>
                <span className="day-label">{['L', 'M', 'M', 'J', 'V', 'S', 'D'][index]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Produits populaires */}
      <div className="popular-products">
        <h3>Top 5 des produits</h3>
        <div className="products-ranking">
          {popularProducts.map((product, index) => (
            <div key={product.name} className="ranking-item">
              <span className="rank">#{index + 1}</span>
              <span className="product-name">{product.name}</span>
              <span className="sales">{product.sales} ventes</span>
              <span className="revenue">{product.revenue.toFixed(2)} €</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;