import React from 'react';
import { logo } from '../../assets/images/images';
import { BsFillTelephoneFill, BsTwitter, BsInstagram } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import {
  SectionFooter,
  StyledContact,
  StyledFooter,
  StyledIconContainer,
  StyledUL,
} from './Footer.style';

function Footer() {
  return (
    <SectionFooter>
      <img src={logo} alt='logo' />
      <StyledFooter>
        <StyledContact>
          <p>
            <BsFillTelephoneFill /> Phone: +1-234-567-895
          </p>
          <p>
            <IoIosMail /> example@fylo.com
          </p>
        </StyledContact>
        <StyledUL>
          <li>About Us</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </StyledUL>
        <StyledUL>
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </StyledUL>
        <StyledIconContainer>
          <div>
            <FaFacebookF />
          </div>
          <div>
            <BsTwitter />
          </div>
          <div>
            <BsInstagram />
          </div>
        </StyledIconContainer>
      </StyledFooter>
    </SectionFooter>
  );
}

export default Footer;
