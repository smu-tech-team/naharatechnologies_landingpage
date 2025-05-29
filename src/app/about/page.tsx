"use client";

import WhatWeDo from "@/sections/WhatWeDo";
import HowWeWork from "@/sections/HowWeWork";
import WhyChooseUs from "@/sections/WhyChooseUs";
import MissionVision from "@/sections/MissionVision";
import AboutHero from "@/sections/AboutHero";
import CoreValues from "@/sections/CoreValues";

export default function AboutPage() {
  return (
    <section className="mx-auto text-gray-800">
      {/* <header className="px-6 mb-6">
        <Link
          href="/"
          className="flex items-center text-sm text-blue-600 hover:underline"
        >
          <FiArrowLeftCircle className="mr-1" /> Go back home
        </Link>
      </header> */}
      <AboutHero />
      <WhatWeDo />
      <HowWeWork />
      <WhyChooseUs />
      <MissionVision />
      <CoreValues />
    </section>
  );
}


