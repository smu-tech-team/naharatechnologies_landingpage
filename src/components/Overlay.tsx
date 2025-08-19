import React from "react";

const Overlay = ({
  styling,
  children,
}: {
  styling: string;
  children: React.ReactNode;
}) => {
  return <div className={`absolute ${styling}`}>{children}</div>;
};

export default Overlay;
