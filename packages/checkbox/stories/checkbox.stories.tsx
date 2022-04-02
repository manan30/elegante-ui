import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox as CheckboxComponent } from '../src';

export default {
  title: 'Checkbox',
  component: CheckboxComponent,
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  argTypes: {}
} as ComponentMeta<typeof CheckboxComponent>;

const Template: ComponentStory<typeof CheckboxComponent> = (args) => (
  <CheckboxComponent {...args} />
);

export const Checkbox = Template.bind({});
Checkbox.args = { checkboxText: 'Email me the updates' };
