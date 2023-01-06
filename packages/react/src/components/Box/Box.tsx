import { styled, BoxCSS } from '@neon-css/styles';

const StyledBox = styled('div', BoxCSS);

export function Box() {
  return <StyledBox style={{ width: '350px', height: '350px' }}></StyledBox>;
}
