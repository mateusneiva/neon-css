import { css, keyframes } from '@stitches/react';
import { colors } from '@neon-css/theme';

const Spin = keyframes({
  to: {
    transform: 'rotate(360deg)',
  },
});

export const SpinnerCSS = css({
  $$baseColor: colors.neutral[50],

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '16px',
  height: '16px',

  border: `2px solid $$baseColor`,
  borderTopColor: 'transparent',
  borderRadius: '50%',

  animation: `${Spin} 600ms linear 0s infinite`,

  '&::before': {
    content: '',
    position: 'absolute',
    width: '100%',
    height: '100%',

    border: `2px solid $$baseColor`,
    borderRadius: '50%',
    opacity: '0.5',
  },

  variants: {
    size: {
      sm: {
        width: '12px',
        height: '12px',
      },
      lg: {
        width: '24px',
        height: '24px',
      },
      xl: {
        width: '32px',
        height: '32px',
      },
    },
  },
});
