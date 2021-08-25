import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f6f6f6;
  border-radius: 8px;
  box-shadow: 0 1px 8px 2px #00000029;
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 220px;
  min-width: 220px;
  padding: 20px;
  

  img {
    margin: 0 auto;
    border-radius: 5px;
  }

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 3px;
    justify-content: center;
    margin-top: 5px;
  }

  button {
    background-color: transparent;
    margin-top: 5px;
    padding: 5px 0;
    &:hover {
      background-color: #ddd;
    }
  }

`;
