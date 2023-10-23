export const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const shortDateFormat = new Intl.DateTimeFormat("en-us", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
});

export const dateFormat = new Intl.DateTimeFormat("en-us", {
    month: "short",
    year: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "UTC",
});

export const interpretTime = (time) => {
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

    if (hours > 12)
        return zeroify(hours - 12) + ":" + zeroify(mins) + " PM";
    else if (hours == 0)
        return "12:" + zeroify(mins) + " AM"
    else
        return zeroify(hours) + ":" + zeroify(mins) + " AM";
}

export const interpretCountdownTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = days * 24 + Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return zeroify(hours) + ":" + zeroify(mins) + ":" + zeroify(secs);
}

export const getCurrentTimeEST = () => {
    return new Date().getTime() - (new Date().getTimezoneOffset() * 60 * 1000); /* Temporary fix */
}

/*Adds a leading zero if the number has one digit*/
const zeroify = (num) => {
    return num < 10 ? "0" + num : num;
}