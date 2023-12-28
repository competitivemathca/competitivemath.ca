import UserRankingElement from "../Components/UserRankingElement.jsx";
import ClubRankingElement from "../Components/ClubRankingElement.jsx";
import TablePanel from "../Components/TablePanel";
import Heading from "../Components/Heading.jsx";

// TODO: add sorting
export default function Community() {
  // A lot of the stuff is reusable
  // Since we only have tables with 5 columns
  // The separation into different headings for each table stems from the possibility of adding a panel with a different amount of columns
  const userRankingsHeading = (
    <tr>
      <th title="Ranking" className="px-3 text-left xl:w-[5%]">
        🎖️
      </th>
      <th title="Username" className="px-3 text-left xl:w-[80%]">
        Username
      </th>
      <th title="Rating" className="px-3 text-left xl:w-[5%]">
        Rating
      </th>
      <th title="Problems Solved" className="px-3 text-left xl:w-[5%]">
        Problems
      </th>
      <th title="Contests Won" className="px-3 text-left xl:w-[5%]">
        Contests
      </th>
    </tr>
  );

  const clubRankingsHeading = (
    <tr>
      <th title="Ranking" className="px-3 text-left xl:w-[5%]">
        🎖️
      </th>
      <th title="Club Name" className="px-3 text-left xl:w-[70%]">
        Club Name
      </th>
      <th title="Number of Users" className="px-3 text-left xl:w-[5%]">
        Users
      </th>
      <th title="Rating" className="px-3 text-left xl:w-[5%]">
        Rating
      </th>
      <th title="Contests Hosted" className="px-3 text-left xl:w-[10%]">
        Contests Hosted
      </th>
    </tr>
  );

  const userRankings = [
    {
      ranking: 1,
      username: "math",
      rating: 6490,
      problems: 3,
      contests: 2,
    },
    {
      ranking: 2,
      username: "matth",
      rating: 5490,
      problems: 3,
      contests: 2,
    },
    {
      ranking: 3,
      username: "IOQWUE",
      rating: 4490,
      problems: 3,
      contests: 2,
    },
    {
      ranking: 4,
      username: "ASKLDJASD",
      rating: 3390,
      problems: 3,
      contests: 2,
    },
    {
      ranking: 5,
      username: "asdkljasd",
      rating: 3000,
      problems: 1,
      contests: 2,
    },
    {
      ranking: 6,
      username: "TheGlazersTM",
      rating: 1290,
      problems: 3,
      contests: 2,
    },
  ];
  const clubRankings = [
    {
      ranking: 1,
      clubName: "BOSS_MATH",
      users: 1000,
      rating: 12390,
      contestsHosted: 3,
    },
  ];

  const userRankingContent = userRankings.map((user, index) => (
    <UserRankingElement
      key={index}
      index={index}
      ranking={user.ranking}
      username={user.username}
      rating={user.rating}
      problems={user.problems}
      contests={user.contests}
    />
  ));

  const clubRankingContent = clubRankings.map((club, index) => (
    <ClubRankingElement
      key={index}
      index={index}
      ranking={club.ranking}
      clubName={club.clubName}
      users={club.users}
      rating={club.rating}
      contestsHosted={club.contestsHosted}
    />
  ));
  return (
    <div className="p-6">
      <div>
        <Heading>Users</Heading>
        <TablePanel heading={userRankingsHeading} content={userRankingContent} />
      </div>

      <div className="mt-8">
        <Heading>Clubs</Heading>
        <TablePanel heading={clubRankingsHeading} content={clubRankingContent} />
      </div>
    </div>
  );
}
