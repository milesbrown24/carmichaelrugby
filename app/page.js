import Link from "next/link";
import ClubPhoto from "../components/ClubPhoto";
import { Button, Arrow, JoinSection } from "../components/ui";
import { club, teams } from "../data/club";
export const metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">CARMICHAEL, CA · YOUTH RUGBY</p>
          <h1>
            Come play
            <br className="desktop-break" /> Hawks rugby.
          </h1>
          <p className="hero-description">
            Youth and high school rugby in Sacramento.
            <br className="wide-break" /> New players welcome.
          </p>
          <Button href={club.registrationUrl}>Register for 2027</Button>
          <Link href="/teams/" className="hero-team-link">
            Explore our teams <Arrow />
          </Link>
        </div>
        <div className="hero-art">
          <span className="sun" aria-hidden="true" />
          <span className="orbit orbit-top" aria-hidden="true" />
          <div className="team-oval">
            <ClubPhoto
              photo="celebration"
              priority
              sizes="(max-width: 640px) calc(100vw - 40px), 60vw"
            />
          </div>
          <span className="orbit orbit-bottom" aria-hidden="true" />
          <span className="small-ball" aria-hidden="true" />
        </div>
      </section>
      <section className="program-section">
        <svg
          className="section-wave"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 8 C380 -12 830 150 1440 58 L1440 100 L0 100Z" />
        </svg>
        <div className="wrap program-inner">
          <div className="program-intro">
            <h2>
              Youth to <br />
              high school.
            </h2>
            <Button href="/resources/" variant="outline-light">
              New to rugby? Start here
            </Button>
          </div>
          <div className="program-links">
            {teams.map((t) => (
              <Link href={"/teams/#" + t.id} key={t.id}>
                <span className="program-number">{t.number}</span>
                <div>
                  <h3>
                    {t.name} <Arrow />
                  </h3>
                  <p>{t.ages}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="club-story wrap">
        <div className="story-photo">
          <ClubPhoto photo="action" />
          <span className="story-photo-orbit" aria-hidden="true" />
        </div>
        <div>
          <p className="eyebrow">THIS IS CARMICHAEL RUGBY</p>
          <h2>
            The club behind
            <br />
            the jersey.
          </h2>
          <p>
            There’s the first clean pass. The muddy drive home. The teammates
            who become friends. That’s the part of rugby we keep coming back
            for.
          </p>
          <p>
            At the Hawks, we coach the game and build a community around it.
            There’s a place for brand-new players and athletes ready for their
            next challenge.
          </p>
          <Link href="/about/" className="text-link">
            Get to know the Hawks <Arrow />
          </Link>
        </div>
      </section>
      <section className="season-section">
        <div className="wrap season-inner">
          <div>
            <p className="eyebrow">SEASON INFORMATION</p>
            <h2>{club.season.announcement}</h2>
            <p>{club.season.message}</p>
          </div>
          <a href={club.registrationUrl} className="round-link">
            <span>
              Register
              <br />
              for 2027
            </span>
            <Arrow />
          </a>
        </div>
      </section>
      <section className="first-visit wrap">
        <div>
          <p className="eyebrow">YOUR FIRST PRACTICE</p>
          <h2>
            Your first
            <br />
            rugby practice.
          </h2>
          <p>
            No rugby experience required. Get in touch and we’ll help you find
            the right team and let you know when and where to come along.
          </p>
          <Button href="/contact/">Ask a coach</Button>
        </div>
        <div className="first-steps">
          <div>
            <span>01</span>
            <h3>Contact a coach.</h3>
            <p>
              Tell us your player’s school year and whether they’ve played
              before.
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>Pack your kit.</h3>
            <p>
              Cleats, a mouthguard, water and a little curiosity.{" "}
              <Link href="/resources/#kit">
                See the full kit list <Arrow />
              </Link>
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>Meet your team.</h3>
            <p>Our coaches will help you take it from there.</p>
          </div>
        </div>
      </section>
      <JoinSection />
    </>
  );
}
