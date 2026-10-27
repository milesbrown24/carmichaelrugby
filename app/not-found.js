import { PageIntro, Button } from "../components/ui";
export default function NotFound() {
  return (
    <section className="thanks-page">
      <PageIntro
        eyebrow="404 · OUT OF BOUNDS"
        title={
          <>
            Let’s get you
            <br />
            back on the pitch.
          </>
        }
      >
        <p>
          We couldn’t find that page. Head home or get in touch with the club.
        </p>
      </PageIntro>
      <div className="wrap">
        <Button href="/">Back to the Hawks</Button>
      </div>
    </section>
  );
}
