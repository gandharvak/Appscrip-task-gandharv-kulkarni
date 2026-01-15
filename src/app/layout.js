import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Discover Our Products | Appscrip - Gandharv Kulkarni",
  description: "Explore our curated collection of premium apparel and accessories, including the Fjallraven Backpack and casual slim-fit wear.",
  openGraph: {
    title: "Discover Our Products | Appscrip - Gandharv Kulkarni",
    description: "High-quality lifestyle products curated for you.",
    siteName: "Appscrip - Gandharv Kulkarni",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TopHeader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
