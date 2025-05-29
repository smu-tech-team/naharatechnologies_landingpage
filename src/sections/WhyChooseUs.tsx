import ImageWrap from "@/components/ImageWrap";
import Overlay from "@/components/Overlay";
import TitleDescription from "@/components/TitleDescription";
import { doWeWorkText, images, whatWeWorkText } from "@/constants";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="px-6 py-10 lg:px-[105px] bg-white">
      <div className="relative w-full">
        <TitleDescription
          styling="w-full lg:w-[50%] min-h-[200px] border lg:absolute p-6 top-[calc(50%+100px)] right-0 flex flex-col justify-center"
          title="Why Choose Us"
          titleStyle="text-2xl font-semibold lg:font-medium text-center lg:text-left"
          headerNumber={2}
          desc="Because you deserve more than just a service provider — you need a partner. One that listens. One that understands. One that delivers. At Nahara Technologies, we have the team, the strategy, and the heart to bring your ideas to life. Let's build a future where your brand doesn't just exist — it thrives."
          descStyle=""
        />

        <ImageWrap
          source={images.boundary}
          containerStyle="border w-full lg:w-[60%] h-[400px]"
          alt="why choose us"
          imageStyle="size-full object-center object-cover"
        />
      </div>

      <div className="lg:mt-40 lg:flex items-stretch justify-between gap-8">
        <TitleDescription
          styling="flex-1 p-6 border rounded-lg my-5"
          title="What We Work"
          desc={whatWeWorkText}
          titleStyle="font-bold text-lg"
          descStyle=""
        />
        <TitleDescription
          styling="flex-1 p-6 border rounded-lg"
          title="Do We Work"
          titleStyle="font-bold text-lg"
          desc={doWeWorkText}
          descStyle=""
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
