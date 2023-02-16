import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: ${({ layout }) => layout || 'row'};
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  h2 {
    font-size: 2.4rem;
    font-family: ${({ theme }) => theme.fonts.openSans};
    color: ${({ theme }) => theme.colors.VeryDarkCyan};
    font-weight: 700;
  }
  p {
    margin-top: 2rem;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.openSans};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.GrayishBlue};
  }

  img {
    width: 80%;
  }

  & > div {
    flex: 1;
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
  }

  @media ${({ theme }) => theme.breakpoints.extraLarge} {
    h2 {
      font-size: 4rem;
    }
    p {
      font-size: 3rem;
    }
  }
`;
