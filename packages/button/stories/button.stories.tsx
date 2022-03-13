import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../src';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  decorators: [
    (Story) => (
      <div className='w-24'>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Solid = Template.bind({});
Solid.args = {
  appearance: 'primary'
};

export const Outline: ComponentStory<typeof Button> = () => (
  <Button appearance='primary' variant='outline'>
    Button
  </Button>
);

export const Link: ComponentStory<typeof Button> = () => (
  <Button appearance='primary' variant='link'>
    Button
  </Button>
);
