import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { club } from "../data/club";
export const metadata = {
  metadataBase: new URL(club.siteUrl),
  title: {
    default: "Carmichael Hawks Rugby | Youth & High School Rugby in Sacramento",
    template: "%s | Carmichael Hawks Rugby",
  },
  description:
    "Youth and high school rugby in Sacramento. Explore Carmichael Hawks teams, find registration information and meet your next team. New players welcome.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Carmichael Hawks Rugby",
    images: [
      {
        url: "/images/hawks-social.jpg",
        width: 1179,
        height: 630,
        alt: "Hawks teammates together with their trophy",
      },
    ],
  },
  icons: { icon: "/icon.svg" },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
