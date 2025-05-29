import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

const ImageWrap = ({
  source,
  containerStyle,
  imageStyle,
  alt,
  ...props
}: {
  source: string | StaticImport;
  containerStyle: string;
  imageStyle: string;
  alt: string;
}) => {
  return (
    <div className={containerStyle}>
      <Image src={source} alt={alt} className={imageStyle} {...props} />
    </div>
  );
};

export default ImageWrap;
