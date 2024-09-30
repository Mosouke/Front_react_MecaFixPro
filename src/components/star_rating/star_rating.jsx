import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom'; // Import du hook pour détecter la route
import './star_raiting.scss';

export default function StarRating({ rating }) {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    
    const location = useLocation();
 
    const emptyStarColor = location.pathname === '/resultat' ? '#000000' : '#FFFFFF';

    return (
        <div className='stars_flex'>
            <div>
                {[...Array(fullStars)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} style={{ color: '#FFB904' }} />
                ))}
                {[...Array(emptyStars)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} style={{ color: emptyStarColor }} />
                ))}
            </div>
            <p>{rating} / 5</p>
        </div>
    );
}
