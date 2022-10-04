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
