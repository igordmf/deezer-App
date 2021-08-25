import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Content, StyledLink } from './styles';
import logo from '../../../images/deezer-logo.png';

function Header() {
  const { pathname } = useLocation();
  return (
    <Container>
      <Content>
        <div>
          <span>Deezer App</span>
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <StyledLink $isCurrentPath={ pathname === '/' } to='/'>Home</StyledLink>
          <StyledLink $isCurrentPath={ pathname === '/musicas' } to='/musicas'>Musicas Favoritas</StyledLink>
        </div>
      </Content>
    </Container>
  )
}

export default Header
