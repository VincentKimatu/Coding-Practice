import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.GrayishBlue};

  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 4rem 5rem;
  margin-top: 10rem;

  img {
    width: 7rem;
  }

  @media ${(props) => props.theme.breakPoints.mobile} {
    flex-direction: column;
    img {
      width: 5rem;
    }
  }
`;

export const StyledLinks = styled.ul`
  display: flex;
  list-style: none;
  margin-right: 10rem;
  font-size: 1.6rem;
  gap: 5rem;

  li {
    color: ${(props) => props.theme.colors.DarkGrayishBlue};
    font-weight: 600;
    padding: 0.5rem 0;
    transition: all 300ms ease-in-out;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.colors.StrongCyan};
    }
  }

  @media ${(props) => props.theme.breakPoints.tablet} {
    margin-right: 3rem;
  }

  @media ${(props) => props.theme.breakPoints.mobile} {
    font-size: 1.4rem;
    flex-direction: column;
    gap: 0;
    padding: 2rem 0;
    margin-right: 0;

    li {
      text-align: center;
    }
  }
`;

export const SocialsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    transition: all 300ms ease-in-out;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.colors.StrongCyan};
    }
  }
`;
