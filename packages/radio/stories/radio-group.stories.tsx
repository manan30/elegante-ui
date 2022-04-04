import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio, RadioGroup } from '../src';

export default {
  title: 'Radio/Group',
  component: RadioGroup,
  subcomponents: { Radio },
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
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args}>
    <Radio name='eat' value='eat' radioText='Eat' disabled />
    <Radio name='sleep' value='sleep' radioText='Sleep' />
    <Radio name='repeat' value='repeat' radioText='Repeat' />
  </RadioGroup>
);

export const Group = Template.bind({});
Group.args = {
  placement: 'vertical',
  defaultValue: 'eat'
};
