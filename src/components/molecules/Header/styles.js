import styled from 'styled-components';

export const Container = styled.header`
  background-color: #f0f0f0;
  width: 100%;
`;

export const Content = styled.header`
  margin: auto;
  max-width: 1200px;
  text-align: center;
  width: 100%;

  div {
    align-items: center;
    justify-content: center;
    display: flex;
  };

  span { 
    font-size: 3rem;
    font-weight: bold;
  };

  img {
    margin: 5px 5px 0;
    width: 60px;
  }
  
  a {
      color: black;
      font-size: 1.5rem;
      margin: 15px 15px;
      text-decoration: none;
    };
`;

