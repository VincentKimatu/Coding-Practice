import styled from 'styled-components';

export const HeroSection = styled.div`
  display: flex;
  gap: 3rem;
  margin: 3rem 0;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
  }
`;

export const SectionContent = styled.div`
  flex: 0.8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-family: ${({ theme }) => theme.fonts.openSans};
    font-weight: 700;
    font-size: 3rem;
    line-height: 1.3;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.openSans};
    font-weight: 400;
    font-size: 1.8rem;
    margin: 3rem 0 2rem 0;
  }

  @media ${({ theme }) => theme.breakpoints.extraLarge} {
    h1 {
      font-size: 7rem;
    }

    p {
      font-size: 4rem;
    }
  }
  @media ${({ theme }) => theme.breakpoints.mobile} {
    h1 {
      font-size: 2.4rem;
    }

    p {
      font-size: 1.4rem;
    }
  }
`;

export const SectionImg = styled.div`
  flex: 1;
`;
