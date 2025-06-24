import React from "react";
import TitleDescription from "./TitleDescription";
import ImageWrap from "./ImageWrap";
import { images } from "@/constants";
import RegularList from "./RegularList";

const imageSetup: { [key: string]: string } = {
  first: "",
  last: "order-last",
};

const HowWeWorkCard = ({
  imageSetupType,
  title,
  text: desc,
  values,
  imageWrapAnimProps,
  containerAnimProps,
  titleAnimProps,
  descAnimProps,
}: HowWeWorkCardProps) => {
  return (
    <div className="lg:flex items-stretch my-10">
      <ImageWrap
        containerStyle={`w-full  overflow-hidden lg:w-[50%] ${imageSetup[imageSetupType]}`}
        source={images.boundary}
        imageStyle="size-full object-center object-cover"
        alt={`image for ${title}`}
        imageWrapAnimProps={imageWrapAnimProps}
      />

      <div className="mt-6 lg:mt-0 lg:w-[50%] p-7 flex items-center justify-center">
        <div>
          <TitleDescription
            styling="overflow-x-hidden"
            title={title}
            titleStyle="font-semibold text-xl"
            desc={desc} 
            descStyle="mt-2 text-gray-500 "
            containerAnimProps={containerAnimProps}
            titleAnimProps={titleAnimProps}
            descAnimProps={descAnimProps}
          />
          {values && (
            <div>
              <RegularList
                data={values}
                renderItem={TitleDescription}
                keyExtractor={values.map((item) => item.id)}
                styling="my-1"
                titleStyle="font-medium underline"
                descStyle="text-sm mt-1"
                headerNumber={2}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HowWeWorkCard;
