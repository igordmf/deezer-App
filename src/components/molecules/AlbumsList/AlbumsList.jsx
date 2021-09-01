import React from 'react';
import Album from '../../atoms/Album';
import { Container, Content } from './styles';

function AlbumsList(props) {
  const { albums, favoriteFunction, favoriteBtnText, localStorageFunction } = props;

  return (
    <Container>
      <Content>
        {albums.map((album) => (
          <Album
            album={ album } 
            favoriteFunction={ favoriteFunction }  
            favoriteBtnText={ favoriteBtnText }
            localStorageFunction= { localStorageFunction }
            key={ album.id }
          />
        ))}
      </Content>
    </Container>
  )
}

export default AlbumsList;
