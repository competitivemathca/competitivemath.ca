import { useEffect, useState } from "react";

import {
    interpretCountdownTime,
    getCurrentTimeEST,
} from "../public/TimeModules.jsx";

/* Countdown timer: https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks */
export default function Countdown({endTime}) {
    const countdownDate = endTime.getTime();
    const [countdown, setCountdown] = useState(
        countdownDate - getCurrentTimeEST(),
    );

    useEffect(() => {
        /* Update the countdown timer each second */
        const interval = setInterval(() => {
            setCountdown(countdownDate - getCurrentTimeEST());
        }, 1000);

        /* Stop the interval to prevent repeats; React will rerun useEffect() when the countdownDate changes anyway */
        return () => clearInterval(interval);
    }, [countdownDate]);

    return (
        <span>{interpretCountdownTime(countdown)}</span>
    )
}