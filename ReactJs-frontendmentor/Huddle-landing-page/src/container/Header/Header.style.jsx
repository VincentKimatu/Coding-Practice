import styled from 'styled-components';
import { bgHeroDesktop, bgHeroMobile } from '../../assets/images/images';

export const StyledSection = styled.section`
  padding: 3rem 5rem;
  background-image: url(${bgHeroDesktop});
  background-color: ${({ theme }) => theme.colors.VeryPaleCyan};

  @media ${({ theme }) => theme.breakpoints.mobile} {
    background-image: url(${bgHeroMobile});
    padding: 1rem 2rem;
  }
`;
