import React from 'react';
import { BodySection, StyledLeftDiv, StyledLeftImageDiv } from './Body.style';
import data from '../../constant/data';
import Content from '../../component/Content/Content';
import Quote from '../../component/Quote/Quote';
import { illustration2 } from '../../assets/images/images';
import { HiArrowCircleRight } from 'react-icons/hi';

function Body() {
  return (
    <BodySection>
      <StyledLeftDiv>
        <Content
          title={data.title.two}
          paragraph={data.paragraph.two}
          paragraph2={data.paragraph.three}
        />
        <a href='#'>
          See how Fylo works <HiArrowCircleRight />
        </a>
        <Quote />
      </StyledLeftDiv>
      <StyledLeftImageDiv>
        <img src={illustration2} alt='illustration' />
      </StyledLeftImageDiv>
    </BodySection>
  );
}

export default Body;
