import React from 'react';


export default function InputTypeOfServSpe({
     typesOfServices, selectedService, onServiceSelect }) {
        console.log("Services spécifiques disponibles :", typesOfServices);
    const handleTypespeChange = (event) => {
        const selectedService = event.target.value;
        console.log("Type de service spé sélectionné:", selectedService);

        if (onServiceSelect) {
            onServiceSelect(selectedService); 
        }
    };

    return (
        <div className="input_type_of_serv_spe">
            <h2>Type de service spécifique</h2>
            <select 
                name="type_of_serv_spe" 
                id="type_of_serv_spe"
                value={selectedService}  
                onChange={handleTypespeChange}
            >
                <option value="">Sélectionnez un type de service spécifique</option>
                {typesOfServices.map((service, index) => 
                    service.services_specifiques.map((specifique, subIndex) => (
                        <option key={`${index}-${subIndex}`} value={specifique}>
                            {specifique}
                        </option>
                    ))
                )}
            </select>   
        </div>
    );
}
