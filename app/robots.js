export const dynamic = "force-static";
import { club } from "../data/club";
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/thanks/"] },
    sitemap: club.siteUrl + "/sitemap.xml",
  };
}
