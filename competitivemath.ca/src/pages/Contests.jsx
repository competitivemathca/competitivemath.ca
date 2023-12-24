import Heading from "../Components/Heading";
import OngoingContest from "../Components/OngoingContest";
import ContentPanel from "../Components/ContentPanel";

const testOngoingContest1 = {
    name: "Weekend Challenge 3-Hour Contest",
    author: "Bur Oak Secondary School",
    startTime: new Date(Date.UTC(2024, 0, 1, 0, 0, 0)),
    endTime: new Date(Date.UTC(2024, 0, 2, 23, 59, 0)),
    window: "01:00",
    participants: 26
}

const ongoingContests = [testOngoingContest1];

export default function Contests() {
    return (
        <div className="p-6">
            <Heading>Ongoing Contests</Heading>
            
            <div className="xl:flex justify-between gap-8">
                {/*Side content*/}
                <div className="space-y-8 order-1">
                    <ContentPanel title="Scheduled Contests">
                        Hi
                    </ContentPanel>
                </div>

                {/*Main content*/}
                <div className="xl:w-8/12">
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
