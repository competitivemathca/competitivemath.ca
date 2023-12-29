import Countdown from "./Countdown";

import {
    shortDateFormat,
    dateFormat,
} from "../public/TimeModules.jsx";
import { Link } from "react-router-dom";

export default function OngoingContest({id, name, author, startTime, endTime, window, participants}) {
    return (
        <div className="w-full bg-blue-200 border-[2px] border-solid border-gray-400 
                        p-7 rounded-2xl overflow-hidden shadow-xl mb-7
                        flex flex-row justify-between">
            {/*Left side*/}
            <div>
                <div>
                    <Link to={`/contest/${id}`}>
                        <h1 className="text-xl text-blue-900 mb-3">
                            {name} - <Countdown endTime={endTime}/> left
                        </h1>
                    </Link>
                </div>

                <div> <b>Start:</b> {dateFormat.format(startTime)} </div>
                <div> <b>End:</b> {dateFormat.format(endTime)}</div>

                <div className="text-gray-500 mt-3 flex flex-row gap-2">
                    <img src="../../images/Clock Icon.png" className="w-5 h-5"/>
                    <span> {window} window </span>
                </div>
            </div>

            {/*Right side*/}
            <div className="flex flex-col justify-between items-end">
                <div className="flex flex-row gap-2 text-blue-900">
                    <img src="../../images/People Icon Blue.png" className="w-6 h-6"/>
                    x{participants}
                </div>

                <div className="flex flex-row gap-2 text-gray-500">
                    <img src="../../images/Organization Icon.png" className="w-6 h-6"/>
                    {author}
                </div>
            </div>
        </div>
    )
}