import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Container, Content } from './styles';

function Footer() {
  const [urlTrack, setUrlTrack] = useState('');
  const {
    title,
    preview, 
    album: { cover, title: albumTitle }, 
    artist: { name }
  } = useSelector((state) => state.musicsReducer.playingTrack);
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.volume = 0.3;
  }, [])

  useEffect(() => {
    const updateTrack = async (preview) => {
      setUrlTrack(preview);
      if(audioRef.current) {
        audioRef.current.pause();
        audioRef.current.load();
        try {
          await audioRef.current.play();
        } catch(err) {
          console.log(err);
        }
      }
    };
    if(preview) {
      updateTrack(preview);
    };
  }, [preview]);

  return (
    <Container>
      <Content>
        <img src={ cover } alt={ albumTitle } />
        <div>
          <span>{title ? `${title} · ${name}` : ''}</span>
          <audio controls name="media" ref={ audioRef }>
            <source
              src={ urlTrack }
              type="audio/mpeg"
            />
          </audio>
        </div>
      </Content>
    </Container>
  )
}

export default Footer;
