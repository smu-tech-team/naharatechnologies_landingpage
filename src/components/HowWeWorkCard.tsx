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
}: {
  imageSetupType: string;
  title: string;
  text: string;
  values?: { id: number; title: string; text: string }[];
}) => {
  return (
    <div className="lg:flex items-stretch my-10">
      <ImageWrap
        containerStyle={`w-full rounded-[8px] overflow-hidden lg:w-[50%] ${imageSetup[imageSetupType]}`}
        source={images.boundary}
        imageStyle="size-full object-center object-cover"
        alt={`image for ${title}`}
      />

      <div className="mt-6 lg:mt-0 lg:w-[50%] p-7 flex items-center justify-center">
        <div>
          <TitleDescription
            styling=""
            title={title}
            titleStyle="text-lg font-bold"
            desc={desc}
            descStyle="mt-2"
          />
          {values && (
            <div>
              <RegularList
                data={values}
                renderItem={TitleDescription}
                keyExtractor={values.map((item) => item.id)}
                styling="my-1"
                titleStyle="font-medium underline"
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
