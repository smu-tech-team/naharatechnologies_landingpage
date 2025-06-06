"use client";

import ImageWrap from "@/components/ImageWrap";
import LottieAnim from "@/components/LottieAnim";
import TitleDescription from "@/components/TitleDescription";
import { images, lottieAnims, missionText } from "@/constants";
import React from "react";

const MissionVision = () => {
  return (
    <div className="px-6 py-10 bg-black lg:px-[105px] rounded-se-[50px] rounded-es-[50px]">
      <TitleDescription
        styling="max-w-[694px] text-white"
        title="Our Mission"
        desc={missionText}
        titleStyle="text-lg font-bold"
        descStyle="mt-1"
      />

      <LottieAnim lottieFile={lottieAnims.globe} styling="size-full my-5" />

      <TitleDescription
        styling="max-w-[694px] ml-auto text-white"
        title="Our Vision"
        desc={missionText}
        titleStyle="text-lg font-bold"
        descStyle="mt-1"
      />
    </div>
  );
};

export default MissionVision;
