import React from 'react';
import { StyledContent, StyledH1, StyledP } from './Content.style';

function Content({ title, paragraph }) {
  return (
    <StyledContent>
      <StyledH1>{title}</StyledH1>
      <StyledP>{paragraph}</StyledP>
    </StyledContent>
  );
}

export default Content;
