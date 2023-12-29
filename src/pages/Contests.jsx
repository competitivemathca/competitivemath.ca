import Heading from "../Components/Heading";
import OngoingContest from "../Components/OngoingContest";
import ContentPanel from "../Components/ContentPanel";
import SideContestElement from "../Components/SideContestElement";
import PastContestElement from "../Components/PastContestElement";
import TablePanel from "../Components/TablePanel";
import SearchBar from "../Components/SearchFilters/SearchBar";
import Dropdown from "../Components/SearchFilters/Dropdown";
import RangeSlider from "../Components/SearchFilters/RangeSlider";
import DateRangePicker from "../Components/SearchFilters/DateRangePicker";

const testOngoingContest1 = {
  id: 2,
  name: "Weekend Challenge 3-Hour Contest",
  author: "Bur Oak Secondary School",
  startTime: new Date(Date.UTC(2024, 0, 1, 0, 0, 0)),
  endTime: new Date(Date.UTC(2024, 0, 2, 23, 59, 0)),
  window: "01:00",
  participants: 26,
};

const testUpcomingContest1 = {
  id: 3,
  name: "Mock CSMC 2-Hour 9-Question Contest",
  author: "Bur Oak Secondary School",
  startTime: new Date(Date.UTC(2024, 0, 1, 0, 0, 0)),
  endTime: new Date(Date.UTC(2024, 0, 2, 23, 59, 59)),
  window: "02:00",
  participants: 26,
};

const ongoingContests = [testOngoingContest1];
const upcomingContests = [testUpcomingContest1];

/* === This is for the tables ===*/
const tableHeading = (
  <tr>
    <th title="Date" className="px-3 text-left xl:w-[15%]">
      📅
    </th>
    <th title="Contest Name" className="px-3 text-left xl:w-[50%]">
      Contest Name
    </th>
    <th title="Authors" className="px-3 text-left xl:w-[25%]">
      Author(s)
    </th>
    <th title="Competitive Rating" className="px-3 text-left xl:w-[5%]">
      CR
    </th>
    <th title="Contest Participants" className="px-3 text-left xl:w-[5%]">
      <img src="../../images/People Icon White.png" className="w-5 h-5"/>
    </th>
  </tr>
);

export const examplePastContests = [
  {
    id: 1,
    date: new Date(2023, 11, 22, 17, 55, 0),
    name: "Weekend Challenge 3-Hour Contest",
    authors: ["AP MATH", "Andrew Deng"],
    competitiveRating: 3,
    participants: 2,
  },
];

const content = examplePastContests.map((contest, index) => (
  <PastContestElement
    id={contest.id}
    key={index}
    index={index}
    date={contest.date}
    name={contest.name}
    authors={contest.authors}
    competitiveRating={contest.competitiveRating}
    participants={contest.participants}
  />
));

const contestNames = examplePastContests.map(contest => contest.name);

export default function Contests() {

  return (
    <div className="p-6">
      <div className="xl:flex justify-between gap-20">

        {/*Main content*/}
        <div className="mt-8 xl:mt-0 xl:w-9/12">
          <Heading>Ongoing Contests</Heading>

          {ongoingContests.length > 0 ? (
            ongoingContests.map((contest, index) => (
              <OngoingContest
                id={contest.id}
                key={index}
                name={contest.name}
                author={contest.author}
                startTime={contest.startTime}
                endTime={contest.endTime}
                window={contest.window}
                participants={contest.participants}
              />
            ))
          ) : (
            <p className="mb-5">There are no ongoing contests right now.</p>
          )}
        </div>
        
        {/*Side content*/}
        <div className="space-y-8 order-1 mt-6 w-3/12">
          <ContentPanel title="Scheduled Contests">
            <ul>
              {upcomingContests.map((contest, index) => (
                <SideContestElement
                  id={contest.id}
                  key={index}
                  name={contest.name}
                  startTime={contest.startTime}
                  endTime={contest.endTime}
                  author={contest.author}
                />
              ))}
            </ul>
          </ContentPanel>
        </div>
      </div>
      

      <div className="xl:flex justify-between gap-20">
        
        {/*Main Content*/}
        <div className="mt-8 xl:mt-0 xl:w-9/12">
          <Heading>Past Contests</Heading>
          <TablePanel heading={tableHeading} content={content} />
        </div>

        {/*Side content*/}
        <div className="space-y-8 order-1 mt-6 w-3/12">
          <ContentPanel title="Search Filters">
            <SearchBar hintText="Enter contest name..."/>
            <Dropdown
              label="Author (Club/User)"
              options={contestNames}
            />
            <DateRangePicker/>
            <RangeSlider
              label="Rating Range"
              min={1}
              max={5}
            />
          </ContentPanel>
        </div>
      </div>
    </div>
  );
}
