import PropTypes from "prop-types";

export default function ProblemComponent({
    index,
    problemID,
    problemName,
    tags, // Tags will be an array of tag components
    competitiveRating,
    completedSubmissions, // I'm assuming this is the amount of completedSubmissions who did the problem
}) {
    return (
        <tr className={index % 2 == 1 ? "bg-blue-100" : "bg-white"}>
            <td className="text-center py-3 pr-2">{problemID}</td>
            <td className="w-1 overflow-clip pr-2">{problemName}</td>
            <td>
                <ul className="flex flex-row content-start gap-3 pr-2">{tags}</ul>
            </td>
            <td className="text-center pr-2">{competitiveRating}</td>
            <td className="text-center pr-2">{completedSubmissions}</td>
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
