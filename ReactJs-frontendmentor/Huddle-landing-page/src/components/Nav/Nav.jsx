import React from 'react';
import { logo } from '../../assets/images/images';
import { StyledNav, StyledBtn } from './Nav.style';

function Nav() {
  return (
    <StyledNav>
      <div>
        <img src={logo} alt='logo' />
      </div>

      <StyledBtn type='button'>Try it free</StyledBtn>
    </StyledNav>
  );
}

export default Nav;
