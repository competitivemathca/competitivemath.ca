export default function ClubRankingElement({
  index,
  ranking,
  clubName,
  users,
  rating,
  contestsHosted,
}) {
  return (
    <tr className={index % 2 == 1 ? "bg-blue-100" : "bg-white"}>
      <td className="text-left px-3 py-3">{ranking}</td>
      <td className="text-left px-3">{clubName}</td>
      <td className="text-left px-3">{users}</td>
      <td className="text-left px-3">{rating}</td>
      <td className="text-left px-3">{contestsHosted}</td>
    </tr>
  );
}
