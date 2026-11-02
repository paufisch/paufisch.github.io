import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Source_Serif_4 } from "next/font/google";

const serif = Source_Serif_4({
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const title = "Paul Fischer";
const description =
  "Paul Fischer, PhD student at the University of Tübingen working on probabilistic numerics, physics-informed machine learning, and uncertainty calibration for dynamical systems and PDEs.";

export const metadata: Metadata = {
  metadataBase: new URL("https://paufisch.github.io"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", siteName: title, type: "profile" },
  twitter: { card: "summary" },
};

// Matches --paper in globals.css, so the browser chrome blends into the page.
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7f8" },
    { media: "(prefers-color-scheme: dark)", color: "#171c21" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={serif.variable}>
      <body className="font-serif">{children}</body>
    </html>
  );
}
