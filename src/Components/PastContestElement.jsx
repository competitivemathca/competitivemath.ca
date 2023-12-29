// The element suffix means that this component is meant to be a table element (table row)

import { Link } from "react-router-dom";

export default function PastContestElement({
  id,
  date,
  name,
  authors,
  competitiveRating,
  participants,
}) {
  const dateString = date.toLocaleDateString("en-Us");

  const authorsString =
    authors.slice(0, -1).join(", ") +
    (authors.length > 1 ? ", " : "") +
    authors.slice(-1);

  return (
    <tr className="even:bg-blue-100 odd:bg-white">
      <td className="text-left px-3 py-3">{dateString}</td>
      <Link to={`/contest/${id}`}>
        <td className="text-left px-3 py-3">{name}</td>
      </Link>
      <td className="text-left px-3">{authorsString}</td>
      <td className="text-left px-3">{competitiveRating}</td>
      <td className="text-left px-3">{participants}</td>
    </tr>
  );
}
