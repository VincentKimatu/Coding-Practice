import styled from 'styled-components';

export const CardsSection = styled.section`
  padding: 3rem 5rem;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.breakPoints.extraLarge} {
    max-width: 1440px;
  }

  @media ${({ theme }) => theme.breakPoints.mobile} {
    padding: 1rem 2rem;
  }
`;
