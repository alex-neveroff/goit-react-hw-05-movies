import styled from '@emotion/styled';

export const LoadMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 26px;
  border-radius: 8px;
  background-color: #3f51b5;
  border: none;
  text-decoration: none;
  font-family: inherit;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  width: 180px;
  height: 60px;
  color: #fff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.3);
    scale: 1.1;
  }
`;
