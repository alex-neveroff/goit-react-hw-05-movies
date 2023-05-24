import styled from '@emotion/styled';

export const Container = styled.div`
  width: 1280px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto 50px;

  .header {
    width: 100%;
    height: 80px;
    background-color: #ff7f7f;
    margin-bottom: 15px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    gap: 150px;
  }

  .logo {
    font-size: 36px;
    font-weight: bold;
    font-style: italic;
  }

  .navigation {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 50px;
  }

  .menu {
    cursor: pointer;
    font-size: 26px;
    font-weight: bold;
    width: 120px;
    padding: 25px 0;
    text-align: center;

    &:hover {
      box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.3);
    }

    &.active {
      color: darkblue;
    }
  }

  .page-title {
    text-align: center;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
`;
