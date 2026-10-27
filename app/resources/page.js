import { PageIntro, Button, Arrow, JoinSection } from "../../components/ui";
import { kit } from "../../data/club";
export const metadata = {
  title: "Player resources",
  alternates: { canonical: "/resources/" },
};
export default function Resources() {
  return (
    <>
      <PageIntro
        eyebrow="PLAYER RESOURCES"
        title={
          <>
            New to rugby?
            <br />
            Start here.
          </>
        }
      >
        <p>
          For players learning the game and families finding their feet on the
          sideline.
        </p>
      </PageIntro>
      <section id="kit" className="editorial wrap">
        <div>
          <p className="eyebrow">PACK YOUR BAG</p>
          <h2>
            What to bring
            <br />
            to practice.
          </h2>
          <p>Check the time and location with a coach before you come along.</p>
        </div>
        <div>
          <ul className="kit-list">
            {kit.map((item, i) => (
              <li key={item}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {item}
                {item === "Mouthguard" && <small>Required</small>}
              </li>
            ))}
          </ul>
          <p className="small-note">
            Practice can be wet or cold. Bring layers, and check with the club
            for weather-related changes.
          </p>
        </div>
      </section>
      <section className="resource-section">
        <div className="wrap">
          <p className="eyebrow">GET TO KNOW THE GAME</p>
          <h2>Learn the game.</h2>
          <div className="resource-links">
            <a href="/documents/beginners-guide-to-rugby.pdf">
              <span>01 / BEGINNER GUIDE · PDF</span>
              <h3>The basics, explained.</h3>
              <p>
                A guide to rugby union for new players and supporters. An
                introduction; check current laws below.
              </p>
              <Arrow />
            </a>
            <a href="https://passport.world.rugby/laws-of-the-game/">
              <span>02 / WORLD RUGBY</span>
              <h3>The laws of the game.</h3>
              <p>
                The official place to explore rugby’s current laws and
                explanations.
              </p>
              <Arrow />
            </a>
            <a href="https://www.irbrugbyready.com/">
              <span>03 / RUGBY READY</span>
              <h3>Prepare to play.</h3>
              <p>
                A preparation resource linked by the club for players, coaches
                and supporters.
              </p>
              <Arrow />
            </a>
          </div>
        </div>
      </section>
      <section className="faq wrap">
        <p className="eyebrow">NEW PLAYER QUESTIONS</p>
        <h2>New player questions.</h2>
        <details>
          <summary>Can I play if I’ve never watched rugby?</summary>
          <p>
            Yes. You don’t need to know the rules before speaking with a coach.
            Come ready to listen, learn and work with your teammates.
          </p>
        </details>
        <details>
          <summary>Can players come from other sports?</summary>
          <p>
            Absolutely. Tell a coach about your experience and they’ll help you
            get started with rugby skills.
          </p>
        </details>
        <details>
          <summary>Who should I ask about coaching and player safety?</summary>
          <p>
            Speak directly with the coaching staff about how practice is run,
            preparation, contact skills and any questions specific to your
            player.
          </p>
        </details>
        <details>
          <summary>
            Do I need to buy everything before getting in touch?
          </summary>
          <p>
            No. Contact a coach first to confirm your player’s team, current kit
            needs and next steps.
          </p>
        </details>
        <Button href="/contact/">Ask your own question</Button>
      </section>
      <JoinSection />
    </>
  );
}
