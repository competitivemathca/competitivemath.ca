import Heading from "../Components/Heading";
import OngoingContest from "../Components/OngoingContest";

const testOngoingContest1 = {
    name: "Weekend Challenge 3-Hour Contest",
    author: "Bur Oak Secondary School",
    startTime: new Date(Date.UTC(2024, 0, 1, 0, 0, 0)),
    endTime: new Date(Date.UTC(2024, 0, 1, 0, 0, 0)),
    window: "01:00",
    participants: 26
}

const ongoingContests = [testOngoingContest1];

export default function Contests() {
    return (
        <div className="p-6">
            <Heading>Ongoing Contests</Heading>

            { ongoingContests.map((contest, index) => (
                <OngoingContest
                    key={index}
                    name={contest.name}
                    author={contest.author}
                    startTime={contest.startTime}
                    endTime={contest.endTime}
                    window={contest.window}
                    participants={contest.participants}
                />    
            )) }

            <Heading>Past Contests</Heading>
        </div>
    );
}
