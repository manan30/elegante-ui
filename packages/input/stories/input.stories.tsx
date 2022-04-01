import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input as InputComponent } from '../src';

export default {
  title: 'Input',
  component: InputComponent,
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  argTypes: {
    type: { table: { disable: true } },
    value: { table: { disable: true } },
    placeholder: { defaultValue: 'Input', control: { type: 'text' } },
    disabled: {
      defaultValue: false,
      type: 'boolean'
    },
    error: {
      defaultValue: false,
      type: 'boolean'
    },
    errorText: { defaultValue: 'Required', control: { type: 'text' } },
    hideLabel: {
      defaultValue: false,
      type: 'boolean'
    },
    onChange: { table: { disable: true } }
  },
  decorators: [(Story) => <div className='w-48'>{Story()}</div>]
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => (
  <InputComponent {...args} />
);

export const Text = Template.bind({});
Text.args = { label: 'Text', name: 'text', type: 'text' };

export const Date = Template.bind({});
Date.args = { label: 'Date', name: 'date', type: 'date' };

export const Email = Template.bind({});
Email.args = { label: 'Email', name: 'email', type: 'email' };

export const Number = Template.bind({});
Number.args = { label: 'Number', name: 'number', type: 'number' };

export const Password = Template.bind({});
Password.args = { label: 'Password', name: 'password', type: 'password' };

export const Tel = Template.bind({});
Tel.args = { label: 'Tel', name: 'tel', type: 'tel' };
