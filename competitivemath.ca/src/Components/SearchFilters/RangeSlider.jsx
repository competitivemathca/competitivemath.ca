import Slider from "react-slider";
import { useState } from "react";

export default function RangeSlider({ label, min, max }) {
    const [values, setValues] = useState([min, max]);

    return (
        <div className="mt-3 mb-8">
            <label>{label}</label>
            <Slider 
                className="mt-3 w-full h-4 border-2 border-gray-300 rounded-md"
                thumbActiveClassName="outline-none transition ease-in-out hover:scale-110"
                thumbClassName="h-5 w-5 cursor-pointer -top-1 bg-blue-800 rounded-full"
                trackClassName="slider-track"   /*Can only use vanilla CSS for the track*/
                renderThumb={ (props, state) => (
                    <div className="flex flex-col">
                        {/*Blue thumb*/}
                        <div {...props}></div>

                        {/*Value indicator*/}
                        <div 
                            {...props}
                            className="bg-white border-2 border-gray-300 rounded-lg h-6 w-5 
                                         outline-none cursor-pointer top-6 text-center"
                        >
                            {state.valueNow} 
                        </div>
                    </div>
                )}
                onChange={setValues}
                value={values} 
                min={min} 
                max={max}
            />
        </div>
    )
}