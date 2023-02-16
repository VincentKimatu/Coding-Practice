import React from 'react';
import { StyledCardSection } from './CardSection.style';
import content from '../../assets/card-content/card-content';
import Card from '../../components/Card/Card';

function CardSection() {
  return (
    <StyledCardSection>
      {content.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </StyledCardSection>
  );
}

export default CardSection;
