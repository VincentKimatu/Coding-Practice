import React from 'react';
import { StyledButton, StyledButtonContainer } from './Button.style';

function Button() {
  return (
    <StyledButtonContainer>
      <StyledButton green>Download for iOS</StyledButton>
      <StyledButton blue>Download for Mac</StyledButton>
    </StyledButtonContainer>
  );
}

export default Button;
