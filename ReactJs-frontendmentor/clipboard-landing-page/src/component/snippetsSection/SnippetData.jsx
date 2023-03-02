import React from 'react';
import { StyledSnippet } from './SnippetData.style';

function SnippetData({ item }) {
  return (
    <StyledSnippet>
      <h3>{item.title}</h3>
      <p>{item.paragraph}</p>
    </StyledSnippet>
  );
}

export default SnippetData;
