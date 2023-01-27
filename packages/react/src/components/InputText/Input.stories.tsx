import { Meta, Story } from '@storybook/react';
import { InputText as InputTextComponent } from './InputText';

export default {
  title: 'Form/InputText',
  component: InputTextComponent,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
  },
  args: {
    placeholder: 'Placeholder',
  },
} as Meta;

export const InputText: Story<typeof InputTextComponent> = (args) => (
  <InputTextComponent {...args} />
);
