import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar"; // Path relatif
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio Adit - Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> {/* Tambahkan Navbar di sini */}
        {children}
      </body>
    </html>
  );
}
