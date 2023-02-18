import styled from 'styled-components';

import {
  bgFooterTopDesktop,
  bgFooterTopMobile,
} from '../../assets/images/Images';

export const FooterSection = styled.footer`
  display: flex;
  flex-direction: row;
  padding: 3rem 5rem;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.VeryPaleBlue};
  background-color: ${({ theme }) => theme.colors.VeryDarkCyan};
  /* 
  background-image: url('${bgFooterTopDesktop}');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 50px 150px; */

  @media ${({ theme }) => theme.breakPoints.mobile} {
    padding: 1rem 2rem;
    flex-direction: column-reverse;
  }
`;

export const FooterLeft = styled.footer`
  display: flex;
  flex-direction: column;
  width: 250px;
  img {
    width: 150px;
    margin-bottom: 1rem;
    color: white;
  }
  p {
    font-family: ${({ theme }) => theme.fonts.openSans};
    font-weight: 400;
    font-size: 1.2rem;
    display: flex;
    margin: 0.5rem 0;
    span {
      font-size: 1.5rem;
      margin-right: 1rem;
      cursor: pointer;
    }
  }

  @media ${({ theme }) => theme.breakPoints.mobile} {
    padding: 5rem 0;
  }
`;

export const Socials = styled.div`
  display: flex;
  font-size: 1.5rem;
  width: 30%;
  margin-top: 3rem;
  cursor: pointer;
  transition: all 300ms ease-in-out;
`;

export const NewsLetter = styled.div`
  max-width: 400px;
  h2 {
    font-family: ${({ theme }) => theme.fonts.openSans};
    font-size: 2rem;
    font-weight: 400;
  }
  p {
    max-width: 250px;
    font-family: ${({ theme }) => theme.fonts.openSans};
    font-weight: 400;
    font-size: 1.2rem;
    display: flex;
    margin: 0.5rem 0;
  }

  @media ${({ theme }) => theme.breakPoints.mobile} {
    padding-top: 5rem;
    p {
      max-width: 100%;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  margin-top: 2rem;
  @media ${({ theme }) => theme.breakPoints.mobile} {
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const Input = styled.input`
  padding: 0.5rem 1rem;
  margin-right: 2rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.White};
  border: none;

  @media ${({ theme }) => theme.breakPoints.mobile} {
    margin-bottom: 10px;
    margin-right: 0;
    width: 100%;
  }
`;

export const FooterBtn = styled.button`
  padding-right: 2rem;
  padding-left: 2rem;
  background-color: ${({ theme }) => theme.colors.Pink};
  border: none;
  border-radius: 5px;
  color: inherit;
  cursor: pointer;

  @media ${({ theme }) => theme.breakPoints.mobile} {
    padding: 0.5rem 1rem;
    /* width: 100px; */
  }
`;
