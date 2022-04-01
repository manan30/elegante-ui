import * as React from 'react';
import cn from 'clsx';
import type { InputType } from './types';

export type InputProps = {
  name: string;
  label: string;
  value: string;
  type?: InputType;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  hideLabel?: boolean;
  onChange: (name: string, value: string) => void;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input: React.FC<InputProps> = ({
  name,
  label,
  value,
  type = 'text',
  placeholder,
  disabled = false,
  error = false,
  errorText,
  hideLabel,
  onChange,
  ...rest
}) => {
  return (
    <label htmlFor={name} className='flex flex-col w-full space-y-2'>
      <span
        className={cn(
          'text-xs font-semibold tracking-wide text-primary sm:text-sm',
          hideLabel && 'hidden'
        )}
      >
        {label}
      </span>
      <input
        name={name}
        id={name}
        value={value}
        type={type}
        autoComplete={type}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(name, e.target.value);
        }}
        className={cn(
          'w-full text-xs sm:text-sm text-secondary border border-secondary-light rounded-md shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow hover:shadow-sm',
          error && 'border-danger focus:border-danger focus:ring-danger',
          disabled && 'opacity-50'
        )}
        {...rest}
      />
      {error ? (
        <span className='font-semibold tracking-wide text-danger-dark text-xxs sm:text-xs'>
          {errorText ?? 'Required'}
        </span>
      ) : null}
    </label>
  );
};
