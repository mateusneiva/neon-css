import React from 'react';
import { styled, InputTextContainerCSS, InputTextCSS } from '@neon-css/styles';

const StyledContainer = styled('div', InputTextContainerCSS);
const StyledInput = styled('input', InputTextCSS);

export type InputTextProps = React.ComponentProps<typeof StyledInput> & {
  placeholder?: string;
};

export const InputText = (props: InputTextProps) => {
  return (
    <StyledContainer>
      <StyledInput type="text" {...props} />
    </StyledContainer>
  );
};
