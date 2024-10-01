import React, { useEffect, useState } from 'react';
import './input_date_heur.scss';

export default function DateHeur() {
    const [dateTime, setDateTime] = useState(() => {
        return localStorage.getItem('meeting-time') || '';
    })

    useEffect(() => {
        if (dateTime) {
        localStorage.setItem('meeting-time', dateTime);
        }
    }, [dateTime]);

    const handleChangeTimeChange = (e) => {
        setDateTime(e.target.value);
    }

    return (
        <div className="custom-calendar-input">
            <input
                id="party"
                type="datetime-local"
                name="partydate"
                value={dateTime}
                onChange={handleChangeTimeChange}
            />    
        </div>
    );
}
