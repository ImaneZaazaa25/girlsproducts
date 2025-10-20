import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminButton = () => {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  const handleSecretActivation = () => {
    setShowButton(true);
    setTimeout(() => setShowButton(false), 5000);
  };

  const handleAdminAccess = () => {
    navigate('/admin/login');
  };

  if (!showButton) {
    return (
      <div 
        className="secret-activation-area"
        onDoubleClick={handleSecretActivation}
        title="Zone secrète admin"
      />
    );
  }

  return (
    <button 
      className="admin-access-btn"
      onClick={handleAdminAccess}
    >
      🔒 Admin
    </button>
  );
};

export default AdminButton;