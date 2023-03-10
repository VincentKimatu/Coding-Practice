import React from 'react';
import { ImageDevice } from '../../assets/images/images';
import { ClipboardSection, StyledImage } from './Clipboard.style';
import SectionData from '../../component/sectionData/SectionData';
import data from '../../constant/data';

function Clipboard() {
  return (
    <ClipboardSection>
      <SectionData title={data.title.two} paragraph={data.paragraph.two} />
      <StyledImage>
        <img src={ImageDevice} alt='mobile and tablet device' />
      </StyledImage>
    </ClipboardSection>
  );
}

export default Clipboard;
