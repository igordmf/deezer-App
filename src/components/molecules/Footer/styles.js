import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f0f0f0;
  border-top: 1px solid #ccc;
  bottom: 0;
  height: 60px;
  position: fixed;
  width: 100%;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: center;

  img {
    border-radius: 10px;
    height: 55px;
  }

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    span {
      bottom: 3.8vh;
      margin: 0 auto;
      position: fixed;
      z-index: 1;
    }
  }

`;