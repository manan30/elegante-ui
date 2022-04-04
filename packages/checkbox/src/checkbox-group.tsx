import * as React from 'react';
import cn from 'clsx';
import { Checkbox, CheckboxProps } from './checkbox';
import { checkValidChildren } from './utils';

export type CheckboxGroupProps = Omit<
  CheckboxProps,
  'value' | 'name' | 'checked' | 'checkboxText'
> & {
  /**
   * value to be selected by default
   */
  defaultValue?: CheckboxProps['value'];
  /**
   * checkboxes orientation
   */
  placement?: 'horizontal' | 'vertical';
};

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
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
      'Cannot render an empty checkbox group. Please pass <Checkbox /> components as children'
    );

  const validChildren = checkValidChildren(children, Checkbox);
  if (!validChildren)
    throw new Error(
      'Only <Checkbox /> components are valid inside <CheckboxGroup />'
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
      >
        {React.Children.map(children, (child) => {
          const item = child as React.ReactElement<CheckboxProps>;
          return React.cloneElement(item, {
            disabled: disabled || item.props.disabled,
            checked: value === item.props.value ?? item.props.checked,
            onChange: (
              name: CheckboxProps['name'],
              value: CheckboxProps['value'],
              checked: CheckboxProps['checked']
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
