import Link from "next/link";
import { club } from "../data/club";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Link href="/" className="brand">
          <img
            src="/images/hawks-logo.svg"
            width="1081"
            height="475"
            alt="Carmichael Hawks Rugby"
          />
        </Link>
        <p>
          See you at the pitch.
          <br />
          <span>{club.location}</span>
        </p>
        <a className="footer-email" href={"mailto:" + club.email}>
          {club.email} <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Carmichael Hawks Rugby Club</span>
        <div>
          <Link href="/registration/">Registration</Link>
          <Link href="/resources/">Player resources</Link>
          <Link href="/contact/">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
