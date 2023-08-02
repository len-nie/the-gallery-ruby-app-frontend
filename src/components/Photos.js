
import React from 'react';

const Photo = ({ id, title, source, onDelete, onPurchase }) => {
  return (
    <div className="photo-card">
      <img src={source} alt={title} />
      <h2>{title}</h2>
      <div className="button-container">
        <button onClick={() => onDelete(id)}>Delete</button>
        <button onClick={() => onPurchase(id)}>Purchase</button>
      </div>
    </div>
  );
};

export default Photo;
