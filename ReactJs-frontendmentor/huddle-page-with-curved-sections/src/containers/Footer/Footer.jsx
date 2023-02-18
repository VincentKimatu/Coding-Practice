import React from 'react';
import { logo } from '../../assets/images/Images';
import {
  FooterBtn,
  FooterLeft,
  FooterSection,
  Form,
  Input,
  NewsLetter,
  Socials,
} from './Footer.style';

import { MdPhoneInTalk, MdEmail } from 'react-icons/md';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';

function Footer() {
  return (
    <FooterSection>
      <FooterLeft>
        <img src={logo} alt='logo' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
          quam, hendrerit lacinia vestibulum a, ultrices quis sem.
        </p>
        <p>
          <span>
            <MdPhoneInTalk />
          </span>
          Phone:+1-23-567-896
        </p>
        <p>
          <span>
            <MdEmail />
          </span>
          example@email.com
        </p>

        <Socials>
          <FaFacebookSquare />
          <SiInstagram />
          <FaTwitterSquare />
        </Socials>
      </FooterLeft>

      <NewsLetter>
        <h2>NEWSLETTER</h2>
        <p>
          To receive tips on how to grow your community, sign up to our weekly
          newsletter. We'll never send you spam or pass on your email address
        </p>

        <Form action='post'>
          <Input type='text' placeholder='Enter Your Email' />
          <FooterBtn for='text'>Subscribe</FooterBtn>
        </Form>
      </NewsLetter>
    </FooterSection>
  );
}

export default Footer;
