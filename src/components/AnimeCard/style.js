import styled from "styled-components";

export const AnimeData = styled.nav`
  padding: 10px;

  div {
    display: flex;
    justify-content: start;
    align-items: flex-start;
    margin-bottom: 10px;
    width: 180px;
    h3 {
      margin-left: 15px;
      font-size: 14px;
      color: var(--first-color);
    }
  }
  span {
    color: var(--second-color);
    font-weight: bold;
  }
  p {
    font-size: 18px;
    font-weight: bold;
    font-size: 12px;
  }

  img {
    width: 160px;
    height: 230px;
  }
`;
