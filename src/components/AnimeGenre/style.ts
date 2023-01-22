import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--fourth-color);
  margin: 10px 0 0 20px;
  width: 100%;
  max-height: 730px;
  flex-wrap: wrap;
  padding: 20px;

  ul {
    max-height: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 0 40px 40px 40px;

    li {
      padding: 4px;
      color: var(--first-color);
      cursor: pointer;

      :hover {
        color: var(--second-color);
      }
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

  a {
    color: var(--first-color);

    :hover {
      color: var(--second-color);
    }
  }
`;
