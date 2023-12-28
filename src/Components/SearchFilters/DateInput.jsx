import { useEffect, useState, useRef } from "react";
import { Calendar } from "react-date-range";
import format from "date-fns/format";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function DateInput( {...props} ) {

    const [date, setDate] = useState("Any");
    const [show, setShow] = useState(false);

    //Reference to the element being clicked
    const clickRef = useRef(null);

    useEffect(() => {
        //Make sure the picked date saves on refresh/load
        setDate(format(new Date(), "MM/dd/yyyy"));

        //Hide the calendar if esc is pressed, or clicked outside
        document.addEventListener("keydown", hideOnEscape, true);
        document.addEventListener("click", hideOnClickOutside, true);
    }, [])

    //Hide calendar if esc is pressed
    const hideOnEscape = (e) => {
        if (e.key === "Escape")
            setShow(false);
    }

    //Hide calendar if clicked outside
    const hideOnClickOutside = (e) => {
        //If the click ref exists AND the click was outside of the calendar...
        if (clickRef.current && !clickRef.current.contains(e.target)) {
            setShow(false);
        }
    }

    const handleSelect = (date) => {
        setDate(format(date, "MM/dd/yyyy"));
    }

    return (
        <span {...props}>
            <input
                className="p-2 bg-white border-2 border-gray-300 rounded-lg cursor-pointer
                justify-between w-5/12"
                value={date}
                readOnly
                onClick={() => setShow(show => !show)}  //Toggle the calendar
            />

            <span ref={clickRef}>
                {show &&
                    <Calendar
                        date={new Date()}
                        className="absolute translate-y-12 -translate-x-64
                                   border-2 border-gray-300 rounded-lg z-50"
                        onChange={handleSelect}
                    />
                }
            </span>
        </span>
    )
}