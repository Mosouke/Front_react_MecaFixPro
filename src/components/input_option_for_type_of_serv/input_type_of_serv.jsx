import React, { useState } from 'react';
import './input_option_for_type_of_serv.scss';

export default function InputTypeOfServ({ typesOfServices, selectedService, onServiceSelect }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [focusedOptionIndex, setFocusedOptionIndex] = useState(0); // Pour suivre l'option mise au point

    const handleServiceClick = (service) => {
        setIsDropdownOpen(false);
        onServiceSelect(service);
    };

    const handleKeyDown = (event, service) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleServiceClick(service);
        } else if (event.key === 'ArrowDown') {
            event.preventDefault();
            setFocusedOptionIndex((prevIndex) => Math.min(prevIndex + 1, typesOfServices.length - 1));
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            setFocusedOptionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        }
    };

    return (
        <div className="input_type_of_serv" role="combobox" aria-haspopup="listbox" aria-expanded={isDropdownOpen}>
            <h2>Type de service</h2>
            <div className="custom-dropdown">
                <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    aria-controls="service-dropdown"
                    aria-expanded={isDropdownOpen}
                >
                    {selectedService || 'Sélectionnez un type de service'}
                </button>
                {isDropdownOpen && (
                    <ul className="dropdown-list" id="service-dropdown" role="listbox">
                        {typesOfServices.map((service, index) => (
                            <li
                                key={index}
                                onClick={() => handleServiceClick(service.type)}
                                role="option"
                                aria-selected={selectedService === service.type}
                                tabIndex="0"
                                onKeyDown={(event) => handleKeyDown(event, service.type)} // Gestion de l'événement de touche
                                className={focusedOptionIndex === index ? 'focused' : ''} // Classe pour l'option mise au point
                            >
                                {service.type}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
