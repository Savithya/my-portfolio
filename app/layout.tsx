import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Savithya Muthunima | IT Undergraduate & Aspiring Software Developer",
  description:
    "Explore the portfolio of Savithya Muthunima, an IT undergraduate interested in software development, artificial intelligence, cybersecurity, and technology.",
  keywords: [
    "Savithya Muthunima",
    "IT Undergraduate",
    "Software Developer",
    "Computer Science",
    "Artificial Intelligence",
    "Cybersecurity Researcher",
    "Portfolio",
    "Sri Lanka",
    "Python",
    "TypeScript",
  ],
  authors: [{ name: "Savithya Muthunima" }],
  creator: "Savithya Muthunima",
  metadataBase: new URL("https://portfolio-flax-ten-t6cfoa5253.vercel.app/"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-flax-ten-t6cfoa5253.vercel.app/",
    title: "Savithya Muthunima | IT Undergraduate & Aspiring Software Developer",
    description:
      "Explore the portfolio of Savithya Muthunima, an IT undergraduate interested in software development, artificial intelligence, cybersecurity, and technology.",
    siteName: "Savithya Muthunima Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Savithya Muthunima | IT Undergraduate & Aspiring Software Developer",
    description:
      "Explore the portfolio of Savithya Muthunima, an IT undergraduate interested in software development, artificial intelligence, cybersecurity, and technology.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased bg-[#060914] text-[#F8FAFC]">
        {children}
      </body>
    </html>
  );
}
