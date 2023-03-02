import styled from 'styled-components';

export const StyledSectionData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.DarkGrayishBlue};
    padding-bottom: 1rem;
  }

  p {
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.GrayishBlue};
    width: 630px;
    text-align: center;
  }

  @media ${(props) => props.theme.breakPoints.mobile} {
    h1 {
      text-align: center;
      font-size: 1.6rem;
    }
    p {
      width: auto;
      font-size: 1.2rem;
    }
  }
`;
