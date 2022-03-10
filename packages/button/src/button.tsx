import React from 'react';
import cn from 'clsx';

type ButtonProps = {
  loading?: boolean;
  className?: string;
  variant?: 'solid' | 'link' | 'outline';
  appearance?: 'primary' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  loading,
  disabled,
  variant = 'solid',
  appearance = 'primary',
  className: classes,
  children
}) => {
  const baseClasses =
    'grid w-full px-4 py-2 transition-all rounded-md place-items-center';

  const variantClasses = (() => {
    const baseSolidVariantClasses =
      'text-gray-50 hover:shadow-md focus:outline-none focus:ring-1 focus:ring-offset-1 focus:shadow-md';

    const baseLinkVariantClasses =
      'hover:underline focus:outline-none focus:underline bg-white';

    const baseOutlineVariantClasses =
      'hover:shadow-md focus:outline-none focus:shadow-md border border-solid';

    switch (variant) {
      case 'solid':
        return (
          `${baseSolidVariantClasses} ` +
          (appearance === 'primary'
            ? 'bg-primary focus:ring-primary-dark hover:bg-primary-dark focus:bg-primary-dark'
            : 'bg-secondary focus:ring-secondary-dark hover:bg-secondary-dark focus:bg-secondary-dark')
        );
      case 'link':
        return (
          `${baseLinkVariantClasses} ` +
          (appearance === 'primary' ? 'text-primary' : 'text-secondary')
        );
      case 'outline':
        return (
          `${baseOutlineVariantClasses} ` +
          (appearance === 'primary'
            ? 'text-primary border-primary'
            : 'text-secondary border-secondary')
        );
    }
  })();

  const classNames = cn(
    baseClasses,
    variantClasses,
    disabled && 'opacity-50 cursor-default',
    classes && classes
  );

  return (
    <button className={classNames} type={type} disabled={disabled}>
      <div className='flex items-center space-x-2'>
        {loading ? (
          <svg
            className='w-4 h-4 text-gray-50 animate-spin'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            ></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            ></path>
          </svg>
        ) : null}
        <div>{children}</div>
      </div>
    </button>
  );
};
