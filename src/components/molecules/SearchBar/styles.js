import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 18px auto;
  width: 50%;
  /* background-color: red; */

  @media(max-width: 320px) {
    margin-top: 120px;
  }

  >div:nth-child(2) {
    /* background-color: red; */
    display: flex;
    flex-wrap: nowrap;
    margin: 0;

    select {
      background-color: #f0f0f0;
      border: 1px solid #dcdcdc;
      border-radius: 15px;
      height: 45px;
      font-size: 16px;
      margin: 0 10% 0 0;
  
      option {
        
      }
    }
    
    button {
      background-color: #dcdcdc;
      border: 1px solid #f0f0f0;
      border-radius: 15px;
      width: 100%;
    }

    div {
      background-color: #f0f0f0;
      border: 1px solid #f0f0f0;
      border-radius: 15px;
      width: 100%;
    }
  }
`

export const StyledSearchBar = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #dcdcdc;
  border-radius: 30px;
  margin: 18px auto;
  min-width: 340px;
  width: 60%;

  /* @media(max-width: 320px) {
    margin-top: 120px;
  } */

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