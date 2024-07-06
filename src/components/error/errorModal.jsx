// components/error/ErrorModal.js
import React from 'react';



function ErrorModal({ isOpen, onClose, message }) {
  console.log("ErrorModal rendu:", isOpen, message);

  if (!isOpen) return null;

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  };

  const contentStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    maxWidth: '500px'
  };

  return (
    <div style={modalStyle}>
      <div style={contentStyle}>
        <h2>Erreur</h2>
        <p>{message}</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
}

export default ErrorModal;