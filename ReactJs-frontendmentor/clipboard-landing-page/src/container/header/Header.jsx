import React from 'react';
import { Logo } from '../../assets/images/images';
import { StyledHeaderSection, StyledImage } from './Header.style';
import Button from '../../component/button/Button';

function Header() {
  return (
    <StyledHeaderSection>
      <StyledImage>
        <img src={Logo} alt='Logo' />
      </StyledImage>
      <h1>A history of everything you copy</h1>
      <p>
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <Button />
    </StyledHeaderSection>
  );
}

export default Header;
