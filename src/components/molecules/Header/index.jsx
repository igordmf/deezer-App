import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <span>Deezer App</span>
      <Link to='/'>Home</Link>
      <Link to='/musicas'>Musicas Favoritas</Link>
    </header>
  )
}

export default Header
