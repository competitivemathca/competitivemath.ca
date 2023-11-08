import TablePanel from "../Components/TablePanel";
import ProblemComponent from "../Components/ProblemComponent";
import Tag from "../Components/Tag";

export default function Problems() {
    const testTags = [
        <Tag key="tag-1">Test</Tag>,
        <Tag key="tag-2">Geometry</Tag>,
    ];

    const exampleProblem = {
        problemID: "POOPCH3",
        problemName: "Perimeter of a Cat's Head",
        tags: testTags,
        competitiveRating: 4,
        completedSubmissons: 136,
    };

    return (
        <div className="xl:w-8/12 border-[2px] border-solid border-blue-800 rounded-2xl">
            <TablePanel>
                {/*Table heading in a separate component for style reuse*/}
                <thead>
                    <tr>
                        <th title="Problem ID" className="hover:cursor-default">
                            #
                        </th>
                        <th title="Problem Name" className="hover:cursor-default">
                            Problem Name
                        </th>
                        <th title="Tags" className="hover:cursor-default">
                            Tags
                        </th>
                        <th title="Competitive Rating" className="hover:cursor-default">
                            CR
                        </th>
                        <th title="Completed Submissions" className="hover:cursor-default">
                            👥
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <ProblemComponent
                        problemID={exampleProblem.problemID}
                        problemName={exampleProblem.problemName}
                        tags={exampleProblem.tags}
                        competitiveRating={exampleProblem.competitiveRating}
                        completedSubmissions={exampleProblem.completedSubmissons}
                    />
                </tbody>
            </TablePanel>
        </div>
    );
}
