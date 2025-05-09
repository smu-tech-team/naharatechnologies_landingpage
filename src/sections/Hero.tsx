"use client";

import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog2.png";
import Image from "next/image";
import cylinderImage from "@/assets/invest.png";
import noodleImage from "@/assets/techIcon4.png";
import {motion, useScroll, useTransform} from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress} = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10
    bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#a02521,#ffffff_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
        <div className="md:w-[478px]">
          <div className="tag">
          Version 1.0 out now</div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter
           bg-gradient-to-b from-black to-[#ee3b35] text-transparent bg-clip-text mt-6">
            Sparking your vision</h1>
          <p className="text-xl text-[#a02521] tracking-tight mt-6">Celebrate the joy of accomplishment with an app
             designed to track your progress, motivate your efforts, 
             and celebrate your successes
             .</p>
        <div className="flex gap-1 items-center mt-[30px]">
          <button className="btn btn-primary">Get started with us</button>
          <button className="btn btn-text gap-1">
            <span >Learn more</span>
            <ArrowIcon className="h-5 w-5"/>
            </button>
        </div>
      </div>
      <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
        <motion.img src={cogImage.src} 
        alt="Cog image"
       className="md:absolute h-full 
        md:w-auto md:max-w-none md:-left-6 lg:left-0 "
        animate={{
          translateY: [-30, 30]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 3,
          ease: "easeInOut",
        }}
        />
        <motion.img 
          src={cylinderImage.src}
         width={220} 
         height={220}
          alt="cylinder image"
          className="hidden md:block -top-10 -left-32 md:absolute"
          style={{
            translateY: translateY,
          }}
          />
          <motion.img 
          src={noodleImage.src}
          alt="noodle image"
           width={220} 
           className="hidden lg:block absolute top-[550px] left-[500px] rotate-[250deg]"
           style={{
            rotate: 30,
            translateY: translateY,
          }}
           />
      </div>
      </div>
      </div>
    </section>
  )
};
