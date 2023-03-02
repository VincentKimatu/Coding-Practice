import styled from 'styled-components';

export const StyledHeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0 7rem 0;

  h1 {
    font-size: 4rem;
    color: ${(props) => props.theme.colors.DarkGrayishBlue};
    margin: 4rem 0 1rem 0;
  }

  p {
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.GrayishBlue};
    width: 630px;
    text-align: center;
  }

  @media ${(props) => props.theme.breakPoints.mobile} {
    padding: 4rem 1.5rem 6rem 1.5rem;

    h1 {
      text-align: center;
      font-size: 2rem;
    }
    p {
      width: auto;
      font-size: 1.2rem;
    }
  }
`;

export const StyledImage = styled.div`
  width: 80px;

  img {
    width: 100%;
  }

  @media ${(props) => props.theme.breakPoints.mobile} {
    width: 60px;
  }
`;
