import React from "react";

const TitleDescription = ({
  styling,
  title,
  titleStyle,
  desc,
  descStyle,
  headerNumber,
}: {
  styling?: string;
  title: string | React.ReactNode;
  titleStyle: string;
  desc?: string;
  descStyle?: string;
  headerNumber?: number;
}) => {
  const displayTitle = () => {
    switch (headerNumber) {
      case 2:
        return <h2 className={titleStyle}>{title}</h2>;
      case 3:
        return <h3 className={titleStyle}>{title}</h3>;
      default:
        return <h1 className={titleStyle}>{title}</h1>;
    }
  };

  return (
    <div className={styling}>
      {displayTitle()}
      <p className={descStyle}>{desc}</p>
    </div>
  );
};

export default TitleDescription;
