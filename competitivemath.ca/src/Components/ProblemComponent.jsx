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
            <td className="text-center py-3">{problemID}</td>
            <td>{problemName}</td>
            <td>
                <ul className="flex flex-row content-start gap-3">{tags}</ul>
            </td>
            <td className="text-center">{competitiveRating}</td>
            <td className="text-center">{completedSubmissions}</td>
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
