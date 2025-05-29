import HowWeWorkCard from "@/components/HowWeWorkCard";
import RegularList from "@/components/RegularList";
import TitleDescription from "@/components/TitleDescription";
import { howWeWorkContent } from "@/constants";
import React from "react";

const HowWeWork = () => {
  return (
    <div className="px-6 py-10 lg:px-[105px]">
      <TitleDescription
        styling=""
        title="How We Work At Nahara Technologies"
        titleStyle="text-2xl font-semibold lg:font-medium text-center lg:text-left"
        desc="Blending skill and technology to deliver smart, reliable solutions."
        descStyle="font-semibold mt-2 hidden lg:block text-4xl"
        headerNumber={2}
      />

      <div className="mt-10">
        <RegularList
          data={howWeWorkContent}
          renderItem={HowWeWorkCard}
          keyExtractor={howWeWorkContent.map((item) => item.id)}
        />
      </div>
    </div>
  );
};

export default HowWeWork;
