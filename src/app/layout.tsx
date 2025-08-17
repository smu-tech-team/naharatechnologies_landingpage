import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Header from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import TopButton from '@/components/topButton';
import { QuickChatBox } from '@/components/QuickChatBox';



const dmSans = DM_Sans({ subsets: ["latin"] });

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
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-[#feecea]")}>
           <Header />
              <TopButton/>
                 <QuickChatBox/>
        {children}
       <Footer/>
      </body>
    </html>
  );
}
