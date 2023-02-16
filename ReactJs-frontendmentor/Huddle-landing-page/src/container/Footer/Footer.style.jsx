import styled from 'styled-components';

export const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.colors.VeryDarkCyan};
  position: relative;
  padding: 120px 50px 50px 50px;
  bottom: 0;
  z-index: 1;
  color: ${({ theme }) => theme.colors.VeryPaleCyan};
  display: flex;
  flex-direction: column;
  p {
    font-size: 1.2rem;
    padding: 0.5rem 0;
    display: flex;
    justify-content: flex-end;
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    padding: 120px 30px 30px 30px;
  }
`;

export const LogoContainer = styled.div`
  width: 180px;
  display: flex;
  margin-bottom: 20px;
  h1 {
    font-family: ${({ theme }) => theme.fonts.openSans};
    color: ${({ theme }) => theme.colors.White};
    font-weight: 700;
    font-size: 3rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > ul {
    flex: 1;
    li {
      list-style: none;
      font-size: 1.6rem;
      padding: 0.5rem 1rem 0.5rem 0;
    }
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
    & > ul {
      margin: 2rem;
    }
  }
`;
