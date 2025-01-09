import React from 'react';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-item">
        <a href="#general-info" className="banner-link">General Information</a>
      </div>
      <div className="banner-item">
        <a href="#tenants" className="banner-link">Tenants</a>
      </div>
      <div className="banner-item">
        <a href="#contact" className="banner-link">Contact</a>
      </div>
    </div>
  );
};

export default Banner;