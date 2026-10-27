"use client";
import { useState } from "react";
import { archiveFixtures, upcomingFixtures } from "../data/club";
import Link from "next/link";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(date + "T12:00:00Z"));
export default function Schedule() {
  const [archive, setArchive] = useState(false);
  const [team, setTeam] = useState("all");
  const rows = (archive ? archiveFixtures : upcomingFixtures)
    .filter(
      (f) =>
        team === "all" ||
        (team === "youth"
          ? f.team === "youth" || f.team === "middle-school"
          : f.team === team),
    )
    .sort((a, b) => a.date.localeCompare(b.date));
  return (
    <section className="schedule-content wrap">
      <div className="schedule-toolbar">
        <div className="view-switch" role="group" aria-label="Season">
          <button aria-pressed={!archive} onClick={() => setArchive(false)}>
            2027 season
          </button>
          <button aria-pressed={archive} onClick={() => setArchive(true)}>
            2026 archive
          </button>
        </div>
        <label className="filter-label">
          Show team
          <select value={team} onChange={(e) => setTeam(e.target.value)}>
            <option value="all">All teams</option>
            <option value="youth">Youth & middle school</option>
            <option value="high-school">High school</option>
          </select>
        </label>
      </div>
      <div className="schedule-results" aria-live="polite" aria-atomic="true">
        {archive ? (
          <>
            <h2>2026 season archive</h2>
            <p className="archive-note">
              Historical fixtures, not upcoming games. Youth matches were
              multi-club events; the listed site did not necessarily identify
              the opponent. Published times and locations are retained below.
            </p>
          </>
        ) : (
          <h2>2027 season schedule</h2>
        )}
        {rows.length ? (
          <ol className="fixture-list">
            {rows.map((f) => (
              <li key={f.id}>
                <div className="fixture-date">
                  <time dateTime={f.date}>{formatDate(f.date)}</time>
                  {f.endDate && (
                    <>
                      <span aria-hidden="true">–</span>
                      <time dateTime={f.endDate}>
                        {new Date(f.endDate + "T12:00:00Z").getUTCDate()}
                      </time>
                    </>
                  )}
                </div>
                <div>
                  <span className="eyebrow">
                    {f.team === "high-school"
                      ? "HIGH SCHOOL"
                      : "YOUTH & MIDDLE SCHOOL"}
                  </span>
                  <h3>{f.title}</h3>
                  <p>
                    {f.detail ||
                      [f.location, f.time].filter(Boolean).join(" · ") ||
                      "Match time to be announced"}
                  </p>
                </div>
                <span className="fixture-type">
                  {archive ? "2026" : "2027"}
                </span>
              </li>
            ))}
          </ol>
        ) : (
          <div className="empty-schedule">
            <span className="empty-ball" aria-hidden="true" />
            <h3>
              {archive
                ? "No fixtures for this team."
                : "The next schedule is taking shape."}
            </h3>
            <p>
              {archive
                ? "Choose another team to see archived fixtures."
                : "Confirmed matches will appear here. For current practice times and season information, get in touch with a coach."}
            </p>
            <Link href="/contact/" className="text-link">
              Ask about the season ↗
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
