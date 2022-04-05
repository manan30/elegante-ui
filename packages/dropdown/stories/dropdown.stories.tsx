import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown as DropdownComponent } from '../src';

export default {
  title: 'Dropdown',
  component: DropdownComponent,
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
} as ComponentMeta<typeof DropdownComponent>;

const Template: ComponentStory<typeof DropdownComponent> = (args) => (
  <DropdownComponent {...args} />
);

export const Dropdown = Template.bind({});
Dropdown.args = {
  label: 'Choices',
  options: [
    { text: 'Eat' },
    { text: 'Sleep', unavailable: true },
    { text: 'Repeat' }
  ]
};
