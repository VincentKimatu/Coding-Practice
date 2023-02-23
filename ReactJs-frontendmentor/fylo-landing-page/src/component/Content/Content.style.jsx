import styled from 'styled-components';

export const StyledContent = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const StyledH1 = styled.h1`
  font-family: ${(props) => props.theme.fonts.Raleway};
  color: ${(props) => props.theme.colors.VeryDarkBlue};
  font-weight: 700;
  font-size: 3rem;
  line-height: 1.3;

  @media ${(props) => props.theme.breakPoints.mobile} {
    text-align: center;
    font-size: 2rem;
    margin-top: 3rem;
  }
`;

export const StyledP = styled.p`
  font-family: ${(props) => props.theme.fonts.openSans};
  color: ${(props) => props.theme.colors.VeryDarkBlue};
  font-size: 1.4rem;
  margin-top: 2rem;

  @media ${(props) => props.theme.breakPoints.mobile} {
    text-align: center;
    font-size: 1.2rem;
  }
`;
