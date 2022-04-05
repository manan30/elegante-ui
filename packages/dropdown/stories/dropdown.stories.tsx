import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown as DropdownComponent } from '../src';

export default {
  title: 'Dropdown',
  component: DropdownComponent,
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  argTypes: {},
  decorators: [(Story) => <div className='w-72'>{Story()}</div>]
} as ComponentMeta<typeof DropdownComponent>;

const Template: ComponentStory<typeof DropdownComponent> = (args) => (
  <DropdownComponent {...args} />
);

export const Dropdown = Template.bind({});
Dropdown.args = {
  label: 'Choices',
  options: [{ text: 'Eat' }, { text: 'Sleep', unavailable: true }]
};
