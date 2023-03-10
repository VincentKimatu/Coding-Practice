import styled from 'styled-components';

export const ClipboardSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
  margin-top: 10rem;

  @media ${(props) => props.theme.breakPoints.mobile} {
    gap: 5rem;
    margin-top: 6rem;
  }
`;

export const StyledImage = styled.div`
  width: 70vw;
  img {
    width: 100%;
  }

  @media ${(props) => props.theme.breakPoints.mobile} {
    width: 90vw;
  }
`;
