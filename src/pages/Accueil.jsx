import React from 'react';
import '../pages/accueil.scss';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import SearchBar from '../components/searchbar/serchbar';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>  
           <Header />
           <main>
            <section className="reserch">
                    <h1>Trouvez le garage parfait prés de chez vous</h1>
                <div className='bgImage'>
                    <SearchBar />
                </div>    
            </section>
            <section className='how-it-works'>
                <div className='how-it-works-content'>
                    <h2>Comment ça marche ?</h2>
                    <article>
                        <h3>1. Recherchez un garage prés de chez vous</h3>
                        <p>Utilisez notre barre de recherche intuitive pour trouver rapidement des garages à proximité. Entrez votre localisation et explorez une liste de garages disponibles dans votre région.</p>
                    </article>
                    <article>
                        <h3>2. Prenez rendez-vous en ligne facilement</h3>
                        <p>Choisissez le service dont vous avez besoin (réparation, entretien, diagnostic) et sélectionnez un créneau horaire qui vous convient. Réservez en quelques clics, sans avoir à appeler ou à vous déplacer.</p>
                    </article>
                    <article>
                        <h3>3. Laissez un avis et notez votre expérience</h3>
                        <p>Après votre visite, partagez votre expérience en laissant un avis et une note sur le garage que vous recevrez par mail. Aidez les autres utilisateurs à choisir le meilleur service tout en contribuant à améliorer les services offerts par les garages.</p>
                    </article>
                    <Link to="#" className='btn'>Recherche</Link>
                </div>
            </section>
           </main>
           <Footer/>
        </>
    )
}