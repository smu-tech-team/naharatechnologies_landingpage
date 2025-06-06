import type { Metadata } from "next";
import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Header from "@/sections/Header";
import { Footer } from "@/sections/Footer";

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
});


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Nahara technologies plc",
  description: "Landing page",
  icons: {
    icon: "/NaharaIcon2.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(dmSans.variable, poppins.variable)}>
      <body className={clsx(poppins.className, "antialiased bg-[#feecea]")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
