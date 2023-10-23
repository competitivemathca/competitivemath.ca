import Tag from "./Tag"
import { dateFormat } from "../public/TimeModules"

export default function Submission({ problemName, source, result, submissionDate, tags }) {
    return (
        <li className="mb-6">
            <h2>{problemName}</h2>
            <div className="leading-tight mt-2">
                <div>
                    From: {source}
                </div>
                <div>
                    Result: {result == "Accepted" 
                        ? <span className="text-[#1FAD36] font-bold">{result}</span> 
                        : <span className="text-red-800 font-bold">{result}</span>
                    }
                </div>
                <div>
                    Submitted {dateFormat.format(submissionDate.getTime())}
                </div>
            </div>
            <ul className="flex flex-row content-start gap-3 mt-3">
                {(tags.map(tag =>
                    <Tag>{tag}</Tag>
                ))}
            </ul>
        </li>
    )
}