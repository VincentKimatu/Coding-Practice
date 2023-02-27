import styled from 'styled-components';

export const SectionFooter = styled.footer`
  padding: 3rem 5rem;
  background-color: ${({ theme }) => theme.colors.VeryDarkBlue};
  color: ${({ theme }) => theme.colors.White};

  display: flex;
  flex-direction: column;

  img {
    width: 150px;
  }

  @media ${({ theme }) => theme.breakPoints.mobile} {
    padding: 1.5rem;
    img {
      margin-top: 2rem;
    }
  }
`;

export const StyledUL = styled.ul`
  list-style: none;
  width: 350px;

  li {
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.colors.BrightBlue};
    }
  }

  @media ${({ theme }) => theme.breakPoints.mobile} {
    width: 250px;
    margin-top: 2rem;
  }
`;

export const StyledFooter = styled.div`
  display: flex;
  margin-top: 1rem;
  font-family: ${({ theme }) => theme.fonts.openSans};
  font-weight: 400;
  font-size: 1.4rem;

  @media ${({ theme }) => theme.breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const StyledContact = styled.div`
  width: 350px;
  p {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    svg {
      width: 15px;
      margin-right: 1rem;
    }
  }

  @media ${({ theme }) => theme.breakPoints.mobile} {
    width: 250px;
  }
`;

export const StyledIconContainer = styled.div`
  display: flex;
  gap: 1rem;
  div {
    width: 30px;
    height: 30px;
    border: 1px solid ${({ theme }) => theme.colors.White};
    border-radius: 50%;
    display: grid;
    place-items: center;
    transition: all 300ms ease-in-out;
    cursor: pointer;

    svg {
      font-size: 1.6rem;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.BrightBlue};
      border: 1px solid ${({ theme }) => theme.colors.BrightBlue};
    }
  }

  @media ${({ theme }) => theme.breakPoints.mobile} {
    justify-content: center;
    margin: 2rem 0;
  }
`;
