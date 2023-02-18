import styled from 'styled-components';

export const CTASection = styled.section`
  padding: 3rem 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 4rem 0;

  h1 {
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.VeryDarkCyan};
  }

  @media ${({ theme }) => theme.breakPoints.mobile} {
    padding: 1rem 2rem;
    h1 {
      text-align: center;
    }
  }
`;
