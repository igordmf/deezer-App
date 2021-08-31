import React from 'react';
import Artist from '../../atoms/Artist';
import { Container, Content } from './styles';

function ArtistsList(props) {
  const { artists, favoriteFunction, favoriteBtnText, localStorageFunction } = props;

  return (
    <Container>
      <Content>
        {artists.map((artist) => (
          <Artist
            artist={ artist } 
            favoriteFunction={ favoriteFunction }  
            favoriteBtnText={ favoriteBtnText }
            localStorageFunction= { localStorageFunction }
            key={ artist.id }
          />
        ))}
      </Content>
    </Container>
  )
}

export default ArtistsList;
