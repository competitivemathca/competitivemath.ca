import PropTypes from "prop-types";

import {
    shortDateFormat,
    dateFormat,
} from "../public/TimeModules.jsx";

import Countdown from "./Countdown";

/* Countdown timer: https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks */
export default function Contest({ status, name, startTime, endTime }) {
    
    return (
        <li className="mb-6">
            {status == "ONGOING" ? (
                <>
                    <h2>
                        <span className="text-red-800">{status}</span> - {name}
                    </h2>
                    <div className="text-sm">
                        {shortDateFormat.format(startTime)} to{" "}
                        {shortDateFormat.format(endTime)} -{" "}
                        <nobr className="text-red-800">
                            {" "}
                            Ends in <Countdown endTime={endTime}/>
                        </nobr>
                    </div>
                </>
            ) : (
                <>
                    <h2>
                        <div className="inline-block text-blue-800">{status}</div> - {name}
                    </h2>
                    <div className="text-sm">
                        {dateFormat.format(startTime) + " UTC to "}
                        {dateFormat.format(endTime) + " UTC"}
                    </div>
                </>
            )}
        </li>
    );
}

Contest.propTypes = {
    status: PropTypes.string,
    name: PropTypes.string,
    startTime: PropTypes.objectOf(Date),
    endTime: PropTypes.objectOf(Date),
};
