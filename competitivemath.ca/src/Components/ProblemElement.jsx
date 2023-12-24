import PropTypes from "prop-types";

// The element suffix means that this component is meant to be a table element (table row)
export default function ProblemElement({
  index,
  problemID,
  problemName,
  tags,
  competitiveRating,
  completedSubmissions,
}) {
  return (
    <tr className={index % 2 == 1 ? "bg-blue-100" : "bg-white"}>
      <td className="text-left px-3 py-3">{problemID}</td>
      <td className="text-left px-3">{problemName}</td>
      <td>
        <ul className="flex flex-row content-start gap-3 px-3">{tags}</ul>
      </td>
      <td className="text-left px-3">{competitiveRating}</td>
      <td className="text-left px-3">{completedSubmissions}</td>
    </tr>
  );
}

ProblemElement.propTypes = {
  problemID: PropTypes.string,
  problemName: PropTypes.string,
  tags: PropTypes.array,
  competitiveRating: PropTypes.number,
  completedSubmissions: PropTypes.number,
};
