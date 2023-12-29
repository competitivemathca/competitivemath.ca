import { useParams } from "react-router-dom";
import { dateFormat, getCurrentTimeEST } from "../public/TimeModules";
import Heading from "../Components/Heading";
import TablePanel from "../Components/TablePanel";
import ContestProblemElement from "../Components/ContestProblemElement";
import Countdown from "../Components/Countdown";

//A unique contest page for the given contest ID
//NOTE: ID is useless right now. Need a POST to backend.
export default function Contest() {
    const { id } = useParams();

    //EXAMPLE
    const contest = {
        id: id,
        name: "Weekend Challenge 3-Hour Contest",
        author: "Bur Oak Secondary School",
        startTime: new Date(Date.UTC(2024, 0, 1, 0, 0, 0)),
        endTime: new Date(Date.UTC(2024, 0, 2, 23, 59, 0)),
        length: 180,
        completedSubmissions: 26,
        contestState: "LI",
        numQuestions: 10
    }

    const contestProblems = [
        {
            name: "Problem 1",
            answerType: "Numerical",
            submitted: true,
            completedSubmissions: 16
        },

        {
            name: "Problem 2",
            answerType: "Numerical",
            submitted: false,
            completedSubmissions: 4
        }
    ]

    const problemsHeading = (
        <tr>
          <th title="Problem Number" className="px-3 text-left xl:w-[5%]">
            #
          </th>
          <th title="Problem Name" className="px-3 text-left xl:w-[50%]">
            Problem Name
          </th>
          <th title="Answer Type" className="px-3 text-left xl:w-[20%]">
            Answer Type
          </th>
          <th title="Submitted" className="px-3 text-left xl:w-[15%]">
            Submitted?
          </th>
          <th title="Completed Submissions" className="px-3 text-left xl:w-[5%]">
            <img src="../../images/People Icon White.png" className="h-5 w-5"/>
          </th>
        </tr>
    );

    const problemsContent = contestProblems.map((contest, index) => (
        <ContestProblemElement
            key={index}
            number={index + 1}
            name={contest.name}
            answerType={contest.answerType}
            submitted={contest.submitted}
            completedSubmissions={contest.completedSubmissions}
        />
    ))

    return (
        <div className="p-6">
            <div className="xl:w-5/12 mx-auto text-center mb-6">
                <h1 className="text-3xl">{contest.name}</h1>
                <hr className="border-2 border-blue-800 my-3"/>
                <div>
                    {dateFormat.format(contest.startTime)} UTC - {dateFormat.format(contest.endTime)} UTC
                </div>
            </div>

            <div className="xl:absolute top-28 right-10 flex flex-row">
                <img src="../../images/Clock Icon.png" className="h-10 w-10"/>
                <p className="font-bold text-lg leading-tight ml-6">
                    <Countdown endTime={new Date(getCurrentTimeEST() + 1000 * 60 * contest.length)}/>
                    <br/>remaining
                </p>
            </div>
            
            <p className="my-8">
                Welcome, mathematicians! This is a {contest.numQuestions}-question contest, 
                which you will have {contest.length} minutes to complete.
                Please click on the problem links and submit your answers in the input boxes. Good luck!
            </p>

            <div className="xl:w-9/12">
                <Heading>Problems</Heading>
                <TablePanel heading={problemsHeading} content={problemsContent}/>
            </div>

            <div className="mt-12 w-72">
                <hr className="border-t-2 border-gray-300 max-w-xs py-3"/>
                <h2>Total Score: {}</h2>
            </div>
        </div>
    )
}