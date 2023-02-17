import React from 'react';
import Btn from '../Button/Btn';
import { StyledHeader, StyledImgDiv } from './Header.style';
import { screenMockups } from '../../assets/images/Images';

function Header() {
  return (
    <StyledHeader>
      <h1>Build The Community Your Fans Will Love</h1>
      <p>
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.{' '}
      </p>
      <Btn />

      <StyledImgDiv>
        <img src={screenMockups} alt='Mock up of 2 screens' />
      </StyledImgDiv>
    </StyledHeader>
  );
}

export default Header;
