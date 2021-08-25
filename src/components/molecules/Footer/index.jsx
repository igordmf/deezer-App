import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Container, Content } from './styles';

function Footer() {
  const [urlTrack, setUrlTrack] = useState('');
  const { preview } = useSelector((state) => state.musicsReducer.playingTrack);
  const audioRef = useRef();
  console.log(typeof preview);

  useEffect(() => {
    const updateTrack = (preview) => {
      setUrlTrack(preview);
      if(audioRef.current) {
        audioRef.current.pause();
        audioRef.current.load();
        audioRef.current.play();
      }
    };
    updateTrack(preview);
  }, [preview]);

  return (
    <Container>
      <Content>
        <audio controls autoPlay name="media" ref={ audioRef }>
          <source
            src={ urlTrack }
            type="audio/mpeg"
          />
        </audio>
      </Content>
    </Container>
  )
}

export default Footer;
