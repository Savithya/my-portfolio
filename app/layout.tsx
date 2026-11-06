import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Savithya Muthunima | IT Undergraduate & Aspiring Software Developer",
  description:
    "Explore the professional developer portfolio of Savithya Muthunima, an IT undergraduate and Computer Science & AI student specializing in software engineering, web development, and cybersecurity.",
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
    "JavaScript",
    "Next.js",
  ],
  authors: [{ name: "Savithya Muthunima" }],
  creator: "Savithya Muthunima",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Savithya Muthunima | IT Undergraduate & Aspiring Software Developer",
    description:
      "Explore the professional developer portfolio of Savithya Muthunima, an IT undergraduate specializing in software engineering, artificial intelligence, and cybersecurity.",
    siteName: "Savithya Muthunima Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Savithya Muthunima | IT Undergraduate & Aspiring Software Developer",
    description:
      "Explore the professional developer portfolio of Savithya Muthunima, an IT undergraduate specializing in software engineering, artificial intelligence, and cybersecurity.",
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
        <meta name="theme-color" content="#050814" />
      </head>
      <body className="font-sans antialiased bg-[#050814] text-[#F8FAFC] transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
