import React from 'react';

const ImagePreview = ({ imageUrl }) => {
  return (
    <div className="image-preview">
      <h2>Imagen Precargada</h2>
      <div className="image-container">
        <img src={imageUrl} alt="Imagen Precargada" />
      </div>
    </div>
  );
};

export default ImagePreview;
