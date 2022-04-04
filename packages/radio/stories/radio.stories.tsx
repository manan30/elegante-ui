import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio as RadioComponent } from '../src';

export default {
  title: 'Radio/Element',
  component: RadioComponent,
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  args: {
    name: 'radio',
    radioText: 'Element',
    disabled: false,
    error: false,
    errorText: 'Required'
  },
  argTypes: {
    name: { control: { type: 'text' } },
    radioText: { control: { type: 'text' } },
    selected: { control: { type: null } },
    disabled: { control: { type: 'boolean' } },
    error: { control: { type: 'boolean' } },
    errorText: { control: { type: 'text' } },
    onChange: { control: { type: null } },
    value: { control: { type: 'text' } }
  }
} as ComponentMeta<typeof RadioComponent>;

const Template: ComponentStory<typeof RadioComponent> = (args) => (
  <RadioComponent {...args} />
);

export const Element = Template.bind({});
