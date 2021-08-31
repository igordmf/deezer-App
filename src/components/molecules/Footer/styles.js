import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f0f0f0;
  border-top: 1px solid #ccc;
  bottom: 0;
  height: 70px;
  position: fixed;
  width: 100%;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  height: 70px;
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
    width: 17%;
    
    span {
      /* bottom: 3.8vh; */
      margin: 0 auto -8px;
      /* position: fixed; */
      z-index: 1;
    }

    audio {
      height: 45px;
    }
  }

`;