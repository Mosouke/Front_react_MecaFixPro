import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.scss' 

export default function CustomCalendar() { 
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
      setDate(newDate);
    };

    return (
        <div>
            <Calendar onChange={onChange} value={date} />
            <p className='date'>Date sélectionnée : {date.toDateString()}</p>
        </div>
    );
};
