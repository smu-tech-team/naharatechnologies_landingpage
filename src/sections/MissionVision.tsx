import ImageWrap from "@/components/ImageWrap";
import TitleDescription from "@/components/TitleDescription";
import { images, missionText } from "@/constants";
import React, { ReactNode } from "react";
import { BsGlobe, BsShieldCheck } from "react-icons/bs";

const MVicon: { [key: string]: ReactNode } = {
  mission: <BsShieldCheck />,
  vision: <BsGlobe />,
};

const MissionVision = () => {
  return (
    <div className="px-6 py-10 bg-white/40 lg:px-[105px]">
      <TitleDescription
        styling="max-w-[894px]"
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
        styling="max-w-[894px] ml-auto"
        title="Our Vision"
        desc={missionText}
        titleStyle="text-lg font-bold"
        descStyle=""
      />
    </div>
  );
};

export default MissionVision;
