import React from 'react';
import './Location.css';

const properties = [
    { label: 'Center Type', value: 'Neighborhood Center' },
    { label: 'Daily Traffic Count', value: '52,000' },
    { label: 'Frontage', value: '2,000 on 7th Ave' },
    { label: 'Parking', value: '626 Spaces' },
    { label: 'Gross Leasable Area', value: '70,358 SF' },
    { label: 'Stores', value: '1' },
    { label: 'Total Land Area', value: '10.10 AC' },
    { label: 'Center Properties', value: '2' },
    { label: 'Year Built', value: '1978' }]
const Location = () => {
    
  return (
    <section className="location">
      <h3>Location</h3>
      <p><strong>Address:</strong> 607 Marketplace, Everett, WA</p>
      <div className="properties-grid">
      {properties.map((property, index) => (
        <div className="property" key={index}>
          <span className="label">{property.label}:</span>
          <span className="value">{property.value}</span>
        </div>
      ))}
    </div>
      <p><strong>Key Tenants:</strong> Mobil, ZoomRoom, El Rinconsito, Starbright</p>
    </section>
  );
};

export default Location;