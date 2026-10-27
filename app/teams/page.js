import { PageIntro, Button, JoinSection } from "../../components/ui";
import { teams } from "../../data/club";
import ClubPhoto from "../../components/ClubPhoto";
export const metadata = {
  title: "Our teams",
  description:
    "Find a Carmichael Hawks team: U10, U12, middle school and high school JV and varsity rugby.",
  alternates: { canonical: "/teams/" },
};
export default function Teams() {
  return (
    <>
      <PageIntro
        eyebrow="OUR TEAMS"
        title={
          <>
            Find your
            <br />
            Hawks team.
          </>
        }
      >
        <p>
          From your first rugby ball to your next big match. Find the Hawks
          program that fits your player.
        </p>
      </PageIntro>
      <section className="team-list wrap">
        {teams.map((t) => (
          <article id={t.id} className="team-row" key={t.id}>
            <span className="team-index">{t.number}</span>
            <div>
              <p className="eyebrow">{t.ages}</p>
              <h2>{t.name}</h2>
              <p className="team-phrase">{t.phrase}</p>
            </div>
            <div>
              <p>{t.description}</p>
              <p>
                Contact a coach to confirm age eligibility, team placement and
                the latest practice details.
              </p>
              <Button href={"/contact/?team=" + t.id}>
                Ask about this team
              </Button>
            </div>
          </article>
        ))}
      </section>
      <figure className="teams-photo wrap">
        <ClubPhoto
          photo="trophy-team"
          sizes="(max-width: 640px) calc(100vw - 40px), 85vw"
        />
      </figure>
      <JoinSection />
    </>
  );
}
