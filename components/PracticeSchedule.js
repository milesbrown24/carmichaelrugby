import { practices } from "../data/club";

export default function PracticeSchedule() {
  return (
    <section className="practice-note wrap" id="practices">
      <p className="eyebrow">2027 SEASON · PRACTICE START DATES</p>
      <h2>Practice starts here.</h2>
      <div className="practice-dates">
        {practices.map((practice) => (
          <article key={practice.team}>
            <h3>{practice.team}:</h3>
            <p>
              Start <time dateTime={practice.start}>{practice.startLabel}</time>
            </p>
            {practice.days && <p>{practice.days}</p>}
          </article>
        ))}
      </div>
      <p>Contact a coach for practice times and field locations.</p>
      <a href="mailto:carmichaelhawks@gmail.com" className="text-link">
        Email the Hawks ↗
      </a>
    </section>
  );
}
