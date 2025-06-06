import HowWeWorkCard from "@/components/HowWeWorkCard";
import RegularList from "@/components/RegularList";
import TitleDescription from "@/components/TitleDescription";
import { howWeWorkContent } from "@/constants";
import React from "react";

const HowWeWork = () => {
  return (
    <div className="px-6 py-10 lg:px-[105px]">
      <TitleDescription
        title="How We Work At Nahara Technologies"
        titleStyle="text-2xl font-semibold lg:font-medium text-center lg:text-left"
        desc="Blending skill and technology to deliver smart, reliable solutions."
        descStyle="font-semibold mt-2 hidden lg:block text-4xl"
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
