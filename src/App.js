// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetail';
import AdminLogin from './components/auth/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import PrivateRoute from './components/auth/PrivateRoute';
import NotFound from './pages/NotFound';
import './styles/globals.css';

function App() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route pour le login admin (sans header/footer) */}
          <Route 
            path="/admin/login" 
            element={
              <AdminLogin 
                onLoginSuccess={() => setIsAdminAuthenticated(true)} 
              />
            } 
          />
          
          {/* Routes principales avec header et footer */}
          <Route path="/*" element={
            <MainLayout 
              isAdminAuthenticated={isAdminAuthenticated}
              onLogout={() => setIsAdminAuthenticated(false)}
            />
          } />
        </Routes>
      </div>
    </Router>
  );
}

// Composant de layout principal
const MainLayout = ({ isAdminAuthenticated, onLogout }) => {
  return (
    <>
      <Header isAdminAuthenticated={isAdminAuthenticated} onLogout={onLogout} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route 
            path="/admin/dashboard" 
            element={
              <PrivateRoute isAuthenticated={isAdminAuthenticated}>
                <AdminDashboard onLogout={onLogout} />
              </PrivateRoute>
            } 
          />
          {/* Route pour la page 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;