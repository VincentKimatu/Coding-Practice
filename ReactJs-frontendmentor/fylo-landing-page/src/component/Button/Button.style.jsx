import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.BrightBlue};
  color: ${(props) => props.theme.colors.LightGrayishBlue};
  font-family: ${(props) => props.theme.fonts.openSans};
  font-weight: 400;
  padding: 1rem 3rem;
  border: none;
  border-radius: 3px;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
