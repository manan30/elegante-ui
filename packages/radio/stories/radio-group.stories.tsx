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
  <RadioGroupComponent {...args}></RadioGroupComponent>
);

export const RadioGroup = Template.bind({});
