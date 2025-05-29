import React from "react";

const RegularList = ({
  data,
  renderItem: Component,
  keyExtractor = [],
  ...props
}: {
  data: any[];
  renderItem: React.FC<any>;
  keyExtractor?: (number | string)[];
}) => {
  return (
    <>
      {data.map((item, index) => (
        <Component
          key={keyExtractor[index] ?? index}
          {...{ ...item, ...props }}
        />
      ))}
    </>
  );
};

export default RegularList;
