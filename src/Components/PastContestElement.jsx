// The element suffix means that this component is meant to be a table element (table row)

export default function PastContestElement({
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
      <td className="text-left px-3">{name}</td>
      <td className="text-left px-3">{authorsString}</td>
      <td className="text-left px-3">{competitiveRating}</td>
      <td className="text-left px-3">{participants}</td>
    </tr>
  );
}
