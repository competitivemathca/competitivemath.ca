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
  const exampleProblem3 = {
    problemID: "IDKXD1",
    problemName: "Problem",
    tags: testTags1,
    competitiveRating: 1,
    completedSubmissons: 23,
  };

  const problems = [exampleProblem1, exampleProblem2, exampleProblem3];

  return (
    <div className="xl:w-8/12 border-[2px] border-solid border-blue-800 rounded-2xl overflow-x-auto">
      <table className="w-full">
        <thead className="bg-blue-800 w-full px-6 py-2 text-white h-11 hover:cursor-default">
          <tr>
            <th title="Problem ID" className="pl-3 text-left xl:w-[15%]">
              #
            </th>
            <th title="Problem Name" className="text-left xl:w-[50%]">
              Problem Name
            </th>
            <th title="Tags" className="text-left xl:w-[25%]">
              Tags
            </th>
            <th title="Competitive Rating" className="text-left xl:w-[5%]">
              CR
            </th>
            <th title="Completed Submissions" className="text-left xl:w-[5%]">
              👥
            </th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem, index) => (
            <ProblemComponent
              key={index}
              index={index}
              problemID={problem.problemID}
              problemName={problem.problemName}
              tags={problem.tags}
              competitiveRating={problem.competitiveRating}
              completedSubmissions={problem.completedSubmissons}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
