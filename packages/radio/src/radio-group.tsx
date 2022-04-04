import * as React from 'react';
import cn from 'clsx';
import { Radio, RadioProps } from './radio';
import { checkValidChildren } from './utils';

export type RadioGroupProps = Omit<
  RadioProps,
  'value' | 'name' | 'selected' | 'radioText'
> & {
  /**
   * value to be selected by default
   */
  defaultValue?: RadioProps['value'];
  /**
   * radio buttons orientation
   */
  placement?: 'horizontal' | 'vertical';
};

export const RadioGroup: React.FC<RadioGroupProps> = ({
  placement = 'horizontal',
  disabled,
  defaultValue,
  error,
  errorText,
  onChange,
  children
}) => {
  if (!children)
    throw new Error(
      'Cannot render an empty radio group. Please pass <Radio /> components as children'
    );

  const validChildren = checkValidChildren(children, Radio);
  if (!validChildren)
    throw new Error(
      'Only <Radio /> components are valid inside <RadioGroup />'
    );

  const [value, setValue] = React.useState(defaultValue ?? null);

  React.useEffect(() => {
    setValue(defaultValue ?? null);
  }, [defaultValue]);

  return (
    <div className='flex flex-col space-y-2'>
      <div
        className={cn(
          'flex',
          placement === 'vertical' ? 'flex-col space-y-2' : 'flex-row space-x-2'
        )}
        role='radiogroup'
      >
        {React.Children.map(children, (child) => {
          const item = child as React.ReactElement<RadioProps>;
          return React.cloneElement(item, {
            disabled: disabled || item.props.disabled,
            selected: value === item.props.value ?? item.props.selected,
            onChange: (
              name: RadioProps['name'],
              value: RadioProps['value'],
              checked: RadioProps['selected']
            ) => {
              setValue(value);
              onChange?.(name, value, checked);
            }
          });
        })}
      </div>
      {error ? (
        <span className='font-semibold tracking-wide text-danger-dark text-xxs sm:text-xs'>
          {errorText ?? 'Required'}
        </span>
      ) : null}
    </div>
  );
};
