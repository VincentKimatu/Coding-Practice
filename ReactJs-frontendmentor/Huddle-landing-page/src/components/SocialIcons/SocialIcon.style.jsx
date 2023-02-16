import styled from 'styled-components';

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    list-style: none;
  }

  a {
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 25px;
    width: 25px;
    text-decoration: none;
    font-size: 12px;
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    margin: 2rem 0;
  }
`;
