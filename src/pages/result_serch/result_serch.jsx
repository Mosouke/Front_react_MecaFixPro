import Tag from "../../components/tag/tag";
import Header from "../../components/header/header";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
import Card from "../../components/card_garage/card_garage";
import "./result_serch.scss";

export default function ResultSerch() {
    const [selectedCity, setSelectedCity] = useState(localStorage.getItem('selectedCity'));
    const [garages, setGarages] = useState([]);
    const [filteredGarages, setFilteredGarages] = useState([]);
    const [tags, setTags] = useState({
        proximity: false,
        availability: false,
        rating: false,
    });

    const fetchGarages = async () => {
        try {
            const response = await fetch('/mock/api_garage.json'); 
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            const cityGarages = data.garages.find(city => city.city.toLowerCase() === selectedCity.toLowerCase());
            if (cityGarages) {
                setGarages(cityGarages.locations); 
                setFilteredGarages(cityGarages.locations); 
            } else {
                setGarages([]);
                setFilteredGarages([]);
            }
        } catch (error) {
            console.error("Erreur lors de la récupération des garages:", error);
        }
    };

    useEffect(() => {
        fetchGarages();
    }, [selectedCity]);

    const toggleTag = (tag) => {
        setTags(prevTags => {
            const newTags = { ...prevTags, [tag]: !prevTags[tag] }; 
            applyFilters(newTags); 
            return newTags;
        });
    };

    const applyFilters = (tags) => {
        let filtered = [...garages]; 

        if (tags.availability) {
            filtered = filtered.filter(garage => garage.availability);
        }

        if (tags.proximity) {
            filtered.sort((a, b) => a.distance - b.distance);
        }

        if (tags.rating) {
            filtered.sort((a, b) => b.rating - a.rating);
        }

        setFilteredGarages(filtered); 
    };

    return (
        <>
            <Header />
            <div className="result_serch">
                <h1>Résultats de votre recherche pour les Garages sur {selectedCity}</h1>
                <p className="p-filter">Filtrer par :</p>
                <div className="result_serch-content">
                    <Tag 
                        text="Proximité" 
                        isActive={tags.proximity} 
                        onClick={() => toggleTag('proximity')} 
                    />
                    <Tag 
                        text="Disponibilité" 
                        isActive={tags.availability} 
                        onClick={() => toggleTag('availability')} 
                    />
                    <Tag 
                        text="Notes" 
                        isActive={tags.rating} 
                        onClick={() => toggleTag('rating')} 
                    />
                </div>

                <div className="garage-list">
                    {filteredGarages.length > 0 ? (
                        filteredGarages.map((garage, index) => (
                            <Card 
                                key={index}
                                name={garage.name} 
                                address={garage.address} 
                                rating={garage.rating}
                            />
                        ))
                    ) : (
                        <p>Aucun garage trouvé pour {selectedCity}.</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}
