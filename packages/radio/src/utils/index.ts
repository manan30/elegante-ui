import React from 'react';

export const checkValidChildren = (
  children: React.ReactNode,
  childType?: React.ReactNode
) => {
  return React.Children.toArray(children).every(
    (child) =>
      React.isValidElement(child) &&
      (childType ? child.type === childType : true)
  );
};
