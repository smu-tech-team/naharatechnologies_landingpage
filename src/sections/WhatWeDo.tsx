import TitleDescription from "@/components/TitleDescription";
import { whatWeDo } from "@/constants";
import React from "react";

const WhatWeDo = () => {
  return (
    <div className="bg-white px-6 py-10 lg:pt-[67px] lg:px-[105px]">
      <TitleDescription
        title="What We Do"
        titleStyle="text-2xl font-semibold lg:font-medium text-center lg:text-left"
        headerNumber={2}
        desc="We provide the Perfect Solution to your business growth"
        descStyle="font-semibold mt-2 hidden lg:block text-4xl"
      />

      <div className="lg:flex justify-between gap-x-3 mt-10">
        {whatWeDo.map((item) => {
          return (
            <article
              key={item.id}
              className="border border-[#FEECEA] rounded-3xl shadow-md px-5 py-6 my-5 lg:my-0 flex-1"
            >
              <div className="size-10 lg:size-20 rounded-xl bg-[#FEECEA]/50" />

              <TitleDescription
                styling="mt-[15px]"
                title={item.title}
                desc={item.text}
                titleStyle="font-semibold text-lg lg:text-2xl"
                descStyle="text-[15px] lg:text-base mt-2"
              />
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default WhatWeDo;
