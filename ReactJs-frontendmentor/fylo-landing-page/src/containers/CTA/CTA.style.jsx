import styled from 'styled-components';

export const SectionCTA = styled.section`
  padding: 3rem 5rem;
  background-color: ${(props) => props.theme.colors.DesaturatedBlue};
  color: ${(props) => props.theme.colors.White};

  display: flex;
  gap: 10rem;

  @media ${({ theme }) => theme.breakPoints.mobile} {
    padding: 1.5rem;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const StyledContent = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const StyledH1 = styled.h1`
  font-family: ${(props) => props.theme.fonts.Raleway};
  /* color: ${(props) => props.theme.colors.VeryDarkBlue}; */
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
  /* color: ${(props) => props.theme.colors.VeryDarkBlue}; */
  font-size: 1.4rem;
  margin-top: 2rem;

  @media ${(props) => props.theme.breakPoints.mobile} {
    text-align: center;
    font-size: 1.2rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  input {
    width: 200%;
    padding: 1rem;
    margin-bottom: 2rem;
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

    @media ${(props) => props.theme.breakPoints.mobile} {
      width: 100%;
      margin-bottom: 1rem;
    }
  }
`;
