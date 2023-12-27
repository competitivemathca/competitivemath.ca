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
                >
                    { options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}