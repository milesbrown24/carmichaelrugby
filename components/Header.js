"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { club } from "../data/club";
const links = [
  ["/teams/", "Teams"],
  ["/schedule/", "Schedule"],
  ["/about/", "The club"],
  ["/resources/", "Resources"],
  ["/contact/", "Contact"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="header">
      <Link
        href="/"
        className="brand"
        aria-label="Carmichael Hawks Rugby — home"
      >
        <img
          src="/images/hawks-logo.svg"
          width="1081"
          height="475"
          alt="Carmichael Hawks Rugby"
        />
      </Link>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <nav
        id="site-nav"
        aria-label="Main navigation"
        className={open ? "navigation is-open" : "navigation"}
      >
        {links.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            aria-current={path === href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
        <a
          href={club.registrationUrl}
          className="button button-gold nav-join"
          onClick={() => setOpen(false)}
        >
          Register for 2027 <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
