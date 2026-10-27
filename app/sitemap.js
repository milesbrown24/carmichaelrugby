export const dynamic = "force-static";
import { club } from "../data/club";
export default function sitemap() {
  return [
    "",
    "teams/",
    "about/",
    "schedule/",
    "registration/",
    "resources/",
    "contact/",
  ].map((path) => ({
    url: club.siteUrl + "/" + path,
    changeFrequency: "monthly",
    priority: path ? 0.7 : 1,
  }));
}
