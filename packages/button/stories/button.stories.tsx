import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../src';

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => (
  <Button appearance='primary' variant='solid'>
    Button
  </Button>
);

export const Secondary: ComponentStory<typeof Button> = () => (
  <Button appearance='secondary' variant='link'>
    Button
  </Button>
);
