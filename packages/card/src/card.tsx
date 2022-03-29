import * as React from 'react';
import cn from 'clsx';

export type CardProps = {
  /**
   * Shows loading spinner when true
   */
  loading?: boolean;
  /**
   * Supported button variants
   */
  variant?: 'solid' | 'link' | 'outline';
  /**
   * Supported button appearance
   */
  appearance?: 'primary' | 'secondary';
  /**
   * Controls button disabled state
   */
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Card: React.FC<CardProps> = () => {
  return <div></div>;
};
