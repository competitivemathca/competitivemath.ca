import PropTypes from "prop-types";

import Tag from "./Tag";
import { dateFormat } from "../public/TimeModules";

// TODO: include who submitted? 
export default function Submission({
    problemName,
    source,
    result,
    submissionDate,
    tags,
}) {
    return (
        <li className="mb-6">
            <h2>{problemName}</h2>
            <div className="leading-tight mt-2">
                <div>From: {source}</div>
                <div>
                    Result:
                    {result === "Correct" ? (
                        <span className="text-[#1FAD36] font-bold"> {result}</span>
                    ) : (
                        <span className="text-red-799 font-bold"> {result}</span>
                    )}
                </div>
                <div>Submitted {dateFormat.format(submissionDate.getTime())}</div>
            </div>
            <ul className="flex flex-row content-start gap-3 mt-3">
                {tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </ul>
        </li>
    );
}

Submission.propTypes = {
    problemName: PropTypes.string,
    source: PropTypes.string,
    result: PropTypes.string,
    submissionDate: PropTypes.objectOf(Date),
    tags: PropTypes.array,
};
