import React, { useState, useEffect } from "react";
import '../searchbar/serchbar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredCities, setFilteredCities] = useState([]);
    const [allCities, setAllCities] = useState([]);

    const fetchCities = async () => {
        try {
            const response = await fetch("https://www.data.gouv.fr/fr/datasets/r/9ce8b306-316d-4fb5-b00c-821a97e2881f");
            const data = await response.json();
            setAllCities(data.cities);
        } catch (error) {
            console.error("Erreur lors de la récupération des villes:", error);
        }
    };

    useEffect(() => {
        fetchCities();
    }, []);

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        if (query.length > 0) {
            const filtered = allCities
                .filter((city) => city.label.toLowerCase().includes(query))
                .slice(0, 5);
            setFilteredCities(filtered);
        } else {
            setFilteredCities([]);
        }
    };

    const handleSelectCity = (cityLabel) => {
        setSearchQuery(cityLabel);
        setFilteredCities([]); 
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
                        <li key={index} onClick={() => handleSelectCity(city.label)}>
                            {city.label}
                        </li>
                    ))}
                </ul>
            )}

            <div className="btn_sub">
                <button className="btn" type="submit">Rechercher</button>
            </div>
        </div>
    );
}
