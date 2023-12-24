import ProblemElement from "../Components/ProblemElement";
import Tag from "../Components/Tag";
import TablePanel from "../Components/TablePanel";

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
    problemID: "Q354A",
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

  const heading = (
    <tr>
      <th title="Problem ID" className="px-3 text-left xl:w-[15%]">
        #
      </th>
      <th title="Problem Name" className="px-3 text-left xl:w-[50%]">
        Problem Name
      </th>
      <th title="Tags" className="px-3 text-left xl:w-[25%]">
        Tags
      </th>
      <th title="Competitive Rating" className="px-3 text-left xl:w-[5%]">
        CR
      </th>
      <th title="Completed Submissions" className="px-3 text-left xl:w-[5%]">
        👥
      </th>
    </tr>
  );

  const content = problems.map((problem, index) => (
    <ProblemElement
      key={index}
      index={index}
      problemID={problem.problemID}
      problemName={problem.problemName}
      tags={problem.tags}
      competitiveRating={problem.competitiveRating}
      completedSubmissions={problem.completedSubmissons}
    />
  ));

  return <TablePanel heading={heading} content={content} />;
}
