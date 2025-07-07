import React from "react";

const RegularList = <T,>({
  data,
  renderItem: Component,
  keyExtractor = [],
  ...props
}: RegularListProps<T>) => {
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
