import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import InputTypeOfServ from '../../components/input_option_for_type_of_serv_and_serv_spe/input_type_of_serv';

export default function SerchPageStep2() {
    return (
        <>
            <Header />
            <main>
                <section className='serch_page_step2'>
                    <h1>Recherche</h1>
                    <div>
                        <h2>Type de service sélectionné : </h2>
                        <InputTypeOfServ />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}