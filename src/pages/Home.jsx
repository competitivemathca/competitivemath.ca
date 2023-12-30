import ContentPanel from "../Components/ContentPanel";
import Announcement from "../Components/Announcement";
import SideContestElement from "../Components/SideContestElement";
import Submission from "../Components/Submission";

export default function Home() {
  return (
    <div className="xl:flex justify-between gap-12 p-6">
      <div className="space-y-8 order-1 xl:w-1/4">
        <ContentPanel
          title="Upcoming Contests"
          className="flex flex-col overflow-auto p-5"
        >
          <ul>
            <SideContestElement
              id={4}
              name="Weekend Challenge 3-Hour Contest"
              startTime={
                new Date(Date.UTC(2023, 9, 22, 17, 55, 0))
              } /* NOTE: months are 0-indexed (0 = January, 11 = December) */
              endTime={new Date(Date.UTC(2023, 9, 25, 18, 55, 0))}
              author="Bur Oak Secondary School"
            />
            <SideContestElement
              id={5}
              name="Mock CSMC 2-Hour 9-Question Contest"
              startTime={new Date(Date.UTC(2024, 0, 1, 0, 0, 0))}
              endTime={new Date(Date.UTC(2024, 0, 2, 23, 59, 59))}
              author="Bur Oak Secondary School"
            />
          </ul>
        </ContentPanel>
        <ContentPanel
          title="Recent Submissions"
          className="flex flex-col overflow-auto p-5"
        >
          <ul>
            <Submission
              problemName="Perimeter of a Cat's Head"
              source="Cat Appreciation 1-Hour Contest"
              result="Correct"
              submissionDate={new Date(Date.UTC(2022, 6, 13, 16, 20, 0))}
              tags={["geometry", "trigonometry"]}
            />
          </ul>
        </ContentPanel>
      </div>
      <div className="mt-8 xl:mt-0 xl:w-3/4 overflow-x-hidden">
        <ContentPanel title="Important Announcements" colour="bg-blue-100">
          {/*imgSrc and pfp are image links from the database*/}
          <Announcement
            imgSrc="https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/01/Blade-Runner-2049-1.jpg"
            username="apljc"
            date={new Date(Date.UTC(2023, 5, 13, 15, 20, 0))}
            pfp="../../images/Default PFP.svg"
            title="I can't do this anymore."
            text="I'm serious."
          />
        </ContentPanel>
      </div>
    </div>
  );
}
