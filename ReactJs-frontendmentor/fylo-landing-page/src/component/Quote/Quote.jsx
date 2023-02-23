import React from 'react';
import data from '../../constant/data';
import { ImQuotesLeft } from 'react-icons/im';
import {
  StyledCaption,
  StyledFigure,
  StyledImageDiv,
  StyledQuoteDiv,
} from './Quote.style';
import { AvatarTestimonial } from '../../assets/images/images';

function Quote() {
  return (
    <StyledQuoteDiv>
      <div>
        <ImQuotesLeft />
      </div>
      <p>{data.quote}</p>

      <StyledFigure>
        <StyledImageDiv>
          <img src={AvatarTestimonial} alt='' />
        </StyledImageDiv>

        <StyledCaption>
          <p>Kyle Burton</p>
          <p>Founder & CEO, Huddle</p>
        </StyledCaption>
      </StyledFigure>
    </StyledQuoteDiv>
  );
}

export default Quote;
