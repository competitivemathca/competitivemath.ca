import PropTypes from "prop-types";

import {
    shortDateFormat,
    dateFormat,
} from "../public/TimeModules.jsx";

import { getCurrentTimeEST } from "../public/TimeModules.jsx";

import Countdown from "./Countdown.jsx";
import { Link } from "react-router-dom";

export default function SideContestElement({ id, name, startTime, endTime, author}) {

    //Check if the contest is ongoing
    var ongoing = false;
    if (getCurrentTimeEST() > startTime)
        ongoing = true;
    
    return (
        <li className="mb-6">
            {/*Heading*/}
            {ongoing ? (
                <>
                    <Link to={`/contest/${id}`}>
                        <h2>
                            <span className="text-red-800">ONGOING</span> - {name}
                        </h2>
                    </Link>
                    <div className="text-red-800 font-bold text-base my-2">
                            Ends in <Countdown endTime={endTime}/>
                    </div>
                </>
            ) : (
                <>
                    <h2 className="mb-2">
                        <span className="text-blue-800 ">UPCOMING</span> - {name}
                    </h2>
                </>
            )}

            {/*General contest info*/}
            <div className="text-sm">
                <div>
                    <b>Start:</b> {dateFormat.format(startTime) + " UTC"}
                </div>
                <div>
                    <b>End:</b> {dateFormat.format(endTime) + " UTC"}
                </div>
                <div className="mb-2">
                    <b>Author:</b> {author}
                </div>
            </div>
        </li>
    );
}

SideContestElement.propTypes = {
    status: PropTypes.string,
    name: PropTypes.string,
    startTime: PropTypes.objectOf(Date),
    endTime: PropTypes.objectOf(Date),
};
