import styled from 'styled-components';

export const StyledQuoteDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 30rem;
  padding: 2rem;
  border-radius: 3px;
  font-family: ${(props) => props.theme.fonts.openSans};
  color: ${(props) => props.theme.colors.VeryDarkBlue};
  background-color: ${({ theme }) => theme.colors.White};

  box-shadow: 0px 0px 5px -2px rgba(7, 4, 57, 0.31);
  -webkit-box-shadow: 0px 0px 5px -2px rgba(7, 4, 57, 0.31);
  -moz-box-shadow: 0px 0px 5px -2px rgba(7, 4, 57, 0.31);

  svg {
    color: ${(props) => props.theme.colors.VeryDarkBlue};
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1.2rem;
  }

  @media ${({ theme }) => theme.breakPoints.mobile} {
    width: 28rem;
  }
`;

export const StyledFigure = styled.figure`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const StyledCaption = styled.figcaption`
  p:first-child {
    font-family: ${(props) => props.theme.fonts.Raleway};
    font-weight: 700;
  }
  p:nth-child(2) {
    color: ${(props) => props.theme.colors.DesaturatedBlue};
    font-size: 1rem;
  }
`;

export const StyledImageDiv = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.5rem;
  img {
    width: 100%;
  }
`;
