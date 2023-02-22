import React from 'react';
import Hero from '../../component/Hero/Hero';
import Navbar from '../../component/Navbar/Navbar';
import { HeaderSection } from './Header.style';

function Header() {
  return (
    <HeaderSection>
      <Navbar />
      <Hero />
    </HeaderSection>
  );
}

export default Header;
