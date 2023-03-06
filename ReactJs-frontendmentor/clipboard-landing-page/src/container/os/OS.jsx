import React from 'react';
import data from '../../constant/data';
import Button from '../../component/button/Button';
import SectionData from '../../component/sectionData/SectionData';
import { StyledOSSection } from './OS.style';

function OS() {
  return (
    <StyledOSSection>
      <SectionData title={data.title.four} paragraph={data.paragraph.four} />
      <Button />
    </StyledOSSection>
  );
}

export default OS;
