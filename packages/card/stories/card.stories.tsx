import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card as CardComponent } from '../src';

export default {
  title: 'Card',
  component: CardComponent,
  parameters: {
    controls: { hideNoControlsWarning: true, expanded: true }
  },
  argTypes: {
    className: {
      control: false
    },
    style: {
      control: { type: 'object' }
    },
    children: {
      control: false
    }
  },
  decorators: [
    (Story) => (
      <div className='w-1/3'>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof CardComponent>;

const Template: ComponentStory<typeof CardComponent> = (args) => (
  <CardComponent {...args}>
    Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero&apos;s
    1st-century BC text
  </CardComponent>
);

export const Card = Template.bind({});
