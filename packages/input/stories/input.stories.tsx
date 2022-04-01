import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input as InputComponent } from '../src';

export default {
  title: 'Input',
  component: InputComponent,
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  decorators: [
    (Story) => (
      <div className='w-48'>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => (
  <InputComponent {...args} />
);

export const Input = Template.bind({});
Input.args = { label: 'Input' };
