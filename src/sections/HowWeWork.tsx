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
