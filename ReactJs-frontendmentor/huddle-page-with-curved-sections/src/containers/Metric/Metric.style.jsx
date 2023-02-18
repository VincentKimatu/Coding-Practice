import styled from 'styled-components';

export const MetricsSection = styled.section`
  padding: 3rem 5rem;
  display: flex;
  justify-content: space-around;

  @media ${({ theme }) => theme.breakPoints.mobile} {
    padding: 1rem 2rem;
    flex-direction: column;
    align-items: center;
  }
`;

export const MetricsSectionCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.VeryDarkCyan};

  div {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.Pink};
  }
  h1 {
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 3rem;
    font-weight: 600;
  }
  p {
    font-family: ${({ theme }) => theme.fonts.openSans};
    font-size: 1.2rem;
    font-weight: 400;
  }
`;
