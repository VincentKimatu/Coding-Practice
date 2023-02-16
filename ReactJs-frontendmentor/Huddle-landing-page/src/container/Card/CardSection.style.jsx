import styled from 'styled-components';

export const StyledCardSection = styled.div`
  padding: 3rem 5rem;
  background-color: ${({ theme }) => theme.colors.White};

  @media ${({ theme }) => theme.breakpoints.mobile} {
    padding: 1rem 2rem;
  }
`;
