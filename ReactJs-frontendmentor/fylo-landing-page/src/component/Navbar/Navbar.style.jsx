import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;

  div {
    width: 100px;
    img {
      width: 100%;
    }
  }

  @media ${({ theme }) => theme.breakPoints.mobile} {
    div {
      width: 80px;
    }
  }
`;

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  li {
    &:nth-child(2) {
      margin: 0 5rem;
    }
    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.VeryDarkBlue};
      font-size: 1.6rem;
      font-family: ${(props) => props.theme.fonts.Raleway};
      font-weight: 400;
      transition: all 300ms ease-in-out;
      &:hover {
        color: ${(props) => props.theme.colors.DesaturatedBlue};
      }
    }
  }

  @media ${({ theme }) => theme.breakPoints.mobile} {
    li {
      &:nth-child(2) {
        margin: 0 2rem;
      }
      a {
        font-size: 1.4rem;
      }
    }
  }
`;

export const StyledSingInBtn = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.colors.VeryDarkBlue};
  border: 2px solid #fff;
  font-size: 1.6rem;
  font-family: ${(props) => props.theme.fonts.Raleway};
  font-weight: 400;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  padding: 1rem 2rem;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.LightGray};
    border-radius: 5px;
    color: ${(props) => props.theme.colors.DesaturatedBlue};
  }

  @media ${({ theme }) => theme.breakPoints.mobile} {
    font-size: 1.4rem;
    padding: 0;
  }
`;
