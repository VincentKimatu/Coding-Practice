import React from 'react';
import { logo } from '../../assets/images/images';
import { StyledNav, StyledSingInBtn, StyledUl } from './Navbar.style';

function Navbar() {
  return (
    <StyledNav>
      <div>
        <img src={logo} alt='logo' />
      </div>
      <StyledUl>
        <li>
          <a href='features'>Features</a>
        </li>
        <li>
          <a href='team'>Team</a>
        </li>
        <StyledSingInBtn>Sign In</StyledSingInBtn>
      </StyledUl>
    </StyledNav>
  );
}

export default Navbar;
