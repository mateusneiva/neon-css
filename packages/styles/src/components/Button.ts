import { css } from '@stitches/react';
import { colors } from '@neon-css/theme';

export const ButtonLoadingCSS = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  height: '100%',
  position: 'absolute',
  zIndex: '99',

  background: '$$backgroundColor',
  borderRadius: '$$buttonRadius',
  border: 'none',
});

export const ButtonLabelCSS = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5px',

  fontSize: '$$fontSize',
  fontWeight: '600',
  textTransform: 'uppercase',
  textDecoration: 'none',

  color: '$$labelColor',

  visibility: '$$labelVisibility',
});

export const ButtonCSS = css({
  $$backgroundColor: colors.blue[500],
  $$labelColor: colors.white,
  $$buttonRadius: '5px',

  $$hoverColor: colors.blue[400],
  $$activeColor: colors.blue[400],
  $$fontSize: '14px',

  $$labelVisibility: 'visible',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',

  border: 'none',
  borderRadius: '$$buttonRadius',
  background: '$$backgroundColor',

  paddingInline: '25px',
  height: '40px',

  cursor: 'pointer',

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
        $$labelColor: colors.blue[400],
        $$hoverColor: `${colors.blue[400] + '30'}`,
        $$activeColor: `${colors.blue[400] + '50'}`,

        border: `1px ${colors.blue[500]} solid`,
      },

      transparent: {
        $$backgroundColor: 'transparent',
        $$labelColor: colors.blue[400],
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

    full: {
      true: { width: '100%' },
    },

    disabled: {
      true: { opacity: '0.3', pointerEvents: 'none' },
    },

    loading: {
      true: { $$labelVisibility: 'hidden' },
    },
  },
});
