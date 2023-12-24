import Heading from "../Components/Heading";
import OngoingContest from "../Components/OngoingContest";
import ContentPanel from "../Components/ContentPanel";
import Contest from "../Components/Contest";

const testOngoingContest1 = {
    name: "Weekend Challenge 3-Hour Contest",
    author: "Bur Oak Secondary School",
    startTime: new Date(Date.UTC(2024, 0, 1, 0, 0, 0)),
    endTime: new Date(Date.UTC(2024, 0, 2, 23, 59, 0)),
    window: "01:00",
    participants: 26
}

const testUpcomingContest1 = {
    name: "Mock CSMC 2-Hour 9-Question Contest",
    author: "Bur Oak Secondary School",
    startTime: new Date(Date.UTC(2024, 0, 1, 0, 0, 0)),
    endTime: new Date(Date.UTC(2024, 0, 2, 23, 59, 59)),
    window: "02:00",
    participants: 26
}

const ongoingContests = [testOngoingContest1];
const upcomingContests = [testUpcomingContest1, testUpcomingContest1];

export default function Contests() {
    return (
        <div className="p-6">
            <Heading>Ongoing Contests</Heading>
            
            <div className="xl:flex justify-between gap-20">
                {/*Side content*/}
                <div className="space-y-8 order-1">
                    <ContentPanel title="Scheduled Contests">
                        <ul>
                            { upcomingContests.map((contest, index) => (
                                <Contest
                                    key={index}
                                    name={contest.name}
                                    startTime={contest.startTime}
                                    endTime={contest.endTime}
                                    author={contest.author}
                                />
                            )) }
                        </ul>
                    </ContentPanel>
                </div>

                {/*Main content*/}
                <div className="mt-8 xl:mt-0 xl:w-10/12">
                    { ongoingContests.length > 0
                    ? ongoingContests.map((contest, index) => (
                        <OngoingContest
                            key={index}
                            name={contest.name}
                            author={contest.author}
                            startTime={contest.startTime}
                            endTime={contest.endTime}
                            window={contest.window}
                            participants={contest.participants}
                        />    
                    ))
                    : <p className="mb-5">There are no ongoing contests right now.</p> }
                </div>
            </div>

            <Heading>Past Contests</Heading>
        </div>
    );
}
