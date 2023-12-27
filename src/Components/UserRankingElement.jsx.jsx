export default function UserRankingElement({
  index,
  ranking,
  username,
  points,
  problems,
  contests,
}) {
  return (
    <tr className={index % 2 == 1 ? "bg-blue-100" : "bg-white"}>
      <td className="text-left px-3 py-3">{ranking}</td>
      <td className="text-left px-3">{username}</td>
      <td className="text-left px-3">{points}</td>
      <td className="text-left px-3">{problems}</td>
      <td className="text-left px-3">{contests}</td>
    </tr>
  );
}
