import styled from 'styled-components';

export const StyledHero = styled.section`
  margin-top: 5rem;
  display: flex;
  div {
    flex: 0.6;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media ${(props) => props.theme.breakPoints.mobile} {
    flex-direction: column-reverse;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  position: relative;
  input {
    width: 70%;
    padding-left: 1rem;
    margin-right: 1rem;
    border: 1px solid ${(props) => props.theme.colors.VeryDarkBlue};
    border-radius: 3px;
    outline: none;

    font-family: ${(props) => props.theme.fonts.openSans};
    font-weight: 400;

    &:focus {
      border: 1px solid ${(props) => props.theme.colors.VeryDarkBlue};
    }

    &:invalid {
      border: 1px solid ${(props) => props.theme.colors.Invalid};
    }

    @media ${(props) => props.theme.breakPoints.laptop} {
      width: 50%;
    }

    @media ${(props) => props.theme.breakPoints.mobile} {
      width: 100%;
      padding: 0.7rem;
      margin-bottom: 2rem;
    }
  }
  @media ${(props) => props.theme.breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const StyledIcon = styled.div`
  position: absolute;
  text-align: center;
`;

export const StyledImage = styled.div`
  flex: 0.6;
  img {
    width: 80%;
  }
`;
