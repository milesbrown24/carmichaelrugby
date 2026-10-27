import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
const root = path.resolve("out");
const routes = [
  "",
  "teams",
  "about",
  "schedule",
  "registration",
  "resources",
  "contact",
  "thanks",
];
const htmlFor = (route) =>
  fs.readFileSync(path.join(root, route, "index.html"), "utf8");
test("all public pages export with one main landmark and one h1", () => {
  for (const route of routes) {
    const html = htmlFor(route);
    assert.equal((html.match(/<main[ >]/g) || []).length, 1, route);
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, route);
    assert.match(html, /<html lang="en"/);
    assert.ok(!/https?:\/\/[^" ]+\.unsplash\./.test(html));
  }
});
test("all internal navigation targets, anchors and images exist", () => {
  for (const route of routes) {
    const html = htmlFor(route);
    for (const match of html.matchAll(/(?:href|src)="([^"<>]+)"/g)) {
      const value = match[1].replaceAll("&amp;", "&");
      if (!value.startsWith("/") && !value.startsWith("#")) continue;
      const url = new URL(
        value,
        "https://local.test/" + (route ? route + "/" : ""),
      );
      let target = path.join(root, decodeURIComponent(url.pathname));
      if (!path.extname(target)) target = path.join(target, "index.html");
      assert.ok(fs.existsSync(target), route + " broken target " + value);
      if (url.hash && target.endsWith(".html"))
        assert.ok(
          fs
            .readFileSync(target, "utf8")
            .includes('id="' + decodeURIComponent(url.hash.slice(1)) + '"'),
          route + " missing anchor " + value,
        );
    }
  }
});
test("contact form is present in exported HTML for Netlify detection", () => {
  const html = htmlFor("contact");
  assert.match(html, /<form[^>]+name="hawks-inquiry"/);
  assert.match(html, /method="POST"/);
  assert.match(html, /action="\/thanks\/"/);
  assert.match(html, /data-netlify="true"/);
  assert.match(html, /This form is for questions only/);
  assert.match(html, /netlify-honeypot="bot-field"/);
  assert.match(html, /name="form-name"[^>]+value="hawks-inquiry"/);
  for (const name of ["name", "email", "message", "bot-field"])
    assert.ok(html.includes('name="' + name + '"'));
});
test("2027 registration, dues, practices and full schedules are published", () => {
  const registration = htmlFor("registration");
  assert.match(htmlFor(""), /2027 Registration is now Open/);
  for (const amount of ["$275", "$315", "$450"])
    assert.ok(registration.includes(amount));
  for (const date of ["December 1, 2026", "January 5, 2027"])
    assert.ok(registration.includes(date));
  assert.ok(registration.includes("Tuesday–Thursday"));
  assert.ok(!registration.includes("Previous season"));
  const schedule = htmlFor("schedule");
  assert.match(schedule, /2027 season schedule/);
  assert.match(schedule, /2026 archive/);
  assert.equal((schedule.match(/<li>/g) || []).length, 19);
  for (const event of [
    "Milpitas Mana",
    "SFGG",
    "Fresno",
    "San Mateo",
    "San Diego",
    "Charlotte",
    "OPEN",
    "Elkhart",
  ])
    assert.ok(schedule.includes(event));
  assert.match(schedule, /2027-05-30/);
});
test("search metadata, robots and error page export", () => {
  assert.ok(fs.existsSync(path.join(root, "404.html")));
  assert.ok(fs.existsSync(path.join(root, "robots.txt")));
  assert.ok(fs.existsSync(path.join(root, "sitemap.xml")));
  assert.match(htmlFor("thanks"), /noindex/);
  assert.match(htmlFor(""), /property="og:image"/);
});

test("responsive photo variants are bundled for static hosting", () => {
  let count = 0;
  for (const route of routes) {
    for (const match of htmlFor(route).matchAll(
      /<source[^>]+srcSet="([^"]+)"/gi,
    )) {
      for (const candidate of match[1].split(",")) {
        const asset = candidate.trim().split(" ")[0];
        assert.ok(
          fs.existsSync(path.join(root, asset)),
          "Missing responsive photo: " + asset,
        );
      }
      count++;
    }
  }
  assert.equal(count, 5, "All five chosen photographs have responsive sources");
});
