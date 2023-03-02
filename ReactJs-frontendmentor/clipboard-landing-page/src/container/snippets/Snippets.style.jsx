import styled from 'styled-components';

export const StyledSnippetsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.breakPoints.mobile} {
    padding: 0 1.5rem;
  }
`;

export const StyledSnippetsContainer = styled.section`
  display: flex;
  margin-top: 5rem;
  margin-bottom: 2rem;
  align-items: center;

  @media ${(props) => props.theme.breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  left: -180px;

  img {
    width: 90%;
  }

  @media ${(props) => props.theme.breakPoints.tablet} {
    left: -80px;
  }

  @media ${(props) => props.theme.breakPoints.mobile} {
    left: 0;
    display: flex;
    justify-content: center;
  }
`;

export const PropertiesContainer = styled.div`
  max-width: 320px;
  position: relative;
  left: -180px;
  top: -3rem;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.breakPoints.tablet} {
    left: -80px;
  }

  @media ${(props) => props.theme.breakPoints.mobile} {
    left: 0;
    top: 0;
  }
`;
