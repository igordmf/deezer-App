import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: (100vh - 128px);
  justify-content: center;
  padding: 128px 0 60px 0;

  >div {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    margin: 20px auto;
    max-width: 1200px;
  }
`;