import styled from 'styled-components';

export const StyledButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;

  @media ${(props) => props.theme.breakPoints.mobile} {
    flex-direction: column;
    width: 80vw;
  }
`;

export const StyledButton = styled.button`
  background-color: ${(props) =>
    props.green ? props.theme.colors.StrongCyan : props.theme.colors.LightBlue};
  color: ${(props) => props.theme.colors.White};

  padding: 12px 24px;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1em;
  border-radius: 24px;
  border: 0;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    scale: 1.02;

    box-shadow: ${(props) =>
      props.green
        ? '0px 10px 11px -5px rgba(38, 186, 164, 0.19)'
        : '0px 10px 11px -5px rgba(97,115,255,0.19)'};

    // Box shadow for compatibility in old browsers
    -webkit-box-shadow: ${(props) =>
      props.green
        ? '0px 10px 11px -5px rgba(38, 186, 164, 0.19)'
        : '0px 10px 11px -5px rgba(97,115,255,0.19)'};
    -moz-box-shadow: ${(props) =>
      props.green
        ? '0px 10px 11px -5px rgba(38, 186, 164, 0.19)'
        : '0px 10px 11px -5px rgba(97,115,255,0.19)'};
  }
`;
