import { useState } from "react";

export default function SearchBar({ hintText }) {
    const [query, setQuery] = useState("");

    return (
        <div>
            <input 
                type="text" 
                placeholder={hintText}
                onChange={e => setQuery(e.target.value)} 
                className="bg-blue-100 rounded-lg p-2 border-2 border-gray-300"
            />
        </div>
    )
}