import React from 'react';
import { ImageComputer } from '../../assets/images/images';
import data from '../../constant/data';
import SectionData from '../../component/sectionData/SectionData';
import {
  ImageContainer,
  PropertiesContainer,
  StyledSnippetsContainer,
  StyledSnippetsSection,
} from './Snippets.style';
import { snippets } from '../../constant/content';
import SnippetData from '../../component/snippetsSection/SnippetData';

function Snippets() {
  return (
    <StyledSnippetsSection>
      <SectionData title={data.title.one} paragraph={data.paragraph.one} />
      <StyledSnippetsContainer>
        <ImageContainer>
          <img src={ImageComputer} alt='Computer' />
        </ImageContainer>
        <PropertiesContainer>
          {snippets.map((item, id) => (
            <SnippetData item={item} key={id} />
          ))}
        </PropertiesContainer>
      </StyledSnippetsContainer>
    </StyledSnippetsSection>
  );
}

export default Snippets;
