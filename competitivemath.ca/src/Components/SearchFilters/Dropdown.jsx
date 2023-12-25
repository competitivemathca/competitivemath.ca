

export default function Dropdown({ label, options }) {


    return (
        <div className="mt-3">
            <label>{label}</label>
            <div className="p-2 bg-white border-2 border-gray-300 rounded-lg cursor-pointer
                            flex flex-row justify-between">
                <span>Any</span>
                <img src="../../../images/Dropdown Arrow.png" className="w-3 h-3 mt-1.5"/>
            </div>
        </div>
    )
}