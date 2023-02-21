import styled from "styled-components";

export const Container = styled.div`
  display: block;
`;

export const Content = styled.div`
  background-color: var(--fourth-color);
  text-align: center;
  margin: 10px 0 0 20px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  flex-wrap: wrap;
  flex: 1;

  h1 {
    display: block;
    width: 100%;
    padding: 20px;
    color: var(--first-color);

    span {
      color: var(--second-color);
    }
  }
`;

export const AnimeData = styled.nav`
  padding: 8px;
  div {
    margin-top: 10px;
    display: flex;
    justify-content: start;
    align-items: flex-start;
    margin-bottom: 10px;
    width: 150px;

    h3 {
      font-size: 14px;
      color: var(--first-color);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  span {
    color: var(--second-color);
    font-weight: bold;
  }
  p {
    color: var(--second-color);
    font-weight: bold;
    font-size: 12px;
  }
  img {
    width: 150px;
    height: 230px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  font-size: 20px;
  color: var(--second-color);
  font-weight: bold;
`;

export const ReturnButton = styled.div`
  width: 40%;

  button {
    border-radius: 5px;
    padding: 20px;
    font-size: 16px;
    color: var(--first-color);
    background-color: var(--fourth-color);
    font-weight: bold;

    :hover {
      background-color: #41699b;
    }
  }
`;

export const ButtonPages = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;

  button {
    border-radius: 5px;
    padding: 20px;
    font-size: 16px;
    color: var(--first-color);
    background-color: var(--fourth-color);
    font-weight: bold;

    :hover {
      background-color: #41699b;
    }
  }
`;
