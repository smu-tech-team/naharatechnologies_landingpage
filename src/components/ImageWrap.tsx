"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ImageWrap = ({
  source,
  containerStyle,
  imageStyle,
  alt,
  imageWrapAnimProps,
  ...props
}: {
  source: string | StaticImport;
  containerStyle: string;
  imageStyle: string;
  imageWrapAnimProps?: any;
  alt: string;
}) => {
  return (
    <motion.div {...imageWrapAnimProps} className={containerStyle}>
      <Image src={source} alt={alt} className={imageStyle} {...props} />
    </motion.div>
  );
};

export default ImageWrap;
