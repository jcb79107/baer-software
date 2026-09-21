import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Baer Software — Independent software by Jason Baer";
const description =
  "Small, focused software for work and life. Explore Linear Pointing, a refinement and estimation app for Linear teams, and see what Jason Baer is building next.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Baer Software",
  authors: [{ name: "Jason Baer", url: "https://github.com/jcb79107" }],
  openGraph: {
    title,
    description,
    siteName: "Baer Software",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f9f6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
