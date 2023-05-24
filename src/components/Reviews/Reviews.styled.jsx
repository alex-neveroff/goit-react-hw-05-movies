import styled from '@emotion/styled';

export const StyledReviews = styled.div`
  .title {
    font-size: 30px;
    text-align: center;
    margin-bottom: 40px;
    text-transform: uppercase;
  }

  .reviews-list {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .review-item {
    display: flex;
    gap: 50px;
    box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16);
    padding: 15px;
    background-color: #fff;
    border-radius: 8px;
  }

  .author-wrap {
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  .author-name {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }

  .author-text {
    font-size: 20px;
    width: 1000px;
  }
`;
