import * as React from 'react';
import cn from 'clsx';

export type RadioProps = {
  name: string;
  value: string | number;
  selected?: boolean;
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  radioText?: string;
  onChange?: (name: string, value: string | number, checked?: boolean) => void;
};

export const Radio: React.VFC<RadioProps> = ({
  name,
  value,
  selected,
  disabled,
  error,
  errorText,
  radioText,
  onChange
}) => {
  return (
    <div className='flex flex-col space-y-2'>
      <label htmlFor={name} className='inline-flex items-center space-x-2'>
        <input
          name={name}
          id={name}
          value={value}
          type='radio'
          disabled={disabled}
          checked={selected}
          onChange={(e) => {
            onChange?.(name, value, e.currentTarget.checked);
          }}
          className={cn(
            'rounded-full border-secondary-light text-primary focus:shadow-sm focus:border-primary-light focus:ring-1 focus:ring-offset-1 focus:ring-primary focus:ring-opacity-50 transition-all hover:shadow-sm',
            error && 'text-danger focus:border-danger-light focus:ring-danger',
            disabled && 'opacity-50'
          )}
        />
        {radioText ? (
          <span
            className={cn(
              'text-xs sm:text-sm text-secondary',
              disabled && 'opacity-50'
            )}
          >
            {radioText}
          </span>
        ) : null}
      </label>
      {error ? (
        <span className='font-semibold tracking-wide text-danger-dark text-xxs sm:text-xs'>
          {errorText ?? 'Required'}
        </span>
      ) : null}
    </div>
  );
};
