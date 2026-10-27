import { PageIntro, JoinSection } from "../../components/ui";
import Schedule from "../../components/Schedule";
import PracticeSchedule from "../../components/PracticeSchedule";
export const metadata = {
  title: "Schedule",
  description:
    "2027 Carmichael Hawks youth and high school schedules, practice start dates and the 2026 fixture archive.",
  alternates: { canonical: "/schedule/" },
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="ON THE CALENDAR"
        title={
          <>
            The Hawks
            <br />
            schedule.
          </>
        }
      >
        <p>
          The 2027 match schedule for youth, middle school and high school
          rugby. Choose a team below to see its fixtures.
        </p>
      </PageIntro>
      <Schedule />
      <PracticeSchedule />
      <JoinSection />
    </>
  );
}
