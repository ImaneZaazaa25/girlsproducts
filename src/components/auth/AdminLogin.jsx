import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = ({ onLoginSuccess }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Authentification simple pour tester
    if (credentials.username && credentials.password) {
      onLoginSuccess();
      navigate('/admin/dashboard');
    } else {
      alert('Veuillez remplir tous les champs');
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Connexion Admin</h2>
        
        <div className="form-group">
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={credentials.username}
            onChange={(e) => setCredentials({...credentials, username: e.target.value})}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Mot de passe"
            value={credentials.password}
            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
          />
        </div>

        <button type="submit" className="elegant-btn" style={{ width: '100%' }}>
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;