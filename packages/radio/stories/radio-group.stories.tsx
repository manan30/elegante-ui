import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio, RadioGroup as RadioGroupComponent } from '../src';

export default {
  title: 'RadioGroup',
  component: RadioGroupComponent,
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  argTypes: {
    name: { defaultValue: 'radio' },
    radioText: {
      defaultValue: 'This is a radio',
      control: { type: 'text' }
    },
    selected: { control: { type: null } },
    disabled: { control: { type: 'boolean' }, defaultValue: false },
    error: { control: { type: 'boolean' }, defaultValue: false },
    errorText: { defaultValue: 'Required', control: { type: 'text' } },
    onChange: { control: { type: null } },
    value: { control: { type: 'text' } }
  }
} as ComponentMeta<typeof RadioGroupComponent>;

const Template: ComponentStory<typeof RadioGroupComponent> = (args) => (
  <RadioGroupComponent {...args}>
    <Radio name='abcd' value='abcd' radioText='B1' disabled />
    <Radio name='abcd1' value='abcd1' radioText='B2' />
    <Radio name='abcd2' value='abcd2' radioText='B3' />
  </RadioGroupComponent>
);

export const RadioGroup = Template.bind({});
Template.args = {
  placement: 'vertical'
};
