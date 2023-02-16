import styled from 'styled-components';

export const StyledCTABtn = styled.button`
  font-size: 1.4rem;
  padding: 10px 5px;
  background-color: ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.White};
  border-radius: 20px;
  border: none;
  cursor: pointer;
  width: 200px;
  transition: scale 300ms ease-in-out;
  &:hover {
    scale: 1.05;
  }

  @media ${({ theme }) => theme.breakpoints.extraLarge} {
    font-size: 3rem;
    width: 400px;
  }
`;
