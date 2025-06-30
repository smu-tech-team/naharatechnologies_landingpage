import ImageWrap from "@/components/ImageWrap";
import TitleDescription from "@/components/TitleDescription";
import { howWeWorkContent, images } from "@/constants";
import React from "react";

const HowWeWork = () => {
  return (
    <div className="px-6 py-10 lg:px-[105px]">
      <TitleDescription
        title="How We Work At Nahara Technologies"
        titleStyle="text-2xl font-semibold lg:font-bold text-center lg:text-4xl mb-2 lg:text-center"
        desc="Blending skill and technology to deliver smart, reliable solutions."
        descStyle="mt-2 hidden lg:block font-medium text-2xl text-center text-gray-500"
        headerNumber={2}
        titleAnimProps={{
          initial: { y: -50, opacity: 0 },
          whileInView: { y: 0, opacity: 1 },
        }}
        descAnimProps={{
          initial: { y: -150, opacity: 0 },
          whileInView: { y: 0, opacity: 1, transition: { delay: 0.5 } },
        }}
      />

      <div className="mt-10">
        <div className="lg:flex items-stretch my-10">
          <ImageWrap
            containerStyle="w-full  overflow-hidden lg:w-[50%] first"
            source={images.boundary}
            imageStyle="size-full object-center object-cover"
            alt="image for beyound boundary"
            imageWrapAnimProps={howWeWorkContent[0].imageWrapAnimProps}
          />

          <div className="mt-6 lg:mt-0 lg:w-[50%] p-7 flex items-center justify-center">
            <div>
              <TitleDescription
                styling="overflow-x-hidden"
                title={howWeWorkContent[0].title}
                titleStyle="font-semibold text-xl"
                desc={howWeWorkContent[0].text}
                descStyle="mt-2 text-gray-500 "
                titleAnimProps={howWeWorkContent[0].titleAnimProps}
                descAnimProps={howWeWorkContent[0].descAnimProps}
              />
            </div>
          </div>
        </div>

        <div className="lg:flex items-stretch my-10">
          <ImageWrap
            containerStyle="w-full  overflow-hidden lg:w-[50%] last"
            source={images.boundary}
            imageStyle="size-full object-center object-cover"
            alt="image for beyound boundary"
            imageWrapAnimProps={howWeWorkContent[1].imageWrapAnimProps}
          />

          <div className="mt-6 lg:mt-0 lg:w-[50%] p-7 flex items-center justify-center">
            <div>
              <TitleDescription
                styling="overflow-x-hidden"
                title={howWeWorkContent[1].title}
                titleStyle="font-semibold text-xl"
                desc={howWeWorkContent[1].text}
                descStyle="mt-2 text-gray-500 "
                titleAnimProps={howWeWorkContent[1].titleAnimProps}
                descAnimProps={howWeWorkContent[1].descAnimProps}
              />
              <div>
                {howWeWorkContent[1].values?.map(({ id, title, desc }) => {
                  return (
                    <TitleDescription
                      key={id}
                      title={title}
                      desc={desc}
                      titleStyle="font-medium underline"
                      descStyle="text-sm mt-1"
                      headerNumber={2}
                      styling="my-1"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
