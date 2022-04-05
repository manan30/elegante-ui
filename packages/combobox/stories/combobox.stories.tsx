import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Combobox as ComboboxComponent } from '../src';

export default {
  title: 'Combobox',
  component: ComboboxComponent,
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  args: {
    disabled: false,
    isLoading: false,
    placeholder: 'select a value'
  },
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    isLoading: { control: { type: 'boolean' } },
    label: { control: { type: 'text' } },
    onChange: { control: { type: 'null' } },
    placeholder: { control: { type: 'text' } },
    value: { control: { type: null } }
  },
  decorators: [(Story) => <div className='w-72'>{Story()}</div>]
} as ComponentMeta<typeof ComboboxComponent>;

const Template: ComponentStory<typeof ComboboxComponent> = (args) => (
  <ComboboxComponent {...args} />
);

export const Combobox = Template.bind({});
Combobox.args = {
  label: 'Choices',
  options: [
    { text: 'Eat' },
    { text: 'Sleep', unavailable: true },
    { text: 'Repeat' }
  ]
};
