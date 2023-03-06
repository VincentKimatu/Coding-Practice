import React from 'react';
import {
  BrandContainer,
  ImageContainer,
  StyledBrandSection,
} from './Brands.style';
import brands from '../../constant/brands';

function Brands() {
  return (
    <StyledBrandSection>
      <BrandContainer>
        {brands.map((item, id) => (
          <ImageContainer key={id}>
            <img src={item.logo} key={id} alt='logo' />
          </ImageContainer>
        ))}
      </BrandContainer>
    </StyledBrandSection>
  );
}

export default Brands;
