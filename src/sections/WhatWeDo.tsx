"use client";

import TitleDescription from "@/components/TitleDescription";
import { whatWeDo } from "@/constants";
import React from "react";
import { motion } from "framer-motion";

const titleDescContainer = {
  hidden: { opacity: 0, transition: { when: "afterChildren" } },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.6 },
  },
};

const title = {
  hidden: { x: 200 },
  visible: { x: 0 },
};

const desc = {
  hidden: { x: -200, opacity: [0] },
  visible: { x: 0, opacity: [0, 0.25, 0.5, 0.75, 1.0] },
};

const WhatWeDo = () => {
  return (
    <div className="bg-white px-6 py-10 lg:pt-[67px] lg:px-[105px]">
      <TitleDescription
        title="What We Do"
        titleStyle="text-2xl font-semibold lg:font-medium text-center lg:text-left"
        headerNumber={2}
        desc="We provide the Perfect Solution to your business growth"
        descStyle="font-semibold mt-2 hidden lg:block text-4xl"
        containerAnimProps={{
          initial: "hidden",
          variants: titleDescContainer,
          whileInView: "visible",
        }}
        titleAnimProps={{ variants: title }}
        descAnimProps={{ variants: desc }}
      />

      <motion.div
        className="lg:flex justify-between gap-x-3 mt-10"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { when: "beforeChildren", staggerChildren: 0.25 },
          },
        }}
        initial="hidden"
        whileInView="visible"
      >
        {whatWeDo.map((item, index) => {
          return (
            <motion.article
              key={item.id}
              className="border border-[#FEECEA] rounded-3xl shadow-md px-5 py-6 my-5 lg:my-0 flex-1"
              variants={{
                hidden: { opacity: 0, y: index % 2 === 0 ? -100 : 100 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <motion.div
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: [1.5, 1] },
                }}
                className="size-10 lg:size-20 rounded-xl bg-[#FEECEA]/50"
              />

              <TitleDescription
                styling="mt-[15px]"
                title={item.title}
                desc={item.text}
                titleStyle="font-semibold text-lg"
                descStyle="mt-2"
              />
            </motion.article>
          );
        })}
      </motion.div>
    </div>
  );
};

export default WhatWeDo;
