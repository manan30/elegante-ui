import React from 'react';

type ButtonProps = {
  loading?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  loading,
  children
}) => {
  return (
    <button
      className='grid w-full px-4 py-2 transition-all rounded-md place-items-center bg-primary text-gray-50 hover:shadow-md hover:bg-primary-dark'
      type={type}
    >
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
