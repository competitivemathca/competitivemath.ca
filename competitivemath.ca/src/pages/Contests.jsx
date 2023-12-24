import PastContestElement from "../Components/PastContestElement";
import TablePanel from "../Components/TablePanel";

export default function Contests() {
  const heading = (
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
        👥
      </th>
    </tr>
  );

  // TODO: represent contest dates with a start and an end time 
  const contests = [
    {
      date: new Date(2023, 11, 22, 17, 55, 0),
      name: "Weekend Challenge 3-Hour Contest",
      authors: ["AP MATH", "Andrew Deng"],
      competitiveRating: 3,
      participants: 2,
    },
  ];

  const content = contests.map((contest, index) => (
    <PastContestElement
      key={index}
      index={index}
      date={contest.date}
      name={contest.name}
      authors={contest.authors}
      competitiveRating={contest.competitiveRating}
      participants={contest.participants}
    />
  ));

  return <TablePanel heading={heading} content={content} />;
}
