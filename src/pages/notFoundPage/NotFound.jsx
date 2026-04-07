import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    textAlign: 'center',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    color: '#333' 
  };

  const errorCodeStyle = {
    fontSize: '8rem',
    margin: 0,
    background: 'linear-gradient(to right, #ff4d4d 0%, #ff1a1a 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold'
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
    backgroundColor: '#ff1a1a',
    color: 'white',
    border: 'none',
    marginTop: '25px'
  };

  return (
    <div style={containerStyle}>
      <h1 style={errorCodeStyle}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
        Oops! Page not found
      </h2>
      <p style={{ color: '#666', maxWidth: '400px', lineHeight: '1.5' }}>
        The page you are looking for does not exist or may have been moved.
      </p>
      
      <Link to="/" style={buttonStyle}>
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;