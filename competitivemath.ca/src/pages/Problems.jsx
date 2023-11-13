import TablePanel from "../Components/TablePanel";
import ProblemComponent from "../Components/ProblemComponent";
import Tag from "../Components/Tag";

export default function Problems() {
    const testTags1 = [
        <Tag key="tag-1">Trigonometry</Tag>,
        <Tag key="tag-2">Geometry</Tag>,
    ];

    const testTags2 = [
        <Tag key="tag-1">Algebra</Tag>,
        <Tag key="tag-2">Linear systems</Tag>,
    ];

    const exampleProblem1 = {
        problemID: "POOPCH3",
        problemName: "Perimeter of a Cat's Head",
        tags: testTags1,
        competitiveRating: 4,
        completedSubmissons: 136,
    };

    const exampleProblem2 = {
        problemID: "MCSM3",
        problemName: "Special Pythagorean Triplet",
        tags: testTags2,
        competitiveRating: 2,
        completedSubmissons: 434,
    };

    return (
        <div className="xl:w-8/12 border-[2px] border-solid border-blue-800 rounded-2xl overflow-hidden">
            <TablePanel>
                <colgroup>
                    <col className="w-15% col-span-1"/>
                    <col className="w-40% col-span-1"/>
                    <col className="w-25% col-span-1"/>
                    <col className="w-10% col-span-1"/>
                    <col className="w-10% col-span-1"/>
                </colgroup>

                {/*Table heading in a separate component for style reuse*/}
                <thead className="bg-blue-800 w-full px-6 py-2 text-white h-11 hover:cursor-default">
                    <tr>
                        <th title="Problem ID">
                            #
                        </th>
                        <th title="Problem Name" className="text-left">
                            Problem Name
                        </th>
                        <th title="Tags" className="text-left">
                            Tags
                        </th>
                        <th title="Competitive Rating">
                            CR
                        </th>
                        <th title="Completed Submissions">
                            👥
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <ProblemComponent
                        problemID={exampleProblem1.problemID}
                        problemName={exampleProblem1.problemName}
                        tags={exampleProblem1.tags}
                        competitiveRating={exampleProblem1.competitiveRating}
                        completedSubmissions={exampleProblem1.completedSubmissons}
                    />
                    <ProblemComponent
                        problemID={exampleProblem2.problemID}
                        problemName={exampleProblem2.problemName}
                        tags={exampleProblem2.tags}
                        competitiveRating={exampleProblem2.competitiveRating}
                        completedSubmissions={exampleProblem2.completedSubmissons}
                    />
                </tbody>
            </TablePanel>
        </div>
    );
}
