import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from '../src';

export default {
  title: 'Radio/Element',
  component: Radio,
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  args: {
    name: 'radio',
    radioText: 'Element',
    disabled: false,
    error: false,
    errorText: 'Required',
    value: 'element'
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
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Element = Template.bind({});
