

export default function ContestProblemElement({
    number,
    name,
    answerType,
    submitted,
    completedSubmissions
}) {


    return (
        <tr>
            <td className="text-left px-3 py-3">{number}</td>
            <td className="text-left px-3 py-3">{name}</td>
            <td className="text-left px-3">{answerType}</td>
            <td className="text-left px-3">
                {submitted 
                ? <img src="../../images/Checked.png" className="h-5 w-5"/>
                : <img src="../../images/Unchecked.png" className="h-5 w-5"/>}
            </td>
            <td className="text-left px-3">{completedSubmissions}</td>
        </tr>
    )
}