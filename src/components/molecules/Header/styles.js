import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  background-color: #f0f0f0;
  box-shadow: 0px 3px 8px #00000029;
  position: fixed;
  width: 100%;
`;

export const Content = styled.header`
  margin: auto;
  max-width: 1200px;
  text-align: center;
  width: 100%;

  div, nav {
    align-items: center;
    display: flex;
    justify-content: center;
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

export const StyledLink = styled(Link)`
  border-bottom: ${ (props) => props.$isCurrentPath ? '3px solid black' : ''};
  opacity: ${ (props) => props.$isCurrentPath ? 1 : 0.6};
`