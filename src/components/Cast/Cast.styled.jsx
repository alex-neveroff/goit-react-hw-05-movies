import styled from '@emotion/styled';

export const CastGallery = styled.ul`
  .title {
    font-size: 30px;
    text-align: center;
    margin-bottom: 40px;
  }

  .cast-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .cast-item {
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .actor-text {
    font-size: 16px;
  }
`;
