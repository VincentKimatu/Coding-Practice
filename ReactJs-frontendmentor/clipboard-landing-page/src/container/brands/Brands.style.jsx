import styled from 'styled-components';

export const StyledBrandSection = styled.section`
  display: flex;
  justify-content: center;
  margin: 10rem 0;
`;

export const BrandContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;

  @media ${(props) => props.theme.breakPoints.mobile} {
    flex-direction: column;
    /* gap: 5rem; */
  }
`;

export const ImageContainer = styled.div`
  max-width: 40rem;
  max-height: 90px;
  img {
    width: 100%;
  }
`;
