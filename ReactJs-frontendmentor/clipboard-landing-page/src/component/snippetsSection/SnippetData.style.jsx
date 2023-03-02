import styled from 'styled-components';

export const StyledSnippet = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.DarkGrayishBlue};
    margin-top: 3rem;
  }

  p {
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.GrayishBlue};
    line-height: 2rem;
  }

  @media ${(props) => props.theme.breakPoints.mobile} {
    h3 {
      text-align: center;
    }

    p {
      text-align: center;
    }
  }
`;
