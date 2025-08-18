// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

const nunito = Nunito({ subsets: ["latin"], weight: ["500","700"], variable: "--font-nunito" });

export const metadata: Metadata = { title: "Tank Inspection Services" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
