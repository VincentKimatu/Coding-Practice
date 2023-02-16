import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  /* margin: 3rem; */

  div {
    width: 180px;

    img {
      width: 100%;
    }
  }

  @media ${({ theme }) => theme.breakpoints.extraLarge} {
    div {
      width: 400px;
    }
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
    align-items: center;

    div {
      width: 150px;
    }
  }
`;

export const StyledBtn = styled.button`
  font-size: 1.6rem;
  padding: 10px 40px;
  border: none;
  border-radius: 40px;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.White};
  color: ${({ theme }) => theme.colors.VeryDarkCyan};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  box-shadow: 0px 1px 12px -4px rgba(0, 37, 46, 0.32);
  -webkit-box-shadow: 0px 1px 12px -4px rgba(0, 37, 46, 0.32);
  -moz-box-shadow: 0px 1px 12px -4px rgba(0, 37, 46, 0.32);

  &:hover {
    background-color: ${({ theme }) => theme.colors.VeryPaleCyan};
  }

  @media ${({ theme }) => theme.breakpoints.extraLarge} {
    font-size: 3rem;
    padding: 10px 60px;
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    margin-top: 1rem;
  }
`;
