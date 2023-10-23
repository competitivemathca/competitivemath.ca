import { useEffect, useState } from 'react';
import { shortMonths, shortDateFormat, dateFormat, interpretTime, interpretCountdownTime, getCurrentTimeEST } from '../public/TimeModules.jsx'

/* Countdown timer: https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks */
export default function Contest({ status, name, startTime, endTime }) {

    const countdownDate = endTime.getTime();
    const [countdown, setCountdown] = useState(countdownDate - getCurrentTimeEST());

    useEffect(() => {
        /* Update the countdown timer each second */
        const interval = setInterval(() => {
            setCountdown(countdownDate - getCurrentTimeEST())
        }, 1000);

        /* Stop the interval to prevent repeats; React will rerun useEffect() when the countdownDate changes anyway */
        return () => clearInterval(interval);
    }, [countdownDate])

    return (
        <li className="mb-6">
            {(status == "ONGOING")
                ? <>
                    <h2>
                        <span className="text-red-800">{status}</span> - {name}
                    </h2>
                    <div className="text-sm">
                        {shortDateFormat.format(startTime)} to {shortDateFormat.format(endTime)} - <nobr className="text-red-800"> Ends in {interpretCountdownTime(countdown)}</nobr>
                    </div>
                </>

                : <>
                    <h2>
                        <div className="inline-block text-blue-800">{status}</div> - {name}
                    </h2>
                    <div className="text-sm">
                        {dateFormat.format(startTime) + " UTC to "}
                        {/* {shortMonths[startTime.getMonth()] + " " + startTime.getDate() + " (" + interpretTime(startTime.getTime()) + ") "} to  */}
                        {/* {" " + shortMonths[endTime.getMonth()] + " " + endTime.getDate() + " (" + interpretTime(endTime.getTime()) + ") "} */}
                        {dateFormat.format(endTime) + " UTC"}
                    </div>
                </>
            }
        </li>
    )
}