import React from 'react';

import './profil_garage.scss';
import StarRating from '../star_rating/star_rating';

 export default function ProfileGarage({ garage }) {
  const { name, address, phone, rating } = garage;

  return (
    <div className="profile-garage">
      <h1>Profil du Garage</h1>
      
      <div className="info-container">
        <div className="info-item">
          <h2>Nom du garage :</h2>
          <div className="info-value">{name}</div>
        </div>
        
        <div className="info-item">
          <h2>Adresse du garage :</h2>
          <div className="info-value">{address}</div>
        </div>
        
        <div className="info-item">
          <h2>Numero de téléphone du garage :</h2>
          <div className="info-value">{phone}</div>
        </div>
        
        <div className="info-item">
          <h2>Note :</h2>
          <StarRating rating={rating} />
        </div>
      </div>
    </div>
  );
};

