import styled from '@emotion/styled';

export const CastGallery = styled.ul`
  .title {
    font-size: 30px;
    text-align: center;
    margin-bottom: 40px;
    text-transform: uppercase;
  }

  .cast-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .cast-item {
    width: calc((100% - 80px) / 6);
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: #fff;
    border-radius: 8px;
  }
  .actor-text {
    font-size: 16px;
    padding-left: 5px;
  }
`;
