import { PageIntro, Button, JoinSection, Arrow } from "../../components/ui";
import PracticeSchedule from "../../components/PracticeSchedule";
import { club, dues } from "../../data/club";
export const metadata = {
  title: "Registration",
  alternates: { canonical: "/registration/" },
};
export default function Registration() {
  return (
    <>
      <PageIntro
        eyebrow="JOIN THE HAWKS"
        title={
          <>
            2027 Registration
            <br />
            is now Open
          </>
        }
      >
        <p>Register your player with USA Rugby through Rugby Xplorer.</p>
        <Button href={club.registrationUrl}>Register for 2027</Button>
        <p className="registration-help">
          Choose Carmichael Rugby and your player’s 2027 program. For questions,{" "}
          <a href="/contact/">ask a coach</a>.
        </p>
      </PageIntro>
      <PracticeSchedule />
      <section className="dues-section">
        <div className="wrap">
          <p className="eyebrow">2027 SEASON</p>
          <h2>2027 season dues.</h2>
          <p className="section-description">
            Registration dues for U10, U12, middle school and high school
            players.
          </p>
          <div className="dues-list">
            {dues.map((d) => (
              <article key={d.team}>
                <h3>{d.team}</h3>
                <strong>{d.amount}</strong>
                <p>{d.includes}</p>
              </article>
            ))}
          </div>
          <div className="assistance">
            <h3>A little help getting on the field.</h3>
            <p>
              The club offers financial assistance. Contact us about current
              availability or use the assistance request form.
            </p>
            <a href={club.assistanceUrl} className="text-link">
              Financial assistance request <Arrow />
            </a>
          </div>
        </div>
      </section>
      <section className="faq wrap">
        <p className="eyebrow">A FEW COMMON QUESTIONS</p>
        <h2>Registration questions.</h2>
        <details>
          <summary>Does my player need rugby experience?</summary>
          <p>
            No experience is required. Let the coaches know your player’s school
            year and sporting background so they can help you get started.
          </p>
        </details>
        <details>
          <summary>What should we bring?</summary>
          <p>
            Cleats, rugby shorts, a T-shirt or jersey, a mouthguard, water and
            weather-appropriate layers. Ask a coach before buying specialist
            equipment.
          </p>
        </details>
        <details>
          <summary>When and where are practices?</summary>
          <p>
            U10, U12 and middle school start December 1, 2026. High school (JV &
            Varsity) starts January 5, 2027, Tuesday–Thursday. Contact a coach
            for practice times and field locations.
          </p>
        </details>
        <details>
          <summary>How do I know which team to choose?</summary>
          <p>
            Tell us your player’s age and school year. The coaches will confirm
            eligibility and the right group.
          </p>
        </details>
      </section>
      <JoinSection />
    </>
  );
}
