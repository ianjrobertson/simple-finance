import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Schedule() {
    const [value, setValue] = useState(new Date());

    return (
        <div>
            <Calendar
                onChange={setValue}
                value={value}
            />
            <p>Selected Date: {value.toDateString()}</p>
        </div>
    )
}