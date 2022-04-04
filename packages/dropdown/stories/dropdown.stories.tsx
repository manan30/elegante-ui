import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from '../src';

export default {
  title: 'Button',
  component: Dropdown,
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  argTypes: {
    loading: { defaultValue: false, type: 'boolean' },
    appearance: {
      defaultValue: 'primary',
      control: { type: 'select' }
    },
    variant: {
      defaultValue: 'solid',
      control: { type: 'select' }
    },
    disabled: {
      defaultValue: false,
      type: 'boolean'
    },
    onClick: { action: 'Clicked', table: { disable: true } }
  },
  decorators: [(Story) => <div className='w-24'>{Story()}</div>]
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args}>Button</Dropdown>
);

export const Solid = Template.bind({});
Solid.args = {
  variant: 'solid'
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline'
};

export const Link = Template.bind({});
Link.args = {
  variant: 'link'
};
