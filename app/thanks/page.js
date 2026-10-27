import { PageIntro, Button } from "../../components/ui";
export const metadata = {
  title: "Message received",
  robots: { index: false, follow: false },
};
export default function Thanks() {
  return (
    <section className="thanks-page">
      <PageIntro
        eyebrow="THANK YOU"
        title={
          <>
            Thanks for
            <br />
            getting in touch.
          </>
        }
      >
        <p>
          Thanks for reaching out to the Hawks. The club will get back to you as
          soon as possible. If you haven’t submitted a message, use our contact
          page to say hello.
        </p>
      </PageIntro>
      <div className="wrap">
        <Button href="/">Back to the Hawks</Button>
      </div>
    </section>
  );
}
