import React, { useState, forwardRef } from 'react';
import { Check } from 'phosphor-react';
import {
  styled,
  CheckboxCSS,
  CheckboxIconCSS,
  CheckboxLabelCSS,
} from '@neon-css/styles';
import { colors } from '@neon-css/theme';

export const StyledCheckbox = styled('div', CheckboxCSS);
export const CheckboxIcon = styled('button', CheckboxIconCSS);
export const CheckboxLabel = styled('label', CheckboxLabelCSS);

export type CheckboxProps = React.ComponentProps<typeof StyledCheckbox> & {
  label?: string;
  value?: string;
};

export const Checkbox = forwardRef<
  React.ElementRef<typeof StyledCheckbox>,
  CheckboxProps
>((props, forwardedRef) => {
  const [isChecked, setIsChecked] = useState<boolean>();

  return (
    <StyledCheckbox
      onClick={() => setIsChecked(isChecked ? false : true)}
      ref={forwardedRef}
      {...props}
    >
      <CheckboxIcon>
        <input
          type="checkbox"
          checked={isChecked}
          value={props.value}
          style={{ display: 'none' }}
        />

        {isChecked && <Check size={18} color={colors.grey[900]} />}
      </CheckboxIcon>
      <CheckboxLabel>{props.label}</CheckboxLabel>
    </StyledCheckbox>
  );
});
