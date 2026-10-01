import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Baer Software";
const description =
  "Independent software. Pointed for Linear planning poker, The Two Man for golf tournaments, and Golf Commissioner in development.";

export const metadata: Metadata = {
  metadataBase: new URL("https://baer-software.vercel.app"),
  title,
  description,
  applicationName: "Baer Software",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
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
  themeColor: "#f7f6f2",
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
