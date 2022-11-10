import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--fourth-color);
  text-align: center;
  margin: 10px 0 0 20px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  flex-wrap: wrap;

  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 10px;
  }
  span {
    display: none;
  }

  p {
    color: var(--second-color);
  }
`;

export const TitleRecommendations = styled.h2`
  display: block;
  text-transform: uppercase;
  width: 100%;
  padding: 20px;
  color: var(--second-color);
`;

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
