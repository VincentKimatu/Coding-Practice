import React from 'react';
import SocialIcons from '../../components/SocialIcons/SocialIcon';
import { FooterSection, InfoContainer, LogoContainer } from './Footer.style';

function Footer() {
  return (
    <FooterSection>
      <LogoContainer>
        <h1>Huddle</h1>
      </LogoContainer>

      <InfoContainer>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </li>
          <li>+1-543-123-4567</li>
          <li>example@huddle.com</li>
        </ul>

        <ul>
          <li>About Us</li>
          <li>What We Do</li>
          <li>FAQ</li>
        </ul>

        <ul>
          <li>Career</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>

        <SocialIcons />
      </InfoContainer>
      <p>&copy; 2021 Huddle. All rights reserved</p>
    </FooterSection>
  );
}

export default Footer;
