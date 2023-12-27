import DateInput from "./DateInput";


export default function DateRangePicker() {


    return (
        <div className="mt-3">
            <label>Date Range</label>
            <div><DateInput className="mr-2"/> to <DateInput className="ml-2"/></div>
        </div>
    )
}