import { useState } from "react";

export default function Dropdown({ label, options }) {

    const [chosen, setChosen] = useState("Any")
    const [show, setShow] = useState(false);

    return (
        <div className="mt-3">
            <label>{label}</label>
            
            <div>
                <select
                    className="w-full p-2 bg-white border-2 border-gray-300 rounded-lg cursor-pointer"
                    value={chosen}
                    readOnly
                    onClick={() => setShow(show => !show)}  //Toggle the calendar
                />
            </div>
        </div>
    )
}