import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import './card_garage.scss';

export default function Card({ name, address, rating }) {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
        <div className="card-container">
            <h2>{name}</h2>
            <p>{address}</p>
            <div className='stars_butons_flex'>
                <div>
                    {[...Array(fullStars)].map((_, index) => (
                        <FontAwesomeIcon key={index} icon={faStar} style={{ color: '#FFB904' }} />
                    ))}
                    {[...Array(emptyStars)].map((_, index) => (
                        <FontAwesomeIcon key={index} icon={faStarEmpty} style={{ color: 'black' }} />
                    ))}
                </div>
                <p>{rating} / 5</p>
                <div className="btn_sub">
                    <a href="#" className="btn">Voir Plus</a>
                </div>
            </div>
        </div>
    );
}
