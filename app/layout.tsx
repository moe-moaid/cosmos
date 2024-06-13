import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from "./components/header";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cosmos Orbit Website",
  description: "A take-home assessment by \"Cosmos Orbit\" for frontend developer position",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* ${inter.className} */}
      <body className={` bg-[#131313]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
