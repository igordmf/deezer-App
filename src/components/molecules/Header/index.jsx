import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Content } from './styles'
import logo from '../../../images/deezer-logo.png';

function Header() {
  return (
    <Container>
      <Content>
        <div>
          <span>Deezer App</span>
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/musicas'>Musicas Favoritas</Link>
        </div>
      </Content>
    </Container>
  )
}

export default Header
