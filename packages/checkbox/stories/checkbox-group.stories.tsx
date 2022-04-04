import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox, CheckboxGroup } from '../src';

export default {
  title: 'Checkbox/Group',
  component: CheckboxGroup,
  subcomponents: { Checkbox },
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  args: { disabled: false, error: false, errorText: 'Required' },
  argTypes: {
    children: { table: { disable: true } },
    placement: { control: { type: 'select' } },
    defaultValue: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    error: { control: { type: 'boolean' } },
    errorText: { control: { type: 'text' } },
    onChange: { control: { type: null } }
  }
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = (args) => (
  <CheckboxGroup {...args}>
    <Checkbox name='eat' value='eat' checkboxText='Eat' disabled />
    <Checkbox name='sleep' value='sleep' checkboxText='Sleep' />
    <Checkbox name='repeat' value='repeat' checkboxText='Repeat' />
  </CheckboxGroup>
);

export const Group = Template.bind({});
Group.args = {
  placement: 'vertical',
  defaultValue: 'eat'
};
