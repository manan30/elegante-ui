import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from '../src';

export default {
  title: 'Checkbox/Element',
  component: Checkbox,
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  args: {
    name: 'checkbox',
    checkboxText: 'Vaccinated',
    disabled: false,
    error: false,
    errorText: 'Required'
  },
  argTypes: {
    name: { control: { text: 'text' } },
    checkboxText: { control: { type: 'text' } },
    checked: { control: { type: null } },
    disabled: { control: { type: 'boolean' } },
    error: { control: { type: 'boolean' } },
    errorText: { control: { type: 'text' } },
    onChange: { control: { type: null } },
    value: { control: { type: 'text' } }
  }
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Element = Template.bind({});
Element.args = {
  value: 'vaccinated'
};
