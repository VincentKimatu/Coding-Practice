import React from 'react';
import { StyledSectionData } from './SectionData.style';

function SectionData({ title, paragraph }) {
  return (
    <StyledSectionData>
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </StyledSectionData>
  );
}

export default SectionData;
