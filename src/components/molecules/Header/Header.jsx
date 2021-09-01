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
        <nav>
          <StyledLink $isCurrentPath={ pathname === '/' } to='/'>Home</StyledLink>
          <StyledLink $isCurrentPath={ pathname === '/playlist' } to='/playlist'>Playlist</StyledLink>
          <StyledLink $isCurrentPath={ pathname === '/musicas' } to='/musicas'>Músicas Favoritas</StyledLink>
          <StyledLink $isCurrentPath={ pathname === '/artistas' } to='/artistas'>Artistas Favoritos</StyledLink>
          <StyledLink $isCurrentPath={ pathname === '/albuns' } to='/albuns'>Álbuns Favoritos</StyledLink>
        </nav>
      </Content>
    </Container>
  )
}

export default Header;
