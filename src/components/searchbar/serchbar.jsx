import React, { useState } from "react";
import '../searchbar/serchbar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ allCities, onCitySelect }) { 
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredCities, setFilteredCities] = useState([]);

   
    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        if (query.length > 0) {
            const filtered = allCities
                .filter((city) => 
                    city.city_code.toLowerCase().includes(query) || 
                    city.zip_code.toLowerCase().includes(query)
                )
                .slice(0, 5);
            setFilteredCities(filtered);
        } else {
            setFilteredCities([]);
        }
    };

    const handleSelectCity = (cityLabel) => {
        setSearchQuery(cityLabel);
        setFilteredCities([]);

    
        if (onCitySelect) {
            onCitySelect(cityLabel); 
        }
    };

    return (
        <div className="searchbar">
            <div className="inputSearch">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Rechercher une ville..."
                />
                <FontAwesomeIcon icon={faMagnifyingGlassLocation} id="iconeRecherche" />
            </div>

            {filteredCities.length > 0 && (
                <ul className="autocomplete-list">
                    {filteredCities.map((city, index) => (
                        <li 
                            key={index} 
                            onClick={() => handleSelectCity(city.city_code || city.zip_code)} 
                        >
                            {city.city_code} {city.zip_code && `(${city.zip_code})`} 
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
