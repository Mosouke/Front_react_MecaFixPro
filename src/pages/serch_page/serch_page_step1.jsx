import React, { useState, useEffect } from 'react';
import InputTypeOfServ from '../../components/input_option_for_type_of_serv/input_type_of_serv';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import SearchBar from '../../components/searchbar/serchbar';
import { Link } from 'react-router-dom';
import './serch_page_step1.scss';

export default function SerchPageStep1() {
    const [allTypesOfServ, setAllTypesOfServ] = useState([]);
    const [allCities, setAllCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(localStorage.getItem('selectedCity') || ''); 
    const [selectedService, setSelectedService] = useState(localStorage.getItem('selectedService') || '');
    const [errorMessage, setErrorMessage] = useState('');

    const fetchTypesOfServ = async () => {
        try {
            const response = await fetch('/mock/api-type_of_serv.json');
            const data = await response.json();
            setAllTypesOfServ(data.types_de_services); 
        } catch (error) {
            console.error("Erreur lors de la récupération des types de services:", error);
        }
    };

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
        fetchTypesOfServ();
        fetchCities();
    }, []);

    const handleCitySelect = (city) => {
        setSelectedCity(city);
        localStorage.setItem('selectedCity', city); 
    };

    const handleServiceSelect = (service) => {
        setSelectedService(service);
        localStorage.setItem('selectedService', service); 
    };

    const handleNextClick = (e) => {
        if (!selectedCity || !selectedService) {
            e.preventDefault();
            setErrorMessage('Veuillez sélectionner une ville et un type de service.');
            return;
        }
        setErrorMessage('');
    };

    return (
        <>
            <Header />
            <main>
                <section className='serch_page_step1'>
                    <h1>Recherche</h1>
                    <SearchBar 
                        allCities={allCities} 
                        onCitySelect={handleCitySelect} 
                        selectedCity={selectedCity} 
                    />
                    <InputTypeOfServ 
                        typesOfServices={allTypesOfServ} 
                        onServiceSelect={handleServiceSelect} 
                    />

                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    
                    <div className='btn_sub'>
                    <Link to="/recherche/step2" className="btn" onClick={handleNextClick}>Suivant</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
