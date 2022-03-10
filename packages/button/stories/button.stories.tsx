import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../src';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  argTypes: {
    appearance: {
      control: {
        type: 'select'
      },
      options: ['primary', 'secondary']
    },
    variant: {
      control: {
        type: 'select'
      },
      options: ['solid', 'link', 'outline']
    }
  },
  decorators: [
    (Story) => (
      <div className='w-24'>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof Button>;

export const Solid: ComponentStory<typeof Button> = () => (
  <Button appearance='primary' variant='solid'>
    Button
  </Button>
);

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
