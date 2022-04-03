import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio as RadioComponent } from '../src';

export default {
  title: 'Radio',
  component: RadioComponent,
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
    onChange: { control: { type: null } }
  }
} as ComponentMeta<typeof RadioComponent>;

const Template: ComponentStory<typeof RadioComponent> = (args) => (
  <RadioComponent {...args} />
);

export const Radio = Template.bind({});
Radio.args = {
  value: 'Radio'
};
