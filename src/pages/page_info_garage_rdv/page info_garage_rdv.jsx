import DateHeur from "../../components/chant_input_date_heur/input_date_heur";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import ProfilGarage from "../../components/profil_garage/profil_garage";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './page info_garage.scss'

const fetchGarage = async (garageId) => {
    try {
        const response = await fetch('/mock/api_garage.json'); 
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        for (const city of data.garages) {
            const garage = city.locations.find(location => location.garage_Id === garageId);
            if (garage) {
                return garage; 
            }
        }
        
        return null; 
    } catch (error) {
        console.error("Erreur lors de la récupération des garages:", error);
    }
};

export default function PageInfoGarageRdv() {
    const { garageId } = useParams(); 
    const [garage, setGarage] = useState(null); 

    useEffect(() => {
        const getGarage = async () => {
            const fetchedGarage = await fetchGarage(parseInt(garageId));
            console.log(`Garage récupéré:`, fetchedGarage);  
            setGarage(fetchedGarage);
        };
    
        getGarage();
    }, [garageId]);

    return (
        <>
            <Header />
            <main>
                <section>
                    {garage ? <ProfilGarage garage={garage} /> : <p>Chargement...</p>}
                </section>
                <section className="input_date_heur">
                    <h2>Choisir une date et une heure pour votre rendez-vous</h2>
                    <DateHeur />
                    <div className="btn_sub">
                        <Link className="btn" to="#">Valider le rendez-vous</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
