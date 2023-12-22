import PropTypes from "prop-types";

export default function ProblemComponent({
  index,
  problemID,
  problemName,
  tags,
  competitiveRating,
  completedSubmissions,
}) {
  return (
    <tr className={index % 2 == 1 ? "bg-blue-100" : "bg-white"}>
      <td className="pl-3 text-left py-3">{problemID}</td>
      <td className="w-1 overflow-clip pr-2">{problemName}</td>
      <td>
        <ul className="flex flex-row content-start gap-3 pr-2">{tags}</ul>
      </td>
      <td className="text-left">{competitiveRating}</td>
      <td className="text-left">{completedSubmissions}</td>
    </tr>
  );
}

ProblemComponent.propTypes = {
  problemID: PropTypes.string,
  problemName: PropTypes.string,
  tags: PropTypes.array,
  competitiveRating: PropTypes.number,
  completedSubmissions: PropTypes.number,
};
