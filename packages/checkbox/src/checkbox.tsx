import * as React from 'react';

export type CheckboxProps = {
  name: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({ name }) => {
  return (
    <label htmlFor={name} className='flex flex-col w-full space-y-2'>
      <input
        name={name}
        id={name}
        // value={value}
        // type={type}
        // autoComplete={type}
        // disabled={disabled}
        // placeholder={placeholder}
        // onChange={(e) => {
        //   onChange(name, e.target.value);
        // }}
        // className={cn(
        //   'w-full text-xs sm:text-sm text-secondary border border-secondary-light rounded-md focus:shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow hover:shadow-sm block',
        //   error && 'border-danger focus:border-danger focus:ring-danger',
        //   disabled && 'opacity-50'
        // )}
        // {...rest}
      />
      {/* {error ? (
        <span className='font-semibold tracking-wide text-danger-dark text-xxs sm:text-xs'>
          {errorText ?? 'Required'}
        </span>
      ) : null} */}
    </label>
  );
};
