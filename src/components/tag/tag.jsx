import React from "react";
import './tag.scss';

export default function Tag({ text, isActive, onClick }) {

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onClick();
        }
    };

    return (
        <span 
            className={`tag ${isActive ? 'active' : ''}`} 
            onClick={onClick} onKeyDown={handleKeyDown} 
            role="button" 
            aria-pressed={isActive}
            tabIndex={0} 
        >
            {text} 
        </span>
    );
}
