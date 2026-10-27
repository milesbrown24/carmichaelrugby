import { PageIntro, Button } from "../../components/ui";
import ContactForm from "../../components/ContactForm";
import { club } from "../../data/club";
export const metadata = {
  title: "Contact a coach",
  alternates: { canonical: "/contact/" },
};
export default function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="SAY HELLO"
        title={
          <>
            Talk to
            <br />
            the Hawks.
          </>
        }
      >
        <p>
          This form is for questions only. To register a player, use USA Rugby’s
          Rugby Xplorer registration page.
        </p>
        <Button href={club.registrationUrl}>Register for 2027</Button>
      </PageIntro>
      <section className="contact-layout wrap">
        <aside>
          <h2>Ask a coach.</h2>
          <p>
            We’re happy to help new families get started and returning players
            find the information they need.
          </p>
          <p className="eyebrow">EMAIL THE CLUB</p>
          <a className="contact-email" href={"mailto:" + club.email}>
            {club.email} ↗
          </a>
          <p className="eyebrow">OUR COMMUNITY</p>
          <p>
            {club.location}
            <br />
            Contact us for current field locations.
          </p>
          <span className="contact-decoration" aria-hidden="true" />
        </aside>
        <ContactForm />
      </section>
    </>
  );
}
