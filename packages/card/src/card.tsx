import * as React from 'react';
import cn from 'clsx';

type CardProps = {
  /**
   * CSS classes, eg. tailwind
   */
  className?: string;
  /**
   * React CSS style object
   */
  style?: React.CSSProperties;
};

export const Card: React.FC<CardProps> = ({ className, style, children }) => {
  return (
    <div
      className={cn(
        'w-full h-auto p-4 shadow-sm rounded-md bg-slate-50',
        className && className
      )}
      style={style}
    >
      {children}
    </div>
  );
};
