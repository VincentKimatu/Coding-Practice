import React from 'react';
import { logo } from '../../assets/images/Images';
import { LogoDiv, StyledBtn, StyledNav } from './Navbar.style';

function Nav() {
  return (
    <StyledNav>
      <LogoDiv>
        <img src={logo} alt='Logo' />
      </LogoDiv>
      <StyledBtn type='submit'>Try it Free</StyledBtn>
    </StyledNav>
  );
}

export default Nav;
