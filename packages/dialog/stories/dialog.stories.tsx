import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dialog } from '../src';

export default {
  title: 'Dialog',
  component: Dialog
} as ComponentMeta<typeof Dialog>;

export const Primary: ComponentStory<typeof Dialog> = () => <Dialog />;
