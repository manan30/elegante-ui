import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox as CheckboxComponent } from '../src';

export default {
  title: 'Checkbox',
  component: CheckboxComponent,
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  argTypes: {
    name: { defaultValue: 'checkbox' },
    checkboxText: {
      defaultValue: 'This is a checkbox',
      control: { type: 'text' }
    },
    checked: { control: { type: null } },
    disabled: { control: { type: 'boolean' }, defaultValue: false },
    error: { control: { type: 'boolean' }, defaultValue: false },
    errorText: { defaultValue: 'Required', control: { type: 'text' } },
    onChange: { control: { type: null } }
  }
} as ComponentMeta<typeof CheckboxComponent>;

const Template: ComponentStory<typeof CheckboxComponent> = (args) => (
  <CheckboxComponent {...args} />
);

export const Checkbox = Template.bind({});
