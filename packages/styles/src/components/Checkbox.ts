import { css } from '@stitches/react';
import { colors } from '@neon-css/theme';

export const CheckboxCSS = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const CheckboxIconCSS = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '20px',
  height: '20px',
  background: colors.white,

  borderRadius: '3px',
  border: 'none',

  cursor: 'pointer',

  '& svg': {
    fill: colors.grey[100],
  },
});

export const CheckboxLabelCSS = css({
  fontSize: '15px',
  fontWeight: 400,
  paddingLeft: '12px',

  color: colors.white,

  cursor: 'pointer',
});
