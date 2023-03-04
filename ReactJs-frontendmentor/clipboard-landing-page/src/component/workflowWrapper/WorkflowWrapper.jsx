import React from 'react';
import { StyledWorkflowItem } from './WorkflowWrapper.style';

function WorkflowWrapper({ item, id }) {
  return (
    <StyledWorkflowItem key={id}>
      <img src={item.icon} alt='' />
      <h2>{item.title} </h2>
      <p>{item.paragraph} </p>
    </StyledWorkflowItem>
  );
}

export default WorkflowWrapper;
