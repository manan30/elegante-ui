import * as React from 'react';
import { Listbox } from '@headlessui/react';
import cn from 'clsx';

export type DropdownOption = {
  text: string;
  unavailable?: boolean;
};

export type DropdownProps = {
  /**
   * label associated with the dropdown
   */
  label?: string;
  /**
   * current selected value
   */
  value?: DropdownOption;
  /**
   * dropdown options
   */
  options: Array<DropdownOption>;
  /**
   * shows spinner when options are being loaded
   */
  isLoading?: boolean;
  /**
   * controls dropdown disabled state
   */
  disabled?: boolean;
  /**
   * placeholder for the dropdown
   */
  placeholder?: string;
  /**
   *
   */
  onChange: (value: DropdownOption) => void;
};

export const Dropdown: React.VFC<DropdownProps> = ({
  value,
  label,
  options,
  disabled,
  isLoading,
  placeholder = 'select a value',
  onChange
}) => {
  return (
    <Listbox value={value} onChange={onChange} disabled={disabled}>
      {label ? (
        <Listbox.Label className='mb-2 text-xs font-semibold tracking-wide text-primary sm:text-sm'>
          {label}
        </Listbox.Label>
      ) : null}
      <Listbox.Button className='relative w-full py-2 pl-3 pr-10 text-xs text-left transition-shadow border rounded-md cursor-default text-secondary border-secondary-light focus:shadow-sm focus:border-primary focus:ring-1 focus:ring-primary hover:shadow-sm focus:outline-none sm:text-sm'>
        <span className='block truncate'>{value?.text ?? placeholder}</span>
        {/* TODO: Extract to spinner component */}
        {isLoading ? (
          <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
            <svg
              viewBox='0 0 38 38'
              xmlns='http://www.w3.org/2000/svg'
              className={cn('animate-spin stroke-current w-4 h-4 text-primary')}
              aria-hidden='true'
            >
              <g fill='none' fillRule='evenodd'>
                <g transform='translate(1 1)' strokeWidth='2'>
                  <circle strokeOpacity='.5' cx='18' cy='18' r='18' />
                  <path d='M36 18c0-9.94-8.06-18-18-18' />
                </g>
              </g>
            </svg>
          </span>
        ) : null}
      </Listbox.Button>
      {/* <Listbox.Options>
        {options.map((person) => (
          <Listbox.Option
            key={person.id}
            value={person}
            disabled={person.unavailable}
          >
            {person.name}
          </Listbox.Option>
        ))}
      </Listbox.Options> */}
    </Listbox>
  );
};
