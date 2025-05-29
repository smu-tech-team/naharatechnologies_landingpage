import ImageWrap from "@/components/ImageWrap";
import Overlay from "@/components/Overlay";
import TitleDescription from "@/components/TitleDescription";
import { images } from "@/constants";
import React from "react";

const AboutHero = () => {
  return (
    <div className="w-full h-[450px] border lg:h-[500px] relative">
      <Overlay styling="bg-black/30 inset-0 flex items-center justify-center">
        <TitleDescription
          styling="text-center"
          title="About Us"
          titleStyle="text-[28px] lg:text-8xl font-bold text-white"
          desc="Our Mission and Our Mission"
          descStyle="text-white font-medium text-xl lg:text-2xl"
        />
      </Overlay>
      <ImageWrap
        containerStyle="lg:mb-10 size-full lg:h-[500px]"
        source={images.SmileImg}
        alt="About Us Banner"
        imageStyle="size-full object-center object-cover"
      />
    </div>
  );
};

export default AboutHero;
