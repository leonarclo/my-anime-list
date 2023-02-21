import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    background-color: none;
  } 

  * , button, input {
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  :root {
    --first-color: #ececec;
    --second-color: #9fd3c7;
    --third-color: #385170; 
    --fourth-color: #142d4c; 
  }
  body {
    background-color: var(--third-color);
  }
`;

export const Loading = styled.div`
  width: 100vh;
  height: 600px;
  max-height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  h4 {
    font-size: 30px;
    color: var(--fourth-color);
  }
`;
