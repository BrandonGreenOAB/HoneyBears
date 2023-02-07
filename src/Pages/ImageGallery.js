import React, { useState } from "react";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img
            src={image.src}
            alt={image.alt}
            onClick={() => handleImageClick(image)}
          />
        </div>
      ))}
      {selectedImage && (
        <div className="overlay">
          <div className="popup">
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
