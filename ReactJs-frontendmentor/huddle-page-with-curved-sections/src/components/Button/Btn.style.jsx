import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 30px;
  background-color: ${({ theme }) => theme.colors.Pink};
  border: none;
  border-radius: 30px;

  font-family: ${({ theme }) => theme.fonts.openSans};
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.White};
  transition: all 300ms ease-in-out;
  &:hover {
    opacity: 0.6;
  }
`;
