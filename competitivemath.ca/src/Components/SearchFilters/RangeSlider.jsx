import Slider from "react-slider";
import { useState } from "react";

export default function RangeSlider({ label, min, max }) {
    const [values, setValues] = useState([min, max]);

    return (
        <div className="mt-3">
            <label>{label}</label>
            <Slider 
                className="mt-3 w-full h-4 border-2 border-gray-300 rounded-md"
                thumbClassName="h-5 w-5 cursor-pointer bg-blue-800 rounded-full -top-1"
                onChange={setValues}
                value={values} 
                min={min} 
                max={max}
            />
        </div>
    )
}