import styled from "styled-components";

export const Container = styled.aside`
  background-color: var(--fourth-color);
  max-width: 40%;
  margin-top: 10px;
  padding: 20px;
  color: var(--first-color);

  h2 {
    color: var(--first-color);
    font-size: 20px;
    margin-bottom: 10px;
    text-align: center;
  }

  hr {
    height: 2px;
    background-color: var(--second-color);
    margin-bottom: 20px;
  }
`;

export const TopAnime = styled.div`
  display: flex;
  gap: 10px;

  span {
    font-size: 14px;
    font-weight: bold;
    color: var(--second-color);
  }

  img {
    width: 20%;
    max-height: 110px;
    object-fit: contain;
    margin-bottom: 20px;
  }

  div {
    overflow: hidden;

    h3 {
      font-size: 14px;
      margin-bottom: 10px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    p {
      font-size: 12px;
    }
  }
`;
