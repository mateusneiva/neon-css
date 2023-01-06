import React, { forwardRef } from 'react';
import {
  styled,
  ButtonCSS,
  ButtonLoadingCSS,
  ButtonLabelCSS,
} from '@neon-css/styles';

import { Spinner } from '../Spinner/Spinner';

const StyledButton = styled('button', ButtonCSS);
const ButtonLoading = styled('span', ButtonLoadingCSS);
const ButtonLabel = styled('span', ButtonLabelCSS);

export type ButtonProps = React.ComponentProps<typeof StyledButton> & {
  loading?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
};

export const Button = forwardRef<
  React.ElementRef<typeof StyledButton>,
  ButtonProps
>((props, forwardedRef) => {
  return (
    <StyledButton ref={forwardedRef} {...props}>
      {props.loading && (
        <ButtonLoading>
          <Spinner />
        </ButtonLoading>
      )}

      <ButtonLabel>
        {props.leftIcon}
        <span>{props.children}</span>
        {props.rightIcon}
      </ButtonLabel>
    </StyledButton>
  );
});

Button.displayName = 'Button';
