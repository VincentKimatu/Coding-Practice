import React from 'react';
import Button from '../../component/Button/Button';
import {
  SectionCTA,
  StyledContent,
  StyledForm,
  StyledH1,
  StyledP,
} from './CTA.style';

function CTA() {
  return (
    <SectionCTA>
      <StyledContent>
        <StyledH1>Get early access today</StyledH1>
        <StyledP>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </StyledP>
      </StyledContent>
      <StyledForm>
        <input
          data-error='Please check your email'
          type='email'
          id='email'
          placeholder='Enter your email...'
        />
        <Button text='Get Started For Free' />
      </StyledForm>
    </SectionCTA>
  );
}

export default CTA;
