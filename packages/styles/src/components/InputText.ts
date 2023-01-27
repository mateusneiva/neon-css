import { css } from '@stitches/react';
import { colors } from '@neon-css/theme';

export const InputTextContainerCSS = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '250px',
  background: colors.grey[800],
  borderRadius: '4px',

  border: `${colors.grey[600]} 1px solid`,
});

export const InputTextCSS = css({
  width: '100%',
  padding: '11px 12px',

  color: colors.white,
  background: 'transparent',

  border: 'none',
  outline: 'none',
});
