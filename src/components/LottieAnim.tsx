"use client"

import React from "react";
import Lottie from "lottie-react";

const LottieAnim = ({
  styling,
  lottieFile,
  animClass,
}: {
  styling: string;
  lottieFile: any;
  animClass?: string;
}) => {
  return (
    <div className={styling}>
      <Lottie animationData={lottieFile} className={animClass} />
    </div>
  );
};

export default LottieAnim;
