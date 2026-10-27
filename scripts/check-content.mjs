import assert from "node:assert/strict";
import {
  club,
  teams,
  upcomingFixtures,
  archiveFixtures,
} from "../data/club.js";
assert.match(club.email, /^[^@\s]+@[^@\s]+\.[^@\s]+$/);
for (const key of ["siteUrl", "registrationUrl", "assistanceUrl"])
  assert.equal(new URL(club[key]).protocol, "https:");
const ids = new Set();
for (const item of [...upcomingFixtures, ...archiveFixtures]) {
  assert.ok(item.id && !ids.has(item.id), "Fixture IDs must be unique");
  ids.add(item.id);
  assert.ok(
    teams.some((t) => t.id === item.team),
    "Fixture must belong to a known team",
  );
  assert.match(item.date, /^\d{4}-\d{2}-\d{2}$/);
  assert.equal(
    new Date(item.date + "T12:00:00Z").toISOString().slice(0, 10),
    item.date,
    "Fixture date must be valid",
  );
  if (item.endDate) {
    assert.equal(
      new Date(item.endDate + "T12:00:00Z").toISOString().slice(0, 10),
      item.endDate,
    );
    assert.ok(item.endDate >= item.date, "Fixture end cannot precede start");
  }
  assert.ok(item.title?.trim(), "Fixture needs a title");
}
console.log("Club links, team assignments and fixture data checked.");
