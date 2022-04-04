import * as React from 'react';
import cn from 'clsx';

export type CheckboxProps = {
  /**
   * checkbox name
   */
  name: string;
  /**
   * checkbox value
   */
  value: string | number;
  /**
   * represents if checkbox is checked
   */
  checked?: boolean;
  /**
   * controls disabled state for checkbox
   */
  disabled?: boolean;
  /**
   * show error
   */
  error?: boolean;
  /**
   * error text to be shown
   */
  errorText?: string;
  /**
   * text that can accompany checkbox
   */
  checkboxText?: string;
  /**
   * checkbox change handler
   */
  onChange?: (name: string, value: string | number, checked?: boolean) => void;
  /**
   * CSS classes, eg. tailwind
   */
  className?: string;
  /**
   * React CSS style object
   */
  style?: React.CSSProperties;
};

export const Checkbox: React.VFC<CheckboxProps> = ({
  name,
  value,
  checked,
  disabled,
  error,
  errorText,
  checkboxText,
  onChange,
  ...rest
}) => {
  return (
    <div className='flex flex-col space-y-2' {...rest}>
      <label htmlFor={name} className='inline-flex items-center space-x-2'>
        <input
          name={name}
          id={name}
          value={value}
          type='checkbox'
          disabled={disabled}
          checked={checked}
          onChange={(e) => {
            onChange?.(name, value, e.currentTarget.checked);
          }}
          className={cn(
            'rounded border-secondary-light text-primary focus:shadow-sm focus:border-primary-light focus:ring-1 focus:ring-offset-1 focus:ring-primary focus:ring-opacity-50 transition-all hover:shadow-sm',
            error && 'text-danger focus:border-danger-light focus:ring-danger',
            disabled && 'opacity-50'
          )}
        />
        {checkboxText ? (
          <span
            className={cn(
              'text-xs sm:text-sm text-secondary',
              disabled && 'opacity-50'
            )}
          >
            {checkboxText}
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
