import PropTypes from "prop-types";

export default function ProblemComponent({
  problemID,
  problemName,
  tags, // Tags will be an array of tag components
  competitiveRating,
  completedSubmissions, // I'm assuming this is the amount of completedSubmissions who did the problem
}) {
  return (
    <tr>
      <td>{problemID}</td>
      <td>{problemName}</td>
      <td>{tags}</td>
      <td>{competitiveRating}</td>
      <td>{completedSubmissions}</td>
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
