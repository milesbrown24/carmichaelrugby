import Link from "next/link";
import { club } from "../data/club";
export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
export function Button({ href, children, variant = "", ...props }) {
  const external = /^(https?:|mailto:)/.test(href);
  const cls = "button " + (variant ? "button-" + variant : "button-green");
  return external ? (
    <a href={href} className={cls} {...props}>
      {children}
      <Arrow />
    </a>
  ) : (
    <Link href={href} className={cls} {...props}>
      {children}
      <Arrow />
    </Link>
  );
}
export function PageIntro({ eyebrow, title, children }) {
  return (
    <section className="page-intro wrap">
      <div className="eyebrow">{eyebrow}</div>
      <h1>{title}</h1>
      <div className="intro-copy">{children}</div>
      <span className="intro-orbit" aria-hidden="true" />
    </section>
  );
}
export function JoinSection() {
  return (
    <section className="join-section">
      <div className="wrap join-inner">
        <div>
          <p className="eyebrow">PLAY FOR THE HAWKS</p>
          <h2>Ready to play?</h2>
          <p>Register directly with USA Rugby through Rugby Xplorer.</p>
          <Link href="/contact/" className="text-link">
            Have a question? Ask a coach <Arrow />
          </Link>
        </div>
        <Button href={club.registrationUrl} variant="gold">
          Register for 2027
        </Button>
      </div>
    </section>
  );
}
