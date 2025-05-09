"use client";

import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestiaLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import {motion} from "framer-motion";


export const LogoTicker = () => {
  return (
  <div className="py-8 md:py-12 bg-white">
    <div className="container">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
      <motion.div className="flex gap-14 flex-none pr-14"animate={{
      translateX: "-50%",
       }}
        transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
        }}
      >
      <Image src={acmeLogo} className="logo-ticker-image" alt="Acme Logo" />
      <Image src={quantumLogo} className="logo-ticker-image" alt="Quantum Logo" />
      <Image src={echoLogo} className="logo-ticker-image" alt="Echo Logo" />
      <Image src={celestiaLogo} className="logo-ticker-image" alt="Celestia Logo" />
      <Image src={pulseLogo} className="logo-ticker-image" alt="Pulse Logo" />
      <Image src={apexLogo} className="logo-ticker-image" alt="Apex Logo" />


      <Image src={acmeLogo} className="logo-ticker-image" alt="Acme Logo" />
      <Image src={quantumLogo} className="logo-ticker-image" alt="Quantum Logo" />
      <Image src={echoLogo} className="logo-ticker-image" alt="Echo Logo" />
      <Image src={celestiaLogo} className="logo-ticker-image" alt="Celestia Logo" />
      <Image src={pulseLogo} className="logo-ticker-image" alt="Pulse Logo" />
      <Image src={apexLogo} className="logo-ticker-image" alt="Apex Logo" />
      </motion.div>
      </div>
      </div>
    </div>
  );
};
