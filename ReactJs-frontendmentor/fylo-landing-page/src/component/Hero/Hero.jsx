import React from 'react';
import { StyledForm, StyledHero, StyledImage } from './Hero.style';
import data from '../../constant/data';
import Content from '../Content/Content';
import { illustration1 } from '../../assets/images/images';
import Button from '../Button/Button';

function Hero() {
  return (
    <StyledHero>
      <div>
        <Content title={data.title.one} paragraph={data.paragraph.one} />
        <StyledForm>
          <input
            data-error='Email is required in you@domain.com'
            type='email'
            id='email'
            placeholder='Enter your email...'
          />
          <Button text={'Get Started'} />
        </StyledForm>
      </div>
      <StyledImage>
        <img src={illustration1} alt='illustration' />
      </StyledImage>
    </StyledHero>
  );
}

export default Hero;
