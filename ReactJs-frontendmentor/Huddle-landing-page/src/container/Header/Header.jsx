import React from 'react';
import Nav from '../../components/Nav/Nav';
import Hero from '../../components/Hero/Hero';
import { StyledSection } from './Header.style';

function Header() {
  return (
    <StyledSection>
      <Nav />
      <Hero />
    </StyledSection>
  );
}

export default Header;
