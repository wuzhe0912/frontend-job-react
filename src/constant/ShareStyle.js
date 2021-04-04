import styled from 'styled-components';
import { MEDIA_QUERY_MD } from 'constant/BreakPoint';

export const Wrapper = styled.article`
  display: flex;
  justify-content: space-around;

  ${MEDIA_QUERY_MD} {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  width: 500px;
  height: 100%;

  ${MEDIA_QUERY_MD} {
    width: 90%;
    margin: 0 auto;
  }
`;
