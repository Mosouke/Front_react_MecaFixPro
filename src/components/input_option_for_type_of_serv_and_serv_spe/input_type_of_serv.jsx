import '../input_option_for_type_of_serv_and_serv_spe/input_option_for_type_of_serv.scss';

export default function InputTypeOfServ({ typesOfServices, onServiceSelect }) {  

    const handleTypeChange = (event) => {
        const selectedService = event.target.value;
        console.log("Type de service sélectionné:", selectedService);

        
        if (onServiceSelect) {
            onServiceSelect(selectedService); 
        }
    };

    return (
        <div className="input_type_of_serv">
            <h2>Type de service</h2>
            
            <select name="type_of_serv" id="type_of_serv" onChange={handleTypeChange}>
                <option value="">Sélectionnez un type de service</option>
                {typesOfServices.map((service, index) => (
                    <option key={index} value={service.type}>
                        {service.type}
                    </option>
                ))}
            </select>
        </div>
    );
}
