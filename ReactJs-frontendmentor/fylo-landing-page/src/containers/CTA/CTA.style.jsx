import styled from 'styled-components';

export const SectionCTA = styled.section`
  padding: 3rem 5rem;

  @media ${({ theme }) => theme.breakPoints.mobile} {
    padding: 1.5rem;
  }
`;
