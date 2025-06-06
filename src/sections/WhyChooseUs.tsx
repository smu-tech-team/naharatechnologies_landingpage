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
          styling="w-full bg-white lg:w-[50%] min-h-[200px] border lg:absolute p-6 top-[calc(50%+100px)] right-0 flex flex-col justify-center rounded-e-3xl rounded-es-3xl shadow-lg"
          title="Why Choose Us"
          titleStyle="text-2xl font-semibold text-center lg:text-left"
          headerNumber={2}
          desc="Because you deserve more than just a service provider — you need a partner. One that listens. One that understands. One that delivers. At Nahara Technologies, we have the team, the strategy, and the heart to bring your ideas to life. Let's build a future where your brand doesn't just exist — it thrives."
          descStyle=""
        />

        <ImageWrap
          source={images.boundary}
          containerStyle="w-full lg:w-[60%] h-[400px] mt-5 lg:mt-0"
          alt="why choose us"
          imageStyle="size-full object-center object-cover rounded-s-3xl rounded-se-3xl"
        />
      </div>

      <div className="lg:mt-40 lg:flex justify-between gap-8">
        <TitleDescription
          styling="flex-1 p-6 border rounded-3xl my-5 lg:my-0"
          title="What We Work"
          desc={whatWeWorkText}
          titleStyle="font-semibold text-lg"
          // descStyle=""
        />
        <TitleDescription
          styling="flex-1 p-6 border rounded-3xl"
          title="Do We Work"
          titleStyle="font-semibold text-lg"
          desc={doWeWorkText}
          // descStyle=""
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
