import React, { forwardRef } from 'react';
import { styled, IconButtonCSS } from '@neon-css/styles';
import { Spinner } from '../Spinner/Spinner';

const StyledIconButton = styled('button', IconButtonCSS);

export type IconButtonProps = React.ComponentProps<typeof StyledIconButton> & {
  icon: React.ReactElement;
  loading?: boolean;
};

export const IconButton = forwardRef<
  React.ElementRef<typeof StyledIconButton>,
  IconButtonProps
>((props, forwardedRef) => {
  return (
    <StyledIconButton ref={forwardedRef} {...props}>
      {props.loading ? <Spinner /> : props.icon}
    </StyledIconButton>
  );
});

IconButton.displayName = 'IconButton';
