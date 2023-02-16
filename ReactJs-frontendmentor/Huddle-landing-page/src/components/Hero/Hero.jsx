import React from 'react';
import Button from '../Button/Button';
import { HeroSection, SectionContent, SectionImg } from './Hero.style';
import { mockups } from '../../assets/images/images';

function Hero() {
  return (
    <HeroSection>
      <SectionContent>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <Button />
      </SectionContent>

      <SectionImg>
        <img src={mockups} alt='hero img' />
      </SectionImg>
    </HeroSection>
  );
}

export default Hero;
