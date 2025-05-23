import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/Navbar/Navbar";
import Footer from "@/shared/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "YouthBees | Learn, Earn & Grow",
  description:
    "Career-ready courses, 1:1 mentoring, and affiliate opportunities. Start your growth journey with YouthBees.",
  keywords: [
    "YouthBees",
    "online courses",
    "student jobs",
    "mentorship",
    "career growth",
    "affiliate learning",
    "B2B edtech",
    "course marketplace",
  ],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Career-ready courses, 1:1 mentoring, and affiliate opportunities. Start your growth journey with YouthBees."
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://youthbee-next-r9d6.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
        <title>YouthBees | Learn, Earn & Grow</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
