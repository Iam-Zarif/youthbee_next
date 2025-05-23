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
  authors: [{ name: "YouthBees Team", url: "https://youthbee-next-r9d6.vercel.app" }],
  generator: "Next.js",
  applicationName: "YouthBees",
  colorScheme: "dark",
  creator: "YouthBees Dev",
  publisher: "YouthBees",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "YouthBees | Start Your Career",
    description:
      "Explore verified courses, book 1:1 sessions, and launch your career through YouthBees.",
    url: "https://youthbee-next-r9d6.vercel.app",
    siteName: "YouthBees",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://i.ibb.co/rRStPmSp/youth-Bee-Logo.png",
        width: 1200,
        height: 630,
        alt: "YouthBees",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@YouthBees",
    title: "YouthBees | Start Your Career",
    description:
      "Learn and grow with trusted EdTech partners. Affiliate, earn, and skill up with YouthBees.",
    images: ["https://i.ibb.co/rRStPmSp/youth-Bee-Logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
