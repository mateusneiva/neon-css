import { Meta, Story } from '@storybook/react';
import { Checkbox as CheckboxComponent } from './Checkbox';

export default {
  title: 'Form/Checkbox',
  component: CheckboxComponent,
  argTypes: {
    css: { table: { disable: true } },
    label: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
  },
  args: {
    label: 'Accept terms and conditions.',
    value: 'accept',
  },
} as Meta;

export const Checkbox: Story = (args) => <CheckboxComponent {...args} />;
