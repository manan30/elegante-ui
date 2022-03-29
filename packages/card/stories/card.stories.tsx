import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card as CardComponent } from '../src';

export default {
  title: 'Card',
  component: CardComponent,
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
} as ComponentMeta<typeof CardComponent>;

const Template: ComponentStory<typeof CardComponent> = (args) => (
  <CardComponent {...args}>This is a card</CardComponent>
);

export const Card = Template.bind({});
