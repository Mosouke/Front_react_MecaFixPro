import React from 'react';
import '../pages/accueil.scss';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import SearchBar from '../components/searchbar/serchbar';

export default function Home() {
    return (
        <>  
           <Header />
           <main>
            <section className="reserch">
                <h1>Trouvez le garage parfait prés de chez vous</h1>
                <SearchBar />    
            </section>
           </main>
           <Footer/>
        </>
    )
}