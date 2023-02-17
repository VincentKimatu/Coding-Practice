import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 3rem 5rem;

  @media ${({ theme }) => theme.breakPoints.mobile} {
    padding: 1rem 2rem;
  }
`;
