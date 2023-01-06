import { css } from '@stitches/react';
import { colors } from '@neon-css/theme';

export const IconButtonCSS = css({
  $$backgroundColor: colors.blue[500],
  $$iconColor: colors.white,
  $$buttonRadius: '5px',

  $$hoverColor: colors.blue[400],
  $$activeColor: colors.blue[400],

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',

  background: '$$backgroundColor',
  borderRadius: '$$buttonRadius',
  border: 'none',

  width: '40px',
  height: '40px',

  color: '$$iconColor',

  cursor: 'pointer',

  '& svg': {
    width: '22px',
    height: '22px',
  },

  '&:hover': {
    background: '$$hoverColor',
  },

  '&:active': {
    background: '$$activeColor',
  },

  variants: {
    variant: {
      outlined: {
        $$backgroundColor: 'transparent',
        $$iconColor: colors.blue[400],
        $$hoverColor: `${colors.blue[400] + '30'}`,
        $$activeColor: `${colors.blue[400] + '50'}`,

        border: `1px ${colors.blue[500]} solid`,
      },

      transparent: {
        $$backgroundColor: 'transparent',
        $$iconColor: colors.blue[400],
        $$hoverColor: `${colors.blue[400] + '30'}`,
        $$activeColor: `${colors.blue[400] + '60'}`,
      },
    },

    shape: {
      rounded: { $$buttonRadius: '5px' },
      circular: { $$buttonRadius: '20px' },
      square: { $$buttonRadius: '0px' },
    },

    size: {
      sm: { $$fontSize: '12px', paddingInline: '15px' },
      lg: { $$fontSize: '14px', paddingInline: '24px' },
    },

    disabled: {
      true: { opacity: '0.3', pointerEvents: 'none' },
    },
  },
});
