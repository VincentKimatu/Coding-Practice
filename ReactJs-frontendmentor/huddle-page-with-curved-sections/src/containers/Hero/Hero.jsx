import React from 'react';
import Navbar from '../../components/nav/Navbar';
import Header from '../../components/Header/Header';
import { StyledSection } from './Hero.style';

function Hero() {
  return (
    <StyledSection>
      <Navbar />
      <Header />
    </StyledSection>
  );
}

export default Hero;
