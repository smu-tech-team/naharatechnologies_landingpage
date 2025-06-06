"use client"

import React from "react";
import Lottie from "lottie-react";

const LottieAnim = ({
  styling,
  lottieFile,
}: {
  styling: string;
  lottieFile: any;
}) => {
  return (
    <div className={styling}>
      <Lottie animationData={lottieFile} className="" />
    </div>
  );
};

export default LottieAnim;
