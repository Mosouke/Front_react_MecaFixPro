import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import InputTypeOfServ from '../../components/input_option_for_type_of_serv/input_type_of_serv';
import InputTypeOfServSpe from '../../components/input_option_for_type_serv_spe/input_type_of_serv_spe';
import "./serch_page_step2.scss";

export default function SerchPageStep2() {
    const [allTypesOfServ, setAllTypesOfServ] = useState([]);
    const [selectedService, setSelectedService] = useState(localStorage.getItem('selectedService') || '');
    const [allTypesOfServSpe, setAllTypesOfServSpe] = useState([]);
    const [selectedServiceSpe, setSelectedServiceSpe] = useState(localStorage.getItem('selectedServiceSpe') || '');

    const fetchTypesOfServ = async () => {
        try {
            const response = await fetch('/mock/api-type_of_serv.json');  
            const data = await response.json();
            setAllTypesOfServ(data.types_de_services); 
        } catch (error) {
            console.error("Erreur lors de la récupération des types de services:", error);
        }
    };

    const fetchTypesOfServSpe = async () => {
        try {
            const response = await fetch('/mock/api-type_of_serv.json');  
            const data = await response.json();
            setAllTypesOfServSpe(data.types_de_services);  
        } catch (error) {
            console.error("Erreur lors de la récupération des types de services spécialisés:", error);
        }
    };

    useEffect(() => {
        fetchTypesOfServ();
        fetchTypesOfServSpe();
    }, []);

    const handleServiceChange = (service) => {
        console.log("Service sélectionné:", service);
        setSelectedService(service);
        localStorage.setItem('selectedService', service); 
    };

    const handleServiceSpeChange = (serviceSpe) => {
        setSelectedServiceSpe(serviceSpe);
        localStorage.setItem('selectedServiceSpe', serviceSpe); 
    };

    return (
        <>
            <Header />
            <main>
                <section className='serch_page_step2'>
                    <h1>Recherche</h1>
                    <div>
                        <InputTypeOfServ 
                            typesOfServices={allTypesOfServ} 
                            selectedService={selectedService} 
                            onServiceSelect={handleServiceChange}
                        />
                    </div>
                    <div>
                        <InputTypeOfServSpe 
                            typesOfServices={allTypesOfServSpe.filter(service => service.type === selectedService)} 
                            selectedService={selectedServiceSpe} 
                            onServiceSelect={handleServiceSpeChange}
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
