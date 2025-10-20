import React, { useState } from 'react';

const ProductManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Robe Élégante', price: 89.99, stock: 15, category: 'Vêtements' },
    { id: 2, name: 'Sac à Main', price: 129.99, stock: 8, category: 'Accessoires' },
    { id: 3, name: 'Bijou Fantaisie', price: 45.99, stock: 25, category: 'Bijoux' }
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    stock: '',
    category: ''
  });

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (newProduct.name && newProduct.price) {
      const product = {
        id: products.length + 1,
        name: newProduct.name,
        price: parseFloat(newProduct.price),
        stock: parseInt(newProduct.stock) || 0,
        category: newProduct.category || 'Général'
      };
      setProducts([...products, product]);
      setNewProduct({ name: '', price: '', stock: '', category: '' });
    }
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="product-management">
      <h2>Gestion des Produits</h2>
      
      {/* Formulaire d'ajout */}
      <form onSubmit={handleAddProduct} className="product-form">
        <h3>Ajouter un produit</h3>
        <div className="form-row">
          <input
            type="text"
            placeholder="Nom du produit"
            value={newProduct.name}
            onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
          />
          <input
            type="number"
            placeholder="Prix (€)"
            value={newProduct.price}
            onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
          />
          <input
            type="number"
            placeholder="Stock"
            value={newProduct.stock}
            onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
          />
          <input
            type="text"
            placeholder="Catégorie"
            value={newProduct.category}
            onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
          />
          <button type="submit" className="elegant-btn">Ajouter</button>
        </div>
      </form>

      {/* Liste des produits */}
      <div className="products-list">
        <h3>Liste des produits ({products.length})</h3>
        <div className="table-container">
          <table className="products-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prix</th>
                <th>Stock</th>
                <th>Catégorie</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price} €</td>
                  <td className={product.stock < 5 ? 'low-stock' : ''}>
                    {product.stock}
                  </td>
                  <td>{product.category}</td>
                  <td>
                    <button className="btn-edit">Modifier</button>
                    <button 
                      className="btn-delete"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Supprimer
                    </button>
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

export default ProductManagement;