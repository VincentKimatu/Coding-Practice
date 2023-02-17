import styled from 'styled-components';

export const StyledHeader = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.VeryDarkCyan};
    text-align: center;
  }
  p {
    font-family: ${({ theme }) => theme.fonts.openSans};
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.VeryDarkCyan};
    max-width: 400px;
    text-align: center;
    margin: 2rem 0 4rem 0;
  }

  @media ${({ theme }) => theme.breakPoints.mobile} {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
      /* width: 375px; */
    }
  }
`;

export const StyledImgDiv = styled.div`
  width: 70vw;
  margin-top: 7rem;
  img {
    width: 100%;
  }

  @media ${({ theme }) => theme.breakPoints.extraLarge} {
    width: 1400px;
  }
`;
