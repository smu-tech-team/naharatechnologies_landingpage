import ImageWrap from "@/components/ImageWrap";
import TitleDescription from "@/components/TitleDescription";
import { images, missionText } from "@/constants";
import React from "react";

const MissionVision = () => {
  return (
    <div className="px-6 py-10 bg-white/40 lg:px-[105px]">
      <TitleDescription
        styling="max-w-[694px]"
        title="Our Mission"
        desc={missionText}
        titleStyle="text-lg font-bold"
        descStyle=""
      />

      <ImageWrap
        source={images.map}
        containerStyle="size-full my-5"
        imageStyle="size-full"
        alt="mission and vision"
      />

      <TitleDescription
        styling="max-w-[694px] ml-auto"
        title="Our Vision"
        desc={missionText}
        titleStyle="text-lg font-bold"
        descStyle=""
      />
    </div>
  );
};

export default MissionVision;
