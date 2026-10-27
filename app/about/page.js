import { PageIntro, JoinSection, Button } from "../../components/ui";
import ClubPhoto from "../../components/ClubPhoto";
export const metadata = {
  title: "The club",
  alternates: { canonical: "/about/" },
};
export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="THE CLUB"
        title={
          <>
            Carmichael
            <br />
            Hawks Rugby.
          </>
        }
      >
        <p>
          We’re the Carmichael Hawks. A youth rugby community in Sacramento,
          built around the game and the people who play it.
        </p>
      </PageIntro>
      <figure className="about-photo wrap">
        <ClubPhoto
          photo="team"
          sizes="(max-width: 640px) calc(100vw - 40px), 92vw"
          priority
        />
      </figure>
      <section className="editorial wrap">
        <div>
          <p className="eyebrow">ON AND OFF THE FIELD</p>
          <h2>
            How we play.
            <br />
            What we value.
          </h2>
        </div>
        <div>
          <p>
            Rugby asks you to work together. You make space for a teammate,
            learn to trust a pass and pick each other up after a tough play.
          </p>
          <p>
            That’s what we coach at Carmichael. Our programs run from U10 and
            U12 through middle school and high school, helping new and returning
            players develop their skills, fitness and understanding of the
            sport.
          </p>
          <p>
            Parents, players and supporters are part of the club, too. Whether
            you’re learning the rules on the sideline or helping the team get to
            a match, you’re part of the Hawks.
          </p>
          <Button href="/teams/">Explore our teams</Button>
        </div>
      </section>
      <figure className="huddle-photo wrap">
        <ClubPhoto
          photo="huddle"
          sizes="(max-width: 640px) calc(100vw - 40px), 70vw"
        />
      </figure>
      <JoinSection />
    </>
  );
}
