import styled from '@emotion/styled';

export const Searchbar = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .message {
    display: flex;
    align-items: center;
    font-size: 20px;
    padding-left: 10px;
    width: 600px;
    height: 50px;
    background-color: #fff;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .searchbar-form {
    display: flex;
    align-items: center;
    width: 600px;
    background-color: #fff;
    border-radius: 8px;
  }

  .searchbar-button {
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 0;
    background-color: transparent;
    opacity: 0.8;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    &:hover {
      opacity: 1;
    }
  }

  .searchbar-input {
    display: inline-block;
    width: 100%;
    height: 50px;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
    &::placeholder {
      font: inherit;
      font-size: 18px;
    }
  }
`;
