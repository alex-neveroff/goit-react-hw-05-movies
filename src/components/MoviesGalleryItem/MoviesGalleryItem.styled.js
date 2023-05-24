import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  cursor: pointer;
  border-radius: 5px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: calc((100% - 48px) / 4);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  overflow: hidden;
  background-color: #fff;

  &:active {
    transform: scale(0.97);
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.16),
      15px 15px 15px rgba(0, 0, 0, 0.16), 15px -15px 15px rgba(0, 0, 0, 0.16),
      -15px 15px 15px rgba(0, 0, 0, 0.16);
  }

  &:hover {
    &:hover {
      transform: scale(1.03);
    }
  }

  .movie-poster {
    border-radius: 5px;
    margin-bottom: 10px;
    width: 300px;
    height: 450px;
  }

  .movie-title {
    text-transform: uppercase;
    margin-bottom: 7px;
    font-size: 16px;
    line-height: 1.16;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 5px;
  }

  .movie-year {
    margin-bottom: 7px;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.16;
    padding-left: 5px;
  }
`;
