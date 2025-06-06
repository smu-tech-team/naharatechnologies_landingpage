import React from "react";

const RegularList = ({
  data,
  renderItem: Component,
  keyExtractor = [],
  ...props
}: RegularListProps) => {
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
