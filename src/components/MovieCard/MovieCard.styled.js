import styled from '@emotion/styled';

export const MovieDetailsCard = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 30px;
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;

  .card-poster {
    max-height: 750px;
    height: 100%;
    border-radius: 8px;
  }

  .card-wrap {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .card-text {
    font-size: 20px;
  }

  .card-title {
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
  }
  .card-subtitle {
    font-size: 24px;
  }
`;

export const CastReviewsCard = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 20px;
`;
