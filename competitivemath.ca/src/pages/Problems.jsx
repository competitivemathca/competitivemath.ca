import TablePanel from "../Components/TablePanel";
import ProblemComponent from "../Components/ProblemComponent";

export default function Problems() {
  return (
    <div className="xl:w-8/12 border-[2px] border-solid border-blue-800 rounded-2xl">
      <TablePanel>
        <thead>
          <tr>
            <th>#</th>
            <th>Problem Name</th>
            <th>Tags</th>
            <th>CR</th>
            <th>👥</th>
          </tr>
        </thead>
        <tbody>
          <ProblemComponent />
        </tbody>
      </TablePanel>
    </div>
  );
}
