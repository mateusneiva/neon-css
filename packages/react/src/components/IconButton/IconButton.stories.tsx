import { IconButton, IconButtonProps } from './IconButton';
import { Alarm, Plus, IdentificationBadge } from 'phosphor-react';
import { Meta, Story } from '@storybook/react';

const iconArgType = {
  options: ['Plus', 'Alarm', 'IdentificationBadge'],
  mapping: {
    noIcon: null,
    Plus: <Plus />,
    Alarm: <Alarm />,
    IdentificationBadge: <IdentificationBadge />,
  },
  control: {
    type: 'select',
  },
};

export default {
  title: 'Form/IconButton',
  component: IconButton,
  argTypes: {
    css: { table: { disable: true } },

    icon: iconArgType,

    variant: {
      options: ['contained', 'outlined', 'transparent'],
      control: { type: 'inline-radio' },
    },

    shape: {
      options: ['rounded', 'circular', 'square'],
      control: { type: 'inline-radio' },
    },

    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },

    disabled: { type: 'boolean' },
    loading: { type: 'boolean' },
  },
  args: {
    icon: 'Plus',
    variant: 'contained',
    shape: 'rounded',
    size: 'md',
    disabled: false,
    loading: false,
  },
} as Meta;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const Contained = Template.bind({});
Contained.args = { variant: 'contained' };

export const Outlined = Template.bind({});
Outlined.args = { variant: 'outlined' };

export const Transparent = Template.bind({});
Transparent.args = { variant: 'transparent' };
