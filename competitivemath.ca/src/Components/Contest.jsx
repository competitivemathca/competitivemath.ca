import { useEffect, useState } from 'react';

const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/* Countdown timer: https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks */
export default function Contest({ status, name, startTime, endTime }) {

    const countdownDate = new Date(endTime).getTime();
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
                    <div className="text-lg leading-tight">
                        <b>
                            <div className="inline-block text-red-800">{status}</div> - {name}
                        </b>
                    </div>
                    <div className="mt-1">
                        {shortMonths[startTime.getMonth()] + " " + startTime.getDate()} to {shortMonths[endTime.getMonth()] + " " + endTime.getDate() + " "}
                        - Ends in {interpretCountdownTime(countdown)}
                    </div>
                </>

                : <>
                    <div className="text-lg leading-snug">
                        <b>
                            <div className="inline-block text-blue-800">{status}</div> - {name}
                        </b>
                    </div>
                    <div className="mt-1">
                        {shortMonths[startTime.getMonth()] + " " + startTime.getDate() + " (" + interpretTime(startTime.getTime()) + ") "} to 
                        {" " + shortMonths[endTime.getMonth()] + " " + endTime.getDate() + " (" + interpretTime(endTime.getTime()) + ") "}
                    </div>
                </>
            }
        </li>
    )
}

function interpretCountdownTime(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = days * 24 + Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return zeroify(hours) + ":" + zeroify(mins) + ":" + zeroify(secs);
}

function interpretTime(time) {
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

    if (hours > 12)
        return zeroify(hours - 12) + ":" + zeroify(mins) + " PM";
    else if (hours == 0)
        return "12:" + zeroify(mins) + " AM"
    else
        return zeroify(hours) + ":" + zeroify(mins) + " AM";
}

/*Adds a leading zero if the number has one digit*/
function zeroify(num) {
    return num < 10 ? "0" + num : num;
}

function getCurrentTimeEST() {
    return new Date().getTime() - (new Date().getTimezoneOffset() * 60 * 1000); /* Temporary fix */
}