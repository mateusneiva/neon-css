import React, { forwardRef } from 'react';
import { styled, SpinnerCSS } from '@neon-css/styles';

const StyledSpinner = styled('span', SpinnerCSS);

export type SpinnerProps = React.ComponentProps<typeof StyledSpinner>;

export const Spinner = forwardRef<
  React.ElementRef<typeof StyledSpinner>,
  SpinnerProps
>(({ size, ...props }, forwardedRef) => {
  return <StyledSpinner size={size} ref={forwardedRef} {...props} />;
});

Spinner.displayName = 'Spinner';
