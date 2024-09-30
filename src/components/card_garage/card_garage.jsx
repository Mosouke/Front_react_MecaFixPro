import React from 'react';
import StarRating from '../star_rating/star_rating';
import './card_garage.scss';
import { Link } from 'react-router-dom';

export default function Card({ name, address, rating, garage_Id }) {
    return (
        <div className="card-container">
            <h2>{name}</h2>
            <p>{address}</p>
            <div className='stars_butons_flex'>
                <StarRating rating={rating} />
                <div className="btn_sub">
                    <Link to={`/garage/${garage_Id}`} className="btn">Voir Plus</Link>
                </div>
            </div>
        </div>
    );
}
