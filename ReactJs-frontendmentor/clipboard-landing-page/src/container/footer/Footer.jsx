import React from 'react';
import { Logo } from '../../assets/images/images';
import { ImFacebook2, ImTwitter } from 'react-icons/im';
import { SiInstagram } from 'react-icons/si';
import { SocialsWrapper, StyledFooter, StyledLinks } from './Footer.style';

function Footer() {
  return (
    <StyledFooter>
      <img src={Logo} alt='logo' />

      <StyledLinks>
        <div>
          <li>FAQs</li>
          <li>Contact Us</li>
        </div>
        <div>
          <li>Privacy Policy</li>
          <li>Press Kit</li>
        </div>
        <li>Install Guide</li>
      </StyledLinks>

      <SocialsWrapper>
        <div>
          <ImFacebook2 />
        </div>
        <div>
          <ImTwitter />
        </div>
        <div>
          <SiInstagram />
        </div>
      </SocialsWrapper>
    </StyledFooter>
  );
}

export default Footer;
