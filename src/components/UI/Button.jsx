import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: '25px',
    fontWeight: '500',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    fontFamily: 'inherit',
    opacity: disabled ? 0.6 : 1,
  };

  const variants = {
    primary: {
      background: 'linear-gradient(135deg, var(--baby-pink), #f0b4ba)',
      color: 'var(--text-dark)',
    },
    secondary: {
      background: 'var(--white)',
      color: 'var(--text-dark)',
      border: '2px solid var(--baby-pink)',
    },
    success: {
      background: 'linear-gradient(135deg, #4caf50, #45a049)',
      color: 'var(--white)',
    },
    danger: {
      background: 'linear-gradient(135deg, #f44336, #d32f2f)',
      color: 'var(--white)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-dark)',
      border: '2px solid transparent',
    }
  };

  const sizes = {
    small: {
      padding: '8px 16px',
      fontSize: '0.8rem',
    },
    medium: {
      padding: '12px 24px',
      fontSize: '0.95rem',
    },
    large: {
      padding: '16px 32px',
      fontSize: '1.1rem',
    }
  };

  const styles = {
    ...baseStyles,
    ...variants[variant],
    ...sizes[size],
  };

  return (
    <button
      type={type}
      style={styles}
      onClick={onClick}
      disabled={disabled}
      className={`elegant-button ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;