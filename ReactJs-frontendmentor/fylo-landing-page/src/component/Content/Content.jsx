import React from 'react';
import { StyledContent, StyledH1, StyledP } from './Content.style';

function Content({ title, paragraph, paragraph2 }) {
  return (
    <StyledContent>
      <StyledH1>{title}</StyledH1>
      <StyledP>{paragraph}</StyledP>

      {paragraph2 ? (
        <StyledP>{paragraph2}</StyledP>
      ) : (
        <StyledP>{paragraph2}</StyledP>
      )}
    </StyledContent>
  );
}

export default Content;
