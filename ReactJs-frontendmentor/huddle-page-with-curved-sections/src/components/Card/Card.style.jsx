import styled from 'styled-components';
/*
import {
  bgSectionTopDesktop1,
  bgSectionTopDesktop2,
  bgSectionTopMobile1,
  bgSectionTopMobile2,
  bgSectionBottomDesktop1,
  bgSectionBottomDesktop2,
  bgSectionBottomMobile1,
  bgSectionBottomMobile2,
} from '../../assets/images/Images';
*/

export const CardOne = styled.div`
  display: flex;
  gap: 4rem;

  @media ${({ theme }) => theme.breakPoints.mobile} {
    flex-direction: column-reverse;
  }
`;

export const CardTwo = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 4rem;
  margin: 10rem 0;

  @media ${({ theme }) => theme.breakPoints.mobile} {
    flex-direction: column-reverse;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.VeryDarkCyan};

  h1 {
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
  p {
    font-family: ${({ theme }) => theme.fonts.openSans};
    font-size: 1.2rem;
    font-weight: 400;
  }

  @media ${({ theme }) => theme.breakPoints.mobile} {
    align-items: center;
    h1 {
      font-size: 2rem;
    }
    p {
      text-align: center;
    }
  }
`;
export const ImageContainer = styled.div`
  flex: 1;
  img {
    width: 70%;
  }

  @media ${({ theme }) => theme.breakPoints.mobile} {
    display: flex;
    justify-content: center;
  }
`;
