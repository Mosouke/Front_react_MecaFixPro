import React, { useState } from 'react';
import './input_type_of_serv_spe.scss';

export default function InputTypeOfServSpe({
    typesOfServices, selectedService, onServiceSelect 
}) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [focusedOptionIndex, setFocusedOptionIndex] = useState(0); 

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
            setFocusedOptionIndex((prevIndex) => Math.min(prevIndex + 1, typesOfServices.flatMap(service => service.services_specifiques).length - 1));
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            setFocusedOptionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        }
    };

    const formatServiceText = (text) => {
        const words = text.split(' ');
        let currentLine = '';
        const lines = [];

        words.forEach((word) => {
            if ((currentLine + word).length > 28) {
                lines.push(currentLine.trim());
                currentLine = word + ' ';
            } else {
                currentLine += word + ' ';
            }
        });

        if (currentLine) {
            lines.push(currentLine.trim());
        }

        return lines.join(' '); 
    };

    return (
        <div className="input_type_of_serv_spe" role="combobox" aria-haspopup="listbox" aria-expanded={isDropdownOpen}>
            <h2>Type de service spécifique</h2>
            <div className="custom-dropdown">
                <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    aria-controls="service-dropdown"
                    aria-expanded={isDropdownOpen}
                >
                    {selectedService || 'Sélectionnez un type de service spécifique'}
                </button>
                {isDropdownOpen && (
                    <ul className="dropdown-list" id="service-dropdown" role="listbox" aria-labelledby="service-dropdown-label">
                        {typesOfServices.flatMap((service, index) => (
                            service.services_specifiques.map((specifique, subIndex) => (
                                <li
                                    key={`${index}-${subIndex}`}
                                    onClick={() => handleServiceClick(specifique)}
                                    role="option"
                                    aria-selected={selectedService === specifique}
                                    tabIndex="0"
                                    onKeyDown={(event) => handleKeyDown(event, specifique)} 
                                    className={focusedOptionIndex === (index * service.services_specifiques.length + subIndex) ? 'focused' : ''} 
                                >
                                    {formatServiceText(specifique)}
                                </li>
                            ))
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
