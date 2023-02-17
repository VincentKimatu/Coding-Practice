import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const LogoDiv = styled.div`
  width: 200px;
  img {
    size: 100%;
  }

  @media ${({ theme }) => theme.breakPoints.mobile} {
    width: 150px;
  }
`;

export const StyledBtn = styled.button`
  padding: 10px 40px;
  color: ${({ theme }) => theme.colors.Pink};
  border: 2px solid ${({ theme }) => theme.colors.Pink};
  background-color: ${({ theme }) => theme.colors.White};
  border-radius: 30px;
  font-family: ${({ theme }) => theme.fonts.openSans};
  font-size: 1.4rem;
  font-weight: 600;
  transition: all 300ms ease-in-out;
  &:hover {
    opacity: 0.6;
  }

  @media ${({ theme }) => theme.breakPoints.mobile} {
    padding: 5px 20px;
    border-radius: 20px;
  }
`;
