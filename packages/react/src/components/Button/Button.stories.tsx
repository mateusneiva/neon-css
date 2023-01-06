import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Alarm, IdentificationBadge } from 'phosphor-react';

import { Button, ButtonProps } from './Button';

const iconArgType = {
  options: ['noIcon', 'Alarm', 'IdentificationBadge'],
  mapping: {
    noIcon: null,
    Alarm: <Alarm size={20} />,
    IdentificationBadge: <IdentificationBadge size={20} />,
  },
  control: {
    type: 'select',
    labels: {
      noIcon: 'No Icon',
    },
  },
};

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    css: { table: { disable: true } },
    children: { type: 'string' },

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
    full: { type: 'boolean' },

    leftIcon: iconArgType,
    rightIcon: iconArgType,
  },
  args: {
    children: 'label',
    variant: 'contained',
    shape: 'rounded',
    size: 'md',
    disabled: false,
    full: false,
    loading: false,
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = { variant: 'contained' };

export const Outlined = Template.bind({});
Outlined.args = { variant: 'outlined' };

export const Transparent = Template.bind({});
Transparent.args = { variant: 'transparent' };
