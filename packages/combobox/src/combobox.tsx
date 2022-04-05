import * as React from 'react';
import { Combobox as HUICombobox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import cn from 'clsx';
import { uid } from './utils';

export type ComboboxOption = {
  id?: string;
  text: string;
  unavailable?: boolean;
};

export type ComboboxProps = {
  /**
   * label associated with the dropdown
   */
  label?: string;
  /**
   * current selected value
   */
  value?: ComboboxOption;
  /**
   * dropdown options
   */
  options: Array<ComboboxOption>;
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
   * combobox change handler
   */
  onChange: (value?: ComboboxOption) => void;
};

export const Combobox: React.VFC<ComboboxProps> = ({
  value,
  label,
  options,
  disabled = false,
  isLoading = false,
  placeholder = 'search for a value',
  onChange
}) => {
  if (!options || !options.length)
    throw new Error(
      'Please provide an options array to the <Combobox /> component'
    );
  const [_value, _setValue] = React.useState(value);

  React.useEffect(() => {
    _setValue(value);
  }, [value]);

  const _onChange = React.useCallback(
    (currentValue: ComboboxProps['value']) => {
      _setValue(currentValue);
      onChange?.(currentValue);
    },
    [onChange, _setValue]
  );

  return (
    <HUICombobox value={_value} onChange={_onChange} disabled={disabled}>
      <div className='relative flex flex-col space-y-2'>
        {label ? (
          <HUICombobox.Label className='text-xs font-semibold tracking-wide text-primary sm:text-sm'>
            {label}
          </HUICombobox.Label>
        ) : null}
        <div className='relative w-full py-2 pl-3 pr-10 text-xs text-left transition-shadow border rounded-md cursor-default text-primary border-secondary-light focus:shadow-sm focus:border-primary focus:ring-1 focus:ring-primary hover:shadow-sm focus:outline-none sm:text-sm form-select'>
          <HUICombobox.Input
            className='w-full py-2 pl-3 pr-10 text-sm leading-5 border-none text-secondary focus:ring-0'
            onChange={() => {}}
            // displayValue={(option) => option.text}
            // onChange={(event) => setQuery(event.target.value)}
          />
          <HUICombobox.Button
            className='absolute inset-y-0 right-0 flex items-center pr-2'
            disabled={isLoading}
          >
            {isLoading ? (
              <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                <svg
                  viewBox='0 0 38 38'
                  xmlns='http://www.w3.org/2000/svg'
                  className={cn(
                    'animate-spin stroke-current w-4 h-4 text-primary'
                  )}
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
            ) : (
              <SelectorIcon className='w-4 h-4 text-secondary' />
            )}
          </HUICombobox.Button>
        </div>
      </div>
      <Transition
        as={React.Fragment}
        leave='transition ease-in duration-100'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
        // afterLeave={() => setQuery('')}
      >
        <HUICombobox.Options className='w-full py-1 mt-1 overflow-auto text-xs bg-white rounded-md shadow-sm max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
          {options.map((option) => (
            <HUICombobox.Option
              key={option?.id ?? uid()}
              value={option}
              disabled={option.unavailable}
              className='relative cursor-default select-none'
            >
              {({ selected, disabled, active }) => (
                <>
                  <span
                    className={cn(
                      'block truncate py-2 pl-10 pr-4',
                      selected
                        ? 'font-medium text-primary-dark'
                        : 'font-normal text-secondary',
                      disabled && 'opacity-50',
                      active
                        ? 'text-primary-dark bg-primary-light'
                        : 'text-secondary'
                    )}
                  >
                    {option.text}
                  </span>
                  {selected ? (
                    <span className='absolute inset-y-0 left-0 flex items-center pl-2 text-primary'>
                      <CheckIcon className='w-4 h-4' aria-hidden='true' />
                    </span>
                  ) : null}
                </>
              )}
            </HUICombobox.Option>
          ))}
        </HUICombobox.Options>
      </Transition>
    </HUICombobox>
  );
};
