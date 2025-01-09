import React from 'react';
import Slider from 'react-slick';

// Sample images (replace with actual images)
const images = [
  '../public/images/IMG_0152.jpg',
  '/images/IMG_0187.jpg',
  '/images/IMG_0202.jpg',
  '/images/map.jpg'
];

const ImageGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageGallery;