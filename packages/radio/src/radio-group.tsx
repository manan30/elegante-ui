import React, { useState } from 'react';
import { Radio, RadioProps } from './radio';
import { checkValidChildren } from './utils';

export type RadioGroupProps = RadioProps & {
  placement?: 'horizontal' | 'vertical';
};

export const RadioGroup: React.FC<RadioGroupProps> = ({ children }) => {
  if (!children)
    throw new Error(
      'Cannot render an empty radio group. Please pass <Radio /> components as children'
    );

  const validChildren = checkValidChildren(children, Radio);
  if (!validChildren)
    throw new Error(
      'Only <Radio /> components are valid inside <RadioGroup />'
    );
  return <div>RadioGroup</div>;
};
