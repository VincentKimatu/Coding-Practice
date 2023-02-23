import styled from 'styled-components';
import { bgCurveDesktop, bgCurveMobile } from '../../assets/images/images';

export const BodySection = styled.section`
  padding: 10rem 5rem 7rem 5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;

  background-image: url(${bgCurveDesktop});
  background-repeat: no-repeat;
  background-size: 300% 100%;
  background-position-x: center;

  @media ${({ theme }) => theme.breakPoints.mobile} {
    flex-direction: column-reverse;
    /* padding: 1.5rem; */
    padding: 1.5rem 1.5rem 5rem 1.5rem;

    background-image: url(${bgCurveMobile});
    background-size: 400% 100%;
  }
`;

export const StyledLeftDiv = styled.div`
  flex: 0.7;
  a {
    display: flex;
    align-items: center;
    font-family: ${(props) => props.theme.fonts.openSans};
    font-size: 1.4rem;
    text-decoration: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.ModerateCyan};
    color: ${({ theme }) => theme.colors.ModerateCyan};
    width: max-content;

    margin-bottom: 3rem;
    svg {
      width: 24px;
      font-size: 1.4rem;
    }
  }

  @media ${({ theme }) => theme.breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const StyledLeftImageDiv = styled.div`
  flex: 0.7;
  img {
    width: 100%;
  }

  @media ${({ theme }) => theme.breakPoints.mobile} {
    margin-top: 4rem;
  }
`;
