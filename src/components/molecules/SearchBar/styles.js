import styled from "styled-components";

export const StyledSearchBar = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #dcdcdc;
  border-radius: 30px;
  margin: 18px auto;
  min-width: 340px;
  width: 30%;

  &:hover {
    box-shadow: 1px 1px 8px 1px #dcdcdc;
  }

  &:focus-within {
    box-shadow: 1px 1px 8px 1px #dcdcdc;
    outline: none;
  }

  input {
    border: none;
    border-radius: 30px;
    height: 45px;
    font-size: 16px;
    outline: none;
    text-align: center;
    width: 100%;
  }
`