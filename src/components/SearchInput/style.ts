import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export const Container = styled.form`
  background-color: var(--third-color);
  display: flex;
  align-items: center;

  input {
    background-color: var(--third-color);
    color: var(--first-color);
    font-weight: bold;
    border: none;
    padding-left: 15px;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: grey;
      font-weight: bold;
    }
    :-ms-input-placeholder {
      color: grey;
      font-weight: bold;
    }
  }
  button {
    padding: 10px;
    background-color: transparent;
    display: flex;
  }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  color: var(--first-color);
  font-size: 20px;
`;
