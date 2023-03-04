import styled from 'styled-components';

export const StyledWorkflowItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  img {
    width: 25px;
  }
  h2 {
    color: ${(props) => props.theme.colors.DarkGrayishBlue};
    font-size: 2rem;
    padding: 2rem 0;
  }
  p {
    color: ${(props) => props.theme.colors.GrayishBlue};
    font-size: 1.4rem;
    text-align: center;
  }

  @media ${(props) => props.theme.breakPoints.tablet} {
    h2 {
      padding: 1rem 0;
    }
  }
`;
