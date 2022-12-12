import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--fourth-color);
  margin: 10px 0 0 20px;
  display: grid;
  width: 100%;
  max-height: 730px;
  grid-template-columns: 1fr;
  flex-wrap: wrap;
  padding: 20px;

  ul {
    max-height: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 0 40px 40px 40px;

    li {
      padding: 3px;
    }
  }

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

  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 10px;
  }
  span {
    display: none;
  }

  a {
    color: var(--first-color);

    :hover {
      color: var(--second-color);
    }
  }
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
