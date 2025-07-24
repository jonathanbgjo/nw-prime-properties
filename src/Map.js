import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
const center = {
  lat: 47.9101,
  lng: -122.224,
};
const Map = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
const onLoad = (mapInstance) => {
    // Optional: do something with the map instance
    console.log('Google Map loaded:', mapInstance);
  };
  useEffect(() => {
    // This ensures that the Google Maps API is loaded
    const loadGoogleMaps = () => {
      setMapLoaded(true);
    };

    // You could also load the Google Maps API manually here if needed
    loadGoogleMaps();
  }, []);

  return (
    <LoadScript
    googleMapsApiKey={apiKey}
    onLoad={() => setMapLoaded(true)}
    onError={(error) => console.error('Error loading Google Maps API:', error)}
    >
      {mapLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
          onLoad={onLoad}
        >
          {/* Add a Marker */}
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <p>Loading Map...</p>
      )}
    </LoadScript>
  );
};

export default Map;
