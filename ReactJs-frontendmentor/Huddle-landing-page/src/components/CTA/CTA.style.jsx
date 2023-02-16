import styled from 'styled-components';

export const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 15vw -7rem 15vw;
  padding: 4rem;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 2;
  h1 {
    margin-bottom: 2rem;
    font-size: 2.4rem;
    font-family: ${({ theme }) => theme.fonts.openSans};
    color: ${({ theme }) => theme.colors.VeryDarkCyan};
  }

  @media ${({ theme }) => theme.breakpoints.extraLarge} {
    h1 {
      font-size: 4rem;
    }
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    margin: 3rem 5vw -7rem 5vw;
  }
`;
