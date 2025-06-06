import CoreValueRow from "@/components/CoreValueRow";
import TitleDescription from "@/components/TitleDescription";
import { coreValues } from "@/constants";
import React from "react";

const CoreValues = () => {
  return (
    <div className="px-6 py-10 lg:px-[105px]">
      <div className="relative">
        <TitleDescription
          title="💡 Our Core Values"
          titleStyle="text-2xl font-semibold lg:font-medium text-center lg:text-left"
          desc="Our core values serve as the foundation of our team."
          descStyle="font-semibold mt-2 hidden lg:block text-4xl"
          headerNumber={2}
        />

        <div className="">
          {coreValues.map((coreValue, index) => {
            let styling = "justify-between";
            if (index === 1) styling = "justify-around";
            if (index === 2) styling = "justify-center gap-x-10";

            return (
              <CoreValueRow key={index} values={coreValue} styling={styling} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
