import React from 'react';
import data from '../../constant/data';
import SectionData from '../../component/sectionData/SectionData';

import { StyledWrapper, WorkflowSection } from './Workflow.style';
import { workflow } from '../../constant/content';
import WorkflowWrapper from '../../component/workflowWrapper/WorkflowWrapper';

function Workflow() {
  return (
    <WorkflowSection>
      <SectionData title={data.title.three} paragraph={data.paragraph.three} />

      <StyledWrapper>
        {workflow.map((item, id) => (
          <WorkflowWrapper item={item} key={id} />
        ))}
      </StyledWrapper>
    </WorkflowSection>
  );
}

export default Workflow;
