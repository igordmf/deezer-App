import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f0f0f0;
  border-top: 1px solid #ccc;
  bottom: 0;
  height: 70px;
  position: fixed;
  width: 100vw;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  height: 70px;
  justify-content: space-evenly;
  margin: 0 auto;
  /* min-width: 320px;
  max-width: 100vw; */
  width: 400px;

  @media(max-width: 400px) {
    width: 100vw;
  }

  img {
    border-radius: 10px;
    height: 55px;
  }

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* margin-left: 20px; */
    /* width: 17%; */

    @media(max-width: 400px) {
        width: 75%;
    }
    
    span {
      margin: 0 auto -8px;
      text-overflow: ellipsis;
      z-index: 1;

      @media(max-width: 326px) {
        margin-left: -35px;
      }
    }

    audio {
      height: 45px;

      @media(max-width: 400px) {
        width: 100%;
      }
    }
  }

`;